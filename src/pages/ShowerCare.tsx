import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Droplets, Leaf, Sparkles, Heart, ShieldCheck, Wind, Flower2, Sun } from "lucide-react";
import heroBg from "@/assets/shower-spa-bg.jpg";
import waterfall from "@/assets/shower-waterfall.jpg";
import skinHair from "@/assets/shower-skin-hair.jpg";
import showerHero from "@/assets/shower-hero.png";
import showerMode1 from "@/assets/shower-mode1.png";
import showerMode2 from "@/assets/shower-mode2.png";
import showerRefil from "@/assets/shower-refil.png";
import showerCromadoBox from "@/assets/shower-cromado-box.png";
import showerGoldBox from "@/assets/shower-gold-box.png";

const PRODUCT_URL = "https://www.acqualive.com.br/products/acqualive-shower-care";

const CTA = ({ children = "Quero meu Shower Care", className = "" }: { children?: React.ReactNode; className?: string }) => (
  <Button
    asChild
    size="lg"
    className={`bg-gradient-to-r from-accent to-[hsl(var(--gold-light))] hover:opacity-95 text-white font-semibold rounded-full px-8 py-6 shadow-2xl animate-pulse-soft ${className}`}
  >
    <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </Button>
);

const ShowerCare = () => {
  return (
    <>
      <Helmet>
        <title>Acqualive Shower Care | Banho sem cloro para pele e cabelo</title>
        <meta
          name="description"
          content="Filtro de chuveiro Acqualive Shower Care. Reduz cloro, metais e impurezas para um banho como o de uma cachoeira. Pele macia, cabelo brilhante e respiração leve."
        />
        <link rel="canonical" href="https://paginas.acqualive.com.br/shower-care" />
      </Helmet>

      <main className="min-h-screen bg-[#f7f4ef] text-foreground font-[Outfit]">
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBg} alt="Banho relaxante em ambiente spa" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d2c2a]/70 via-[#1d4380]/40 to-transparent" />
          </div>
          <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-24">
            <div className="text-white space-y-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm tracking-wide">
                <Leaf className="w-4 h-4" /> Bem-estar do banho ao corpo
              </span>
              <h1 className="font-[Fraunces] text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light">
                O banho que <em className="italic text-[hsl(var(--gold-light))]">acalma</em>,
                cuida e <em className="italic text-[hsl(var(--gold-light))]">renova</em>.
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                Acqualive Shower Care reduz o cloro e as impurezas da água do chuveiro.
                Sua pele agradece, seu cabelo respira, sua mente desacelera.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <CTA />
                <a href="#beneficios" className="text-white/90 underline-offset-4 hover:underline text-sm">
                  Conhecer os benefícios
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-white/80">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Tecnologia Acqualive</span>
                <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Refil de longa duração</span>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-10 bg-gradient-to-tr from-[hsl(var(--gold)/0.25)] to-transparent blur-3xl rounded-full" />
              <img
                src={showerHero}
                alt="Acqualive Shower Care cromado"
                className="relative w-full max-w-lg mx-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </section>

        {/* INTRO BAR */}
        <section className="bg-[#eae3d6] py-6">
          <div className="container flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-[hsl(var(--secondary))] text-sm md:text-base font-medium">
            <span className="flex items-center gap-2"><Droplets className="w-5 h-5 text-accent" /> Reduz cloro livre</span>
            <span className="flex items-center gap-2"><Wind className="w-5 h-5 text-accent" /> Respiração mais leve</span>
            <span className="flex items-center gap-2"><Flower2 className="w-5 h-5 text-accent" /> Pele e cabelo nutridos</span>
            <span className="flex items-center gap-2"><Sun className="w-5 h-5 text-accent" /> Sensação de bem-estar</span>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="py-24 lg:py-32">
          <div className="container max-w-4xl text-center space-y-8">
            <span className="text-accent uppercase tracking-[0.3em] text-xs">Nosso ritual</span>
            <h2 className="font-[Fraunces] text-4xl md:text-5xl lg:text-6xl text-[hsl(var(--secondary))] leading-tight font-light">
              Imagine um banho de <em className="italic">cachoeira</em>, todos os dias, dentro da sua casa.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              O cloro usado para tratar a água da rede é o mesmo que resseca a pele,
              quebra o fio do cabelo e irrita as vias respiratórias. O Acqualive Shower Care
              devolve à água a leveza que a natureza já tinha pensado para você.
            </p>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section id="beneficios" className="py-24 bg-[#0d2c2a] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <img src={waterfall} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="container relative">
            <div className="text-center mb-16 space-y-4">
              <span className="text-[hsl(var(--gold-light))] uppercase tracking-[0.3em] text-xs">Benefícios</span>
              <h2 className="font-[Fraunces] text-4xl md:text-5xl font-light">Saúde, estética e bem-estar em cada gota</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Flower2, t: "Pele mais macia", d: "Sem o ressecamento causado pelo cloro, a pele recupera o brilho natural." },
                { icon: Sparkles, t: "Cabelo brilhante", d: "Fios mais hidratados, com menos quebra, frizz e perda de cor." },
                { icon: Wind, t: "Respiração leve", d: "Reduz a inalação do vapor com cloro, alívio para alérgicos e sensíveis." },
                { icon: Heart, t: "Banho que relaxa", d: "Água suave, sensorial, que transforma a rotina em um ritual de spa." },
              ].map((b, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--gold)/0.2)] flex items-center justify-center mb-5">
                    <b.icon className="w-6 h-6 text-[hsl(var(--gold-light))]" />
                  </div>
                  <h3 className="font-[Fraunces] text-2xl mb-2 font-light">{b.t}</h3>
                  <p className="text-white/75 leading-relaxed text-sm">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPLIT IMAGE - PROBLEMA */}
        <section className="py-24 lg:py-28">
          <div className="container grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={skinHair} alt="Pele e cabelo saudáveis" className="rounded-[2rem] shadow-2xl w-full" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--gold))] text-white px-6 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="font-[Fraunces] text-2xl leading-tight">Banho como ritual.</p>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-accent uppercase tracking-[0.3em] text-xs">Por que filtrar</span>
              <h2 className="font-[Fraunces] text-4xl md:text-5xl text-[hsl(var(--secondary))] font-light leading-tight">
                O cloro do banho entra em contato com tudo que você é.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Estudos relacionam a exposição diária ao cloro do chuveiro a problemas
                respiratórios, dermatites, queda capilar e perda da hidratação natural da pele.
                Filtrar o banho é cuidar da camada mais íntima do seu bem-estar.
              </p>
              <ul className="space-y-3 text-[hsl(var(--secondary))]">
                {[
                  "Reduz cloro livre, ferrugem e sedimentos",
                  "Ajuda a manter a barreira natural da pele",
                  "Preserva a cor e a hidratação do cabelo",
                  "Diminui o vapor irritante para vias aéreas",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {l}
                  </li>
                ))}
              </ul>
              <CTA />
            </div>
          </div>
        </section>

        {/* PRODUTO - LINHA */}
        <section className="py-24 bg-[#eae3d6]">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <span className="text-accent uppercase tracking-[0.3em] text-xs">A linha Shower Care</span>
              <h2 className="font-[Fraunces] text-4xl md:text-5xl text-[hsl(var(--secondary))] font-light">
                Beleza, durabilidade e <em className="italic">tecnologia</em> Acqualive
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Acabamento cromado, instalação simples e refil substituível.
                O Shower Care combina design e cuidado para transformar seu chuveiro.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: showerMode1, t: "Modelo Cromado", d: "Acabamento espelhado que combina com qualquer banheiro." },
                { img: showerMode2, t: "Instalação simples", d: "Encaixa diretamente no braço do seu chuveiro existente." },
                { img: showerRefil, t: "Refil substituível", d: "Mídia filtrante de longa duração, troca rápida e prática." },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="aspect-square flex items-center justify-center bg-[#f7f4ef] rounded-2xl mb-6 p-6">
                    <img src={p.img} alt={p.t} className="max-h-full object-contain" loading="lazy" />
                  </div>
                  <h3 className="font-[Fraunces] text-2xl text-[hsl(var(--secondary))] mb-2">{p.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMBALAGEM / VERSÕES */}
        <section className="py-24">
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-accent uppercase tracking-[0.3em] text-xs">Edições</span>
              <h2 className="font-[Fraunces] text-4xl md:text-5xl text-[hsl(var(--secondary))] font-light leading-tight">
                Disponível em acabamento cromado e edição especial dourada.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mesma tecnologia, dois caminhos para combinar com o seu banheiro.
                Embalagem pensada para presentear quem você ama, ou para se presentear.
              </p>
              <div className="pt-2"><CTA /></div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img src={showerCromadoBox} alt="Shower Care cromado com embalagem" className="rounded-2xl shadow-xl w-full object-cover h-full" loading="lazy" />
              <img src={showerGoldBox} alt="Shower Care dourado com embalagem" className="rounded-2xl shadow-xl w-full object-cover h-full" loading="lazy" />
            </div>
          </div>
        </section>

        {/* RITUAL - 3 PASSOS */}
        <section className="py-24 bg-[#0d2c2a] text-white">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <span className="text-[hsl(var(--gold-light))] uppercase tracking-[0.3em] text-xs">Seu novo ritual</span>
              <h2 className="font-[Fraunces] text-4xl md:text-5xl font-light">Três passos para um banho que cura</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: "01", t: "Instale", d: "Rosqueie o Shower Care entre o braço e o chuveiro. Sem ferramentas, sem obras." },
                { n: "02", t: "Sinta", d: "Perceba a diferença já no primeiro banho: água mais suave, perfume mais natural." },
                { n: "03", t: "Renove", d: "Troque o refil periodicamente para manter a alta performance da filtragem." },
              ].map((s) => (
                <div key={s.n} className="border border-white/15 rounded-3xl p-8 hover:border-[hsl(var(--gold-light))] transition">
                  <div className="font-[Fraunces] text-5xl text-[hsl(var(--gold-light))] mb-4 italic font-light">{s.n}</div>
                  <h3 className="font-[Fraunces] text-2xl mb-2">{s.t}</h3>
                  <p className="text-white/75 leading-relaxed text-sm">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="py-24">
          <div className="container max-w-5xl">
            <div className="text-center mb-14 space-y-3">
              <span className="text-accent uppercase tracking-[0.3em] text-xs">Quem já vive esse banho</span>
              <h2 className="font-[Fraunces] text-4xl md:text-5xl text-[hsl(var(--secondary))] font-light">Histórias de bem-estar</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: "Mariana, 34", t: "Em duas semanas a coceira no couro cabeludo desapareceu. O cabelo voltou a ter brilho." },
                { n: "Rafael, 41", t: "Sou alérgico e o vapor do chuveiro me incomodava. Hoje meu banho é leve, quase um spa." },
                { n: "Camila, 29", t: "Minha pele parou de descamar no inverno. Não consigo mais imaginar o banho sem o Shower Care." },
              ].map((d) => (
                <div key={d.n} className="bg-white border border-[hsl(var(--border))] rounded-3xl p-7 shadow-sm">
                  <div className="text-accent mb-3 text-xl">"</div>
                  <p className="text-[hsl(var(--secondary))] font-[Fraunces] italic leading-relaxed mb-5">{d.t}</p>
                  <p className="text-sm text-muted-foreground">— {d.n}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#eae3d6]">
          <div className="container max-w-3xl">
            <div className="text-center mb-12 space-y-3">
              <span className="text-accent uppercase tracking-[0.3em] text-xs">Dúvidas frequentes</span>
              <h2 className="font-[Fraunces] text-4xl md:text-5xl text-[hsl(var(--secondary))] font-light">Respondemos com calma</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "É difícil instalar?", a: "Não. O Shower Care rosqueia entre o braço e a ducha em poucos segundos, sem ferramentas." },
                { q: "Funciona com qualquer chuveiro?", a: "Sim, é compatível com a grande maioria dos chuveiros e duchas residenciais." },
                { q: "Quanto tempo dura o refil?", a: "A duração varia conforme uso e qualidade da água, em média de 4 a 6 meses para uma família." },
                { q: "Reduz cloro mesmo?", a: "Sim. A mídia filtrante reduz significativamente o cloro livre, ferrugem e sedimentos." },
                { q: "Funciona para aquecedor a gás ou elétrico?", a: "Sim. Recomendamos instalar após o aquecedor, na saída do chuveiro." },
              ].map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="bg-white rounded-2xl border border-[hsl(var(--border))] px-6">
                  <AccordionTrigger className="text-left font-[Fraunces] text-lg text-[hsl(var(--secondary))]">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={waterfall} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-[#0d2c2a]/80" />
          </div>
          <div className="container relative text-center text-white max-w-3xl space-y-7">
            <h2 className="font-[Fraunces] text-4xl md:text-6xl font-light leading-tight">
              Comece hoje seu <em className="italic text-[hsl(var(--gold-light))]">ritual</em> de banho.
            </h2>
            <p className="text-lg text-white/85">
              Acqualive Shower Care: a forma mais simples de transformar a água do seu chuveiro
              em um cuidado diário com sua saúde e bem-estar.
            </p>
            <div className="flex justify-center pt-2"><CTA>Quero meu Shower Care agora</CTA></div>
            <p className="text-xs text-white/60 pt-4">10x sem juros • Frete grátis. Consulte regiões disponíveis.</p>
          </div>
        </section>

        <footer className="bg-[#0a1f1d] text-white/70 py-10 text-center text-sm">
          <div className="container">
            © {new Date().getFullYear()} Acqualive. Transforma a água para cuidar da vida.
          </div>
        </footer>
      </main>
    </>
  );
};

export default ShowerCare;
