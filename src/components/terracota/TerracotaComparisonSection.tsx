import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "Design que combina com a decoração", terracota: true, traditional: true },
  { feature: "Água alcalina e ionizada", terracota: true, traditional: false },
  { feature: "Rica em magnésio", terracota: true, traditional: false },
  { feature: "Remove cloro e agrotóxicos", terracota: true, traditional: false },
  { feature: "Elimina vírus e bactérias", terracota: true, traditional: false },
  { feature: "Tecnologia TriWay exclusiva", terracota: true, traditional: false },
  { feature: "Certificação INMETRO", terracota: true, traditional: false },
  { feature: "Material livre de BPA", terracota: true, traditional: true },
];

const TerracotaComparisonSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
            Comparativo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A <span className="text-gradient-water">Evolução</span> do Filtro de Barro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja por que o Acqualive Terracota é muito mais que um filtro tradicional
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elevated">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
              <div className="p-4 lg:p-6">
                <span className="text-sm font-medium text-muted-foreground">Característica</span>
              </div>
              <div className="p-4 lg:p-6 text-center border-l border-border bg-primary/5">
                <span className="text-sm font-bold text-primary">Acqualive Terracota</span>
              </div>
              <div className="p-4 lg:p-6 text-center border-l border-border">
                <span className="text-sm font-medium text-muted-foreground">Filtro Tradicional</span>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index !== comparisonData.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="p-4 lg:p-6 flex items-center">
                  <span className="text-sm text-foreground">{row.feature}</span>
                </div>
                <div className="p-4 lg:p-6 flex items-center justify-center border-l border-border bg-primary/5">
                  {row.terracota ? (
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="p-4 lg:p-6 flex items-center justify-center border-l border-border">
                  {row.traditional ? (
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerracotaComparisonSection;
