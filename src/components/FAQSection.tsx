import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "Preciso enviar o filtro antigo para a Acqualive para ganhar o desconto?",
    answer:
      "Não! Para facilitar sua vida e reduzir o impacto ambiental com transportes, você fica responsável por higienizar e doar o aparelho localmente para quem quiser. Nós confiamos em você!",
  },
  {
    question: "O aparelho antigo precisa estar funcionando?",
    answer:
      "Sim, a ideia é que ele beneficie outra pessoa. Você repassa saúde adiante!",
  },
  {
    question: "Como a pessoa que receber vai trocar o refil?",
    answer:
      'Nós enviamos junto com o seu pedido um "Kit de Doação" com um cupom especial de 30% de desconto para a primeira compra de refil do novo dono.',
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Parcelamos em até 10x sem juros no cartão de crédito.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-water-light relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas{" "}
            <span className="text-gradient-water">Frequentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-soft transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
