import { Zap, Sparkles, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProductImage from "@/assets/hero-upgrade.png";
import logoAcqualive from "@/assets/logo-acqualive.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const HeroSection = () => {
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
        <header className="flex items-center justify-between mb-12 lg:mb-16 animate-fade-in">
          <div className="flex items-center">
            <img 
              src={logoAcqualive} 
              alt="Acqualive" 
              className="h-12 md:h-14 lg:h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-foreground">
              Oferta exclusiva para clientes
            </span>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">
                Exclusivo para Clientes Acqualive
              </span>
            </div>


            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Seu Acqualive com{" "}
              <span className="text-gradient-water">design e praticidade</span>{" "}
              de última geração
            </h1>

            <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              Faça um Upgrade para o filtro de água alcalina mais moderno da Acqualive e ele pode sair por{" "}
              <span className="text-accent font-bold text-3xl md:text-4xl">menos de R$ 1.000,00</span>{" "}
              para você!
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              Mais prático, com tecnologia vaso comunicante e maior vazão, sem boias, manutenção muito mais fácil. 
              Você já tem a melhor água, agora tenha também a{" "}
              <strong className="text-foreground">melhor experiência</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Button
                variant="cta"
                size="lg"
                asChild
                className="group sm:text-base text-sm px-6 sm:px-10"
              >
                <a
                  href="https://wa.me/555192928468?text=Olá,%20recebi%20um%20e-mail%20com%20um%20desconto%20exclusivo%20para%20fazer%20o%20upgrade%20do%20meu%20filtro%20Acqualive.%20Gostaria%20de%20saber%20mais."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>QUERO MODERNIZAR AGORA</span>
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
                  Condição exclusiva
                </span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative order-1 lg:order-2 flex justify-center animate-scale-in animation-delay-200">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
              <div className="absolute inset-0 bg-gradient-water rounded-3xl blur-3xl opacity-20 scale-90" />
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={heroProductImage}
                  alt="Purificador Acqualive Linha V - Design premium com acabamento sofisticado"
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

export default HeroSection;
