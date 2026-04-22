import seloInmetro from "@/assets/dayan/selo-inmetro.png";
import seloMagnesio from "@/assets/dayan/selo-magnesio.png";
import seloMinerais from "@/assets/dayan/selo-minerais.png";
import seloLaudo from "@/assets/dayan/selo-laudo.png";
import seloCloro from "@/assets/dayan/selo-cloro.png";

const SELOS = [
  { src: seloInmetro, alt: "Certificação INMETRO Classe A" },
  { src: seloMagnesio, alt: "Acrescenta magnésio à água" },
  { src: seloMinerais, alt: "Minerais essenciais preservados" },
  { src: seloLaudo, alt: "Laudo técnico oficial" },
  { src: seloCloro, alt: "Retira o cloro da água" },
];

const DayanProof = () => {
  // duplicado para loop infinito do marquee
  const loop = [...SELOS, ...SELOS, ...SELOS];

  return (
    <section id="prova" className="relative ds-dark dayan-grain overflow-hidden py-24 lg:py-32">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 dayan-reveal">
            <span className="ds-eyebrow inline-flex items-center gap-3">
              <span className="dayan-num text-2xl text-[hsl(var(--ds-accent))] not-italic">
                06
              </span>
              Ciência, não opinião
            </span>
            <h2 className="ds-display mt-5 text-4xl lg:text-6xl text-white leading-tight">
              Quando a Universidade
              <br />
              Federal mediu o efeito
              <br />
              <span className="ds-italic font-medium text-[hsl(var(--ds-accent))]">
                em pacientes com gastrite.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 dayan-reveal dayan-reveal-delay-1">
            <p className="text-base lg:text-lg text-white/75 leading-relaxed">
              Estudo conduzido em Belém com 28 pacientes portadores de gastrite,
              acompanhados por endoscopia digestiva alta antes e depois de
              substituírem a água ácida do dia a dia por água alcalina ionizada
              durante 4 meses.
            </p>
            <p className="mt-4 text-base lg:text-lg text-white/75 leading-relaxed">
              O resultado foi publicado em revista indexada no PubMed e
              apresentado em congresso mundial em Praga.
            </p>
          </div>
        </div>

        {/* Stats grid: foco no efeito gástrico e antiinflamatório */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mb-20">
          {[
            { n: "p=0,024", l: "melhora endoscópica significativa da gastrite" },
            { n: "43%", l: "dos pacientes apresentaram melhora clínica" },
            { n: "7%", l: "remissão completa do quadro" },
            { n: "↓ TNF-α", l: "ação antiinflamatória na mucosa gástrica" },
          ].map((s, i) => (
            <div
              key={s.n}
              className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bg-[hsl(var(--ds-blue-deep))] p-6 lg:p-10`}
            >
              <div className="ds-display text-3xl lg:text-4xl text-[hsl(var(--ds-accent))]">
                {s.n}
              </div>
              <div className="mt-3 text-xs lg:text-sm text-white/70 leading-snug">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Bloco interpretação */}
        <div className="dayan-reveal grid lg:grid-cols-12 gap-10 mb-20 border-t border-white/10 pt-12">
          <div className="lg:col-span-5">
            <span className="ds-eyebrow text-white/50">O que isso significa</span>
          </div>
          <div className="lg:col-span-7">
            <p className="ds-italic text-2xl lg:text-3xl text-white leading-snug">
              "A simples troca do pH da água ingerida foi capaz de melhorar
              clinicamente a gastrite e reduzir marcadores de inflamação
              gástrica. Não é placebo. É endoscopia."
            </p>
            <p className="mt-4 text-sm text-white/50">
              Dissertação sobre efeitos do consumo de água alcalina em
              pacientes com gastrite, com correlação a marcadores epigenéticos
              relacionados à inflamação.
            </p>
          </div>
        </div>

        {/* Selos: slider sem fundo branco */}
        <div className="dayan-reveal">
          <div className="text-center mb-10">
            <span className="ds-eyebrow text-white/60">
              Certificações e laudos oficiais
            </span>
            <h3 className="ds-display mt-3 text-2xl lg:text-3xl text-white">
              Comprovações que sustentam o produto
            </h3>
          </div>

          <div className="relative overflow-hidden py-4">
            {/* fades laterais */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[hsl(var(--ds-blue-deep))] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[hsl(var(--ds-blue-deep))] to-transparent z-10 pointer-events-none" />

            <div className="ds-marquee">
              {loop.map((s, i) => (
                <div
                  key={i}
                  className="shrink-0 px-8 lg:px-12 flex items-center justify-center"
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="h-20 lg:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayanProof;
