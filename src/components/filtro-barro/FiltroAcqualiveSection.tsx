import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Droplets, Shield, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import terracotaFront from "@/assets/terracota-front.png";

interface FiltroAcqualiveSectionProps {
  whatsappLink: string;
}

const features = [
  {
    icon: Sparkles,
    label: "Alcalina",
    value: "pH 9.5",
    description: "Água com pH ideal para saúde",
  },
  {
    icon: Droplets,
    label: "Magnésio",
    value: "+300",
    description: "Funções corporais beneficiadas",
  },
  {
    icon: Shield,
    label: "TriWay",
    value: "3 em 1",
    description: "Purifica, mineraliza, alcaliniza",
  },
  {
    icon: Award,
    label: "INMETRO",
    value: "Certificado",
    description: "Qualidade garantida",
  },
];

const FiltroAcqualiveSection = ({ whatsappLink }: FiltroAcqualiveSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-barro-terracota to-barro-earth overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[40vw] h-[40vw] rounded-full bg-barro-terracota-light/5" />
        <div className="absolute bottom-1/4 -right-20 w-[30vw] h-[30vw] rounded-full bg-barro-cream/5" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-barro-terracota-light font-display font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            A Evolução
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-barro-cream leading-tight mb-6">
            Por que o Acqualive é o
            <span className="block text-barro-terracota-light italic font-serif font-normal mt-2">
              melhor filtro de barro?
            </span>
          </h2>
          <p className="text-lg text-barro-cream/70">
            Unimos 200 anos de tradição com tecnologia de ponta
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-barro-cream/10 blur-3xl" />
            </div>
            
            <img
              src={terracotaFront}
              alt="Acqualive Terracota"
              className="relative w-full max-w-sm lg:max-w-md h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-barro-cream/10 backdrop-blur-sm border border-barro-cream/10 rounded-2xl p-5 hover:bg-barro-cream/15 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-barro-terracota-light mb-3" />
                  <div className="text-2xl font-display font-bold text-barro-cream mb-1">
                    {feature.value}
                  </div>
                  <div className="text-sm font-semibold text-barro-terracota-light mb-1">
                    {feature.label}
                  </div>
                  <p className="text-xs text-barro-cream/50">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Highlight box */}
            <div className="bg-barro-cream/5 border border-barro-cream/20 rounded-2xl p-6 mb-8">
              <p className="text-barro-cream text-center">
                <span className="text-barro-terracota-light font-bold">Acqualive Terracota</span> não é apenas um filtro. 
                É a <span className="font-semibold">evolução definitiva</span> da melhor tecnologia de purificação do mundo.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
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
                  <span>QUERO O MELHOR DO MELHOR</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FiltroAcqualiveSection;
