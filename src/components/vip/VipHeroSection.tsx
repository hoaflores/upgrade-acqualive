import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  whatsappLink: string;
}

const VipHeroSection = ({ whatsappLink }: Props) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--vip-gold)/0.06)] blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--vip-gold)/0.3)] to-transparent" />
      </div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-6 text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(var(--vip-gold))]">
            Ecossistema VIP
          </span>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-primary-foreground">
            Você já tem a melhor água.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--vip-gold))] to-[hsl(var(--vip-gold-light))]">
              Agora, chegou a hora de ter os melhores privilégios.
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[hsl(var(--vip-text-muted))] max-w-2xl mx-auto mb-10">
            O Ecossistema VIP Acqualive não é para todos. É um canal exclusivo de
            transmissão onde você recebe ofertas 48h antes do site, conteúdos de
            elite sobre biohacking e o caminho para ganhar seu próximo kit de
            refis de graça.
          </p>

          <Button variant="gold" size="xl" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              QUERO MEU ACESSO VIP AGORA
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VipHeroSection;
