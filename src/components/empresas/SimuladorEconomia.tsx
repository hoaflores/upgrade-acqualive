import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";

const PRECO_GALAO = 22;

const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

const SimuladorEconomia = () => {
  const [galoes, setGaloes] = useState(30);

  const { gastoMes, gastoAno, trocas } = useMemo(
    () => ({
      gastoMes: galoes * PRECO_GALAO,
      gastoAno: galoes * PRECO_GALAO * 12,
      trocas: galoes * 12,
    }),
    [galoes],
  );

  return (
    <section id="simulador" className="py-16 lg:py-24 bg-water-light">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-5">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Simulador de consumo</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quanto a sua empresa gasta com galões por ano?
          </h2>
          <p className="text-lg text-muted-foreground">
            Ajuste o consumo mensal e veja o tamanho do custo que hoje passa despercebido.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-7 md:p-10 shadow-elevated border-border/70">
          <label className="block text-sm font-semibold text-foreground mb-4">
            Galões de 20 litros consumidos por mês:{" "}
            <span className="text-primary font-bold text-lg">{galoes}</span>
          </label>
          <Slider
            value={[galoes]}
            onValueChange={(v) => setGaloes(v[0])}
            min={5}
            max={200}
            step={5}
            className="mb-8"
          />

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Gasto por mês", valor: formatBRL(gastoMes) },
              { label: "Gasto por ano", valor: formatBRL(gastoAno), destaque: true },
              { label: "Trocas de galão por ano", valor: `${trocas}` },
            ].map(({ label, valor, destaque }) => (
              <div
                key={label}
                className={`rounded-xl p-5 text-center border ${
                  destaque ? "bg-gradient-water text-primary-foreground border-transparent" : "bg-muted/20 border-border/70"
                }`}
              >
                <p className={`text-xs uppercase tracking-wide mb-1 ${destaque ? "opacity-80" : "text-muted-foreground"}`}>
                  {label}
                </p>
                <p className="font-display text-2xl font-bold">{valor}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mb-6">
            Estimativa baseada em um valor médio de {formatBRL(PRECO_GALAO)} por galão de 20 litros. O valor
            real varia conforme a região e o fornecedor, e não considera o tempo da equipe gasto com pedidos e trocas.
          </p>

          <div className="text-center">
            <Button variant="cta" size="lg" asChild className="group">
              <a href="#avaliacao">
                <span>QUERO UMA AVALIAÇÃO PARA MINHA EMPRESA</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SimuladorEconomia;
