import { motion } from "framer-motion";
import { AlertTriangle, Droplets } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary">
      {/* Urgency Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-accent via-gold-light to-accent py-4"
      >
        <div className="container">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="w-5 h-5 text-white flex-shrink-0" />
            <p className="text-white font-semibold text-sm md:text-base">
              ⚠️ Atenção: O bônus do sorteio de 1 ano grátis encerra em{" "}
              <strong>Junho/2026</strong>. Não deixe seus amigos esperando.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer content */}
      <div className="py-14">
        <div className="container">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-foreground">
                Acqualive
              </h3>
            </div>
            <p className="text-primary-foreground/50 mb-8 text-sm">
              Programa Embaixador — Transformando saúde em recompensas
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                Termos de Uso
              </a>
              <span className="text-primary-foreground/20">•</span>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                Política de Privacidade
              </a>
              <span className="text-primary-foreground/20">•</span>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                Regulamento
              </a>
            </div>

            <div className="border-t border-primary-foreground/10 pt-8">
              <p className="text-primary-foreground/40 text-xs mb-2">
                * O desconto vitalício de 10% é válido por 3 anos a partir da data de ativação.
              </p>
              <p className="text-primary-foreground/40 text-xs">
                © {new Date().getFullYear()} Acqualive. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
