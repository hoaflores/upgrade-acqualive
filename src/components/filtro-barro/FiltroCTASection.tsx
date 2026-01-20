import { ArrowRight, Truck, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface FiltroCTASectionProps {
  whatsappLink: string;
}

const FiltroCTASection = ({ whatsappLink }: FiltroCTASectionProps) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#8B4513]/10 via-primary/5 to-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-2 mb-8">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">
              Garantia de 1 Ano
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Leve o <span className="text-[#8B4513]">Melhor Filtro do Mundo</span>{" "}
            Para Sua Casa
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            O Acqualive Terracota combina 200 anos de tradição brasileira com tecnologia 
            de ponta para entregar a água mais pura e saudável para sua família.
          </p>

          {/* Price */}
          <div className="inline-flex flex-col items-center bg-card/80 backdrop-blur-sm border border-border rounded-2xl px-8 py-6 mb-8">
            <span className="text-sm text-muted-foreground">A partir de</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-bold text-foreground">R$ 2.997</span>
              <span className="text-muted-foreground">,00</span>
            </div>
            <span className="text-accent font-medium">10x de R$ 299,70 sem juros</span>
            <span className="text-xs text-muted-foreground mt-1">ou R$ 2.847,15 no Pix (5% off)</span>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
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
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
              <Truck className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                Frete Grátis
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-foreground">
                + Kit Refil Grátis
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiltroCTASection;
