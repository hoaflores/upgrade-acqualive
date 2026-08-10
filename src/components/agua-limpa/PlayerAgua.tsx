import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import videoAsset from "@/assets/agua-limpa.mp4.asset.json";
import posterAsset from "@/assets/agua-limpa-poster.jpg.asset.json";

const SPEEDS = [0.75, 1, 1.25, 1.5, 2];

const format = (s: number) => {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
};

interface PlayerAguaProps {
  /** Tempo assistido (em segundos) necessario para liberar o formulario */
  unlockAt: number;
  onUnlock: () => void;
}

/** Player proprietario, leve e mobile-first, com controle de velocidade. */
const PlayerAgua = ({ unlockAt, onUnlock }: PlayerAguaProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [rate, setRate] = useState(1);
  const [started, setStarted] = useState(false);
  const watched = useRef(0);
  const unlocked = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let last = v.currentTime;
    const onTime = () => {
      const t = v.currentTime;
      const delta = t - last;
      if (delta > 0 && delta < 1.5) watched.current += delta;
      last = t;
      setCurrent(t);
      if (!unlocked.current && watched.current >= unlockAt) {
        unlocked.current = true;
        onUnlock();
      }
    };
    const onMeta = () => setDuration(v.duration);
    const onPlay = () => {
      setPlaying(true);
      setStarted(true);
    };
    const onPause = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [unlockAt, onUnlock]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  const changeRate = () => {
    const v = ref.current;
    if (!v) return;
    const next = SPEEDS[(SPEEDS.indexOf(rate) + 1) % SPEEDS.length];
    v.playbackRate = next;
    setRate(next);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = Number(e.target.value);
    setCurrent(v.currentTime);
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden rounded-2xl bg-foreground/90 shadow-xl ring-1 ring-border"
    >
      <video
        ref={ref}
        src={videoAsset.url}
        poster={posterAsset.url}
        playsInline
        preload="metadata"
        onClick={toggle}
        className="aspect-video w-full cursor-pointer bg-black object-cover"
      />

      {!started && (
        <button
          type="button"
          onClick={toggle}
          aria-label="Assistir ao vídeo"
          className="absolute inset-0 flex items-center justify-center bg-primary/25 backdrop-blur-[1px] transition-colors hover:bg-primary/35"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-background/95 shadow-2xl">
            <Play className="ml-1 h-8 w-8 fill-current text-primary" />
          </span>
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={current}
          onChange={seek}
          aria-label="Progresso do vídeo"
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-background/30 accent-primary"
          style={{
            background: `linear-gradient(to right, hsl(var(--primary)) ${progress}%, hsl(var(--background) / 0.3) ${progress}%)`,
          }}
        />
        <div className="mt-2 flex items-center gap-3 text-background">
          <button type="button" onClick={toggle} aria-label={playing ? "Pausar" : "Reproduzir"}>
            {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => {
              const v = ref.current;
              if (!v) return;
              v.muted = !v.muted;
              setMuted(v.muted);
            }}
            aria-label={muted ? "Ativar som" : "Desativar som"}
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
          <span className="text-xs tabular-nums opacity-90">
            {format(current)} / {format(duration)}
          </span>
          <button
            type="button"
            onClick={changeRate}
            aria-label="Velocidade de reprodução"
            className="ml-auto rounded-full bg-background/20 px-3 py-1 text-xs font-semibold"
          >
            {rate}x
          </button>
          <button
            type="button"
            onClick={() => wrapRef.current?.requestFullscreen?.()}
            aria-label="Tela cheia"
          >
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerAgua;
