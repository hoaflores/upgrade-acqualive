const BOLHAS = [
  { left: "6%", size: 14, delay: 0, dur: 17 },
  { left: "17%", size: 8, delay: 3.5, dur: 22 },
  { left: "28%", size: 20, delay: 7, dur: 19 },
  { left: "41%", size: 10, delay: 1.5, dur: 25 },
  { left: "55%", size: 16, delay: 9, dur: 20 },
  { left: "67%", size: 7, delay: 5, dur: 24 },
  { left: "78%", size: 22, delay: 11, dur: 18 },
  { left: "89%", size: 12, delay: 2.5, dur: 23 },
];

/** Bolhas subindo devagar: assinatura lúdica de água no fundo das seções. */
const BolhasAgua = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    {BOLHAS.map((b, i) => (
      <span
        key={i}
        className="pc-bubble"
        style={{
          left: b.left,
          width: b.size,
          height: b.size,
          animationDelay: `${b.delay}s`,
          animationDuration: `${b.dur}s`,
        }}
      />
    ))}
  </div>
);

export default BolhasAgua;
