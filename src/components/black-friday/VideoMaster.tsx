/**
 * Espaço reservado para o vídeo master da campanha.
 *
 * Para publicar o vídeo:
 * 1. Troque enabled para true.
 * 2. Preencha youtubeId (ex.: "dQw4w9WgXcQ") OU src (link direto de um .mp4).
 * 3. Opcional: poster (imagem de capa) e title.
 *
 * Enquanto enabled for false, a seção não aparece na página.
 */
export const VIDEO_MASTER = {
  enabled: false,
  youtubeId: "",
  src: "",
  poster: "",
  title: "Black Friday Acqualive",
};

export const VideoMaster = () => {
  if (!VIDEO_MASTER.enabled || (!VIDEO_MASTER.youtubeId && !VIDEO_MASTER.src)) return null;

  return (
    <section aria-label="Vídeo da campanha" style={{ background: "var(--ink)", paddingBlock: "var(--section)" }}>
      <div className="bf-wrap">
        <div style={{ background: "#000", aspectRatio: "16 / 9" }}>
          {VIDEO_MASTER.youtubeId ? (
            <iframe
              style={{ width: "100%", height: "100%", border: 0 }}
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_MASTER.youtubeId}?rel=0&modestbranding=1`}
              title={VIDEO_MASTER.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              style={{ width: "100%", height: "100%" }}
              src={VIDEO_MASTER.src}
              poster={VIDEO_MASTER.poster || undefined}
              controls
              playsInline
              preload="metadata"
            />
          )}
        </div>
      </div>
    </section>
  );
};
