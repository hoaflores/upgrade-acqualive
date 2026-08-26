import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import logo from "@/assets/acqualive-logo-color.png";
import PlayerAgua from "@/components/agua-limpa/PlayerAgua";
import FormContato from "@/components/agua-limpa/FormContato";

interface PaginaAguaLimpaProps {
  /** Segundos ate liberar o formulario */
  unlockAt?: number;
  /** Id do video do YouTube (quando nao usa o video proprio) */
  youtubeId?: string;
  /** Origem do lead */
  origem?: string;
  /** Nome amigavel da pagina */
  paginaLabel?: string;
  /** Video proprio (url) */
  videoUrl?: string;
  /** Capa do video proprio */
  posterUrl?: string;
  /** Video vertical (Reels) */
  vertical?: boolean;
  /** Numero do WhatsApp para o CTA (somente digitos, com DDD e DDI) */
  whatsappNumber?: string;
  /** Nome do contato que aparece na saudacao da mensagem do WhatsApp */
  contatoNome?: string;
}

/** Layout mobile-first da VSL Agua Limpa, reutilizado pelas variacoes de video. */
const PaginaAguaLimpa = ({
  unlockAt = 40,
  youtubeId,
  origem = "agua-limpa",
  paginaLabel = "Água Limpa",
  videoUrl,
  posterUrl,
  vertical,
  whatsappNumber,
  contatoNome,
}: PaginaAguaLimpaProps) => {
  const [liberado, setLiberado] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const unlock = useCallback(() => setLiberado(true), []);

  /** O formulario tambem abre sozinho apos o tempo definido, mesmo sem play no video. */
  useEffect(() => {
    const t = window.setTimeout(() => setLiberado(true), unlockAt * 1000);
    return () => window.clearTimeout(t);
  }, [unlockAt]);

  /** Rola ate o formulario apenas se o video nao estiver rodando (evita pulo no meio do video). */
  useEffect(() => {
    if (!liberado) return;
    const t = window.setTimeout(() => {
      const video = document.querySelector("video");
      if (video && !video.paused) return;
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
    return () => window.clearTimeout(t);
  }, [liberado]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">

      <Helmet>
        <title>A água da sua família está realmente limpa? | Acqualive</title>
        <meta
          name="description"
          content="Assista ao vídeo e descubra por que a água que você bebe pode estar prejudicando sua saúde e como a Acqualive resolve isso de forma simples."
        />
        <meta property="og:title" content="A água da sua família está realmente limpa?" />
        <meta
          property="og:description"
          content="Descubra por que a água que você bebe pode estar prejudicando sua saúde e como a Acqualive resolve isso."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="mx-auto w-full max-w-xl px-5 pb-16 pt-8">
        <header className="text-center">
          <img src={logo} alt="Acqualive" className="mx-auto h-16 w-auto sm:h-20" />
        </header>

        <h1 className="mt-8 text-center text-[28px] font-bold leading-tight text-foreground sm:text-4xl">
          A água da sua família está realmente limpa?
        </h1>
        <p className="mx-auto mt-4 max-w-md text-center text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Assista ao vídeo e descubra por que a água que você bebe pode estar prejudicando sua saúde e
          como a Acqualive resolve isso de forma simples.
        </p>

        <section className="mt-7">
          <PlayerAgua unlockAt={unlockAt} onUnlock={unlock} youtubeId={youtubeId} videoUrl={videoUrl} posterUrl={posterUrl} vertical={vertical} />
        </section>

        <div ref={formRef} className="mt-8 scroll-mt-6">
          {liberado && <FormContato origem={origem} paginaLabel={paginaLabel} whatsappNumber={whatsappNumber} />}
        </div>
      </div>
    </main>
  );
};

export default PaginaAguaLimpa;
