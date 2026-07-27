import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Loader2, Upload, X, CheckCircle2, FileText, Image as ImageIcon, Video, Layout, Sparkles, Eye, EyeOff, Search, Clock, AlertCircle, MessageSquare, Send, Paperclip, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";



const TIPOS = [
  { value: "texto", label: "Texto / Copy", icon: FileText, prazo: 2 },
  { value: "arte", label: "Arte / Design", icon: ImageIcon, prazo: 3 },
  { value: "video", label: "Vídeo", icon: Video, prazo: 7 },
  { value: "pagina", label: "Página / Landing", icon: Layout, prazo: 5 },
  { value: "outro", label: "Outro", icon: Sparkles, prazo: 5 },
];

export default function Demandas() {
  const [auth, setAuth] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [checkingSession, setCheckingSession] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginBusy, setLoginBusy] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState<{ protocolo: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // Session bootstrap and listener
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuth(!!session);
      setUserEmail(session?.user?.email ?? "");
    });
    supabase.auth.getSession().then(({ data }) => {
      setAuth(!!data.session);
      setUserEmail(data.session?.user?.email ?? "");
      setCheckingSession(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);


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
  const [trackComentarios, setTrackComentarios] = useState<any[]>([]);
  const [novoCmt, setNovoCmt] = useState("");
  const [enviandoCmt, setEnviandoCmt] = useState(false);
  const cmtFileRef = useRef<HTMLInputElement>(null);
  const [cmtFiles, setCmtFiles] = useState<File[]>([]);

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
      const [{ data: hist }, { data: cmts }] = await Promise.all([
        supabase.from("demanda_status_log").select("*").eq("demanda_id", data.id).order("created_at", { ascending: false }),
        supabase.from("demanda_comentarios").select("*").eq("demanda_id", data.id).order("created_at"),
      ]);
      setTrackHistory(hist || []);
      setTrackComentarios(cmts || []);
    } catch (err: any) {
      setTrackError(err.message || "Erro ao consultar.");
    } finally {
      setTrackLoading(false);
    }
  };

  // Realtime: atualiza status, histórico e comentários para o solicitante
  useEffect(() => {
    if (!trackResult?.id) return;
    const id = trackResult.id;
    const ch = supabase
      .channel(`track-${id}`)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "demandas", filter: `id=eq.${id}` },
        (p) => setTrackResult((cur: any) => (cur ? { ...cur, ...(p.new as any) } : cur)))
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "demanda_status_log", filter: `demanda_id=eq.${id}` },
        (p) => setTrackHistory((prev) => (prev.find((h) => h.id === (p.new as any).id) ? prev : [p.new as any, ...prev])))
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "demanda_comentarios", filter: `demanda_id=eq.${id}` },
        (p) => setTrackComentarios((prev) => (prev.find((c) => c.id === (p.new as any).id) ? prev : [...prev, p.new as any])))
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [trackResult?.id]);

  const enviarComentarioSolicitante = async () => {
    if (!trackResult || (!novoCmt.trim() && cmtFiles.length === 0)) return;
    setEnviandoCmt(true);
    try {
      // Upload anexos
      for (const f of cmtFiles) {
        const path = `comentarios/${Date.now()}-${Math.random().toString(36).slice(2)}-${f.name.replace(/[^\w.-]/g, "_")}`;

        const { error: upErr } = await supabase.storage.from("demandas-anexos").upload(path, f);
        if (upErr) throw upErr;
        await supabase.from("demanda_anexos").insert({
          demanda_id: trackResult.id,
          storage_path: path,
          nome_arquivo: f.name,
          tipo_mime: f.type,
          tamanho_bytes: f.size,
        });
      }
      const texto = novoCmt.trim();
      if (texto) {
        await supabase.from("demanda_comentarios").insert({
          demanda_id: trackResult.id,
          autor: trackResult.solicitante,
          texto,
        });
        await supabase.from("demanda_atividades").insert({
          demanda_id: trackResult.id,
          tipo: "comentario_solicitante",
          autor: trackResult.solicitante,
          detalhes: texto.slice(0, 200),
        });
      } else if (cmtFiles.length > 0) {
        await supabase.from("demanda_atividades").insert({
          demanda_id: trackResult.id,
          tipo: "anexo_solicitante",
          autor: trackResult.solicitante,
          detalhes: `${cmtFiles.length} arquivo(s) adicionado(s)`,
        });
      }
      setNovoCmt("");
      setCmtFiles([]);
      toast({ title: "Enviado", description: "O time recebeu sua atualização." });
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally {
      setEnviandoCmt(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginBusy(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail.trim().toLowerCase(),
      password: loginPass,
    });
    setLoginBusy(false);
    if (error) {
      toast({ title: "Acesso negado", description: "Email ou senha incorretos.", variant: "destructive" });
    } else {
      setLoginPass("");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
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
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500">Acqualive</div>
            <h1 className="text-lg font-semibold text-slate-900">Central de Demandas</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={showTracker ? "default" : "outline"}
              size="sm"
              onClick={() => setShowTracker((s) => !s)}
              className="gap-1"
            >
              <Search className="w-4 h-4" /> Acompanhar demanda
            </Button>
            {auth && (
              <Button variant="ghost" size="sm" onClick={handleLogout}>Sair</Button>

            )}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {showTracker && (
          <Card className="p-6 shadow-xl border-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Acompanhar minha demanda</h2>
                <p className="text-sm text-slate-600">Informe o protocolo recebido por email e o email do solicitante.</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => { setShowTracker(false); setTrackResult(null); setTrackError(""); }}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <form onSubmit={consultarProtocolo} className="grid sm:grid-cols-[1fr_1fr_auto] gap-3 items-end">
              <div>
                <Label className="text-xs">Protocolo</Label>
                <Input value={trackProtocolo} onChange={(e) => setTrackProtocolo(e.target.value)} placeholder="DEM-2026-XXXXXXXX" />
              </div>
              <div>
                <Label className="text-xs">Email do solicitante</Label>
                <Input type="email" value={trackEmail} onChange={(e) => setTrackEmail(e.target.value)} placeholder="voce@acqualive.com.br" />
              </div>
              <Button type="submit" disabled={trackLoading}>
                {trackLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Consultar"}
              </Button>
            </form>

            {trackError && (
              <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" /> {trackError}
              </div>
            )}

            {trackResult && (
              <div className="mt-5 border-t pt-5 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-bold bg-slate-900 text-white px-2 py-1 rounded">{trackResult.protocolo}</span>
                  <h3 className="font-semibold text-slate-900">{trackResult.titulo}</h3>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border">
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Status atual</div>
                  <Badge className={`${STATUS_INFO[trackResult.status]?.color || ""} text-sm px-3 py-1`}>
                    {STATUS_INFO[trackResult.status]?.label || trackResult.status}
                  </Badge>
                  <p className="text-sm text-slate-600 mt-2">{STATUS_INFO[trackResult.status]?.desc}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><span className="text-slate-500">Prazo esperado:</span> <strong>{new Date(trackResult.prazo_esperado + "T00:00:00").toLocaleDateString("pt-BR")}</strong></div>
                  <div><span className="text-slate-500">Responsável:</span> <strong>{trackResult.responsavel || "A definir"}</strong></div>
                  <div><span className="text-slate-500">Aberta em:</span> {new Date(trackResult.created_at).toLocaleDateString("pt-BR")}</div>
                  {trackResult.concluida_em && (
                    <div><span className="text-slate-500">Entregue em:</span> {new Date(trackResult.concluida_em).toLocaleDateString("pt-BR")}</div>
                  )}
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Histórico de status
                  </div>
                  {trackHistory.length === 0 ? (
                    <p className="text-sm text-slate-500 italic">Sem alterações registradas ainda.</p>
                  ) : (
                    <ol className="relative border-l-2 border-slate-200 ml-2 space-y-3">
                      {trackHistory.map((h) => (
                        <li key={h.id} className="ml-4">
                          <span className="absolute -left-[7px] w-3 h-3 rounded-full bg-slate-400 border-2 border-white" />
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge className={STATUS_INFO[h.status_novo]?.color || ""}>
                              {STATUS_INFO[h.status_novo]?.label || h.status_novo}
                            </Badge>
                            <span className="text-xs text-slate-500">{new Date(h.created_at).toLocaleString("pt-BR")}</span>
                          </div>
                          {h.observacao && (
                            <div className="mt-1 text-sm text-slate-700 bg-amber-50 border border-amber-200 rounded px-2 py-1 flex gap-1 items-start">
                              <MessageSquare className="w-3 h-3 mt-1 shrink-0 text-amber-600" />
                              <span className="whitespace-pre-wrap">{h.observacao}</span>
                            </div>
                          )}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>

                {/* Comentários (conversa com o time) */}
                <div className="border-t pt-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2 flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" /> Conversa com o time ({trackComentarios.length})
                  </div>
                  <div className="space-y-2 max-h-64 overflow-y-auto mb-3">
                    {trackComentarios.length === 0 ? (
                      <p className="text-sm text-slate-500 italic">Nenhum comentário ainda. Use o campo abaixo para enviar uma mensagem ao time.</p>
                    ) : trackComentarios.map((c) => {
                      const meu = c.autor === trackResult.solicitante;
                      return (
                        <div key={c.id} className={`rounded p-3 text-sm border ${meu ? "bg-blue-50 border-blue-200 ml-8" : "bg-slate-50 border-slate-200 mr-8"}`}>
                          <div className="flex justify-between text-xs text-slate-500 mb-1">
                            <strong>{meu ? "Você" : c.autor}</strong>
                            <span>{new Date(c.created_at).toLocaleString("pt-BR")}</span>
                          </div>
                          <div className="whitespace-pre-wrap text-slate-800">{c.texto}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      placeholder="Escreva uma mensagem para o time..."
                      value={novoCmt}
                      onChange={(e) => setNovoCmt(e.target.value)}
                      rows={3}
                    />
                    <input ref={cmtFileRef} type="file" multiple onChange={(e) => setCmtFiles((p) => [...p, ...Array.from(e.target.files || [])].slice(0, 5))} className="hidden" />
                    {cmtFiles.length > 0 && (
                      <div className="space-y-1">
                        {cmtFiles.map((f, i) => (
                          <div key={i} className="flex items-center justify-between bg-slate-50 rounded p-2 text-xs">
                            <span className="truncate flex items-center gap-1"><Paperclip className="w-3 h-3" /> {f.name}</span>
                            <button type="button" onClick={() => setCmtFiles((p) => p.filter((_, idx) => idx !== i))} className="text-slate-500 hover:text-red-500">
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button type="button" variant="outline" size="sm" onClick={() => cmtFileRef.current?.click()} className="gap-1">
                        <Paperclip className="w-3 h-3" /> Anexar
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        onClick={enviarComentarioSolicitante}
                        disabled={enviandoCmt || (!novoCmt.trim() && cmtFiles.length === 0)}
                        className="gap-1 flex-1"
                      >
                        {enviandoCmt ? <Loader2 className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />} Enviar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        )}

        {!auth ? (
          <Card className="p-8 max-w-md mx-auto shadow-xl border-0">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Acesso restrito</h2>
            <p className="text-slate-600 mb-6">Entre com seu email corporativo Acqualive.</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label>Email</Label>
                <Input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="voce@acqualive.com.br" autoFocus autoComplete="email" required />
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
              <Button type="submit" className="w-full" disabled={loginBusy}>{loginBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : "Entrar"}</Button>
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
