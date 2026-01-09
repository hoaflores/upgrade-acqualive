import { Check, Gift, Truck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import productActionImage from "@/assets/product-action.jpg";
const benefits = [
  {
    icon: Gift,
    title: "Crédito de Fidelidade",
    description: "Seu usado abate até R$ 500,00 no valor final.",
  },
  {
    icon: Check,
    title: "Kit de refis já incluso",
    description: "Ia trocar os refis? Seu novo filtro já vem com um kit!",
  },
  {
    icon: CreditCard,
    title: "Bônus Extra",
    description: "Condição especial de parcelamento ou desconto à vista.",
  },
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Para todo o Brasil.",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Faça as contas.{" "}
            <span className="text-gradient-water">
              Nunca foi tão fácil ter o melhor.
            </span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            O Que Você Ganha:
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-water rounded-3xl p-1">
            <div className="bg-card rounded-[1.4rem] p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Product Image */}
                <div className="relative order-2 md:order-1">
                  <div className="absolute inset-0 bg-gradient-water rounded-2xl blur-2xl opacity-20" />
                  <img
                    src={productActionImage}
                    alt="Purificador Acqualive em uso - Água pura e alcalina"
                    className="relative w-full max-w-sm mx-auto rounded-2xl shadow-elevated object-cover aspect-[4/3]"
                  />
                </div>

                {/* Pricing Info */}
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="mb-6">
                    <p className="text-muted-foreground mb-2">
                      Você ganha{" "}
                      <strong className="text-accent font-bold">R$500,00 de desconto</strong>{" "}
                      e o seu novo purificador já vem com um kit de refis!
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      Mais praticidade, mais beleza e a mesma água incrível!
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-muted-foreground/60 text-lg line-through mb-2">
                      De: <span className="text-muted-foreground/60">R$ 1.997,00</span>
                    </p>
                    <p className="font-display text-xl md:text-2xl font-bold text-foreground">
                      Por:{" "}
                      <span className="text-gradient-water">
                        Clique e descubra o melhor preço!
                      </span>
                    </p>
                  </div>

                  <Button variant="cta" size="lg" asChild className="w-full group">
                    <a
                      href="https://wa.me/555192928468?text=Olá,%20recebi%20um%20e-mail%20com%20um%20desconto%20exclusivo%20para%20trocar%20meu%20filtro%20Acqualive%20pelo%20novo%20modelo.%20Gostaria%20de%20saber%20mais."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>GARANTIR MEU NOVO FILTRO</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
