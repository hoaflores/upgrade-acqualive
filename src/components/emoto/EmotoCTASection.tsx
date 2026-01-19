import { motion } from "framer-motion";
import cymaticsPattern from "@/assets/emoto/cymatics-pattern.jpg";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=554130777777&text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20Masaru%20Emoto%20e%20quero%20saber%20mais%20sobre%20o%20Acqualive.";

const EmotoCTASection = () => {
  return (
    <section className="relative py-24 lg:py-40 px-6 overflow-hidden">
      {/* Background Portal Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(29,67,128,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Cymatics Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={cymaticsPattern}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Portal Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-12"
        >
          {/* Pulsing Rings */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-emoto-accent/40"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute inset-0 rounded-full border border-emoto-accent/30"
          />
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute inset-0 rounded-full border border-emoto-accent/20"
          />

          {/* Center Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emoto-accent/30 to-emoto-highlight/20 blur-xl" />

          {/* Inner Circle */}
          <div className="absolute inset-4 rounded-full bg-emoto-bg/50 backdrop-blur-sm border border-emoto-accent/30 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
                {/* Flower of Life Pattern */}
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="hsl(215 62% 45%)"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <circle
                  cx="50"
                  cy="30"
                  r="20"
                  fill="none"
                  stroke="hsl(215 62% 45%)"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <circle
                  cx="67"
                  cy="40"
                  r="20"
                  fill="none"
                  stroke="hsl(215 62% 45%)"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <circle
                  cx="67"
                  cy="60"
                  r="20"
                  fill="none"
                  stroke="hsl(215 62% 45%)"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <circle
                  cx="50"
                  cy="70"
                  r="20"
                  fill="none"
                  stroke="hsl(215 62% 45%)"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <circle
                  cx="33"
                  cy="60"
                  r="20"
                  fill="none"
                  stroke="hsl(215 62% 45%)"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <circle
                  cx="33"
                  cy="40"
                  r="20"
                  fill="none"
                  stroke="hsl(215 62% 45%)"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-6 font-bold">
            Inicie sua transformação
          </h2>
          <p className="font-body text-emoto-silver text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Seu corpo é 70% água. A qualidade dessa água define a qualidade da
            sua vida. Comece hoje.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-emoto-highlight to-orange-500 text-white font-display font-bold text-lg md:text-xl shadow-lg shadow-emoto-highlight/40 hover:shadow-xl hover:shadow-emoto-highlight/50 transition-all duration-300"
        >
          QUERO MEU DESCONTO
        </motion.a>

        {/* Secondary Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-body text-emoto-silver/60 text-sm mt-6"
        >
          Fale com um especialista via WhatsApp
        </motion.p>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mt-24 pt-8 border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-emoto-silver/40 text-xs">
            © 2025 Acqualive. Todos os direitos reservados.
          </p>
          <p className="font-body text-emoto-silver/40 text-xs">
            Inspirado nos estudos do Dr. Masaru Emoto
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default EmotoCTASection;
