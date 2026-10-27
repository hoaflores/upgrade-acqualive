import { RATINGS, TESTIMONIALS } from "./offers";

/** Fatos publicados pela própria Acqualive (site, páginas de produto e Portal Científico). */
const FACTS = [
  { big: "150 mil", line: "famílias já bebem água Acqualive no Brasil" },
  { big: `${RATINGS.terracota.stars} de 5`, line: `no Terracota, em ${RATINGS.terracota.count} avaliações na loja` },
  { big: "99%", line: "de redução dos agrotóxicos avaliados, em ensaio da Unicamp" },
  { big: "Inmetro A", line: "classe A em eficiência bacteriológica" },
];

/**
 * Foto do cliente. Enquanto a foto original não chega, mostra as iniciais num círculo
 * (não usamos rosto gerado por IA ao lado do nome de um cliente real).
 */
const Avatar = ({ name, photo }: { name: string; photo: string }) => {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return photo ? (
    <img className="bf-avatar" src={photo} alt={`Foto de ${name}`} width={56} height={56} loading="lazy" />
  ) : (
    <span className="bf-avatar bf-avatar--empty" aria-hidden="true">
      {initials}
    </span>
  );
};

/** 5. Prova: números grandes no condensado da campanha e três clientes respondendo às objeções de preço, refil e uso. */
export const Proof = () => (
  <section className="bf-proof" aria-labelledby="proof-title">
    <div className="bf-wrap">
      <h2 id="proof-title" className="bf-h2" data-reveal>
        Quem tem, recomenda
      </h2>
      <ul className="bf-proof__facts">
        {FACTS.map((f) => (
          <li key={f.big} data-reveal>
            <span className="bf-proof__big num">{f.big}</span>
            <span className="bf-proof__line">{f.line}</span>
          </li>
        ))}
      </ul>

      <ul className="bf-quotes">
        {TESTIMONIALS.map((t) => (
          <li key={t.name} className="bf-quotes__item" data-reveal>
            <figure>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <Avatar name={t.name} photo={t.photo} />
                <span>
                  <b>{t.name}</b> Cliente Acqualive, {t.place}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
