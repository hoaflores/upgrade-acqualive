import dayanHero from "@/assets/dayan-hero-portrait.png";

const DayanHero = () => {
  return (
    <section
      id="top"
      className="relative pt-24 pb-16 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      {/* Tagline marquee superior */}
      <div className="absolute top-16 lg:top-20 left-0 right-0 overflow-hidden border-y border-[hsl(var(--ds-line))] bg-[hsl(var(--ds-surface))]/50">
        <div className="ds-marquee py-2.5">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 pr-10 shrink-0">
              {[
                "70% do seu corpo é água",
                "99,9% do cloro removido",
                "pH entre 8,5 e 10",
                "PRAL negativo",
                "Minerais essenciais preservados",
              ].map((t, i) => (
                <span
                  key={`${k}-${i}`}
                  className="ds-eyebrow text-[hsl(var(--ds-ink-soft))] flex items-center gap-10 shrink-0"
                >
                  {t}
                  <span className="w-1 h-1 rounded-full bg-[hsl(var(--ds-accent))]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE: portrait-first hero */}
      <div className="lg:hidden max-w-[1400px] mx-auto px-5 pt-16">
        <div className="dayan-reveal">
          <span className="ds-eyebrow text-[hsl(var(--ds-accent))] inline-flex items-center gap-2 text-[10px]">
            <span className="w-6 h-px bg-[hsl(var(--ds-accent))]" />
            Carta aberta de um cirurgião vascular
          </span>
        </div>

        {/* Retrato com gradiente e moldura editorial */}
        <div className="dayan-reveal dayan-reveal-delay-1 relative mt-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[hsl(var(--ds-blue-deep))] via-[hsl(var(--ds-blue-deep))]/90 to-[hsl(var(--ds-ink))] rounded-sm">
            {/* Numeração editorial */}
            <div className="absolute top-4 left-4 z-10 ds-eyebrow text-white/70 text-[10px]">
              <span className="dayan-num text-xl text-[hsl(var(--ds-accent))] not-italic">
                01
              </span>{" "}
              / Apresentação
            </div>

            <img
              src={dayanHero}
              alt="Dr. Dayan Siebra, cirurgião vascular"
              className="absolute inset-0 w-full h-full object-cover object-top"
              width={900}
              height={1125}
            />

            {/* Vinheta inferior para legibilidade */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--ds-ink))] via-[hsl(var(--ds-ink))]/70 to-transparent" />

            {/* Headline sobreposta */}
            <div className="absolute inset-x-0 bottom-0 p-5 pb-6">
              <h1 className="ds-display text-white text-[2rem] sm:text-[2.6rem] leading-[1.02]">
                A água que
                <br />
                você bebe está
                <br />
                <span className="ds-italic font-medium text-[hsl(var(--ds-accent))]">
                  merece atenção
                </span>
                <span className="text-white">.</span>
              </h1>
            </div>

            {/* Selo lateral */}
            <div className="absolute -right-px top-20 bg-white/95 backdrop-blur-sm px-3 py-2 border-l-2 border-[hsl(var(--ds-accent))]">
              <span className="ds-eyebrow text-[hsl(var(--ds-muted))] text-[9px] block">
                Especialidade
              </span>
              <span className="ds-italic text-xs text-[hsl(var(--ds-ink))]">
                Cirurgia Vascular
              </span>
            </div>
          </div>
        </div>

        <p className="dayan-reveal dayan-reveal-delay-2 mt-6 text-base text-[hsl(var(--ds-ink-soft))] leading-relaxed">
          O Dr. Dayan resolveu falar sobre a água porque descobriu que 99% das pessoas não sabem o que realmente estão bebendo. E essa informação mudou a vida dele e de milhares de pacientes.
        </p>
        <p className="dayan-reveal dayan-reveal-delay-2 mt-4 text-base text-[hsl(var(--ds-ink-soft))] leading-relaxed">
          Sou o Dr. Dayan Siebra, cirurgião vascular. Estudei medicina
          por 11 anos e não tive{" "}
          <em className="ds-italic">uma única hora de aula</em> sobre o líquido
          que ocupa 70% do meu corpo. O que descobri depois mudou minha forma
          de cuidar dos meus pacientes e da minha família.
        </p>

        <div className="dayan-reveal dayan-reveal-delay-3 mt-7 flex flex-col gap-3">
          <a
            href="http://www.acqualive.com.br/VIDALIMPA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[hsl(var(--ds-ink))] text-white px-6 py-4 rounded-full font-semibold hover:bg-[hsl(var(--ds-blue-deep))] transition-all text-sm"
          >
            Quero a água que o Dr. Dayan recomenda
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#videos"
            className="inline-flex items-center justify-center gap-2 text-[hsl(var(--ds-ink))] py-2 font-semibold dayan-link text-sm"
          >
            Assistir aos vídeos
          </a>
        </div>

        {/* Stats em cartão editorial */}
        <div className="dayan-reveal mt-10 grid grid-cols-3 gap-3 border-t border-[hsl(var(--ds-line))] pt-6">
          {[
            { n: "70%", l: "do seu corpo é água" },
            { n: "99,9%", l: "do cloro removido" },
            { n: "pH 8,5", l: "a água que o corpo busca" },
          ].map((s) => (
            <div key={s.n}>
              <div className="ds-display text-xl text-[hsl(var(--ds-blue-deep))] leading-none">
                {s.n}
              </div>
              <div className="text-[10px] text-[hsl(var(--ds-muted))] mt-2 leading-snug">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP: layout original em duas colunas */}
      <div className="hidden lg:block max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Coluna esquerda: tipografia editorial */}
          <div className="lg:col-span-7">
            <div className="dayan-reveal">
              <span className="ds-eyebrow text-[hsl(var(--ds-accent))] inline-flex items-center gap-3">
                <span className="w-8 h-px bg-[hsl(var(--ds-accent))]" />
                Carta aberta de um cirurgião vascular
              </span>
            </div>

            <h1 className="ds-display dayan-reveal dayan-reveal-delay-1 mt-6 text-[3.4rem] lg:text-[4.6rem] xl:text-[5.4rem] text-[hsl(var(--ds-ink))] leading-[1.02]">
              A água que
              <br />
              você bebe está
              <br />
              <span className="ds-italic font-medium text-[hsl(var(--ds-accent))]">
                merece atenção
              </span>
              <span className="text-[hsl(var(--ds-ink))]">.</span>
            </h1>

            <p className="dayan-reveal dayan-reveal-delay-2 mt-8 text-base lg:text-lg text-[hsl(var(--ds-ink-soft))] max-w-xl leading-relaxed">
              O Dr. Dayan resolveu falar sobre a água porque descobriu que 99% das pessoas não sabem o que realmente estão bebendo. E essa informação mudou a vida dele e de milhares de pacientes.
            </p>
            <p className="dayan-reveal dayan-reveal-delay-2 mt-4 text-base lg:text-lg text-[hsl(var(--ds-ink-soft))] max-w-xl leading-relaxed">
              Sou o Dr. Dayan Siebra, cirurgião vascular. Estudei medicina por 11 anos e não tive{" "}
              <em className="ds-italic">uma única hora de aula</em> sobre o
              líquido que ocupa 70% do meu corpo. O que descobri depois mudou
              minha forma de cuidar dos meus pacientes e da minha família.
            </p>

            <div className="dayan-reveal dayan-reveal-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="http://www.acqualive.com.br/VIDALIMPA"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[hsl(var(--ds-ink))] text-white px-8 py-5 rounded-full font-semibold hover:bg-[hsl(var(--ds-blue-deep))] transition-all"
              >
                Quero a água que o Dr. Dayan recomenda
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#videos"
                className="inline-flex items-center justify-center gap-3 text-[hsl(var(--ds-ink))] px-6 py-5 font-semibold dayan-link"
              >
                Assistir aos vídeos
              </a>
            </div>

            {/* Stats inline editorial: foco em ÁGUA, não na marca */}
            <div className="dayan-reveal mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-[hsl(var(--ds-line))] pt-8">
              {[
                { n: "70%", l: "do seu corpo é água" },
                { n: "99,9%", l: "do cloro removido" },
                { n: "pH 8,5", l: "a água que o corpo busca" },
              ].map((s) => (
                <div key={s.n}>
                  <div className="ds-display text-2xl lg:text-3xl text-[hsl(var(--ds-blue-deep))]">
                    {s.n}
                  </div>
                  <div className="text-xs text-[hsl(var(--ds-muted))] mt-2 leading-snug">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita: retrato */}
          <div className="lg:col-span-5 dayan-reveal dayan-reveal-delay-2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 ds-eyebrow text-[hsl(var(--ds-muted))] hidden lg:block">
                <span className="dayan-num text-2xl text-[hsl(var(--ds-accent))] not-italic">
                  01
                </span>{" "}
                / Apresentação
              </div>

              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[hsl(var(--ds-blue-deep))] via-[hsl(var(--ds-blue-deep))]/90 to-[hsl(var(--ds-ink))] rounded-sm">
                <img
                  src={dayanHero}
                  alt="Dr. Dayan Siebra, cirurgião vascular"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  width={1080}
                  height={1440}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ds-blue-deep))]/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -right-4 -bottom-4 hidden lg:flex flex-col items-end bg-white px-5 py-4 border border-[hsl(var(--ds-line))] shadow-xl">
                <span className="ds-eyebrow text-[hsl(var(--ds-muted))]">
                  Especialidade
                </span>
                <span className="ds-italic text-lg text-[hsl(var(--ds-ink))]">
                  Cirurgia Vascular
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayanHero;
