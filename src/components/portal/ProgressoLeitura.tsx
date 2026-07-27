import { useEffect, useState } from "react";

/** Barra fina no topo indicando o quanto da enciclopédia já foi percorrido. */
const ProgressoLeitura = () => {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setP(total > 0 ? Math.min(1, window.scrollY / total) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent" aria-hidden>
      <div
        className="pc-progress h-full w-full transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
};

export default ProgressoLeitura;
