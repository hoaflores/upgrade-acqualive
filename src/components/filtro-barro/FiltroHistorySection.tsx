import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FiltroHistorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-40 bg-barro-earth overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-barro-terracota-light/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-barro-terracota-light/30 to-transparent" />
        {/* Large number watermark */}
        <span className="absolute -right-10 top-1/2 -translate-y-1/2 text-[25vw] font-display font-bold text-barro-terracota/5 leading-none select-none">
          200
        </span>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-barro-terracota-light via-barro-terracota-light/50 to-transparent" />
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative pl-16">
                <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-barro-terracota-light border-4 border-barro-earth" />
                <span className="text-barro-terracota-light font-display font-bold text-sm tracking-wider">SÉCULO XIX</span>
                <h3 className="text-barro-cream text-xl font-display font-bold mt-2 mb-2">Nasce a Tradição</h3>
                <p className="text-barro-cream/60 text-sm leading-relaxed">
                  Artesãos brasileiros criam o filtro de barro para purificar água 
                  em regiões rurais, usando técnicas passadas de geração em geração.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-barro-water border-4 border-barro-earth" />
                <span className="text-barro-water font-display font-bold text-sm tracking-wider">2001</span>
                <h3 className="text-barro-cream text-xl font-display font-bold mt-2 mb-2">Reconhecimento Mundial</h3>
                <p className="text-barro-cream/60 text-sm leading-relaxed">
                  A ONU inclui o filtro de barro brasileiro entre as soluções mais 
                  eficientes para garantir água potável no mundo.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-barro-leaf border-4 border-barro-earth" />
                <span className="text-barro-leaf font-display font-bold text-sm tracking-wider">HOJE</span>
                <h3 className="text-barro-cream text-xl font-display font-bold mt-2 mb-2">A Evolução Definitiva</h3>
                <p className="text-barro-cream/60 text-sm leading-relaxed">
                  A Acqualive une 200 anos de sabedoria com tecnologia de ponta 
                  para criar o filtro de barro mais avançado do mercado.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 text-[8rem] text-barro-terracota-light/20 font-serif leading-none select-none">
              "
            </div>
            <blockquote className="relative z-10 pl-8 border-l-2 border-barro-terracota-light/30">
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-barro-cream leading-snug mb-6">
                O filtro de barro brasileiro é uma das invenções mais geniais da humanidade 
                para o tratamento de água potável.
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block text-barro-terracota-light font-semibold">Relatório ONU</span>
                  <span className="text-barro-cream/50 text-sm">Soluções Hídricas, 2001</span>
                </cite>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FiltroHistorySection;
