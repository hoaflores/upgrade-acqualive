import { useState } from "react";

interface LiteYouTubeProps {
  id: string;
  title: string;
  /** Extra YouTube params, e.g. "autoplay=1&rel=0&modestbranding=1" */
  params?: string;
  /** Thumbnail quality (hq=480, sd=640, maxres=1280) */
  quality?: "hq" | "sd" | "maxres";
  className?: string;
  /** Usa o dominio youtube-nocookie (sem cookies de rastreamento) */
  nocookie?: boolean;
}

/**
 * Facade leve para YouTube. Renderiza apenas a thumbnail até o usuário clicar.
 * Evita 40+ requests do player no carregamento inicial — crítico em mobile
 * e no in-app browser do YouTube/iOS.
 */
const LiteYouTube = ({
  id,
  title,
  params = "rel=0&modestbranding=1&playsinline=1",
  quality = "hq",
  className = "absolute inset-0 w-full h-full",
  nocookie = false,
}: LiteYouTubeProps) => {
  const [active, setActive] = useState(false);

  const thumbName = quality === "maxres" ? "maxresdefault" : quality === "sd" ? "sddefault" : "hqdefault";
  const autoplayParams = params.includes("autoplay=") ? params : `autoplay=1&${params}`;
  const host = nocookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";

  if (active) {
    return (
      <iframe
        src={`${host}/embed/${id}?${autoplayParams}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={className}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Reproduzir: ${title}`}
      className={`${className} group/play`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/${thumbName}.jpg`}
        alt={title}
        loading="lazy"
        width={480}
        height={360}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="absolute inset-0 bg-black/20 group-hover/play:bg-black/30 transition-colors" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/95 shadow-xl group-hover/play:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1 fill-current text-black" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
};

export default LiteYouTube;
