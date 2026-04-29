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
import { Loader2, Search, Clock, AlertCircle, CheckCircle2, TrendingUp, ListChecks, Paperclip, MessageSquare, ExternalLink, Eye, EyeOff } from "lucide-react";

const ADMIN_USER = "marketing";
const ADMIN_PASSWORD = "AcqualiveTerracota123!";

const STATUS_OPTIONS = [
  { value: "nova", label: "Nova", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { value: "em_andamento", label: "Em andamento", color: "bg-amber-100 text-amber-800 border-amber-200" },
  { value: "em_revisao", label: "Em revisão", color: "bg-purple-100 text-purple-800 border-purple-200" },
  { value: "concluida", label: "Concluída", color: "bg-green-100 text-green-800 border-green-200" },
  { value: "cancelada", label: "Cancelada", color: "bg-slate-100 text-slate-600 border-slate-200" },
];

const PRIORIDADE_COLOR: Record<string, string> = {
  baixa: "bg-slate-100 text-slate-700",
  media: "bg-blue-100 text-blue-700",
  alta: "bg-orange-100 text-orange-700",
  urgente: "bg-red-100 text-red-700",
};

const TIPO_LABEL: Record<string, string> = {
  texto: "Texto",
  arte: "Arte",
  video: "Vídeo",
  pagina: "Página",
  outro: "Outro",
};

function statusLabel(s: string) {
  return STATUS_OPTIONS.find((o) => o.value === s)?.label || s;
}
function statusColor(s: string) {
  return STATUS_OPTIONS.find((o) => o.value === s)?.color || "bg-slate-100";
}

export default function DemandasSolicitadas() {
  const [auth, setAuth] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [demandas, setDemandas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [filterTipo, setFilterTipo] = useState("todos");
  const [filterFreq, setFilterFreq] = useState("todos");
  const [selected, setSelected] = useState<any | null>(null);
  const [comentarios, setComentarios] = useState<any[]>([]);
  const [anexos, setAnexos] = useState<any[]>([]);
  const [novoComentario, setNovoComentario] = useState("");
  const [autorComentario, setAutorComentario] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginUser.trim().toLowerCase() === ADMIN_USER && loginPass === ADMIN_PASSWORD) {
      setAuth(true);
      load();
    } else {
      toast({ title: "Acesso negado", variant: "destructive" });
    }
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
    const [c, a] = await Promise.all([
      supabase.from("demanda_comentarios").select("*").eq("demanda_id", d.id).order("created_at"),
      supabase.from("demanda_anexos").select("*").eq("demanda_id", d.id),
    ]);
    setComentarios(c.data || []);
    setAnexos(a.data || []);
  };

  const updateField = async (field: string, value: any) => {
    if (!selected) return;
    const update: any = { [field]: value };
    if (field === "status" && value === "concluida") update.concluida_em = new Date().toISOString();
    const { error } = await supabase.from("demandas").update(update).eq("id", selected.id);
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
      return;
    }
    setSelected({ ...selected, ...update });
    setDemandas((prev) => prev.map((d) => (d.id === selected.id ? { ...d, ...update } : d)));
    toast({ title: "Atualizado" });
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
    setComentarios([...comentarios, data]);
    setNovoComentario("");
  };

  const filtered = useMemo(() => {
    return demandas.filter((d) => {
      if (filterStatus !== "todos" && d.status !== filterStatus) return false;
      if (filterTipo !== "todos" && d.tipo !== filterTipo) return false;
      if (filterFreq !== "todos" && (d.frequencia || "individual") !== filterFreq) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!d.protocolo.toLowerCase().includes(q) && !d.titulo.toLowerCase().includes(q) && !d.solicitante.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [demandas, search, filterStatus, filterTipo, filterFreq]);

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
        </div>
      ) : (
        <>
          <header className="bg-white border-b sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Acqualive Marketing</div>
                <h1 className="text-xl font-bold text-slate-900">Painel de Demandas</h1>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={load}>Atualizar</Button>
                <Button variant="ghost" size="sm" onClick={() => setAuth(false)}>Sair</Button>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
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
                    <div className="text-xs text-slate-500 uppercase">Concluídas no mês</div>
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
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os status</SelectItem>
                    {STATUS_OPTIONS.map((s) => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
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

            {/* Table */}
            <Card className="border-0 shadow-sm overflow-hidden">
              {loading ? (
                <div className="p-12 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
              ) : filtered.length === 0 ? (
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
                          <td className="px-4 py-3 text-slate-600">{d.responsavel || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          </main>

          {/* Detail Dialog */}
          <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              {selected && (
                <>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <span className="font-mono text-sm bg-slate-900 text-white px-2 py-1 rounded">{selected.protocolo}</span>
                      <span>{selected.titulo}</span>
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-5">
                    <div className="grid grid-cols-3 gap-3">
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
                        <Label className="text-xs">Responsável</Label>
                        <Input
                          value={selected.responsavel || ""}
                          onChange={(e) => setSelected({ ...selected, responsavel: e.target.value })}
                          onBlur={(e) => updateField("responsavel", e.target.value)}
                          placeholder="Nome"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div><span className="text-slate-500">Solicitante:</span> <strong>{selected.solicitante}</strong></div>
                      <div><span className="text-slate-500">Email:</span> {selected.solicitante_email}</div>
                      <div><span className="text-slate-500">Tipo:</span> {TIPO_LABEL[selected.tipo]}</div>
                      <div><span className="text-slate-500">Prazo esperado:</span> {new Date(selected.prazo_esperado + "T00:00:00").toLocaleDateString("pt-BR")}</div>
                      <div><span className="text-slate-500">Estimativa interna:</span> {selected.prazo_estimado_dias} dias</div>
                      <div><span className="text-slate-500">Criada em:</span> {new Date(selected.created_at).toLocaleString("pt-BR")}</div>
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
                            const url = supabase.storage.from("demandas-anexos").getPublicUrl(a.storage_path).data.publicUrl;
                            return (
                              <a key={a.id} href={url} target="_blank" rel="noopener" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
                                <ExternalLink className="w-3 h-3" /> {a.nome_arquivo}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div>
                      <Label className="text-xs flex items-center gap-1"><MessageSquare className="w-3 h-3" /> Comentários ({comentarios.length})</Label>
                      <div className="space-y-2 mt-2 max-h-48 overflow-y-auto">
                        {comentarios.map((c) => (
                          <div key={c.id} className="bg-slate-50 rounded p-3 text-sm">
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                              <strong>{c.autor}</strong>
                              <span>{new Date(c.created_at).toLocaleString("pt-BR")}</span>
                            </div>
                            <div className="whitespace-pre-wrap">{c.texto}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 space-y-2">
                        <Input placeholder="Seu nome" value={autorComentario} onChange={(e) => setAutorComentario(e.target.value)} />
                        <Textarea placeholder="Adicionar comentário..." value={novoComentario} onChange={(e) => setNovoComentario(e.target.value)} rows={2} />
                        <Button size="sm" onClick={addComentario} disabled={!novoComentario.trim() || !autorComentario.trim()}>Adicionar</Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}
