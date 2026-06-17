const BENEFITS = [
  {
    n: "01",
    t: "Mais sabor no copo",
    d: "Sem o gosto e o odor do cloro, a água fica mais agradável de beber. Muita gente passa a tomar mais água naturalmente quando ela tem um sabor melhor.",
  },
  {
    n: "02",
    t: "Cozinha mais saborosa",
    d: "Café, chá, arroz e sopa ganham outro sabor quando a água base é filtrada. Você sente o gosto real dos ingredientes, sem o fundo metálico do cloro.",
  },
  {
    n: "03",
    t: "Praticidade no dia a dia",
    d: "Água filtrada direto na torneira da bancada. Sem precisar lembrar de comprar galão, carregar peso ou esperar entrega.",
  },
  {
    n: "04",
    t: "Menos plástico em casa",
    d: "Reduz o consumo de garrafas e galões descartáveis. Uma escolha mais consciente para a sua rotina e para o planeta.",
  },
  {
    n: "05",
    t: "Tranquilidade para a família",
    d: "Toda a casa bebendo da mesma fonte filtrada e certificada. Você sabe exatamente o que está oferecendo para quem você ama.",
  },
  {
    n: "06",
    t: "Equipamento durável",
    d: "Projetado para durar anos com manutenção simples. Refis com lembrete de troca para você nunca ficar sem.",
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
              O que muda na sua rotina
            </span>
            <h2 className="ds-display mt-5 text-4xl lg:text-6xl text-[hsl(var(--ds-ink))] leading-tight">
              Não é só beber água.
              <br />
              É ter uma{" "}
              <span className="ds-italic font-medium text-[hsl(var(--ds-blue-deep))]">
                fonte melhor
              </span>
              <br />
              dentro de casa.
            </h2>
          </div>
          <div className="lg:col-span-5 dayan-reveal dayan-reveal-delay-1 lg:pt-6">
            <p className="text-base lg:text-lg text-[hsl(var(--ds-ink-soft))] leading-relaxed">
              Esquece pH, ORP, hidrogênio molecular por um minuto. O que muda na prática, na sua cozinha, no seu copo e na rotina da sua família.
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
            "Recomendo que as pessoas prestem atenção à qualidade da água que consomem todos os dias. É uma escolha simples que muda o sabor do que se bebe em casa."
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
