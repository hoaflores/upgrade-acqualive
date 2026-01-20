import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Filtragem natural por gravidade",
    filtroComum: true,
    terracota: true,
    purificadorEletrico: false,
  },
  {
    feature: "Água naturalmente gelada",
    filtroComum: true,
    terracota: true,
    purificadorEletrico: false,
  },
  {
    feature: "Zero consumo de energia",
    filtroComum: true,
    terracota: true,
    purificadorEletrico: false,
  },
  {
    feature: "100% sustentável",
    filtroComum: true,
    terracota: true,
    purificadorEletrico: false,
  },
  {
    feature: "Água Alcalina e Ionizada",
    filtroComum: false,
    terracota: true,
    purificadorEletrico: false,
  },
  {
    feature: "Rica em Magnésio",
    filtroComum: false,
    terracota: true,
    purificadorEletrico: false,
  },
  {
    feature: "Tecnologia TriWay",
    filtroComum: false,
    terracota: true,
    purificadorEletrico: false,
  },
  {
    feature: "Design Premium",
    filtroComum: false,
    terracota: true,
    purificadorEletrico: true,
  },
  {
    feature: "Certificação INMETRO",
    filtroComum: false,
    terracota: true,
    purificadorEletrico: true,
  },
];

const FiltroComparisonSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
            Comparativo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-[#8B4513]">Terracota</span> vs Outros Filtros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como o Acqualive Terracota combina o melhor dos dois mundos
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-card border border-border rounded-2xl overflow-hidden">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 lg:p-6 font-display text-foreground">
                  Característica
                </th>
                <th className="text-center p-4 lg:p-6 font-display text-muted-foreground">
                  Filtro de Barro Comum
                </th>
                <th className="text-center p-4 lg:p-6 font-display text-foreground bg-primary/5 border-x border-primary/20">
                  <span className="text-primary font-bold">Acqualive Terracota</span>
                </th>
                <th className="text-center p-4 lg:p-6 font-display text-muted-foreground">
                  Purificador Elétrico
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b border-border last:border-b-0">
                  <td className="p-4 lg:p-6 text-sm text-foreground font-medium">
                    {row.feature}
                  </td>
                  <td className="text-center p-4 lg:p-6">
                    {row.filtroComum ? (
                      <Check className="w-5 h-5 text-accent mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                    )}
                  </td>
                  <td className="text-center p-4 lg:p-6 bg-primary/5 border-x border-primary/20">
                    {row.terracota ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                    )}
                  </td>
                  <td className="text-center p-4 lg:p-6">
                    {row.purificadorEletrico ? (
                      <Check className="w-5 h-5 text-accent mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            O <span className="text-primary font-semibold">Acqualive Terracota</span> é o único 
            que une a tradição do filtro de barro com tecnologia de ponta para água alcalina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FiltroComparisonSection;
