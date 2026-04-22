import depoLyoto from "@/assets/depo-lyoto.png";
import depoPaloma from "@/assets/depo-paloma.png";
import depoDalle from "@/assets/depo-dalle-laste.png";

const TESTIMONIALS = [
  {
    name: "Maria Cleodete",
    city: "São Paulo / SP",
    text: "Em três semanas meu intestino desinflamou. Acordo sem aquela boca seca pesada. É outra água, outro corpo.",
    img: null,
  },
  {
    name: "Lyoto Machida",
    city: "Atleta UFC",
    text: "Hidratação para mim é performance. O Acqualive entrou na minha rotina e não saiu mais.",
    img: depoLyoto,
  },
  {
    name: "Mártin S.",
    city: "Porto Alegre / RS",
    text: "Tinha pedra no rim recorrente. Trocamos a água em casa. Dois anos sem crise. Não é coincidência.",
    img: null,
  },
  {
    name: "Paloma Bernardi",
    city: "Atriz",
    text: "A pele responde em poucos dias. A água certa é o cosmético mais barato e mais poderoso que existe.",
    img: depoPaloma,
  },
  {
    name: "Fábio L.",
    city: "Vitória / ES",
    text: "Comprei pra mim. Em um mês minha mãe queria um. Hoje tem nas casas de toda a família.",
    img: null,
  },
  {
    name: "Délle Lasté",
    city: "Empresária",
    text: "Investi em tudo: suplemento, dieta, treino. A virada veio quando arrumei a água. Simples assim.",
    img: depoDalle,
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
              150 mil famílias
            </span>
            <h2 className="ds-display mt-5 text-5xl lg:text-7xl text-[hsl(var(--ds-ink))]">
              Quem já trocou
              <br />
              <span className="ds-italic font-medium text-[hsl(var(--ds-blue-deep))]">
                não volta.
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
              <blockquote className="ds-italic text-xl text-[hsl(var(--ds-ink))] leading-snug flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-[hsl(var(--ds-line))]">
                {t.img ? (
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--ds-blue-deep))] text-white flex items-center justify-center font-semibold">
                    {t.name[0]}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-[hsl(var(--ds-ink))]">
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
