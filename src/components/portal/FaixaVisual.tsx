import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  src: string;
  alt: string;
  titulo: string;
  legenda: string;
  etiqueta?: string;
  altura?: string;
}

/** Faixa editorial de imagem em largura total, com sobreposição e texto curto. */
const FaixaVisual = ({ src, alt, titulo, legenda, etiqueta, altura = "h-[320px] md:h-[440px]" }: Props) => (
  <section aria-label={titulo} className="relative">
    <ScrollReveal>
      <div className={`relative w-full overflow-hidden ${altura}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-[1200ms] ease-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--pc-blue)/0.85)] via-[hsl(var(--pc-blue)/0.45)] to-transparent" />
        <div className="container relative flex h-full items-center">
          <div className="max-w-xl text-white">
            {etiqueta && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">{etiqueta}</p>
            )}
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight md:text-4xl">{titulo}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">{legenda}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default FaixaVisual;
