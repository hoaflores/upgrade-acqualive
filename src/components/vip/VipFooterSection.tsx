import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoBranca from "@/assets/logo-branca.png";

interface Props {
  whatsappLink: string;
}

const VipFooterSection = ({ whatsappLink }: Props) => {
  return (
    <footer className="relative">
      {/* Scarcity + CTA block */}
      <div className="py-20 lg:py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--vip-gold)/0.15)] to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[500px] bg-[hsl(var(--vip-gold)/0.03)] blur-[100px]" />
        </div>

        <div className="container max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center rounded-2xl border border-[hsl(var(--vip-gold)/0.2)] bg-gradient-to-b from-[hsl(var(--vip-surface))] to-[hsl(var(--vip-bg))] p-10 md:p-14"
          >
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground leading-snug mb-8">
              As vagas para a nossa próxima{" "}
              <span className="text-[hsl(var(--vip-gold))]">
                Live de Saúde são limitadas
              </span>{" "}
              pela plataforma de transmissão. Garanta seu lugar hoje.
            </p>

            <Button variant="gold" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                LIBERAR MEU ACESSO VIP
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Brand footer */}
      <div className="border-t border-[hsl(var(--vip-gold)/0.1)] py-10">
        <div className="container text-center">
          <img
            src={logoBranca}
            alt="Acqualive"
            className="h-7 w-auto mx-auto mb-4 opacity-60"
          />
          <p className="text-sm text-[hsl(var(--vip-text-muted))]">
            Uma iniciativa Acqualive para premiar quem faz da saúde uma
            prioridade.
          </p>
          <p className="text-xs text-[hsl(var(--vip-text-muted)/0.5)] mt-3">
            © {new Date().getFullYear()} Acqualive. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default VipFooterSection;
