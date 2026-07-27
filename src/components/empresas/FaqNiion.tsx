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
  <section className="py-16 lg:py-24 bg-water-light">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {[
            {
              q: "Como funciona a instalação na empresa?",
              a: "A avaliação identifica o melhor ponto de instalação, próximo a um ponto de água e energia. A instalação é feita pela nossa equipe ou pelo franqueado da sua região, com orientação de uso para o time.",
            },
            {
              q: "E se a minha empresa tiver vários andares ou setores?",
              a: "Nesse caso indicamos mais de um equipamento, distribuídos conforme o fluxo de pessoas. A avaliação define quantos pontos fazem sentido para o seu consumo.",
            },
            {
              q: "Qual é a manutenção necessária?",
              a: "A manutenção é a troca programada dos refis, com periodicidade definida conforme o volume consumido. Avisamos com antecedência e cuidamos da troca.",
            },
            {
              q: "A água sai gelada?",
              a: "O Acqualive DUO entrega água natural e fresquinha, com duas opções de saída para atender diferentes preferências da equipe ao longo do dia.",
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
              className="bg-card border border-border/70 rounded-xl px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export const NiionClick = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="container">
      <Card className="overflow-hidden border-border/70 shadow-soft">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <div className="p-8 md:p-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Solução complementar
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              NIION CLICK: filtragem modular para pontos específicos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Para cozinhas industriais, máquinas de café e pontos de produção que precisam de água tratada
              antes do equipamento, o NIION CLICK oferece um sistema de refis de encaixe rápido, com troca
              simples e sem ferramentas.
            </p>
            <ul className="space-y-2 mb-7 text-sm text-muted-foreground">
              {[
                "Refis de troca rápida, sistema click",
                "Instalação sob bancada ou em linha",
                "Combina com o Acqualive DUO na mesma operação",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
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

          <div className="bg-muted/20 p-8 flex items-center justify-center">
            <img
              src={IMG.niionIlustra}
              alt="Sistema de filtragem NIION CLICK com quatro refis"
              className="w-full max-w-sm h-auto object-contain"
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
