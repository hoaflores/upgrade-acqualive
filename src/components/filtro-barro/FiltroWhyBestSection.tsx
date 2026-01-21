import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, ThermometerSnowflake, Shield, Leaf, Zap, Heart } from "lucide-react";

const reasons = [
  {
    icon: Droplets,
    title: "Filtragem Natural",
    highlight: "99,9%",
    unit: "de eficiência",
    description: "A cerâmica porosa elimina impurezas, bactérias e vírus naturalmente.",
    accent: "barro-water",
  },
  {
    icon: ThermometerSnowflake,
    title: "Água Fresquinha",
    highlight: "-2° a -4°",
    unit: "mais fresca",
    description: "A evaporação natural pelo barro mantém a água agradavelmente fresca.",
    accent: "barro-water",
  },
  {
    icon: Shield,
    title: "Proteção 24h",
    highlight: "Prata",
    unit: "coloidal",
    description: "Ação bacteriostática que impede proliferação de microrganismos.",
    accent: "barro-terracota",
  },
  {
    icon: Leaf,
    title: "Sustentável",
    highlight: "100%",
    unit: "ecológico",
    description: "Biodegradável, sem plásticos, zero impacto ambiental.",
    accent: "barro-leaf",
  },
  {
    icon: Zap,
    title: "Zero Energia",
    highlight: "R$0",
    unit: "na conta",
    description: "Funciona por gravidade. Sem eletricidade, sem custos extras.",
    accent: "barro-terracota-light",
  },
  {
    icon: Heart,
    title: "Sabor Puro",
    highlight: "Natural",
    unit: "& limpo",
    description: "Remove cloro e substâncias que alteram o sabor original.",
    accent: "barro-terracota",
  },
];

const FiltroWhyBestSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-barro-cream overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-barro-sand/50 blur-3xl translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-barro-water/5 blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-barro-terracota font-medium text-sm tracking-[0.25em] uppercase mb-4 block">
            Comprovado pela Ciência
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-barro-earth leading-tight mb-6">
            Por que o filtro de barro é
            <span className="text-barro-terracota"> o melhor do mundo?</span>
          </h2>
          <p className="text-lg text-barro-earth/60">
            Uma combinação única de propriedades naturais que nenhuma outra tecnologia consegue replicar.
          </p>
        </motion.div>

        {/* Grid of cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-barro-sand/50"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-${reason.accent}/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className={`w-6 h-6 text-${reason.accent}`} />
              </div>

              {/* Highlight stat */}
              <div className="mb-3">
                <span className={`text-3xl lg:text-4xl font-display font-bold text-${reason.accent}`}>
                  {reason.highlight}
                </span>
                <span className="text-sm text-barro-earth/50 ml-2">
                  {reason.unit}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-barro-earth mb-2">
                {reason.title}
              </h3>

              <p className="text-sm text-barro-earth/60 leading-relaxed">
                {reason.description}
              </p>

              {/* Hover accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-${reason.accent} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Emphasis note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-barro-earth/60 text-sm max-w-xl mx-auto">
            Com tantas vantagens, não é à toa que mais de <span className="font-semibold text-barro-earth">50 milhões de lares brasileiros</span> confiam no filtro de barro.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FiltroWhyBestSection;
