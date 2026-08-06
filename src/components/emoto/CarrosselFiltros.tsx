import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import duo from "@/assets/duo/duo-frente-transp.png.asset.json";
import terracota from "@/assets/filtros/terracota.png.asset.json";
import vself from "@/assets/filtros/vself.png.asset.json";

const FILTROS = [
  {
    src: duo.url,
    nome: "Acqualive DUO",
    desc: "Água alcalina natural ou fresquinha na mesma torneira",
    alt: "Purificador de água alcalina Acqualive DUO",
  },
  {
    src: terracota.url,
    nome: "Acqualive Terracota",
    desc: "Barro natural com base de madeira, água viva em temperatura ambiente",
    alt: "Filtro de água Acqualive Terracota em barro com base de madeira",
  },
  {
    src: vself.url,
    nome: "Acqualive V-Self 10L",
    desc: "Reservatório transparente de 10 litros com base de madeira",
    alt: "Filtro de água Acqualive V-Self de 10 litros com base de madeira",
  },
];

const CarrosselFiltros = () => {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const ir = useCallback((passo: number) => {
    setDir(passo);
    setI((v) => (v + passo + FILTROS.length) % FILTROS.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => ir(1), 6000);
    return () => clearInterval(t);
  }, [ir]);

  const atual = FILTROS[i];

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-sacra-blue/10 blur-3xl" aria-hidden />

      <div className="relative flex h-[340px] items-center justify-center md:h-[420px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.img
            key={atual.src}
            custom={dir}
            src={atual.src}
            alt={atual.alt}
            loading="lazy"
            initial={{ opacity: 0, x: dir * 40, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: dir * -40, scale: 0.94 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-full w-auto max-w-[80%] object-contain drop-shadow-2xl"
          />
        </AnimatePresence>

        <button
          type="button"
          onClick={() => ir(-1)}
          aria-label="Filtro anterior"
          className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-sacra-veil bg-white/85 text-sacra-deep shadow-sm backdrop-blur transition hover:scale-105"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => ir(1)}
          aria-label="Próximo filtro"
          className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-full border border-sacra-veil bg-white/85 text-sacra-deep shadow-sm backdrop-blur transition hover:scale-105"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div className="relative mt-4 min-h-[64px] text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={atual.nome}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <p className="font-display text-base font-semibold text-sacra-ink md:text-lg">
              {atual.nome}
            </p>
            <p className="mt-1 font-body text-sm text-sacra-muted">{atual.desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative mt-4 flex justify-center gap-2">
        {FILTROS.map((f, idx) => (
          <button
            key={f.nome}
            type="button"
            onClick={() => {
              setDir(idx > i ? 1 : -1);
              setI(idx);
            }}
            aria-label={`Ver ${f.nome}`}
            aria-current={idx === i}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === i ? "w-8 bg-sacra-gold" : "w-2 bg-sacra-blue/25 hover:bg-sacra-blue/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarrosselFiltros;
