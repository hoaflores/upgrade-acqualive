import { motion } from "framer-motion";
import { useState } from "react";
import crystalLove from "@/assets/emoto/crystal-love.jpg";
import crystalChaos from "@/assets/emoto/crystal-chaos.jpg";

const EmotoWordsSection = () => {
  const [activeWord, setActiveWord] = useState<"love" | "hate" | null>(null);

  return (
    <section className="relative py-24 lg:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-emoto-highlight text-xs md:text-sm tracking-[0.2em] uppercase font-medium block mb-4">
            O experimento
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-6 font-bold">
            Palavras têm poder
          </h2>
          <p className="font-body text-emoto-silver text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Passe o mouse sobre as palavras e veja como a água responde a
            diferentes intenções
          </p>
        </motion.div>

        {/* Interactive Words */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
          {/* AMOR */}
          <motion.button
            onMouseEnter={() => setActiveWord("love")}
            onMouseLeave={() => setActiveWord(null)}
            onTouchStart={() => setActiveWord("love")}
            onTouchEnd={() => setActiveWord(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`relative px-12 py-6 rounded-xl transition-all duration-500 ${
              activeWord === "love"
                ? "bg-emoto-accent/20 shadow-[0_0_60px_rgba(29,67,128,0.4)]"
                : "bg-white/5 hover:bg-white/10"
            } backdrop-blur-sm border ${
              activeWord === "love"
                ? "border-emoto-accent/50"
                : "border-white/10"
            }`}
          >
            <span
              className={`font-display text-4xl md:text-5xl font-bold transition-colors duration-300 ${
                activeWord === "love" ? "text-emoto-accent" : "text-white"
              }`}
            >
              AMOR
            </span>
          </motion.button>

          {/* VS Divider */}
          <span className="font-body text-emoto-silver/40 text-sm font-medium">
            vs
          </span>

          {/* ÓDIO */}
          <motion.button
            onMouseEnter={() => setActiveWord("hate")}
            onMouseLeave={() => setActiveWord(null)}
            onTouchStart={() => setActiveWord("hate")}
            onTouchEnd={() => setActiveWord(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`relative px-12 py-6 rounded-xl transition-all duration-500 ${
              activeWord === "hate"
                ? "bg-red-500/20 shadow-[0_0_60px_rgba(239,68,68,0.3)]"
                : "bg-white/5 hover:bg-white/10"
            } backdrop-blur-sm border ${
              activeWord === "hate" ? "border-red-500/50" : "border-white/10"
            }`}
          >
            <span
              className={`font-display text-4xl md:text-5xl font-bold transition-colors duration-300 ${
                activeWord === "hate" ? "text-red-400" : "text-white"
              }`}
            >
              ÓDIO
            </span>
          </motion.button>
        </div>

        {/* Crystal Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-80 md:h-96 flex items-center justify-center"
        >
          {/* Default State */}
          <motion.div
            animate={{
              opacity: activeWord === null ? 1 : 0,
              scale: activeWord === null ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emoto-accent/20 to-emoto-highlight/20 blur-2xl" />
              <p className="font-body text-emoto-silver/60 text-sm mt-8">
                Interaja com as palavras acima
              </p>
            </div>
          </motion.div>

          {/* Love Crystal */}
          <motion.div
            animate={{
              opacity: activeWord === "love" ? 1 : 0,
              scale: activeWord === "love" ? 1 : 0.8,
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emoto-accent/30 blur-3xl rounded-full" />
              <img
                src={crystalLove}
                alt="Cristal formado por amor"
                className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-2 border-emoto-accent/40"
              />
            </div>
            <p className="font-body text-emoto-accent text-sm md:text-base mt-6 font-medium">
              Geometria perfeita • Harmonia • Vida
            </p>
          </motion.div>

          {/* Hate Crystal */}
          <motion.div
            animate={{
              opacity: activeWord === "hate" ? 1 : 0,
              scale: activeWord === "hate" ? 1 : 0.8,
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/30 blur-3xl rounded-full" />
              <img
                src={crystalChaos}
                alt="Cristal distorcido por ódio"
                className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-2 border-red-500/30 filter grayscale-[20%]"
              />
            </div>
            <p className="font-body text-red-400 text-sm md:text-base mt-6 font-medium">
              Estrutura fragmentada • Caos • Destruição
            </p>
          </motion.div>
        </motion.div>

        {/* Insight */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-body text-emoto-silver/80 text-base md:text-lg max-w-lg mx-auto mt-12 leading-relaxed"
        >
          Se palavras fazem isso em uma tela...
          <br />
          <span className="text-white font-semibold">
            imagine o que fazem dentro do seu corpo.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default EmotoWordsSection;
