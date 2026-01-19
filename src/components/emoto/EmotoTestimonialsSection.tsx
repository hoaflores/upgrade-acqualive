import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Sinto minha mente mais clara desde que comecei a usar.",
    name: "Marina S.",
    location: "São Paulo, SP",
  },
  {
    quote: "Voltei a sentir paz. A água tem um sabor diferente, mais vivo.",
    name: "Roberto C.",
    location: "Curitiba, PR",
  },
  {
    quote: "Minha energia mudou. Acordo disposta e durmo tranquila.",
    name: "Fernanda L.",
    location: "Rio de Janeiro, RJ",
  },
  {
    quote: "Após 3 meses, minha pele está mais hidratada e radiante.",
    name: "Juliana M.",
    location: "Belo Horizonte, MG",
  },
  {
    quote: "A qualidade da água reflete na qualidade dos meus pensamentos.",
    name: "Paulo R.",
    location: "Brasília, DF",
  },
  {
    quote: "Minha família inteira sentiu a diferença. Valeu cada centavo.",
    name: "Carla T.",
    location: "Porto Alegre, RS",
  },
];

const EmotoTestimonialsSection = () => {
  return (
    <section className="relative py-24 lg:py-40 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emoto-bg via-emoto-deep/50 to-emoto-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="font-mono text-emoto-gold text-xs tracking-[0.3em] uppercase block mb-4"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Retratos da mudança
          </span>
          <h2
            className="font-serif text-3xl md:text-5xl text-white mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Transformações reais
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="break-inside-avoid"
            >
              {/* Glassmorphism Card */}
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emoto-cyan/20 transition-all duration-500 group">
                {/* Quote Mark */}
                <span className="absolute top-4 left-4 text-emoto-cyan/20 text-6xl font-serif leading-none">
                  "
                </span>

                {/* Quote Text */}
                <p
                  className="font-serif text-white/90 text-lg mb-6 relative z-10"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar Placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emoto-cyan/30 to-emoto-gold/30" />
                  <div>
                    <p
                      className="font-mono text-white text-sm"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="font-mono text-emoto-silver/50 text-xs"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emoto-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotoTestimonialsSection;
