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
              O que a água faz dentro de você
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--pc-ink-soft))]">
              Toque nos pontos do corpo e veja o que a literatura descreve sobre hidratação, alcalinidade e minerais em
              cada sistema.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="pc-card relative mx-auto aspect-[3/5] w-full max-w-[300px] rounded-[2rem] p-4">
            <svg viewBox="0 0 100 170" className="h-full w-full" role="img" aria-label="Silhueta humana">
              <defs>
                <linearGradient id="pc-corpo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--pc-cyan) / 0.30)" />
                  <stop offset="100%" stopColor="hsl(var(--pc-blue) / 0.22)" />
                </linearGradient>
              </defs>
              <g fill="url(#pc-corpo)" stroke="hsl(var(--pc-blue) / 0.35)" strokeWidth="0.7">
                <circle cx="50" cy="15" r="10" />
                <rect x="46" y="25" width="8" height="6" rx="3" />
                <path d="M32 33 q18 -6 36 0 l4 32 q-20 6 -44 0 z" />
                <path d="M32 34 l-9 6 -5 30 6 2 8 -26 z" />
                <path d="M68 34 l9 6 5 30 -6 2 -8 -26 z" />
                <path d="M30 65 q20 6 40 0 l-3 32 -14 0 -1 -22 -4 0 -1 22 -14 0 z" />
                <path d="M36 97 l2 42 8 0 2 -42 z" />
                <path d="M52 97 l2 42 8 0 2 -42 z" />
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
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--pc-blue))]"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      on
                        ? "h-4 w-4 bg-[hsl(var(--pc-amber))] shadow-[0_0_0_6px_hsl(var(--pc-amber)/0.22)]"
                        : "h-3 w-3 bg-[hsl(var(--pc-blue))] shadow-[0_0_0_4px_hsl(var(--pc-cyan)/0.18)] hover:scale-125"
                    }`}
                  />
                  {!on && <span className="pc-ping absolute inset-0 rounded-full" aria-hidden />}
                </button>
              );
            })}
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
