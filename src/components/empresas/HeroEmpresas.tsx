import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logoAcqualiveWhite from "@/assets/acqualive-logo-white.png.asset.json";
import { IMG, WHATSAPP_EMPRESAS } from "./dados";

const HeroEmpresas = () => {
  return (
    <section id="topo" className="relative min-h-[92vh] emp-aurora emp-noise overflow-hidden">
      {/* Camadas de profundidade */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-52 -right-40 w-[38rem] h-[38rem] rounded-full bg-accent/15 blur-3xl emp-drift" />
        <div className="absolute bottom-[-16rem] -left-40 w-[38rem] h-[38rem] rounded-full bg-primary/40 blur-3xl emp-drift" style={{ animationDelay: "-6s" }} />
        <div className="absolute inset-0 emp-beams opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-secondary/40" />
      </div>

      <div className="container relative z-10 pt-8 pb-24 lg:pt-12">
        <header className="flex items-center justify-between mb-14 lg:mb-20 animate-fade-in">
          <img src={logoAcqualiveWhite.url} alt="Acqualive" width={220} height={48} decoding="async" className="h-11 md:h-12 w-auto" />
          <span className="hidden md:inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.32em] text-primary-foreground/70 border-l border-primary-foreground/20 pl-4">
          </span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 backdrop-blur px-4 py-2 mb-7 animate-fade-in-up">
              <Droplets className="w-4 h-4 text-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                Água gelada e natural, sem galão, sem desperdício
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-primary-foreground leading-[1.05] tracking-tight mb-7 animate-fade-in-up animation-delay-200">
              Corte até{" "}
              <span className="italic font-medium text-accent">R$ 7.920 por ano</span> em galão e tenha água{" "}
              gelada e natural o dia inteiro.
            </h1>

            <div className="h-px w-24 mx-auto lg:mx-0 bg-gradient-to-r from-accent to-transparent mb-7" />

            <p className="text-base md:text-lg text-primary-foreground/75 leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              Água purificada gelada e natural direto no ponto de uso, sem estoque, sem pedido atrasado e sem
              ninguém da equipe carregando 20 litros nas costas. Menos custo fixo, mais produtividade e uma
              estrutura que valoriza a sua marca diante de clientes e colaboradores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Button variant="cta" size="lg" asChild className="group shadow-2xl">
                <a href="#avaliacao">
                  <span>SOLICITAR AVALIAÇÃO GRATUITA</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="group border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={WHATSAPP_EMPRESAS} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  <span>Falar no WhatsApp</span>
                </a>
              </Button>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-primary-foreground/15 bg-primary-foreground/10 animate-fade-in animation-delay-600">
              {["Água gelada e natural no mesmo ponto", "Instalação, suporte e manutenção programada", "Mais de 20 anos de mercado"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 bg-secondary/40 backdrop-blur px-4 py-4">
                  <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs font-medium text-primary-foreground/85 text-left leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center animate-scale-in animation-delay-200">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="absolute inset-x-6 bottom-6 top-16 rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/[0.06] backdrop-blur-sm" />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[90px] scale-75" />
              <img
                src={IMG.duoFrente}
                alt="Purificador Acqualive DUO para empresas, água gelada e natural"
                width={670}
                height={1173}
                decoding="async"
                {...{ fetchpriority: "high" }}
                className="relative w-full h-auto object-contain animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEmpresas;
