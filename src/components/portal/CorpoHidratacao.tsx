import { useState } from "react";
import { Activity } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type Ponto = {
  id: string;
  nome: string;
  x: number;
  y: number;
  titulo: string;
  texto: string;
  dado: string;
};

const PONTOS: Ponto[] = [
  {
    id: "cerebro",
    nome: "Cérebro",
    x: 50,
    y: 8,
    titulo: "Foco e clareza mental",
    texto:
      "O tecido cerebral é composto por cerca de 75% de água. Perdas discretas de líquido já aparecem em testes de atenção, memória de trabalho e percepção de esforço.",
    dado: "~75% de água",
  },
  {
    id: "boca",
    nome: "Esôfago",
    x: 50,
    y: 16,
    titulo: "Conforto digestivo",
    texto:
      "Água com pH próximo de 8,8 desativa de forma irreversível a pepsina, enzima envolvida na sensação de queimação do refluxo, e ajuda a tamponar o ácido que sobe.",
    dado: "pH 8,8 inativa pepsina",
  },
  {
    id: "coracao",
    nome: "Sangue",
    x: 45,
    y: 25,
    titulo: "Viscosidade sanguínea",
    texto:
      "Em estudo com atletas desidratados, a água alcalina reduziu a viscosidade do sangue mais do que a água comum, favorecendo a circulação e a entrega de oxigênio.",
    dado: "menor viscosidade",
  },
  {
    id: "musculos",
    nome: "Músculos",
    x: 41,
    y: 62,
    titulo: "Performance e recuperação",
    texto:
      "O músculo esquelético guarda a maior reserva de água do corpo. Hidratação alcalina e mineralizada está associada a melhor equilíbrio ácido-base após esforço intenso.",
    dado: "~76% de água",
  },
  {
    id: "estomago",
    nome: "Estômago",
    x: 54,
    y: 31,
    titulo: "Carga ácida da dieta",
    texto:
      "Água mineralizada com PRAL negativo alcaliniza depois de metabolizada. Ela compensa parte da carga ácida gerada por proteínas, ultraprocessados e refrigerantes.",
    dado: "PRAL negativo",
  },
  {
    id: "rins",
    nome: "Rins",
    x: 58,
    y: 37,
    titulo: "Trabalho renal",
    texto:
      "Os rins são o principal regulador do equilíbrio ácido-base. Reduzir a carga ácida diária diminui a necessidade de mobilizar tampões do próprio corpo.",
    dado: "regulação ácido-base",
  },
  {
    id: "ossos",
    nome: "Ossos",
    x: 57,
    y: 74,
    titulo: "Minerais biodisponíveis",
    texto:
      "Cálcio e magnésio dissolvidos na água são absorvidos com boa biodisponibilidade e somam-se à ingestão diária, especialmente em dietas pobres em minerais.",
    dado: "cálcio e magnésio",
  },
  {
    id: "pele",
    nome: "Pele",
    x: 72,
    y: 30,
    titulo: "Elasticidade e viço",
    texto:
      "A pele é o maior órgão do corpo e um dos primeiros a sinalizar desidratação crônica, com perda de elasticidade e aspecto opaco.",
    dado: "~64% de água",
  },
];

const CorpoHidratacao = () => {
  const [ativo, setAtivo] = useState<Ponto>(PONTOS[0]);

  return (
    <section
      id="corpo"
      className="scroll-mt-20 border-t border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper-2))] py-20 md:py-28"
    >
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-cyan)/0.45)] bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--pc-blue))]">
              <Activity className="h-3.5 w-3.5" aria-hidden />
              Mapa interativo
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">
              Em média 70% de você é água
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--pc-ink-soft))]">
              Toque nos pontos do corpo e veja o que a literatura descreve sobre hidratação, alcalinidade e minerais em
              cada sistema.
            </p>

          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="pc-card relative mx-auto aspect-[3/5] w-full max-w-[320px] overflow-hidden rounded-[2rem] p-4">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(120% 80% at 50% 0%, hsl(var(--pc-cyan)/0.16), transparent 60%), radial-gradient(90% 60% at 50% 100%, hsl(var(--pc-blue)/0.14), transparent 65%)",
              }}
              aria-hidden
            />

            <span className="absolute left-4 top-4 z-10 rounded-full bg-[hsl(var(--pc-blue))] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--pc-paper))]">
              70% água
            </span>

            <svg
              viewBox="0 0 100 190"
              className="relative mx-auto block h-full w-auto"
              role="img"
              aria-label="Silhueta humana preenchida com água até 70%"
            >
              <defs>
                <linearGradient id="pc-corpo-vidro" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--pc-cyan) / 0.16)" />
                  <stop offset="100%" stopColor="hsl(var(--pc-blue) / 0.10)" />
                </linearGradient>
                <linearGradient id="pc-corpo-agua" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--pc-cyan) / 0.85)" />
                  <stop offset="55%" stopColor="hsl(var(--pc-cyan) / 0.55)" />
                  <stop offset="100%" stopColor="hsl(var(--pc-blue) / 0.75)" />
                </linearGradient>
                <clipPath id="pc-corpo-clip">
                  <circle cx="50" cy="16" r="12" />
                  <rect x="45.5" y="25" width="9" height="9" rx="4" />
                  <path d="M32 36c0-4 6-5 18-5s18 1 18 5l2 24c0 8-4 12-5 20l-3 12H38l-3-12c-1-8-5-12-5-20z" />
                  <rect x="36" y="86" width="28" height="8" rx="4" />
                  <path d="M30 37c-5 2-7 7-8 15l-4 34c-1 6 6 7 7 1l5-27z" />
                  <path d="M70 37c5 2 7 7 8 15l4 34c1 6-6 7-7 1l-5-27z" />
                  <path d="M38 90h9l1 40-1 50c0 4-7 4-7 0l-2-48z" />
                  <path d="M62 90h-9l-1 40 1 50c0 4 7 4 7 0l2-48z" />
                </clipPath>
              </defs>

              <g clipPath="url(#pc-corpo-clip)">
                <rect x="0" y="0" width="100" height="190" fill="url(#pc-corpo-vidro)" />
                <g className="pc-onda">
                  <path
                    d="M-100 58c12 0 12-4 25-4s13 4 25 4 12-4 25-4 13 4 25 4 12-4 25-4 13 4 25 4 12-4 25-4 13 4 25 4v140h-200z"
                    fill="url(#pc-corpo-agua)"
                  />
                </g>
                <g className="pc-onda pc-onda-2">
                  <path
                    d="M-100 61c12 0 12-4 25-4s13 4 25 4 12-4 25-4 13 4 25 4 12-4 25-4 13 4 25 4 12-4 25-4 13 4 25 4v140h-200z"
                    fill="hsl(var(--pc-blue) / 0.35)"
                  />
                </g>
                {[
                  { cx: 44, cy: 150, r: 2.1, d: "0s" },
                  { cx: 56, cy: 165, r: 1.5, d: "1.4s" },
                  { cx: 42, cy: 120, r: 1.2, d: "2.6s" },
                  { cx: 58, cy: 132, r: 1.8, d: "3.6s" },
                ].map((b) => (
                  <circle
                    key={b.d}
                    cx={b.cx}
                    cy={b.cy}
                    r={b.r}
                    fill="hsl(var(--pc-paper) / 0.55)"
                    className="pc-bolha-corpo"
                    style={{ animationDelay: b.d }}
                  />
                ))}
              </g>

              <g
                fill="none"
                stroke="hsl(var(--pc-blue) / 0.55)"
                strokeWidth="0.9"
                strokeLinejoin="round"
                clipPath="url(#pc-corpo-clip)"
              >
                <rect x="0.45" y="0.45" width="99.1" height="189.1" strokeWidth="1.8" />
              </g>

              {PONTOS.map((p) => {
                const on = p.id === ativo.id;
                return (
                  <g
                    key={p.id}
                    role="button"
                    tabIndex={0}
                    aria-label={p.nome}
                    aria-pressed={on}
                    onClick={() => setAtivo(p)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setAtivo(p);
                      }
                    }}
                    className="cursor-pointer focus:outline-none"
                  >
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={on ? 5.5 : 4}
                      fill={on ? "hsl(var(--pc-amber) / 0.3)" : "hsl(var(--pc-blue) / 0.22)"}
                    />
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={on ? 2.6 : 1.9}
                      fill={on ? "hsl(var(--pc-amber))" : "hsl(var(--pc-paper))"}
                      stroke={on ? "hsl(var(--pc-amber))" : "hsl(var(--pc-blue) / 0.7)"}
                      strokeWidth="0.9"
                    />
                  </g>
                );
              })}
            </svg>
              </div>
            </div>


            <p className="absolute bottom-4 left-0 right-0 text-center text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--pc-ink-soft))]">
              Toque nos pontos
            </p>
          </div>



          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {PONTOS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setAtivo(p)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                    p.id === ativo.id
                      ? "border-[hsl(var(--pc-blue))] bg-[hsl(var(--pc-blue))] text-[hsl(var(--pc-paper))]"
                      : "border-[hsl(var(--pc-line))] bg-white/70 text-[hsl(var(--pc-ink-soft))] hover:border-[hsl(var(--pc-cyan))]"
                  }`}
                >
                  {p.nome}
                </button>
              ))}
            </div>

            <div key={ativo.id} className="pc-card pc-fade-in rounded-3xl p-7 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--pc-cyan))]">
                {ativo.nome}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold">{ativo.titulo}</h3>
              <p className="mt-4 leading-relaxed text-[hsl(var(--pc-ink-soft))]">{ativo.texto}</p>
              <p className="mt-6 inline-flex rounded-full bg-[hsl(var(--pc-amber)/0.14)] px-4 py-2 text-sm font-semibold text-[hsl(var(--pc-amber))]">
                {ativo.dado}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorpoHidratacao;
