import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import HeroMapa from "@/components/mapa/HeroMapa";
import BuscaEspecialista from "@/components/mapa/BuscaEspecialista";
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
        <link rel="canonical" href="https://paginas.acqualive.com.br/mapa-solo" />
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
          className="container pb-6"
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
          className="container pb-16 md:pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Lista - lateral esquerda no desktop */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
                <header className="px-4 py-3 border-b border-border">
                  <h2 className="font-display font-semibold text-sm text-foreground">
                    Cidades atendidas
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {resultados.length}{" "}
                    {resultados.length === 1 ? "resultado" : "resultados"}
                  </p>
                </header>
                <div className="max-h-[520px] overflow-y-auto">
                  <ListaCidades
                    cidades={resultados}
                    selecionadaId={selecionada?.id ?? null}
                    onSelect={handleSelectComTratamento}
                  />
                </div>
              </div>
            </div>

            {/* Mapa - centro */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="h-[380px] md:h-[520px]">
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
