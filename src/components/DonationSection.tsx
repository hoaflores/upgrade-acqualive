import { Gift, Heart, Users, Ticket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Gift,
    title: "Você Garante o Novo",
    description:
      "Aplica seu crédito de fidelidade imediatamente na aquisição da Linha V.",
  },
  {
    number: "2",
    icon: Heart,
    title: "Você Fica com o Antigo",
    description: "Não precisa nos devolver nada.",
  },
  {
    number: "3",
    icon: Users,
    title: "Você Doa",
    description:
      "Higienize e entregue o aparelho antigo para um amigo, parente ou instituição que precisa de água de qualidade.",
  },
  {
    number: "4",
    icon: Ticket,
    title: "Nós Apoiamos",
    description: "Enviamos um Cupom de ",
    highlight: "30% OFF",
    descriptionEnd: " no refil para quem receber sua doação, garantindo que o novo dono comece com água 100% pura.",
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
              Uma surpresa ainda maior!
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Você faz o <span className="text-gradient-water">UPGRADE</span>, e o
            antigo vira <span className="text-gradient-water">DOAÇÃO!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Esqueça a burocracia de embalar e despachar seu filtro antigo. No
            nosso programa de fidelidade, nós transformamos seu desconto em um{" "}
            <strong className="text-foreground">ato de solidariedade</strong>,
            sem complicações.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            Como funciona:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
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

        {/* Highlight Box */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-water rounded-2xl p-8 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            <div className="relative z-10">
              <Heart className="w-10 h-10 text-primary-foreground/80 mx-auto mb-4" />
              <p className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                "Você renova sua saúde e transforma vidas ao mesmo tempo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
