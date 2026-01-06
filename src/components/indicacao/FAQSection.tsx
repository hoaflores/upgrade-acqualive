import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como sei que meu amigo comprou?",
    answer:
      "Transparência total. Você recebe um alerta automático no WhatsApp assim que a nota fiscal for emitida. O crédito é seu na hora.",
  },
  {
    question: "Existe limite de ganhos?",
    answer:
      "Zero. Se você indicar 10 pessoas e elas comprarem, você garante 10 kits de refis. Uma economia superior a R$ 5.000,00.",
  },
  {
    question: "O que meu indicado ganha de verdade?",
    answer:
      'Acesso ao nosso "Clube de Vendas Privado", com condições de parcelamento e brindes que o público geral não tem acesso.',
  },
  {
    question: "Preciso pagar algo para participar do programa?",
    answer:
      "Absolutamente nada. O Programa Embaixador é 100% gratuito. Você só precisa ser cliente Acqualive e ter vontade de ajudar pessoas a ter uma vida mais saudável.",
  },
  {
    question: "Quanto tempo leva para receber meu kit de refis?",
    answer:
      "Assim que a compra do seu indicado for confirmada, você recebe o crédito automaticamente. O kit é enviado junto com seu próximo pedido de reposição ou pode ser solicitado a qualquer momento.",
  },
  {
    question: "Posso indicar pessoas de outras cidades ou estados?",
    answer:
      "Sim! Entregamos em todo o Brasil. Suas indicações podem estar em qualquer lugar do país. O frete é por conta do indicado, nas mesmas condições especiais.",
  },
  {
    question: "Os prêmios da campanha de verão são cumulativos?",
    answer:
      "Sim! Além de ganhar 1 kit por indicação, você concorre ao sorteio de 1 ano de água grátis. E ao atingir 5 indicações, desbloqueia o status Embaixador Vitalício com 10% de desconto por 3 anos.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Tire suas dúvidas
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Perguntas <span className="text-gradient-orange">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tudo que você precisa saber sobre o Programa Embaixador Acqualive
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border border-border/60 shadow-soft overflow-hidden hover:shadow-medium transition-shadow duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      <span className="font-semibold text-foreground text-base">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed pl-12">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
