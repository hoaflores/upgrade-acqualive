import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const FiltroTransitionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-gradient-to-b from-barro-cream to-barro-sand overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-[600px] rounded-full border border-barro-terracota/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-2xl max-h-[500px] rounded-full border border-barro-terracota/5" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Question */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-barro-earth/60 text-lg md:text-xl mb-6"
          >
            O filtro de barro é incrível.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-barro-earth leading-tight mb-8"
          >
            Mas... e se a água pudesse
            <span className="block text-barro-terracota mt-2">fazer ainda mais por você?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4 text-barro-earth/70 text-base md:text-lg max-w-2xl mx-auto mb-10"
          >
            <p>
              O filtro de barro tradicional purifica. Remove impurezas. Refresca.
            </p>
            <p>
              Mas a ciência descobriu que <span className="text-barro-earth font-medium">a água pode ir além</span>. 
              Pode nutrir. Pode alcalinizar. Pode transformar sua saúde.
            </p>
          </motion.div>

          {/* Visual transition element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex flex-col items-center gap-3"
          >
            <span className="text-sm text-barro-terracota/70 uppercase tracking-wider font-medium">
              Conheça a evolução
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-barro-terracota" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FiltroTransitionSection;
