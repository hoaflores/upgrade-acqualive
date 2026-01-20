import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Truck, ShieldCheck, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface FiltroCTASectionProps {
  whatsappLink: string;
}

const FiltroCTASection = ({ whatsappLink }: FiltroCTASectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-barro-earth overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-barro-terracota/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-barro-water/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-barro-terracota-light/20 border border-barro-terracota-light/30 rounded-full px-4 py-2 mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-barro-terracota-light" />
            <span className="text-sm font-bold text-barro-terracota-light">
              Garantia de 1 Ano
            </span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-barro-cream leading-tight mb-6">
            Leve o melhor filtro do mundo
            <span className="block text-barro-terracota-light italic font-serif font-normal mt-2">
              para sua casa
            </span>
          </h2>

          <p className="text-lg text-barro-cream/70 mb-10 max-w-xl mx-auto">
            O Acqualive Terracota combina 200 anos de tradição brasileira com tecnologia 
            de ponta para entregar a água mais pura e saudável para sua família.
          </p>

          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="inline-flex flex-col items-center bg-barro-cream/10 backdrop-blur-sm border border-barro-cream/20 rounded-3xl px-10 py-8 mb-10"
          >
            <span className="text-sm text-barro-cream/60 mb-2">A partir de</span>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl md:text-6xl font-display font-bold text-barro-cream">R$ 2.997</span>
            </div>
            <span className="text-barro-terracota-light font-semibold">10x de R$ 299,70 sem juros</span>
            <span className="text-xs text-barro-cream/50 mt-1">ou R$ 2.847,15 no Pix (5% off)</span>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mb-10"
          >
            <Button
              variant="cta"
              size="lg"
              asChild
              className="group text-lg px-10 py-6 h-auto"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>QUERO MEU TERRACOTA AGORA</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="inline-flex items-center gap-2 bg-barro-leaf/20 border border-barro-leaf/30 rounded-full px-4 py-2">
              <Truck className="w-4 h-4 text-barro-leaf" />
              <span className="text-sm font-semibold text-barro-cream">
                Frete Grátis
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-barro-terracota-light/20 border border-barro-terracota-light/30 rounded-full px-4 py-2">
              <Gift className="w-4 h-4 text-barro-terracota-light" />
              <span className="text-sm font-medium text-barro-cream">
                + Kit Refil Grátis
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FiltroCTASection;
