import { motion } from "framer-motion";
import LiteYouTube from "@/components/LiteYouTube";
import hexagonCrystal from "@/assets/emoto/hexagon-crystal.jpg";

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const DESTAQUE = {
  id: "dmbazAHk1xo",
  titulo: "As mensagens da água, por Masaru Emoto",
  desc: "O próprio pesquisador explica como nasceu o estudo dos cristais de água e o que ele observou ao longo de mais de vinte anos de trabalho.",
  poster: hexagonCrystal,
};

const VIDEOS = [
  {
    id: "vwB0f5BEx4M",
    titulo: "Os cristais no microscópio",
    desc: "Registros das fotografias que tornaram a pesquisa conhecida no mundo inteiro.",
  },
  {
    id: "B2id9_flc9w",
    titulo: "Água, palavra e intenção",
    desc: "O experimento que comparou gotas expostas a palavras diferentes.",
  },
  {
    id: "ZTIrBHFJODU",
    titulo: "O legado de Masaru Emoto",
    desc: "A repercussão da pesquisa e o convite à consciência sobre a água.",
  },
];

const VideosEmoto = () => (
  <section
    id="videos-emoto"
    className="bg-gradient-to-b from-sacra-mist/50 to-white px-5 py-14 sm:px-6 md:py-24"
  >
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl space-y-4 text-center md:space-y-5">
        <motion.span
          {...rise}
          className="inline-flex items-center gap-2 rounded-full border border-sacra-blue/25 bg-white/70 px-4 py-1.5 font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-sacra-deep shadow-sm backdrop-blur sm:text-[11px] sm:tracking-[0.24em]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sacra-gold" />
          Em vídeo · O pesquisador
        </motion.span>
        <motion.h2
          {...rise}
          className="font-display text-[26px] font-bold leading-[1.15] text-sacra-ink sm:text-3xl md:text-5xl"
        >
          Masaru Emoto em suas próprias palavras.
        </motion.h2>
        <motion.p
          {...rise}
          transition={{ ...rise.transition, delay: 0.05 }}
          className="font-body text-base leading-relaxed text-sacra-muted sm:text-lg md:text-xl"
        >
          Uma seleção de registros sobre as pesquisas, os experimentos e a visão de água viva
          que atravessou mais de vinte anos de trabalho.
        </motion.p>
      </div>

      {/* Destaque */}
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 overflow-hidden rounded-[28px] border border-sacra-veil bg-white shadow-xl md:mt-14 md:grid md:grid-cols-5 md:items-stretch"
      >
        <div className="relative aspect-video w-full overflow-hidden md:col-span-3 md:aspect-auto md:min-h-[340px]">
          <LiteYouTube
            id={DESTAQUE.id}
            title={DESTAQUE.titulo}
            quality="maxres"
            poster={DESTAQUE.poster}
            nocookie
          />
        </div>
        <div className="flex flex-col justify-center gap-3 p-6 md:col-span-2 md:p-8">
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-sacra-gold">
            Destaque
          </span>
          <h3 className="font-display text-xl font-semibold leading-snug text-sacra-ink md:text-2xl">
            {DESTAQUE.titulo}
          </h3>
          <p className="font-body text-sm leading-relaxed text-sacra-muted md:text-base">
            {DESTAQUE.desc}
          </p>
        </div>
      </motion.article>

      {/* Demais vídeos */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 md:mt-8 md:grid-cols-3 md:gap-6">
        {VIDEOS.map((v, i) => (
          <motion.article
            key={v.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="flex flex-col overflow-hidden rounded-2xl border border-sacra-veil bg-white shadow-lg"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <LiteYouTube id={v.id} title={v.titulo} quality="hq" nocookie />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-base font-semibold leading-snug text-sacra-ink md:text-lg">
                {v.titulo}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-sacra-muted">{v.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default VideosEmoto;
