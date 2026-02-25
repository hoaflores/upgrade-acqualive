import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Star, MessageSquare, Camera, Video, Sparkles, ArrowRight, Gift, Share2, Trophy, CheckCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeroSection from "@/components/indicacao/HeroSection";
import HowItWorksSection from "@/components/indicacao/HowItWorksSection";
import HealthSection from "@/components/indicacao/HealthSection";
import SummerCampaignSection from "@/components/indicacao/SummerCampaignSection";
import FormSection from "@/components/indicacao/FormSection";
import FooterSection from "@/components/indicacao/FooterSection";
import FloatingWhatsAppIndicacao from "@/components/indicacao/FloatingWhatsAppIndicacao";
import DownloadPDFButton from "@/components/DownloadPDFButton";

const CLUB_LINK = "https://www.acqualive.com.br/pages/acqualive-club";
const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá,%20quero%20saber%20mais%20sobre%20o%20Acqualive%20Club%20e%20o%20programa%20de%20indicação!";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ───────────── SEÇÃO ACQUALIVE CLUB - GANHE MAIS PONTOS ───────────── */
const ClubRewardsSection = () => {
  const rewards = [
    { emoji: "⭐", action: "Avaliação simples", points: "100 pts", value: "R$ 2,00" },
    { emoji: "💬", action: "Comentário escrito", points: "+200 pts", value: "R$ 4,00" },
    { emoji: "📸", action: "Foto do produto", points: "+200 pts", value: "R$ 4,00" },
    { emoji: "🎥", action: "Vídeo do produto", points: "+400 pts", value: "R$ 8,00" },
  ];

  return (
    <section className="py-24 bg-gradient-water-light relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Acqualive Club
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Além da indicação:{" "}
            <span className="text-gradient-orange">ganhe mais pontos</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Avalie seus produtos Acqualive e acumule pontos extras. Quanto mais detalhada a review, mais você ganha.
          </motion.p>
        </motion.div>

        {/* Points ladder */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {rewards.map((reward, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="group">
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft h-full hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-4xl mb-4 block">{reward.emoji}</span>
                <h3 className="font-display font-bold text-foreground mb-2">{reward.action}</h3>
                <p className="text-2xl font-display font-bold text-primary mb-1">{reward.points}</p>
                <p className="text-sm text-accent font-semibold">{reward.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Combo highlight */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="relative bg-gradient-to-r from-accent to-gold rounded-2xl p-8 text-center text-primary-foreground overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
            <div className="relative">
              <Sparkles className="w-8 h-8 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-display font-bold mb-3">O Combo Completo</h3>
              <p className="text-lg mb-2 opacity-90">
                Avalie com <strong>Texto + Foto + Vídeo</strong> e ganhe
              </p>
              <p className="text-5xl font-display font-bold mb-2">900 pontos</p>
              <p className="text-lg opacity-80">R$ 18,00 de desconto por produto avaliado</p>
              <p className="text-sm mt-3 opacity-70 font-medium">
                Somados à sua indicação, seus refis saem de graça para sempre. <strong>Uma indicação por semestre e você nunca mais paga por água alcalina de qualidade!</strong>
              </p>
              <Button variant="hero" size="lg" asChild className="mt-6 group text-accent">
                <a href={CLUB_LINK} target="_blank" rel="noopener noreferrer">
                  Avaliar minhas compras e ganhar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Regra de ouro destaque */}
        <motion.div
          className="max-w-2xl mx-auto mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-card rounded-xl p-6 border border-accent/20 shadow-soft flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-foreground mb-1">Regra de Ouro</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Com apenas <strong className="text-accent">1 indicação a cada 6 meses</strong>, você garante seu kit de refis e nunca mais paga para beber água alcalina de qualidade. Simples assim.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────── FAQ UNIFICADO ───────────── */
const UnifiedFAQSection = () => {
  const faqs = [
    // Indicação
    {
      question: "Como funciona a indicação?",
      answer: "Compartilhe o nome e WhatsApp de amigos ou familiares. Nossa equipe entra em contato com uma condição especial. Quando seu amigo comprar, você ganha automaticamente 1 Kit de Refis GRÁTIS. Com apenas uma indicação por semestre, você nunca mais paga para ter água alcalina de qualidade!",
    },
    {
      question: "Existe limite de indicações?",
      answer: "Zero limites! Se você indicar 10 pessoas e elas comprarem, você garante 10 kits de refis. Uma economia superior a R$ 5.000,00. Uma indicação por semestre já garante que você nunca mais paga por água alcalina.",
    },
    {
      question: "Como sei que meu amigo comprou?",
      answer: "Transparência total. Você recebe um alerta automático no WhatsApp assim que a nota fiscal for emitida. O crédito é seu na hora.",
    },
    {
      question: "O que meu indicado ganha de verdade?",
      answer: 'Acesso ao nosso "Clube de Vendas Privado", com condições de parcelamento e brindes que o público geral não tem acesso.',
    },
    {
      question: "Preciso pagar algo para participar?",
      answer: "Absolutamente nada. O programa é 100% gratuito. Você só precisa ser cliente Acqualive e ter vontade de ajudar pessoas a ter uma vida mais saudável.",
    },
    {
      question: "Quanto tempo leva para receber meu kit de refis?",
      answer: "Assim que a compra do seu indicado for confirmada, você recebe o crédito automaticamente. O kit é enviado junto com seu próximo pedido de reposição ou pode ser solicitado a qualquer momento.",
    },
    {
      question: "Posso indicar pessoas de outras cidades?",
      answer: "Sim! Entregamos em todo o Brasil. Suas indicações podem estar em qualquer lugar do país.",
    },
    // Acqualive Club / Pontos
    {
      question: "Como resgatar meus pontos no Acqualive Club?",
      answer: "Acesse o Acqualive Club, vá até 'Meus Pontos' e clique em 'Resgatar'. Seus pontos serão convertidos em um cupom de desconto para usar na próxima compra.",
    },
    {
      question: "Quanto tempo para os pontos aparecerem?",
      answer: "Pontos por avaliações aparecem em até 24 horas. Pontos de indicação são creditados após a confirmação do pagamento, de 3 a 7 dias úteis.",
    },
    {
      question: "Meus pontos expiram?",
      answer: "Sim. Todos os pontos e cupons têm validade de 365 dias a partir da data em que foram creditados.",
    },
    {
      question: "Se eu devolver um produto, perco os pontos?",
      answer: "Sim. Em caso de devolução ou cancelamento, os pontos referentes àquela compra serão estornados automaticamente. Pontos já resgatados poderão ser descontados de créditos futuros.",
    },
    {
      question: "E se o amigo que eu indiquei devolver o produto?",
      answer: "Os pontos da indicação serão estornados do seu saldo. Os pontos só são definitivos após o prazo de troca/devolução do pedido.",
    },
    {
      question: "Como faço uma avaliação para ganhar pontos?",
      answer: "Acesse o Acqualive Club, vá em 'Avaliar Produtos' e selecione o item. Você pode deixar nota, comentário, foto e/ou vídeo. Quanto mais completa, mais pontos — até 900 pontos por produto!",
    },
    {
      question: "Os prêmios da campanha de verão são cumulativos?",
      answer: "Sim! Além de ganhar 1 kit por indicação, você concorre ao sorteio de 1 ano de água grátis. E ao atingir 5 indicações, desbloqueia o status Embaixador Vitalício com 10% de desconto por 3 anos.",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_hsl(21_89%_55%_/_0.05),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(215_62%_31%_/_0.05),_transparent_60%)]" />
      </div>

      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
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
            Tudo sobre indicações, pontos e o Acqualive Club
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border border-border/60 shadow-soft overflow-hidden hover:shadow-medium transition-shadow duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-accent" />
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
              href={WHATSAPP_LINK}
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

/* ───────────── PAGE ───────────── */
const IndicaClub = () => {
  return (
    <>
      <DownloadPDFButton fileName="Programa-Embaixador-Acqualive.pdf" />
      <Helmet>
        <title>Indique e Ganhe Refis Grátis — Acqualive Club</title>
        <meta
          name="description"
          content="Indique amigos, ganhe um kit de refis GRÁTIS a cada indicação. Uma indicação por semestre e você nunca mais paga por água alcalina de qualidade. Acqualive Club."
        />
        <meta
          name="keywords"
          content="Acqualive, água alcalina, programa indicação, refis grátis, Acqualive Club, cashback"
        />
        <link rel="canonical" href="https://upgrade-acqualive.lovable.app/indica-club" />
      </Helmet>

      <main>
        <HeroSection />
        <HowItWorksSection />
        <HealthSection />
        <ClubRewardsSection />
        <SummerCampaignSection />
        <UnifiedFAQSection />
        <FormSection />
        <FooterSection />
      </main>

      <FloatingWhatsAppIndicacao />
    </>
  );
};

export default IndicaClub;
