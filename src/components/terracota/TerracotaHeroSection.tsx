import { Sparkles, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import terracotaFront from "@/assets/terracota-front.png";
import logoAcqualive from "@/assets/logo-acqualive.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface TerracotaHeroSectionProps {
  whatsappLink: string;
}

const TerracotaHeroSection = ({ whatsappLink }: TerracotaHeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#8B4513]/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-water-medium/30 rounded-full blur-3xl animate-pulse-soft animation-delay-400" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#8B4513]/10 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />
      </div>

      <div className="container relative z-10 pt-8 pb-20 lg:pt-16">
        {/* Header */}
        <header className="flex items-center justify-between mb-12 lg:mb-16 animate-fade-in">
          <div className="flex items-center">
            <img 
              src={logoAcqualive} 
              alt="Acqualive" 
              className="h-12 md:h-14 lg:h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-2 bg-[#8B4513]/10 border border-[#8B4513]/30 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-[#8B4513]" />
            <span className="text-sm font-medium text-foreground">
              A evolução do filtro de barro
            </span>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">
                362+ Avaliações 5 Estrelas
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Purificador <span className="text-gradient-water">Acqualive</span>{" "}
              <span className="text-[#8B4513]">Terracota</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              Design vintage. Tecnologia de ponta.{" "}
              <span className="text-accent font-bold">Água alcalina</span> e ionizada.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              A escolha perfeita para quem busca saúde e bem-estar. Transforma a água comum 
              em água alcalina rica em magnésio, proporcionando hidratação superior.
            </p>

            {/* Price */}
            <div className="mb-8 animate-fade-in-up animation-delay-400">
              <div className="inline-flex flex-col items-center lg:items-start bg-card/50 backdrop-blur-sm border border-border rounded-2xl px-6 py-4">
                <span className="text-sm text-muted-foreground">A partir de</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">R$ 2.997</span>
                  <span className="text-muted-foreground">,00</span>
                </div>
                <span className="text-sm text-accent font-medium">10x de R$ 299,70 sem juros</span>
                <span className="text-xs text-muted-foreground mt-1">ou R$ 2.847,15 no Pix (5% off)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Button
                variant="cta"
                size="lg"
                asChild
                className="group sm:text-base text-sm px-6 sm:px-10"
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

            {/* Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-in animation-delay-600">
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

          {/* Product Image */}
          <div className="relative order-1 lg:order-2 flex justify-center animate-scale-in animation-delay-200">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/20 to-water-medium/20 rounded-3xl blur-3xl opacity-40 scale-90" />
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={terracotaFront}
                  alt="Purificador Acqualive Terracota - Design vintage em barro e acrílico"
                  className="w-full h-auto object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerracotaHeroSection;
