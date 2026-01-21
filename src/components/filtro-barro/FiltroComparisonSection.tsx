import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Crown } from "lucide-react";

const comparisons = [
  { feature: "Filtragem natural por gravidade", barro: true, terracota: true, comum: false },
  { feature: "Água naturalmente fresquinha", barro: true, terracota: true, comum: false },
  { feature: "Zero consumo de energia", barro: true, terracota: true, comum: false },
  { feature: "100% sustentável", barro: true, terracota: true, comum: false },
  { feature: "Água Alcalina e Ionizada", barro: false, terracota: true, comum: false },
  { feature: "Rica em Magnésio", barro: false, terracota: true, comum: false },
  { feature: "Tecnologia TriWay", barro: false, terracota: true, comum: false },
  { feature: "Design Premium", barro: false, terracota: true, comum: true },
  { feature: "Certificação INMETRO", barro: false, terracota: true, comum: true },
];

const FiltroComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-barro-cream overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-barro-terracota font-display font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            Comparativo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-barro-earth leading-tight">
            O melhor dos
            <span className="text-barro-terracota"> dois mundos</span>
          </h2>
        </motion.div>

        {/* Comparison cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Filtro de Barro Comum */}
          <div className="bg-barro-sand rounded-3xl p-6 lg:p-8">
            <div className="text-center mb-8">
              <span className="text-barro-earth/50 font-display font-bold text-sm uppercase tracking-wider">
                Filtro de Barro
              </span>
              <h3 className="font-display text-xl font-bold text-barro-earth mt-2">
                Comum
              </h3>
            </div>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.barro ? (
                    <div className="w-6 h-6 rounded-full bg-barro-leaf/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-barro-leaf" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-barro-earth/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-barro-earth/30" />
                    </div>
                  )}
                  <span className={`text-sm ${item.barro ? 'text-barro-earth' : 'text-barro-earth/40'}`}>
                    {item.feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Terracota - Highlighted */}
          <div className="relative bg-gradient-to-b from-barro-terracota to-barro-earth rounded-3xl p-6 lg:p-8 shadow-2xl md:-mt-4 md:mb-4">
            {/* Crown badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-barro-terracota-light text-barro-earth rounded-full p-2">
              <Crown className="w-5 h-5" />
            </div>
            
            <div className="text-center mb-8 pt-4">
              <span className="text-barro-terracota-light font-display font-bold text-sm uppercase tracking-wider">
                Acqualive
              </span>
              <h3 className="font-display text-2xl font-bold text-barro-cream mt-2">
                Terracota
              </h3>
            </div>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.terracota ? (
                    <div className="w-6 h-6 rounded-full bg-barro-terracota-light/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-barro-terracota-light" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-barro-cream/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-barro-cream/30" />
                    </div>
                  )}
                  <span className={`text-sm ${item.terracota ? 'text-barro-cream font-medium' : 'text-barro-cream/40'}`}>
                    {item.feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Purificador Comum */}
          <div className="bg-barro-sand rounded-3xl p-6 lg:p-8">
            <div className="text-center mb-8">
              <span className="text-barro-earth/50 font-display font-bold text-sm uppercase tracking-wider">
                Purificador
              </span>
              <h3 className="font-display text-xl font-bold text-barro-earth mt-2">
                Comum
              </h3>
            </div>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.comum ? (
                    <div className="w-6 h-6 rounded-full bg-barro-leaf/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-barro-leaf" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-barro-earth/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-barro-earth/30" />
                    </div>
                  )}
                  <span className={`text-sm ${item.comum ? 'text-barro-earth' : 'text-barro-earth/40'}`}>
                    {item.feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-barro-earth/60 text-sm mt-12 max-w-xl mx-auto"
        >
          O <span className="text-barro-terracota font-semibold">Acqualive Terracota</span> é o único 
          que une a tradição do filtro de barro com tecnologia de água alcalina.
        </motion.p>
      </div>
    </section>
  );
};

export default FiltroComparisonSection;
