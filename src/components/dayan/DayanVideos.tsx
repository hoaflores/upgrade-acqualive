import { useState } from "react";

const VIDEOS = [
  {
    id: "fbFGc8QxmVE",
    n: "01",
    title: "A qualidade da água que chega na sua casa",
    desc: "O que tem na água da torneira e por que vale prestar atenção no que você bebe.",
  },
  {
    id: "KpsTsCc2bDE",
    n: "02",
    title: "Os 5 pilares da água ideal",
    desc: "Critérios técnicos que o Dr. Dayan considera para escolher uma água melhor.",
  },
  {
    id: "x1SgUYcT6Ak",
    n: "03",
    title: "Podcast completo",
    desc: "1h44 de conversa sobre hidratação, rotina e qualidade da água em casa.",
  },
];

// Facade leve: só carrega o iframe pesado do YouTube quando o usuário clica.
// Isso elimina dezenas de requests por vídeo no carregamento inicial,
// crítico para mobile (especialmente no in-app browser do YouTube/iOS).
const LiteYouTube = ({ id, title }: { id: string; title: string }) => {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Reproduzir: ${title}`}
      className="absolute inset-0 w-full h-full group/play"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        width={480}
        height={360}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="absolute inset-0 bg-black/20 group-hover/play:bg-black/30 transition-colors" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/95 shadow-xl group-hover/play:scale-110 transition-transform">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 ml-1 fill-[hsl(var(--ds-ink))]"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
};

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
              Selecionei três vídeos em que mostro, com calma e sem
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
                <LiteYouTube id={v.id} title={v.title} />
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
