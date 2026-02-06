import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Droplets, Shield, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import terracotaFront from "@/assets/filtro-acqualive-terracota.webp";

interface FiltroAcqualiveSectionProps {
  whatsappLink: string;
}

const features = [
  {
    icon: Sparkles,
    title: "Água Alcalina",
    value: "pH 9.5",
    desc: "Equilíbrio ideal para o corpo",
  },
  {
    icon: Droplets,
    title: "Rico em Magnésio",
    value: "+300",
    desc: "Funções corporais beneficiadas",
  },
  {
    icon: Shield,
    title: "Tecnologia TriWay",
    value: "3 em 1",
    desc: "Purifica, mineraliza, alcaliniza",
  },
  {
    icon: Award,
    title: "Certificado",
    value: "INMETRO",
    desc: "Qualidade garantida",
  },
];

const FiltroAcqualiveSection = ({ whatsappLink }: FiltroAcqualiveSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-barro-sand via-barro-cream to-barro-cream overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-px bg-gradient-to-r from-transparent via-barro-terracota/20 to-transparent" />
        <div className="absolute top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-barro-terracota/3" />
        <div className="absolute bottom-1/4 -left-1/4 w-[40vw] h-[40vw] rounded-full bg-barro-water/3" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-barro-terracota font-medium text-sm tracking-[0.2em] uppercase mb-6"
          >
            <span className="w-8 h-px bg-barro-terracota/40" />
            A Evolução
            <span className="w-8 h-px bg-barro-terracota/40" />
          </motion.span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-barro-earth leading-[1.1] mb-6">
            <span className="block">Acqualive</span>
            <span className="text-barro-terracota italic font-serif font-normal">Terracota</span>
          </h2>
          
          <p className="text-lg md:text-xl text-barro-earth/70 max-w-2xl mx-auto leading-relaxed">
            Toda a <span className="text-barro-earth font-medium">pureza ancestral</span> do filtro de barro, 
            agora com <span className="text-barro-terracota font-medium">tecnologia que transforma</span> a água 
            em fonte de saúde.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Product image - Clean, floating */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            {/* Subtle glow behind product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-b from-barro-terracota/10 via-barro-sand/30 to-transparent blur-3xl" />
            
            {/* Product image */}
            <motion.img
              initial={{ y: 20 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              src={terracotaFront}
              alt="Acqualive Terracota"
              className="relative w-full max-w-sm lg:max-w-md h-auto drop-shadow-[0_20px_50px_rgba(180,91,62,0.15)]"
              style={{ 
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.1))',
              }}
            />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group bg-white rounded-2xl p-5 shadow-sm border border-barro-sand/50 hover:shadow-lg hover:border-barro-terracota/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-barro-terracota/10 flex items-center justify-center group-hover:bg-barro-terracota/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-barro-terracota" />
                    </div>
                  </div>
                  
                  <div className="text-2xl font-display font-bold text-barro-earth mb-1">
                    {feature.value}
                  </div>
                  <div className="text-sm font-medium text-barro-terracota mb-1">
                    {feature.title}
                  </div>
                  <p className="text-xs text-barro-earth/50">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Value proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-barro-earth to-barro-terracota rounded-2xl p-6 mb-8"
            >
              <p className="text-barro-cream leading-relaxed text-center">
                <span className="font-semibold">Não é apenas um filtro.</span> É a união de 200 anos de 
                tradição com ciência de ponta para criar a água mais completa para sua saúde.
              </p>
            </motion.div>

            {/* CTA */}
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
                  <span>QUERO MEU TERRACOTA</span>
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
