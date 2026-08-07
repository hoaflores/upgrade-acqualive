import { motion } from "framer-motion";
import LiteYouTube from "@/components/LiteYouTube";

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const VIDEOS = [
  {
    id: "dmbazAHk1xo",
    titulo: "As mensagens da água, por Masaru Emoto",
    desc: "O próprio pesquisador explica como nasceu o estudo dos cristais de água.",
    destaque: true,
  },
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
  <section id="videos-emoto" className="bg-gradient-to-b from-sacra-mist/50 to-white px-6 py-14 md:py-24">
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto max-w-3xl space-y-5 text-center">
        <motion.span
          {...rise}
          className="inline-flex items-center gap-2 rounded-full border border-sacra-blue/25 bg-white/70 px-4 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-sacra-deep shadow-sm backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sacra-gold" />
          Em vídeo · O pesquisador
        </motion.span>
        <motion.h2
          {...rise}
          className="font-display text-3xl font-bold leading-[1.15] text-sacra-ink md:text-5xl"
        >
          Masaru Emoto em suas próprias palavras.
        </motion.h2>
        <motion.p
          {...rise}
          transition={{ ...rise.transition, delay: 0.05 }}
          className="font-body text-lg leading-relaxed text-sacra-muted md:text-xl"
        >
          Uma seleção de registros sobre as pesquisas, os experimentos e a visão de água viva
          que atravessou mais de vinte anos de trabalho.
        </motion.p>
      </div>

      <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
        {VIDEOS.map((v, i) => (
          <motion.article
            key={v.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`overflow-hidden rounded-3xl border border-sacra-veil bg-white shadow-lg ${
              v.destaque ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <LiteYouTube
                id={v.id}
                title={v.titulo}
                quality={v.destaque ? "maxres" : "hq"}
                nocookie
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="font-display text-lg font-semibold text-sacra-ink md:text-xl">
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
