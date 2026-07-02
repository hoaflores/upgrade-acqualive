import { useEffect, useRef, useState } from "react";
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
import { Loader2, Pencil, Trash2, Plus, LogOut, Search, Eye, EyeOff, MapPin, Upload, Users, Shield, Check, X, Crown } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ImportarPlanilha from "@/components/admin/ImportarPlanilha";

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

interface ProfileRow {
  id: string;
  nome: string;
  funcao: string | null;
  email: string;
  aprovado: boolean;
  is_master: boolean;
  created_at: string;
  roles?: string[];
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

async function geocodeCidade(cidade: string, estado: string): Promise<{ lat: number; lng: number } | null> {
  const q = encodeURIComponent(`${cidade}, ${estado}, Brasil`);
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br&q=${q}`;
  try {
    const res = await fetch(url, { headers: { "Accept-Language": "pt-BR" } });
    const arr = await res.json();
    if (Array.isArray(arr) && arr[0]?.lat && arr[0]?.lon) {
      return { lat: parseFloat(arr[0].lat), lng: parseFloat(arr[0].lon) };
    }
  } catch {}
  return null;
}

export default function AdminFranqueados() {
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [myRoles, setMyRoles] = useState<string[]>([]);
  const [checking, setChecking] = useState(true);

  // Auth mode
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [signupNome, setSignupNome] = useState("");
  const [signupFuncao, setSignupFuncao] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loginBusy, setLoginBusy] = useState(false);

  const [items, setItems] = useState<Franqueado[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [geocoding, setGeocoding] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<ProfileRow[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  const isAdmin = myRoles.includes("admin");
  const canAccess = profile?.aprovado && (isAdmin || myRoles.includes("operador"));

  const loadMe = async (uid: string) => {
    const [{ data: prof }, { data: roles }] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", uid).maybeSingle(),
      supabase.from("user_roles").select("role").eq("user_id", uid),
    ]);
    setProfile((prof as ProfileRow) ?? null);
    setMyRoles((roles ?? []).map((r: any) => r.role));
  };

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange(async (_e, s) => {
      setSession(s);
      if (s) await loadMe(s.user.id);
      else { setProfile(null); setMyRoles([]); }
    });
    supabase.auth.getSession().then(async ({ data }) => {
      setSession(data.session);
      if (data.session) await loadMe(data.session.user.id);
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

  const loadUsers = async () => {
    setLoadingUsers(true);
    const { data: profs, error } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast.error(error.message);
      setLoadingUsers(false);
      return;
    }
    const ids = (profs ?? []).map((p: any) => p.id);
    let rolesByUser: Record<string, string[]> = {};
    if (ids.length) {
      const { data: rs } = await supabase.from("user_roles").select("user_id, role").in("user_id", ids);
      (rs ?? []).forEach((r: any) => {
        rolesByUser[r.user_id] = [...(rolesByUser[r.user_id] ?? []), r.role];
      });
    }
    setUsers((profs ?? []).map((p: any) => ({ ...p, roles: rolesByUser[p.id] ?? [] })) as ProfileRow[]);
    setLoadingUsers(false);
  };

  useEffect(() => {
    if (canAccess) load();
    if (isAdmin) loadUsers();
  }, [canAccess, isAdmin]);

  const doLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email: loginEmail, password: loginPass });
    setLoginBusy(false);
    if (error) toast.error(error.message);
  };

  const doSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupNome.trim() || !signupFuncao.trim()) {
      toast.error("Preencha nome e função.");
      return;
    }
    setLoginBusy(true);
    const { data, error } = await supabase.auth.signUp({
      email: loginEmail,
      password: loginPass,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/franqueados`,
        data: { nome: signupNome, funcao: signupFuncao },
      },
    });
    if (error) {
      setLoginBusy(false);
      toast.error(error.message);
      return;
    }
    // Se já tem sessão (auto-confirm), cria perfil já
    if (data.session) {
      await supabase.rpc("criar_meu_perfil", { _nome: signupNome, _funcao: signupFuncao });
    }
    setLoginBusy(false);
    toast.success("Cadastro enviado! Aguarde a aprovação de um administrador.");
    setAuthMode("login");
  };

  const doLogout = async () => {
    await supabase.auth.signOut();
  };

  // Franqueado handlers
  const openNew = () => { setEditingId(null); setForm(emptyForm); setDialogOpen(true); };
  const openEdit = (f: Franqueado) => {
    setEditingId(f.id);
    setForm({
      nome: f.nome, cidade: f.cidade, estado: f.estado,
      lat: String(f.lat), lng: String(f.lng),
      whatsapp: f.whatsapp, instagram: f.instagram ?? "", email: f.email ?? "",
      foto: f.foto ?? "", telefone: f.telefone ?? "", observacoes: f.observacoes ?? "",
      ativo: f.ativo,
    });
    setDialogOpen(true);
  };

  const buscarCoordenadas = async () => {
    if (!form.cidade || !form.estado) { toast.error("Preencha cidade e UF antes."); return; }
    setGeocoding(true);
    const r = await geocodeCidade(form.cidade, form.estado);
    setGeocoding(false);
    if (!r) { toast.error("Não encontrei essa cidade."); return; }
    setForm((f) => ({ ...f, lat: r.lat.toFixed(6), lng: r.lng.toFixed(6) }));
    toast.success("Coordenadas preenchidas.");
  };

  const onUploadFoto = async (file: File) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { toast.error("Foto máxima de 5MB."); return; }
    setUploading(true);
    const ext = file.name.split(".").pop() || "jpg";
    const path = `franqueados/${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from("blog-images").upload(path, file, {
      cacheControl: "3600", upsert: false, contentType: file.type,
    });
    if (error) { setUploading(false); toast.error("Falha: " + error.message); return; }
    const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
    setForm((f) => ({ ...f, foto: data.publicUrl }));
    setUploading(false);
    toast.success("Foto enviada.");
  };

  const save = async () => {
    if (!form.nome || !form.cidade || !form.estado || !form.whatsapp) {
      toast.error("Preencha nome, cidade, UF e WhatsApp."); return;
    }
    let lat = parseFloat(form.lat);
    let lng = parseFloat(form.lng);
    if (isNaN(lat) || isNaN(lng)) {
      setSaving(true);
      const r = await geocodeCidade(form.cidade, form.estado);
      if (!r) { setSaving(false); toast.error("Cidade não localizada."); return; }
      lat = r.lat; lng = r.lng;
    }
    const payload = {
      nome: form.nome.trim(), cidade: form.cidade.trim(),
      estado: form.estado.trim().toUpperCase().slice(0, 2),
      lat, lng, whatsapp: form.whatsapp.replace(/\D/g, ""),
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
    if (error) { toast.error("Erro ao salvar: " + error.message); return; }
    toast.success(editingId ? "Franqueado atualizado" : "Franqueado adicionado");
    setDialogOpen(false);
    load();
  };

  const remove = async (f: Franqueado) => {
    if (!confirm(`Remover ${f.nome} (${f.cidade}/${f.estado})?`)) return;
    const { error } = await supabase.from("franqueados").delete().eq("id", f.id);
    if (error) toast.error(error.message);
    else { toast.success("Removido"); load(); }
  };

  const toggleAtivo = async (f: Franqueado) => {
    const { error } = await supabase.from("franqueados").update({ ativo: !f.ativo }).eq("id", f.id);
    if (error) toast.error(error.message);
    else load();
  };

  // Users handlers
  const setUserRole = async (u: ProfileRow, role: "admin" | "operador") => {
    if (u.is_master) { toast.error("Master não pode ter o papel alterado."); return; }
    // Remove all current roles for this user, then add the chosen one
    await supabase.from("user_roles").delete().eq("user_id", u.id);
    const { error } = await supabase.from("user_roles").insert({ user_id: u.id, role });
    if (error) { toast.error(error.message); return; }
    if (!u.aprovado) {
      await supabase.from("profiles").update({ aprovado: true }).eq("id", u.id);
    }
    toast.success(`${u.nome || u.email} agora é ${role}.`);
    loadUsers();
  };

  const toggleAprovado = async (u: ProfileRow) => {
    if (u.is_master) return;
    const { error } = await supabase.from("profiles").update({ aprovado: !u.aprovado }).eq("id", u.id);
    if (error) toast.error(error.message);
    else { toast.success(u.aprovado ? "Acesso revogado" : "Acesso aprovado"); loadUsers(); }
  };

  const removeUser = async (u: ProfileRow) => {
    if (u.is_master) { toast.error("Master não pode ser removido."); return; }
    if (!confirm(`Remover acesso de ${u.nome || u.email}?`)) return;
    await supabase.from("user_roles").delete().eq("user_id", u.id);
    const { error } = await supabase.from("profiles").delete().eq("id", u.id);
    if (error) toast.error(error.message);
    else { toast.success("Removido"); loadUsers(); }
  };

  const filtered = items.filter((f) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return f.nome.toLowerCase().includes(q) || f.cidade.toLowerCase().includes(q) ||
      f.estado.toLowerCase().includes(q) || f.whatsapp.includes(q);
  });

  if (checking) {
    return <div className="min-h-dvh grid place-items-center"><Loader2 className="animate-spin" /></div>;
  }

  // Login / signup screen
  if (!session) {
    return (
      <>
        <Helmet><title>Admin Franqueados · Acqualive</title><meta name="robots" content="noindex,nofollow" /></Helmet>
        <main className="min-h-dvh grid place-items-center px-4 bg-muted/30">
          <Card className="w-full max-w-md p-6">
            <h1 className="text-xl font-semibold mb-1">Painel Admin · Franqueados</h1>
            <p className="text-sm text-muted-foreground mb-6">
              {authMode === "login" ? "Entre com sua conta." : "Solicite um novo acesso."}
            </p>
            <Tabs value={authMode} onValueChange={(v) => setAuthMode(v as any)}>
              <TabsList className="grid grid-cols-2 mb-4 w-full">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="signup">Solicitar acesso</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={doLogin} className="space-y-4">
                  <div>
                    <Label>E-mail</Label>
                    <Input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                  </div>
                  <div>
                    <Label>Senha</Label>
                    <div className="relative">
                      <Input type={showPass ? "text" : "password"} value={loginPass} onChange={(e) => setLoginPass(e.target.value)} required />
                      <button type="button" onClick={() => setShowPass((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                        {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={loginBusy}>
                    {loginBusy && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}Entrar
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form onSubmit={doSignup} className="space-y-4">
                  <div>
                    <Label>Nome completo *</Label>
                    <Input value={signupNome} onChange={(e) => setSignupNome(e.target.value)} required />
                  </div>
                  <div>
                    <Label>Função na empresa *</Label>
                    <Input value={signupFuncao} onChange={(e) => setSignupFuncao(e.target.value)} placeholder="Ex: Marketing, Suporte, Comercial" required />
                  </div>
                  <div>
                    <Label>E-mail *</Label>
                    <Input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                  </div>
                  <div>
                    <Label>Senha (mín. 6 caracteres) *</Label>
                    <Input type="password" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} minLength={6} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={loginBusy}>
                    {loginBusy && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}Solicitar acesso
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Seu cadastro será revisado por um administrador antes de ter acesso ao painel.
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </main>
      </>
    );
  }

  // Logged in but not approved / no role
  if (!canAccess) {
    return (
      <main className="min-h-dvh grid place-items-center px-4">
        <Card className="max-w-md p-6 text-center space-y-3">
          <Shield className="w-10 h-10 mx-auto text-muted-foreground" />
          <h1 className="text-lg font-semibold">Aguardando aprovação</h1>
          <p className="text-sm text-muted-foreground">
            Sua conta ({session.user.email}) ainda não foi aprovada por um administrador.
            Assim que for liberada, você poderá acessar o painel.
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
      <Helmet><title>Admin Franqueados · Acqualive</title><meta name="robots" content="noindex,nofollow" /></Helmet>
      <main className="min-h-dvh bg-muted/20">
        <header className="border-b bg-white">
          <div className="container flex items-center justify-between py-4">
            <div>
              <h1 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                Franqueados · Painel Admin
                {profile?.is_master && <Crown className="w-4 h-4 text-amber-500" />}
              </h1>
              <p className="text-xs text-muted-foreground">
                {profile?.nome ? `${profile.nome} — ` : ""}{session.user.email} · {myRoles.join(", ") || "sem papel"}
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={doLogout}>
              <LogOut className="w-4 h-4 mr-1" /> Sair
            </Button>
          </div>
        </header>

        <section className="container py-6">
          <Tabs defaultValue="franqueados">
            <TabsList>
              <TabsTrigger value="franqueados">
                <MapPin className="w-4 h-4 mr-1" /> Franqueados
              </TabsTrigger>
              {isAdmin && (
                <TabsTrigger value="acessos">
                  <Users className="w-4 h-4 mr-1" /> Gerenciar acessos
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="franqueados" className="space-y-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Buscar…" value={query} onChange={(e) => setQuery(e.target.value)} className="pl-9" />
                </div>
                <span className="text-xs text-muted-foreground">{filtered.length} de {items.length}</span>
                <div className="ml-auto">
                  <Button onClick={openNew} size="sm"><Plus className="w-4 h-4 mr-1" /> Novo</Button>
                </div>
              </div>

              <Card className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Foto</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Cidade / UF</TableHead>
                      <TableHead>WhatsApp</TableHead>
                      <TableHead>Instagram</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading && <TableRow><TableCell colSpan={7} className="text-center py-8"><Loader2 className="w-5 h-5 animate-spin inline" /></TableCell></TableRow>}
                    {!loading && filtered.length === 0 && <TableRow><TableCell colSpan={7} className="text-center text-sm text-muted-foreground py-8">Nenhum franqueado cadastrado.</TableCell></TableRow>}
                    {filtered.map((f) => (
                      <TableRow key={f.id}>
                        <TableCell>
                          {f.foto ? <img src={f.foto} alt={f.nome} className="w-10 h-10 rounded-full object-cover" />
                            : <div className="w-10 h-10 rounded-full bg-muted grid place-items-center text-xs text-muted-foreground">—</div>}
                        </TableCell>
                        <TableCell className="font-medium">{f.nome}</TableCell>
                        <TableCell>{f.cidade} / {f.estado}</TableCell>
                        <TableCell className="font-mono text-xs">{f.whatsapp}</TableCell>
                        <TableCell>{f.instagram ? `@${f.instagram}` : "—"}</TableCell>
                        <TableCell>
                          <button onClick={() => toggleAtivo(f)}>
                            <Badge variant={f.ativo ? "default" : "secondary"}>{f.ativo ? "Ativo" : "Inativo"}</Badge>
                          </button>
                        </TableCell>
                        <TableCell className="text-right space-x-1">
                          <Button size="icon" variant="ghost" onClick={() => openEdit(f)}><Pencil className="w-4 h-4" /></Button>
                          <Button size="icon" variant="ghost" onClick={() => remove(f)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {isAdmin && (
              <TabsContent value="acessos" className="space-y-4 pt-4">
                <Card className="p-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    Aprove novos cadastros e defina o papel de cada pessoa. <strong>Administrador</strong>: acesso total, incluindo gerenciar outros usuários. <strong>Operador</strong>: só gerencia franqueados.
                  </p>
                </Card>
                <Card className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>E-mail</TableHead>
                        <TableHead>Função</TableHead>
                        <TableHead>Papel</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loadingUsers && <TableRow><TableCell colSpan={6} className="text-center py-8"><Loader2 className="w-5 h-5 animate-spin inline" /></TableCell></TableRow>}
                      {!loadingUsers && users.length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-sm text-muted-foreground py-8">Nenhum cadastro.</TableCell></TableRow>}
                      {users.map((u) => {
                        const currentRole = u.roles?.includes("admin") ? "admin" : u.roles?.includes("operador") ? "operador" : "";
                        return (
                          <TableRow key={u.id}>
                            <TableCell className="font-medium flex items-center gap-2">
                              {u.nome || "—"}
                              {u.is_master && <Crown className="w-3.5 h-3.5 text-amber-500" />}
                            </TableCell>
                            <TableCell className="text-xs">{u.email}</TableCell>
                            <TableCell className="text-xs text-muted-foreground">{u.funcao || "—"}</TableCell>
                            <TableCell>
                              {u.is_master ? (
                                <Badge className="bg-amber-500/90 hover:bg-amber-500">Master</Badge>
                              ) : (
                                <Select value={currentRole} onValueChange={(v) => setUserRole(u, v as any)}>
                                  <SelectTrigger className="w-36 h-8 text-xs">
                                    <SelectValue placeholder="Definir papel" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="admin">Administrador</SelectItem>
                                    <SelectItem value="operador">Operador</SelectItem>
                                  </SelectContent>
                                </Select>
                              )}
                            </TableCell>
                            <TableCell>
                              <Badge variant={u.aprovado ? "default" : "secondary"}>
                                {u.aprovado ? "Aprovado" : "Pendente"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right space-x-1">
                              {!u.is_master && (
                                <>
                                  <Button size="icon" variant="ghost" title={u.aprovado ? "Revogar" : "Aprovar"} onClick={() => toggleAprovado(u)}>
                                    {u.aprovado ? <X className="w-4 h-4 text-destructive" /> : <Check className="w-4 h-4 text-emerald-600" />}
                                  </Button>
                                  <Button size="icon" variant="ghost" onClick={() => removeUser(u)}>
                                    <Trash2 className="w-4 h-4 text-destructive" />
                                  </Button>
                                </>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </section>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90dvh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Editar franqueado" : "Novo franqueado"}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
              <div className="md:col-span-2"><Label>Nome *</Label><Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} /></div>
              <div><Label>Cidade *</Label><Input value={form.cidade} onChange={(e) => setForm({ ...form, cidade: e.target.value })} /></div>
              <div><Label>UF *</Label><Input maxLength={2} value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value.toUpperCase() })} /></div>

              <div className="md:col-span-2 rounded-lg border bg-muted/40 p-3 space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="text-sm">
                    <p className="font-medium">Coordenadas do mapa</p>
                    <p className="text-xs text-muted-foreground">Deixe em branco para localizar automaticamente ao salvar.</p>
                  </div>
                  <Button type="button" variant="outline" size="sm" onClick={buscarCoordenadas} disabled={geocoding}>
                    {geocoding ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <MapPin className="w-4 h-4 mr-1" />}Buscar coordenadas
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label className="text-xs">Latitude</Label><Input value={form.lat} onChange={(e) => setForm({ ...form, lat: e.target.value })} placeholder="-23.5505" /></div>
                  <div><Label className="text-xs">Longitude</Label><Input value={form.lng} onChange={(e) => setForm({ ...form, lng: e.target.value })} placeholder="-46.6333" /></div>
                </div>
              </div>

              <div><Label>WhatsApp * (E.164 sem +)</Label><Input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="5511999990001" /></div>
              <div><Label>Telefone</Label><Input value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} /></div>
              <div><Label>Instagram (sem @)</Label><Input value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} /></div>
              <div><Label>E-mail</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>

              <div className="md:col-span-2 rounded-lg border p-3 space-y-2">
                <Label>Foto do franqueado</Label>
                <div className="flex items-center gap-3">
                  {form.foto ? <img src={form.foto} alt="preview" className="w-16 h-16 rounded-full object-cover border" />
                    : <div className="w-16 h-16 rounded-full bg-muted grid place-items-center text-xs text-muted-foreground">sem foto</div>}
                  <div className="flex-1 space-y-2">
                    <Input value={form.foto} onChange={(e) => setForm({ ...form, foto: e.target.value })} placeholder="URL da foto ou envie um arquivo" />
                    <div>
                      <input ref={fileRef} type="file" accept="image/*" className="hidden"
                        onChange={(e) => { const f = e.target.files?.[0]; if (f) onUploadFoto(f); if (fileRef.current) fileRef.current.value = ""; }} />
                      <Button type="button" size="sm" variant="outline" onClick={() => fileRef.current?.click()} disabled={uploading}>
                        {uploading ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Upload className="w-4 h-4 mr-1" />}Enviar foto
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2"><Label>Observações</Label><Textarea value={form.observacoes} onChange={(e) => setForm({ ...form, observacoes: e.target.value })} rows={3} /></div>
              <label className="md:col-span-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={form.ativo} onChange={(e) => setForm({ ...form, ativo: e.target.checked })} />
                Ativo (aparece no mapa público)
              </label>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
              <Button onClick={save} disabled={saving}>
                {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}
