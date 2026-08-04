import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import EmotoFloatingParticles from "@/components/emoto/EmotoFloatingParticles";
import waterDropHero from "@/assets/emoto/water-drop-hero.jpg";
import labTokyo from "@/assets/emoto/lab-tokyo.jpg";
import hexagonCrystal from "@/assets/emoto/hexagon-crystal.jpg";
import nascenteJapao from "@/assets/emoto/nascente-japao.jpg";
import crystalLove from "@/assets/emoto/crystal-love.jpg";
import crystalChaos from "@/assets/emoto/crystal-chaos.jpg";
import cymaticsPattern from "@/assets/emoto/cymatics-pattern.jpg";
import duoAsset from "@/assets/duo/duo-frente-transp.png.asset.json";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=554130777777&text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20da%20hist%C3%B3ria%20Acqualive%20e%20Masaru%20Emoto%20e%20quero%20saber%20mais.";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

const Chapter = ({
  numero,
  etiqueta,
  titulo,
  children,
  id,
}: {
  numero: string;
  etiqueta: string;
  titulo: string;
  children: React.ReactNode;
  id?: string;
}) => (
  <section id={id} className="relative px-6 py-20 lg:py-32">
    <div className="mx-auto max-w-5xl">
      <motion.div {...fadeUp} className="mb-10">
        <div className="mb-4 flex items-center gap-4">
          <span className="font-display text-5xl font-bold text-emoto-highlight/25 md:text-6xl">
            {numero}
          </span>
          <span className="font-body text-[11px] font-medium uppercase tracking-[0.28em] text-emoto-highlight md:text-xs">
            {etiqueta}
          </span>
        </div>
        <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
          {titulo}
        </h2>
      </motion.div>
      {children}
    </div>
  </section>
);

const Paragrafo = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    {...fadeUp}
    className="font-body text-base leading-relaxed text-emoto-silver/90 md:text-lg"
  >
    {children}
  </motion.p>
);

const MassaruEmotoHistoria = () => {
  const scrollToStory = () => {
    document.getElementById("capitulo-1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Masaru Emoto e a Acqualive: a história da água viva</title>
        <meta
          name="description"
          content="Quem foi Masaru Emoto, como ele mudou a visão do mundo sobre a água e como a Acqualive se tornou herdeira desse legado no Brasil."
        />
        <meta property="og:title" content="Masaru Emoto e a Acqualive: a história da água viva" />
        <meta
          property="og:description"
          content="Ciência, sensibilidade e tecnologia: a história que liga os estudos de Masaru Emoto ao purificador Acqualive."
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <article className="emoto-page min-h-screen overflow-x-hidden bg-emoto-bg">
        <EmotoFloatingParticles />

        {/* HERO */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${waterDropHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emoto-bg/85 via-emoto-bg/50 to-emoto-bg" />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 block font-body text-xs font-medium uppercase tracking-[0.25em] text-emoto-highlight md:text-sm"
            >
              A história por trás da água viva
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mb-6 font-display text-4xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl"
            >
              O cientista que ouviu a água
              <br />
              <span className="bg-gradient-to-r from-emoto-accent to-emoto-highlight bg-clip-text text-transparent">
                e a empresa que continuou a escutar.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="mx-auto mb-12 max-w-2xl font-body text-base leading-relaxed text-white/80 md:text-lg"
            >
              De um microscópio em Tóquio até a sua cozinha. A trajetória de Masaru Emoto,
              a descoberta que dividiu opiniões no mundo inteiro e o caminho que levou a
              Acqualive a transformar essa visão em tecnologia.
            </motion.p>

            <motion.button
              onClick={scrollToStory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 1.4, duration: 0.5 },
                y: { delay: 1.8, duration: 1.6, repeat: Infinity },
              }}
              className="flex flex-col items-center gap-2 text-emoto-accent transition-colors hover:text-emoto-highlight mx-auto"
            >
              <span className="font-body text-xs font-medium uppercase tracking-widest">
                Comece pela primeira página
              </span>
              <ChevronDown className="h-6 w-6" />
            </motion.button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-emoto-bg to-transparent" />
        </section>

        {/* CAPÍTULO 1 */}
        <Chapter
          id="capitulo-1"
          numero="01"
          etiqueta="Tóquio, anos 90"
          titulo="Duas gotas da mesma fonte, dois mundos diferentes"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <Paragrafo>
                Dentro de uma sala refrigerada, um pesquisador japonês observa amostras de
                água congeladas a menos de vinte graus. Duas gotas vieram exatamente da
                mesma fonte. A primeira aparece disforme, escura, sem centro. A segunda
                revela um hexágono quase desenhado à mão.
              </Paragrafo>
              <Paragrafo>
                A diferença entre elas não estava na composição química. Estava no que cada
                amostra recebeu antes de congelar. Uma foi exposta a palavras agressivas.
                A outra, a uma oração e a uma música de Mozart.
              </Paragrafo>
              <Paragrafo>
                A pergunta que nasceu ali acompanha a ciência da água até hoje: por que a
                mesma água criou duas realidades tão opostas?
              </Paragrafo>
            </div>
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-emoto-accent/20 blur-3xl" />
              <img
                src={labTokyo}
                alt="Laboratório japonês com microscópio e uma amostra de água congelada"
                loading="lazy"
                width={1600}
                height={1000}
                className="relative rounded-2xl border border-white/10 object-cover"
              />
            </motion.div>
          </div>
        </Chapter>

        {/* COMPARATIVO DE CRISTAIS */}
        <section className="relative px-6 py-10">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {[
              {
                img: crystalChaos,
                titulo: "Palavras de desprezo",
                texto: "Estrutura quebrada, sem simetria, sem centro definido.",
                cor: "border-red-500/30 text-red-400",
              },
              {
                img: crystalLove,
                titulo: "Gratidão e cuidado",
                texto: "Geometria hexagonal, simetria completa, brilho uniforme.",
                cor: "border-emoto-accent/40 text-emoto-accent",
              },
            ].map((item) => (
              <motion.figure
                key={item.titulo}
                {...fadeUp}
                className={`overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-sm ${item.cor}`}
              >
                <img
                  src={item.img}
                  alt={`Cristal de água formado a partir de ${item.titulo.toLowerCase()}`}
                  loading="lazy"
                  className="h-56 w-full object-cover md:h-64"
                />
                <figcaption className="p-6">
                  <h3 className="font-display text-lg font-semibold">{item.titulo}</h3>
                  <p className="mt-2 font-body text-sm text-emoto-silver/80">{item.texto}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        {/* CAPÍTULO 2 */}
        <Chapter numero="02" etiqueta="Quem foi ele" titulo="Masaru Emoto, o pesquisador que tratou a água como algo vivo">
          <div className="space-y-6">
            <Paragrafo>
              Nascido em Yokohama, em 1943, Masaru Emoto dedicou mais de vinte anos ao
              estudo do comportamento da água. Enquanto boa parte do mundo tratava a água
              como um recurso a ser medido, ele passou a observá-la como uma testemunha
              silenciosa daquilo que acontece ao redor.
            </Paragrafo>
            <Paragrafo>
              Seu método era simples de descrever e difícil de esquecer: congelar gotas de
              água coletadas em diferentes lugares e fotografá-las em microscópio. Água de
              torneira de grandes cidades. Água de represas. Água de nascentes intocadas.
              Os resultados eram visivelmente distintos.
            </Paragrafo>
            <Paragrafo>
              A partir dessa observação, ele conduziu experimentos com música, com palavras
              escritas em etiquetas coladas nos frascos e com intenções direcionadas por
              grupos de pessoas. Publicou o trabalho em livros como Mensagens da Água, que
              alcançaram leitores em dezenas de países.
            </Paragrafo>
            <Paragrafo>
              É importante dizer com honestidade: esse trabalho nunca foi consenso
              científico. Parte da comunidade acadêmica questiona o método de seleção das
              fotos. Emoto sempre respondeu que sua obra era um convite à observação e ao
              respeito, não um dogma. Foi assim que ele criou o projeto Emoto Peace, com o
              objetivo de levar o livro infantil Mensagens da Água gratuitamente a crianças
              do mundo inteiro.
            </Paragrafo>
          </div>

          <motion.blockquote
            {...fadeUp}
            className="mt-12 rounded-2xl border-l-2 border-emoto-highlight bg-white/5 p-8 backdrop-blur-sm"
          >
            <p className="font-display text-xl italic leading-relaxed text-white md:text-2xl">
              "Tudo aquilo que está em sintonia com a natureza se manifesta na forma de um
              belo cristal hexagonal."
            </p>
            <footer className="mt-4 font-body text-sm text-emoto-silver/70">
              Ideia central defendida por Masaru Emoto em suas apresentações
            </footer>
          </motion.blockquote>
        </Chapter>

        {/* FAIXA VISUAL */}
        <section className="relative">
          <div className="relative h-[320px] w-full overflow-hidden md:h-[460px]">
            <img
              src={nascenteJapao}
              alt="Nascente de montanha com água corrente sobre pedras escuras"
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-105 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emoto-bg via-emoto-bg/60 to-transparent" />
            <div className="relative mx-auto flex h-full max-w-5xl items-center px-6">
              <div className="max-w-xl">
                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-emoto-highlight">
                  O padrão da natureza
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white md:text-4xl">
                  A água que se move, respira e carrega minerais
                </h2>
                <p className="mt-4 font-body text-sm leading-relaxed text-white/85 md:text-base">
                  Nas nascentes, a água desce em curvas, encontra rochas, recebe minerais e
                  se oxigena. É esse percurso que Emoto apontava como a origem das imagens
                  mais harmônicas que registrou.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAPÍTULO 3 */}
        <Chapter numero="03" etiqueta="A virada de visão" titulo="Como ele mudou a forma como o mundo enxerga a água">
          <div className="space-y-6">
            <Paragrafo>
              Antes de Emoto, a conversa sobre qualidade da água girava quase toda em torno
              de contaminantes. Estava certa, mas era incompleta. O trabalho dele
              acrescentou uma pergunta nova ao debate: além de estar limpa, em que estado
              essa água chega até nós?
            </Paragrafo>
            <Paragrafo>
              A água que sai da sua torneira percorreu quilômetros dentro de tubulações
              fechadas, sem luz e sem movimento natural. Recebeu cloro para se manter
              segura no caminho. Chegou tecnicamente potável e, ainda assim, muito distante
              da água de uma nascente.
            </Paragrafo>
            <Paragrafo>
              Aprendemos a remover a sujeira visível. Emoto nos lembrou de olhar também
              para a estrutura invisível. Essa mudança de olhar abriu espaço para toda uma
              geração de pesquisas sobre pH, mineralização, oxigenação e vitalidade da
              água.
            </Paragrafo>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Memória e informação",
                d: "A ideia de que a água registra o ambiente ao redor e responde a ele.",
              },
              {
                t: "Palavra e intenção",
                d: "Os experimentos com música, palavras e orações que popularizaram o tema.",
              },
              {
                t: "Consciência coletiva",
                d: "O projeto Emoto Peace, levando o tema para crianças em vários países.",
              },
            ].map((c) => (
              <motion.div
                key={c.t}
                {...fadeUp}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-emoto-accent/40"
              >
                <h3 className="font-display text-base font-semibold text-white md:text-lg">{c.t}</h3>
                <p className="mt-2 font-body text-sm text-emoto-silver/80">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </Chapter>

        {/* CAPÍTULO 4 */}
        <Chapter numero="04" etiqueta="O encontro" titulo="Como a Acqualive entrou nessa história">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div {...fadeUp} className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 rounded-3xl bg-emoto-highlight/15 blur-3xl" />
              <img
                src={hexagonCrystal}
                alt="Cristal hexagonal de água em detalhe"
                loading="lazy"
                width={1600}
                height={1000}
                className="relative rounded-2xl border border-white/10 object-cover"
              />
            </motion.div>
            <div className="order-1 space-y-6 lg:order-2">
              <Paragrafo>
                A Acqualive não nasceu de uma planilha de mercado. Nasceu de uma inquietação
                parecida com a de Emoto: se a natureza já sabe fazer a melhor água do
                planeta, por que não aprender com ela em vez de tentar substituí-la?
              </Paragrafo>
              <Paragrafo>
                Esse caminho nos levou ao Japão. Estudamos as publicações, as fotografias e
                o método de trabalho do instituto de Masaru Emoto. Tivemos a honra de
                apresentar nossa tecnologia de purificação e alcalinização diretamente ao
                instituto, não apenas para aprender, mas para mostrar o que havíamos
                desenvolvido no Brasil.
              </Paragrafo>
              <Paragrafo>
                Desse encontro nasceu o Acqualive Vittro, produzido em vidro e barro, com as
                palavras amor e gratidão gravadas em baixo relevo na estrutura do filtro.
                Uma homenagem direta ao trabalho do pesquisador e o início de uma linha de
                produtos guiada pelo mesmo princípio.
              </Paragrafo>
            </div>
          </div>
        </Chapter>

        {/* CAPÍTULO 5 */}
        <Chapter numero="05" etiqueta="O legado" titulo="Uma sucessora prática de um estudo sensível">
          <div className="space-y-6">
            <Paragrafo>
              Emoto deixou uma pergunta aberta e nós escolhemos respondê-la com engenharia.
              Se a água mais bonita que ele fotografou vinha de nascentes, o desafio passou
              a ser reproduzir as condições dessas nascentes dentro de casa.
            </Paragrafo>
            <Paragrafo>
              Nada de misticismo aqui. O que fazemos é observável e mensurável: remover
              contaminantes sem eliminar minerais, devolver magnésio, cálcio e potássio,
              elevar o pH para a faixa alcalina e provocar movimento na água durante a
              passagem pelos estágios de filtragem.
            </Paragrafo>
            <Paragrafo>
              A parte sensível continua onde sempre esteve: no gesto de encher um copo com
              atenção, de servir uma água boa para quem se ama e de tratar aquilo que entra
              no corpo com o mesmo cuidado que damos ao que entra na mente. Setenta por
              cento de você é água. Essa é a ponte entre a ciência e o cuidado.
            </Paragrafo>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { t: "Filtração em múltiplos estágios", d: "Retém contaminantes preservando os minerais essenciais." },
              { t: "Reposição mineral", d: "Magnésio, cálcio e potássio em proporções equilibradas." },
              { t: "Água alcalina", d: "pH elevado de forma natural, sem aditivos químicos." },
              { t: "Movimento e vitalidade", d: "A água em fluxo, como acontece em uma nascente." },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="font-display text-base font-semibold text-white md:text-lg">{f.t}</h3>
                <p className="mt-2 font-body text-sm text-emoto-silver/80">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </Chapter>

        {/* CAPÍTULO 6 - PRODUTO E CONVITE */}
        <section className="relative overflow-hidden px-6 py-24 lg:py-32">
          <div className="absolute inset-0 opacity-20">
            <img src={cymaticsPattern} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-emoto-bg via-emoto-bg/90 to-emoto-bg" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl">
            <motion.div {...fadeUp} className="mb-14 text-center">
              <span className="mb-4 block font-body text-[11px] font-medium uppercase tracking-[0.28em] text-emoto-highlight md:text-xs">
                Capítulo final
              </span>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
                Como ter, hoje, uma água próxima da que ele descreveu
              </h2>
              <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-emoto-silver md:text-lg">
                O Acqualive DUO é a expressão mais atual desse caminho. Água purificada,
                alcalina e mineralizada, na temperatura natural ou fresquinha, direto na sua
                cozinha.
              </p>
            </motion.div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div {...fadeUp} className="relative">
                <div className="absolute inset-0 rounded-full bg-emoto-accent/20 blur-3xl" />
                <img
                  src={duoAsset.url}
                  alt="Purificador de água alcalina Acqualive DUO"
                  loading="lazy"
                  className="relative mx-auto w-full max-w-sm"
                />
              </motion.div>

              <div className="space-y-6">
                {[
                  "Purificação em múltiplos estágios com troca simples de refil",
                  "Água alcalina e mineralizada todos os dias, para a família inteira",
                  "Opção de água na temperatura natural ou fresquinha",
                  "Instalação orientada e suporte de um franqueado Acqualive perto de você",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex gap-4"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emoto-highlight" />
                    <p className="font-body text-sm text-emoto-silver/90 md:text-base">{item}</p>
                  </motion.div>
                ))}

                <motion.div {...fadeUp} className="pt-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full rounded-xl bg-gradient-to-r from-emoto-highlight to-orange-500 px-8 py-4 text-center font-display text-base font-semibold text-white shadow-lg shadow-emoto-highlight/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:text-lg"
                  >
                    QUERO CONHECER O ACQUALIVE DUO
                  </a>
                  <p className="mt-4 text-center font-body text-xs text-emoto-silver/70">
                    Em até 10x sem juros e frete grátis. Consulte regiões disponíveis.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.p
              {...fadeUp}
              className="mx-auto mt-20 max-w-2xl text-center font-display text-xl italic leading-relaxed text-white/90 md:text-2xl"
            >
              Honre o seu corpo. Beba a vida em sua forma mais completa.
            </motion.p>
            <p className="mt-4 text-center font-body text-sm uppercase tracking-[0.28em] text-emoto-highlight">
              Acqualive, o legado da água viva
            </p>
          </div>
        </section>
      </article>
    </>
  );
};

export default MassaruEmotoHistoria;
