import { useEffect, useRef, useState } from "react";

/** Conta até o valor quando entra na tela: chama atenção para os dados do estudo. */
const NumeroAnimado = ({ valor }: { valor: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [mostrado, setMostrado] = useState(valor);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const alvo = Number(valor.replace(/[^\d]/g, ""));
    const numérico = /^\d+$/.test(valor.trim());
    if (!numérico || !alvo) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        const início = performance.now();
        const dur = 900;
        const tick = (t: number) => {
          const p = Math.min(1, (t - início) / dur);
          setMostrado(String(Math.round(alvo * (1 - Math.pow(1 - p, 4)))));
          if (p < 1) requestAnimationFrame(tick);
        };
        setMostrado("0");
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [valor]);

  return (
    <p ref={ref} className="font-display text-3xl font-bold tabular-nums text-[hsl(var(--pc-blue))]">
      {mostrado}
    </p>
  );
};

export default NumeroAnimado;
