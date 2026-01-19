import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import waterDropHero from "@/assets/emoto/water-drop-hero.jpg";

const EmotoHeroSection = () => {
  const scrollToContent = () => {
    const nextSection = document.getElementById("microscope-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${waterDropHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emoto-bg/60 via-transparent to-emoto-bg" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated Logo/Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-mono text-emoto-cyan/80 text-xs tracking-[0.3em] uppercase">
            Baseado nos estudos do Dr. Masaru Emoto
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          A água ouve
          <br />
          <span className="text-emoto-cyan">o que você pensa.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-mono text-emoto-silver/70 text-sm md:text-base max-w-xl mx-auto mb-12"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Descubra a ciência por trás da memória da água e como ela responde às
          vibrações do seu ambiente.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { delay: 2, duration: 1.5, repeat: Infinity },
          }}
          className="text-emoto-cyan/60 hover:text-emoto-cyan transition-colors flex flex-col items-center gap-2"
        >
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Role para descobrir
          </span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emoto-bg to-transparent z-20" />
    </section>
  );
};

export default EmotoHeroSection;
