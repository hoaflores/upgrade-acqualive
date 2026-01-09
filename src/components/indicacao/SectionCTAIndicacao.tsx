import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá!%20Quero%20participar%20do%20Programa%20Embaixador%20Acqualive.";

interface SectionCTAIndicacaoProps {
  variant?: "primary" | "secondary" | "white";
  label?: string;
}

const SectionCTAIndicacao = ({ 
  variant = "primary", 
  label = "Falar com meu Consultor Exclusivo" 
}: SectionCTAIndicacaoProps) => {
  const buttonVariant = variant === "white" ? "hero" : variant === "secondary" ? "whatsapp" : "gold";
  
  return (
    <motion.div 
      className="flex justify-center mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Button
        variant={buttonVariant}
        size="lg"
        asChild
        className="group shadow-elevated relative overflow-hidden"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{label}</span>
        </a>
      </Button>
    </motion.div>
  );
};

export default SectionCTAIndicacao;
