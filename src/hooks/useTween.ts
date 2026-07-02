import { useEffect, useRef, useState } from "react";

/**
 * Tween cinemático para valores numéricos.
 * Ease out quint por padrão — sensação de "planar até parar" (Apple Maps / Google Earth).
 */
const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

export function useTweenNumber(
  target: number,
  { duration = 900, ease = easeOutQuint } = {},
) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    fromRef.current = value;
    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const tick = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const p = Math.min(1, elapsed / duration);
      const eased = ease(p);
      const next = fromRef.current + (target - fromRef.current) * eased;
      setValue(next);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return value;
}

export function useTweenPair(
  target: [number, number],
  opts?: { duration?: number },
) {
  const a = useTweenNumber(target[0], opts);
  const b = useTweenNumber(target[1], opts);
  return [a, b] as [number, number];
}
