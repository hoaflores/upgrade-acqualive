import { PlayCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LiteYouTube from "@/components/LiteYouTube";
import BotaoTranscricao from "@/components/estudo/BotaoTranscricao";
import CompartilharEstudo from "@/components/estudo/CompartilharEstudo";
import { VIDEO_ID } from "@/components/estudo/links";

/** Capítulo em vídeo: a explicação do estudo pela própria Acqualive. */
const VideoEstudo = () => (
  <section id="video" className="scroll-mt-24 border-t border-[hsl(var(--pc-line))] py-20 md:py-24">
    <div className="container grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <ScrollReveal>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-line))] bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--pc-blue))]">
            <PlayCircle className="h-3.5 w-3.5" aria-hidden />
            Capítulo em vídeo
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-4xl">
            Prefere ouvir a história antes de ler?
          </h2>
          <p className="mt-4 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
            Em poucos minutos, o vídeo resume o que a pesquisa investigou, como o protocolo foi conduzido e por que o
            resultado chamou a atenção da comunidade científica. Depois, volte ao texto para se aprofundar em cada
            etapa.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <div>
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-[hsl(var(--pc-line))] shadow-[0_40px_80px_-55px_hsl(var(--pc-blue))]">
            <LiteYouTube
              id={VIDEO_ID}
              title="Água Funcional Acqualive, um estudo revolucionário sobre água alcalina"
              quality="maxres"
            />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <BotaoTranscricao />
            <CompartilharEstudo compacto />
          </div>
          <p className="mt-3 text-xs text-[hsl(var(--pc-ink-soft))]">
            Envie o vídeo para quem convive com azia, refluxo ou gastrite, ou leve a transcrição para aulas e
            atendimentos.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default VideoEstudo;

