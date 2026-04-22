import { useEffect, useState } from "react";

const NAV = [
  { label: "A verdade", href: "#verdade" },
  { label: "Vídeos", href: "#videos" },
  { label: "Solução", href: "#solucao" },
  { label: "Prova", href: "#prova" },
  { label: "Oferta", href: "#oferta" },
];

const DayanNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[hsl(var(--ds-line))]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-[hsl(var(--ds-ink))]">
            Dr. Dayan Siebra
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[hsl(var(--ds-ink-soft))]">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="dayan-link">
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#oferta"
          className="hidden md:inline-flex items-center gap-2 bg-[hsl(var(--ds-ink))] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[hsl(var(--ds-blue-deep))] transition-colors"
        >
          Quero um Acqualive
          <span className="inline-block">→</span>
        </a>

        <a
          href="#oferta"
          className="md:hidden bg-[hsl(var(--ds-ink))] text-white px-4 py-2 rounded-full text-xs font-semibold"
        >
          Quero
        </a>
      </div>
    </header>
  );
};

export default DayanNav;
