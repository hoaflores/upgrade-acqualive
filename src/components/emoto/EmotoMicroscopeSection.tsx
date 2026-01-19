import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import crystalLove from "@/assets/emoto/crystal-love.jpg";
import crystalChaos from "@/assets/emoto/crystal-chaos.jpg";

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
        <span
          className="font-mono text-emoto-gold text-xs tracking-[0.3em] uppercase block mb-4"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Tóquio, anos 90
        </span>
        <h2
          className="font-serif text-3xl md:text-5xl text-white mb-6"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          O que o microscópio revelou
        </h2>
        <p
          className="font-mono text-emoto-silver/70 text-sm max-w-2xl mx-auto"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
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
            <div className="absolute inset-0 rounded-2xl border-4 border-emoto-silver/20 z-10 pointer-events-none">
              <div className="absolute inset-4 rounded-xl border border-emoto-silver/10" />
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
            <span
              className="font-mono text-red-400 text-xs tracking-widest uppercase block mb-2"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Água da torneira
            </span>
            <p
              className="font-serif text-white/80 text-lg"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Estrutura caótica e fragmentada
            </p>
            <p
              className="font-mono text-emoto-silver/50 text-xs mt-2"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Exposição a poluição, cloro e vibrações negativas
            </p>
          </div>
        </motion.div>

        {/* Love Crystal - Right */}
        <motion.div style={{ x: rightX, opacity }} className="relative group">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Microscope Lens Effect with Glow */}
            <div className="absolute inset-0 rounded-2xl border-4 border-emoto-cyan/30 z-10 pointer-events-none shadow-[0_0_60px_rgba(0,212,255,0.15)]">
              <div className="absolute inset-4 rounded-xl border border-emoto-cyan/20" />
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
            <span
              className="font-mono text-emoto-cyan text-xs tracking-widest uppercase block mb-2"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Água de nascente
            </span>
            <p
              className="font-serif text-white/80 text-lg"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Geometria hexagonal perfeita
            </p>
            <p
              className="font-mono text-emoto-silver/50 text-xs mt-2"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
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
        <p
          className="font-serif text-xl md:text-2xl text-emoto-silver/80 italic"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          "A água é o espelho que tem a habilidade de nos mostrar o que não
          podemos ver. É o reflexo de quem somos."
        </p>
        <cite
          className="font-mono text-emoto-gold text-xs tracking-widest uppercase block mt-4 not-italic"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          — Dr. Masaru Emoto
        </cite>
      </motion.blockquote>
    </section>
  );
};

export default EmotoMicroscopeSection;
