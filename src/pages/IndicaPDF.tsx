import { Helmet } from "react-helmet-async";
import { Smartphone, Handshake, Droplets, Quote, Heart, Users, Shield, Bone, Brain, Activity, Sparkles, ArrowRight, CheckCircle, Zap, Moon, Trophy, Diamond, Flame, Gift, CheckCircle2, HelpCircle, Send, MessageCircle, User, Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import familyImage from "@/assets/terracota-familia.jpg";
import familyAcqualive from "@/assets/family-acqualive.jpeg";
import iconAcqualive from "@/assets/icon-acqualive.png";
import logoBranca from "@/assets/logo-acqualive-branca.png";

/* ============================================================
   STATIC version of /programa-de-indicacao — zero animations,
   all framer-motion replaced by plain divs/sections.
   Purpose: save / print as PDF.
   ============================================================ */

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá!%20Quero%20participar%20do%20Programa%20Embaixador%20Acqualive.";

/* ---------- data ---------- */
const steps = [
  { icon: Smartphone, title: "Você Indica", description: "Compartilhe o nome e WhatsApp de amigos ou familiares que merecem beber a melhor água do mundo.", color: "primary" },
  { icon: Handshake, title: "Nós Cuidamos de Tudo", description: "Nossa equipe entra em contato com uma condição especial, exclusiva para indicados.", color: "accent" },
  { icon: Droplets, title: "Vocês Dois Ganham", description: "Seu amigo ganha saúde com água alcalina. Você ganha 1 Kit de Refis grátis assim que a compra for confirmada.", color: "orange" },
];
const healthBenefits = [
  { icon: Activity, text: "Controle glicêmico" },
  { icon: Shield, text: "Imunidade fortalecida" },
  { icon: Bone, text: "Saúde óssea" },
  { icon: Brain, text: "Clareza mental" },
];
const benefitsList = [
  { icon: Zap, text: "Mais energia e disposição mental" },
  { icon: Moon, text: "Sono reparador e profundo" },
  { icon: Shield, text: "Imunidade blindada" },
  { icon: Heart, text: "Hidratação celular avançada" },
];
const faqs = [
  { question: "Como sei que meu amigo comprou?", answer: "Transparência total. Você recebe um alerta automático no WhatsApp assim que a nota fiscal for emitida. O crédito é seu na hora." },
  { question: "Existe limite de ganhos?", answer: "Zero. Se você indicar 10 pessoas e elas comprarem, você garante 10 kits de refis. Uma economia superior a R$ 5.000,00." },
  { question: "O que meu indicado ganha de verdade?", answer: 'Acesso ao nosso "Clube de Vendas Privado", com condições de parcelamento e brindes que o público geral não tem acesso.' },
  { question: "Preciso pagar algo para participar do programa?", answer: "Absolutamente nada. O Programa Embaixador é 100% gratuito. Você só precisa ser cliente Acqualive e ter vontade de ajudar pessoas a ter uma vida mais saudável." },
  { question: "Quanto tempo leva para receber meu kit de refis?", answer: "Assim que a compra do seu indicado for confirmada, você recebe o crédito automaticamente. O kit é enviado junto com seu próximo pedido de reposição ou pode ser solicitado a qualquer momento." },
  { question: "Posso indicar pessoas de outras cidades ou estados?", answer: "Sim! Entregamos em todo o Brasil. Suas indicações podem estar em qualquer lugar do país. O frete é por conta do indicado, nas mesmas condições especiais." },
  { question: "Os prêmios da campanha de verão são cumulativos?", answer: "Sim! Além de ganhar 1 kit por indicação, você concorre ao sorteio de 1 ano de água grátis. E ao atingir 5 indicações, desbloqueia o status Embaixador Vitalício com 10% de desconto por 3 anos." },
];

/* ============================================================
   PAGE
   ============================================================ */
const IndicaPDF = () => {
  return (
    <>
      <Helmet>
        <title>Programa Embaixador Acqualive | Ganhe Refis Grátis</title>
      </Helmet>

      <main>
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_hsl(21_89%_55%_/_0.3),_transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_hsl(218_97%_30%_/_0.5),_transparent_50%)]" />
          </div>

          <header className="absolute top-0 left-0 right-0 z-50 py-6">
            <div className="container">
              <div className="flex items-center justify-between">
                <img src={iconAcqualive} alt="Acqualive" className="h-12 md:h-16 w-auto" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Indicar agora
                </a>
              </div>
            </div>
          </header>

          <div className="container relative z-10 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-accent/20 text-gold-light text-sm font-semibold border border-accent/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  Programa Indique e Ganhe
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground leading-[1.1] mb-8">
                  Indique seus amigos,{" "}
                  <span className="text-gradient-orange inline-block">ganhe refis grátis</span>
                  <br />
                  <span className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-normal opacity-90">
                    e leve saúde para quem você ama.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-primary-foreground/90 mb-3 leading-relaxed">
                  Para cada amigo que comprar um Acqualive através da sua indicação, você ganha <strong className="text-gold-light font-bold">1 Kit de Refis completo</strong>.
                </p>

                <p className="text-base md:text-lg text-primary-foreground/80 mb-10 font-medium">
                  <span className="text-gold-light font-bold">Indicou, comprou, ganhou.</span> Simples assim. Sem sorteios, sem limites.
                </p>

                <Button variant="gold" size="xl" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    QUERO INDICAR E GANHAR
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>

                <p className="mt-6 text-sm text-primary-foreground/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Mais de 500 clientes já garantiram refis grátis com suas indicações.
                </p>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                  <img src={familyImage} alt="Família feliz ao redor do filtro Acqualive Terracota" className="w-full h-auto object-cover object-top" style={{ marginBottom: "-60px", clipPath: "inset(0 0 60px 0)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="py-28 bg-gradient-to-b from-background via-background to-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_hsl(21_89%_55%_/_0.05),_transparent_60%)]" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(215_62%_31%_/_0.05),_transparent_60%)]" />
          </div>

          <div className="container relative">
            {/* Storytelling */}
            <div className="max-w-4xl mx-auto text-center mb-24">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
                <Heart className="w-4 h-4" />
                Por que criamos este programa
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                A Acqualive cresceu graças a <span className="text-gradient-orange">você</span>.
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>A maior parte dos nossos clientes chegou até nós por uma indicação. Alguém que experimentou a diferença na própria saúde e <strong className="text-foreground">não conseguiu ficar calado</strong>.</p>
                <p>Isso nos mostrou algo importante: quando o produto é realmente bom, as pessoas naturalmente querem compartilhar com quem amam. <strong className="text-foreground">A melhor validação vem de quem já vive a transformação.</strong></p>
                <p>Por isso criamos uma forma de <span className="text-accent font-semibold">retribuir essa confiança</span>. Quando você indica alguém, não está vendendo nada, está presenteando com a possibilidade de uma vida mais saudável.</p>
              </div>

              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
                <p className="text-foreground font-semibold mb-6 text-lg">Quem você indica pode conquistar:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {healthBenefits.map((b, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-background/80 border border-border/30">
                      <b.icon className="w-6 h-6 text-accent" />
                      <span className="text-sm font-medium text-foreground">{b.text}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-muted-foreground">Diabetes, obesidade, desgaste ósseo, perda de massa magra... <strong className="text-foreground"> A água certa faz diferença real.</strong></p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-20">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-border" />
              <Users className="w-6 h-6 text-accent" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-border" />
            </div>

            {/* Steps */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Como <span className="text-gradient-blue">funciona</span>?
              </h2>
              <p className="text-xl md:text-2xl font-display font-semibold">
                <span className="text-gradient-orange">1 Amigo Saudável</span>
                <span className="text-muted-foreground"> = </span>
                <span className="text-foreground">6 meses de Economia para você</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-card rounded-3xl p-8 shadow-soft h-full border border-border/50 relative overflow-hidden">
                    <div className="absolute -top-3 -right-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-gold-light text-white flex items-center justify-center font-display font-bold text-xl shadow-orange rotate-6">
                      {index + 1}
                    </div>
                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${step.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-5 lg:-right-6 w-10 lg:w-12">
                      <div className="h-0.5 bg-gradient-to-r from-border via-accent/30 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-10 md:p-12 text-center shadow-elevated overflow-hidden border border-white/10">
                <Quote className="w-12 h-12 text-accent/60 mx-auto mb-4 relative" />
                <p className="text-lg md:text-xl text-primary-foreground leading-relaxed mb-6 relative font-medium">
                  Indiquei meus 3 irmãos e 2 vizinhos. Resultado: já garanti água pura para minha casa pelos próximos anos sem gastar um centavo!
                </p>
                <div className="flex items-center justify-center gap-3 relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <p className="text-primary-foreground/90 font-semibold">Maria S. — Cliente Acqualive</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="gold" size="xl" asChild className="shadow-orange">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Falar com meu Consultor Exclusivo</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== HEALTH ===== */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/5" />
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                Você não está indicando um filtro.<br />
                <span className="text-gradient-orange">Você está entregando Longevidade.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Você sente na pele, literalmente, o que a água alcalina com PRAL negativo e rica em Magnésio faz.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-medium aspect-[4/3]">
                  <img src={familyAcqualive} alt="Família feliz reunida tomando água pura" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 right-4 md:right-8 bg-card rounded-2xl p-4 shadow-medium border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground">PRAL Negativo</p>
                      <p className="text-sm text-muted-foreground">Rica em Magnésio</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 left-4 md:left-8 bg-accent text-white rounded-2xl px-4 py-2.5 shadow-orange">
                  <span className="font-display font-bold">+5.000</span>
                  <span className="text-sm ml-1 opacity-90">famílias saudáveis</span>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {benefitsList.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 bg-card p-3.5 rounded-xl border border-border/50">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-foreground font-medium text-sm">{benefit.text}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-card to-secondary/20 rounded-2xl p-5 border-l-4 border-l-accent border border-border/50 shadow-soft">
                  <p className="text-foreground leading-relaxed">
                    Ao indicar a Acqualive, você tira quem você ama da <strong className="text-destructive">"guerra ácida"</strong> dos refrigerantes e da água morta dos galões de plástico (que liberam BPA).
                    <span className="text-accent font-semibold block mt-2">Seu amigo te agradecerá por essa indicação pelo resto da vida.</span>
                  </p>
                </div>

                <div className="mt-8">
                  <Button variant="gold" size="lg" asChild className="shadow-orange w-full sm:w-auto">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Quero indicar um amigo agora</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SUMMER CAMPAIGN ===== */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_hsl(21_89%_55%_/_0.25),_transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_hsl(218_97%_20%_/_0.5),_transparent_50%)]" />
          </div>

          <div className="container relative">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8 border border-accent/30">
                <Flame className="w-5 h-5 text-gold-light" />
                <span className="text-gold-light font-bold text-sm uppercase tracking-wider">Exclusivo — Campanha de Verão</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
                O jogo ficou maior:<br /><span className="text-gold-light">Ganhe Status de Lenda.</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Além de garantir seus refis a cada venda, suas indicações feitas entre <strong className="text-gold-light">Dezembro e Junho</strong> desbloqueiam prêmios extras:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
              <div className="bg-white rounded-3xl p-8 shadow-medium relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-accent flex items-center justify-center mb-6">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-xl font-display font-bold text-foreground">Sorteio Premium</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Concorra a <strong className="text-foreground">1 ANO DE ÁGUA GRÁTIS</strong> — 2 kits de refis para seu filtro, além dos que você já ganha pela indicação.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-medium relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">💎</span>
                  <h3 className="text-xl font-display font-bold text-foreground">Promoções Exclusivas</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ao participar das indicações, você e seus indicados recebem <strong className="text-foreground">promoções e descontos exclusivos!</strong>
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-3 bg-gold/20 backdrop-blur-sm rounded-full px-6 py-3 border border-gold/30">
                <Gift className="w-5 h-5 text-gold-light" />
                <span className="text-primary-foreground font-medium">
                  Bônus: Cada indicação = <strong className="text-gold-light">+1 número</strong> para o sorteio
                </span>
              </div>
            </div>

            <div className="text-center">
              <Button variant="hero" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  ATIVAR MINHA CAMPANHA DE VERÃO
                  <Flame className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <HelpCircle className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Tire suas dúvidas</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Perguntas <span className="text-gradient-orange">Frequentes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Tudo que você precisa saber sobre o Programa Embaixador Acqualive
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* For PDF: render all FAQs expanded instead of accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card rounded-2xl border border-border/60 shadow-soft overflow-hidden p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      <span className="font-semibold text-foreground text-base">{faq.question}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-12">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-14">
              <p className="text-muted-foreground mb-6">Ainda tem dúvidas? Fale diretamente com nosso time.</p>
              <Button variant="whatsapp" size="lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar com meu Consultor Exclusivo
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== FORM (static display — no submit) ===== */}
        <section className="py-28 bg-gradient-dark relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]" />
          <div className="container relative">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Último passo</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
                Pronto para <span className="text-gradient-orange">zerar</span> seu custo com água?
              </h2>
              <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
                Preencha abaixo e deixe nossa equipe fazer o trabalho pesado por você.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-neomorphic border border-border/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold to-accent" />
                <div className="space-y-5">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                      <User className="w-4 h-4 text-muted-foreground" /> Seu Nome Completo
                    </label>
                    <div className="h-12 rounded-xl bg-background/50 border border-border/50 px-4 flex items-center text-muted-foreground text-sm">Digite seu nome</div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                      <Phone className="w-4 h-4 text-muted-foreground" /> Seu WhatsApp
                    </label>
                    <div className="h-12 rounded-xl bg-background/50 border border-border/50 px-4 flex items-center text-muted-foreground text-sm">(00) 00000-0000</div>
                  </div>
                  <div className="pt-5 border-t border-border/50">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">Dados do amigo que você quer indicar:</span>
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                      <User className="w-4 h-4 text-muted-foreground" /> Nome do Amigo Indicado
                    </label>
                    <div className="h-12 rounded-xl bg-background/50 border border-border/50 px-4 flex items-center text-muted-foreground text-sm">Nome do seu amigo</div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                      <Phone className="w-4 h-4 text-muted-foreground" /> WhatsApp do Amigo
                    </label>
                    <div className="h-12 rounded-xl bg-background/50 border border-border/50 px-4 flex items-center text-muted-foreground text-sm">(00) 00000-0000</div>
                  </div>
                  <Button variant="gold" size="xl" className="w-full mt-6" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Send className="w-5 h-5" />
                      ENVIAR INDICAÇÃO E GARANTIR MEU PRÊMIO
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-primary-foreground/60 mb-5 text-sm">Prefere falar diretamente com um consultor?</p>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Falar com meu Consultor Exclusivo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="bg-gradient-to-b from-primary to-secondary relative overflow-hidden">
          <div className="bg-gradient-to-r from-accent via-[hsl(21_89%_50%)] to-accent py-4 relative">
            <div className="container relative">
              <div className="flex items-center justify-center gap-3 text-center">
                <AlertTriangle className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-white font-semibold text-sm md:text-base">
                  ⚠️ Atenção: O bônus do sorteio de 1 ano grátis encerra em <strong>Junho/2026</strong>. Não deixe seus amigos esperando.
                </p>
              </div>
            </div>
          </div>

          <div className="py-14 relative">
            <div className="container">
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <img src={logoBranca} alt="Acqualive" className="h-10 md:h-12 w-auto" />
                </div>
                <p className="text-primary-foreground/50 mb-8 text-sm">Programa Embaixador — Transformando saúde em recompensas</p>
                <div className="border-t border-primary-foreground/10 pt-8">
                  <p className="text-primary-foreground/40 text-xs mb-2">
                    * O desconto vitalício de 10% é válido por 3 anos a partir da data de ativação.
                  </p>
                  <p className="text-primary-foreground/40 text-xs">
                    © {new Date().getFullYear()} Acqualive. Todos os direitos reservados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default IndicaPDF;
