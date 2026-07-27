import { Quote } from "lucide-react";
import vitta from "@/assets/logos/vitta.jpg.asset.json";
import raw from "@/assets/logos/raw.jpg.asset.json";
import marioReis from "@/assets/logos/mario-reis.jpg.asset.json";
import urbanFarmcy from "@/assets/logos/urban-farmcy.jpg.asset.json";
import palomaTusset from "@/assets/logos/paloma-tusset.jpg.asset.json";
import dalleLaste from "@/assets/logos/dalle-laste.png.asset.json";
import galoCinza from "@/assets/logos/galo-cinza.jpg.asset.json";
import casaViva from "@/assets/logos/casa-viva.jpg.asset.json";
import williamSons from "@/assets/logos/william-sons.webp.asset.json";
import synergy from "@/assets/logos/synergy.jpg.asset.json";

const MARCAS = [
  { nome: "Clínica Dalle Laste", src: dalleLaste.url },
  { nome: "Vitta Centro de Bem-Estar Físico", src: vitta.url },
  { nome: "William & Sons Coffee Co.", src: williamSons.url },
  { nome: "Synergy Centro de Treinamento", src: synergy.url },
  { nome: "Restaurante Raw", src: raw.url },
  { nome: "Academia Mário Reis Jiu-Jitsu Team", src: marioReis.url },
  { nome: "Urban Farmcy", src: urbanFarmcy.url },
  { nome: "Paloma Tusset Nutrição Funcional", src: palomaTusset.url },
  { nome: "Restaurante Galo Cinza", src: galoCinza.url },
  { nome: "Casa Vivá", src: casaViva.url },
];

const DEPOIMENTOS = [
  {
    texto:
      "A Acqualive já hidrata todos os profissionais e pacientes da Clínica Dalle Laste há 10 anos.",
    empresa: "Clínica Samuel Dalle Laste",
    src: dalleLaste.url,
  },
  {
    texto:
      "Pra mim a Acqualive foi um divisor de águas, porque há muito tempo eu vinha buscando qualidade nesse quesito da hidratação e água.",
    empresa: "Vitta Centro de Bem-Estar Físico",
    src: vitta.url,
  },
  {
    texto:
      "Todos que chegam na nossa torrefação e cafeteria sentem a diferença da água da Acqualive. Fizemos diversos testes e a Acqualive sempre mantém o alto padrão que nossos clientes merecem.",
    empresa: "William & Sons Coffee Co.",
    src: williamSons.url,
  },
  {
    texto:
      "Na Synergy, cada detalhe faz parte da experiência de saúde e performance dos nossos alunos. A Acqualive complementa esse cuidado oferecendo uma água de qualidade todos os dias.",
    empresa: "Synergy Centro de Treinamento",
    src: synergy.url,
  },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
    <span className="h-px w-8 bg-current opacity-50" />
    {children}
  </span>
);

export const CarrosselMarcas = () => (
  <section className="py-16 lg:py-20 bg-background border-y border-border/60 overflow-hidden">
    <div className="container mb-10">
      <Eyebrow>Quem já bebe Acqualive</Eyebrow>
      <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
        Clínicas, academias, cafeterias e restaurantes que trocaram o galão
      </h2>
    </div>

    <div className="relative group">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
        {[...MARCAS, ...MARCAS].map((m, i) => (
          <div
            key={`${m.nome}-${i}`}
            className="w-36 h-36 md:w-44 md:h-44 flex-shrink-0 rounded-2xl overflow-hidden border border-border/70 bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={m.src}
              alt={`Logo ${m.nome}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const DepoimentosEmpresas = () => (
  <section id="depoimentos" className="py-20 lg:py-28 bg-secondary text-primary-foreground">
    <div className="container">
      <div className="max-w-3xl mb-14">
        <Eyebrow>Depoimentos</Eyebrow>
        <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight">
          Negócios que fizeram da água parte da experiência
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {DEPOIMENTOS.map((d) => (
          <figure
            key={d.empresa}
            className="relative rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.04] backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between"
          >
            <Quote className="w-8 h-8 text-accent mb-6" aria-hidden />
            <blockquote className="text-lg md:text-xl leading-relaxed text-primary-foreground/90">
              {d.texto}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-primary-foreground/15 flex-shrink-0">
                <img
                  src={d.src}
                  alt={`Logo ${d.empresa}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
                {d.empresa}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
