import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Helena S.",
    location: "São Paulo, SP",
    text: "Fiz o upgrade da Linha V e a diferença é impressionante! O fluxo é muito mais rápido e o design ficou lindo na minha cozinha. Super recomendo!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo M.",
    location: "Rio de Janeiro, RJ",
    text: "Já era cliente Acqualive há anos. Quando soube do programa de fidelidade, não pensei duas vezes. Ainda pude doar meu filtro antigo para minha mãe!",
    rating: 5,
  },
  {
    name: "Patricia L.",
    location: "Belo Horizonte, MG",
    text: "A melhor decisão que tomei! A água está ainda mais pura e o atendimento foi excelente. Adorei poder ajudar uma instituição com meu filtro antigo.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 bg-water-light rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quem já fez o{" "}
            <span className="text-gradient-water">Upgrade</span> diz:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-soft hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
