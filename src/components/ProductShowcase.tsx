import { Droplets } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-water-medium/20 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Droplets className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Linha V - Design Moderno
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça os <span className="text-gradient-water">Novos Modelos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologia vaso comunicante, maior vazão e design que combina com qualquer ambiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Product Image 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-water rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative aspect-square bg-card rounded-2xl border border-border overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center p-6">
                  <Droplets className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Imagem do Filtro Linha V</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">Placeholder - substituir pela imagem real</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-4 font-semibold text-foreground">Modelo Bancada</p>
          </div>

          {/* Product Image 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-water rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative aspect-square bg-card rounded-2xl border border-border overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center p-6">
                  <Droplets className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Imagem do Filtro Linha V</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">Placeholder - substituir pela imagem real</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-4 font-semibold text-foreground">Modelo Premium</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
