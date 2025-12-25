import { Droplets, AlertTriangle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="bg-water-deep text-primary-foreground relative overflow-hidden">
      {/* Urgency Banner */}
      <div className="bg-gold/90 py-4">
        <div className="container">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="w-5 h-5 text-foreground flex-shrink-0" />
            <p className="text-sm md:text-base font-semibold text-foreground">
              Atenção: Esta condição especial de renovação é válida apenas para
              o lote atual de estoque da campanha de fidelidade.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 lg:py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Pronto para renovar sua saúde?
          </h2>
          <Button
            variant="cta"
            size="xl"
            className="bg-primary-foreground text-water-deep hover:bg-primary-foreground/90 shadow-elevated group"
          >
            <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
            QUERO MEU ACQUALIVE NOVO
          </Button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-primary-foreground/20 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Droplets className="w-6 h-6" />
              <span className="font-display text-xl font-bold">Acqualive</span>
            </div>
            <p className="text-sm text-primary-foreground/70 text-center md:text-right">
              © {new Date().getFullYear()} Acqualive. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
