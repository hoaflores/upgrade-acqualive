import waterPouring from "@/assets/dayan-office.jpg";
import portraitSide from "@/assets/dayan-with-filter.png";

const PILARES = [
  { n: "01", t: "Pura", d: "Sem cloro, sem metais, sem trialometanos." },
  { n: "02", t: "Alcalina", d: "pH entre 8.5 e 9.5, contra a inflamação." },
  { n: "03", t: "Mineralizada", d: "Cálcio e magnésio biodisponíveis." },
  { n: "04", t: "Antioxidante", d: "ORP negativo. Combate radicais livres." },
  { n: "05", t: "Estruturada", d: "Hexagonal. Hidrata célula a célula." },
  { n: "06", t: "Leve", d: "Tensão superficial reduzida. Você bebe mais." },
];

const DayanSolution = () => {
  return (
    <section id="solucao" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Intro */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7 dayan-reveal">
            <span className="ds-eyebrow text-[hsl(var(--ds-accent))]">
              <span className="dayan-num text-2xl not-italic mr-2">05</span>
              A escolha que fiz para a minha família
            </span>
            <h2 className="ds-display mt-5 text-4xl lg:text-6xl text-[hsl(var(--ds-ink))] leading-tight">
              Quando entendi o problema,
              <br />
              parei de procurar.
              <br />
              <span className="ds-italic font-medium text-[hsl(var(--ds-blue-deep))]">
                Acqualive.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 dayan-reveal dayan-reveal-delay-1">
            <p className="text-base lg:text-lg text-[hsl(var(--ds-ink-soft))] leading-relaxed">
              Pesquisei por anos. Testei dezenas de filtros, ionizadores e
              osmoses. Quando conheci a Acqualive, vi algo raro. Anos de
              estudo, tecnologia <em className="ds-italic">TriWay</em>{" "}
              exclusiva e o único filtro que entrega os 6 pilares da água
              ideal num único equipamento.
            </p>
          </div>
        </div>

        {/* Big image + retrato lateral */}
        <div className="grid lg:grid-cols-12 gap-6 mb-24">
          <div className="lg:col-span-8 dayan-reveal">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[hsl(var(--ds-surface))]">
              <img
                src={waterPouring}
                alt="Dr. Dayan Siebra em seu consultório"
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-4 dayan-reveal dayan-reveal-delay-1">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden rounded-sm bg-[hsl(var(--ds-surface))]">
              {/* TODO: substituir por foto oficial do Dr. Dayan Siebra */}
              <img
                src={portraitSide}
                alt="Dr. Dayan Siebra de perfil"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6 pilares */}
        <div className="dayan-reveal mb-12">
          <span className="ds-eyebrow text-[hsl(var(--ds-muted))]">
            Os 6 pilares da água ideal
          </span>
          <h3 className="ds-display mt-3 text-3xl lg:text-4xl text-[hsl(var(--ds-ink))] leading-tight">
            O que o seu corpo
            <span className="ds-italic font-medium"> de fato </span>
            precisa beber.
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--ds-line))] border border-[hsl(var(--ds-line))]">
          {PILARES.map((p, i) => (
            <article
              key={p.n}
              className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bg-white p-8 lg:p-10 group hover:bg-[hsl(var(--ds-surface))] transition-colors`}
            >
              <div className="flex items-baseline gap-4">
                <span className="dayan-num text-3xl text-[hsl(var(--ds-accent))]">
                  {p.n}
                </span>
                <h4 className="ds-display text-2xl text-[hsl(var(--ds-ink))]">
                  {p.t}
                </h4>
              </div>
              <p className="mt-4 text-[hsl(var(--ds-ink-soft))] leading-relaxed">
                {p.d}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayanSolution;
