import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Por que a ONU reconheceu o filtro de barro como o melhor do mundo?",
    answer: "Em 2001, a ONU incluiu o filtro de barro brasileiro entre as soluções mais eficientes para garantir água potável. Isso porque ele combina simplicidade, eficiência (elimina 99,9% de bactérias), baixo custo, zero consumo de energia e sustentabilidade - características ideais para qualquer região do planeta.",
  },
  {
    question: "Qual a diferença entre um filtro de barro comum e o Acqualive Terracota?",
    answer: "O filtro de barro comum apenas filtra a água. O Acqualive Terracota vai além: utiliza a tecnologia TriWay que purifica, mineraliza (adiciona magnésio) e alcaliniza a água. Além disso, possui design premium com acrílico cristal e certificação INMETRO.",
  },
  {
    question: "O que é água alcalina e por que ela é melhor?",
    answer: "Água alcalina tem pH acima de 7, o que ajuda a neutralizar a acidez do corpo causada por alimentação e estresse. Estudos indicam que a água alcalina pode melhorar a hidratação, auxiliar na digestão e contribuir para o equilíbrio do organismo.",
  },
  {
    question: "O filtro de barro realmente mantém a água mais gelada?",
    answer: "Sim! O barro é um material poroso que permite a microevaporação da água pela parede externa. Esse processo físico natural reduz a temperatura da água em 5-7°C em relação ao ambiente, sem usar energia elétrica.",
  },
  {
    question: "Qual a durabilidade do Acqualive Terracota?",
    answer: "O corpo do filtro (barro + acrílico) dura décadas com os devidos cuidados. Os refis internos têm vida útil de 6 meses ou 1.500 litros de água filtrada, o que for atingido primeiro.",
  },
  {
    question: "O Acqualive Terracota precisa de energia elétrica?",
    answer: "Não! Assim como o filtro de barro tradicional, o Terracota funciona 100% por gravidade. Zero consumo de energia, zero custo adicional na conta de luz.",
  },
  {
    question: "Como funciona a entrega e instalação?",
    answer: "O frete é grátis para todo o Brasil. A instalação é simples e não requer técnico - basta posicionar o filtro, encaixar os refis e adicionar água. Acompanha manual ilustrado e vídeo tutorial.",
  },
];

const FiltroFAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tudo Sobre o <span className="text-gradient-water">Filtro de Barro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas para as perguntas mais comuns sobre o melhor filtro do mundo
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-display text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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

export default FiltroFAQSection;
