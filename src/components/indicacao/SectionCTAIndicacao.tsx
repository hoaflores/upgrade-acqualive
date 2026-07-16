import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Ol%C3%A1!%20Gostaria%20de%20indicar%20um%20amigo%20para%20comprar%20um%20Purificador%20Acqualive%20e%20ganhar%20meu%20kit%20refil%20gr%C3%A1tis!";

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
