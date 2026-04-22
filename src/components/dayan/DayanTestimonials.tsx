import depoCleodete from "@/assets/dayan/depo-cleodete.png";
import depoIlane from "@/assets/dayan/depo-ilane.webp";
import depoMartin from "@/assets/dayan/depo-martin.png";
import depoFabio from "@/assets/dayan/depo-fabio.webp";
import depoVirginia from "@/assets/dayan/depo-virginia.png";
import depoAngelina from "@/assets/dayan/depo-angelina.png";

const TESTIMONIALS = [
  {
    name: "Maria Cleodete",
    city: "São Paulo / SP",
    text: "A instalação é prática e a água realmente fica sem o gosto horrível da água da torneira e senti a minha sede melhor saciada do que tomando a água mineral comprada.",
    img: depoCleodete,
  },
  {
    name: "Ilane da Silva Venturim",
    city: "Rio de Janeiro / RJ",
    text: "Sou carioca e a água que chega em minha casa é de baixa qualidade. Fiz um investimento em saúde, investi em um Acqualive e estou muito satisfeita com a minha escolha.",
    img: depoIlane,
  },
  {
    name: "Mártin Lavies",
    city: "Rio Grande do Sul / RS",
    text: "Uma das minhas maiores preocupações era a troca do refil. Me surpreendi: é simples, rápida e só acontece a cada vários meses. Não virou um problema, virou rotina.",
    img: depoMartin,
  },
  {
    name: "Fábio Renato Rodrigues",
    city: "Espírito Santo / ES",
    text: "No início eu estava um pouco resistente de comprar um Purificador Acqualive, mas como minha família vivia resfriada decidi tentar. Para minha surpresa nunca mais ficamos doentes. Parece brincadeira, mas não é.",
    img: depoFabio,
  },
  {
    name: "Virginia Dornelles",
    city: "Bahia / BA",
    text: "Estou muito satisfeita com o meu purificador. O design é lindo, o manejo muito fácil e a água realmente fica muito melhor. Super recomendo.",
    img: depoVirginia,
  },
  {
    name: "Angelina Sabino",
    city: "São Paulo / SP",
    text: "Quando vi o valor, achei alto. Depois que fiz as contas do quanto gastava com água mineral por mês, percebi que o filtro se paga sozinho. Hoje tenho água de qualidade todos os dias e ainda economizo.",
    img: depoAngelina,
  },
];

const DayanTestimonials = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[hsl(var(--ds-surface))]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7 dayan-reveal">
            <span className="ds-eyebrow text-[hsl(var(--ds-accent))]">
              <span className="dayan-num text-2xl not-italic mr-2">07</span>
              Avaliação de quem já trocou
            </span>
            <h2 className="ds-display mt-5 text-4xl lg:text-6xl text-[hsl(var(--ds-ink))] leading-tight">
              Quem entendeu a diferença,
              <br />
              <span className="ds-italic font-medium text-[hsl(var(--ds-blue-deep))]">
                não volta atrás.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--ds-line))] border border-[hsl(var(--ds-line))]">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bg-white p-8 lg:p-10 flex flex-col`}
            >
              <div className="flex items-center gap-1 text-[hsl(var(--ds-accent))] mb-5 text-sm">
                {"★★★★★"}
              </div>
              <blockquote className="ds-italic text-lg text-[hsl(var(--ds-ink))] leading-snug flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-[hsl(var(--ds-line))]">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover bg-[hsl(var(--ds-surface))]"
                />
                <div>
                  <div className="font-semibold text-sm text-[hsl(var(--ds-ink))]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[hsl(var(--ds-muted))] ds-eyebrow mt-0.5">
                    {t.city}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayanTestimonials;
