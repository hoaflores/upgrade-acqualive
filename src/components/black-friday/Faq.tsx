import type { ReactNode } from "react";
import { CAMPAIGN, DUO, REFIL, TERRACOTA, brl } from "./offers";

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "Até quando vale a Black Friday?",
    a: `Até ${CAMPAIGN.endsLabel} de 2026 ou enquanto durarem os estoques promocionais, o que acontecer primeiro.`,
  },
  {
    q: "Como recebo os kits de refil grátis do Terracota?",
    a: `Na compra do Terracota ou do Terracota Gray pelo site, você ganha dois ${REFIL.nannoV.name}, sem custo. São ${brl(
      TERRACOTA.savings,
    )} em refil, o suficiente para as trocas do primeiro ano.`,
  },
  {
    q: "De quanto em quanto tempo troco o refil?",
    a: "No Terracota e na linha V, em média a cada 6 meses. No DUO e no DUO Lite, a cada 6 meses ou 5.000 litros, o que vier primeiro.",
  },
  {
    q: "O DUO precisa de instalação?",
    a: `Ele vai na bancada ou na parede e precisa de uma tomada ${DUO.variants.map((v) => v.label).join(" ou ")}, porque gela a água com compressor. Pelo WhatsApp, um especialista ajuda a escolher o melhor ponto da sua cozinha ou do seu consultório.`,
  },
  {
    q: "Os brindes vêm no mesmo pedido?",
    a: "Sim. Na compra do Terracota ou do DUO pelo site, os kits de refil grátis entram no mesmo pedido e são enviados junto com o purificador.",
  },
  {
    q: "Como posso pagar?",
    a: "Em até 10x sem juros no cartão de crédito, ou com 5% de desconto no Pix ou no boleto.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "Depende do seu CEP: ao informar o CEP na página do produto ou no carrinho, aparecem o frete e o prazo para a sua região. O prazo conta a partir da emissão da nota fiscal. No cartão, a aprovação leva até 2 dias úteis; no boleto, a confirmação leva até 3 dias úteis. Se for presente de fim de ano, vale comprar com antecedência.",
  },
  {
    q: "E se eu me arrepender?",
    a: "Produto novo, sem uso e na embalagem original pode ser trocado em até 7 dias corridos depois do recebimento. É só falar com o pós-venda pelo sac@acqualive.com.br.",
  },
  {
    q: "Compro pelo WhatsApp ou pelo site?",
    a: "Pelos dois. No WhatsApp, um especialista tira suas dúvidas e fecha o pedido com a condição Black. No site, você finaliza a compra sozinho.",
  },
];

/** 6. Dúvidas: acordeão escuro, a primeira aberta. */
export const Faq = () => (
  <section className="bf-faq" aria-labelledby="faq-title">
    <div className="bf-wrap bf-faq__grid">
      <h2 id="faq-title" className="bf-h2" data-reveal>
        Dúvidas da Black
      </h2>
      <div className="bf-faq__list">
        {FAQ.map((item, i) => (
          <details key={item.q} className="bf-faq__item" open={i === 0}>
            <summary>
              <span>{item.q}</span>
              <span className="bf-faq__icon" aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
