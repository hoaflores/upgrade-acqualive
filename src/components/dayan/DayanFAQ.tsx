import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "Água alcalina não desregula o suco gástrico do estômago?",
    a: "Não. O estômago se ajusta em segundos. O que ele rejeita é cloro, metal pesado e microplástico. Água alcalina ingerida fora das refeições age no intestino e na corrente sanguínea, onde o pH levemente básico é exatamente o que o seu corpo busca o tempo todo.",
  },
  {
    q: "Por que pagar por um filtro se a água da torneira já é potável?",
    a: "Potável significa que não te mata hoje. Não significa que te mantém saudável amanhã. Saneamento e saúde celular são conversas diferentes. O Acqualive resolve a segunda.",
  },
  {
    q: "Quanto tempo dura o equipamento e os refis?",
    a: "O equipamento dura cerca de 10 anos com manutenção. Os refis são trocados em cadência inteligente, você recebe lembretes e nunca fica sem.",
  },
  {
    q: "Tem garantia, e se eu não me adaptar?",
    a: "Sim, garantia de fábrica e suporte vitalício do time Acqualive. A imensa maioria dos clientes percebe diferença na primeira semana. Caso algo não esteja ok, o suporte resolve sem burocracia.",
  },
  {
    q: "Como funciona a instalação?",
    a: "É simples e o suporte te orienta passo a passo. A maioria dos modelos é de bancada, ligado direto à torneira. Não exige obra.",
  },
  {
    q: "Posso parcelar?",
    a: "Sim. Em até 10x sem juros no cartão. Frete grátis (consulte regiões disponíveis).",
  },
];

const DayanFAQ = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-6 dayan-reveal">
            <span className="ds-eyebrow text-[hsl(var(--ds-accent))]">
              <span className="dayan-num text-2xl not-italic mr-2">09</span>
              Perguntas honestas
            </span>
            <h2 className="ds-display mt-5 text-3xl lg:text-5xl text-[hsl(var(--ds-ink))] leading-tight">
              O que meus pacientes
              <br />
              <span className="ds-italic font-medium">
                sempre me perguntam.
              </span>
            </h2>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="dayan-reveal border-t border-[hsl(var(--ds-line))]"
        >
          {ITEMS.map((it, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-[hsl(var(--ds-line))]"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline">
                <span className="flex items-baseline gap-4 pr-4">
                  <span className="dayan-num text-base text-[hsl(var(--ds-accent))] hidden sm:inline">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="ds-display text-xl lg:text-2xl text-[hsl(var(--ds-ink))]">
                    {it.q}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base lg:text-lg text-[hsl(var(--ds-ink-soft))] leading-relaxed pl-0 sm:pl-10">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default DayanFAQ;
