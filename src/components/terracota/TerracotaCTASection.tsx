import { ArrowRight, Sparkles, Truck, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import terracotaFront from "@/assets/terracota-front.png";

interface TerracotaCTASectionProps {
  whatsappLink: string;
}

const TerracotaCTASection = ({ whatsappLink }: TerracotaCTASectionProps) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B4513]/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
              Garanta o Seu
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transforme sua <span className="text-gradient-water">Água</span> e sua{" "}
              <span className="text-[#8B4513]">Saúde</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Faça como milhares de famílias que já escolheram a evolução do filtro de barro. 
              Água alcalina, ionizada e rica em minerais essenciais para toda a família.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
                <Truck className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Frete Grátis</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2">
                <Gift className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-foreground">Kit Refil Grátis</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">10x sem juros</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="inline-flex flex-col items-center lg:items-start bg-card border border-border rounded-2xl px-8 py-6 shadow-soft">
                <span className="text-sm text-muted-foreground mb-1">Por apenas</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="text-5xl md:text-6xl font-bold text-foreground">2.997</span>
                </div>
                <span className="text-accent font-medium mt-2">ou R$ 2.847,15 no Pix</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              variant="cta"
              size="lg"
              asChild
              className="group text-base px-10"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>QUERO MEU TERRACOTA</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/20 to-primary/10 rounded-full blur-3xl opacity-50 scale-110" />
              <img
                src={terracotaFront}
                alt="Purificador Acqualive Terracota"
                className="relative w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerracotaCTASection;
