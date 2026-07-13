import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o programa, na prática?",
    answer:
      "É simples: você indica um amigo, ele compra um purificador Acqualive e, assim que a compra for confirmada, você ganha 1 Kit Refil Acqualive gratuitamente. Uma economia de aproximadamente R$ 457,00 na sua próxima troca.",
  },
  {
    question: "Quanto vale o Kit Refil que eu recebo?",
    answer:
      "O Kit Refil Acqualive tem valor aproximado de R$ 457,00 e garante meses de água alcalina pura na sua casa sem custo adicional.",
  },
  {
    question: "Como sei que meu amigo comprou?",
    answer:
      "Transparência total. Nossa equipe comercial acompanha cada indicação e avisa você no WhatsApp assim que a compra do seu amigo for confirmada.",
  },
  {
    question: "Existe limite de indicações?",
    answer:
      "Zero. Se você indicar 10 pessoas e elas comprarem, você ganha 10 Kits Refil. Uma economia superior a R$ 4.500,00.",
  },
  {
    question: "O que meu amigo indicado ganha?",
    answer:
      "Seu amigo é atendido diretamente pela equipe comercial da Acqualive com uma condição especial exclusiva para indicados.",
  },
  {
    question: "Preciso pagar algo para participar?",
    answer:
      "Absolutamente nada. O Programa de Indicação é 100% gratuito e administrado diretamente pela Acqualive. Basta ser cliente e indicar quem você gosta.",
  },
  {
    question: "Quando recebo meu Kit Refil?",
    answer:
      "Assim que a compra do seu indicado for confirmada. O Kit Refil é enviado para o seu endereço ou pode ser combinado junto com sua próxima troca.",
  },
  {
    question: "Posso indicar pessoas de outras cidades ou estados?",
    answer:
      "Sim. Atendemos todo o Brasil, então suas indicações podem estar em qualquer lugar do país.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_hsl(21_89%_55%_/_0.05),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(215_62%_31%_/_0.05),_transparent_60%)]" />
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      
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
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-6">
            Ainda tem dúvidas? Fale diretamente com nosso time.
          </p>
          <Button variant="whatsapp" size="lg" asChild className="group">
            <a 
              href="https://wa.me/555192928468?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20Programa%20Embaixador%20Acqualive."
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 48 48" className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor">
                <path d="M24.04 4.32c-10.84 0-19.68 8.84-19.68 19.68 0 3.47.91 6.84 2.64 9.82L4.32 43.68l10.13-2.64c2.88 1.57 6.12 2.4 9.59 2.4 10.84 0 19.68-8.84 19.68-19.68S34.88 4.32 24.04 4.32zm0 36.01c-3.31 0-6.55-.9-9.38-2.61l-.67-.4-6.96 1.82 1.85-6.77-.44-.7c-1.87-2.97-2.86-6.41-2.86-9.91 0-9.01 7.32-16.34 16.34-16.34s16.34 7.32 16.34 16.34c.12 9.02-7.2 16.46-16.22 16.57zm8.96-12.24c-.49-.25-2.91-1.44-3.36-1.6-.45-.16-.78-.25-1.1.25-.33.49-1.27 1.6-1.56 1.93-.29.33-.57.37-1.06.12-.49-.24-2.07-.76-3.95-2.43-1.46-1.3-2.44-2.91-2.73-3.4-.29-.49-.03-.75.22-1 .22-.22.49-.57.74-.86.24-.29.33-.49.49-.82.16-.33.08-.61-.04-.86-.12-.24-1.1-2.64-1.51-3.61-.4-.95-.8-.82-1.1-.84-.29-.02-.61-.02-.94-.02-.33 0-.86.12-1.31.61-.45.49-1.72 1.68-1.72 4.1s1.76 4.76 2.01 5.08c.24.33 3.47 5.29 8.41 7.42 1.18.51 2.1.81 2.81 1.04 1.18.38 2.26.32 3.11.2.95-.14 2.91-1.19 3.32-2.34.41-1.15.41-2.13.29-2.34-.13-.2-.45-.33-.94-.57z"/>
              </svg>
              Falar com meu Consultor Exclusivo
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
