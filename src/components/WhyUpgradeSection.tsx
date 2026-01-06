import { Gem, Zap, Wrench, Droplets } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const benefits = [
  {
    icon: Gem,
    title: "Design Premium",
    description: "Acabamento sofisticado que valoriza sua cozinha e impressiona visitas.",
  },
  {
    icon: Zap,
    title: "Maior Vazão",
    description: "Encha garrafas e panelas na metade do tempo com o fluxo mais rápido.",
  },
  {
    icon: Wrench,
    title: "Praticidade no Dia a Dia",
    description: "Sem boias, menos peças. Higienização e troca de refil muito mais fáceis.",
  },
  {
    icon: Droplets,
    title: "Mesma Água Incrível",
    description: "A tecnologia de purificação que você já ama, agora em um produto muito mais moderno.",
  },
];

const WhyUpgradeSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-water-light rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que{" "}
            <span className="text-gradient-water">Modernizar</span> agora?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Você já tem a melhor água. Mas seu purificador pode ter muito mais{" "}
            <strong className="text-foreground">praticidade e beleza</strong>. A nova Linha V 
            mantém toda a tecnologia de purificação que você confia, com uma{" "}
            <strong className="text-primary">
              experiência completamente renovada
            </strong>
            :
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card border border-border rounded-2xl p-6 lg:p-8 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-water rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <SectionCTA />
      </div>
    </section>
  );
};

export default WhyUpgradeSection;
