import { useState } from "react";
import { Beaker, Check, X, RefreshCw, Gift, Loader2, PartyPopper } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";


type Questao = {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
};

const QUESTOES: Questao[] = [
  {
    pergunta: "Qual percentual do corpo de um adulto é composto por água?",
    opcoes: ["Cerca de 35%", "Cerca de 70%", "Cerca de 90%"],
    correta: 1,
    explicacao:
      "Em média 70% do corpo de um adulto é água, chegando a 75% no cérebro e 76% no músculo esquelético.",
  },

  {
    pergunta: "A partir de qual pH a pepsina, ligada à queimação do refluxo, é inativada de forma irreversível?",
    opcoes: ["pH 6,5", "pH 7,5", "pH 8,8"],
    correta: 2,
    explicacao:
      "O estudo clássico de Koufman e Johnston mostrou inativação irreversível da pepsina em água alcalina com pH 8,8.",
  },
  {
    pergunta: "O que o PRAL mede?",
    opcoes: [
      "O pH do alimento no prato",
      "A carga ácida que o alimento gera depois de metabolizado",
      "A quantidade de proteína de uma refeição",
    ],
    correta: 1,
    explicacao:
      "PRAL é a carga ácida renal potencial. Valores negativos indicam efeito alcalinizante após o metabolismo, e não o pH medido no copo.",
  },
  {
    pergunta: "Qual perda de peso corporal em água já prejudica atenção e disposição?",
    opcoes: ["1% a 2%", "5% a 6%", "Acima de 10%"],
    correta: 0,
    explicacao:
      "Perdas discretas, de 1% a 2% do peso corporal, já aparecem em testes de humor, atenção e percepção de esforço.",
  },
  {
    pergunta: "O que costuma ser encontrado em grande quantidade em água engarrafada em PET?",
    opcoes: ["Excesso de magnésio", "Nanoplásticos e microplásticos", "Cloro residual livre"],
    correta: 1,
    explicacao:
      "Pesquisas publicadas no PNAS identificaram centenas de milhares de partículas plásticas por litro em águas engarrafadas.",
  },
];

const QuizHidratacao = () => {
  const [passo, setPasso] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const q = QUESTOES[passo];
  const progresso = ((passo + (escolha !== null ? 1 : 0)) / QUESTOES.length) * 100;

  const responder = (i: number) => {
    if (escolha !== null) return;
    setEscolha(i);
    if (i === q.correta) setAcertos((a) => a + 1);
  };

  const avancar = () => {
    if (passo + 1 >= QUESTOES.length) {
      setFim(true);
      return;
    }
    setPasso((p) => p + 1);
    setEscolha(null);
  };

  const reiniciar = () => {
    setPasso(0);
    setEscolha(null);
    setAcertos(0);
    setFim(false);
  };

  const enviarLead = async (e: React.FormEvent) => {
    e.preventDefault();
    const n = nome.trim();
    const t = telefone.trim();
    const m = email.trim();
    if (n.length < 2) {
      toast.error("Informe seu nome completo.");
      return;
    }
    if (t.replace(/\D/g, "").length < 10) {
      toast.error("Informe um telefone válido com DDD.");
      return;
    }
    if (m && !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(m)) {
      toast.error("Informe um email válido ou deixe o campo em branco.");
      return;
    }

    setEnviando(true);
    const { error } = await supabase.from("leads_quiz").insert({
      nome: n.slice(0, 120),
      telefone: t.slice(0, 30),
      email: m ? m.slice(0, 200) : null,
      acertos,
      total: QUESTOES.length,
      origem: "portal-cientifico-quiz",
    });
    setEnviando(false);

    if (error) {
      toast.error("Não foi possível enviar agora. Tente novamente em instantes.");
      return;
    }
    setEnviado(true);
    toast.success("Participação confirmada! Em breve entramos em contato.");
  };


  const veredito =
    acertos >= 4
      ? "Você domina o assunto. Sua leitura sobre água já é bem acima da média."
      : acertos >= 2
        ? "Bom começo. Alguns conceitos merecem uma segunda leitura na biblioteca abaixo."
        : "Vale explorar os fundamentos: a maior parte do que se fala sobre água por aí não se sustenta.";

  return (
    <section id="quiz" className="scroll-mt-20 border-t border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper-2))] py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-cyan)/0.45)] bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--pc-blue))]">
              <Beaker className="h-3.5 w-3.5" aria-hidden />
              Teste rápido
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">Quanto você sabe sobre água?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--pc-ink-soft))]">
              Cinco perguntas baseadas nos estudos reunidos neste portal. Cada resposta vem com a explicação científica.
            </p>
            <p className="mx-auto mt-5 inline-flex items-center gap-2 rounded-2xl border border-[hsl(var(--pc-amber)/0.4)] bg-[hsl(var(--pc-amber)/0.12)] px-5 py-3 text-sm font-semibold text-[hsl(var(--pc-amber))]">
              <Gift className="h-4 w-4 shrink-0" aria-hidden />
              Responda ao teste e concorra a descontos, presentes e muito mais
            </p>
          </div>
        </ScrollReveal>

        <div className="pc-card mx-auto mt-12 max-w-2xl rounded-3xl p-7 md:p-10">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[hsl(var(--pc-line))]">
            <div
              className="pc-progress h-full rounded-full transition-all duration-500"
              style={{ width: `${fim ? 100 : progresso}%` }}
            />
          </div>

          {fim ? (
            <div className="pc-fade-in mt-8 text-center">
              <p className="pc-tabnum font-display text-6xl font-bold text-[hsl(var(--pc-blue))]">
                {acertos}/{QUESTOES.length}
              </p>
              <p className="mx-auto mt-4 max-w-md text-[hsl(var(--pc-ink-soft))]">{veredito}</p>

              {enviado ? (
                <div className="mx-auto mt-8 max-w-md rounded-2xl border border-[hsl(var(--pc-cyan)/0.45)] bg-[hsl(var(--pc-cyan)/0.1)] p-6">
                  <PartyPopper className="mx-auto h-6 w-6 text-[hsl(var(--pc-blue))]" aria-hidden />
                  <p className="mt-3 font-display text-lg font-bold">Você está concorrendo</p>
                  <p className="mt-2 text-sm text-[hsl(var(--pc-ink-soft))]">
                    Registramos sua participação. Um consultor Acqualive entra em contato com as condições especiais,
                    descontos e presentes disponíveis.
                  </p>
                </div>
              ) : (
                <form onSubmit={enviarLead} className="mx-auto mt-8 max-w-md text-left">
                  <div className="rounded-2xl border border-[hsl(var(--pc-amber)/0.4)] bg-[hsl(var(--pc-amber)/0.1)] p-5">
                    <p className="flex items-center gap-2 text-sm font-bold text-[hsl(var(--pc-amber))]">
                      <Gift className="h-4 w-4 shrink-0" aria-hidden />
                      Concorra a descontos, presentes e muito mais
                    </p>
                    <p className="mt-2 text-sm text-[hsl(var(--pc-ink-soft))]">
                      Independente da sua nota, deixe seu nome e telefone para participar.
                    </p>
                  </div>

                  <div className="mt-4 space-y-3">
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      maxLength={120}
                      required
                      placeholder="Seu nome completo"
                      className="w-full rounded-2xl border border-[hsl(var(--pc-line))] bg-white/80 px-5 py-3 text-sm outline-none transition focus:border-[hsl(var(--pc-cyan))]"
                    />
                    <input
                      type="tel"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      maxLength={30}
                      required
                      placeholder="WhatsApp com DDD"
                      className="w-full rounded-2xl border border-[hsl(var(--pc-line))] bg-white/80 px-5 py-3 text-sm outline-none transition focus:border-[hsl(var(--pc-cyan))]"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={200}
                      placeholder="Email (opcional)"
                      className="w-full rounded-2xl border border-[hsl(var(--pc-line))] bg-white/80 px-5 py-3 text-sm outline-none transition focus:border-[hsl(var(--pc-cyan))]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={enviando}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--pc-blue))] px-6 py-3.5 text-sm font-semibold text-[hsl(var(--pc-paper))] transition hover:bg-[hsl(var(--pc-cyan))] disabled:opacity-60"
                  >
                    {enviando ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Gift className="h-4 w-4" aria-hidden />}
                    {enviando ? "Enviando..." : "Quero concorrer"}
                  </button>
                  <p className="mt-3 text-center text-xs text-[hsl(var(--pc-ink-soft))]">
                    Seus dados são usados apenas para contato da Acqualive.
                  </p>
                </form>
              )}

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={reiniciar}
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-blue))] px-6 py-3 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:bg-white"
                >
                  <RefreshCw className="h-4 w-4" aria-hidden />
                  Refazer o teste
                </button>
                <a
                  href="#biblioteca"
                  className="inline-flex items-center rounded-full border border-[hsl(var(--pc-line))] bg-white/70 px-6 py-3 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:border-[hsl(var(--pc-cyan))]"
                >
                  Ir para a biblioteca
                </a>
              </div>
            </div>

          ) : (
            <div key={passo} className="pc-fade-in">
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--pc-cyan))]">
                Pergunta {passo + 1} de {QUESTOES.length}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold md:text-2xl">{q.pergunta}</h3>

              <div className="mt-6 space-y-3">
                {q.opcoes.map((o, i) => {
                  const respondida = escolha !== null;
                  const certa = i === q.correta;
                  const marcada = i === escolha;
                  return (
                    <button
                      key={o}
                      type="button"
                      onClick={() => responder(i)}
                      disabled={respondida}
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-sm transition ${
                        respondida && certa
                          ? "border-[hsl(var(--pc-cyan))] bg-[hsl(var(--pc-cyan)/0.12)] font-semibold"
                          : respondida && marcada
                            ? "border-[hsl(var(--pc-amber))] bg-[hsl(var(--pc-amber)/0.12)]"
                            : "border-[hsl(var(--pc-line))] bg-white/70 hover:-translate-y-0.5 hover:border-[hsl(var(--pc-cyan))]"
                      }`}
                    >
                      <span>{o}</span>
                      {respondida && certa && <Check className="h-4 w-4 shrink-0 text-[hsl(var(--pc-cyan))]" aria-hidden />}
                      {respondida && marcada && !certa && (
                        <X className="h-4 w-4 shrink-0 text-[hsl(var(--pc-amber))]" aria-hidden />
                      )}
                    </button>
                  );
                })}
              </div>

              {escolha !== null && (
                <div className="pc-fade-in mt-6 rounded-2xl border border-[hsl(var(--pc-line))] bg-white/70 p-5">
                  <p className="text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{q.explicacao}</p>
                  <button
                    type="button"
                    onClick={avancar}
                    className="mt-5 inline-flex items-center rounded-full bg-[hsl(var(--pc-blue))] px-6 py-3 text-sm font-semibold text-[hsl(var(--pc-paper))] transition hover:bg-[hsl(var(--pc-cyan))]"
                  >
                    {passo + 1 >= QUESTOES.length ? "Ver meu resultado" : "Próxima pergunta"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizHidratacao;
