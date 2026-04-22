const BENEFITS = [
  {
    n: "01",
    t: "Mais energia ao acordar",
    d: "Você dorme hidratado de verdade. A água com pH ideal é absorvida mais rápido pelas células, então o corpo acorda menos pesado e a manhã rende mais.",
  },
  {
    n: "02",
    t: "Digestão mais leve",
    d: "Sem cloro e sem acidez agressiva, o estômago para de reclamar depois das refeições. Azia, queimação e aquele inchaço chato diminuem em poucas semanas.",
  },
  {
    n: "03",
    t: "Pele e cabelo melhores",
    d: "Quando o corpo está hidratado por dentro, a pele aparece por fora. Menos ressecamento, menos olheira, cabelo com mais brilho. Sem creme, só água boa.",
  },
  {
    n: "04",
    t: "Menos inflamação no corpo",
    d: "Dor de cabeça frequente, articulação que estala, cansaço sem motivo. Muita coisa que você acha normal é só inflamação silenciosa pedindo água de qualidade.",
  },
  {
    n: "05",
    t: "Comida com sabor de verdade",
    d: "Café, chá, arroz, sopa. Tudo muda quando a água base é limpa. Você vai sentir o gosto real do que come, sem o fundo metálico do cloro.",
  },
  {
    n: "06",
    t: "Tranquilidade pra família toda",
    d: "Criança, idoso, gestante. Todos bebem da mesma fonte segura. Você para de comprar galão, para de carregar peso e para de se preocupar com a procedência.",
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
              O que muda na sua vida
            </span>
            <h2 className="ds-display mt-5 text-4xl lg:text-6xl text-[hsl(var(--ds-ink))] leading-tight">
              Não é sobre beber água.
              <br />
              É sobre{" "}
              <span className="ds-italic font-medium text-[hsl(var(--ds-blue-deep))]">
                acordar diferente
              </span>
              <br />
              em 30 dias.
            </h2>
          </div>
          <div className="lg:col-span-5 dayan-reveal dayan-reveal-delay-1 lg:pt-6">
            <p className="text-base lg:text-lg text-[hsl(var(--ds-ink-soft))] leading-relaxed">
              Esquece pH, ORP, hidrogênio molecular por um minuto. O que você
              vai sentir, de verdade, na sua casa, no seu corpo e no seu humor.
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
            "A maioria dos meus pacientes não percebe que está desidratada. Eles
            só percebem quando voltam a beber água de verdade, e o corpo
            responde."
          </p>
          <p className="mt-4 text-sm text-[hsl(var(--ds-ink-soft))]">
            Dr. Dayan Siebra, Cirurgião Cardiovascular.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DayanBenefits;
