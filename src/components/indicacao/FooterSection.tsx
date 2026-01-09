import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import logoBranca from "@/assets/logo-acqualive-branca.png";
import iconAcqualive from "@/assets/icon-acqualive.png";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-secondary relative overflow-hidden">
      {/* Decorative mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_hsl(21_89%_55%_/_0.1),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(0_0%_100%_/_0.05),_transparent_60%)]" />
      </div>
      
      {/* Urgency Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-accent via-[hsl(21_89%_50%)] to-accent py-4 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_0%_100%_/_0.1),_transparent_70%)]" />
        <div className="container relative">
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
      <div className="py-14 relative">
        <div className="container">
          <div className="text-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={logoBranca} 
                alt="Acqualive" 
                className="h-10 md:h-12 w-auto"
              />
            </motion.div>
            
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
              {/* Icon decorative */}
              <motion.img 
                src={iconAcqualive}
                alt=""
                className="w-8 h-8 mx-auto mb-4 opacity-30"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
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
