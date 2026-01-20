import { Sparkles, Award, Droplets, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import terracotaFront from "@/assets/terracota-front.png";

interface FiltroAcqualiveSectionProps {
  whatsappLink: string;
}

const features = [
  {
    icon: Sparkles,
    title: "Água Alcalina e Ionizada",
    description: "Além de purificar, o Terracota transforma a água em alcalina, com pH ideal para a saúde.",
  },
  {
    icon: Droplets,
    title: "Rico em Magnésio",
    description: "Adiciona magnésio biodisponível, mineral essencial para mais de 300 funções do corpo.",
  },
  {
    icon: Shield,
    title: "Tecnologia TriWay",
    description: "Sistema exclusivo de 3 camadas: purificação, mineralização e alcalinização.",
  },
  {
    icon: Award,
    title: "Design Premium",
    description: "Combina a tradição do barro com acrílico cristal, unindo beleza e funcionalidade.",
  },
];

const FiltroAcqualiveSection = ({ whatsappLink }: FiltroAcqualiveSectionProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
            A Evolução
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            E Por Que o <span className="text-[#8B4513]">Acqualive Terracota</span> é o{" "}
            <span className="text-gradient-water">Melhor Filtro de Barro?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pegamos a melhor invenção brasileira e a elevamos ao próximo nível com tecnologia de ponta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/20 to-primary/20 rounded-3xl blur-3xl opacity-40 scale-110" />
              <img
                src={terracotaFront}
                alt="Acqualive Terracota - O melhor filtro de barro do mundo"
                className="relative w-full h-auto animate-float"
              />
            </div>
          </div>

          {/* Features */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-2xl p-6 mb-8">
              <p className="text-foreground font-medium text-center">
                <span className="text-accent font-bold">O Acqualive Terracota</span> não é apenas um filtro de barro. 
                É a <span className="font-bold">evolução definitiva</span> de uma tecnologia já comprovada como a melhor do mundo.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                variant="cta"
                size="lg"
                asChild
                className="group"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>QUERO O MELHOR DO MELHOR</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiltroAcqualiveSection;
