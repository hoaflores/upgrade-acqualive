import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, Pencil, Trash2, Plus, LogOut, Search, Eye, EyeOff } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Franqueado {
  id: string;
  nome: string;
  cidade: string;
  estado: string;
  lat: number;
  lng: number;
  whatsapp: string;
  instagram: string | null;
  email: string | null;
  foto: string | null;
  telefone: string | null;
  observacoes: string | null;
  ativo: boolean;
  created_at: string;
  updated_at: string;
}

type FormState = Omit<Franqueado, "id" | "created_at" | "updated_at" | "lat" | "lng"> & {
  lat: string;
  lng: string;
};

const emptyForm: FormState = {
  nome: "",
  cidade: "",
  estado: "",
  lat: "",
  lng: "",
  whatsapp: "",
  instagram: "",
  email: "",
  foto: "",
  telefone: "",
  observacoes: "",
  ativo: true,
};

export default function AdminFranqueados() {
  const [session, setSession] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loginBusy, setLoginBusy] = useState(false);

  const [items, setItems] = useState<Franqueado[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange(async (_e, s) => {
      setSession(s);
      if (s) {
        const { data } = await supabase.rpc("has_role", { _user_id: s.user.id, _role: "admin" });
        setIsAdmin(!!data);
      } else {
        setIsAdmin(false);
      }
    });
    supabase.auth.getSession().then(async ({ data }) => {
      setSession(data.session);
      if (data.session) {
        const { data: r } = await supabase.rpc("has_role", { _user_id: data.session.user.id, _role: "admin" });
        setIsAdmin(!!r);
      }
      setChecking(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("franqueados").select("*").order("cidade");
    if (error) toast.error("Erro ao carregar: " + error.message);
    else setItems((data ?? []) as Franqueado[]);
    setLoading(false);
  };

  useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin]);

  const doLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email: loginEmail, password: loginPass });
    setLoginBusy(false);
    if (error) toast.error(error.message);
  };

  const doLogout = async () => {
    await supabase.auth.signOut();
  };

  const openNew = () => {
    setEditingId(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEdit = (f: Franqueado) => {
    setEditingId(f.id);
    setForm({
      nome: f.nome,
      cidade: f.cidade,
      estado: f.estado,
      lat: String(f.lat),
      lng: String(f.lng),
      whatsapp: f.whatsapp,
      instagram: f.instagram ?? "",
      email: f.email ?? "",
      foto: f.foto ?? "",
      telefone: f.telefone ?? "",
      observacoes: f.observacoes ?? "",
      ativo: f.ativo,
    });
    setDialogOpen(true);
  };

  const save = async () => {
    if (!form.nome || !form.cidade || !form.estado || !form.whatsapp || !form.lat || !form.lng) {
      toast.error("Preencha nome, cidade, estado, whatsapp, lat e lng.");
      return;
    }
    const payload = {
      nome: form.nome.trim(),
      cidade: form.cidade.trim(),
      estado: form.estado.trim().toUpperCase().slice(0, 2),
      lat: parseFloat(form.lat),
      lng: parseFloat(form.lng),
      whatsapp: form.whatsapp.replace(/\D/g, ""),
      instagram: form.instagram?.trim() || null,
      email: form.email?.trim() || null,
      foto: form.foto?.trim() || null,
      telefone: form.telefone?.trim() || null,
      observacoes: form.observacoes?.trim() || null,
      ativo: form.ativo,
    };
    setSaving(true);
    const { error } = editingId
      ? await supabase.from("franqueados").update(payload).eq("id", editingId)
      : await supabase.from("franqueados").insert(payload);
    setSaving(false);
    if (error) {
      toast.error("Erro ao salvar: " + error.message);
      return;
    }
    toast.success(editingId ? "Franqueado atualizado" : "Franqueado adicionado");
    setDialogOpen(false);
    load();
  };

  const remove = async (f: Franqueado) => {
    if (!confirm(`Remover ${f.nome} (${f.cidade}/${f.estado})?`)) return;
    const { error } = await supabase.from("franqueados").delete().eq("id", f.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Removido");
      load();
    }
  };

  const toggleAtivo = async (f: Franqueado) => {
    const { error } = await supabase.from("franqueados").update({ ativo: !f.ativo }).eq("id", f.id);
    if (error) toast.error(error.message);
    else load();
  };

  const filtered = items.filter((f) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      f.nome.toLowerCase().includes(q) ||
      f.cidade.toLowerCase().includes(q) ||
      f.estado.toLowerCase().includes(q) ||
      f.whatsapp.includes(q)
    );
  });

  if (checking) {
    return (
      <div className="min-h-dvh grid place-items-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (!session) {
    return (
      <>
        <Helmet>
          <title>Admin Franqueados · Acqualive</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <main className="min-h-dvh grid place-items-center px-4 bg-muted/30">
          <Card className="w-full max-w-md p-6">
            <h1 className="text-xl font-semibold mb-1">Painel Admin · Franqueados</h1>
            <p className="text-sm text-muted-foreground mb-6">Faça login com sua conta administrativa.</p>
            <form onSubmit={doLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="pass">Senha</Label>
                <div className="relative">
                  <Input id="pass" type={showPass ? "text" : "password"} value={loginPass} onChange={(e) => setLoginPass(e.target.value)} required />
                  <button type="button" onClick={() => setShowPass((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loginBusy}>
                {loginBusy && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Entrar
              </Button>
            </form>
          </Card>
        </main>
      </>
    );
  }

  if (!isAdmin) {
    return (
      <main className="min-h-dvh grid place-items-center px-4">
        <Card className="max-w-md p-6 text-center">
          <h1 className="text-lg font-semibold mb-2">Acesso restrito</h1>
          <p className="text-sm text-muted-foreground mb-4">
            Sua conta ({session.user.email}) não tem permissão de administrador.
          </p>
          <Button variant="outline" onClick={doLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Sair
          </Button>
        </Card>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Franqueados · Acqualive</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <main className="min-h-dvh bg-muted/20">
        <header className="border-b bg-white">
          <div className="container flex items-center justify-between py-4">
            <div>
              <h1 className="text-lg md:text-xl font-semibold">Franqueados · Painel Admin</h1>
              <p className="text-xs text-muted-foreground">Logado como {session.user.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={openNew} size="sm">
                <Plus className="w-4 h-4 mr-1" /> Novo
              </Button>
              <Button variant="outline" size="sm" onClick={doLogout}>
                <LogOut className="w-4 h-4 mr-1" /> Sair
              </Button>
            </div>
          </div>
        </header>

        <section className="container py-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar por nome, cidade, estado ou whatsapp…" value={query} onChange={(e) => setQuery(e.target.value)} className="pl-9" />
            </div>
            <span className="text-xs text-muted-foreground">{filtered.length} de {items.length}</span>
          </div>

          <Card className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Cidade / UF</TableHead>
                  <TableHead>WhatsApp</TableHead>
                  <TableHead>Instagram</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      <Loader2 className="w-5 h-5 animate-spin inline" />
                    </TableCell>
                  </TableRow>
                )}
                {!loading && filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-sm text-muted-foreground py-8">
                      Nenhum franqueado encontrado.
                    </TableCell>
                  </TableRow>
                )}
                {filtered.map((f) => (
                  <TableRow key={f.id}>
                    <TableCell className="font-medium">{f.nome}</TableCell>
                    <TableCell>{f.cidade} / {f.estado}</TableCell>
                    <TableCell className="font-mono text-xs">{f.whatsapp}</TableCell>
                    <TableCell>{f.instagram ? `@${f.instagram}` : "—"}</TableCell>
                    <TableCell>
                      <button onClick={() => toggleAtivo(f)}>
                        <Badge variant={f.ativo ? "default" : "secondary"}>
                          {f.ativo ? "Ativo" : "Inativo"}
                        </Badge>
                      </button>
                    </TableCell>
                    <TableCell className="text-right space-x-1">
                      <Button size="icon" variant="ghost" onClick={() => openEdit(f)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" onClick={() => remove(f)}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90dvh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Editar franqueado" : "Novo franqueado"}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
              <div className="md:col-span-2">
                <Label>Nome *</Label>
                <Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
              </div>
              <div>
                <Label>Cidade *</Label>
                <Input value={form.cidade} onChange={(e) => setForm({ ...form, cidade: e.target.value })} />
              </div>
              <div>
                <Label>UF *</Label>
                <Input maxLength={2} value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value.toUpperCase() })} />
              </div>
              <div>
                <Label>Latitude *</Label>
                <Input value={form.lat} onChange={(e) => setForm({ ...form, lat: e.target.value })} placeholder="-23.5505" />
              </div>
              <div>
                <Label>Longitude *</Label>
                <Input value={form.lng} onChange={(e) => setForm({ ...form, lng: e.target.value })} placeholder="-46.6333" />
              </div>
              <div>
                <Label>WhatsApp * (E.164 sem +)</Label>
                <Input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="5511999990001" />
              </div>
              <div>
                <Label>Telefone</Label>
                <Input value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
              </div>
              <div>
                <Label>Instagram (sem @)</Label>
                <Input value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} />
              </div>
              <div>
                <Label>E-mail</Label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="md:col-span-2">
                <Label>Foto (URL)</Label>
                <Input value={form.foto} onChange={(e) => setForm({ ...form, foto: e.target.value })} />
              </div>
              <div className="md:col-span-2">
                <Label>Observações</Label>
                <Textarea value={form.observacoes} onChange={(e) => setForm({ ...form, observacoes: e.target.value })} rows={3} />
              </div>
              <label className="md:col-span-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={form.ativo} onChange={(e) => setForm({ ...form, ativo: e.target.checked })} />
                Ativo (aparece no mapa público)
              </label>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
              <Button onClick={save} disabled={saving}>
                {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}
