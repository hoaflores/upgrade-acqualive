import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import crystalLove from "@/assets/emoto/crystal-love.jpg";
import crystalChaos from "@/assets/emoto/crystal-chaos.jpg";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=554130777777&text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20Masaru%20Emoto%20e%20quero%20saber%20mais%20sobre%20o%20Acqualive.";

const EmotoMicroscopeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      id="microscope-section"
      ref={sectionRef}
      className="relative py-24 lg:py-40 px-6"
    >
      {/* Section Header */}
      <motion.div
        style={{ opacity }}
        className="text-center max-w-4xl mx-auto mb-16 lg:mb-24"
      >
        <span className="font-body text-emoto-highlight text-xs md:text-sm tracking-[0.2em] uppercase font-medium block mb-4">
          Tóquio, anos 90
        </span>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-6 font-bold">
          O que o microscópio revelou
        </h2>
        <p className="font-body text-emoto-silver text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          O Dr. Masaru Emoto fotografou cristais de água congelada após
          exposição a diferentes estímulos. Os resultados chocaram a comunidade
          científica.
        </p>
      </motion.div>

      {/* Crystal Comparison */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Chaos Crystal - Left */}
        <motion.div style={{ x: leftX, opacity }} className="relative group">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Microscope Lens Effect */}
            <div className="absolute inset-0 rounded-2xl border-4 border-red-400/20 z-10 pointer-events-none">
              <div className="absolute inset-4 rounded-xl border border-red-400/10" />
            </div>

            <img
              src={crystalChaos}
              alt="Cristal de água exposta a emoções negativas"
              className="w-full aspect-square object-cover filter grayscale-[30%] contrast-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emoto-bg via-transparent to-transparent" />
          </div>

          {/* Label */}
          <div className="mt-6 text-center">
            <span className="font-body text-red-400 text-xs md:text-sm tracking-widest uppercase font-medium block mb-2">
              Água da torneira
            </span>
            <p className="font-display text-white/90 text-lg md:text-xl font-semibold">
              Estrutura caótica e fragmentada
            </p>
            <p className="font-body text-emoto-silver/70 text-sm mt-2">
              Exposição a poluição, cloro e vibrações negativas
            </p>
          </div>
        </motion.div>

        {/* Love Crystal - Right */}
        <motion.div style={{ x: rightX, opacity }} className="relative group">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Microscope Lens Effect with Glow */}
            <div className="absolute inset-0 rounded-2xl border-4 border-emoto-accent/30 z-10 pointer-events-none shadow-[0_0_60px_rgba(29,67,128,0.25)]">
              <div className="absolute inset-4 rounded-xl border border-emoto-accent/20" />
            </div>

            <img
              src={crystalLove}
              alt="Cristal de água exposta a amor e gratidão"
              className="w-full aspect-square object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emoto-bg via-transparent to-transparent" />
          </div>

          {/* Label */}
          <div className="mt-6 text-center">
            <span className="font-body text-emoto-accent text-xs md:text-sm tracking-widest uppercase font-medium block mb-2">
              Água de nascente
            </span>
            <p className="font-display text-white/90 text-lg md:text-xl font-semibold">
              Geometria hexagonal perfeita
            </p>
            <p className="font-body text-emoto-silver/70 text-sm mt-2">
              Exposição a amor, gratidão e palavras positivas
            </p>
          </div>
        </motion.div>
      </div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto mt-20 text-center"
      >
        <p className="font-display text-xl md:text-2xl text-white/90 italic leading-relaxed">
          "A água é o espelho que tem a habilidade de nos mostrar o que não
          podemos ver. É o reflexo de quem somos."
        </p>
        <cite className="font-body text-emoto-highlight text-xs md:text-sm tracking-widest uppercase font-medium block mt-4 not-italic">
          — Dr. Masaru Emoto
        </cite>
      </motion.blockquote>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center mt-16"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-emoto-highlight to-orange-500 text-white font-display font-semibold text-base md:text-lg shadow-lg shadow-emoto-highlight/30 hover:shadow-xl hover:shadow-emoto-highlight/40 hover:scale-[1.02] transition-all duration-300"
        >
          QUERO ÁGUA DE QUALIDADE
        </a>
      </motion.div>
    </section>
  );
};

export default EmotoMicroscopeSection;
