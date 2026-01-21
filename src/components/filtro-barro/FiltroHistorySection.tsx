import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Globe, Sparkles } from "lucide-react";

const timelineItems = [
  {
    era: "Século XIX",
    year: "1800s",
    title: "Nasce uma Tradição",
    description: "Artesãos brasileiros descobrem que a argila porosa filtra impurezas e mantém a água naturalmente fresca. Uma solução simples que mudaria a história.",
    icon: Droplets,
    color: "barro-terracota",
    illustration: (
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
        {/* Artisan hands shaping clay */}
        <circle cx="100" cy="100" r="80" className="stroke-current opacity-20" strokeWidth="1" />
        <ellipse cx="100" cy="130" rx="45" ry="35" className="stroke-current opacity-40" strokeWidth="2" />
        <path d="M55 130 Q100 80 145 130" className="stroke-current opacity-60" strokeWidth="2" fill="none" />
        <circle cx="100" cy="100" r="8" className="fill-current opacity-30" />
        {/* Water drops */}
        <path d="M70 60 Q73 70 70 75 Q67 70 70 60" className="fill-current opacity-50" />
        <path d="M130 50 Q133 60 130 65 Q127 60 130 50" className="fill-current opacity-50" />
      </svg>
    ),
  },
  {
    era: "2001",
    year: "ONU",
    title: "Reconhecimento Mundial",
    description: "A Organização das Nações Unidas reconhece oficialmente o filtro de barro brasileiro como uma das tecnologias mais eficientes do mundo para purificação de água.",
    icon: Globe,
    color: "barro-water",
    illustration: (
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
        {/* Globe with laurel */}
        <circle cx="100" cy="100" r="60" className="stroke-current opacity-30" strokeWidth="2" />
        <circle cx="100" cy="100" r="45" className="stroke-current opacity-20" strokeWidth="1" />
        {/* Continents suggestion */}
        <ellipse cx="85" cy="90" rx="15" ry="20" className="fill-current opacity-20" />
        <ellipse cx="115" cy="105" rx="12" ry="18" className="fill-current opacity-20" />
        {/* Laurel wreath */}
        <path d="M40 140 Q60 100 60 70" className="stroke-current opacity-40" strokeWidth="2" fill="none" />
        <path d="M160 140 Q140 100 140 70" className="stroke-current opacity-40" strokeWidth="2" fill="none" />
        {/* Leaves */}
        <ellipse cx="50" cy="110" rx="8" ry="4" transform="rotate(-30 50 110)" className="fill-current opacity-30" />
        <ellipse cx="150" cy="110" rx="8" ry="4" transform="rotate(30 150 110)" className="fill-current opacity-30" />
        <ellipse cx="55" cy="90" rx="8" ry="4" transform="rotate(-20 55 90)" className="fill-current opacity-30" />
        <ellipse cx="145" cy="90" rx="8" ry="4" transform="rotate(20 145 90)" className="fill-current opacity-30" />
      </svg>
    ),
  },
  {
    era: "Hoje",
    year: "2024",
    title: "A Evolução Começa",
    description: "Mas e se pudéssemos elevar essa tradição milenar com ciência moderna? E se a pureza fosse apenas o começo?",
    icon: Sparkles,
    color: "barro-leaf",
    illustration: (
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
        {/* Filter + science fusion */}
        <ellipse cx="100" cy="140" rx="50" ry="30" className="stroke-current opacity-30" strokeWidth="2" />
        <ellipse cx="100" cy="90" rx="35" ry="25" className="stroke-current opacity-20" strokeWidth="1.5" />
        {/* Sparkles / molecules */}
        <circle cx="60" cy="60" r="4" className="fill-current opacity-50" />
        <circle cx="140" cy="50" r="3" className="fill-current opacity-40" />
        <circle cx="150" cy="80" r="5" className="fill-current opacity-50" />
        <circle cx="50" cy="90" r="3" className="fill-current opacity-40" />
        {/* Connection lines */}
        <line x1="60" y1="60" x2="80" y2="75" className="stroke-current opacity-20" strokeWidth="1" />
        <line x1="140" y1="50" x2="120" y2="70" className="stroke-current opacity-20" strokeWidth="1" />
        {/* Rising elements */}
        <path d="M100 60 L105 45 L100 50 L95 45 Z" className="fill-current opacity-40" />
        <path d="M85 55 L88 45 L85 48 L82 45 Z" className="fill-current opacity-30" />
        <path d="M115 55 L118 45 L115 48 L112 45 Z" className="fill-current opacity-30" />
      </svg>
    ),
  },
];

const FiltroHistorySection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section 
      id="historia"
      ref={containerRef} 
      className="relative py-24 lg:py-40 bg-barro-earth overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
        >
          <span className="text-barro-terracota-light/80 font-medium text-sm tracking-[0.25em] uppercase mb-4 block">
            Uma Jornada
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-barro-cream leading-tight">
            200 Anos de
            <span className="block text-barro-terracota-light"> Sabedoria Brasileira</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central animated line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
            <div className="absolute inset-0 bg-barro-cream/10" />
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-barro-terracota-light via-barro-water to-barro-leaf"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile line */}
          <div className="absolute left-8 top-0 bottom-0 w-px lg:hidden">
            <div className="absolute inset-0 bg-barro-cream/10" />
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-barro-terracota-light via-barro-water to-barro-leaf"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-16 lg:space-y-0">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                } ${index > 0 ? 'lg:mt-24' : ''}`}
              >
                {/* Content side */}
                <div className={`pl-20 lg:pl-0 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                  {/* Era badge */}
                  <div className={`inline-flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <span className={`text-${item.color} font-display font-bold text-sm tracking-wider`}>
                      {item.era}
                    </span>
                    <div className={`h-px w-8 bg-${item.color}/40`} />
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-barro-cream mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-barro-cream/60 leading-relaxed max-w-md lg:max-w-none">
                    {item.description}
                  </p>
                </div>

                {/* Illustration side */}
                <div className={`hidden lg:flex items-center justify-center ${
                  index % 2 === 0 ? 'lg:col-start-2 lg:justify-start lg:pl-16' : 'lg:col-start-1 lg:row-start-1 lg:justify-end lg:pr-16'
                }`}>
                  <div className={`w-40 h-40 text-${item.color}`}>
                    {item.illustration}
                  </div>
                </div>

                {/* Node - Mobile */}
                <div className="absolute left-8 top-0 -translate-x-1/2 lg:hidden">
                  <div className={`w-4 h-4 rounded-full bg-${item.color} ring-4 ring-barro-earth`} />
                </div>

                {/* Node - Desktop */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                    className={`w-5 h-5 rounded-full bg-${item.color} ring-4 ring-barro-earth shadow-lg shadow-${item.color}/30`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 lg:mt-32 text-center"
        >
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-barro-cream/80 font-display leading-relaxed italic">
              "O filtro de barro brasileiro é uma das invenções mais geniais 
              da humanidade para o tratamento de água potável."
            </p>
            <footer className="mt-4">
              <cite className="not-italic text-barro-terracota-light text-sm">
                — Relatório ONU, 2001
              </cite>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default FiltroHistorySection;
