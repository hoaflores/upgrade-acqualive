import { Ruler, Scale, Timer, Droplet, Shield, Award } from "lucide-react";
import terracotaSide from "@/assets/terracota-side.png";

const specs = [
  { icon: Ruler, label: "Dimensões", value: "30 × 30 × 48,5 cm" },
  { icon: Scale, label: "Peso Vazio", value: "10,3 kg" },
  { icon: Droplet, label: "Capacidade", value: "6 Litros" },
  { icon: Timer, label: "Vazão", value: "2 L/hora" },
  { icon: Shield, label: "Vida útil Refis", value: "6 meses ou 1500L" },
  { icon: Award, label: "Certificação", value: "INMETRO" },
];

const features = [
  "Cerâmica porosa com prata coloidal",
  "Carvão ativado premium",
  "Mix de minerais essenciais",
  "Material: Barro + Acrílico livre de BPA",
  "Torneira em metal durável",
  "Poros 10x menores que a menor bactéria",
];

const TerracotaTechSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
            Especificações
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tecnologia <span className="text-[#8B4513]">Exclusiva</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O Acqualive Terracota é desenvolvido com a mais poderosa tecnologia de filtragem: TriWay
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="bg-muted/50 border border-border rounded-xl p-4 text-center"
              >
                <spec.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                <p className="text-sm font-bold text-foreground">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/20 to-transparent rounded-3xl blur-2xl opacity-40 scale-110" />
              <img
                src={terracotaSide}
                alt="Acqualive Terracota - Vista lateral"
                className="relative w-full h-auto"
              />
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Composição dos Refis
            </h3>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Purification Power */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-[#8B4513]/10 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Potencial de Purificação
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Elimina <span className="text-foreground font-semibold">vírus, bactérias, contaminantes orgânicos e inorgânicos, 
            cloro, agrotóxicos e resíduos sólidos</span>. Refis produzidos com poros filtrantes 
            <span className="text-accent font-bold"> 10 vezes menores</span> que a menor bactéria conhecida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TerracotaTechSection;
