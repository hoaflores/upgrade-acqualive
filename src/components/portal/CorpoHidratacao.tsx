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
    y: 9,
    titulo: "Foco e clareza mental",
    texto:
      "O tecido cerebral é composto por cerca de 75% de água. Perdas discretas de líquido já aparecem em testes de atenção, memória de trabalho e percepção de esforço.",
    dado: "~75% de água",
  },
  {
    id: "boca",
    nome: "Esôfago",
    x: 50,
    y: 20,
    titulo: "Conforto digestivo",
    texto:
      "Água com pH próximo de 8,8 desativa de forma irreversível a pepsina, enzima envolvida na sensação de queimação do refluxo, e ajuda a tamponar o ácido que sobe.",
    dado: "pH 8,8 inativa pepsina",
  },
  {
    id: "coracao",
    nome: "Sangue",
    x: 43,
    y: 30,
    titulo: "Viscosidade sanguínea",
    texto:
      "Em estudo com atletas desidratados, a água alcalina reduziu a viscosidade do sangue mais do que a água comum, favorecendo a circulação e a entrega de oxigênio.",
    dado: "menor viscosidade",
  },
  {
    id: "musculos",
    nome: "Músculos",
    x: 27,
    y: 47,
    titulo: "Performance e recuperação",
    texto:
      "O músculo esquelético guarda a maior reserva de água do corpo. Hidratação alcalina e mineralizada está associada a melhor equilíbrio ácido-base após esforço intenso.",
    dado: "~76% de água",
  },
  {
    id: "estomago",
    nome: "Estômago",
    x: 55,
    y: 42,
    titulo: "Carga ácida da dieta",
    texto:
      "Água mineralizada com PRAL negativo alcaliniza depois de metabolizada. Ela compensa parte da carga ácida gerada por proteínas, ultraprocessados e refrigerantes.",
    dado: "PRAL negativo",
  },
  {
    id: "rins",
    nome: "Rins",
    x: 62,
    y: 52,
    titulo: "Trabalho renal",
    texto:
      "Os rins são o principal regulador do equilíbrio ácido-base. Reduzir a carga ácida diária diminui a necessidade de mobilizar tampões do próprio corpo.",
    dado: "regulação ácido-base",
  },
  {
    id: "ossos",
    nome: "Ossos",
    x: 37,
    y: 66,
    titulo: "Minerais biodisponíveis",
    texto:
      "Cálcio e magnésio dissolvidos na água são absorvidos com boa biodisponibilidade e somam-se à ingestão diária, especialmente em dietas pobres em minerais.",
    dado: "cálcio e magnésio",
  },
  {
    id: "pele",
    nome: "Pele",
    x: 68,
    y: 76,
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
              className="relative h-full w-full"
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
                  <circle cx="50" cy="15" r="11.5" />
                  <rect x="45.5" y="24" width="9" height="7" rx="3.5" />
                  <path d="M50 27c-6.5 0-11.6 2.2-13.6 5.4l-13.8 7.8c-3 1.7-4.4 4.6-5 8.6l-3.9 26c-.6 4 4.4 5.7 5.7 1.7l4.2-15.6 1 21.4c0 8-1 14.2-2 22.2l-2 29.5c-.5 6-.3 12 .3 18l2.2 22c.5 5 7.4 5 7.8 0l3.1-40.3 4.5-22.6 4.5 22.6 3.1 40.3c.4 5 7.3 5 7.8 0l2.2-22c.6-6 .8-12 .3-18l-2-29.5c-1-8-2-14.2-2-22.2l1-21.4 4.2 15.6c1.3 4 6.3 2.3 5.7-1.7l-3.9-26c-.6-4-2-6.9-5-8.6l-13.8-7.8C61.6 29.2 56.5 27 50 27z" />
                </clipPath>
              </defs>

              <g clipPath="url(#pc-corpo-clip)">
                <rect x="0" y="0" width="100" height="190" fill="url(#pc-corpo-vidro)" />
                <g className="pc-onda">
                  <path
                    d="M-100 57c12 0 12-4 25-4s13 4 25 4 12-4 25-4 13 4 25 4 12-4 25-4 13 4 25 4 12-4 25-4 13 4 25 4v140h-200z"
                    fill="url(#pc-corpo-agua)"
                  />
                </g>
                <g className="pc-onda pc-onda-2">
                  <path
                    d="M-100 60c12 0 12-4 25-4s13 4 25 4 12-4 25-4 13 4 25 4 12-4 25-4 13 4 25 4 12-4 25-4 13 4 25 4v140h-200z"
                    fill="hsl(var(--pc-blue) / 0.35)"
                  />
                </g>
                {[
                  { cx: 44, cy: 150, r: 2.1, d: "0s" },
                  { cx: 56, cy: 165, r: 1.5, d: "1.4s" },
                  { cx: 38, cy: 120, r: 1.2, d: "2.6s" },
                  { cx: 60, cy: 132, r: 1.8, d: "3.6s" },
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

              <g fill="none" stroke="hsl(var(--pc-blue) / 0.55)" strokeWidth="0.9" strokeLinejoin="round">
                <circle cx="50" cy="15" r="11.5" />
                <path d="M50 27c-6.5 0-11.6 2.2-13.6 5.4l-13.8 7.8c-3 1.7-4.4 4.6-5 8.6l-3.9 26c-.6 4 4.4 5.7 5.7 1.7l4.2-15.6 1 21.4c0 8-1 14.2-2 22.2l-2 29.5c-.5 6-.3 12 .3 18l2.2 22c.5 5 7.4 5 7.8 0l3.1-40.3 4.5-22.6 4.5 22.6 3.1 40.3c.4 5 7.3 5 7.8 0l2.2-22c.6-6 .8-12 .3-18l-2-29.5c-1-8-2-14.2-2-22.2l1-21.4 4.2 15.6c1.3 4 6.3 2.3 5.7-1.7l-3.9-26c-.6-4-2-6.9-5-8.6l-13.8-7.8C61.6 29.2 56.5 27 50 27z" />
              </g>
            </svg>

            {PONTOS.map((p) => {
              const on = p.id === ativo.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setAtivo(p)}
                  aria-label={p.nome}
                  aria-pressed={on}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--pc-blue))]"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      on
                        ? "h-4 w-4 bg-[hsl(var(--pc-amber))] shadow-[0_0_0_6px_hsl(var(--pc-amber)/0.28)]"
                        : "h-3 w-3 bg-[hsl(var(--pc-paper))] shadow-[0_0_0_3px_hsl(var(--pc-blue)/0.55)] hover:scale-125"
                    }`}
                  />
                  {!on && <span className="pc-ping absolute inset-0 rounded-full" aria-hidden />}
                </button>
              );
            })}

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
