import { Droplets, Heart, ShieldCheck, Zap } from "lucide-react";
import terracotaLifestyle from "@/assets/terracota-lifestyle.png";

const benefits = [
  {
    icon: Droplets,
    title: "Hidratação Funcional",
    description: "Muito mais do que matar a sede, a água alcalina garante disposição e energia para o dia todo!",
  },
  {
    icon: Heart,
    title: "Prevenção de Doenças",
    description: "Rica em minerais essenciais, ajuda o sistema imunológico a combater desde resfriados a doenças crônicas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Água livre de cloro, agrotóxicos, vírus e bactérias. Proteção completa para toda a família!",
  },
  {
    icon: Zap,
    title: "Tecnologia TriWay",
    description: "Sistema exclusivo de filtragem tripla que purifica, mineraliza e alcaliniza a água.",
  },
];

const TerracotaBenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
            Benefícios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Água Alcalina <span className="text-gradient-water">Livre de Cloro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforma a água comum na água ideal para sua saúde
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/10 to-primary/10 rounded-3xl blur-2xl opacity-50 scale-95" />
              <img
                src={terracotaLifestyle}
                alt="Acqualive Terracota em ambiente"
                className="relative w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerracotaBenefitsSection;
