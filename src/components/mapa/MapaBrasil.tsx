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

interface MapaBrasilProps {
  cidades: CidadeAtendimento[];
  selecionadaId: string | null;
  onSelect: (id: string) => void;
}

const MapaBrasil = ({ cidades, selecionadaId, onSelect }: MapaBrasilProps) => {
  const center = useMemo<[number, number]>(() => {
    const sel = cidades.find((c) => c.id === selecionadaId);
    return sel ? [sel.lng, sel.lat] : [-54, -14];
  }, [cidades, selecionadaId]);

  const zoom = selecionadaId ? 3 : 1;

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[hsl(var(--water-light))] to-white rounded-2xl overflow-hidden border border-border">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 700, center: [-54, -14] }}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          center={center}
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
                      fill: "hsl(var(--water-medium) / 0.35)",
                      stroke: "hsl(var(--primary) / 0.25)",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "hsl(var(--water-medium) / 0.55)",
                      outline: "none",
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
                <g role="button" aria-label={`Especialista em ${c.cidade}`}>
                  <circle
                    r={active ? 7 : 4}
                    fill={active ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                    stroke="white"
                    strokeWidth={1.5}
                  />
                  {active && (
                    <circle
                      r={12}
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth={1.5}
                      opacity={0.5}
                    />
                  )}
                </g>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
      <div className="pointer-events-none absolute bottom-3 right-3 text-[10px] font-semibold text-muted-foreground bg-white/70 backdrop-blur px-2 py-1 rounded">
        Mapa vetorial · Acqualive
      </div>
    </div>
  );
};

export default memo(MapaBrasil);
