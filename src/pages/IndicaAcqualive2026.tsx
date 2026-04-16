import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Shield, Droplets, Sparkles, Star, ChevronRight, CheckCircle2, ArrowRight, Zap, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logoAzul from "@/assets/logo-acqualive-azul.png";
import heroFamily from "@/assets/indica-hero-family.jpg";
import produtosLineup from "@/assets/indica-produtos-lineup.jpg";
import aguaPura from "@/assets/indica-agua-pura.jpg";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá!%20Fui%20indicado%20por%20um%20amigo%20e%20quero%20conhecer%20a%20condição%20especial%20Acqualive.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

/* ─── HEADER ─── */
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/40">
    <div className="container flex items-center justify-between h-16 md:h-20">
      <a href="/">
        <img src={logoAzul} alt="Acqualive" className="h-7 md:h-9 w-auto" />
      </a>
      <Button variant="cta" size="sm" asChild className="rounded-full">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Falar com Consultor</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </Button>
    </div>
  </header>
);

/* ─── HERO ─── */
const HeroSection = () => (
  <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden bg-gradient-to-br from-[hsl(215,62%,31%)] via-[hsl(218,97%,19%)] to-[hsl(220,80%,12%)]">
    {/* Decorative shapes inspired by Insuba */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(21,89%,55%)]/10 translate-y-1/2 -translate-x-1/4" />
    
    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text side */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-white"
        >
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(21,89%,55%)] animate-pulse" />
            Voce foi indicado por alguem especial
          </motion.div>

          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Se o seu amigo te indicou, ele se importa com a{" "}
            <span className="text-[hsl(21,89%,55%)]">sua saude.</span>
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            Junte-se a mais de 100 mil familias que decidiram beber agua de verdade. Conheca a tecnologia que remove 99,9% das impurezas, cloro e bacterias, entregando a agua alcalina mais desejada do Brasil.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="xl" asChild className="rounded-full group">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                QUERO MEU DESCONTO EXCLUSIVO
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="flex items-center gap-6 mt-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[hsl(21,89%,55%)]" />
              Garantia de fabrica
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[hsl(21,89%,55%)]" />
              +100 mil familias
            </div>
          </motion.div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={heroFamily} alt="Familia bebendo agua pura Acqualive" width={1920} height={1080} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218,97%,19%)]/40 to-transparent" />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-elevated flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-[hsl(21,89%,55%)]/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-[hsl(21,89%,55%)]" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">100.000+</p>
              <p className="text-xs text-muted-foreground">Familias atendidas</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* Stats bar - Insuba style */}
    <div className="container relative z-10 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: "100K+", label: "Familias atendidas" },
            { value: "99,9%", label: "Bacterias eliminadas" },
            { value: "10x", label: "Sem juros no cartao" },
            { value: "4.9★", label: "Avaliacao dos clientes" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold text-[hsl(21,89%,55%)]">{stat.value}</p>
              <p className="text-sm text-white/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── WHY ACQUALIVE ─── */
const WhySection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Zero Contaminantes",
      description: "Adeus ao cloro, bacterias e metais pesados. A tecnologia de purificacao Acqualive elimina 99,9% das impurezas presentes na agua da torneira.",
      color: "hsl(215,62%,31%)"
    },
    {
      icon: Droplets,
      title: "Poder Alcalinizante",
      description: "pH ideal para o equilibrio do corpo. A agua alcalina ionizada promove um ambiente interno mais equilibrado e saudavel.",
      color: "hsl(200,70%,50%)"
    },
    {
      icon: Sparkles,
      title: "Riqueza em Minerais",
      description: "Agua enriquecida com Magnesio, o mineral da vida. Essencial para mais de 300 reacoes enzimaticas no corpo humano.",
      color: "hsl(21,89%,55%)"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img src={aguaPura} alt="Agua pura Acqualive" loading="lazy" width={800} height={800} className="w-full h-auto" />
            </div>
            {/* Accent shape */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-3xl bg-primary/10" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(21,89%,55%)] uppercase tracking-wider mb-4">
              <Zap className="w-4 h-4" />
              Por que Acqualive?
            </motion.div>

            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              A agua da torneira nao foi feita para a{" "}
              <span className="text-primary">sua saude.</span>
            </motion.h2>

            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mb-10 leading-relaxed">
              A agua que chega na sua casa carrega cloro, metais pesados e residuos que o seu corpo nao deveria processar. A Acqualive transforma essa agua em algo completamente diferente.
            </motion.p>

            <div className="space-y-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 3}
                  className="flex gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${b.color}15` }}>
                    <b.icon className="w-6 h-6" style={{ color: b.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── SOCIAL PROOF ─── */
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carla M.",
      location: "Sao Paulo, SP",
      text: "Desde que comecamos a usar a Acqualive em casa, toda a familia sentiu a diferenca. A agua tem um sabor limpo, leve. Nao volto mais para o filtro comum.",
      rating: 5
    },
    {
      name: "Roberto S.",
      location: "Curitiba, PR",
      text: "Minha esposa pesquisou muito antes de decidir. Quando chegou, a qualidade do produto nos surpreendeu. Vale cada centavo investido na saude da familia.",
      rating: 5
    },
    {
      name: "Patricia L.",
      location: "Belo Horizonte, MG",
      text: "Fui indicada por uma amiga e nao me arrependi. A agua e realmente diferente. Ate as criancas perceberam e passaram a beber mais agua durante o dia.",
      rating: 5
    },
    {
      name: "Fernando D.",
      location: "Porto Alegre, RS",
      text: "Eu era cetico, achava que agua era tudo igual. Depois de experimentar a Acqualive, entendi a diferenca. O investimento se paga na saude da familia.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[hsl(210,20%,97%)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(21,89%,55%)] uppercase tracking-wider mb-4">
            <Heart className="w-4 h-4" />
            Prova Social
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quem ja fez a troca,{" "}
            <span className="text-primary">nao se arrepende.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Historias reais de familias que transformaram a qualidade da agua em casa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/30"
            >
              <div className="flex gap-1 mb-4">
                {Array(t.rating).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[hsl(21,89%,55%)] text-[hsl(21,89%,55%)]" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-[15px]">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── PRICING / VITRINE ─── */
const PricingSection = () => {
  const products = [
    {
      name: "V Self 10L",
      description: "O mais vendido. Ideal para familias.",
      price: "1.997",
      installment: "199,70",
      highlight: false,
    },
    {
      name: "V Self 10L Premium",
      description: "Design premium com acabamento sofisticado.",
      price: "2.497",
      installment: "249,70",
      highlight: true,
    },
    {
      name: "Terracota",
      description: "Tecnologia e design artesanal unidos.",
      price: "2.997",
      installment: "299,70",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/4" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(21,89%,55%)] uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Investimento
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha o seu{" "}
            <span className="text-primary">Acqualive.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Saude para toda a familia por menos do que o custo de um cafe por dia.
          </p>
        </motion.div>

        {/* Product lineup image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-14"
        >
          <img src={produtosLineup} alt="Linha de purificadores Acqualive" loading="lazy" width={1200} height={800} className="w-full h-auto rounded-2xl" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                p.highlight
                  ? "bg-gradient-to-br from-[hsl(215,62%,31%)] to-[hsl(218,97%,19%)] text-white border-transparent shadow-elevated"
                  : "bg-card border-border/50 hover:shadow-soft"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[hsl(21,89%,55%)] text-white text-xs font-bold uppercase tracking-wide">
                  Mais vendido
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${p.highlight ? "text-white" : "text-foreground"}`}>{p.name}</h3>
              <p className={`text-sm mb-6 ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>{p.description}</p>
              
              <div className="mb-2">
                <span className={`text-sm ${p.highlight ? "text-white/50" : "text-muted-foreground"}`}>a partir de</span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>R$</span>
                <span className={`text-4xl font-bold ${p.highlight ? "text-white" : "text-foreground"}`}>{p.price}</span>
              </div>
              <p className={`text-sm mb-8 ${p.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                ou 10x de R$ {p.installment} sem juros
              </p>

              <ul className="space-y-3 mb-8">
                {["Purificacao completa", "Agua alcalina ionizada", "Minerais essenciais", "Frete gratis*"].map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${p.highlight ? "text-[hsl(21,89%,55%)]" : "text-primary"}`} />
                    <span className={p.highlight ? "text-white/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={p.highlight ? "hero" : "cta"}
                size="lg"
                asChild
                className="w-full rounded-xl group"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-4 h-4" />
                  Quero este
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          *Consulte regioes disponiveis para frete gratis.
        </p>
      </div>
    </section>
  );
};

/* ─── FINAL CTA ─── */
const FinalCTA = () => (
  <section className="relative py-20 md:py-28 bg-gradient-to-br from-[hsl(215,62%,31%)] via-[hsl(218,97%,19%)] to-[hsl(220,80%,12%)] overflow-hidden">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[hsl(21,89%,55%)]/10 -translate-x-1/3 -translate-y-1/3" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />

    <div className="container relative z-10 text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4 text-[hsl(21,89%,55%)]" />
          Condicao exclusiva para indicados
        </motion.div>

        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Resgate seu desconto exclusivo de{" "}
          <span className="text-[hsl(21,89%,55%)]">indicado.</span>
        </motion.h2>

        <motion.p variants={fadeUp} custom={2} className="text-lg text-white/80 mb-10 leading-relaxed">
          Clique no botao abaixo para falar com um consultor oficial. Informe o nome do amigo que te indicou para garantir sua condicao especial.
        </motion.p>

        <motion.div variants={fadeUp} custom={3}>
          <Button variant="cta" size="xl" asChild className="rounded-full group shadow-2xl shadow-[hsl(21,89%,55%)]/40 ring-2 ring-[hsl(21,89%,55%)]/20">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              QUERO MEU DESCONTO VIA WHATSAPP
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        <motion.p variants={fadeUp} custom={4} className="text-sm text-white/50 mt-6">
          Atendimento de segunda a sexta, das 9h as 18h.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="bg-[hsl(218,97%,12%)] text-white/60 py-8">
    <div className="container text-center text-sm">
      <img src={logoAzul} alt="Acqualive" className="h-6 mx-auto mb-4 brightness-0 invert opacity-50" />
      <p>© {new Date().getFullYear()} Acqualive do Brasil. Todos os direitos reservados.</p>
      <p className="mt-1">CNPJ: 17.918.498/0001-53</p>
    </div>
  </footer>
);

/* ─── PAGE ─── */
const IndicaAcqualive2026 = () => (
  <>
    <Helmet>
      <title>Indicacao Exclusiva Acqualive | Agua Alcalina para sua Familia</title>
      <meta name="description" content="Voce foi indicado por alguem que se importa com a sua saude. Conheca a Acqualive e garanta sua condicao especial de indicado. Mais de 100 mil familias ja transformaram sua agua." />
      <meta name="keywords" content="Acqualive, agua alcalina, indicacao, purificador de agua, saude, familia" />
      <link rel="canonical" href="https://paginas.acqualive.com.br/indica-acqualive-2026" />
    </Helmet>

    <Header />
    <main>
      <HeroSection />
      <WhySection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTA />
    </main>
    <Footer />

    {/* Floating WhatsApp */}
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  </>
);

export default IndicaAcqualive2026;
