import { memo, useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { AnimatePresence, motion } from "framer-motion";
import geoData from "@/data/brazil-states.json";
import type { CidadeAtendimento } from "@/types/mapa";
import { useTweenNumber, useTweenPair } from "@/hooks/useTween";

interface MapaBrasilProps {
  cidades: CidadeAtendimento[];
  selecionadaId: string | null;
  onSelect: (id: string) => void;
}

const DEFAULT_CENTER: [number, number] = [-54, -14];
const DEFAULT_ZOOM = 1;
const FOCUS_ZOOM = 3.6;

// Mapeamento código IBGE -> UF
const IBGE_TO_UF: Record<string, string> = {
  "11": "RO", "12": "AC", "13": "AM", "14": "RR", "15": "PA", "16": "AP", "17": "TO",
  "21": "MA", "22": "PI", "23": "CE", "24": "RN", "25": "PB", "26": "PE", "27": "AL", "28": "SE", "29": "BA",
  "31": "MG", "32": "ES", "33": "RJ", "35": "SP",
  "41": "PR", "42": "SC", "43": "RS",
  "50": "MS", "51": "MT", "52": "GO", "53": "DF",
};

const PinMark = ({
  active,
  hovered,
}: {
  active: boolean;
  hovered: boolean;
}) => {
  const size = active ? 8.5 : hovered ? 6.5 : 4.8;
  return (
    <g style={{ transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }}>
      {active && (
        <>
          <circle r={14} fill="none" stroke="hsl(var(--accent))" strokeWidth={1.2} opacity={0.75}>
            <animate attributeName="r" from="7" to="24" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.7" to="0" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle r={18} fill="none" stroke="hsl(var(--accent))" strokeWidth={0.9} opacity={0.4}>
            <animate attributeName="r" from="9" to="30" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.55" to="0" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
          </circle>
        </>
      )}
      {/* Halo */}
      <circle
        r={size + 4}
        fill={active ? "hsl(var(--accent))" : "hsl(var(--primary))"}
        opacity={active ? 0.28 : hovered ? 0.22 : 0.16}
        style={{ transition: "opacity 300ms ease" }}
      />
      {/* Núcleo com gradiente */}
      <circle
        r={size}
        fill={active ? "url(#pinGradAccent)" : "url(#pinGradPrimary)"}
        stroke="white"
        strokeWidth={1.8}
        style={{
          filter: active
            ? "drop-shadow(0 3px 8px hsl(var(--accent) / 0.55))"
            : "drop-shadow(0 2px 5px hsl(var(--primary) / 0.45))",
          transition: "r 300ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      {/* Reflexo interno */}
      <circle cx={-size / 3.2} cy={-size / 3.2} r={size / 3.2} fill="white" opacity={0.6} />
    </g>
  );
};

const MapaBrasilInner = ({
  cidades,
  selecionadaId,
  onSelect,
}: MapaBrasilProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredUF, setHoveredUF] = useState<string | null>(null);

  const selecionada = useMemo(
    () => cidades.find((c) => c.id === selecionadaId) ?? null,
    [cidades, selecionadaId],
  );
  const activeUF = selecionada?.estado ?? null;

  const targetCenter = useMemo<[number, number]>(
    () => (selecionada ? [selecionada.lng, selecionada.lat] : DEFAULT_CENTER),
    [selecionada],
  );
  const targetZoom = selecionada ? FOCUS_ZOOM : DEFAULT_ZOOM;

  const [cx, cy] = useTweenPair(targetCenter, { duration: 1300 });
  const zoom = useTweenNumber(targetZoom, { duration: 1300 });

  const hoveredCidade = hoveredId ? cidades.find((c) => c.id === hoveredId) : null;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white via-[hsl(var(--water-light))] to-[hsl(215_55%_92%)] shadow-[0_40px_100px_-50px_hsl(var(--primary)/_0.45),0_1px_0_hsl(0_0%_100%)_inset]">
      {/* Aurora background layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 30% 10%, hsl(215 80% 65% / 0.14), transparent 65%), radial-gradient(70% 60% at 85% 90%, hsl(21 89% 60% / 0.09), transparent 65%), radial-gradient(50% 40% at 50% 50%, hsl(215 70% 78% / 0.15), transparent 70%)",
        }}
      />
      {/* Grid quase invisível */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      {/* Vinheta suave */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, transparent 55%, hsl(215 40% 20% / 0.08) 100%)",
        }}
      />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 700, center: DEFAULT_CENTER }}
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="stateGradBase" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(215 55% 88%)" />
            <stop offset="100%" stopColor="hsl(215 60% 76%)" />
          </linearGradient>
          <linearGradient id="stateGradHover" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(215 60% 82%)" />
            <stop offset="100%" stopColor="hsl(215 65% 70%)" />
          </linearGradient>
          <linearGradient id="stateGradActive" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(21 92% 68%)" />
            <stop offset="100%" stopColor="hsl(21 85% 56%)" />
          </linearGradient>
          <radialGradient id="pinGradPrimary" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stopColor="hsl(215 80% 65%)" />
            <stop offset="100%" stopColor="hsl(215 70% 42%)" />
          </radialGradient>
          <radialGradient id="pinGradAccent" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stopColor="hsl(21 95% 68%)" />
            <stop offset="100%" stopColor="hsl(21 85% 50%)" />
          </radialGradient>
          <filter id="stateShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" />
            <feOffset dx="0" dy="0.6" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.35" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="stateGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ZoomableGroup
          center={[cx, cy]}
          zoom={zoom}
          minZoom={1}
          maxZoom={8}
          translateExtent={[
            [-200, -200],
            [1000, 1000],
          ]}
        >
          <Geographies geography={geoData as any}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const code = String(geo.properties?.codarea ?? "");
                const uf = IBGE_TO_UF[code];
                const isActive = activeUF && uf === activeUF;
                const isHovered = hoveredUF && uf === hoveredUF;
                const fill = isActive
                  ? "url(#stateGradActive)"
                  : isHovered
                    ? "url(#stateGradHover)"
                    : "url(#stateGradBase)";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHoveredUF(uf ?? null)}
                    onMouseLeave={() => setHoveredUF(null)}
                    filter={isActive ? "url(#stateGlow)" : "url(#stateShadow)"}
                    style={{
                      default: {
                        fill,
                        stroke: isActive ? "hsl(21 85% 45%)" : "hsl(215 55% 55%)",
                        strokeWidth: isActive ? 0.9 : 0.6,
                        strokeLinejoin: "round",
                        outline: "none",
                        transition: "fill 500ms ease, stroke 300ms ease, stroke-width 300ms ease",
                      },
                      hover: {
                        fill,
                        outline: "none",
                        cursor: "default",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {cidades.map((c) => {
            const active = c.id === selecionadaId;
            const hovered = c.id === hoveredId;
            return (
              <Marker
                key={c.id}
                coordinates={[c.lng, c.lat]}
                onClick={() => onSelect(c.id)}
                onMouseEnter={() => setHoveredId(c.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ cursor: "pointer" } as any}
              >
                <g
                  role="button"
                  aria-label={`Especialista em ${c.cidade}`}
                  className="focus:outline-none"
                >
                  <PinMark active={active} hovered={hovered} />
                </g>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip flutuante da cidade em hover */}
      <AnimatePresence>
        {hoveredCidade && hoveredCidade.id !== selecionadaId && (
          <motion.div
            key={hoveredCidade.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="rounded-full bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_-12px_hsl(var(--primary)/_0.35)] px-4 py-1.5 text-[12px] font-medium text-foreground">
              <span className="text-primary font-semibold">{hoveredCidade.cidade}</span>
              <span className="text-muted-foreground mx-1.5">·</span>
              <span className="text-muted-foreground">{hoveredCidade.estado}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Badge do estado ativo */}
      <AnimatePresence>
        {selecionada && (
          <motion.div
            key={selecionada.estado}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-4 left-4 flex items-center gap-2 bg-white/85 backdrop-blur-xl border border-white/80 rounded-2xl px-3.5 py-2 shadow-[0_10px_30px_-12px_hsl(var(--primary)/_0.35)]"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-br from-accent to-[hsl(21_85%_50%)] text-white text-[10px] font-bold shadow-inner">
              {selecionada.estado}
            </span>
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">
                Explorando
              </div>
              <div className="text-[12px] font-semibold text-foreground">
                {selecionada.cidade}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legenda inferior */}
      <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 text-[10px] font-medium tracking-wider uppercase text-primary/80 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        Rede Acqualive · Brasil
      </div>

      {/* Reflexo topo (glass shine) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/40 to-transparent rounded-t-[28px]"
      />
      {/* Reflexo lateral sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/25 to-transparent"
      />
    </div>
  );
};

export default memo(MapaBrasilInner);
