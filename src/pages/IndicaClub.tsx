import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Sparkles, ArrowRight, Gift, Share2, Trophy, CheckCircle,
  HelpCircle, Star, Send, User, Phone, Users, MessageCircle,
  Zap, Moon, Shield, Heart, Brain, Activity, Droplets, Smartphone, Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import FloatingWhatsAppIndicacao from "@/components/indicacao/FloatingWhatsAppIndicacao";
import DownloadPDFButton from "@/components/DownloadPDFButton";
import iconAcqualive from "@/assets/icon-acqualive.png";
import logoBranca from "@/assets/logo-acqualive-branca.png";
import familyImage from "@/assets/terracota-familia.jpg";
import familyAcqualive from "@/assets/family-acqualive.jpeg";
import bonifiqHero from "@/assets/bonifiq-hero.jpg";

const CLUB_LINK = "https://www.acqualive.com.br/pages/acqualive-club";
const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá,%20quero%20saber%20mais%20sobre%20o%20programa%20de%20indicação%20Acqualive!";

/* ───────────── HERO ───────────── */
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background with water image */}
    <div className="absolute inset-0">
      <img src={bonifiqHero} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-primary/85 to-secondary/95" />
    </div>

    {/* Geometric decorations */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full border border-accent/20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-48 h-48 rounded-full border border-primary-foreground/10"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </div>

    {/* Header */}
    <motion.header
      className="absolute top-0 left-0 right-0 z-50 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex items-center justify-between">
        <img src={iconAcqualive} alt="Acqualive" className="h-12 md:h-14 w-auto" />
        <a
          href="#formulario"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-sm font-semibold hover:bg-accent/30 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Indicar agora
        </a>
      </div>
    </motion.header>

    {/* Content */}
    <div className="container relative z-10 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-accent/15 text-accent text-sm font-bold border border-accent/25 backdrop-blur-sm">
            <Gift className="w-4 h-4" />
            Programa Indique e Ganhe
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.05] mb-8"
        >
          Indicou, comprou,{" "}
          <span className="text-accent">ganhou.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-5 leading-relaxed"
        >
          Para cada amigo que comprar um Acqualive pela sua indicação,
          você ganha <strong className="text-accent font-bold">1 Kit de Refis completo — GRÁTIS</strong>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base text-accent font-semibold mb-10 max-w-lg mx-auto"
        >
          Uma indicação por semestre e você nunca mais paga para ter água alcalina de qualidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="gold" size="xl" className="group" asChild>
            <a href="#formulario">
              QUERO INDICAR E GANHAR
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "Kit de Refis", label: "GRÁTIS por indicação" },
            { value: "Sem limites", label: "de indicações" },
            { value: "6 meses", label: "de economia garantida" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-display font-bold text-accent">{stat.value}</p>
              <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-6 h-10 rounded-full border-2 border-primary-foreground/25 flex items-start justify-center p-1.5"
      >
        <div className="w-1.5 h-2.5 rounded-full bg-primary-foreground/40" />
      </motion.div>
    </motion.div>
  </section>
);

/* ───────────── COMO FUNCIONA — TIMELINE HORIZONTAL ───────────── */
const HowItWorksSection = () => {
  const steps = [
    {
      num: "01",
      icon: Smartphone,
      title: "Você indica",
      desc: "Compartilhe o nome e WhatsApp de quem merece beber a melhor água do mundo.",
    },
    {
      num: "02",
      icon: Handshake,
      title: "Nós cuidamos de tudo",
      desc: "Nossa equipe entra em contato com uma condição especial exclusiva para indicados.",
    },
    {
      num: "03",
      icon: Gift,
      title: "Vocês dois ganham",
      desc: "Seu amigo ganha saúde com água alcalina. Você ganha 1 Kit de Refis GRÁTIS assim que a compra for confirmada.",
    },
  ];

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Simples assim:{" "}
            <span className="text-gradient-orange">3 passos</span>
          </h2>
          <p className="text-xl font-display font-medium text-muted-foreground">
            <span className="text-accent font-semibold">1 amigo saudável</span> = 6 meses de economia para você
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                {/* Number circle */}
                <div className="relative mx-auto mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto shadow-lg relative z-10">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center z-20">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlight box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-10 text-center overflow-hidden border border-primary-foreground/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="relative">
              <Trophy className="w-10 h-10 text-accent mx-auto mb-4" />
              <p className="text-xl md:text-2xl text-primary-foreground font-display font-bold mb-3">
                Sem sorteios. Sem limites. Sem letras miúdas.
              </p>
              <p className="text-primary-foreground/80 text-lg mb-6 max-w-xl mx-auto">
                Indicou, o indicado comprou, você já ganha. Cada indicação = <strong className="text-accent">1 Kit de Refis GRÁTIS</strong>. 
                Uma por semestre e nunca mais pague por água alcalina.
              </p>
              <Button variant="gold" size="lg" asChild className="group">
                <a href="#formulario">
                  QUERO INDICAR AGORA
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────── SAÚDE — LAYOUT ASSIMÉTRICO ───────────── */
const HealthSection = () => {
  const benefits = [
    { icon: Zap, text: "Mais energia e disposição" },
    { icon: Moon, text: "Sono reparador e profundo" },
    { icon: Shield, text: "Imunidade blindada" },
    { icon: Heart, text: "Hidratação celular avançada" },
    { icon: Brain, text: "Clareza mental" },
    { icon: Activity, text: "Controle glicêmico" },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-secondary/20 via-background to-primary/5">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[3/4]">
              <img
                src={familyAcqualive}
                alt="Família feliz com água pura Acqualive"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-4 -right-4 bg-accent text-white rounded-2xl px-5 py-3 shadow-lg"
            >
              <span className="font-display font-bold text-lg">+5.000</span>
              <span className="text-sm ml-1.5 opacity-90">famílias saudáveis</span>
            </motion.div>
          </motion.div>

          {/* Content — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Você não indica um filtro.
              <br />
              <span className="text-gradient-orange">
                Você entrega longevidade.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Você sente na pele o que a água alcalina com PRAL negativo e rica em Magnésio faz.
              Ao indicar, você tira quem ama da{" "}
              <strong className="text-foreground">"guerra ácida"</strong> dos refrigerantes e da água morta dos galões de plástico.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border/40 hover:border-accent/30 hover:shadow-soft transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-4.5 h-4.5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{b.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-card rounded-2xl p-5 border-l-4 border-l-accent border border-border/40 shadow-soft">
              <p className="text-foreground leading-relaxed">
                <span className="text-accent font-semibold">Seu amigo te agradecerá pelo resto da vida.</span>{" "}
                E você ainda ganha refis grátis por isso. Uma indicação por semestre garante água alcalina de qualidade para sempre.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ───────────── GANHE MAIS COM O ACQUALIVE CLUB ───────────── */
const ClubRewardsSection = () => {
  const rewards = [
    { emoji: "⭐", action: "Avaliação simples", points: "100 pts", value: "R$ 2" },
    { emoji: "💬", action: "Comentário escrito", points: "+200 pts", value: "R$ 4" },
    { emoji: "📸", action: "Foto do produto", points: "+200 pts", value: "R$ 4" },
    { emoji: "🎥", action: "Vídeo do produto", points: "+400 pts", value: "R$ 8" },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text + combo */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Acqualive Club
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5 leading-tight">
                Ganhe ainda mais{" "}
                <span className="text-gradient-water">com suas avaliações</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Além dos refis grátis por indicação, avalie seus produtos e acumule pontos extras que viram desconto real.
              </p>

              {/* Combo box */}
              <div className="bg-gradient-to-r from-accent to-gold rounded-2xl p-6 text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent)]" />
                <div className="relative">
                  <p className="text-sm opacity-80 mb-1 font-medium">Combo Completo (Texto + Foto + Vídeo)</p>
                  <p className="text-4xl font-display font-bold">900 pontos</p>
                  <p className="text-sm opacity-80 mt-1">= R$ 18,00 por produto avaliado</p>
                </div>
              </div>
            </div>

            {/* Right: reward cards in 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {rewards.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-5 border border-border/40 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-400 text-center"
                >
                  <span className="text-3xl block mb-3">{r.emoji}</span>
                  <p className="font-display font-bold text-foreground text-sm mb-1">{r.action}</p>
                  <p className="text-xl font-display font-bold text-primary">{r.points}</p>
                  <p className="text-xs text-accent font-semibold">{r.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Golden rule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-card rounded-xl p-6 border border-accent/20 shadow-soft flex items-start gap-4 max-w-2xl mx-auto"
          >
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-foreground mb-1">Regra de Ouro</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Com apenas <strong className="text-accent">1 indicação a cada 6 meses</strong>, você garante seu kit de refis e nunca mais paga para beber água alcalina de qualidade.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────── FAQ ───────────── */
const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona a indicação?",
      answer: "Compartilhe o nome e WhatsApp de amigos ou familiares. Nossa equipe entra em contato com uma condição especial. Quando seu amigo comprar, você ganha automaticamente 1 Kit de Refis GRÁTIS. Com apenas uma indicação por semestre, você nunca mais paga por água alcalina de qualidade!",
    },
    {
      question: "Existe limite de indicações?",
      answer: "Zero limites. Se você indicar 10 pessoas e elas comprarem, você garante 10 kits de refis. Uma indicação por semestre já garante que você nunca mais paga por água alcalina.",
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
      answer: "Absolutamente nada. O programa é 100% gratuito. Você só precisa ser cliente Acqualive.",
    },
    {
      question: "Quanto tempo para receber meu kit de refis?",
      answer: "Assim que a compra do seu indicado for confirmada, você recebe o crédito automaticamente. O kit é enviado junto com seu próximo pedido ou pode ser solicitado a qualquer momento.",
    },
    {
      question: "Posso indicar pessoas de outras cidades?",
      answer: "Sim! Entregamos em todo o Brasil. Suas indicações podem estar em qualquer lugar do país.",
    },
    {
      question: "Como resgatar meus pontos no Acqualive Club?",
      answer: "Acesse o Acqualive Club, vá até 'Meus Pontos' e clique em 'Resgatar'. Seus pontos viram cupom de desconto para a próxima compra.",
    },
    {
      question: "Meus pontos expiram?",
      answer: "Sim. Todos os pontos e cupons têm validade de 365 dias a partir da data em que foram creditados.",
    },
    {
      question: "Se eu devolver um produto, perco os pontos?",
      answer: "Sim. Em caso de devolução, os pontos referentes àquela compra serão estornados automaticamente.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-secondary/10 via-background to-background relative overflow-hidden">
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Perguntas <span className="text-gradient-orange">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden hover:shadow-medium transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span className="font-semibold text-foreground text-base">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed pl-12">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-5 text-sm">Ainda tem dúvidas?</p>
          <Button variant="whatsapp" size="lg" asChild className="group">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar com meu Consultor
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────── FORMULÁRIO ───────────── */
const FormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    friendName: "",
    friendPhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("add-to-activecampaign", { body: formData });
      if (error) {
        toast({ title: "Erro ao enviar indicação", description: "Tente novamente ou fale conosco pelo WhatsApp.", variant: "destructive" });
        setIsSubmitting(false);
        return;
      }
      toast({ title: "Indicação enviada com sucesso! 🎉", description: "Nossa equipe entrará em contato em breve." });
      setFormData({ name: "", phone: "", friendName: "", friendPhone: "" });
    } catch {
      toast({ title: "Erro ao enviar indicação", description: "Tente novamente ou fale conosco pelo WhatsApp.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario" className="py-28 relative overflow-hidden">
      {/* Full gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left: motivational text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-10 h-10 text-accent mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Pronto para{" "}
              <span className="text-accent">zerar</span> seu custo com água?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Preencha os dados ao lado e deixe nossa equipe fazer o trabalho pesado. Você indica, seu amigo ganha condições exclusivas e você ganha refis grátis.
            </p>
            <p className="text-accent font-semibold text-base">
              Uma indicação por semestre e você nunca mais paga por água alcalina de qualidade!
            </p>

            {/* Testimonial mini */}
            <div className="mt-10 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <p className="text-primary-foreground/90 italic mb-3 leading-relaxed">
                "Indiquei meus 3 irmãos e 2 vizinhos. Resultado: já garanti água pura para minha casa pelos próximos anos sem gastar um centavo!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-primary-foreground/70 text-sm font-medium">Maria S. — Cliente Acqualive</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-neomorphic border border-border/30 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold to-accent" />

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    Seu Nome Completo
                  </label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Digite seu nome" required minLength={2} maxLength={100} className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20" />
                </div>

                <div>
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    Seu WhatsApp
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(00) 00000-0000" required pattern="[\d\s\(\)\-\+]{10,20}" title="Insira um número de telefone válido" className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20" />
                </div>

                <div className="pt-5 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Dados do amigo indicado:</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="friendName" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    Nome do Amigo
                  </label>
                  <Input id="friendName" name="friendName" type="text" value={formData.friendName} onChange={handleChange} placeholder="Nome do seu amigo" required minLength={2} maxLength={100} className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20" />
                </div>

                <div>
                  <label htmlFor="friendPhone" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    WhatsApp do Amigo
                  </label>
                  <Input id="friendPhone" name="friendPhone" type="tel" value={formData.friendPhone} onChange={handleChange} placeholder="(00) 00000-0000" required pattern="[\d\s\(\)\-\+]{10,20}" title="Insira um número de telefone válido" className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20" />
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full mt-6" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>⏳</motion.span>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      ENVIAR INDICAÇÃO E GANHAR
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ───────────── FOOTER ───────────── */
const FooterSection = () => (
  <footer className="bg-gradient-to-b from-secondary to-primary py-14 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_hsl(21_89%_55%_/_0.08),_transparent_60%)]" />
    </div>
    <div className="container relative text-center">
      <img src={logoBranca} alt="Acqualive" className="h-10 md:h-12 w-auto mx-auto mb-6" />
      <p className="text-primary-foreground/45 text-sm mb-8 max-w-md mx-auto">
        Programa Indique e Ganhe — Transformando saúde em recompensas reais.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors text-sm">Termos de Uso</a>
        <span className="text-primary-foreground/20">•</span>
        <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors text-sm">Política de Privacidade</a>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8">
        <motion.img src={iconAcqualive} alt="" className="w-8 h-8 mx-auto mb-4 opacity-25" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <p className="text-primary-foreground/35 text-xs">
          © {new Date().getFullYear()} Acqualive. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

/* ───────────── PAGE ───────────── */
const IndicaClub = () => (
  <>
    <DownloadPDFButton fileName="Programa-Embaixador-Acqualive.pdf" />
    <Helmet>
      <title>Indique e Ganhe Refis Grátis — Acqualive Club</title>
      <meta name="description" content="Indique amigos, ganhe um kit de refis GRÁTIS a cada indicação. Uma indicação por semestre e você nunca mais paga por água alcalina de qualidade." />
      <link rel="canonical" href="https://upgrade-acqualive.lovable.app/indica-club" />
    </Helmet>
    <main>
      <HeroSection />
      <HowItWorksSection />
      <HealthSection />
      <ClubRewardsSection />
      <FAQSection />
      <FormSection />
      <FooterSection />
    </main>
    <FloatingWhatsAppIndicacao />
  </>
);

export default IndicaClub;
