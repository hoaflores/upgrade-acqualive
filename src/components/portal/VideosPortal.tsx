import ScrollReveal from "@/components/ScrollReveal";
import LiteYouTube from "@/components/LiteYouTube";
import { VIDEOS } from "@/data/portal-cientifico";

/**
 * Videoteca: o player so carrega apos o clique e usa youtube-nocookie
 * com controles reduzidos, para manter o estudo dentro do portal.
 */
const VideosPortal = () => (
  <section id="videos" className="scroll-mt-20 border-t border-[hsl(var(--pc-line))] py-20 md:py-28">
    <div className="container">
      <ScrollReveal>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-cyan))]">Videoteca</p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Ciencia da agua em video</h2>
          <p className="mt-4 text-[hsl(var(--pc-ink-soft))]">
            Aulas curtas para entender o que os estudos dizem. Os videos rodam aqui dentro, sem sugestoes externas ao
            final.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {VIDEOS.map((v, i) => (
          <ScrollReveal key={v.id} delay={(i % 2) * 90}>
            <div className="pc-card overflow-hidden rounded-2xl">
              <div className="relative aspect-video bg-[hsl(var(--pc-ink))]">
                <LiteYouTube
                  id={v.youtubeId}
                  title={v.titulo}
                  params="rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&fs=0"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-wider text-[hsl(var(--pc-ink-soft))]">{v.duracao}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{v.titulo}</h3>
                <p className="mt-2 text-sm text-[hsl(var(--pc-ink-soft))]">{v.descricao}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default VideosPortal;
