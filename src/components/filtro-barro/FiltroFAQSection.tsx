import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Por que a ONU reconheceu o filtro de barro?",
    answer: "Em 2001, a ONU incluiu o filtro de barro brasileiro entre as soluções mais eficientes para água potável. Ele combina simplicidade, 99,9% de eficiência, baixo custo, zero energia e sustentabilidade.",
  },
  {
    question: "Qual a diferença entre um filtro comum e o Terracota?",
    answer: "O filtro comum apenas filtra. O Terracota vai além: utiliza a tecnologia TriWay que purifica, mineraliza (adiciona magnésio) e alcaliniza a água. Possui design premium e certificação INMETRO.",
  },
  {
    question: "O que é água alcalina e por que é melhor?",
    answer: "Água alcalina tem pH acima de 7, ajudando a neutralizar a acidez do corpo causada por alimentação e estresse. Melhora hidratação, auxilia digestão e contribui para o equilíbrio do organismo.",
  },
  {
    question: "O filtro realmente mantém a água gelada?",
    answer: "Sim! O barro poroso permite microevaporação pela parede externa. Esse processo físico natural reduz a temperatura em 5-7°C, sem usar energia elétrica.",
  },
  {
    question: "Qual a durabilidade do Acqualive Terracota?",
    answer: "O corpo do filtro dura décadas. Os refis internos têm vida útil de 6 meses ou 1.500 litros de água filtrada, o que for atingido primeiro.",
  },
  {
    question: "Precisa de energia elétrica?",
    answer: "Não! Como o filtro tradicional, o Terracota funciona 100% por gravidade. Zero consumo de energia, zero custo adicional na conta de luz.",
  },
];

const FiltroFAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-barro-sand overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-barro-terracota/20 to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-24">
              <span className="text-barro-terracota font-display font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
                FAQ
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-barro-earth leading-tight mb-4">
                Perguntas
                <span className="block text-barro-terracota italic font-serif font-normal">frequentes</span>
              </h2>
              <p className="text-barro-earth/60">
                Tudo o que você precisa saber sobre o filtro de barro e o Acqualive Terracota.
              </p>
            </div>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-barro-cream rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-barro-cream/80 transition-colors"
                  >
                    <span className="font-display font-bold text-barro-earth pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-barro-terracota flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-barro-earth/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FiltroFAQSection;
