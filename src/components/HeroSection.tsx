import { Droplets, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProductImage from "@/assets/hero-product.jpg";

const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-water-medium/30 rounded-full blur-3xl animate-pulse-soft animation-delay-400" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />
      </div>

      <div className="container relative z-10 pt-8 pb-20 lg:pt-16">
        {/* Header */}
        <header className="flex items-center justify-between mb-12 lg:mb-20 animate-fade-in">
          <div className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl font-bold text-foreground">
              Acqualive
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-foreground">
              Oferta exclusiva para clientes antigos
            </span>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Programa de Fidelidade
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
              A tecnologia da sua água{" "}
              <span className="text-gradient-water">evoluiu.</span>
              <br />
              A sua saúde merece acompanhar.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              Valorizamos sua fidelidade: Seu filtro antigo vale{" "}
              <strong className="text-accent font-bold">DESCONTOS</strong> que podem
              fazer um novíssimo Acqualive sair por{" "}
              <strong className="text-accent font-bold">menos de R$1000,00</strong> para
              você fazer o upgrade agora para os mais modernos Purificadores e
              Ionizadores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Button
                variant="cta"
                size="xl"
                onClick={scrollToPricing}
                className="group"
              >
                <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                QUERO RESGATAR MEU CRÉDITO AGORA
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2 animate-fade-in animation-delay-600">
              <Sparkles className="w-4 h-4 text-gold" />
              Oferta exclusiva para clientes antigos
            </p>
          </div>

          {/* Product Image */}
          <div className="relative order-1 lg:order-2 flex justify-center animate-scale-in animation-delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-water rounded-full blur-3xl opacity-20 scale-75" />
              <img
                src={heroProductImage}
                alt="Purificador Acqualive Linha V - Design premium com acabamento sofisticado"
                className="relative w-full max-w-lg lg:max-w-xl object-contain animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
