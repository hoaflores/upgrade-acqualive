import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Droplets, Sparkles, ShieldCheck, Leaf, CheckCircle2, ArrowRight, AlertTriangle, FlaskConical, Atom, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAzul from "@/assets/logo-acqualive-azul.png";

const VIDEO_URL = "https://www.youtube.com/embed/ynWzKoHwYpg";
const SITE_URL = "https://www.acqualive.com.br";

function buildCTA(label: string) {
  const utm = new URLSearchParams({
    utm_source: "calculadora",
    utm_medium: "resultado",
    utm_campaign: "hidratacao",
    utm_content: label,
  });
  return `${SITE_URL}/?${utm.toString()}`;
}

export default function CalculadoraAcqualiveResultados() {
  const [params] = useSearchParams();
  const ml = parseInt(params.get("ml") || "0");
  const litros = (ml / 1000).toFixed(1).replace(".", ",");
  const copos = Math.round(ml / 250);
  const nome = params.get("nome") || "";
  const primeiroNome = useMemo(() => nome.split(" ")[0] || "", [nome]);
  const videoRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);

  // Animação contador
  useEffect(() => {
    if (ml <= 0) return;
    const dur = 1200; const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounter(Math.round(ml * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ml]);

  async function trackCTA(destino: string) {
    try {
      await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/salvar-calculadora-hidratacao`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          evento: "clique_cta",
          nome, agua_ml: ml, agua_litros: litros,
          cta_destino: destino,
        }),
      });
    } catch (e) { /* silent */ }
  }

  function handleCTA(label: string) {
    const url = buildCTA(label);
    trackCTA(label);
    window.open(url, "_blank", "noopener");
  }

  const litrosCounter = (counter / 1000).toFixed(1).replace(".", ",");

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.1),_transparent_60%),linear-gradient(to_bottom,_#f0f9ff,_#ffffff)]">
      <Helmet>
        <title>Seu resultado de hidratação ideal | Acqualive</title>
        <meta name="description" content="Veja sua quantidade ideal de água por dia e descubra por que a qualidade da água que você bebe é tão importante quanto a quantidade." />
        <link rel="canonical" href="https://paginas.acqualive.com.br/calculadora-acqualive-resultados" />
      </Helmet>

      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <img src={logoAzul} alt="Acqualive" className="h-10" />
      </header>

      <main className="container mx-auto px-4 pb-20">

        {/* 1. RESULTADO NO TOPO */}
        <section className="max-w-3xl mx-auto text-center pt-2">
          {primeiroNome && (
            <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-xs md:text-sm">
              {primeiroNome}, aqui está sua resposta
            </p>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Sua hidratação ideal é de
          </h1>

          <div className="relative inline-flex flex-col items-center justify-center bg-gradient-to-br from-primary via-sky-500 to-sky-600 text-white rounded-3xl p-10 md:p-16 shadow-2xl shadow-primary/30 mb-8 overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
            <Droplets className="w-12 h-12 mb-3 opacity-90 relative" />
            <div className="text-6xl md:text-8xl font-bold tracking-tight tabular-nums relative">
              {litrosCounter}<span className="text-3xl md:text-5xl font-semibold ml-2">L</span>
            </div>
            <div className="text-sm md:text-base opacity-90 mt-3 relative">
              {counter.toLocaleString("pt-BR")} ml por dia · cerca de {copos} copos de 250ml
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Esse é o volume estimado para o seu perfil. Distribua ao longo do dia, comece pela manhã e mantenha uma garrafa por perto.
          </p>

          <Button
            size="lg"
            variant="outline"
            className="border-primary/40 text-primary hover:bg-primary/5"
            onClick={() => videoRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            Mas atenção: existe um detalhe que muda tudo <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </section>

        {/* 2. ALERTA - GATILHO DO MEDO */}
        <section ref={videoRef} className="max-w-3xl mx-auto mt-24 scroll-mt-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive font-semibold text-xs uppercase tracking-wider mb-4">
              <AlertTriangle className="w-4 h-4" /> O que ninguém te conta
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Beber {litros}L de <span className="text-destructive">água ruim</span> pode ser pior do que beber pouco
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Veja a explicação do Dr. Júlio Bergmann antes de continuar.
            </p>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            {VIDEO_URL ? (
              <iframe src={VIDEO_URL} title="Qualidade da água - Dr. Júlio Bergmann" className="w-full h-full" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/70 text-sm">
                Vídeo do Dr. Júlio Bergmann em breve
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { t: "Cloro", d: "Reage com matéria orgânica e forma compostos ligados a problemas de saúde." },
              { t: "Microplásticos", d: "Estudos detectam partículas plásticas em mais de 80% das amostras de água tratada." },
              { t: "Metais pesados", d: "Encanamentos antigos liberam chumbo, ferro e outros resíduos no caminho até o seu copo." },
            ].map((b, i) => (
              <div key={i} className="bg-destructive/5 border border-destructive/20 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <h3 className="font-bold">{b.t}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. EDUCAÇÃO - O QUE É ÁGUA ALCALINA MAGNESIANA */}
        <section className="max-w-4xl mx-auto mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider mb-4">
              <FlaskConical className="w-4 h-4" /> A melhor água do mundo
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              O que é uma <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">água alcalina magnesiana</span>?
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              É a água que mais se aproxima do que o seu corpo precisa para funcionar bem: limpa de impurezas, com pH alcalino e rica em magnésio biodisponível.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Leaf, t: "pH alcalino (8,5 a 9,5)", d: "Ajuda a equilibrar a acidez do organismo, gerada por dieta industrializada e estresse." },
              { icon: Atom, t: "Rica em magnésio", d: "Mineral envolvido em mais de 300 reações no corpo, ligado a sono, energia e função muscular." },
              { icon: Sparkles, t: "Antioxidante natural", d: "Potencial de oxirredução negativo, ajudando o corpo a combater radicais livres." },
            ].map((b, i) => (
              <div key={i} className="bg-card border-2 border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-br from-sky-50 to-blue-50 border border-primary/10 rounded-2xl p-8 text-center">
            <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-lg font-semibold mb-1">Mais do que matar a sede, ela alimenta suas células.</p>
            <p className="text-sm text-muted-foreground">Quem bebe água alcalina magnesiana percebe mais disposição, melhor digestão e pele mais hidratada já nas primeiras semanas.</p>
          </div>
        </section>

        {/* 4. SOLUÇÃO - COMO TER ESSA ÁGUA: ACQUALIVE */}
        <section className="max-w-4xl mx-auto mt-24">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" /> A solução completa
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Como ter <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">água alcalina magnesiana</span> em casa, todos os dias
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              O filtro Acqualive transforma a água da sua torneira em água alcalina magnesiana de altíssima qualidade, sem complicação e sem custo recorrente alto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: ShieldCheck, t: "Remove cloro e impurezas", d: "Elemento filtrante de alta performance retém cloro, sedimentos e contaminantes da água tratada." },
              { icon: Leaf, t: "Alcaliniza e mineraliza", d: "Eleva o pH naturalmente e devolve magnésio e outros minerais essenciais para o seu corpo." },
              { icon: Droplets, t: "Hidratação que rende mais", d: "Moléculas reorganizadas facilitam a absorção celular, fazendo cada gole render mais." },
            ].map((b, i) => (
              <div key={i} className="bg-card border rounded-2xl p-6 shadow-soft hover:shadow-elevated transition">
                <b.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 via-sky-50 to-accent/5 border-2 border-primary/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {primeiroNome ? `${primeiroNome}, beba ` : "Beba "}seus {litros}L com a melhor água possível
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto text-left mb-8">
              {[
                "Filtro alcalino magnesiano Acqualive",
                "Saúde e bem-estar para toda a família",
                "Em até 10x sem juros",
                "Frete grátis (consulte regiões disponíveis)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="xl" variant="cta" className="animate-pulse-soft shadow-2xl shadow-primary/30" onClick={() => handleCTA("cta_principal_resultado")}>
              Quero conhecer o filtro Acqualive <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <div className="mt-4">
              <button onClick={() => handleCTA("cta_secundario_resultado")} className="text-sm text-primary underline underline-offset-4 hover:opacity-80">
                Ver todos os modelos no site
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Hidratação não é só quantidade. A qualidade da água que você consome impacta diretamente a sua saúde e bem-estar a longo prazo.
          </p>
        </section>
      </main>

      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Acqualive · Esta é uma estimativa e não substitui orientação médica.
        </div>
      </footer>
    </div>
  );
}
