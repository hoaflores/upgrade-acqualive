import selos from "@/assets/dayan-acqualive-selos.png";

const DayanProof = () => {
  return (
    <section id="prova" className="relative ds-dark dayan-grain overflow-hidden py-24 lg:py-32">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 dayan-reveal">
            <span className="ds-eyebrow inline-flex items-center gap-3">
              <span className="dayan-num text-2xl text-[hsl(var(--ds-accent))] not-italic">
                06
              </span>
              Ciência, não opinião
            </span>
            <h2 className="ds-display mt-5 text-5xl lg:text-[5.5rem] text-white">
              Quando a Universidade
              <br />
              Federal mediu,
              <br />
              <span className="ds-italic font-medium text-[hsl(var(--ds-accent))]">
                +300% de imunidade.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 dayan-reveal dayan-reveal-delay-1">
            <p className="text-lg text-white/75 leading-relaxed">
              Estudo conduzido em Belém com famílias que substituíram a água
              comum por Acqualive durante 90 dias. Resultado mensurado em
              microRNA imunológico: aumento médio de 300%. Não é marketing. É
              PCR.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mb-20">
          {[
            { n: "+300%", l: "microRNA imunológico" },
            { n: "98%", l: "remoção de cloro" },
            { n: "150K+", l: "famílias atendidas" },
            { n: "26", l: "anos de pesquisa" },
          ].map((s, i) => (
            <div
              key={s.n}
              className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bg-[hsl(var(--ds-blue-deep))] p-8 lg:p-12`}
            >
              <div className="ds-display text-5xl lg:text-6xl text-[hsl(var(--ds-accent))]">
                {s.n}
              </div>
              <div className="mt-3 text-sm text-white/60 ds-eyebrow">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Selos */}
        <div className="dayan-reveal">
          <div className="text-center mb-10">
            <span className="ds-eyebrow text-white/60">
              Certificações &amp; aprovações
            </span>
            <h3 className="ds-display mt-3 text-3xl lg:text-4xl text-white">
              Não acredite em mim.{" "}
              <span className="ds-italic font-medium">
                Acredite nesses selos.
              </span>
            </h3>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-sm">
            <img
              src={selos}
              alt="Selos de aprovação Acqualive: INMETRO, ABNT, ANVISA, certificações de qualidade"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayanProof;
