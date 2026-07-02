import { MapPin, Search } from "lucide-react";

interface HeroMapaProps {
  onCTAClick: () => void;
}

const HeroMapa = ({ onCTAClick }: HeroMapaProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--water-light))] via-background to-background">
      <div className="container py-16 md:py-24 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary mb-6">
            <MapPin className="w-3.5 h-3.5" aria-hidden />
            Rede oficial de especialistas Acqualive
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Encontre um especialista Acqualive{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              perto de você
            </span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma pessoa preparada para cuidar da sua água, da sua saúde e da sua
            família. Digite a sua cidade e comece uma conversa em segundos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onCTAClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground h-12 px-7 font-semibold shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all"
            >
              <Search className="w-4 h-4" aria-hidden />
              Encontrar Especialista
            </button>
            <span className="text-xs text-muted-foreground">
              Atendimento humano por WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMapa;
