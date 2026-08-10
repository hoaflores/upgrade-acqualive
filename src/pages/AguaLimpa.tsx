import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Droplets, Lock } from "lucide-react";
import logo from "@/assets/acqualive-logo-color.png";
import PlayerAgua from "@/components/agua-limpa/PlayerAgua";
import FormContato from "@/components/agua-limpa/FormContato";

/** Duracao do video: 90s. Um terco (30s) + 10s = 40s assistidos. */
const UNLOCK_AT = 40;

const AguaLimpa = () => {
  const [liberado, setLiberado] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const unlock = useCallback(() => setLiberado(true), []);

  /** O formulario tambem abre sozinho apos o tempo definido, mesmo sem play no video. */
  useEffect(() => {
    const t = window.setTimeout(() => setLiberado(true), UNLOCK_AT * 1000);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (liberado) {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [liberado]);

  return (
    <main className="min-h-screen bg-background">
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
          <PlayerAgua unlockAt={UNLOCK_AT} onUnlock={unlock} />
        </section>

        <div ref={formRef} className="mt-8 scroll-mt-6">
          {liberado && <FormContato />}
        </div>


        <ul className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
          <li className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-foreground">
            <Droplets className="h-4 w-4 text-primary" aria-hidden />
            Água fresquinha todo dia
          </li>
          <li className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
            Sem cloro e sem impurezas
          </li>
          <li className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
            Instalação simples
          </li>
        </ul>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Acqualive, saúde e bem-estar começam pela água.
        </p>
      </div>
    </main>
  );
};

export default AguaLimpa;
