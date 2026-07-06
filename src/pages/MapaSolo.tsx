import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import HeroMapa from "@/components/mapa/HeroMapa";
import BuscaEspecialista, { REPRESENTANTE_WHATSAPP_URL } from "@/components/mapa/BuscaEspecialista";
import ListaCidades from "@/components/mapa/ListaCidades";
import MapaBrasil from "@/components/mapa/MapaBrasil";
import PainelEspecialista from "@/components/mapa/PainelEspecialista";
import FooterSection from "@/components/FooterSection";
import { useMapaSolo } from "@/hooks/useMapaSolo";


const MapaSolo = () => {
  const {
    query,
    setQuery,
    resultados,
    cidadesOrdenadas,
    selecionada,
    selecionarCidade,
    buscarMaisProximo,
  } = useMapaSolo();

  const [geoLoading, setGeoLoading] = useState(false);
  const buscaRef = useRef<HTMLDivElement>(null);
  const painelRef = useRef<HTMLDivElement>(null);

  const scrollToBusca = () => {
    buscaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Sempre que uma cidade for selecionada, rolar até o painel (relevante no mobile).
  useEffect(() => {
    if (selecionada && window.innerWidth < 1024) {
      painelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selecionada]);

  const handleGeolocalizar = () => {
    if (!("geolocation" in navigator)) {
      toast.error("Geolocalização não disponível neste navegador.");
      return;
    }
    setGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const proximo = buscarMaisProximo({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setGeoLoading(false);
        if (proximo) {
          toast.success(`Especialista mais próximo: ${proximo.cidade} - ${proximo.estado}`);
        }
      },
      () => {
        setGeoLoading(false);
        toast.error("Não conseguimos acessar sua localização.");
      },
      { timeout: 8000 },
    );
  };

  const handleSelectComTratamento = (id: string) => {
    selecionarCidade(id);
  };

  // Se o usuário buscou uma cidade específica e nada bate, sugerir mais próximo
  useEffect(() => {
    if (!query.trim() || resultados.length > 0) return;
    // simples: pega a primeira cidade da lista completa como sugestão
    // (fallback já é coberto pela geolocalização)
  }, [query, resultados]);

  return (
    <>
      <Helmet>
        <title>Mapa de Especialistas Acqualive · Encontre um perto de você</title>
        <meta
          name="description"
          content="Encontre em segundos um especialista Acqualive na sua cidade. Fale por WhatsApp com uma pessoa preparada para cuidar da sua água, saúde e família."
        />
        <link rel="canonical" href="https://paginas.acqualive.com.br/franquias-solo" />
        <meta property="og:title" content="Mapa de Especialistas Acqualive" />
        <meta
          property="og:description"
          content="Encontre um especialista Acqualive perto de você e converse pelo WhatsApp."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paginas.acqualive.com.br/mapa-solo" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Acqualive",
            url: "https://paginas.acqualive.com.br/mapa-solo",
            areaServed: "BR",
          })}
        </script>
      </Helmet>

      <main className="min-h-dvh bg-background text-foreground">
        <HeroMapa onCTAClick={scrollToBusca} />

        <section
          ref={buscaRef}
          aria-label="Buscar especialista"
          className="container relative -mt-10 md:-mt-14 z-10 pb-10 md:pb-14"
        >
          <div className="max-w-3xl mx-auto">
            <BuscaEspecialista
              query={query}
              onQueryChange={setQuery}
              cidades={cidadesOrdenadas}
              onSelect={handleSelectComTratamento}
              onGeolocalizar={handleGeolocalizar}
              geoLoading={geoLoading}
            />
          </div>
        </section>


        <section
          aria-label="Mapa e especialistas"
          className="container pb-20 md:pb-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
            {/* Lista - lateral esquerda no desktop */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="rounded-[24px] border border-border/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_-30px_hsl(var(--primary)/_0.3),0_1px_0_hsl(0_0%_100%)_inset] overflow-hidden">
                <header className="px-5 py-4 border-b border-border/50 bg-gradient-to-b from-white/60 to-transparent">
                  <h2 className="font-display font-semibold text-[13px] text-foreground tracking-tight">
                    Cidades atendidas
                  </h2>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {resultados.length}{" "}
                    {resultados.length === 1 ? "resultado" : "resultados"}
                  </p>
                </header>
                <div className="max-h-[540px] overflow-y-auto scrollbar-thin">
                  <ListaCidades
                    cidades={resultados}
                    selecionadaId={selecionada?.id ?? null}
                    onSelect={handleSelectComTratamento}
                  />
                </div>
              </div>
            </div>

            {/* Mapa - centro (protagonista) */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="h-[420px] md:h-[560px]">
                <MapaBrasil
                  cidades={cidadesOrdenadas}
                  selecionadaId={selecionada?.id ?? null}
                  onSelect={handleSelectComTratamento}
                />
              </div>
            </div>

            {/* Painel - lateral direita */}
            <div
              ref={painelRef}
              className="lg:col-span-3 order-3"
              id="painel-especialista"
            >
              <PainelEspecialista cidade={selecionada} />
            </div>
          </div>

          {/* CTA persistente — Seja um representante */}
          <div className="mt-10 md:mt-14">
            <div className="relative overflow-hidden rounded-[28px] border border-accent/25 bg-gradient-to-br from-white via-[hsl(var(--water-light))] to-[hsl(21_95%_96%)] p-6 md:p-10 shadow-[0_30px_80px_-40px_hsl(var(--accent)/_0.35)]">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-40"
                style={{ background: "radial-gradient(circle, hsl(21 95% 65% / 0.25), transparent 70%)" }}
              />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] uppercase text-accent">
                    <Sparkles className="w-3.5 h-3.5" />
                    Oportunidade Acqualive
                  </span>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                    Sua cidade ainda não tem um representante?
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl">
                    Seja o primeiro a levar saúde e bem-estar através da água Acqualive
                    para a sua região. Treinamento, suporte e uma marca reconhecida ao
                    seu lado.
                  </p>
                </div>
                <a
                  href={REPRESENTANTE_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-2xl bg-gradient-to-r from-accent to-[hsl(38_95%_55%)] text-white text-[13px] md:text-sm font-bold tracking-wide shadow-2xl shadow-accent/40 hover:shadow-accent/60 hover:scale-[1.02] transition-all animate-pulse-soft whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4" />
                  QUERO SER UM REPRESENTANTE ACQUALIVE SOLO
                </a>
              </div>
            </div>
          </div>
        </section>






        <FooterSection
          heading="Não encontrou sua cidade?"
          ctaLabel="FALAR COM A ACQUALIVE"
          showUrgencyBanner={false}
          whatsappLink="https://wa.me/555192928468?text=Olá!%20Gostaria%20de%20saber%20se%20há%20um%20especialista%20Acqualive%20na%20minha%20região."
        />
      </main>
    </>
  );
};

export default MapaSolo;
