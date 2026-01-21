import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timelineItems = [
  {
    era: "Séc. XIX",
    title: "Nasce uma Tradição",
    description: "Artesãos brasileiros descobrem que a argila porosa filtra impurezas e mantém a água naturalmente fresca.",
    color: "#B45B3E", // barro-terracota
  },
  {
    era: "2001",
    title: "Reconhecimento Mundial",
    description: "A ONU reconhece oficialmente o filtro de barro brasileiro como uma das melhores tecnologias de purificação do mundo.",
    color: "#4A90A4", // barro-water
  },
  {
    era: "Hoje",
    title: "A Evolução",
    description: "E se pudéssemos unir 200 anos de sabedoria com a ciência moderna?",
    color: "#5D7F4A", // barro-leaf
  },
];

const FiltroHistorySection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.6], [0, 100]);

  return (
    <section 
      id="historia"
      ref={containerRef} 
      className="relative py-24 lg:py-36 bg-barro-earth overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] opacity-[0.02]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-barro-cream" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-barro-cream" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-barro-cream" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-barro-terracota-light/80 font-medium text-sm tracking-[0.25em] uppercase mb-4 block">
            Uma Jornada
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-barro-cream leading-tight">
            200 Anos de
            <span className="text-barro-terracota-light"> Sabedoria</span>
          </h2>
        </motion.div>

        {/* Timeline - Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Progress line container */}
            <div className="relative h-1 bg-barro-cream/10 rounded-full mb-16 mx-16">
              <motion.div 
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-barro-terracota via-barro-water to-barro-leaf"
                style={{ width: lineProgress.get() + '%' }}
              />
              
              {/* Nodes */}
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${index * 50}%` }}
                >
                  <div 
                    className="w-6 h-6 rounded-full border-4 border-barro-earth shadow-lg"
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className="text-center"
                >
                  {/* Era badge */}
                  <div 
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-bold mb-6"
                    style={{ backgroundColor: item.color + '20', color: item.color }}
                  >
                    {item.era}
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-barro-cream mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-barro-cream/60 text-sm leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-barro-terracota via-barro-water to-barro-leaf rounded-full" />
            
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="relative"
                >
                  {/* Node */}
                  <div 
                    className="absolute -left-8 top-0 w-5 h-5 rounded-full border-4 border-barro-earth"
                    style={{ backgroundColor: item.color, marginLeft: '0.125rem' }}
                  />
                  
                  {/* Era */}
                  <div 
                    className="inline-flex px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ backgroundColor: item.color + '20', color: item.color }}
                  >
                    {item.era}
                  </div>
                  
                  <h3 className="font-display text-lg font-bold text-barro-cream mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-barro-cream/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 lg:mt-24"
        >
          <div className="max-w-2xl mx-auto bg-barro-cream/5 rounded-3xl p-8 lg:p-10 border border-barro-cream/10 text-center">
            <blockquote>
              <p className="text-lg md:text-xl text-barro-cream/90 font-display leading-relaxed mb-4">
                "O filtro de barro brasileiro é uma das invenções mais geniais 
                da humanidade para o tratamento de água potável."
              </p>
              <footer>
                <cite className="not-italic text-barro-terracota-light text-sm font-medium">
                  — Relatório ONU, 2001
                </cite>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FiltroHistorySection;
