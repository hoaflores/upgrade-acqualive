import dirtyWater from "@/assets/dayan-dirty-water.jpg";

const VENENOS = [
  {
    n: "01",
    name: "Cloro",
    body: "Usado para desinfecção, deixa gosto e odor marcantes na água. Muita gente sente diferença ao tomar uma água sem cloro.",
  },
  {
    n: "02",
    name: "Subprodutos do cloro",
    body: "A reação do cloro com matéria orgânica gera subprodutos. Reduzi-los melhora a qualidade percebida da água que chega à sua casa.",
  },
  {
    n: "03",
    name: "Metais e sedimentos",
    body: "Tubulações antigas podem liberar partículas e sedimentos no caminho até a torneira. Uma boa filtragem retém essas impurezas.",
  },
  {
    n: "04",
    name: "Microplásticos",
    body: "Garrafas plásticas podem liberar partículas com o tempo. Uma fonte filtrada em casa reduz a dependência de embalagens descartáveis.",
  },
];

const DayanProblem = () => {
  return (
    <section
      id="verdade"
      className="relative ds-dark dayan-grain overflow-hidden py-24 lg:py-32"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 dayan-reveal">
            <span className="ds-eyebrow inline-flex items-center gap-3">
              <span className="dayan-num text-2xl text-[hsl(var(--ds-accent))] not-italic">
                03
              </span>
              O diagnóstico
            </span>

            <h2 className="ds-display mt-6 text-4xl lg:text-6xl text-white leading-tight">
              Nem toda água
              <br />
              <span className="ds-italic font-medium text-[hsl(var(--ds-accent))]">
                é igual.
              </span>{" "}
              E isso
              <br />
              faz <span className="ds-italic font-medium">diferença.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-12 dayan-reveal dayan-reveal-delay-1">
            <p className="text-base lg:text-lg text-white/75 leading-relaxed">
              Quando comecei a estudar a fundo o que sai das torneiras brasileiras, percebi uma coisa simples. O saneamento público existe para tornar a água segura para consumo, mas isso não significa que ela seja a melhor opção possível para a sua casa.
            </p>
            <p className="mt-6 text-base lg:text-lg text-white/75 leading-relaxed">
              Cloro, sedimentos, gosto e odor são percebidos no dia a dia. Para muita gente, melhorar a água que chega ao copo é uma escolha de qualidade e conforto.
            </p>
          </div>
        </div>

        {/* Big image + 4 venenos */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 dayan-reveal">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={dirtyWater}
                alt="Microscopia: partículas e bolhas em água de torneira"
                loading="lazy"
                width={1200}
                height={1500}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="ds-eyebrow text-white/70">
                  Imagem ilustrativa
                </span>
                <p className="ds-italic text-white text-xl mt-1">
                  Qualidade da água é uma escolha diária.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10">
            {VENENOS.map((v, i) => (
              <article
                key={v.n}
                className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bg-[hsl(var(--ds-blue-deep))] p-8 lg:p-10 hover:bg-[hsl(218_60%_25%)] transition-colors`}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="dayan-num text-4xl text-[hsl(var(--ds-accent))]">
                    {v.n}
                  </span>
                  <span className="ds-eyebrow text-white/40">item</span>
                </div>
                <h3 className="ds-display text-3xl text-white">{v.name}</h3>
                <p className="mt-4 text-white/70 leading-relaxed text-sm">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="dayan-reveal mt-24 max-w-4xl">
          <span className="ds-italic text-2xl lg:text-4xl text-white leading-tight">
            "Tem gente que toma 8 remédios por dia e nunca olhou para a água
            que engole junto."
          </span>
          <footer className="mt-6 ds-eyebrow text-white/60">
            Dr. Dayan Siebra
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default DayanProblem;
