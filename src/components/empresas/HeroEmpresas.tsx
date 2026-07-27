import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Droplets, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logoAcqualive from "@/assets/logo-acqualive.png";
import { IMG, WHATSAPP_EMPRESAS } from "./dados";

const HeroEmpresas = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-water-medium/30 rounded-full blur-3xl animate-pulse-soft animation-delay-400" />
      </div>

      <div className="container relative z-10 pt-8 pb-20 lg:pt-14">
        <header className="flex items-center justify-between mb-12 lg:mb-16 animate-fade-in">
          <img src={logoAcqualive} alt="Acqualive" className="h-12 md:h-14 w-auto" />
          <div className="hidden md:flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Acqualive Empresas</span>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <Droplets className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">Água natural e fresquinha, sem galão</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Água natural e fresquinha para{" "}
              <span className="text-gradient-water">empresas que cuidam melhor das pessoas</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              O Acqualive DUO entrega água purificada natural e fresquinha direto no ponto de uso.
              Sem estoque de galões, sem troca pesada, sem interrupção na rotina da equipe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Button variant="cta" size="lg" asChild className="group">
                <a href="#avaliacao">
                  <span>SOLICITAR AVALIAÇÃO GRATUITA</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <a href={WHATSAPP_EMPRESAS} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  <span>Falar no WhatsApp</span>
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-in animation-delay-600">
              {["Instalação e suporte técnico", "Manutenção programada", "Mais de 20 anos de mercado"].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-soft"
                >
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center animate-scale-in animation-delay-200">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-water rounded-3xl blur-3xl opacity-20 scale-90" />
              <img
                src={IMG.duoFrente}
                alt="Purificador Acqualive DUO para empresas, água natural e fresquinha"
                className="relative w-full h-auto object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEmpresas;
