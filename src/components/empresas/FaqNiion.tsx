import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { IMG, WHATSAPP_EMPRESAS } from "./dados";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const FaqEmpresas = () => (
  <section id="faq" className="py-20 lg:py-28 bg-water-light">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-8 bg-current opacity-50" />
            Dúvidas frequentes
            <span className="h-px w-8 bg-current opacity-50" />
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight">
            Perguntas frequentes
          </h2>
        </div>


        <Accordion type="single" collapsible className="space-y-3">
          {[
            {
              q: "O DUO oferece água gelada e natural?",
              a: "Sim. O Acqualive DUO entrega água gelada e água natural no mesmo equipamento, com saídas independentes para atender as preferências da equipe ao longo do dia.",
            },
            {
              q: "Que tipos de empresa podem utilizar o DUO?",
              a: "Restaurantes, cafeterias, academias e studios, clínicas e consultórios, escritórios, coworkings, indústrias e operações comerciais em geral. A configuração muda conforme o fluxo de pessoas.",
            },
            {
              q: "Quantas pessoas o equipamento atende?",
              a: "Depende do fluxo e do horário de pico. Na avaliação analisamos o consumo estimado e indicamos quantos equipamentos fazem sentido para atender sem fila e sem falta de água.",
            },
            {
              q: "É possível instalar mais de um DUO?",
              a: "Sim. Em empresas com vários andares, setores ou unidades indicamos mais de um equipamento, distribuídos conforme o fluxo de pessoas.",
            },
            {
              q: "O equipamento precisa de ponto de água? A instalação exige obra?",
              a: "O DUO é ligado a um ponto de água e a um ponto de energia. Na maioria dos casos não é necessária obra, apenas a adequação do ponto quando ele não existe no local escolhido.",
            },
            {
              q: "Como funciona a instalação e onde o DUO pode ficar?",
              a: "A avaliação identifica o melhor ponto, próximo a água e energia, em copas, recepções, salões, academias ou áreas de produção. A instalação é feita pela nossa equipe ou pelo franqueado da sua região, com orientação de uso para o time.",
            },
            {
              q: "Como funciona a manutenção e a troca do refil?",
              a: "A manutenção é a troca programada dos refis, com periodicidade definida conforme o volume consumido. Avisamos com antecedência e cuidamos da troca.",
            },
            {
              q: "A Acqualive oferece suporte depois da instalação?",
              a: "Sim. São mais de 20 anos de mercado, com rede de franqueados e assistência técnica em todo o país acompanhando a operação.",
            },
            {
              q: "Qual é o investimento?",
              a: "O valor depende do número de equipamentos, do tipo de instalação e do volume de consumo. Por isso trabalhamos com avaliação gratuita e proposta personalizada.",
            },
            {
              q: "Vocês atendem a minha cidade?",
              a: "A Acqualive tem rede de franqueados e assistência técnica em todo o país. Envie a sua cidade no formulário e confirmamos o atendimento na sua região.",
            },
          ].map(({ q, a }) => (

            <AccordionItem
              key={q}
              value={q}
              className="bg-card border border-border/60 rounded-2xl px-6 shadow-soft data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground tracking-tight py-5">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{a}</AccordionContent>
            </AccordionItem>

          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export const NiionClick = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="container">
      <Card className="overflow-hidden rounded-[2rem] border-border/60 shadow-elevated">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <div className="p-9 md:p-12">
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent mb-5">
              <span className="h-px w-8 bg-current opacity-50" />
              Solução complementar
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight mb-5">
              NIION CLICK: filtragem modular para pontos específicos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Para cozinhas industriais, máquinas de café e pontos de produção que precisam de água tratada
              antes do equipamento, o NIION CLICK oferece um sistema de refis de encaixe rápido, com troca
              simples e sem ferramentas.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
              {[
                "Refis de troca rápida, sistema click",
                "Instalação sob bancada ou em linha",
                "Combina com o Acqualive DUO na mesma operação",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" asChild className="group">
              <a href={WHATSAPP_EMPRESAS} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-4 h-4" />
                <span>Falar sobre o NIION CLICK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="relative bg-gradient-water p-10 flex items-center justify-center min-h-[320px]">
            <div aria-hidden className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-accent/15 blur-3xl" />
            <img
              src={IMG.niionIlustra}
              alt="Sistema de filtragem NIION CLICK com quatro refis"
              className="relative w-full max-w-sm h-auto object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
    </div>
  </section>
);


export const StickyCTAEmpresas = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur border-t border-border p-3 flex gap-2">
    <Button variant="cta" asChild className="flex-1 text-xs px-2">
      <a href="#avaliacao">SOLICITAR AVALIAÇÃO</a>
    </Button>
    <Button variant="outline" size="icon" asChild className="flex-shrink-0">
      <a href={WHATSAPP_EMPRESAS} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <WhatsAppIcon className="w-5 h-5" />
      </a>
    </Button>
  </div>
);
