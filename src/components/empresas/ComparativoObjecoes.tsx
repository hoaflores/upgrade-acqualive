import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Minus, ArrowRight } from "lucide-react";

type Nivel = "sim" | "nao" | "parcial";

const Marca = ({ nivel }: { nivel: Nivel }) => {
  if (nivel === "sim") return <Check className="w-4 h-4 mx-auto text-primary" aria-label="Sim" />;
  if (nivel === "parcial") return <Minus className="w-4 h-4 mx-auto text-muted-foreground" aria-label="Parcial" />;
  return <X className="w-4 h-4 mx-auto text-destructive/70" aria-label="Não" />;
};

const COLUNAS = ["Filtro comum", "Galão", "Garrafas", "Bebedouro tradicional", "Acqualive DUO"];

const LINHAS: { criterio: string; valores: Nivel[] }[] = [
  { criterio: "Água natural", valores: ["sim", "sim", "sim", "sim", "sim"] },
  { criterio: "Água gelada", valores: ["nao", "parcial", "parcial", "sim", "sim"] },
  { criterio: "Sem dependência de entregas", valores: ["sim", "nao", "nao", "parcial", "sim"] },
  { criterio: "Sem estoque ocupando espaço", valores: ["sim", "nao", "nao", "parcial", "sim"] },
  { criterio: "Sem geração de embalagens", valores: ["sim", "nao", "nao", "parcial", "sim"] },
  { criterio: "Disponibilidade contínua", valores: ["parcial", "nao", "nao", "parcial", "sim"] },
  { criterio: "Experiência premium para clientes", valores: ["nao", "nao", "parcial", "nao", "sim"] },
  { criterio: "Manutenção programada e previsível", valores: ["parcial", "nao", "nao", "parcial", "sim"] },
];

export const ComparativoSolucoes = () => (
  <section id="comparativo" className="py-20 lg:py-28 bg-water-light">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
          <span className="h-px w-8 bg-current opacity-50" />
          Comparativo
          <span className="h-px w-8 bg-current opacity-50" />
        </span>
        <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
          O preço do galão não é o custo total da sua solução de água
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Compare o Acqualive DUO com as alternativas que a sua empresa já usa hoje, considerando rotina,
          espaço e experiência, e não apenas o valor por litro.
        </p>
      </div>

      <div className="max-w-5xl mx-auto rounded-[2rem] border border-border/60 bg-card shadow-elevated overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-gradient-water text-primary-foreground">
                <th className="text-left font-display font-semibold px-6 py-5">Critério</th>
                {COLUNAS.map((c) => (
                  <th
                    key={c}
                    className={`px-4 py-5 text-center font-display font-semibold ${
                      c === "Acqualive DUO" ? "text-accent" : "text-primary-foreground/80"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LINHAS.map(({ criterio, valores }, i) => (
                <tr key={criterio} className={i % 2 ? "bg-muted/30" : "bg-card"}>
                  <td className="px-6 py-4 text-foreground font-medium">{criterio}</td>
                  {valores.map((v, idx) => (
                    <td
                      key={`${criterio}-${idx}`}
                      className={`px-4 py-4 text-center ${idx === valores.length - 1 ? "bg-primary/5" : ""}`}
                    >
                      <Marca nivel={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="max-w-3xl mx-auto text-xs text-muted-foreground text-center leading-relaxed mt-6">
        Além do valor por litro, o galão envolve tempo de compra, recebimento, armazenamento, movimentação,
        descarte e o risco de faltar água no meio do expediente.
      </p>

      <div className="flex justify-center mt-9">
        <Button variant="cta" size="lg" asChild className="group shadow-2xl">
          <a href="#avaliacao">
            <span>QUERO CONHECER O DUO PARA MINHA EMPRESA</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

const OBJECOES = [
  {
    titulo: "É mais caro do que continuar usando galões",
    resposta:
      "A conta do galão não termina no preço do galão. Somando entregas, estoque, tempo da equipe e desperdício, o custo mensal costuma ser maior e menos previsível do que o do Acqualive DUO.",
  },
  {
    titulo: "Vou precisar fazer obra na empresa",
    resposta:
      "Na maioria dos casos não. Cada ambiente é avaliado antes da recomendação e a empresa recebe orientação clara sobre o ponto de água e energia necessário para a instalação.",
  },
  {
    titulo: "Um filtro comum já atende",
    resposta:
      "O DUO não entrega apenas filtragem. Ele agrega água gelada e natural no mesmo ponto, design, praticidade e uma solução pensada para o uso intenso do dia a dia.",
  },
  {
    titulo: "Galão é mais simples",
    resposta:
      "Galão exige compra, recebimento, armazenamento, troca e descarte. São tarefas invisíveis no orçamento, mas que consomem tempo da equipe todos os meses.",
  },
  {
    titulo: "Meus clientes não vão perceber a diferença",
    resposta:
      "A água faz parte da experiência, principalmente em restaurantes, clínicas, escritórios e espaços premium. O cuidado é percebido na soma dos detalhes.",
  },
  {
    titulo: "E se o equipamento apresentar algum problema?",
    resposta:
      "A Acqualive tem rede de franqueados e assistência técnica em todo o país, com manutenção programada e suporte durante toda a operação.",
  },
];

export const QuebraObjecoes = () => (
  <section id="objecoes" className="py-20 lg:py-28 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
          <span className="h-px w-8 bg-current opacity-50" />
          Sem letras miúdas
          <span className="h-px w-8 bg-current opacity-50" />
        </span>
        <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight">
          As dúvidas que travam a decisão, respondidas direto
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {OBJECOES.map(({ titulo, resposta }) => (
          <Card key={titulo} className="p-7 rounded-3xl border-border/60 bg-card shadow-soft">
            <p className="font-display text-lg font-semibold text-foreground leading-snug mb-3">{titulo}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{resposta}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
