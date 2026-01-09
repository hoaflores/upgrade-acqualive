import { Droplets, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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
            size="lg"
            asChild
            className="bg-primary-foreground text-water-deep hover:bg-primary-foreground/90 shadow-elevated group"
          >
            <a
              href="https://wa.me/555192928468?text=Olá,%20recebi%20um%20e-mail%20com%20um%20desconto%20exclusivo%20para%20trocar%20meu%20filtro%20Acqualive%20pelo%20novo%20modelo.%20Gostaria%20de%20saber%20mais."
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span>QUERO MEU ACQUALIVE</span>
            </a>
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
