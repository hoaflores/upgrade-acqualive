import { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Loader2, Search, Clock, AlertCircle, CheckCircle2, TrendingUp, ListChecks, Paperclip, MessageSquare, ExternalLink, Eye, EyeOff, LayoutGrid, Table as TableIcon, User, Activity, Wifi, WifiOff, Flag, Gauge, GripVertical, ArrowUp, ArrowDown, Calendar as CalendarIcon, Lock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

// Admin access is enforced server-side via Supabase Auth + user_roles.admin role


const STATUS_OPTIONS = [
  { value: "nova", label: "Na fila", color: "bg-blue-100 text-blue-800 border-blue-200", dot: "bg-blue-500" },
  { value: "em_andamento", label: "Em andamento", color: "bg-amber-100 text-amber-800 border-amber-200", dot: "bg-amber-500" },
  { value: "em_revisao", label: "Em revisão", color: "bg-purple-100 text-purple-800 border-purple-200", dot: "bg-purple-500" },
  { value: "concluida", label: "Entregue", color: "bg-green-100 text-green-800 border-green-200", dot: "bg-green-500" },
  { value: "cancelada", label: "Cancelada", color: "bg-slate-100 text-slate-600 border-slate-200", dot: "bg-slate-400" },
];

const PRIORIDADE_COLOR: Record<string, string> = {
  baixa: "bg-slate-100 text-slate-700",
  media: "bg-blue-100 text-blue-700",
  alta: "bg-orange-100 text-orange-700",
  urgente: "bg-red-100 text-red-700",
};

const PRIORIDADE_BORDER: Record<string, string> = {
  baixa: "border-l-slate-300",
  media: "border-l-blue-400",
  alta: "border-l-orange-500",
  urgente: "border-l-red-500",
};

const TIPO_LABEL: Record<string, string> = {
  texto: "Texto",
  arte: "Arte",
  video: "Vídeo",
  pagina: "Página",
  outro: "Outro",
};

const RESPONSAVEIS_FIXOS = ["Flores", "Aline", "Tercerize", "Guilherme"];
const RESPONSAVEL_OPTIONS = [...RESPONSAVEIS_FIXOS, "Outro"];

const RESP_COLORS: Record<string, string> = {
  Flores: "bg-rose-100 text-rose-700 border-rose-200",
  Aline: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Tercerize: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Guilherme: "bg-amber-100 text-amber-700 border-amber-200",
};

const VELOCIDADE_OPTIONS = [
  { value: "sem_pressa", label: "Sem pressa", icon: "🐢", color: "bg-slate-100 text-slate-700 border-slate-300" },
  { value: "normal", label: "Normal", icon: "🚶", color: "bg-blue-100 text-blue-700 border-blue-300" },
  { value: "rapida", label: "Rápida", icon: "🐇", color: "bg-orange-100 text-orange-700 border-orange-300" },
  { value: "expressa", label: "Expressa", icon: "⚡", color: "bg-red-100 text-red-700 border-red-300" },
];

function velocidadeMeta(v?: string | null) {
  return VELOCIDADE_OPTIONS.find((o) => o.value === v) || VELOCIDADE_OPTIONS[1];
}

function respColor(name?: string | null) {
  if (!name) return "bg-slate-100 text-slate-500 border-slate-200";
  return RESP_COLORS[name] || "bg-violet-100 text-violet-700 border-violet-200";
}

function statusLabel(s: string) {
  return STATUS_OPTIONS.find((o) => o.value === s)?.label || s;
}
function statusColor(s: string) {
  return STATUS_OPTIONS.find((o) => o.value === s)?.color || "bg-slate-100";
}

function isFixedResp(name?: string | null) {
  return !!name && RESPONSAVEIS_FIXOS.includes(name);
}

export default function DemandasSolicitadas() {
  const [auth, setAuth] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginBusy, setLoginBusy] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [demandas, setDemandas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [filterTipo, setFilterTipo] = useState("todos");
  const [filterFreq, setFilterFreq] = useState("todos");
  const [filterResp, setFilterResp] = useState("todos");
  const [view, setView] = useState<"kanban" | "tabela" | "prioridades">("kanban");
  const [selected, setSelected] = useState<any | null>(null);
  const [comentarios, setComentarios] = useState<any[]>([]);
  const [anexos, setAnexos] = useState<any[]>([]);
  const [atividades, setAtividades] = useState<any[]>([]);
  const [novoComentario, setNovoComentario] = useState("");
  const [autorComentario, setAutorComentario] = useState("");
  const [notificarComentario, setNotificarComentario] = useState(true);
  const [respMode, setRespMode] = useState<"preset" | "outro">("preset");
  const [respOutroValue, setRespOutroValue] = useState("");
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOverCol, setDragOverCol] = useState<string | null>(null);
  const [realtimeOn, setRealtimeOn] = useState(false);
  const [priorityDragId, setPriorityDragId] = useState<string | null>(null);
  const [priorityOverId, setPriorityOverId] = useState<string | null>(null);
  const [filterVelocidade, setFilterVelocidade] = useState("todos");

  const verifyAdminSession = async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    const user = sessionData.session?.user;
    if (!user) {
      setAuth(false);
      return false;
    }
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle();
    if (!roles) {
      await supabase.auth.signOut();
      toast({ title: "Acesso negado", description: "Sua conta não tem permissão de administrador.", variant: "destructive" });
      setAuth(false);
      return false;
    }
    setAuth(true);
    return true;
  };

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) setAuth(false);
    });
    (async () => {
      const ok = await verifyAdminSession();
      if (ok) load();
      setCheckingSession(false);
    })();
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginBusy(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail.trim().toLowerCase(),
      password: loginPass,
    });
    if (error) {
      setLoginBusy(false);
      toast({ title: "Acesso negado", description: "Email ou senha incorretos.", variant: "destructive" });
      return;
    }
    const ok = await verifyAdminSession();
    setLoginBusy(false);
    if (ok) {
      setLoginPass("");
      load();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAuth(false);
  };



  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("demandas")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast({ title: "Erro ao carregar", description: error.message, variant: "destructive" });
    setDemandas(data || []);
    setLoading(false);
  };

  const openDetail = async (d: any) => {
    setSelected(d);
    if (d.responsavel && !isFixedResp(d.responsavel)) {
      setRespMode("outro");
      setRespOutroValue(d.responsavel);
    } else {
      setRespMode("preset");
      setRespOutroValue("");
    }
    const [c, a, ats] = await Promise.all([
      supabase.from("demanda_comentarios").select("*").eq("demanda_id", d.id).order("created_at"),
      supabase.from("demanda_anexos").select("*").eq("demanda_id", d.id),
      supabase.from("demanda_atividades").select("*").eq("demanda_id", d.id).order("created_at", { ascending: false }),
    ]);
    setComentarios(c.data || []);
    setAnexos(a.data || []);
    setAtividades(ats.data || []);
  };

  // Realtime: sincroniza demandas para todo o time
  useEffect(() => {
    if (!auth) return;
    const ch = supabase
      .channel("demandas-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "demandas" }, (payload) => {
        setRealtimeOn(true);
        if (payload.eventType === "INSERT") {
          setDemandas((prev) => (prev.find((x) => x.id === (payload.new as any).id) ? prev : [payload.new as any, ...prev]));
        } else if (payload.eventType === "UPDATE") {
          setDemandas((prev) => prev.map((d) => (d.id === (payload.new as any).id ? { ...d, ...(payload.new as any) } : d)));
          setSelected((cur: any) => (cur && cur.id === (payload.new as any).id ? { ...cur, ...(payload.new as any) } : cur));
        } else if (payload.eventType === "DELETE") {
          setDemandas((prev) => prev.filter((d) => d.id !== (payload.old as any).id));
        }
      })
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "demanda_comentarios" }, (payload) => {
        setSelected((cur: any) => {
          if (cur && (payload.new as any).demanda_id === cur.id) {
            setComentarios((prev) => (prev.find((c) => c.id === (payload.new as any).id) ? prev : [...prev, payload.new as any]));
          }
          return cur;
        });
      })
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "demanda_atividades" }, (payload) => {
        setSelected((cur: any) => {
          if (cur && (payload.new as any).demanda_id === cur.id) {
            setAtividades((prev) => (prev.find((a) => a.id === (payload.new as any).id) ? prev : [payload.new as any, ...prev]));
          }
          return cur;
        });
      })
      .subscribe((status) => {
        if (status === "SUBSCRIBED") setRealtimeOn(true);
        if (status === "CHANNEL_ERROR" || status === "CLOSED") setRealtimeOn(false);
      });
    return () => { supabase.removeChannel(ch); };
  }, [auth]);

  const logAtividade = async (demanda_id: string, tipo: string, campo: string | null, valor_anterior: any, valor_novo: any, detalhes?: string) => {
    await supabase.from("demanda_atividades").insert({
      demanda_id,
      tipo,
      campo,
      valor_anterior: valor_anterior == null ? null : String(valor_anterior),
      valor_novo: valor_novo == null ? null : String(valor_novo),
      autor: "marketing",
      detalhes: detalhes || null,
    });
  };

  const updateField = async (field: string, value: any, targetId?: string, observacao?: string) => {
    const id = targetId || selected?.id;
    if (!id) return;
    const current = demandas.find((d) => d.id === id);
    const valorAnterior = current ? current[field] : null;
    if (valorAnterior === value) return;
    const update: any = { [field]: value };
    if (field === "status" && value === "concluida") update.concluida_em = new Date().toISOString();
    if (field === "status" && value !== "concluida") update.concluida_em = null;
    const { error } = await supabase.from("demandas").update(update).eq("id", id);
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
      return;
    }
    if (selected && selected.id === id) setSelected({ ...selected, ...update });
    setDemandas((prev) => prev.map((d) => (d.id === id ? { ...d, ...update } : d)));

    // Histórico geral de atividades
    await logAtividade(id, "campo_alterado", field, valorAnterior, value, observacao);

    // Notificar solicitante quando status muda
    if (field === "status") {
      try {
        await supabase.functions.invoke("notificar-status-demanda", {
          body: {
            demanda_id: id,
            status_novo: value,
            status_anterior: valorAnterior || null,
            alterado_por: "marketing",
            observacao: observacao || null,
          },
        });
        toast({ title: "Solicitante notificado", description: "Email de atualização enviado." });
      } catch (e: any) {
        console.error("notificar-status-demanda failed", e);
      }
    }
  };

  const handleRespPresetChange = (value: string) => {
    if (value === "Outro") {
      setRespMode("outro");
      setRespOutroValue("");
    } else {
      setRespMode("preset");
      setRespOutroValue("");
      updateField("responsavel", value);
    }
  };

  const addComentario = async () => {
    if (!novoComentario.trim() || !autorComentario.trim() || !selected) return;
    const { data, error } = await supabase
      .from("demanda_comentarios")
      .insert({ demanda_id: selected.id, autor: autorComentario.trim(), texto: novoComentario.trim() })
      .select()
      .single();
    if (error) {
      toast({ title: "Erro", variant: "destructive" });
      return;
    }
    setComentarios((prev) => (prev.find((c) => c.id === data.id) ? prev : [...prev, data]));
    await logAtividade(selected.id, "comentario_adicionado", null, null, autorComentario.trim(), novoComentario.trim().slice(0, 200));
    setNovoComentario("");

    if (notificarComentario) {
      try {
        await supabase.functions.invoke("notificar-comentario", {
          body: { demanda_id: selected.id, autor: autorComentario.trim(), texto: novoComentario.trim() },
        });
        toast({ title: "Solicitante notificado", description: "Email de novo comentário enviado." });
      } catch (e) {
        console.error("notificar-comentario failed", e);
      }
    }
  };

  const filtered = useMemo(() => {
    return demandas.filter((d) => {
      if (filterStatus !== "todos" && d.status !== filterStatus) return false;
      if (filterTipo !== "todos" && d.tipo !== filterTipo) return false;
      if (filterFreq !== "todos" && (d.frequencia || "individual") !== filterFreq) return false;
      if (filterResp !== "todos") {
        if (filterResp === "__sem__" && d.responsavel) return false;
        if (filterResp === "__outro__" && (isFixedResp(d.responsavel) || !d.responsavel)) return false;
        if (filterResp !== "__sem__" && filterResp !== "__outro__" && d.responsavel !== filterResp) return false;
      }
      if (search) {
        const q = search.toLowerCase();
        if (!d.protocolo.toLowerCase().includes(q) && !d.titulo.toLowerCase().includes(q) && !d.solicitante.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [demandas, search, filterStatus, filterTipo, filterFreq, filterResp]);

  const metrics = useMemo(() => {
    const hoje = new Date();
    const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const abertas = demandas.filter((d) => !["concluida", "cancelada"].includes(d.status)).length;
    const atrasadas = demandas.filter((d) => !["concluida", "cancelada"].includes(d.status) && new Date(d.prazo_esperado) < hoje).length;
    const concluidasMes = demandas.filter((d) => d.status === "concluida" && d.concluida_em && new Date(d.concluida_em) >= inicioMes).length;
    const tempos = demandas
      .filter((d) => d.status === "concluida" && d.concluida_em)
      .map((d) => (new Date(d.concluida_em).getTime() - new Date(d.created_at).getTime()) / (1000 * 60 * 60 * 24));
    const tempoMedio = tempos.length ? (tempos.reduce((a, b) => a + b, 0) / tempos.length).toFixed(1) : "—";
    return { abertas, atrasadas, concluidasMes, tempoMedio };
  }, [demandas]);

  const isAtrasada = (d: any) => !["concluida", "cancelada"].includes(d.status) && new Date(d.prazo_esperado) < new Date();

  const groupedByStatus = useMemo(() => {
    const map: Record<string, any[]> = {};
    STATUS_OPTIONS.forEach((s) => (map[s.value] = []));
    filtered.forEach((d) => {
      if (!map[d.status]) map[d.status] = [];
      map[d.status].push(d);
    });
    return map;
  }, [filtered]);

  // Drag handlers
  const onDragStart = (e: React.DragEvent, id: string) => {
    setDraggingId(id);
    e.dataTransfer.effectAllowed = "move";
  };
  const onDragOverCol = (e: React.DragEvent, status: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverCol !== status) setDragOverCol(status);
  };
  const onDropCol = (e: React.DragEvent, status: string) => {
    e.preventDefault();
    if (draggingId) {
      const d = demandas.find((x) => x.id === draggingId);
      if (d && d.status !== status) {
        updateField("status", status, draggingId);
        toast({ title: "Status atualizado", description: `Movido para ${statusLabel(status)}` });
      }
    }
    setDraggingId(null);
    setDragOverCol(null);
  };

  // ===== Board de Prioridades (Gestor) =====
  const ativasOrdenadas = useMemo(() => {
    const ativas = demandas.filter((d) => !["concluida", "cancelada"].includes(d.status));
    const filtradas = ativas.filter((d) => {
      if (filterVelocidade !== "todos" && (d.velocidade || "normal") !== filterVelocidade) return false;
      if (filterResp !== "todos") {
        if (filterResp === "__sem__" && d.responsavel) return false;
        if (filterResp === "__outro__" && (isFixedResp(d.responsavel) || !d.responsavel)) return false;
        if (filterResp !== "__sem__" && filterResp !== "__outro__" && d.responsavel !== filterResp) return false;
      }
      if (search) {
        const q = search.toLowerCase();
        if (!d.protocolo.toLowerCase().includes(q) && !d.titulo.toLowerCase().includes(q) && !d.solicitante.toLowerCase().includes(q)) return false;
      }
      return true;
    });
    return [...filtradas].sort((a, b) => {
      const ao = a.ordem_prioridade ?? Number.MAX_SAFE_INTEGER;
      const bo = b.ordem_prioridade ?? Number.MAX_SAFE_INTEGER;
      if (ao !== bo) return ao - bo;
      return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    });
  }, [demandas, filterVelocidade, filterResp, search]);

  const persistOrdem = async (lista: any[]) => {
    const updates = lista.map((d, i) => ({ id: d.id, ordem: i + 1 }));
    setDemandas((prev) => prev.map((d) => {
      const u = updates.find((x) => x.id === d.id);
      return u ? { ...d, ordem_prioridade: u.ordem } : d;
    }));
    await Promise.all(
      updates.map((u) => supabase.from("demandas").update({ ordem_prioridade: u.ordem }).eq("id", u.id)),
    );
  };

  const reorderPrioridade = async (sourceId: string, targetId: string) => {
    if (sourceId === targetId) return;
    const lista = [...ativasOrdenadas];
    const fromIdx = lista.findIndex((d) => d.id === sourceId);
    const toIdx = lista.findIndex((d) => d.id === targetId);
    if (fromIdx < 0 || toIdx < 0) return;
    const [moved] = lista.splice(fromIdx, 1);
    lista.splice(toIdx, 0, moved);
    await persistOrdem(lista);
    await logAtividade(sourceId, "campo_alterado", "ordem_prioridade", String(fromIdx + 1), String(toIdx + 1));
  };

  const moverOrdem = async (id: string, dir: -1 | 1) => {
    const lista = [...ativasOrdenadas];
    const idx = lista.findIndex((d) => d.id === id);
    if (idx < 0) return;
    const novoIdx = idx + dir;
    if (novoIdx < 0 || novoIdx >= lista.length) return;
    [lista[idx], lista[novoIdx]] = [lista[novoIdx], lista[idx]];
    await persistOrdem(lista);
    await logAtividade(id, "campo_alterado", "ordem_prioridade", String(idx + 1), String(novoIdx + 1));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Painel de Demandas | Marketing Acqualive</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {!auth ? (
        <div className="min-h-screen flex items-center justify-center px-6">
          <Card className="p-8 max-w-md w-full shadow-xl border-0">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Painel de Demandas</h1>
            <p className="text-slate-600 mb-6">Acesso restrito ao time de marketing.</p>
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
        </div>
      ) : (
        <>
          <header className="bg-white border-b sticky top-0 z-10">
            <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Acqualive Marketing</div>
                <h1 className="text-xl font-bold text-slate-900">Painel de Demandas</h1>
              </div>
              <div className="flex gap-2 items-center">
                <div className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-full border ${realtimeOn ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-50 text-slate-500 border-slate-200"}`} title={realtimeOn ? "Atualizações em tempo real ativas" : "Sem conexão realtime"}>
                  {realtimeOn ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                  <span className="font-medium">{realtimeOn ? "Ao vivo" : "Offline"}</span>
                </div>
                <div className="flex rounded-lg border bg-white p-1">
                  <button
                    onClick={() => setView("kanban")}
                    className={`px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition ${view === "kanban" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" /> Kanban
                  </button>
                  <button
                    onClick={() => setView("tabela")}
                    className={`px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition ${view === "tabela" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}
                  >
                    <TableIcon className="w-3.5 h-3.5" /> Tabela
                  </button>
                  <button
                    onClick={() => setView("prioridades")}
                    className={`px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition ${view === "prioridades" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}
                    title="Board do gestor: prioridades, velocidade e datas internas (não notificadas ao solicitante)"
                  >
                    <Flag className="w-3.5 h-3.5" /> Prioridades
                  </button>
                </div>
                <Button variant="outline" size="sm" onClick={load}>Atualizar</Button>
                <Button variant="ghost" size="sm" onClick={handleLogout}>Sair</Button>
              </div>
            </div>
          </header>

          <main className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-5 border-0 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center"><ListChecks className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase">Abertas</div>
                    <div className="text-2xl font-bold">{metrics.abertas}</div>
                  </div>
                </div>
              </Card>
              <Card className="p-5 border-0 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center"><AlertCircle className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase">Atrasadas</div>
                    <div className="text-2xl font-bold">{metrics.atrasadas}</div>
                  </div>
                </div>
              </Card>
              <Card className="p-5 border-0 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase">Entregues no mês</div>
                    <div className="text-2xl font-bold">{metrics.concluidasMes}</div>
                  </div>
                </div>
              </Card>
              <Card className="p-5 border-0 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center"><TrendingUp className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase">Tempo médio (dias)</div>
                    <div className="text-2xl font-bold">{metrics.tempoMedio}</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Filters */}
            <Card className="p-4 border-0 shadow-sm">
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex-1 min-w-[200px] relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input className="pl-9" placeholder="Buscar protocolo, título ou solicitante..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                {view === "tabela" && (
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os status</SelectItem>
                      {STATUS_OPTIONS.map((s) => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                )}
                <Select value={filterResp} onValueChange={setFilterResp}>
                  <SelectTrigger className="w-44"><SelectValue placeholder="Responsável" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos responsáveis</SelectItem>
                    <SelectItem value="__sem__">Sem responsável</SelectItem>
                    {RESPONSAVEIS_FIXOS.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                    <SelectItem value="__outro__">Outro</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterTipo} onValueChange={setFilterTipo}>
                  <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os tipos</SelectItem>
                    {Object.entries(TIPO_LABEL).map(([v, l]) => <SelectItem key={v} value={v}>{l}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={filterFreq} onValueChange={setFilterFreq}>
                  <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Individual + Recorrente</SelectItem>
                    <SelectItem value="individual">Apenas individuais</SelectItem>
                    <SelectItem value="recorrente">Apenas recorrentes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>

            {loading ? (
              <Card className="p-12 text-center border-0 shadow-sm"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></Card>
            ) : view === "kanban" ? (
              /* KANBAN */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {STATUS_OPTIONS.map((col) => {
                  const raw = groupedByStatus[col.value] || [];
                  // Coluna "Na fila" respeita a ordem definida pelo gestor
                  const items = col.value === "nova"
                    ? [...raw].sort((a, b) => {
                        const ao = a.ordem_prioridade ?? Number.MAX_SAFE_INTEGER;
                        const bo = b.ordem_prioridade ?? Number.MAX_SAFE_INTEGER;
                        if (ao !== bo) return ao - bo;
                        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                      })
                    : raw;
                  return (
                    <div
                      key={col.value}
                      onDragOver={(e) => onDragOverCol(e, col.value)}
                      onDragLeave={() => setDragOverCol((c) => (c === col.value ? null : c))}
                      onDrop={(e) => onDropCol(e, col.value)}
                      className={`rounded-xl bg-slate-100/70 p-3 flex flex-col min-h-[400px] transition ${dragOverCol === col.value ? "bg-slate-200 ring-2 ring-slate-400" : ""}`}
                    >
                      <div className="flex items-center justify-between mb-3 px-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${col.dot}`} />
                          <h3 className="font-semibold text-sm text-slate-800">{col.label}</h3>
                        </div>
                        <span className="text-xs font-medium text-slate-500 bg-white rounded-full px-2 py-0.5">{items.length}</span>
                      </div>
                      <div className="space-y-2 flex-1">
                        {items.length === 0 ? (
                          <div className="text-xs text-slate-400 italic text-center py-6">Vazio</div>
                        ) : (
                          items.map((d) => {
                            const atrasada = isAtrasada(d);
                            return (
                              <div
                                key={d.id}
                                draggable
                                onDragStart={(e) => onDragStart(e, d.id)}
                                onDragEnd={() => { setDraggingId(null); setDragOverCol(null); }}
                                onClick={() => openDetail(d)}
                                className={`bg-white rounded-lg shadow-sm hover:shadow-md cursor-pointer p-3 border-l-4 ${PRIORIDADE_BORDER[d.prioridade]} transition ${draggingId === d.id ? "opacity-40" : ""} ${atrasada ? "ring-2 ring-red-400 bg-red-50/40" : ""}`}
                              >
                                <div className="flex items-start justify-between gap-2 mb-1.5">
                                  <div className="flex items-center gap-1.5">
                                    {col.value === "nova" && d.ordem_prioridade && (
                                      <span className="text-[10px] font-bold bg-slate-900 text-white rounded px-1.5 py-0.5" title="Posição na fila do gestor">#{d.ordem_prioridade}</span>
                                    )}
                                    <span className="font-mono text-[10px] font-bold text-slate-500">{d.protocolo}</span>
                                  </div>
                                  {(d.frequencia || "individual") === "recorrente" && (
                                    <span className="text-[9px] font-bold uppercase tracking-wide text-purple-700 bg-purple-100 rounded px-1.5 py-0.5">↻ rec</span>
                                  )}
                                </div>
                                <div className="font-medium text-sm text-slate-900 mb-2 line-clamp-2">{d.titulo}</div>
                                <div className="flex flex-wrap gap-1 mb-2">
                                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">{TIPO_LABEL[d.tipo] || d.tipo}</Badge>
                                  <Badge className={`${PRIORIDADE_COLOR[d.prioridade]} text-[10px] px-1.5 py-0 h-4`}>{d.prioridade}</Badge>
                                  {d.velocidade && d.velocidade !== "normal" && (
                                    <Badge className={`${velocidadeMeta(d.velocidade).color} text-[10px] px-1.5 py-0 h-4 border`} title="Velocidade interna definida pelo gestor">
                                      {velocidadeMeta(d.velocidade).icon} {velocidadeMeta(d.velocidade).label}
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center justify-between text-[11px]">
                                  <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded border ${respColor(d.responsavel)}`}>
                                    <User className="w-2.5 h-2.5" />
                                    <span className="font-medium">{d.responsavel || "Sem dono"}</span>
                                  </div>
                                  <div className={`flex items-center gap-1 ${atrasada ? "text-red-600 font-semibold" : "text-slate-500"}`}>
                                    {atrasada && <Clock className="w-3 h-3" />}
                                    {new Date(d.prazo_esperado + "T00:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}
                                  </div>
                                </div>
                                <div className="text-[10px] text-slate-400 mt-1.5 truncate">{d.solicitante}</div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : view === "tabela" ? (
              /* TABELA */
              <Card className="border-0 shadow-sm overflow-hidden">
                {filtered.length === 0 ? (
                  <div className="p-12 text-center text-slate-500">Nenhuma demanda encontrada.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b">
                        <tr className="text-left text-xs uppercase text-slate-500">
                          <th className="px-4 py-3">Protocolo</th>
                          <th className="px-4 py-3">Título</th>
                          <th className="px-4 py-3">Solicitante</th>
                          <th className="px-4 py-3">Tipo</th>
                          <th className="px-4 py-3">Prioridade</th>
                          <th className="px-4 py-3">Prazo</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3">Responsável</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map((d) => (
                          <tr key={d.id} onClick={() => openDetail(d)} className="border-b hover:bg-slate-50 cursor-pointer">
                            <td className="px-4 py-3 font-mono text-xs font-bold">{d.protocolo}</td>
                            <td className="px-4 py-3 font-medium max-w-xs truncate">{d.titulo}</td>
                            <td className="px-4 py-3 text-slate-600">{d.solicitante}</td>
                            <td className="px-4 py-3">
                              <Badge variant="outline" className="gap-1">
                                {TIPO_LABEL[d.tipo] || d.tipo}
                                {(d.frequencia || "individual") === "recorrente" && (
                                  <span className="ml-1 text-[10px] uppercase tracking-wide text-purple-700">↻ rec.</span>
                                )}
                              </Badge>
                            </td>
                            <td className="px-4 py-3"><Badge className={PRIORIDADE_COLOR[d.prioridade]}>{d.prioridade}</Badge></td>
                            <td className={`px-4 py-3 ${isAtrasada(d) ? "text-red-600 font-semibold" : ""}`}>
                              {new Date(d.prazo_esperado + "T00:00:00").toLocaleDateString("pt-BR")}
                              {isAtrasada(d) && <Clock className="w-3 h-3 inline ml-1" />}
                            </td>
                            <td className="px-4 py-3"><Badge className={statusColor(d.status)}>{statusLabel(d.status)}</Badge></td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs ${respColor(d.responsavel)}`}>
                                <User className="w-3 h-3" />
                                {d.responsavel || "—"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            ) : (
              /* PRIORIDADES (Board do Gestor) */
              <div className="space-y-4">
                <Card className="p-4 border-0 shadow-sm bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                      <Flag className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-bold text-lg flex items-center gap-2">
                        Board do Gestor
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider bg-white/10 rounded px-2 py-0.5"><Lock className="w-2.5 h-2.5" /> Interno</span>
                      </h2>
                      <p className="text-sm text-slate-300 mt-0.5">
                        Arraste para reordenar a fila. Defina velocidade e datas internas. Estas informações <strong className="text-white">não são notificadas ao solicitante</strong> e servem para o time saber por onde começar.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-3 border-0 shadow-sm">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Label className="text-xs uppercase text-slate-500">Filtrar por velocidade:</Label>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setFilterVelocidade("todos")}
                        className={`text-xs px-3 py-1 rounded-full border transition ${filterVelocidade === "todos" ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
                      >
                        Todas
                      </button>
                      {VELOCIDADE_OPTIONS.map((v) => (
                        <button
                          key={v.value}
                          onClick={() => setFilterVelocidade(v.value)}
                          className={`text-xs px-3 py-1 rounded-full border transition ${filterVelocidade === v.value ? "bg-slate-900 text-white border-slate-900" : `${v.color} hover:opacity-80`}`}
                        >
                          {v.icon} {v.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>

                {ativasOrdenadas.length === 0 ? (
                  <Card className="p-12 text-center border-0 shadow-sm text-slate-500">
                    Nenhuma demanda ativa para priorizar.
                  </Card>
                ) : (
                  <div className="space-y-2">
                    {ativasOrdenadas.map((d, idx) => {
                      const vel = velocidadeMeta(d.velocidade);
                      const atrasada = isAtrasada(d);
                      const isDragging = priorityDragId === d.id;
                      const isOver = priorityOverId === d.id && priorityDragId && priorityDragId !== d.id;
                      return (
                        <div
                          key={d.id}
                          draggable
                          onDragStart={(e) => { setPriorityDragId(d.id); e.dataTransfer.effectAllowed = "move"; }}
                          onDragOver={(e) => { e.preventDefault(); if (priorityOverId !== d.id) setPriorityOverId(d.id); }}
                          onDragLeave={() => setPriorityOverId((c) => (c === d.id ? null : c))}
                          onDrop={(e) => {
                            e.preventDefault();
                            if (priorityDragId && priorityDragId !== d.id) reorderPrioridade(priorityDragId, d.id);
                            setPriorityDragId(null);
                            setPriorityOverId(null);
                          }}
                          onDragEnd={() => { setPriorityDragId(null); setPriorityOverId(null); }}
                          className={cn(
                            "bg-white rounded-xl shadow-sm border border-slate-200 p-3 flex items-center gap-3 transition",
                            isDragging && "opacity-40",
                            isOver && "ring-2 ring-amber-400 border-amber-300",
                            atrasada && "border-l-4 border-l-red-500",
                          )}
                        >
                          <div className="flex flex-col items-center gap-0.5 shrink-0">
                            <button
                              onClick={() => moverOrdem(d.id, -1)}
                              disabled={idx === 0}
                              className="text-slate-400 hover:text-slate-900 disabled:opacity-20"
                              title="Subir"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                              {idx + 1}
                            </div>
                            <button
                              onClick={() => moverOrdem(d.id, 1)}
                              disabled={idx === ativasOrdenadas.length - 1}
                              className="text-slate-400 hover:text-slate-900 disabled:opacity-20"
                              title="Descer"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <GripVertical className="w-4 h-4 text-slate-300 cursor-grab shrink-0" />

                          <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openDetail(d)}>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono text-[10px] font-bold text-slate-500">{d.protocolo}</span>
                              <Badge className={`${statusColor(d.status)} text-[10px] px-1.5 py-0 h-4`}>{statusLabel(d.status)}</Badge>
                              <Badge className={`${PRIORIDADE_COLOR[d.prioridade]} text-[10px] px-1.5 py-0 h-4`}>{d.prioridade}</Badge>
                              {(d.frequencia || "individual") === "recorrente" && (
                                <span className="text-[9px] font-bold uppercase text-purple-700 bg-purple-100 rounded px-1.5 py-0.5">↻ rec</span>
                              )}
                            </div>
                            <div className="font-medium text-sm text-slate-900 truncate mt-1">{d.titulo}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-3 flex-wrap">
                              <span>{d.solicitante}</span>
                              <span className={atrasada ? "text-red-600 font-semibold" : ""}>
                                Prazo: {new Date(d.prazo_esperado + "T00:00:00").toLocaleDateString("pt-BR")}
                              </span>
                              <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border ${respColor(d.responsavel)}`}>
                                <User className="w-2.5 h-2.5" /> {d.responsavel || "Sem dono"}
                              </span>
                            </div>
                          </div>

                          {/* Velocidade */}
                          <div className="shrink-0">
                            <Select value={d.velocidade || "normal"} onValueChange={(v) => updateField("velocidade", v, d.id)}>
                              <SelectTrigger className={cn("w-[150px] h-9 border", vel.color)}>
                                <SelectValue>
                                  <span className="flex items-center gap-1.5 text-xs font-medium">
                                    <Gauge className="w-3 h-3" />
                                    {vel.icon} {vel.label}
                                  </span>
                                </SelectValue>
                              </SelectTrigger>
                              <SelectContent>
                                {VELOCIDADE_OPTIONS.map((v) => (
                                  <SelectItem key={v.value} value={v.value}>
                                    {v.icon} {v.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Datas internas */}
                          <div className="shrink-0 flex gap-2">
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" size="sm" className="h-9 text-xs font-normal">
                                  <CalendarIcon className="w-3 h-3" />
                                  {d.data_inicio_prevista
                                    ? format(new Date(d.data_inicio_prevista + "T00:00:00"), "dd/MM", { locale: ptBR })
                                    : "Início"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="end">
                                <Calendar
                                  mode="single"
                                  selected={d.data_inicio_prevista ? new Date(d.data_inicio_prevista + "T00:00:00") : undefined}
                                  onSelect={(date) => updateField("data_inicio_prevista", date ? format(date, "yyyy-MM-dd") : null, d.id)}
                                  locale={ptBR}
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" size="sm" className="h-9 text-xs font-normal">
                                  <CalendarIcon className="w-3 h-3" />
                                  {d.data_entrega_interna
                                    ? format(new Date(d.data_entrega_interna + "T00:00:00"), "dd/MM", { locale: ptBR })
                                    : "Meta"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="end">
                                <Calendar
                                  mode="single"
                                  selected={d.data_entrega_interna ? new Date(d.data_entrega_interna + "T00:00:00") : undefined}
                                  onSelect={(date) => updateField("data_entrega_interna", date ? format(date, "yyyy-MM-dd") : null, d.id)}
                                  locale={ptBR}
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </main>

          {/* Detail Dialog */}
          <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              {selected && (
                <>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-sm bg-slate-900 text-white px-2 py-1 rounded">{selected.protocolo}</span>
                      <span>{selected.titulo}</span>
                    </DialogTitle>
                  </DialogHeader>

                  <Tabs defaultValue="detalhes" className="w-full">
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="detalhes">Detalhes</TabsTrigger>
                      <TabsTrigger value="comentarios">Comentários ({comentarios.length})</TabsTrigger>
                      <TabsTrigger value="historico">Histórico ({atividades.length})</TabsTrigger>
                    </TabsList>

                    <TabsContent value="detalhes" className="space-y-5 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <Label className="text-xs">Status</Label>
                          <Select value={selected.status} onValueChange={(v) => updateField("status", v)}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              {STATUS_OPTIONS.map((s) => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-xs">Prioridade</Label>
                          <Select value={selected.prioridade} onValueChange={(v) => updateField("prioridade", v)}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="baixa">Baixa</SelectItem>
                              <SelectItem value="media">Média</SelectItem>
                              <SelectItem value="alta">Alta</SelectItem>
                              <SelectItem value="urgente">Urgente</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-xs">Atribuir a</Label>
                          <Select
                            value={respMode === "outro" ? "Outro" : (selected.responsavel || "")}
                            onValueChange={handleRespPresetChange}
                          >
                            <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                            <SelectContent>
                              {RESPONSAVEL_OPTIONS.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          {respMode === "outro" && (
                            <Input
                              className="mt-2"
                              value={respOutroValue}
                              onChange={(e) => setRespOutroValue(e.target.value)}
                              onBlur={(e) => {
                                const v = e.target.value.trim();
                                if (v) updateField("responsavel", v);
                              }}
                              placeholder="Nome do responsável"
                            />
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div><span className="text-slate-500">Solicitante:</span> <strong>{selected.solicitante}</strong></div>
                        <div><span className="text-slate-500">Email:</span> {selected.solicitante_email}</div>
                        <div><span className="text-slate-500">Tipo:</span> {TIPO_LABEL[selected.tipo]}</div>
                        <div>
                          <span className="text-slate-500">Frequência:</span>{" "}
                          <Badge className={(selected.frequencia || "individual") === "recorrente" ? "bg-purple-100 text-purple-800" : "bg-slate-100 text-slate-700"}>
                            {(selected.frequencia || "individual") === "recorrente" ? "Recorrente" : "Individual"}
                          </Badge>
                        </div>
                        <div className={isAtrasada(selected) ? "text-red-600 font-semibold" : ""}>
                          <span className="text-slate-500 font-normal">Prazo esperado:</span> {new Date(selected.prazo_esperado + "T00:00:00").toLocaleDateString("pt-BR")}
                          {isAtrasada(selected) && <Badge className="ml-2 bg-red-100 text-red-700 border-red-200">Atrasada</Badge>}
                        </div>
                        <div><span className="text-slate-500">Estimativa interna:</span> {selected.prazo_estimado_dias} dias</div>
                        <div><span className="text-slate-500">Criada em:</span> {new Date(selected.created_at).toLocaleString("pt-BR")}</div>
                      </div>

                      {/* Controles internos do gestor (não notificam o solicitante) */}
                      <div className="rounded-lg border-2 border-dashed border-amber-200 bg-amber-50/40 p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Lock className="w-3.5 h-3.5 text-amber-700" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800">Controle interno do gestor</h4>
                          <span className="text-[10px] text-slate-500">não enviado ao solicitante</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div>
                            <Label className="text-xs">Velocidade</Label>
                            <Select value={selected.velocidade || "normal"} onValueChange={(v) => updateField("velocidade", v)}>
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                {VELOCIDADE_OPTIONS.map((v) => (
                                  <SelectItem key={v.value} value={v.value}>{v.icon} {v.label}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-xs">Início previsto</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" className="w-full justify-start font-normal h-10">
                                  <CalendarIcon className="w-3.5 h-3.5" />
                                  {selected.data_inicio_prevista
                                    ? format(new Date(selected.data_inicio_prevista + "T00:00:00"), "PPP", { locale: ptBR })
                                    : "Sem data"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={selected.data_inicio_prevista ? new Date(selected.data_inicio_prevista + "T00:00:00") : undefined}
                                  onSelect={(date) => updateField("data_inicio_prevista", date ? format(date, "yyyy-MM-dd") : null)}
                                  locale={ptBR}
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div>
                            <Label className="text-xs">Meta de entrega interna</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" className="w-full justify-start font-normal h-10">
                                  <CalendarIcon className="w-3.5 h-3.5" />
                                  {selected.data_entrega_interna
                                    ? format(new Date(selected.data_entrega_interna + "T00:00:00"), "PPP", { locale: ptBR })
                                    : "Sem data"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={selected.data_entrega_interna ? new Date(selected.data_entrega_interna + "T00:00:00") : undefined}
                                  onSelect={(date) => updateField("data_entrega_interna", date ? format(date, "yyyy-MM-dd") : null)}
                                  locale={ptBR}
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                        {selected.ordem_prioridade && (
                          <div className="text-xs text-slate-600 mt-3">
                            Posição atual na fila do gestor: <strong className="text-slate-900">#{selected.ordem_prioridade}</strong>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label className="text-xs">Briefing</Label>
                        <div className="bg-slate-50 rounded p-3 text-sm whitespace-pre-wrap">{selected.briefing}</div>
                      </div>

                      {selected.links_referencia && (
                        <div>
                          <Label className="text-xs">Links de referência</Label>
                          <div className="bg-slate-50 rounded p-3 text-sm whitespace-pre-wrap">{selected.links_referencia}</div>
                        </div>
                      )}

                      {anexos.length > 0 && (
                        <div>
                          <Label className="text-xs flex items-center gap-1"><Paperclip className="w-3 h-3" /> Anexos ({anexos.length})</Label>
                          <div className="space-y-1 mt-2">
                            {anexos.map((a) => {
                              const abrirAnexo = async () => {
                                const { data, error } = await supabase.storage
                                  .from("demandas-anexos")
                                  .createSignedUrl(a.storage_path, 300);
                                if (error || !data?.signedUrl) {
                                  toast({ title: "Não foi possível abrir o anexo", variant: "destructive" });
                                  return;
                                }
                                window.open(data.signedUrl, "_blank", "noopener");
                              };
                              return (
                                <button key={a.id} type="button" onClick={abrirAnexo} className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
                                  <ExternalLink className="w-3 h-3" /> {a.nome_arquivo}
                                </button>
                              );
                            })}

                          </div>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="comentarios" className="pt-4">
                      <div className="space-y-2 max-h-72 overflow-y-auto">
                        {comentarios.length === 0 ? (
                          <p className="text-sm text-slate-500 italic text-center py-6">Sem comentários ainda.</p>
                        ) : comentarios.map((c) => (
                          <div key={c.id} className="bg-slate-50 rounded p-3 text-sm">
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                              <strong>{c.autor}</strong>
                              <span>{new Date(c.created_at).toLocaleString("pt-BR")}</span>
                            </div>
                            <div className="whitespace-pre-wrap">{c.texto}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 space-y-2 border-t pt-4">
                        <Input placeholder="Seu nome" value={autorComentario} onChange={(e) => setAutorComentario(e.target.value)} />
                        <Textarea placeholder="Adicionar comentário..." value={novoComentario} onChange={(e) => setNovoComentario(e.target.value)} rows={3} />
                        <div className="flex items-center justify-between">
                          <label className="flex items-center gap-2 text-xs text-slate-600">
                            <Switch checked={notificarComentario} onCheckedChange={setNotificarComentario} />
                            Notificar solicitante por email
                          </label>
                          <Button size="sm" onClick={addComentario} disabled={!novoComentario.trim() || !autorComentario.trim()}>
                            Enviar comentário
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="historico" className="pt-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                        <Activity className="w-3 h-3" /> Todas as alterações registradas
                      </div>
                      {atividades.length === 0 ? (
                        <p className="text-sm text-slate-500 italic text-center py-6">Sem atividades registradas.</p>
                      ) : (
                        <ol className="relative border-l-2 border-slate-200 ml-2 space-y-3">
                          {atividades.map((a) => (
                            <li key={a.id} className="ml-4">
                              <span className="absolute -left-[7px] w-3 h-3 rounded-full bg-slate-400 border-2 border-white" />
                              <div className="text-xs text-slate-500">{new Date(a.created_at).toLocaleString("pt-BR")} · <strong>{a.autor || "—"}</strong></div>
                              <div className="text-sm text-slate-800 mt-0.5">
                                {a.tipo === "comentario_adicionado" ? (
                                  <>💬 Comentou: <em className="text-slate-600">"{a.detalhes}"</em></>
                                ) : a.tipo === "campo_alterado" ? (
                                  <>
                                    <span className="font-medium capitalize">{a.campo?.replace("_", " ")}</span>{" "}
                                    {a.valor_anterior ? <><span className="text-slate-400 line-through">{a.valor_anterior}</span> → </> : ""}
                                    <span className="text-slate-900 font-medium">{a.valor_novo || "—"}</span>
                                  </>
                                ) : a.tipo === "comentario_solicitante" ? (
                                  <>📨 Solicitante comentou: <em className="text-slate-600">"{a.detalhes}"</em></>
                                ) : (
                                  <>{a.tipo} {a.detalhes}</>
                                )}
                              </div>
                            </li>
                          ))}
                        </ol>
                      )}
                    </TabsContent>
                  </Tabs>
                </>
              )}
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}
