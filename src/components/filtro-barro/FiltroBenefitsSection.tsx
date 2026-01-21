import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import terracotaLifestyle from "@/assets/terracota-lifestyle.png";
interface FiltroBenefitsSectionProps {
  whatsappLink: string;
}
const benefits = ["Elimina 99,9% de bactérias e vírus", "Remove cloro, agrotóxicos e metais", "Água naturalmente fresquinha (-2° a -4°C)", "Preserva minerais essenciais", "Zero consumo de energia", "Vida útil de décadas", "100% sustentável e ecológico", "Melhora significativamente o sabor"];
const FiltroBenefitsSection = ({
  whatsappLink
}: FiltroBenefitsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section ref={ref} className="relative py-24 lg:py-32 bg-barro-cream overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image - Offset layout */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.8
        }} className="lg:col-span-5 relative">
            <div className="relative">
              {/* Background shapes */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-barro-terracota/10 rounded-[3rem] -rotate-6" />
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-barro-water/10 rounded-[2rem] rotate-3" />
              
              {/* Image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={terracotaLifestyle} alt="Filtro de Barro em ambiente" className="w-full h-auto" />
              </div>

              {/* Floating badge */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              delay: 0.5
            }} className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-barro-earth text-barro-cream rounded-2xl p-4 shadow-xl">
                
                <span className="text-barro-cream/70 font-extrabold text-sm">O FILTRO MAIS
AMADO DO BRASIL!
              </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="lg:col-span-7 lg:pl-8">
            <span className="text-barro-terracota font-display font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
              Benefícios Comprovados
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-barro-earth leading-tight mb-6">
              Água pura como a
              <span className="text-barro-water"> natureza</span> criou
            </h2>

            <p className="text-lg text-barro-earth/70 mb-8 max-w-lg">
              Mais do que purificar, o filtro de barro transforma a água da torneira 
              em algo muito mais saudável e saboroso.
            </p>

            {/* Benefits list - 2 columns */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {benefits.map((benefit, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              delay: 0.3 + index * 0.05
            }} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-barro-leaf/10 flex items-center justify-center flex-shrink-0 group-hover:bg-barro-leaf/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-barro-leaf" />
                  </div>
                  <span className="text-sm text-barro-earth/80">{benefit}</span>
                </motion.div>)}
            </div>

            <Button variant="cta" size="lg" asChild className="group">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>QUERO ÁGUA PURA EM CASA</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default FiltroBenefitsSection;