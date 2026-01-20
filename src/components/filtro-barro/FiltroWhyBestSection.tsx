import { Droplets, ThermometerSnowflake, Shield, Leaf, Zap, Heart } from "lucide-react";

const reasons = [
  {
    icon: Droplets,
    title: "Filtragem Natural por Gravidade",
    description: "A cerâmica porosa filtra a água gota a gota, eliminando impurezas, bactérias e vírus sem necessidade de eletricidade ou produtos químicos.",
    highlight: "99,9% de eficiência",
  },
  {
    icon: ThermometerSnowflake,
    title: "Água Naturalmente Gelada",
    description: "O barro permite a evaporação natural da água pela parede externa, mantendo a água fresca mesmo em dias quentes - um ar condicionado natural!",
    highlight: "5-7°C mais fria",
  },
  {
    icon: Shield,
    title: "Prata Coloidal Bactericida",
    description: "A cerâmica impregnada com prata coloidal impede a proliferação de microrganismos, garantindo água segura por muito mais tempo.",
    highlight: "Proteção 24/7",
  },
  {
    icon: Leaf,
    title: "Zero Impacto Ambiental",
    description: "Não usa eletricidade, não gera resíduos plásticos e é totalmente biodegradável. O filtro mais ecológico que existe.",
    highlight: "100% sustentável",
  },
  {
    icon: Zap,
    title: "Sem Custos de Energia",
    description: "Diferente de purificadores elétricos, o filtro de barro funciona por gravidade, eliminando custos com energia e manutenção complexa.",
    highlight: "R$ 0 de luz",
  },
  {
    icon: Heart,
    title: "Melhora o Sabor da Água",
    description: "Remove o cloro e outras substâncias que alteram o sabor, devolvendo à água seu gosto puro e natural.",
    highlight: "Sabor superior",
  },
];

const FiltroWhyBestSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
            A Ciência
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            6 Razões Científicas Para Ser o <span className="text-gradient-water">Melhor do Mundo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Não é apenas tradição - a ciência comprova a superioridade do filtro de barro
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-3">
                <span className="text-xs font-bold text-accent">{reason.highlight}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-muted/50 rounded-2xl">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Anos de tradição</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-2xl">
            <div className="text-4xl font-bold text-[#8B4513] mb-2">50M+</div>
            <div className="text-sm text-muted-foreground">Lares brasileiros</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-2xl">
            <div className="text-4xl font-bold text-accent mb-2">99,9%</div>
            <div className="text-sm text-muted-foreground">Eficiência filtragem</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-2xl">
            <div className="text-4xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">Impacto ambiental</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiltroWhyBestSection;
