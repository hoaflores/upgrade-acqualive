import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Droplets, Sparkles, ShieldCheck, Leaf, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAzul from "@/assets/logo-acqualive-azul.png";

const VIDEO_URL = ""; // YouTube embed do Dr. Júlio Bergmann (segunda página)
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
  const litros = (ml / 1000).toFixed(2).replace(".", ",");
  const copos = Math.round(ml / 250);
  const nome = params.get("nome") || "";
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowVideo(true), 1200);
    return () => clearTimeout(t);
  }, []);

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

  const primeiroNome = useMemo(() => nome.split(" ")[0] || "", [nome]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50">
      <Helmet>
        <title>Seu resultado de hidratação | Acqualive</title>
        <meta name="description" content="Veja sua quantidade ideal de água por dia e descubra como garantir a melhor qualidade de hidratação com o filtro Acqualive." />
        <link rel="canonical" href="https://paginas.acqualive.com.br/calculadora-acqualive-resultados" />
      </Helmet>

      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <img src={logoAzul} alt="Acqualive" className="h-10" />
      </header>

      <main className="container mx-auto px-4 pb-20">
        <section className="max-w-3xl mx-auto text-center">
          {primeiroNome && (
            <p className="text-primary font-semibold mb-2">{primeiroNome}, aqui está sua resposta</p>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sua hidratação ideal é de
          </h1>

          <div className="inline-flex flex-col items-center justify-center bg-gradient-to-br from-primary to-sky-600 text-white rounded-3xl p-10 md:p-14 shadow-2xl shadow-primary/30 mb-8">
            <Droplets className="w-12 h-12 mb-3 opacity-90" />
            <div className="text-6xl md:text-8xl font-bold tracking-tight">{litros}<span className="text-3xl md:text-5xl font-semibold ml-2">L</span></div>
            <div className="text-sm md:text-base opacity-90 mt-2">{ml.toLocaleString("pt-BR")} ml por dia · cerca de {copos} copos de 250ml</div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esse é o volume estimado para o seu perfil. Distribua ao longo do dia, comece pela manhã e mantenha uma garrafa por perto.
          </p>
        </section>

        {showVideo && (
          <section className="max-w-3xl mx-auto mt-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-3">
                <Sparkles className="w-4 h-4" /> Próximo passo
              </div>
              <h2 className="text-2xl md:text-4xl font-bold">Agora que você sabe <span className="text-primary">quanto</span> beber, descubra <span className="text-primary">qual água</span> beber</h2>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              {VIDEO_URL ? (
                <iframe src={VIDEO_URL} title="Qualidade da água" className="w-full h-full" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/70 text-sm">Vídeo do Dr. Júlio Bergmann em breve</div>
              )}
            </div>
          </section>
        )}

        <section className="max-w-5xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A quantidade certa pede a <span className="text-primary">qualidade certa</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Beber muita água da torneira sem tratamento adequado significa ingerir cloro, microplásticos e metais pesados todos os dias. O filtro Acqualive resolve isso.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: ShieldCheck, t: "Remove cloro e impurezas", d: "Elemento filtrante de alta performance retém cloro, sedimentos e contaminantes." },
              { icon: Leaf, t: "Água alcalina e antioxidante", d: "Aumenta o pH naturalmente e devolve minerais essenciais para o seu corpo." },
              { icon: Droplets, t: "Hidratação que rende mais", d: "Moléculas reorganizadas facilitam a absorção celular da água." },
            ].map((b, i) => (
              <div key={i} className="bg-card border rounded-2xl p-6 shadow-soft hover:shadow-elevated transition">
                <b.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 via-sky-50 to-accent/5 border-2 border-primary/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{primeiroNome ? `${primeiroNome}, ` : ""}beba seus {litros}L com a melhor água possível</h3>
            <ul className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto text-left mb-8">
              {[
                "Filtro alcalino Acqualive com elemento filtrante substituível",
                "Saúde e bem-estar para toda a família",
                "Em até 10x sem juros",
                "Frete grátis (consulte regiões disponíveis)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm">{item}</span></li>
              ))}
            </ul>

            <Button size="xl" variant="cta" className="animate-pulse-soft shadow-2xl" onClick={() => handleCTA("cta_principal_resultado")}>
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
