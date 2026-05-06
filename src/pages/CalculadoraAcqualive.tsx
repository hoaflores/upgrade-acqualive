import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Droplets, ArrowRight, Activity, User, Thermometer, Coffee, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logoAzul from "@/assets/logo-acqualive-azul.png";

type FormState = {
  nome: string; email: string; whatsapp: string;
  sexo: string; idade: string; peso: string; altura: string;
  atividadeMin: string; intensidade: string;
  clima: string; gestanteLactante: string; cafeAlcool: string;
};

const VIDEO_URL = "https://www.youtube.com/embed/KKgYextCoAI";

export function calcularAgua(f: FormState): number {
  const peso = parseFloat(f.peso) || 0;
  const idade = parseInt(f.idade) || 30;
  if (peso <= 0) return 0;

  // Base saudável: 35 ml/kg
  let ml = peso * 35;

  // Ajustes percentuais leves
  let mult = 1;

  // Sexo: homens com mais massa magra precisam levemente mais
  if (f.sexo === "masculino") mult += 0.04;

  // Idade
  if (idade < 30) mult += 0.04;
  else if (idade >= 55 && idade < 65) mult -= 0.03;
  else if (idade >= 65) mult -= 0.06;

  // Exercício: combinação de volume + intensidade
  const minSemana = parseInt(f.atividadeMin) || 0;
  const horasSemana = minSemana / 60;
  let porHora = 60; // leve
  if (f.intensidade === "moderada") porHora = 90;
  if (f.intensidade === "intensa") porHora = 130;
  ml += horasSemana * porHora; // adicional fixo por hora/semana (média diária diluída)

  // Clima
  if (f.clima === "quente") mult += 0.06;
  if (f.clima === "muito_quente") mult += 0.12;

  // Gestante / lactante
  if (f.gestanteLactante === "gestante") mult += 0.08;
  if (f.gestanteLactante === "lactante") mult += 0.18;

  // Café / álcool (efeito diurético)
  if (f.cafeAlcool === "moderado") mult += 0.03;
  if (f.cafeAlcool === "alto") mult += 0.06;

  ml = ml * mult;

  // Limites de segurança
  if (ml < peso * 30) ml = peso * 30;
  if (ml > peso * 50) ml = peso * 50;

  return Math.round(ml / 50) * 50;
}

export default function CalculadoraAcqualive() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [f, setF] = useState<FormState>({
    nome: "", email: "", whatsapp: "",
    sexo: "", idade: "", peso: "", altura: "",
    atividadeMin: "", intensidade: "moderada",
    clima: "ameno", gestanteLactante: "nao", cafeAlcool: "baixo",
  });

  const upd = (k: keyof FormState) => (v: string) => setF(s => ({ ...s, [k]: v }));

  const podeEnviar = useMemo(() =>
    f.sexo && f.idade && f.peso && f.atividadeMin !== "" && f.intensidade && f.clima &&
    f.nome.trim().length >= 2 && /\S+@\S+\.\S+/.test(f.email) && f.whatsapp.replace(/\D/g, "").length >= 10,
    [f]
  );

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

  const optionBtn = (active: boolean) =>
    `p-3 rounded-xl border-2 text-sm font-semibold transition-all ${
      active
        ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
        : "border-border bg-card hover:border-primary/50 hover:bg-primary/5"
    }`;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08),_transparent_60%),linear-gradient(to_bottom,_#f0f9ff,_#ffffff)]">
      <Helmet>
        <title>Calculadora da Hidratação Saudável | Quanto beber por dia</title>
        <meta name="description" content="Descubra com precisão a quantidade ideal de água para o seu corpo, considerando idade, peso, rotina e clima. Cálculo gratuito em menos de 1 minuto." />
        <link rel="canonical" href="https://paginas.acqualive.com.br/calculadora-acqualive" />
      </Helmet>

      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <img src={logoAzul} alt="Acqualive" className="h-10" />
        <span className="hidden md:inline text-xs text-muted-foreground">Cálculo gratuito · Sem compromisso</span>
      </header>

      <main className="container mx-auto px-4 pb-16">
        <section className="max-w-3xl mx-auto text-center mb-10 mt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-5 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Calculadora da Hidratação Saudável
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-5 tracking-tight leading-[1.05]">
            SAIBA O QUANTO DE ÁGUA <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">VOCÊ PRECISA BEBER</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A recomendação genérica de "2 litros" ignora seu peso, sua rotina e o clima onde você vive. Em menos de 1 minuto, descubra o número exato para a sua realidade.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Baseado em referências clínicas</span>
            <span className="flex items-center gap-1.5"><Droplets className="w-4 h-4 text-primary" /> Personalizado para você</span>
          </div>
        </section>

        {VIDEO_URL && (
          <section className="max-w-3xl mx-auto mb-10">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe src={VIDEO_URL} title="Dr. Júlio Bergmann" className="w-full h-full" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </section>
        )}

        <section className="max-w-3xl mx-auto bg-card/80 backdrop-blur rounded-3xl shadow-2xl shadow-primary/10 p-6 md:p-10 border border-primary/10 space-y-10">

          {/* Bloco 1: Sobre você */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><User className="w-5 h-5" /></div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Etapa 1</p>
                <h2 className="text-xl md:text-2xl font-bold">Sobre você</h2>
              </div>
            </div>

            <div>
              <Label>Sexo biológico</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {[{ v: "feminino", l: "Feminino" }, { v: "masculino", l: "Masculino" }].map(o => (
                  <button key={o.v} type="button" onClick={() => upd("sexo")(o.v)} className={optionBtn(f.sexo === o.v)}>{o.l}</button>
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
                    <button key={o.v} type="button" onClick={() => upd("gestanteLactante")(o.v)} className={optionBtn(f.gestanteLactante === o.v)}>{o.l}</button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bloco 2: Rotina */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Activity className="w-5 h-5" /></div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Etapa 2</p>
                <h2 className="text-xl md:text-2xl font-bold">Sua rotina e ambiente</h2>
              </div>
            </div>

            <div>
              <Label>Quantos minutos de exercício por semana?</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                {[{ v: "0", l: "Sedentário" }, { v: "90", l: "Até 90min" }, { v: "180", l: "90 a 180min" }, { v: "300", l: "180 a 300min" }, { v: "450", l: "300 a 450min" }, { v: "600", l: "Mais de 450min" }].map(o => (
                  <button key={o.v} type="button" onClick={() => upd("atividadeMin")(o.v)} className={optionBtn(f.atividadeMin === o.v)}>{o.l}</button>
                ))}
              </div>
            </div>

            <div>
              <Label>Intensidade dos exercícios</Label>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[{ v: "leve", l: "Leve" }, { v: "moderada", l: "Moderada" }, { v: "intensa", l: "Intensa" }].map(o => (
                  <button key={o.v} type="button" onClick={() => upd("intensidade")(o.v)} className={optionBtn(f.intensidade === o.v)}>{o.l}</button>
                ))}
              </div>
            </div>

            <div>
              <Label className="flex items-center gap-2"><Thermometer className="w-4 h-4" /> Clima onde você vive</Label>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[{ v: "ameno", l: "Ameno" }, { v: "quente", l: "Quente" }, { v: "muito_quente", l: "Muito quente" }].map(o => (
                  <button key={o.v} type="button" onClick={() => upd("clima")(o.v)} className={optionBtn(f.clima === o.v)}>{o.l}</button>
                ))}
              </div>
            </div>

            <div>
              <Label className="flex items-center gap-2"><Coffee className="w-4 h-4" /> Consumo de café e álcool</Label>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[{ v: "baixo", l: "Baixo" }, { v: "moderado", l: "Moderado" }, { v: "alto", l: "Alto" }].map(o => (
                  <button key={o.v} type="button" onClick={() => upd("cafeAlcool")(o.v)} className={optionBtn(f.cafeAlcool === o.v)}>{o.l}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Bloco 3: Contato */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Heart className="w-5 h-5" /></div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Etapa 3</p>
                <h2 className="text-xl md:text-2xl font-bold">Para onde enviamos seu resultado?</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
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
            </div>
            <p className="text-xs text-muted-foreground">Seus dados ficam em sigilo. Usamos apenas para entregar o resultado e dicas personalizadas de hidratação.</p>
          </div>

          <Button
            size="xl"
            variant="cta"
            className="w-full animate-pulse-soft shadow-2xl shadow-primary/30"
            disabled={!podeEnviar || loading}
            onClick={enviar}
          >
            {loading ? "Calculando seu resultado..." : "Calcular minha hidratação ideal"} <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </section>

        <p className="text-xs text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
          Esta calculadora oferece uma estimativa baseada em referências de hidratação adulta saudável e não substitui orientação médica individualizada.
        </p>
      </main>
    </div>
  );
}
