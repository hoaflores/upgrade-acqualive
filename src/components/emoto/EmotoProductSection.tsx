import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import productMonolith from "@/assets/emoto/product-monolith.jpg";
import cymaticsPattern from "@/assets/emoto/cymatics-pattern.jpg";

const features = [
  {
    title: "Filtração em 5 Estágios",
    description: "Remove 99,9% dos contaminantes mantendo os minerais essenciais",
  },
  {
    title: "Infusão de Minerais",
    description: "Adiciona magnésio, cálcio e potássio em proporções ideais",
  },
  {
    title: "Alcalinização Natural",
    description: "Eleva o pH para níveis alcalinos saudáveis (8.5 - 9.5)",
  },
  {
    title: "Reestruturação Molecular",
    description: "Tecnologia exclusiva que reorganiza as moléculas de água",
  },
];

const EmotoProductSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-40 px-6 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={cymaticsPattern}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emoto-bg via-emoto-bg/90 to-emoto-bg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <span
            className="font-mono text-emoto-gold text-xs tracking-[0.3em] uppercase block mb-4"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            A tecnologia que imita a criação
          </span>
          <h2
            className="font-serif text-3xl md:text-5xl text-white mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            O Monolito
          </h2>
          <p
            className="font-mono text-emoto-silver/70 text-sm max-w-xl mx-auto"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Engenharia de precisão inspirada nos padrões da geometria sagrada
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image with Parallax */}
          <motion.div
            style={{ y, rotate, scale }}
            className="relative order-2 lg:order-1"
          >
            {/* Sacred Geometry Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full absolute opacity-30"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="hsl(var(--emoto-gold))"
                  strokeWidth="0.5"
                  className="animate-[spin_60s_linear_infinite]"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="hsl(var(--emoto-gold))"
                  strokeWidth="0.5"
                  className="animate-[spin_45s_linear_infinite_reverse]"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="90"
                  fill="none"
                  stroke="hsl(var(--emoto-cyan))"
                  strokeWidth="0.5"
                  className="animate-[spin_30s_linear_infinite]"
                />
              </svg>
            </div>

            <img
              src={productMonolith}
              alt="Purificador Acqualive"
              className="w-full max-w-md mx-auto relative z-10"
            />
          </motion.div>

          {/* Features */}
          <div className="order-1 lg:order-2 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                {/* Glassmorphism Card */}
                <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emoto-cyan/30 transition-all duration-500">
                  {/* Index Number */}
                  <span
                    className="absolute -left-3 top-1/2 -translate-y-1/2 font-mono text-emoto-gold/30 text-4xl font-bold"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    0{index + 1}
                  </span>

                  <h3
                    className="font-serif text-lg text-white mb-2 group-hover:text-emoto-cyan transition-colors"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="font-mono text-emoto-silver/60 text-xs"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotoProductSection;
