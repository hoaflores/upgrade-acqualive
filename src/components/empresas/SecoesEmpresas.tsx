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

export const DorGaloes = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2 mb-5">
          <AlertTriangle className="w-4 h-4 text-destructive" />
          <span className="text-sm font-semibold text-destructive">A rotina do galão</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          O galão custa mais caro do que parece
        </h2>
        <p className="text-lg text-muted-foreground">
          O valor da água é só uma parte da conta. O peso real está no tempo da equipe, no espaço ocupado
          e na dependência de entrega para algo tão básico quanto beber água.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: Boxes, title: "Estoque ocupando espaço", text: "Galões cheios e vazios espalhados por corredores, copa e depósito." },
          { icon: Timer, title: "Tempo da equipe", text: "Alguém sempre precisa parar o que está fazendo para trocar o galão." },
          { icon: AlertTriangle, title: "Risco e esforço físico", text: "Levantar 20 litros repetidamente é desgaste e risco desnecessário." },
          { icon: Gauge, title: "Falta de água na hora errada", text: "Pedido atrasado, entrega falha e o time fica sem água no pico do dia." },
        ].map(({ icon: Icon, title, text }) => (
          <Card key={title} className="p-6 border-border/70 shadow-soft hover:shadow-elevated transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export const SolucaoDuo = () => (
  <section id="solucao" className="py-16 lg:py-24 bg-water-light">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-water rounded-3xl blur-3xl opacity-15" />
          <img
            src={IMG.duoCopo}
            alt="Colaborador servindo água natural e fresquinha no Acqualive DUO"
            className="relative rounded-2xl shadow-elevated w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-5">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">A solução</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Acqualive DUO: água natural e fresquinha no ponto de uso
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ligado direto na rede de água, o DUO purifica e entrega dois tipos de saída para atender
            todo mundo, do café da copa à garrafa da equipe.
          </p>

          <div className="space-y-4">
            {[
              { icon: Thermometer, title: "Natural e fresquinha", text: "Duas opções de saída para agradar toda a equipe ao longo do dia." },
              { icon: Gauge, title: "Alta vazão", text: "Enche garrafas e jarras rápido, mesmo nos horários de maior movimento." },
              { icon: Wrench, title: "Manutenção simples", text: "Troca de refis prática e assistência técnica Acqualive quando precisar." },
              { icon: CheckCircle2, title: "Sem galão, sem estoque", text: "Acaba o pedido, a espera pela entrega e o espaço ocupado no ambiente." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 bg-card rounded-xl p-5 border border-border/70 shadow-soft">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 mt-14">
        {[
          { src: IMG.duoPainel, alt: "Painel de controle do Acqualive DUO" },
          { src: IMG.duoTopo, alt: "Acabamento superior do Acqualive DUO" },
          { src: IMG.duoFrenteAlt, alt: "Acqualive DUO em vista frontal" },
        ].map((img) => (
          <div key={img.src} className="rounded-2xl overflow-hidden bg-card border border-border/70 shadow-soft">
            <img src={img.src} alt={img.alt} className="w-full h-56 object-contain p-4" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const AntesDepois = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          A transformação na rotina da empresa
        </h2>
        <p className="text-lg text-muted-foreground">
          A mudança aparece já na primeira semana, no espaço liberado e no tempo que a equipe deixa de perder.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="p-7 border-destructive/20 bg-destructive/5">
          <h3 className="font-display text-xl font-bold text-foreground mb-5">Antes, com galões</h3>
          <ul className="space-y-3">
            {[
              "Pedido, espera e conferência de entrega",
              "Galões pesados e troca manual",
              "Espaço de estoque comprometido",
              "Risco de ficar sem água no meio do expediente",
              "Custo variável e difícil de prever",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-7 border-primary/20 bg-primary/5">
          <h3 className="font-display text-xl font-bold text-foreground mb-5">Depois, com Acqualive DUO</h3>
          <ul className="space-y-3">
            {[
              "Água natural e fresquinha disponível o tempo todo",
              "Zero esforço físico e zero troca de galão",
              "Espaço livre na copa e no depósito",
              "Abastecimento contínuo, sem depender de entrega",
              "Custo previsível de manutenção",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

export const Segmentos = () => (
  <section id="segmentos" className="py-16 lg:py-24 bg-water-light">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Feito para o dia a dia do seu negócio
        </h2>
        <p className="text-lg text-muted-foreground">
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
          <Card key={title} className="overflow-hidden border-border/70 shadow-soft hover:shadow-elevated transition-shadow">
            <img src={img} alt={title} className="w-full h-44 object-cover" loading="lazy" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          </Card>
        ))}

        <Card className="p-6 flex flex-col justify-center bg-gradient-water text-primary-foreground border-0 shadow-elevated">
          <h3 className="font-display text-xl font-bold mb-2">Seu segmento não está na lista?</h3>
          <p className="text-sm opacity-90 mb-5">
            Atendemos operações de todos os portes. Conte a sua rotina e montamos a solução.
          </p>
          <a href="#avaliacao" className="inline-flex items-center gap-2 font-semibold">
            Solicitar avaliação <ArrowRight className="w-4 h-4" />
          </a>
        </Card>
      </div>
    </div>
  </section>
);

export const ProvaAutoridade = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Por que empresas escolhem a Acqualive
        </h2>
        <p className="text-lg text-muted-foreground">
          Somos uma marca brasileira dedicada à água e à saúde e bem-estar, com rede de atendimento em todo o país.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { valor: "+20 anos", texto: "de experiência em purificação de água" },
          { valor: "Rede nacional", texto: "de franqueados e assistência técnica" },
          { valor: "Instalação", texto: "e orientação de uso incluídas na avaliação" },
          { valor: "Suporte", texto: "e manutenção programada de refis" },
        ].map(({ valor, texto }) => (
          <Card key={valor} className="p-6 text-center border-border/70 shadow-soft">
            <p className="font-display text-2xl font-bold text-primary mb-2">{valor}</p>
            <p className="text-sm text-muted-foreground">{texto}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
