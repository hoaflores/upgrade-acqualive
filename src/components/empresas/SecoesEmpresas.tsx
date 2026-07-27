import { Card } from "@/components/ui/card";
import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  CheckCircle2,
  Coffee,
  Dumbbell,
  Factory,
  Gauge,
  HeartPulse,
  Briefcase,
  Sparkles,
  Thermometer,
  Timer,
  Wrench,
} from "lucide-react";
import { IMG } from "./dados";

const Eyebrow = ({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "accent" | "light" }) => {
  const cor =
    tone === "accent"
      ? "text-accent"
      : tone === "light"
        ? "text-primary-foreground/70"
        : "text-primary";
  return (
    <span className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] ${cor}`}>
      <span className="h-px w-8 bg-current opacity-50" />
      {children}
    </span>
  );
};

export const DorGaloes = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <div className="max-w-3xl mb-14">
        <Eyebrow tone="accent">A rotina do galão</Eyebrow>
        <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
          O galão custa mais caro do que parece
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          O valor da água é só uma parte da conta. O peso real está no tempo da equipe, no espaço ocupado
          e na dependência de entrega para algo tão básico quanto beber água.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/70 rounded-3xl overflow-hidden border border-border/70">
        {[
          { icon: Boxes, title: "Estoque ocupando espaço", text: "Galões cheios e vazios espalhados por corredores, copa e depósito." },
          { icon: Timer, title: "Tempo da equipe", text: "Alguém sempre precisa parar o que está fazendo para trocar o galão." },
          { icon: AlertTriangle, title: "Risco e esforço físico", text: "Levantar 20 litros repetidamente é desgaste e risco desnecessário." },
          { icon: Gauge, title: "Falta de água na hora errada", text: "Pedido atrasado, entrega falha e o time fica sem água no pico do dia." },
        ].map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="group bg-card p-8 transition-colors hover:bg-water-light">
            <div className="flex items-start justify-between mb-6">
              <div className="w-11 h-11 rounded-xl bg-secondary/5 border border-border/70 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-3xl font-bold text-border">0{i + 1}</span>
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2 tracking-tight">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SolucaoDuo = () => (
  <section id="solucao" className="relative py-20 lg:py-28 bg-water-light overflow-hidden">
    <div
      aria-hidden
      className="pointer-events-none absolute -right-40 top-20 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-3xl"
    />
    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] border border-primary/10" />
          <div className="absolute inset-0 bg-gradient-water rounded-[2rem] blur-3xl opacity-10" />
          <img
            src={IMG.duoCopo}
            alt="Colaborador servindo água gelada e natural no Acqualive DUO"
            className="relative rounded-[2rem] shadow-elevated w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-6 left-6 right-6 md:left-10 md:right-auto md:w-64 rounded-2xl bg-card/95 backdrop-blur border border-border/70 shadow-elevated p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent mb-1">Ponto de uso</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Água purificada direto da rede, disponível o dia inteiro para toda a equipe.
            </p>
          </div>
        </div>

        <div className="pt-8 lg:pt-0">
          <Eyebrow>A solução</Eyebrow>
          <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
            Acqualive DUO: água gelada e natural no ponto de uso
          </h2>
          <p className="text-lg text-muted-foreground mb-9 leading-relaxed">
            Ligado direto na rede de água, o DUO purifica e entrega dois tipos de saída para atender
            todo mundo, do café da copa à garrafa da equipe.
          </p>

          <div className="rounded-3xl border border-border/70 bg-card/70 backdrop-blur divide-y divide-border/60 overflow-hidden shadow-soft">
            {[
              { icon: Thermometer, title: "Gelada e natural", text: "Duas saídas independentes para agradar toda a equipe ao longo do dia." },
              { icon: Gauge, title: "Alta vazão", text: "Enche garrafas e jarras rápido, mesmo nos horários de maior movimento." },
              { icon: Wrench, title: "Manutenção simples", text: "Troca de refis prática e assistência técnica Acqualive quando precisar." },
              { icon: CheckCircle2, title: "Sem galão, sem estoque", text: "Acaba o pedido, a espera pela entrega e o espaço ocupado no ambiente." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-5 p-6 transition-colors hover:bg-water-light/60">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1 tracking-tight">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const AntesDepois = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="flex justify-center mb-5">
          <Eyebrow>Antes e depois</Eyebrow>
        </div>
        <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
          A transformação na rotina da empresa
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A mudança aparece já na primeira semana, no espaço liberado e no tempo que a equipe deixa de perder.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="p-8 rounded-3xl border-border/70 bg-card">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground mb-4">Antes, com galões</p>
          <ul className="space-y-4">
            {[
              "Pedido, espera e conferência de entrega",
              "Galões pesados e troca manual",
              "Espaço de estoque comprometido",
              "Risco de ficar sem água no meio do expediente",
              "Custo variável e difícil de prever",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="relative p-8 rounded-3xl border-0 bg-gradient-water text-primary-foreground shadow-elevated overflow-hidden">
          <div aria-hidden className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-accent/20 blur-3xl" />
          <p className="relative text-[11px] font-bold uppercase tracking-[0.24em] text-accent mb-4">
            Depois, com Acqualive DUO
          </p>
          <ul className="relative space-y-4">
            {[
              "Água gelada e natural disponível o tempo todo",
              "Zero esforço físico e zero troca de galão",
              "Espaço livre na copa e no depósito",
              "Abastecimento contínuo, sem depender de entrega",
              "Custo previsível de manutenção",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-primary-foreground/85 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

export const BeneficiosPessoas = () => (
  <section id="beneficios" className="py-20 lg:py-28 bg-water-light">
    <div className="container">
      <div className="max-w-3xl mb-14">
        <Eyebrow>Equipe e clientes</Eyebrow>
        <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
          Água boa muda a energia do ambiente e a imagem da sua marca
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          O ganho não fica só na planilha. Uma equipe bem hidratada rende mais, adoece menos e sente que a
          empresa investe em saúde e bem-estar. E quem visita percebe esse cuidado na primeira taça servida.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: HeartPulse,
            titulo: "Mais saúde no dia a dia",
            texto:
              "Água purificada e alcalina sempre à mão incentiva a hidratação constante, que apoia digestão, imunidade e disposição da equipe ao longo de todo o expediente.",
          },
          {
            icon: Gauge,
            titulo: "Mais energia e foco",
            texto:
              "A desidratação leve já derruba atenção e produtividade. Com água gelada e natural no ponto de uso, ninguém deixa de beber por preguiça de buscar.",
          },
          {
            icon: Timer,
            titulo: "Menos tempo perdido",
            texto:
              "Sem fila na copa, sem galão para trocar e sem pedido atrasado. O time volta para a atividade que realmente gera resultado.",
          },
          {
            icon: Sparkles,
            titulo: "Percepção de valor",
            texto:
              "Um ponto de água elegante, limpo e sempre abastecido comunica padrão. É o tipo de detalhe que cliente, parceiro e candidato reparam.",
          },
          {
            icon: Briefcase,
            titulo: "Marca empregadora mais forte",
            texto:
              "Oferecer água de qualidade é um benefício simples, visível e diário. Ajuda a reter talentos e reforça a cultura de cuidado com as pessoas.",
          },
          {
            icon: Coffee,
            titulo: "Melhor experiência para o cliente",
            texto:
              "Receber com água gelada e natural na hora certa valoriza o atendimento e deixa uma boa impressão antes mesmo da conversa começar.",
          },
        ].map(({ icon: Icon, titulo, texto }) => (
          <Card key={titulo} className="p-7 rounded-3xl border-border/70 bg-card hover:shadow-elevated transition-shadow">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2.5">{titulo}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{texto}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export const Segmentos = () => (
  <section id="segmentos" className="py-20 lg:py-28 bg-water-light">
    <div className="container">
      <div className="max-w-3xl mb-14">
        <Eyebrow>Segmentos</Eyebrow>
        <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
          Feito para o dia a dia do seu negócio
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Cada ambiente tem um ritmo de consumo diferente. A avaliação Acqualive define o modelo e o
          ponto de instalação ideais para o seu.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Coffee, title: "Restaurantes e cafeterias", text: "Água de qualidade para o preparo, para o salão e para a equipe em turnos longos.", img: IMG.duoCozinha },
          { icon: Dumbbell, title: "Studios e academias", text: "Alta vazão para encher garrafas rápido nos horários de pico.", img: IMG.duoGarrafa },
          { icon: HeartPulse, title: "Clínicas e consultórios", text: "Experiência de recepção mais cuidadosa, sem galão à vista.", img: IMG.duoClinica },
          { icon: Factory, title: "Indústrias e operações", text: "Pontos de hidratação confiáveis para equipes grandes e turnos contínuos.", img: IMG.duoAcademia },
          { icon: Briefcase, title: "Escritórios e coworkings", text: "Copa organizada, consumo constante e nada de estoque de galões.", img: IMG.duoFamilia },
        ].map(({ icon: Icon, title, text, img }) => (
          <Card
            key={title}
            className="group relative overflow-hidden rounded-3xl border-border/60 bg-card shadow-soft hover:shadow-elevated transition-all duration-500"
          >
            <div className="relative overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-card/90 backdrop-blur flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-primary-foreground tracking-tight">{title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          </Card>
        ))}

        <Card className="relative overflow-hidden rounded-3xl p-8 flex flex-col justify-center bg-gradient-water text-primary-foreground border-0 shadow-elevated">
          <div aria-hidden className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <Sparkles className="w-5 h-5 text-accent mb-4" />
            <h3 className="font-display text-xl font-bold mb-3 tracking-tight">Seu segmento não está na lista?</h3>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Atendemos operações de todos os portes. Conte a sua rotina e montamos a solução.
            </p>
            <a href="#avaliacao" className="inline-flex items-center gap-2 text-sm font-semibold text-accent group">
              Solicitar avaliação
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

export const ProvaAutoridade = () => (
  <section className="relative py-20 lg:py-28 bg-gradient-water overflow-hidden">
    <div aria-hidden className="absolute -top-40 left-1/3 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-3xl" />
    <div className="container relative">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="flex justify-center mb-5">
          <Eyebrow tone="light">Autoridade</Eyebrow>
        </div>
        <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-primary-foreground leading-[1.1] tracking-tight mb-5">
          Por que empresas escolhem a Acqualive
        </h2>
        <p className="text-lg text-primary-foreground/70 leading-relaxed">
          Somos uma marca brasileira dedicada à água e à saúde e bem-estar, com rede de atendimento em todo o país.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-primary-foreground/15 bg-primary-foreground/10">
        {[
          { valor: "+20 anos", texto: "de experiência em purificação de água" },
          { valor: "Rede nacional", texto: "de franqueados e assistência técnica" },
          { valor: "Instalação", texto: "e orientação de uso incluídas na avaliação" },
          { valor: "Suporte", texto: "e manutenção programada de refis" },
        ].map(({ valor, texto }) => (
          <div key={valor} className="bg-secondary/40 backdrop-blur p-8 text-center">
            <p className="font-display text-2xl font-bold text-accent mb-2 tracking-tight">{valor}</p>
            <p className="text-sm text-primary-foreground/75 leading-relaxed">{texto}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ComoFunciona = () => (
  <section id="implantacao" className="py-20 lg:py-28 bg-background">
    <div className="container">
      <div className="max-w-3xl mb-14">
        <Eyebrow>Implantação</Eyebrow>
        <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
          Da primeira conversa à água gelada no copo, em 4 passos
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Um processo simples, conduzido pela nossa equipe e pelo franqueado da sua região.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            titulo: "Avaliação gratuita",
            texto: "Entendemos o número de pessoas, o consumo atual e a rotina do espaço.",
          },
          {
            titulo: "Proposta personalizada",
            texto: "Definimos quantos equipamentos fazem sentido e apresentamos o investimento.",
          },
          {
            titulo: "Instalação",
            texto: "A equipe instala no ponto ideal e orienta o time sobre o uso no mesmo dia.",
          },
          {
            titulo: "Acompanhamento",
            texto: "Manutenção programada dos refis e suporte técnico sempre que precisar.",
          },
        ].map(({ titulo, texto }, i) => (
          <Card
            key={titulo}
            className="relative p-7 rounded-[1.75rem] border-border/60 shadow-soft hover:shadow-elevated transition-shadow duration-300"
          >
            <span className="font-display text-5xl font-bold text-primary/10 leading-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground tracking-tight mb-2">{titulo}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{texto}</p>
            {i < 3 && (
              <ArrowRight
                aria-hidden
                className="hidden lg:block absolute top-1/2 -right-4 w-5 h-5 text-primary/25"
              />
            )}
          </Card>
        ))}
      </div>
    </div>
  </section>
);
