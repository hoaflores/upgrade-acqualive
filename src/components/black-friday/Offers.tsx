import { useState } from "react";
import { OFFER_CARDS, brl, buyUrl, type OfferCard } from "./offers";
import { Product, Studio } from "./Scene";
import { BuyButton, WhatsAppLink } from "./shared";

/** Nome curto para o botão: "V Self Premium 10 L", "V10", "DUO Lite". */
const buyName = (card: OfferCard, label: string) => {
  if (card.id === "bebedouro") return label.split(" · ")[0];
  if (card.sizes.length > 1) return `${card.line} ${label.replace(" litros", " L")}`;
  return card.line;
};

/** Um cartão: escolhe 6 L ou 10 L (começa no de 10 L), a foto e o preço acompanham, e o botão leva ao produto certo. */
const Card = ({ card }: { card: OfferCard }) => {
  // começa sempre na versão de 10 litros (a última da lista)
  const [i, setI] = useState(card.sizes.length - 1);
  const size = card.sizes[i];
  const multi = card.sizes.length > 1;

  return (
    <Studio as="div" className="bf-card" light="right" data-reveal>
      <div className="bf-card__head">
        <h3 className="bf-card__line">{card.line} com</h3>
        <p className="bf-card__off num" aria-label={`R$ ${card.off} OFF`}>
          <span className="bf-card__rs">R$</span>
          <span className="bf-card__num">{card.off}</span>
          <span className="bf-card__offword">OFF</span>
        </p>
        {card.id !== "duolite" && (
          <p className="bf-card__extra">
            <span aria-hidden="true">+</span> {card.extra}
          </p>
        )}
      </div>

      <Product
        key={size.photo}
        className="bf-card__product bf-swap"
        src={size.photo}
        alt={`${card.line} ${multi ? size.label : ""}`.trim()}
        width={320}
        height={560}
      />

      <div className="bf-card__foot">
        {card.id === "duolite" && <p className="bf-card__note">{card.extra}.</p>}
        {card.note && <p className="bf-card__note">{card.note}</p>}

        {multi && (
          <div className="bf-volt bf-card__switch" role="group" aria-label={`Tamanho do ${card.line}`}>
            {card.sizes.map((s, k) => (
              <button key={s.label} type="button" aria-pressed={k === i} onClick={() => setI(k)}>
                {s.label}
              </button>
            ))}
          </div>
        )}

        <p className="bf-card__pricing num">
          <span className="bf-card__was">{brl(size.was)}</span>
          <span className="bf-card__price">{brl(size.price)}</span>
          <span className="bf-card__terms">em até 10x de {brl(size.price / 10, true)}</span>
        </p>

        <BuyButton
          href={buyUrl(size.handle, size.variantId)}
          product={size.handle}
          placement="outras-ofertas"
          label="Comprar agora"
          sub={`${buyName(card, size.label)} por ${brl(size.price)}`}
        />
        <WhatsAppLink placement="outras-ofertas" product={card.id} message={card.whatsappMessage} label="Tirar dúvidas no WhatsApp" />
      </div>
    </Studio>
  );
};

/** 4. Outras ofertas: cada cartão é uma miniatura das peças da campanha. */
export const Offers = () => (
  <section id="ofertas" className="bf-offers" aria-labelledby="offers-title" data-product="none">
    <div className="bf-wrap">
      <h2 id="offers-title" className="bf-h2" data-reveal>
        As outras ofertas da Black
      </h2>
      <div className="bf-offers__grid">
        {OFFER_CARDS.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  </section>
);
