import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import useScrollReveal from "@/hooks/useScrollReveal";

type RevealVariant = "up" | "left" | "right" | "zoom";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

const variantClass: Record<RevealVariant, string> = {
  up: "emp-from-up",
  left: "emp-from-left",
  right: "emp-from-right",
  zoom: "emp-from-zoom",
};

const ScrollReveal = ({ children, className, delay = 0, variant = "up" }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08, rootMargin: "0px 0px -80px 0px" });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "emp-reveal",
        isVisible ? "emp-reveal-visible" : cn("emp-reveal-hidden", variantClass[variant]),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
