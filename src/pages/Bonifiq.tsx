import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Gift, Share2, Star, MessageSquare, Camera, Video, UserPlus, Cake, Instagram, ShoppingCart, ArrowRight, CheckCircle, Sparkles, Trophy, Heart, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import iconAcqualive from "@/assets/icon-acqualive.png";
import logoAcqualiveBranca from "@/assets/logo-branca.png";
import bonifiqHero from "@/assets/bonifiq-hero.jpg";

const CLUB_LINK = "https://www.acqualive.com.br/pages/acqualive-club?bqreferralopen=true&_gl=1*1ia8mva*_gcl_aw*R0NMLjE3NjYxNjc5NDguQ2owS0NRaUFqSlRLQmhDakFSSXNBSU1DNDQ1NUstZFN2b1NucFBkZjFFR1FFZTNSWGs1SEJLX29HOWxYMnQ4Nlg5dUF4Xy1aYWVLcWp0Y2FBakdnRUFMd193Y0I.*_gcl_au*ODM0OTg0MjU3LjE3NjcwMTkwMDkuNzQ0MTc0ODM3LjE3NzIxNTIxNDcuMTc3MjE1MjE0Ng";
const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá,%20quero%20saber%20mais%20sobre%20o%20Acqualive%20Club%20e%20o%20programa%20de%20indicação!";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ───────────── HERO ───────────── */
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={bonifiqHero} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-primary/90 to-secondary/80" />
    </div>

    {/* Floating decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-accent/30"
          style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>

    <div className="container relative z-10 py-20">
      <motion.div
        className="max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Acqualive Club
          </span>
        </motion.div>

        <h1 className="sr-only">Acqualive Club</h1>

        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
        >
          Ganhe seu próximo{" "}
          <span className="text-accent">Refil Grátis</span>{" "}
          indicando amigos.
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mb-4 leading-relaxed"
        >
          No Acqualive Club, cada indicação vale um{" "}
          <strong className="text-accent">Kit de Refis GRÁTIS</strong>{" "}
          e seu amigo ainda ganha{" "}
          <strong className="text-primary-foreground">R$&nbsp;100,00 de desconto</strong>{" "}
          na primeira compra.{" "}
          <strong className="text-accent">Uma indicação por semestre e você nunca mais paga para ter água alcalina de qualidade!</strong>
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-sm text-primary-foreground/60 mb-8"
        >
          Programa de fidelidade com cashback real, avaliações que valem descontos e muito mais.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
          <Button variant="cta" size="xl" className="group cursor-pointer" onClick={() => (window as any).bonifiq?.openReferral()}>
              <Gift className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Quero Indicar Agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="cta" size="xl" asChild className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-2xl shadow-primary-foreground/30 ring-4 ring-primary-foreground/20">
            <a href="#como-funciona">
              Como funciona
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Value highlight strip */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { icon: Gift, label: "Refis GRÁTIS", desc: "a cada indicação confirmada" },
            { icon: Star, label: "R$ 5", desc: "por avaliação completa" },
            { icon: Heart, label: "R$ 20", desc: "de presente de aniversário" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10"
            >
              <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-lg font-bold text-primary-foreground">{item.label}</p>
                <p className="text-xs text-primary-foreground/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── COMO FUNCIONA - INDICAÇÃO ───────────── */
const ReferralSection = () => {
  const steps = [
    {
      step: "01",
      icon: Share2,
      title: "Compartilhe seu link exclusivo",
      description: "Gere seu link personalizado pelo Acqualive Club e envie para amigos e familiares que merecem a melhor água.",
    },
    {
      step: "02",
      icon: Gift,
      title: "Seu amigo ganha R$ 100 de desconto",
      description: "Seu amigo recebe R$ 100,00 de desconto para comprar um Purificador ou Filtro Acqualive. Um presente de verdade.",
    },
    {
      step: "03",
      icon: Trophy,
      title: "Você ganha um Kit de Refis GRÁTIS!",
      description: "Quando a compra do seu amigo for confirmada, você ganha 21.400 pontos automaticamente — o equivalente a um kit de refis completo. Uma indicação por semestre e você nunca mais paga para ter água alcalina de qualidade!",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Programa de Indicação
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Indique, ganhe e{" "}
            <span className="text-gradient-water">repita</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Três passos simples para transformar sua recomendação em cashback de verdade.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-soft h-full hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value comparison box */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-1">
            <div className="bg-card rounded-xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">VOCÊ GANHA</p>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-primary">Kit de Refis</p>
                  <p className="text-lg font-bold text-accent mt-1">GRÁTIS!</p>
                  <p className="text-xs text-muted-foreground mt-1">21.400 pts por indicação</p>
                  <p className="text-xs text-primary font-semibold mt-2">1 indicação/semestre = água alcalina para sempre</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/10">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">SEU AMIGO GANHA</p>
                  <p className="text-4xl font-display font-bold text-accent">R$ 100</p>
                  <p className="text-sm text-muted-foreground mt-1">de desconto imediato</p>
                  <p className="text-xs text-primary font-semibold mt-2">Na primeira compra</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button variant="cta" size="lg" className="group cursor-pointer" onClick={() => (window as any).bonifiq?.openReferral()}>
                    <Gift className="w-5 h-5" />
                    Gerar meu link de indicação
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────── REVIEWS ───────────── */
const ReviewsSection = () => {
  const rewards = [
    { icon: Star, emoji: "⭐", action: "Avaliação simples", points: "100 pts", value: "R$ 2,00", color: "primary" },
    { icon: MessageSquare, emoji: "💬", action: "Comentário escrito", points: "+50 pts", value: "R$ 1,00", color: "primary" },
    { icon: Camera, emoji: "📸", action: "Foto do produto", points: "+50 pts", value: "R$ 1,00", color: "primary" },
    { icon: Video, emoji: "🎥", action: "Vídeo do produto", points: "+50 pts", value: "R$ 1,00", color: "accent" },
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
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Sua Opinião Vale Ouro
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Transforme seu feedback em{" "}
            <span className="text-gradient-orange">descontos</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Avalie seus produtos Acqualive e acumule pontos a cada review. Quanto mais detalhada, mais você ganha.
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
              <p className="text-5xl font-display font-bold mb-2">250 pontos</p>
              <p className="text-lg opacity-80">R$ 5,00 de desconto por produto avaliado</p>
              <Button variant="hero" size="lg" className="mt-6 group text-accent cursor-pointer" onClick={() => (window as any).bonifiq?.openReferral()}>
                  Ativar minhas compras e ganhar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────── OUTRAS FORMAS ───────────── */
const OtherWaysSection = () => {
  const ways = [
    {
      icon: UserPlus,
      emoji: "🎉",
      title: "Boas-vindas",
      desc: "Criou a conta? Ganhe pontos na hora.",
      points: "500 pts",
      value: "R$ 10,00",
    },
    {
      icon: Cake,
      emoji: "🎂",
      title: "Aniversário",
      desc: "Nosso presente para você no seu mês.",
      points: "1.000 pts",
      value: "R$ 20,00",
    },
    {
      icon: Instagram,
      emoji: "📱",
      title: "Siga no Instagram",
      desc: "Siga a @acqualive e ganhe pontos.",
      points: "100 pts",
      value: "R$ 2,00",
    },
    {
      icon: ShoppingCart,
      emoji: "🛒",
      title: "Compras",
      desc: "R$ 1,00 gasto = 1 ponto. Cashback de 2% em todas as compras.",
      points: "1 pt/R$",
      value: "2% cashback",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Mais Formas de Ganhar
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Seus pontos não param de{" "}
            <span className="text-gradient-water">crescer</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {ways.map((way, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="group">
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft h-full hover:shadow-elevated hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <way.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{way.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{way.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xl font-display font-bold text-primary">{way.points}</span>
                  <span className="text-sm font-semibold text-accent">{way.value}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────── TABELA DE CONVERSÃO ───────────── */
const ConversionSection = () => {
  const rows = [
    { action: "Indicar Amigo (Compra Filtro)", points: "21.400 pts", value: "Kit de Refis GRÁTIS", highlight: "1 indicação/semestre = nunca mais pagar!", featured: true },
    { action: "Review Completo (Texto + Foto + Vídeo)", points: "250 pts", value: "R$ 5,00", highlight: "" },
    { action: "Presente de Aniversário", points: "1.000 pts", value: "R$ 20,00", highlight: "" },
    { action: "Criação de Conta", points: "500 pts", value: "R$ 10,00", highlight: "" },
    { action: "Seguir no Instagram", points: "100 pts", value: "R$ 2,00", highlight: "" },
    { action: "Compras (por R$ 1,00 gasto)", points: "1 pt", value: "R$ 0,02", highlight: "2% cashback" },
  ];

  return (
    <section className="py-24 bg-gradient-water-light">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Transparência Total
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Tabela de conversão
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-xl mx-auto">
            Cada ponto vale R$ 0,02. Confira todas as formas de acumular.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-card rounded-2xl border border-border/50 shadow-elevated overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-primary text-primary-foreground text-sm font-semibold">
              <span>Ação</span>
              <span className="text-center">Pontos</span>
              <span className="text-right">Valor em R$</span>
            </div>
            {/* Rows */}
            {rows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-3 gap-4 px-6 py-4 border-b border-border/30 last:border-0 items-center ${row.featured ? "bg-accent/5" : ""}`}
              >
                <div>
                  <span className="text-sm font-medium text-foreground">{row.action}</span>
                  {row.highlight && (
                    <span className="block text-xs font-semibold text-accent mt-0.5">{row.highlight}</span>
                  )}
                </div>
                <span className="text-center text-sm font-bold text-primary">{row.points}</span>
                <span className="text-right text-sm font-bold text-foreground">{row.value}</span>
              </div>
            ))}
          </div>

          {/* Golden rule */}
          <div className="mt-8 bg-card rounded-xl p-6 border border-accent/20 shadow-soft flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-foreground mb-1">Regra de Ouro</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Todos os seus pontos e cupons têm validade de <strong className="text-foreground">365 dias</strong>. Use com calma, mas não deixe de usar!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────── FAQ ───────────── */
const FAQSection = () => {
  const faqs = [
    {
      question: "Como resgatar meus pontos?",
      answer: "Acesse o Acqualive Club, vá até a seção 'Meus Pontos' e clique em 'Resgatar'. Seus pontos serão convertidos em um cupom de desconto que pode ser usado na próxima compra no site da Acqualive.",
    },
    {
      question: "Quanto tempo leva para os pontos aparecerem?",
      answer: "Pontos por avaliações e ações (seguir no Instagram, criar conta) aparecem em até 24 horas. Pontos de indicação são creditados após a confirmação do pagamento da compra do seu amigo, o que pode levar de 3 a 7 dias úteis.",
    },
    {
      question: "Meus pontos expiram?",
      answer: "Sim. Todos os pontos e cupons gerados têm validade de 365 dias a partir da data em que foram creditados. Fique atento para usá-los antes do vencimento!",
    },
    {
      question: "Posso indicar mais de um amigo?",
      answer: "Sim! Não há limite de indicações. Cada amigo que comprar usando seu link gera 21.400 pontos — o equivalente a um kit de refis GRÁTIS. Com apenas uma indicação por semestre, você nunca mais paga para ter água alcalina de qualidade!",
    },
    {
      question: "Meu amigo precisa usar meu link para eu ganhar os pontos?",
      answer: "Sim. O amigo precisa clicar no seu link exclusivo de indicação e finalizar a compra por ele. Caso contrário, o sistema não consegue vincular a compra à sua indicação.",
    },
    {
      question: "Posso combinar o cupom de pontos com outras promoções?",
      answer: "Os cupons gerados pelo Acqualive Club podem ser usados em conjunto com promoções vigentes no site, salvo exceções indicadas nos termos de cada campanha.",
    },
    {
      question: "Como faço uma avaliação para ganhar pontos?",
      answer: "Acesse o Acqualive Club, vá em 'Avaliar Produtos' e selecione o item que deseja avaliar. Você pode deixar uma nota, escrever um comentário, enviar foto e/ou vídeo. Quanto mais completa, mais pontos você ganha — até 250 pontos por produto!",
    },
    {
      question: "Quem pode participar do Acqualive Club?",
      answer: "Qualquer pessoa que tenha uma conta no site da Acqualive pode participar. Basta criar sua conta gratuita e você já ganha 500 pontos de boas-vindas (R$ 10,00).",
    },
    {
      question: "Se eu devolver um produto, perco os pontos da compra?",
      answer: "Sim. Em caso de devolução ou cancelamento, os pontos referentes àquela compra serão estornados automaticamente do seu saldo. Pontos já resgatados como cupom poderão ser descontados de créditos futuros.",
    },
    {
      question: "E se o amigo que eu indiquei devolver o produto?",
      answer: "Se a compra do seu amigo for cancelada ou devolvida, os 21.400 pontos da indicação serão estornados do seu saldo. Os pontos só são definitivos após o prazo de troca/devolução do pedido.",
    },
    {
      question: "Posso transferir meus pontos para outra pessoa?",
      answer: "Não. Os pontos são pessoais e intransferíveis, vinculados exclusivamente à sua conta no Acqualive Club.",
    },
    {
      question: "Minha avaliação precisa ser aprovada para eu ganhar os pontos?",
      answer: "Sim. Todas as avaliações passam por uma moderação rápida para garantir que sejam genuínas e relevantes. Avaliações com conteúdo ofensivo, spam ou que não tenham relação com o produto não serão aprovadas e não gerarão pontos.",
    },
    {
      question: "Posso avaliar o mesmo produto mais de uma vez?",
      answer: "Não. Cada produto só pode ser avaliado uma vez por conta. Porém, se você comprou produtos diferentes, pode avaliar cada um deles e acumular até 250 pontos por produto.",
    },
    {
      question: "Quais são os requisitos para foto e vídeo na avaliação?",
      answer: "A foto deve mostrar o produto de forma clara e nítida. O vídeo deve ter no mínimo 10 segundos mostrando o produto em uso ou um depoimento sobre sua experiência. Imagens genéricas ou vídeos muito curtos podem não ser aprovados na moderação.",
    },
    {
      question: "Existe um valor mínimo de pontos para resgatar?",
      answer: "Sim. O resgate mínimo é de 500 pontos (R$ 10,00). A partir desse saldo, você pode gerar seu cupom de desconto a qualquer momento pelo Acqualive Club.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Perguntas <span className="text-gradient-water">frequentes</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tudo que você precisa saber sobre o Acqualive Club.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-card rounded-xl border border-border/50 shadow-soft px-6 data-[state=open]:shadow-elevated transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-display font-semibold hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Ainda tem dúvidas? Fale com a gente!
            </p>
            <Button variant="ctaOutline" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────── CTA FINAL ───────────── */
const FinalCTASection = () => (
  <section className="py-24 bg-gradient-water relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_50%)]" />
    <div className="container relative text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-2xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6"
        >
          Pronto para ganhar seu{" "}
          <span className="text-accent">Refil Grátis</span>?
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/80 mb-10 max-w-lg mx-auto">
          Entre para o Acqualive Club agora. Com apenas <strong className="text-accent">uma indicação por semestre</strong>, você nunca mais paga para ter água alcalina de qualidade!
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="xl" className="group shadow-glow cursor-pointer" onClick={() => (window as any).bonifiq?.openReferral()}>
              <Gift className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Entrar para o Clube e ganhar 500 pontos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── FOOTER ───────────── */
const BonifiqFooter = () => (
  <footer className="py-12 bg-secondary">
    <div className="container">
      <div className="flex flex-col items-center gap-6 text-center">
        <img src={logoAcqualiveBranca} alt="Acqualive" className="h-8 w-auto opacity-70" />
        <p className="text-primary-foreground/50 text-sm max-w-md">
          Pontos, cupons e regras estão sujeitos aos termos do programa Acqualive Club.
        </p>
        <div className="flex gap-6 text-primary-foreground/40 text-xs">
          <a href="https://www.acqualive.com.br" target="_top" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors">
            acqualive.com.br
          </a>
          <a href="https://www.instagram.com/acqualivegroup/" target="_top" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors">
            @acqualive
          </a>
        </div>
      </div>
    </div>
  </footer>
);

/* ───────────── PAGE ───────────── */
const Bonifiq = () => {
  return (
    <>
      <Helmet>
        <title>Acqualive Club — Cashback e Recompensas</title>
        <meta
          name="description"
          content="Ganhe um kit de refis GRÁTIS indicando amigos. Uma indicação por semestre e você nunca mais paga por água alcalina. Acqualive Club: recompensas reais."
        />
        <script>{`
          // Auto-resize: notify parent iframe of content height
          (function() {
            function sendHeight() {
              var height = document.documentElement.scrollHeight;
              window.parent.postMessage({ type: 'resize', height: height }, '*');
            }
            if (window !== window.top) {
              sendHeight();
              window.addEventListener('load', sendHeight);
              window.addEventListener('resize', sendHeight);
              setInterval(sendHeight, 1000);
            }
          })();
          (function(window,document,script,filename) {
            window.bnq = window.bnq || function() {
              (window.bnq.q = window.bnq.q || []).push(arguments)
            };
            window._bnqConfig = {
              uuid: 'c81e2bd6-4e73-4fba-a470-23ee3191d448'
            };
            var a = document.getElementsByTagName('head')[0];
            var r = document.createElement('script');
            r.async = 1;
            r.src = script + window._bnqConfig.uuid + filename;
            a.appendChild(r);
          })(window,document,'https://bq-scripts.s3.amazonaws.com/scripts/','/bqloader.js');
        `}</script>
      </Helmet>
      <main className="bg-background text-foreground min-h-screen overflow-hidden">
        {/* Minimal header */}
        <header className="absolute top-0 left-0 right-0 z-50 py-5">
          <div className="container flex justify-center">
            <img src={iconAcqualive} alt="Acqualive" className="h-10 w-auto opacity-80" />
          </div>
        </header>

        <HeroSection />
        <ReferralSection />
        <ReviewsSection />
        <OtherWaysSection />
        <ConversionSection />
        <FAQSection />
        <FinalCTASection />
        <BonifiqFooter />
        <div id="bq-landing-page" />
      </main>
    </>
  );
};

export default Bonifiq;
