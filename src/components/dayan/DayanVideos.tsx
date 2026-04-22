const VIDEOS = [
  {
    id: "fbFGc8QxmVE",
    n: "01",
    title: "A água que te enferruja por dentro",
    desc: "Por que a maioria dos brasileiros bebe veneno legalizado todos os dias.",
  },
  {
    id: "KpsTsCc2bDE",
    n: "02",
    title: "Os 5 pilares da água ideal",
    desc: "O que a OMS, a NASA e a medicina ortomolecular concordam.",
  },
  {
    id: "x1SgUYcT6Ak",
    n: "03",
    title: "Podcast completo",
    desc: "1h44 sobre hidratação celular, longevidade e prevenção.",
  },
];

const DayanVideos = () => {
  return (
    <section id="videos" className="relative py-24 lg:py-32 bg-[hsl(var(--ds-surface))]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5 dayan-reveal">
            <span className="ds-eyebrow text-[hsl(var(--ds-accent))]">
              <span className="dayan-num text-2xl text-[hsl(var(--ds-accent))] not-italic mr-2">
                02
              </span>
              Em vídeo
            </span>
            <h2 className="ds-display mt-5 text-4xl lg:text-6xl text-[hsl(var(--ds-ink))] leading-tight">
              Antes de me ler,
              <br />
              <span className="ds-italic font-medium text-[hsl(var(--ds-blue-deep))]">
                me escute.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 dayan-reveal dayan-reveal-delay-1">
            <p className="text-lg text-[hsl(var(--ds-ink-soft))] leading-relaxed">
              Selecionei três conversas em que mostro, com calma e sem
              alarmismo, o que a indústria da água engarrafada e o saneamento
              brasileiro preferem que você não saiba. Comece pelo primeiro.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {VIDEOS.map((v, i) => (
            <article
              key={v.id}
              className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} group`}
            >
              <div className="relative aspect-video overflow-hidden bg-[hsl(var(--ds-blue-deep))] rounded-sm">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-6 flex items-start gap-4">
                <span className="dayan-num text-3xl text-[hsl(var(--ds-accent))]">
                  {v.n}
                </span>
                <div>
                  <h3 className="ds-display text-xl text-[hsl(var(--ds-ink))] leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--ds-muted))] mt-2 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayanVideos;
