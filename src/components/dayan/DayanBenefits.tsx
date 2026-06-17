const BENEFITS = [
  {
    n: "01",
    t: "Hidratação que entra com prazer",
    d: "Sem o gosto e o odor do cloro, a água fica leve e agradável. Quando ela tem sabor melhor, a família tende a beber mais água ao longo do dia — algo que faz diferença na rotina e no bem-estar.",
  },
  {
    n: "02",
    t: "Menos cloro no copo do dia a dia",
    d: "Reduz cloro residual, sedimentos e impurezas que vêm pela tubulação. Uma água mais limpa para beber, cozinhar e oferecer para as crianças, sem precisar ferver ou comprar galão.",
  },
  {
    n: "03",
    t: "Apoio para uma rotina mais saudável",
    d: "Manter uma boa hidratação ao longo do dia faz parte de hábitos simples de saúde e bem-estar. Ter água de qualidade sempre à mão é um empurrão a mais para cuidar de você e da sua família.",
  },
  {
    n: "04",
    t: "Cozinha mais saborosa e leve",
    d: "Café, chá, arroz, sopa e sucos ganham outro sabor com água filtrada de qualidade. Você sente o gosto real dos ingredientes, sem o fundo metálico do cloro.",
  },
  {
    n: "05",
    t: "Tranquilidade para a família toda",
    d: "Toda a casa bebendo da mesma fonte filtrada e certificada. Você sabe exatamente o que está oferecendo para as crianças, os idosos e para quem você ama todos os dias.",
  },
  {
    n: "06",
    t: "Menos plástico, mais consciência",
    d: "Reduz o consumo de garrafas e galões descartáveis. Uma escolha mais leve para a sua rotina, para o orçamento e para o planeta — sem precisar carregar peso nem esperar entrega.",
  },
];

const DayanBenefits = () => {
  return (
    <section
      id="beneficios"
      className="relative ds-light overflow-hidden py-24 lg:py-32"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 dayan-reveal">
            <span className="ds-eyebrow inline-flex items-center gap-3">
              <span className="dayan-num text-2xl text-[hsl(var(--ds-blue-deep))] not-italic">
                05
              </span>
              Saúde, bem-estar e rotina
            </span>
            <h2 className="ds-display mt-5 text-4xl lg:text-6xl text-[hsl(var(--ds-ink))] leading-tight">
              Água é a base
              <br />
              de quase tudo que o seu corpo{" "}
              <span className="ds-italic font-medium text-[hsl(var(--ds-blue-deep))]">
                faz por você
              </span>
              <br />
              todos os dias.
            </h2>
          </div>
          <div className="lg:col-span-5 dayan-reveal dayan-reveal-delay-1 lg:pt-6">
            <p className="text-base lg:text-lg text-[hsl(var(--ds-ink-soft))] leading-relaxed">
              A boa hidratação é um dos hábitos mais simples e mais importantes para a saúde e o bem-estar da família. Ter uma fonte de água filtrada, leve e sempre disponível em casa torna esse cuidado natural — sem esforço, sem peso e sem complicação.
            </p>
          </div>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--ds-ink))]/10">
          {BENEFITS.map((b, i) => (
            <div
              key={b.n}
              className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bg-[hsl(var(--ds-light))] p-8 lg:p-10 group hover:bg-[hsl(var(--ds-blue-deep))] transition-colors duration-500`}
            >
              <div className="flex items-baseline gap-4">
                <span className="dayan-num text-xl text-[hsl(var(--ds-blue-deep))] group-hover:text-[hsl(var(--ds-accent))] transition-colors not-italic">
                  {b.n}
                </span>
                <h3 className="ds-display text-xl lg:text-2xl text-[hsl(var(--ds-ink))] group-hover:text-white transition-colors leading-tight">
                  {b.t}
                </h3>
              </div>
              <p className="mt-5 text-sm lg:text-base text-[hsl(var(--ds-ink-soft))] group-hover:text-white/80 transition-colors leading-relaxed">
                {b.d}
              </p>
            </div>
          ))}
        </div>

        <div className="dayan-reveal mt-16 max-w-3xl">
          <p className="ds-italic text-xl lg:text-2xl text-[hsl(var(--ds-ink))] leading-snug">
            "A água que entra no seu corpo todos os dias é parte importante da sua saúde. Vale prestar atenção na qualidade dela — é uma escolha simples que acompanha a família a vida toda."
          </p>
          <p className="mt-4 text-sm text-[hsl(var(--ds-ink-soft))]">
            Dr. Dayan Siebra, Cirurgião Vascular.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DayanBenefits;
