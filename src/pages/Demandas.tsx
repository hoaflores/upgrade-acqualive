import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Loader2, Upload, X, CheckCircle2, FileText, Image as ImageIcon, Video, Layout, Sparkles } from "lucide-react";

const SOLICITANTE_PASSWORD = "Acqualive!@#";

const TIPOS = [
  { value: "texto", label: "Texto / Copy", icon: FileText, prazo: 2 },
  { value: "arte", label: "Arte / Design", icon: ImageIcon, prazo: 3 },
  { value: "video", label: "Vídeo", icon: Video, prazo: 7 },
  { value: "pagina", label: "Página / Landing", icon: Layout, prazo: 5 },
  { value: "outro", label: "Outro", icon: Sparkles, prazo: 5 },
];

export default function Demandas() {
  const [auth, setAuth] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [submitted, setSubmitted] = useState<{ protocolo: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    solicitante: "",
    solicitante_email: "",
    emails_extras: "",
    tipo: "",
    tipo_outro: "",
    titulo: "",
    briefing: "",
    links_referencia: "",
    prazo_esperado: "",
    prioridade: "media",
  });
  const [files, setFiles] = useState<File[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginUser.trim().toLowerCase() === "solicitante" && loginPass === SOLICITANTE_PASSWORD) {
      setAuth(true);
    } else {
      toast({ title: "Acesso negado", description: "Usuário ou senha incorretos.", variant: "destructive" });
    }
  };

  const onFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...newFiles].slice(0, 8));
  };

  const removeFile = (i: number) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const tipoSel = TIPOS.find((t) => t.value === form.tipo);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.tipo) {
      toast({ title: "Selecione o tipo de solicitação", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      // Upload anexos
      const anexos: any[] = [];
      for (const f of files) {
        const path = `${Date.now()}-${Math.random().toString(36).slice(2)}-${f.name.replace(/[^\w.-]/g, "_")}`;
        const { error } = await supabase.storage.from("demandas-anexos").upload(path, f);
        if (error) throw error;
        anexos.push({ path, nome: f.name, tipo: f.type, tamanho: f.size });
      }

      const emailsExtras = form.emails_extras
        .split(/[\s,;]+/)
        .map((e) => e.trim())
        .filter((e) => e.includes("@"));

      const { data, error } = await supabase.functions.invoke("criar-demanda", {
        body: {
          password: SOLICITANTE_PASSWORD,
          ...form,
          emails_extras: emailsExtras,
          anexos,
        },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setSubmitted({ protocolo: data.protocolo });
      setForm({
        solicitante: "",
        solicitante_email: "",
        emails_extras: "",
        tipo: "",
        titulo: "",
        briefing: "",
        links_referencia: "",
        prazo_esperado: "",
        prioridade: "media",
      });
      setFiles([]);
    } catch (err: any) {
      toast({ title: "Erro ao enviar", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Helmet>
        <title>Demandas Marketing Acqualive</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500">Acqualive</div>
            <h1 className="text-lg font-semibold text-slate-900">Central de Demandas</h1>
          </div>
          {auth && (
            <Button variant="ghost" size="sm" onClick={() => setAuth(false)}>Sair</Button>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {!auth ? (
          <Card className="p-8 max-w-md mx-auto shadow-xl border-0">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Acesso restrito</h2>
            <p className="text-slate-600 mb-6">Informe o usuário e a senha compartilhada da equipe.</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label>Usuário</Label>
                <Input value={loginUser} onChange={(e) => setLoginUser(e.target.value)} placeholder="solicitante" autoFocus />
              </div>
              <div>
                <Label>Senha</Label>
                <Input type="password" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} />
              </div>
              <Button type="submit" className="w-full">Entrar</Button>
            </form>
          </Card>
        ) : submitted ? (
          <Card className="p-10 text-center shadow-xl border-0">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Demanda registrada</h2>
            <p className="text-slate-600 mb-6">O time de marketing foi notificado e você receberá uma cópia por email.</p>
            <div className="bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-xl p-6 mb-6 inline-block">
              <div className="text-xs uppercase tracking-widest opacity-70">Protocolo</div>
              <div className="text-3xl font-bold">{submitted.protocolo}</div>
            </div>
            <div className="flex gap-3 justify-center">
              <Button onClick={() => setSubmitted(null)}>Nova demanda</Button>
            </div>
          </Card>
        ) : (
          <Card className="p-8 shadow-xl border-0">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Nova solicitação</h2>
            <p className="text-slate-600 mb-6 text-sm">Preencha o briefing com o máximo de contexto possível.</p>

            <form onSubmit={submit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Seu nome *</Label>
                  <Input required value={form.solicitante} onChange={(e) => setForm({ ...form, solicitante: e.target.value })} />
                </div>
                <div>
                  <Label>Seu email *</Label>
                  <Input required type="email" value={form.solicitante_email} onChange={(e) => setForm({ ...form, solicitante_email: e.target.value })} placeholder="voce@acqualive.com.br" />
                  <p className="text-xs text-slate-500 mt-1">Receberá o protocolo e cópia do briefing.</p>
                </div>
              </div>

              <div>
                <Label>Outros emails para acompanhar (opcional)</Label>
                <Input value={form.emails_extras} onChange={(e) => setForm({ ...form, emails_extras: e.target.value })} placeholder="gestor@acqualive.com.br, parceiro@..." />
                <p className="text-xs text-slate-500 mt-1">Separe por vírgula. Receberão a notificação junto do marketing.</p>
              </div>

              <div>
                <Label>Tipo de solicitação *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-2">
                  {TIPOS.map((t) => {
                    const Icon = t.icon;
                    const selected = form.tipo === t.value;
                    return (
                      <button
                        type="button"
                        key={t.value}
                        onClick={() => setForm({ ...form, tipo: t.value })}
                        className={`p-3 rounded-lg border-2 transition-all text-center ${selected ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-400"}`}
                      >
                        <Icon className="w-5 h-5 mx-auto mb-1" />
                        <div className="text-xs font-medium">{t.label}</div>
                      </button>
                    );
                  })}
                </div>
                {tipoSel && (
                  <p className="text-xs text-slate-600 mt-2">Estimativa interna para este tipo: <strong>{tipoSel.prazo} dias úteis</strong>.</p>
                )}
              </div>

              <div>
                <Label>Título da demanda *</Label>
                <Input required value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} placeholder="Ex.: Arte para campanha de Dia das Mães" />
              </div>

              <div>
                <Label>Briefing detalhado *</Label>
                <Textarea required rows={6} value={form.briefing} onChange={(e) => setForm({ ...form, briefing: e.target.value })} placeholder="Objetivo, público, mensagem principal, tom, formato, plataformas, restrições..." />
              </div>

              <div>
                <Label>Links de referência (opcional)</Label>
                <Textarea rows={2} value={form.links_referencia} onChange={(e) => setForm({ ...form, links_referencia: e.target.value })} placeholder="Drive, Figma, YouTube, posts de inspiração..." />
              </div>

              <div>
                <Label>Anexos (opcional, até 8 arquivos)</Label>
                <input ref={fileRef} type="file" multiple onChange={onFiles} className="hidden" />
                <button type="button" onClick={() => fileRef.current?.click()} className="w-full border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-slate-500 hover:bg-slate-50 transition-colors">
                  <Upload className="w-6 h-6 mx-auto mb-2 text-slate-500" />
                  <div className="text-sm text-slate-600">Clique para adicionar arquivos</div>
                </button>
                {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {files.map((f, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-50 rounded p-2 text-sm">
                        <span className="truncate">{f.name} <span className="text-slate-400">({(f.size / 1024).toFixed(0)} KB)</span></span>
                        <button type="button" onClick={() => removeFile(i)} className="text-slate-500 hover:text-red-500">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Prazo esperado *</Label>
                  <Input required type="date" value={form.prazo_esperado} onChange={(e) => setForm({ ...form, prazo_esperado: e.target.value })} min={new Date().toISOString().split("T")[0]} />
                </div>
                <div>
                  <Label>Prioridade</Label>
                  <Select value={form.prioridade} onValueChange={(v) => setForm({ ...form, prioridade: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baixa">Baixa</SelectItem>
                      <SelectItem value="media">Média</SelectItem>
                      <SelectItem value="alta">Alta</SelectItem>
                      <SelectItem value="urgente">Urgente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full h-12 text-base">
                {loading ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Enviando...</>) : "Enviar demanda"}
              </Button>
            </form>
          </Card>
        )}
      </main>
    </div>
  );
}
