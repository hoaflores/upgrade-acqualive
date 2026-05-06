import vSelf6L from "@/assets/dayan-vself-6l.png";
import vSelfPremium from "@/assets/dayan-vself-premium-10l.png";
import terracota from "@/assets/dayan-terracota.png";
import shower from "@/assets/dayan-shower-care.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP =
  "https://wa.me/555192928468?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20do%20Dr.%20Dayan%20Siebra%20e%20quero%20um%20Acqualive.";

const PRODUCTS = [
  {
    name: "Acqualive V Self Premium 10L",
    img: vSelf6L,
    line: "Compacto",
    price: "R$ 199,70",
    inst: "10x sem juros",
    badge: "Compacto",
  },
  {
    name: "Acqualive V-Self Premium 10L",
    img: vSelfPremium,
    line: "O mais vendido",
    price: "R$ 199,70",
    inst: "10x sem juros",
    badge: "Best-seller",
    highlight: true,
  },
  {
    name: "Acqualive Terracota",
    img: terracota,
    line: "A evolução do filtro de barro",
    price: "R$ 199,70",
    inst: "10x sem juros",
    badge: "Design",
  },
  {
    name: "Acqualive Shower Care",
    img: shower,
    line: "Filtro removedor de cloro do chuveiro",
    price: "R$ 199,70",
    inst: "10x sem juros",
    badge: "Pele e cabelo",
  },
];

const DayanOffer = () => {
  return (
    <section id="oferta" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Headline */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8 dayan-reveal">
            <span className="ds-eyebrow text-[hsl(var(--ds-accent))]">
              <span className="dayan-num text-2xl not-italic mr-2">08</span>
              A oferta
            </span>
            <h2 className="ds-display mt-5 text-4xl lg:text-6xl text-[hsl(var(--ds-ink))] leading-tight">
              Não é um filtro.
              <br />
              É uma{" "}
              <span className="ds-italic font-medium text-[hsl(var(--ds-blue-deep))]">
                decisão de saúde
              </span>
              <br />
              para toda a vida!
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-12 dayan-reveal dayan-reveal-delay-1">
            <p className="text-base lg:text-lg text-[hsl(var(--ds-ink-soft))] leading-relaxed">
              Em até <strong>10x sem juros</strong>, frete grátis (consulte
              regiões disponíveis), refis com cadência inteligente e suporte.
              Escolha o seu modelo abaixo.
            </p>
          </div>
        </div>

        {/* Produtos: ordem oficial */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--ds-line))] border border-[hsl(var(--ds-line))] mb-16">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} relative bg-white flex flex-col group ${
                p.highlight ? "lg:scale-[1.02] lg:z-10 ring-1 ring-[hsl(var(--ds-blue-deep))]" : ""
              }`}
            >
              {p.badge && (
                <span
                  className={`absolute top-4 left-4 z-10 ds-eyebrow px-3 py-1.5 rounded-full text-[10px] ${
                    p.highlight
                      ? "bg-[hsl(var(--ds-accent))] text-white"
                      : "bg-[hsl(var(--ds-surface))] text-[hsl(var(--ds-ink-soft))]"
                  }`}
                >
                  {p.badge}
                </span>
              )}
              <div className="aspect-square bg-[hsl(var(--ds-surface))] p-8 flex items-center justify-center overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <span className="ds-eyebrow text-[hsl(var(--ds-muted))] text-[10px]">
                  {p.line}
                </span>
                <h3 className="ds-display text-lg lg:text-xl mt-2 text-[hsl(var(--ds-ink))] leading-tight">
                  {p.name}
                </h3>
                <div className="mt-4">
                  <div className="text-xs text-[hsl(var(--ds-muted))]">
                    a partir de
                  </div>
                  <div className="ds-display text-2xl text-[hsl(var(--ds-blue-deep))]">
                    {p.price}
                  </div>
                  <div className="text-xs text-[hsl(var(--ds-muted))] mt-1">
                    {p.inst}
                  </div>
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-colors ${
                    p.highlight
                      ? "bg-[hsl(var(--ds-ink))] text-white hover:bg-[hsl(var(--ds-blue-deep))]"
                      : "bg-[hsl(var(--ds-surface))] text-[hsl(var(--ds-ink))] hover:bg-[hsl(var(--ds-line))]"
                  }`}
                >
                  Clique aqui para aplicar seu cupom →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Faixa final */}
        <div className="dayan-reveal relative ds-dark p-10 lg:p-16 rounded-sm overflow-hidden dayan-grain">
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="ds-eyebrow text-white/60">
                Última palavra do Dr. Dayan
              </span>
              <p className="ds-italic text-2xl lg:text-4xl text-white mt-4 leading-tight">
                "Você vai gastar com remédio depois. Ou com água certa agora.
                A escolha é sua."
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[hsl(var(--ds-accent))] text-white px-8 py-5 rounded-full font-semibold hover:bg-[hsl(21_89%_48%)] transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Falar com um especialista
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-5 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Receber orçamento por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayanOffer;
