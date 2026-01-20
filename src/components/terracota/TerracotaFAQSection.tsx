import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a diferença entre o Terracota e um filtro de barro comum?",
    answer: "O Acqualive Terracota vai muito além da filtragem tradicional. Enquanto filtros de barro comuns apenas filtram partículas, o Terracota transforma a água em alcalina e ionizada, adiciona minerais essenciais como magnésio, e possui tecnologia TriWay que elimina cloro, agrotóxicos, vírus e bactérias com poros 10x menores que a menor bactéria conhecida.",
  },
  {
    question: "De quanto em quanto tempo preciso trocar os refis?",
    answer: "Os refis devem ser trocados a cada 6 meses ou 1500 litros, o que vier primeiro. Recomendamos também uma higienização rápida a cada 30 dias, utilizando apenas escova macia ou esponja delicada com água corrente, sem produtos químicos.",
  },
  {
    question: "O Terracota precisa de energia elétrica?",
    answer: "Não! O Acqualive Terracota funciona por gravidade, não necessitando de energia elétrica. Isso significa economia na conta de luz e funcionamento garantido mesmo em caso de falta de energia.",
  },
  {
    question: "Qual a capacidade e vazão do Terracota?",
    answer: "O reservatório tem capacidade de 6 litros de água filtrada. A velocidade de filtragem é de aproximadamente 2 litros por hora, garantindo água fresca e purificada sempre disponível.",
  },
  {
    question: "Como devo fazer a manutenção do filtro?",
    answer: "Mantenha o filtro protegido da luz direta. Faça higienização completa dos reservatórios mensalmente e das partes menores (boias e torneira) a cada 2 meses. Para os refis, use apenas água corrente e escova macia - nunca use produtos químicos. Sempre abasteça com água fresca e potável.",
  },
  {
    question: "O Terracota tem certificação?",
    answer: "Sim! O Acqualive Terracota é certificado conforme as portarias do INMETRO 244 e 92, de 22/07/2014 e 04/05/2017, garantindo qualidade e segurança comprovadas.",
  },
  {
    question: "Qual o prazo de entrega e formas de pagamento?",
    answer: "Oferecemos frete grátis para todo o Brasil. O pagamento pode ser feito em até 10x sem juros no cartão, ou com 5% de desconto no Pix/Boleto. Entre em contato conosco pelo WhatsApp para mais detalhes sobre prazo de entrega na sua região.",
  },
];

const TerracotaFAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas <span className="text-gradient-water">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o Acqualive Terracota
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-elevated transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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

export default TerracotaFAQSection;
