import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Droplets, ArrowRight, ArrowLeft, Activity, User, Thermometer, Coffee, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logoAzul from "@/assets/logo-acqualive-azul.png";

type FormState = {
  nome: string; email: string; whatsapp: string;
  sexo: string; idade: string; peso: string; altura: string;
  atividadeMin: string; intensidade: string;
  clima: string; gestanteLactante: string; cafeAlcool: string;
  videoUrl: string;
};

const VIDEO_URL = ""; // YouTube embed URL será adicionada depois

function calcularAgua(f: FormState): number {
  const peso = parseFloat(f.peso) || 0;
  const idade = parseInt(f.idade) || 30;
  const sexo = f.sexo;
  if (peso <= 0) return 0;

  // Base por idade (ml/kg)
  let base = 35;
  if (idade < 18) base = 40;
  else if (idade < 30) base = 38;
  else if (idade < 55) base = 35;
  else if (idade < 65) base = 32;
  else base = 30;

  // Sexo: homens tendem a precisar levemente mais (massa magra)
  if (sexo === "masculino") base += 2;

  let ml = peso * base;

  // Exercício: minutos por semana convertidos em adicional diário
  const minSemana = parseInt(f.atividadeMin) || 0;
  const minDia = minSemana / 7;
  let mlPorMin = 10; // leve
  if (f.intensidade === "moderada") mlPorMin = 12;
  if (f.intensidade === "intensa") mlPorMin = 15;
  ml += minDia * mlPorMin;

  // Clima
  if (f.clima === "quente") ml += 500;
  if (f.clima === "muito_quente") ml += 1000;

  // Gestante / lactante
  if (f.gestanteLactante === "gestante") ml += 300;
  if (f.gestanteLactante === "lactante") ml += 700;

  // Café / álcool (efeito diurético)
  if (f.cafeAlcool === "moderado") ml += 250;
  if (f.cafeAlcool === "alto") ml += 500;

  return Math.round(ml / 50) * 50;
}

export default function CalculadoraAcqualive() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [f, setF] = useState<FormState>({
    nome: "", email: "", whatsapp: "",
    sexo: "", idade: "", peso: "", altura: "",
    atividadeMin: "", intensidade: "moderada",
    clima: "ameno", gestanteLactante: "nao", cafeAlcool: "baixo",
    videoUrl: VIDEO_URL,
  });

  const upd = (k: keyof FormState) => (v: string) => setF(s => ({ ...s, [k]: v }));

  const podeAvancar1 = f.sexo && f.idade && f.peso;
  const podeAvancar2 = f.atividadeMin !== "" && f.intensidade && f.clima;
  const podeEnviar = f.nome.trim().length >= 2 && /\S+@\S+\.\S+/.test(f.email) && f.whatsapp.replace(/\D/g, "").length >= 10;

  async function enviar() {
    setLoading(true);
    const ml = calcularAgua(f);
    const litros = (ml / 1000).toFixed(2);
    try {
      await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/salvar-calculadora-hidratacao`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          evento: "calculo",
          nome: f.nome, email: f.email, whatsapp: f.whatsapp,
          sexo: f.sexo, idade: f.idade, peso_kg: f.peso, altura_cm: f.altura,
          atividade_min_semana: f.atividadeMin, intensidade: f.intensidade,
          clima: f.clima, gestante_lactante: f.gestanteLactante, cafe_alcool: f.cafeAlcool,
          agua_ml: ml, agua_litros: litros,
        }),
      });
    } catch (e) { console.error(e); }
    const params = new URLSearchParams({
      ml: String(ml), nome: f.nome, peso: f.peso,
      sexo: f.sexo, idade: f.idade,
    });
    navigate(`/calculadora-acqualive-resultados?${params.toString()}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50">
      <Helmet>
        <title>Calculadora de Hidratação Ideal | Acqualive</title>
        <meta name="description" content="Descubra a quantidade ideal de água para o seu corpo com base em idade, peso, atividade física e estilo de vida." />
        <link rel="canonical" href="https://paginas.acqualive.com.br/calculadora-acqualive" />
      </Helmet>

      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <img src={logoAzul} alt="Acqualive" className="h-10" />
      </header>

      <main className="container mx-auto px-4 pb-16">
        <section className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Droplets className="w-4 h-4" /> Calculadora Acqualive
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Quanta água o <span className="text-primary">seu corpo</span> realmente precisa?
          </h1>
          <p className="text-lg text-muted-foreground">
            Cada pessoa é única. Veja a explicação do Dr. Júlio Bergmann e descubra logo abaixo o cálculo ideal para você.
          </p>
        </section>

        <section className="max-w-3xl mx-auto mb-10">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            {f.videoUrl ? (
              <iframe src={f.videoUrl} title="Dr. Júlio Bergmann" className="w-full h-full" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/70 text-sm">Vídeo do Dr. Júlio Bergmann em breve</div>
            )}
          </div>
        </section>

        <section className="max-w-2xl mx-auto bg-card rounded-3xl shadow-2xl p-6 md:p-10 border">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map(n => (
              <div key={n} className="flex-1 flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${step >= n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{n}</div>
                {n < 3 && <div className={`flex-1 h-1 mx-2 rounded ${step > n ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <User className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Sobre você</h2>
              </div>

              <div>
                <Label>Sexo biológico</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {[{ v: "feminino", l: "Feminino" }, { v: "masculino", l: "Masculino" }].map(o => (
                    <button key={o.v} type="button" onClick={() => upd("sexo")(o.v)}
                      className={`p-4 rounded-xl border-2 font-semibold transition ${f.sexo === o.v ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>{o.l}</button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label>Idade</Label>
                  <Input type="number" min={1} max={120} value={f.idade} onChange={e => upd("idade")(e.target.value)} placeholder="Ex: 35" />
                </div>
                <div>
                  <Label>Peso (kg)</Label>
                  <Input type="number" min={20} max={300} value={f.peso} onChange={e => upd("peso")(e.target.value)} placeholder="Ex: 70" />
                </div>
                <div>
                  <Label>Altura (cm) <span className="text-xs text-muted-foreground">opcional</span></Label>
                  <Input type="number" min={80} max={250} value={f.altura} onChange={e => upd("altura")(e.target.value)} placeholder="Ex: 170" />
                </div>
              </div>

              {f.sexo === "feminino" && parseInt(f.idade || "0") >= 14 && parseInt(f.idade || "0") <= 55 && (
                <div>
                  <Label>Você está gestante ou lactante?</Label>
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    {[{ v: "nao", l: "Não" }, { v: "gestante", l: "Gestante" }, { v: "lactante", l: "Lactante" }].map(o => (
                      <button key={o.v} type="button" onClick={() => upd("gestanteLactante")(o.v)}
                        className={`p-3 rounded-xl border-2 text-sm font-semibold ${f.gestanteLactante === o.v ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>{o.l}</button>
                    ))}
                  </div>
                </div>
              )}

              <Button size="lg" className="w-full" disabled={!podeAvancar1} onClick={() => setStep(2)}>
                Próximo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Rotina e ambiente</h2>
              </div>

              <div>
                <Label>Quantos minutos de exercício por semana?</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  {[{ v: "0", l: "Sedentário" }, { v: "90", l: "Até 90min" }, { v: "180", l: "90 a 180min" }, { v: "300", l: "180 a 300min" }, { v: "450", l: "300 a 450min" }, { v: "600", l: "Mais de 450min" }].map(o => (
                    <button key={o.v} type="button" onClick={() => upd("atividadeMin")(o.v)}
                      className={`p-3 rounded-xl border-2 text-sm font-semibold ${f.atividadeMin === o.v ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>{o.l}</button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Intensidade dos exercícios</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[{ v: "leve", l: "Leve" }, { v: "moderada", l: "Moderada" }, { v: "intensa", l: "Intensa" }].map(o => (
                    <button key={o.v} type="button" onClick={() => upd("intensidade")(o.v)}
                      className={`p-3 rounded-xl border-2 text-sm font-semibold ${f.intensidade === o.v ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>{o.l}</button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="flex items-center gap-2"><Thermometer className="w-4 h-4" /> Clima onde você vive</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[{ v: "ameno", l: "Ameno" }, { v: "quente", l: "Quente" }, { v: "muito_quente", l: "Muito quente" }].map(o => (
                    <button key={o.v} type="button" onClick={() => upd("clima")(o.v)}
                      className={`p-3 rounded-xl border-2 text-sm font-semibold ${f.clima === o.v ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>{o.l}</button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="flex items-center gap-2"><Coffee className="w-4 h-4" /> Consumo de café e álcool</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[{ v: "baixo", l: "Baixo" }, { v: "moderado", l: "Moderado" }, { v: "alto", l: "Alto" }].map(o => (
                    <button key={o.v} type="button" onClick={() => upd("cafeAlcool")(o.v)}
                      className={`p-3 rounded-xl border-2 text-sm font-semibold ${f.cafeAlcool === o.v ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>{o.l}</button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="lg" variant="outline" onClick={() => setStep(1)}><ArrowLeft className="w-4 h-4 mr-2" /> Voltar</Button>
                <Button size="lg" className="flex-1" disabled={!podeAvancar2} onClick={() => setStep(3)}>Próximo <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Para onde enviamos seu resultado?</h2>
              </div>
              <p className="text-sm text-muted-foreground -mt-3">Seus dados ficam em sigilo. Usamos para entregar o resultado e dicas personalizadas.</p>

              <div>
                <Label>Nome</Label>
                <Input value={f.nome} onChange={e => upd("nome")(e.target.value)} placeholder="Seu nome completo" />
              </div>
              <div>
                <Label>E-mail</Label>
                <Input type="email" value={f.email} onChange={e => upd("email")(e.target.value)} placeholder="voce@email.com" />
              </div>
              <div>
                <Label>WhatsApp (com DDD)</Label>
                <Input value={f.whatsapp} onChange={e => upd("whatsapp")(e.target.value)} placeholder="(11) 99999-9999" />
              </div>

              <div className="flex gap-3">
                <Button size="lg" variant="outline" onClick={() => setStep(2)}><ArrowLeft className="w-4 h-4 mr-2" /> Voltar</Button>
                <Button size="lg" variant="cta" className="flex-1" disabled={!podeEnviar || loading} onClick={enviar}>
                  {loading ? "Calculando..." : "Ver meu resultado"} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </section>

        <p className="text-xs text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
          Esta calculadora oferece uma estimativa baseada em referências de hidratação adulta saudável e não substitui orientação médica individualizada.
        </p>
      </main>
    </div>
  );
}
