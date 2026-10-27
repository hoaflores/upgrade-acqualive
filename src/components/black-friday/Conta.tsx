import { CUTOUTS, DUO, REFIL, TERRACOTA, brl } from "./offers";
import { SCENES, type Choice, type Lead } from "./ProductScene";
import { Studio } from "./Scene";
import { BuyButton, WhatsAppLink } from "./shared";

const CONTA = {
  terracota: {
    title: (
      <>
        Na Black, o Terracota chega com <em>água alcalina até 2028</em>
      </>
    ),
    gift: { src: CUTOUTS.caixaNanno, width: 483, height: 396, double: true },
    giftName: `2 × ${REFIL.nannoV.name}`,
    giftValue: TERRACOTA.savings,
    note: TERRACOTA.channelNote,
    specs: [
      ["6 litros", "De água alcalina, sem cloro e rica em magnésio."],
      ["Barro e madeira", "Em terracota ou cinza. Não usa energia elétrica."],
      ["Pronto para usar!", "Monte em menos de 5 minutos e já tenha água alcalina."],
    ],
  },
  duo: {
    title: (
      <>
        Na Black, o DUO chega com <em>o refil da próxima troca</em>
      </>
    ),
    gift: { src: CUTOUTS.refisDuo, width: 785, height: 1138, double: false },
    giftName: REFIL.duo.name,
    giftValue: REFIL.duo.price,
    note: "",
    specs: [
      ["Natural ou gelada", "Um botão para cada: a água sai na temperatura que você quiser, no mesmo aparelho."],
      ["Classe A Inmetro", "Ultrafiltração e Tecnologia TriWay."],
      /* vazão nominal da ficha técnica da loja: 50 L/h */
      ["Sempre pronta para beber", "Vazão de 50 litros por hora, para a casa toda, a clínica ou o escritório."],
    ],
  },
} as const;

/** 2. A conta do produto principal: produto + brinde = quanto vale e quanto custa. No mesmo estúdio da campanha. */
export const Conta = ({ product, ...c }: { product: Lead } & Choice) => {
  const d = SCENES[product];
  const k = CONTA[product];
  const main = d.main(c);
  const buy = d.buy(c);
  const name = product === "terracota" ? (c.color === "gray" ? "Terracota Gray" : "Terracota") : `DUO ${c.volt}`;
  const price = product === "terracota" ? TERRACOTA.price : DUO.price;

  return (
    <Studio id={product} className="bf-conta" light="right" aria-labelledby="conta-title" data-product={product}>
      <div className="bf-wrap">
        <h2 id="conta-title" className="bf-h2" data-reveal>
          {k.title}
        </h2>

        <div className={`bf-conta__sum bf-conta__sum--${product}`} data-reveal>
          <figure className="bf-conta__item">
            <span className="bf-conta__img bf-conta__img--main">
              <img src={main.src} alt="" width={main.width} height={main.height} loading="lazy" />
            </span>
            <figcaption>
              <span className="bf-conta__name">{name}</span>
              <span className="bf-conta__value num">{brl(price)}</span>
            </figcaption>
          </figure>

          <span className="bf-conta__op" aria-hidden="true">
            +
          </span>

          <figure className="bf-conta__item">
            <span className={`bf-conta__img bf-conta__img--gift ${k.gift.double ? "is-double" : ""}`}>
              <img src={k.gift.src} alt="" width={k.gift.width} height={k.gift.height} loading="lazy" />
              {k.gift.double && <img src={k.gift.src} alt="" width={k.gift.width} height={k.gift.height} loading="lazy" />}
            </span>
            <figcaption>
              <span className="bf-conta__name">{k.giftName}</span>
              <span className="bf-conta__value num">
                <s>{brl(k.giftValue)}</s> <b>grátis</b>
              </span>
            </figcaption>
          </figure>

          <span className="bf-conta__op" aria-hidden="true">
            =
          </span>

          <div className="bf-conta__result">
            <p className="bf-conta__worth num">
              <s>{brl(price + k.giftValue)}</s> em produtos
            </p>
            <p className="bf-conta__pay num">
              <span>por</span> {brl(price)}
            </p>
            <p className="bf-conta__terms num">
              Em até {d.installments}x de {brl(price / d.installments, true)} sem juros. {k.note}
            </p>
            <div className="bf-ctas">
              <BuyButton
                href={buy.href}
                product={buy.product}
                placement="conta"
                label={buy.label}
                sub={`${brl(price)} + ${product === "terracota" ? "2 kits grátis" : "Kit Refil DUO grátis"}`}
              />
              <WhatsAppLink placement="conta" product={product} message={d.whatsapp(c)} />
            </div>
          </div>
        </div>

        <ul className="bf-specs" data-reveal>
          {k.specs.map(([b, t]) => (
            <li key={b}>
              <b>{b}</b> {t}
            </li>
          ))}
        </ul>
      </div>
    </Studio>
  );
};
