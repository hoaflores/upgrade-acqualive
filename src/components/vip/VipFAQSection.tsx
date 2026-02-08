import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O grupo é aberto para conversas?",
    answer:
      "Não. É um canal de transmissão silenciado onde apenas a Acqualive envia conteúdos e ofertas, garantindo sua privacidade.",
  },
  {
    question: "Como recebo os 50% de desconto?",
    answer:
      "Assim que seu vídeo de 1 minuto for enviado e validado, você receberá um cupom exclusivo no seu e-mail ou WhatsApp.",
  },
  {
    question: "Posso ganhar o refil grátis?",
    answer:
      "Sim! Dentro da comunidade, ensinamos o passo a passo para você indicar amigos e ganhar o seu próximo kit de refis sem pagar nada por ele.",
  },
  {
    question: "Onde deixo o review?",
    answer:
      "Você pode deixar sua avaliação diretamente na página do produto que você adquiriu em nosso site oficial.",
  },
];

const VipFAQSection = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--vip-gold)/0.15)] to-transparent" />

      <div className="container max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(var(--vip-gold))] mb-3 block">
            Perguntas Frequentes
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
            Tire suas dúvidas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-[hsl(var(--vip-gold)/0.12)] bg-[hsl(var(--vip-surface))] px-6 data-[state=open]:border-[hsl(var(--vip-gold)/0.3)]"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-primary-foreground hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--vip-text-muted))] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default VipFAQSection;
