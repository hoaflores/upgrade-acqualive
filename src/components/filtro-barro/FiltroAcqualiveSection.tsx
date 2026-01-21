import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Droplets, Shield, Award, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import terracotaFront from "@/assets/terracota-front.png";

interface FiltroAcqualiveSectionProps {
  whatsappLink: string;
}

const evolutionPoints = [
  {
    before: "Purifica a água",
    after: "Purifica, mineraliza e alcaliniza",
    icon: Droplets,
  },
  {
    before: "Remove impurezas",
    after: "Adiciona magnésio (+300 funções)",
    icon: Sparkles,
  },
  {
    before: "Filtragem básica",
    after: "Tecnologia TriWay 3 em 1",
    icon: Shield,
  },
  {
    before: "Sem certificação",
    after: "Certificado INMETRO",
    icon: Award,
  },
];

const FiltroAcqualiveSection = ({ whatsappLink }: FiltroAcqualiveSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-barro-earth overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-barro-terracota-light/20 to-transparent" />
        <div className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vw] rounded-full bg-barro-terracota/5" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-barro-terracota-light/80 font-medium text-sm tracking-[0.25em] uppercase mb-4 block">
            A Evolução
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-barro-cream leading-tight mb-6">
            Acqualive Terracota
            <span className="block text-barro-terracota-light text-2xl md:text-3xl mt-2 font-normal">
              O melhor do barro, elevado pela ciência
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-barro-terracota-light/10 blur-3xl" />
            </div>
            
            <img
              src={terracotaFront}
              alt="Acqualive Terracota"
              className="relative w-full max-w-xs lg:max-w-sm h-auto drop-shadow-2xl"
            />

            {/* pH Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute -right-4 lg:right-8 top-1/4 bg-barro-cream rounded-2xl p-4 shadow-xl"
            >
              <span className="block text-3xl font-display font-bold text-barro-terracota">pH 9.5</span>
              <span className="text-xs text-barro-earth/60">Água alcalina</span>
            </motion.div>
          </motion.div>

          {/* Evolution comparison */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-4 mb-10">
              {evolutionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 bg-barro-cream/5 rounded-xl p-4 border border-barro-cream/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-barro-terracota-light/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-barro-terracota-light" />
                  </div>
                  
                  <div className="flex-1 flex items-center gap-3">
                    <span className="text-sm text-barro-cream/50 line-through flex-1">
                      {point.before}
                    </span>
                    <ArrowRight className="w-4 h-4 text-barro-terracota-light flex-shrink-0" />
                    <span className="text-sm text-barro-cream font-medium flex-1">
                      {point.after}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-barro-terracota/30 to-barro-terracota/10 rounded-2xl p-6 mb-8 border border-barro-terracota-light/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <Plus className="w-5 h-5 text-barro-terracota-light" />
                <span className="text-barro-terracota-light font-semibold">O que você ganha</span>
              </div>
              <p className="text-barro-cream/90 text-sm leading-relaxed">
                Toda a pureza do filtro de barro tradicional, <span className="font-semibold text-barro-cream">mais</span> água 
                alcalina com magnésio para mais de 300 funções do seu corpo. É a tradição 
                encontrando a ciência.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start"
            >
              <Button
                variant="cta"
                size="lg"
                asChild
                className="group"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>QUERO EVOLUIR MINHA ÁGUA</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FiltroAcqualiveSection;
