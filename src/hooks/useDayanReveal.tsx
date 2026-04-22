import { useEffect } from "react";

/**
 * Observa elementos com a classe `dayan-reveal` e aplica `is-visible` ao entrar em viewport.
 * Funciona em todas as seções da landing /dayan-siebra para os reveals scroll-driven.
 */
export const useDayanReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".dayan-reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};
