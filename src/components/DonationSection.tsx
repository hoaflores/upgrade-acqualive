import { Gift, Heart, Users, Ticket, Sparkles, Package } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Sparkles,
    title: "Garanta seu Novo Acqualive",
    description:
      "Aplique seu crédito de fidelidade e modernize para a Linha V com condições exclusivas.",
  },
  {
    number: "2",
    icon: Package,
    title: "Receba o Manual de Higienização",
    description: "Junto com seu novo purificador, você recebe um manual que explica a melhor forma de higienizar seu aparelho antigo para doação.",
  },
  {
    number: "3",
    icon: Users,
    title: "Doe para Quem Precisa",
    description:
      "Higienize e entregue para um amigo, parente ou instituição. Aquele conhecido que você sabe que precisa de água de qualidade, mas não pode comprar agora.",
  },
  {
    number: "4",
    icon: Ticket,
    title: "Cupom de 30% OFF para o Novo Dono",
    description: "Quem receber sua doação ganha um cupom de ",
    highlight: "30% de desconto",
    descriptionEnd: " no primeiro refil, garantindo que comece a usar imediatamente.",
  },
];

const DonationSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-water-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/10 rounded-full" />
        <div className="absolute bottom-32 right-20 w-48 h-48 border-2 border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Gift className="w-5 h-5 text-gold" />
            <span className="text-sm font-semibold text-foreground">
              Bônus Solidário
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Modernize e <span className="text-gradient-water">Ajude Alguém</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Você ganha um desconto incrível, moderniza seu purificador e ainda ajuda 
            alguém a ter acesso à água de qualidade. Seu antigo Acqualive pode 
            transformar a vida de uma pessoa ou família.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            Veja como é simples:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.number}
                </div>
                <div className="flex items-start gap-4 pt-2">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-water rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                      {step.highlight && (
                        <span className="text-accent font-bold">{step.highlight}</span>
                      )}
                      {step.descriptionEnd}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Box - Design diferenciado (não é CTA) */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card border-l-4 border-primary rounded-xl p-8 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <blockquote className="text-lg md:text-xl font-medium text-foreground italic leading-relaxed mb-2">
                  "Você moderniza sua experiência e transforma a vida de alguém ao mesmo tempo."
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  Faz muito sentido: desconto para você, água de qualidade para quem precisa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
