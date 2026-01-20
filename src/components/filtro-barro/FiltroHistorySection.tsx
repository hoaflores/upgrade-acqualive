import { History, Globe, Leaf } from "lucide-react";

const FiltroHistorySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
            História
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Uma Invenção <span className="text-[#8B4513]">100% Brasileira</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O filtro de barro é uma das maiores contribuições do Brasil para a saúde pública mundial
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#8B4513]/10 flex items-center justify-center mb-6">
              <History className="w-7 h-7 text-[#8B4513]" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Mais de 200 Anos de História
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Criado no século XIX por artesãos brasileiros, o filtro de barro surgiu da necessidade 
              de purificar água em regiões rurais. A técnica foi passada de geração em geração, 
              tornando-se símbolo da cultura brasileira.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Reconhecimento Internacional
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Em 2001, a Organização das Nações Unidas (ONU) incluiu o filtro de barro brasileiro 
              entre as soluções mais eficientes para garantir água potável em países em desenvolvimento. 
              Um reconhecimento histórico da nossa engenhosidade.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Leaf className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Sustentabilidade Natural
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Feito de argila natural, o filtro de barro não precisa de energia elétrica, 
              não gera resíduos plásticos e tem vida útil de décadas. É a solução perfeita 
              para quem busca um estilo de vida mais sustentável.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 bg-gradient-to-r from-[#8B4513]/10 via-primary/5 to-[#8B4513]/10 border border-[#8B4513]/20 rounded-2xl p-8 lg:p-12 text-center">
          <blockquote className="text-xl md:text-2xl font-display text-foreground italic mb-4">
            "O filtro de barro brasileiro é uma das invenções mais geniais da humanidade 
            para o tratamento de água potável."
          </blockquote>
          <cite className="text-muted-foreground">
            — Relatório da ONU sobre Soluções Hídricas, 2001
          </cite>
        </div>
      </div>
    </section>
  );
};

export default FiltroHistorySection;
