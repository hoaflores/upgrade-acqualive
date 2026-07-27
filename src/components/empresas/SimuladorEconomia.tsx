import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_EMPRESAS } from "./dados";

const PRECO_GALAO = 22;

const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

const SimuladorEconomia = () => {
  const [galoes, setGaloes] = useState(30);

  const { gastoMes, gastoAno, trocas, litrosAno } = useMemo(
    () => ({
      gastoMes: galoes * PRECO_GALAO,
      gastoAno: galoes * PRECO_GALAO * 12,
      trocas: galoes * 12,
      litrosAno: galoes * 20 * 12,
    }),
    [galoes],
  );

  const linkSimulacao = useMemo(() => {
    const base = WHATSAPP_EMPRESAS.split("?")[0];
    const texto =
      `Olá! Fiz a simulação no site da Acqualive Empresas: consumimos cerca de ${galoes} galões de 20 litros por mês, ` +
      `o que dá aproximadamente ${formatBRL(gastoAno)} por ano e ${trocas} trocas de galão. ` +
      `Quero receber uma proposta do Acqualive DUO para a minha empresa.`;
    return `${base}?text=${encodeURIComponent(texto)}`;
  }, [galoes, gastoAno, trocas]);

  return (
    <section id="simulador" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            <Calculator className="w-4 h-4" />
            Simulador de consumo
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
            Quanto a sua empresa gasta com galões por ano?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ajuste o consumo mensal e veja o tamanho do custo que hoje passa despercebido no seu orçamento.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div aria-hidden className="absolute -inset-3 rounded-[2.5rem] border border-primary/10" />
          <div className="relative rounded-[2rem] border border-border/60 bg-card p-8 md:p-11 shadow-elevated">
            <label className="block text-sm font-medium text-muted-foreground mb-5">
              Galões de 20 litros consumidos por mês:{" "}
              <span className="font-display text-2xl font-bold text-foreground align-middle ml-1">{galoes}</span>
            </label>
            <Slider
              value={[galoes]}
              onValueChange={(v) => setGaloes(v[0])}
              min={5}
              max={200}
              step={5}
              className="mb-10"
            />

            <div className="grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-border/60 bg-border/60 mb-8">
              {[
                { label: "Gasto por mês", valor: formatBRL(gastoMes) },
                { label: "Gasto por ano", valor: formatBRL(gastoAno), destaque: true },
                { label: "Litros carregados por ano", valor: `${litrosAno.toLocaleString("pt-BR")} L` },
              ].map(({ label, valor, destaque }) => (
                <div
                  key={label}
                  className={`p-7 text-center ${destaque ? "bg-gradient-water text-primary-foreground" : "bg-card"}`}
                >
                  <p
                    className={`text-[10px] uppercase tracking-[0.2em] mb-2 ${
                      destaque ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </p>
                  <p className="font-display text-3xl font-bold tracking-tight">{valor}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center leading-relaxed mb-7 max-w-xl mx-auto">
              Estimativa baseada em um valor médio de {formatBRL(PRECO_GALAO)} por galão de 20 litros. O valor
              real varia conforme a região e o fornecedor, e não considera o tempo da equipe gasto com pedidos e trocas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" asChild className="group shadow-2xl">
                <a href="#avaliacao">
                  <span>QUERO UMA AVALIAÇÃO PARA MINHA EMPRESA</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/30 text-primary hover:bg-primary/5">
                <a href={linkSimulacao} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  <span>Receber esta simulação no WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimuladorEconomia;
