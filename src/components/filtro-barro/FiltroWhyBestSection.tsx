import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, ThermometerSnowflake, Shield, Leaf, Zap, Heart } from "lucide-react";

const reasons = [
  {
    icon: Droplets,
    number: "01",
    title: "Filtragem Natural",
    highlight: "99,9%",
    description: "A cerâmica porosa elimina impurezas, bactérias e vírus sem eletricidade.",
    color: "barro-water",
  },
  {
    icon: ThermometerSnowflake,
    number: "02",
    title: "Naturalmente Gelada",
    highlight: "-7°C",
    description: "O barro permite evaporação natural, mantendo a água fresca.",
    color: "barro-water",
  },
  {
    icon: Shield,
    number: "03",
    title: "Proteção Contínua",
    highlight: "24/7",
    description: "Prata coloidal impede proliferação de microrganismos.",
    color: "barro-terracota",
  },
  {
    icon: Leaf,
    number: "04",
    title: "Zero Impacto",
    highlight: "100%",
    description: "Totalmente sustentável, biodegradável, sem resíduos plásticos.",
    color: "barro-leaf",
  },
  {
    icon: Zap,
    number: "05",
    title: "Sem Energia",
    highlight: "R$0",
    description: "Funciona por gravidade. Zero custos com eletricidade.",
    color: "barro-terracota-light",
  },
  {
    icon: Heart,
    number: "06",
    title: "Sabor Superior",
    highlight: "Puro",
    description: "Remove cloro e substâncias que alteram o sabor natural.",
    color: "barro-terracota",
  },
];

const FiltroWhyBestSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-barro-sand overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full border border-barro-terracota/10" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-barro-terracota/10" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <span className="text-barro-terracota font-display font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            A Ciência
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-barro-earth leading-tight">
            Por que é o 
            <span className="block text-barro-terracota italic font-serif font-normal">melhor do mundo?</span>
          </h2>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                group relative bg-barro-cream rounded-3xl p-6 lg:p-8
                hover:shadow-xl transition-all duration-500
                ${index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}
                ${index === 3 ? 'lg:col-span-2' : ''}
              `}
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 text-6xl font-display font-bold text-barro-terracota/5 select-none">
                {reason.number}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-${reason.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <reason.icon className={`w-6 h-6 text-${reason.color}`} />
                </div>

                {/* Highlight number */}
                <div className={`text-3xl md:text-4xl font-display font-bold text-${reason.color} mb-2`}>
                  {reason.highlight}
                </div>

                <h3 className="font-display text-lg font-bold text-barro-earth mb-2">
                  {reason.title}
                </h3>

                <p className="text-sm text-barro-earth/60 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiltroWhyBestSection;
