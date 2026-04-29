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
import { Loader2, Upload, X, CheckCircle2, FileText, Image as ImageIcon, Video, Layout, Sparkles, Eye, EyeOff, Search, Clock, AlertCircle, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  const [showPass, setShowPass] = useState(false);
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
    frequencia: "individual",
  });
  const [files, setFiles] = useState<File[]>([]);

  // Acompanhamento por protocolo
  const [showTracker, setShowTracker] = useState(false);
  const [trackProtocolo, setTrackProtocolo] = useState("");
  const [trackEmail, setTrackEmail] = useState("");
  const [trackLoading, setTrackLoading] = useState(false);
  const [trackResult, setTrackResult] = useState<any | null>(null);
  const [trackError, setTrackError] = useState<string>("");
  const [trackHistory, setTrackHistory] = useState<any[]>([]);

  const STATUS_INFO: Record<string, { label: string; color: string; desc: string }> = {
    nova: { label: "Na fila", color: "bg-blue-100 text-blue-800 border-blue-200", desc: "Sua demanda está na fila e será iniciada em breve." },
    em_andamento: { label: "Em andamento", color: "bg-amber-100 text-amber-800 border-amber-200", desc: "O time está produzindo sua demanda agora." },
    em_revisao: { label: "Em revisão", color: "bg-purple-100 text-purple-800 border-purple-200", desc: "Em revisão final antes da entrega." },
    concluida: { label: "Entregue", color: "bg-green-100 text-green-800 border-green-200", desc: "Sua demanda foi entregue." },
    cancelada: { label: "Cancelada", color: "bg-slate-100 text-slate-700 border-slate-200", desc: "Esta demanda foi cancelada." },
  };

  const consultarProtocolo = async (e: React.FormEvent) => {
    e.preventDefault();
    setTrackLoading(true);
    setTrackError("");
    setTrackResult(null);
    setTrackHistory([]);
    try {
      const proto = trackProtocolo.trim().toUpperCase();
      const emailQ = trackEmail.trim().toLowerCase();
      if (!proto || !emailQ) {
        setTrackError("Informe protocolo e email.");
        return;
      }
      const { data, error } = await supabase
        .from("demandas")
        .select("id, protocolo, titulo, tipo, status, prioridade, prazo_esperado, responsavel, created_at, concluida_em, solicitante, solicitante_email, frequencia")
        .eq("protocolo", proto)
        .maybeSingle();
      if (error) throw error;
      if (!data) {
        setTrackError("Protocolo não encontrado.");
        return;
      }
      if (data.solicitante_email?.toLowerCase() !== emailQ) {
        setTrackError("Email não confere com o cadastrado nesta demanda.");
        return;
      }
      setTrackResult(data);
      const { data: hist } = await supabase
        .from("demanda_status_log")
        .select("*")
        .eq("demanda_id", data.id)
        .order("created_at", { ascending: false });
      setTrackHistory(hist || []);
    } catch (err: any) {
      setTrackError(err.message || "Erro ao consultar.");
    } finally {
      setTrackLoading(false);
    }
  };

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
        tipo_outro: "",
        titulo: "",
        briefing: "",
        links_referencia: "",
        prazo_esperado: "",
        prioridade: "media",
        frequencia: "individual",
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
                <Input value={loginUser} onChange={(e) => setLoginUser(e.target.value)} placeholder="Digite seu usuário" autoFocus />
              </div>
              <div>
                <Label>Senha</Label>
                <div className="relative">
                  <Input
                    type={showPass ? "text" : "password"}
                    value={loginPass}
                    onChange={(e) => setLoginPass(e.target.value)}
                    placeholder="Digite sua senha"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-900"
                    aria-label={showPass ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
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
                <Label>Esta solicitação é *</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    { v: "individual", t: "Demanda individual", d: "Entrega única, sem repetição" },
                    { v: "recorrente", t: "Solicitação recorrente", d: "Se repete (semanal, mensal, etc.)" },
                  ].map((opt) => {
                    const selected = form.frequencia === opt.v;
                    return (
                      <button
                        type="button"
                        key={opt.v}
                        onClick={() => setForm({ ...form, frequencia: opt.v })}
                        className={`p-3 rounded-lg border-2 transition-all text-left ${selected ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-400"}`}
                      >
                        <div className="text-sm font-semibold">{opt.t}</div>
                        <div className={`text-xs mt-0.5 ${selected ? "text-slate-300" : "text-slate-500"}`}>{opt.d}</div>
                      </button>
                    );
                  })}
                </div>
                {form.frequencia === "recorrente" && (
                  <p className="text-xs text-slate-600 mt-2">Detalhe a cadência (ex.: toda segunda, mensal no dia 1) dentro do briefing.</p>
                )}
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
                {form.tipo === "outro" && (
                  <div className="mt-3">
                    <Label>Especifique o tipo *</Label>
                    <Input
                      required
                      value={form.tipo_outro}
                      onChange={(e) => setForm({ ...form, tipo_outro: e.target.value })}
                      placeholder="Ex.: roteiro de podcast, e-book, apresentação..."
                    />
                  </div>
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
