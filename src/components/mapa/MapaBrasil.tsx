import { memo, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
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
const FOCUS_ZOOM = 3.4;

const MapPin = ({
  active,
  hovered,
}: {
  active: boolean;
  hovered: boolean;
}) => {
  const size = active ? 8 : hovered ? 6 : 4.5;
  return (
    <g>
      {active && (
        <>
          {/* Ripples */}
          <circle
            r={14}
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth={1.2}
            opacity={0.7}
          >
            <animate
              attributeName="r"
              from="6"
              to="22"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.7"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            r={18}
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth={0.8}
            opacity={0.35}
          >
            <animate
              attributeName="r"
              from="8"
              to="28"
              dur="2s"
              begin="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.5"
              to="0"
              dur="2s"
              begin="0.6s"
              repeatCount="indefinite"
            />
          </circle>
        </>
      )}
      {/* Halo (glow) */}
      <circle
        r={size + 3}
        fill={active ? "hsl(var(--accent))" : "hsl(var(--primary))"}
        opacity={0.18}
      />
      {/* Núcleo */}
      <circle
        r={size}
        fill={active ? "hsl(var(--accent))" : "hsl(var(--primary))"}
        stroke="white"
        strokeWidth={1.6}
        style={{
          filter: active
            ? "drop-shadow(0 2px 6px hsl(var(--accent) / 0.45))"
            : "drop-shadow(0 1px 3px hsl(var(--primary) / 0.35))",
          transition: "r 300ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      {/* Reflexo interno (aparência de vidro) */}
      <circle cx={-size / 3} cy={-size / 3} r={size / 3.5} fill="white" opacity={0.55} />
    </g>
  );
};

const MapaBrasilInner = ({
  cidades,
  selecionadaId,
  onSelect,
}: MapaBrasilProps) => {
  const targetCenter = useMemo<[number, number]>(() => {
    const sel = cidades.find((c) => c.id === selecionadaId);
    return sel ? [sel.lng, sel.lat] : DEFAULT_CENTER;
  }, [cidades, selecionadaId]);
  const targetZoom = selecionadaId ? FOCUS_ZOOM : DEFAULT_ZOOM;

  // Cinematic tween — Apple Maps / Google Earth style
  const [cx, cy] = useTweenPair(targetCenter, { duration: 1200 });
  const zoom = useTweenNumber(targetZoom, { duration: 1200 });

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-br from-white via-[hsl(var(--water-light))] to-[hsl(var(--water-medium)/0.4)] shadow-[0_30px_80px_-40px_hsl(var(--primary)/_0.35),0_1px_0_hsl(0_0%_100%)_inset]">
      {/* Textura sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(120% 80% at 50% 0%, hsl(215 62% 55% / 0.10), transparent 60%), radial-gradient(80% 80% at 100% 100%, hsl(21 89% 55% / 0.05), transparent 60%)",
        }}
      />
      {/* Grid quase invisível */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 700, center: DEFAULT_CENTER }}
        style={{ width: "100%", height: "100%" }}
      >
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
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "hsl(215 55% 82%)",
                      stroke: "hsl(215 62% 38%)",
                      strokeWidth: 1.1,
                      outline: "none",
                      transition: "fill 300ms ease",

                    },
                    hover: {
                      fill: "hsl(215 55% 72%)",
                      outline: "none",
                      cursor: "default",
                    },

                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>


          {cidades.map((c) => {
            const active = c.id === selecionadaId;
            return (
              <Marker
                key={c.id}
                coordinates={[c.lng, c.lat]}
                onClick={() => onSelect(c.id)}
                style={{ cursor: "pointer" } as any}
              >
                <g
                  role="button"
                  aria-label={`Especialista em ${c.cidade}`}
                  className="focus:outline-none"
                >
                  <MapPin active={active} hovered={false} />
                </g>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* Legenda inferior */}
      <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 text-[10px] font-medium tracking-wider uppercase text-primary/70 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/70 shadow-sm">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
        Rede Acqualive · Brasil
      </div>
      {/* Reflexo topo */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-white/25 to-transparent rounded-t-[28px]"
      />
    </div>
  );
};

export default memo(MapaBrasilInner);
