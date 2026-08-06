import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import luzAgua from "@/assets/emoto/luz-agua.jpg";
import gotaLuz from "@/assets/emoto/gota-luz.jpg";
import hexagonCrystal from "@/assets/emoto/hexagon-crystal.jpg";
import nascenteJapao from "@/assets/emoto/nascente-japao.jpg";
import crystalLove from "@/assets/emoto/crystal-love.jpg";
import crystalChaos from "@/assets/emoto/crystal-chaos.jpg";
import HistoriaSidney from "@/components/emoto/HistoriaSidney";
import CarrosselFiltros from "@/components/emoto/CarrosselFiltros";


const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=554130777777&text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20da%20hist%C3%B3ria%20Acqualive%20e%20Masaru%20Emoto%20e%20quero%20saber%20mais.";

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const Etiqueta = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    {...rise}
    className="inline-flex items-center gap-2 rounded-full border border-sacra-blue/25 bg-white/70 px-4 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-sacra-deep shadow-sm backdrop-blur"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-sacra-gold" />
    {children}
  </motion.span>
);

const Frase = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.p
    {...rise}
    transition={{ ...rise.transition, delay }}
    className="font-body text-lg leading-relaxed text-sacra-muted md:text-xl"
  >
    {children}
  </motion.p>
);

const Titulo = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    {...rise}
    className="font-display text-3xl font-bold leading-[1.15] text-sacra-ink md:text-5xl"
  >
    {children}
  </motion.h2>
);

const MassaruEmotoHistoria = () => {
  const scrollToStory = () =>
    document.getElementById("capitulo-1")?.scrollIntoView({ behavior: "smooth" });

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

      <article className="min-h-screen overflow-x-hidden bg-sacra-bg">
        {/* HERO */}
        <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
          >
            <img
              src={luzAgua}
              alt="Raios de luz atravessando a névoa sobre a água"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/55 to-sacra-bg" />
          </motion.div>

          {/* halo */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute left-1/2 top-1/3 z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-7 block font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-sacra-deep md:text-xs"
            >
              A história da água viva
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mb-6 font-display text-4xl font-bold leading-[1.08] text-sacra-ink md:text-6xl lg:text-7xl"
            >
              A água escuta.
              <br />
              <span className="bg-gradient-to-r from-sacra-blue via-sacra-deep to-sacra-gold bg-clip-text text-transparent">
                Alguém precisava olhar.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="mx-auto mb-10 max-w-xl font-body text-base leading-relaxed text-sacra-muted md:text-lg"
            >
              De um microscópio em Tóquio até a sua cozinha.
            </motion.p>

            <motion.button
              onClick={scrollToStory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 9, 0] }}
              transition={{
                opacity: { delay: 1.3, duration: 0.5 },
                y: { delay: 1.7, duration: 1.8, repeat: Infinity },
              }}
              className="mx-auto flex flex-col items-center gap-2 text-sacra-deep transition-colors hover:text-sacra-gold"
            >
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em]">
                Comece pelo começo
              </span>
              <ChevronDown className="h-5 w-5" />
            </motion.button>
          </div>
        </section>

        {/* 01 */}
        <section id="capitulo-1" className="relative px-6 py-14 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
              <div className="space-y-7">
                <Etiqueta>01 · Tóquio, anos 90</Etiqueta>
                <Titulo>Duas gotas da mesma fonte.</Titulo>
                <Frase delay={0.05}>Uma virou caos. A outra, um hexágono perfeito.</Frase>
                <Frase delay={0.1}>
                  A química era idêntica. A diferença estava no que cada uma ouviu antes de
                  congelar.
                </Frase>
                <motion.p
                  {...rise}
                  transition={{ ...rise.transition, delay: 0.15 }}
                  className="font-display text-xl font-semibold text-sacra-ink md:text-2xl"
                >
                  Uma recebeu insultos. A outra, uma oração.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="absolute -inset-8 rounded-full bg-white blur-3xl" />
                <img
                  src={gotaLuz}
                  alt="Gota de água suspensa em luz suave"
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="relative rounded-3xl border border-white/70 object-cover shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* COMPARATIVO */}
        <section className="px-6 pb-14 md:pb-20">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {[
              {
                img: crystalChaos,
                titulo: "Desprezo",
                texto: "Sem simetria. Sem centro.",
                ring: "border-sacra-veil",
              },
              {
                img: crystalLove,
                titulo: "Gratidão",
                texto: "Geometria inteira. Luz uniforme.",
                ring: "border-sacra-gold/50",
              },
            ].map((item, i) => (
              <motion.figure
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className={`overflow-hidden rounded-3xl border bg-white shadow-lg ${item.ring}`}
              >
                <img
                  src={item.img}
                  alt={`Cristal de água associado a ${item.titulo.toLowerCase()}`}
                  loading="lazy"
                  className="h-52 w-full object-cover md:h-60"
                />
                <figcaption className="p-6">
                  <h3 className="font-display text-lg font-semibold text-sacra-ink">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 font-body text-sm text-sacra-muted">{item.texto}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        {/* 02 */}
        <section className="relative bg-gradient-to-b from-white to-sacra-mist/60 px-6 py-14 md:py-24">
          <div className="mx-auto max-w-3xl space-y-7 text-center">
            <Etiqueta>02 · Quem foi ele</Etiqueta>
            <Titulo>Masaru Emoto olhou para a água como algo vivo.</Titulo>
            <Frase delay={0.05}>
              Mais de vinte anos congelando gotas e fotografando o que aparecia no
              microscópio.
            </Frase>
            <Frase delay={0.1}>
              Torneira de cidade grande. Represa. Nascente intocada. Imagens completamente
              diferentes.
            </Frase>
          </div>

          <div className="mx-auto mt-10 md:mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { n: "1943", d: "Nasce em Yokohama" },
              { n: "+20", d: "Anos de pesquisa com a água" },
              { n: "Emoto Peace", d: "Livro infantil doado a crianças no mundo" },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-white bg-white/80 p-6 text-center shadow-sm backdrop-blur"
              >
                <p className="font-display text-2xl font-bold text-sacra-deep md:text-3xl">{s.n}</p>
                <p className="mt-2 font-body text-sm text-sacra-muted">{s.d}</p>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            {...rise}
            className="mx-auto mt-10 md:mt-14 max-w-3xl rounded-3xl bg-white p-8 text-center shadow-lg md:p-12"
          >
            <p className="font-display text-xl italic leading-relaxed text-sacra-ink md:text-3xl">
              "Tudo o que está em sintonia com a natureza se manifesta como um belo cristal
              hexagonal."
            </p>
            <footer className="mt-5 font-body text-xs uppercase tracking-[0.22em] text-sacra-muted">
              Masaru Emoto
            </footer>
          </motion.blockquote>

          <motion.p
            {...rise}
            className="mx-auto mt-10 max-w-2xl text-center font-body text-sm leading-relaxed text-sacra-muted"
          >
            Com honestidade: o trabalho dele nunca foi consenso científico. Emoto sempre o
            apresentou como um convite à observação e ao respeito, não como dogma.
          </motion.p>
        </section>

        {/* FAIXA */}
        <section className="relative">
          <div className="relative h-[300px] w-full overflow-hidden md:h-[420px]">
            <motion.img
              src={nascenteJapao}
              alt="Nascente de montanha correndo sobre pedras"
              loading="lazy"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/10" />
            <div className="relative mx-auto flex h-full max-w-5xl items-center px-6">
              <div className="max-w-md space-y-4">
                <Etiqueta>O padrão da natureza</Etiqueta>
                <h2 className="font-display text-2xl font-bold leading-tight text-sacra-ink md:text-4xl">
                  Água que se move, respira e carrega minerais.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* 03 */}
        <section className="px-6 py-14 md:py-24">
          <div className="mx-auto max-w-3xl space-y-7 text-center">
            <Etiqueta>03 · A virada</Etiqueta>
            <Titulo>Ele acrescentou uma pergunta nova.</Titulo>
            <Frase delay={0.05}>
              Antes: a água está limpa? Depois dele: em que estado ela chega até nós?
            </Frase>
          </div>

          <div className="mx-auto mt-10 md:mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              { t: "Memória", d: "A água registra o ambiente e responde a ele." },
              { t: "Palavra", d: "Música, palavras e intenção nos experimentos." },
              { t: "Consciência", d: "O tema chegando às crianças em vários países." },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-sacra-veil bg-white p-7 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-sacra-ink">{c.t}</h3>
                <p className="mt-2 font-body text-sm text-sacra-muted">{c.d}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...rise}
            className="mx-auto mt-10 md:mt-14 max-w-2xl text-center font-display text-xl font-semibold text-sacra-ink md:text-2xl"
          >
            Aprendemos a tirar a sujeira visível. Ele lembrou de cuidar do que não se vê.
          </motion.p>
        </section>

        {/* 03B · A ÁGUA DA NASCENTE */}
        <section className="bg-gradient-to-b from-white to-sacra-mist/50 px-6 py-14 md:py-24">
          <div className="mx-auto max-w-3xl space-y-7 text-center">
            <Etiqueta>A água que a natureza faz</Etiqueta>
            <Titulo>Por que a água de nascente é diferente.</Titulo>
            <Frase delay={0.05}>
              Ela desce devagar por camadas de pedra e areia. Filtra sozinha.
            </Frase>
            <Frase delay={0.1}>
              No caminho, dissolve minerais. Ganha sabor, leveza e um pH levemente alcalino.
            </Frase>
            <Frase delay={0.15}>
              Depois se movimenta. Nunca fica parada em um cano ou em uma caixa fechada.
            </Frase>
          </div>

          <div className="mx-auto mt-10 md:mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              {
                t: "Nascente",
                d: "Filtragem natural, minerais preservados, água em movimento.",
              },
              {
                t: "Torneira",
                d: "Cloro para transportar, tubulação antiga, sabor alterado.",
              },
              {
                t: "Garrafa plástica",
                d: "Semanas paradas, calor, custo alto e lixo todo mês.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-sacra-veil bg-white p-7 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-sacra-ink">{c.t}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-sacra-muted">
                  {c.d}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...rise}
            className="mx-auto mt-10 md:mt-14 max-w-2xl text-center font-body text-base leading-relaxed text-sacra-muted"
          >
            Emoto fotografou essa diferença. O que ele viu no microscópio, a gente sente no
            gosto.
          </motion.p>
        </section>


        {/* 04 */}
        <section className="bg-gradient-to-b from-sacra-mist/60 to-white px-6 py-14 md:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-8 rounded-full bg-sacra-gold/10 blur-3xl" />
              <img
                src={hexagonCrystal}
                alt="Cristal hexagonal de água em detalhe"
                loading="lazy"
                width={1600}
                height={1000}
                className="relative rounded-3xl border border-white object-cover shadow-xl"
              />
            </motion.div>

            <div className="order-1 space-y-7 lg:order-2">
              <Etiqueta>04 · O encontro</Etiqueta>
              <Titulo>A Acqualive foi até o Japão.</Titulo>
              <Frase delay={0.05}>
                Não para vender filtros. Para continuar uma pesquisa.
              </Frase>
              <Frase delay={0.1}>
                Apresentamos nossa tecnologia ao instituto de Masaru Emoto e mostramos o que
                havíamos desenvolvido no Brasil.
              </Frase>
              <motion.div
                {...rise}
                transition={{ ...rise.transition, delay: 0.15 }}
                className="rounded-2xl border-l-2 border-sacra-gold bg-white p-6 shadow-sm"
              >
                <p className="font-body text-base leading-relaxed text-sacra-ink">
                  Daí nasceu o Acqualive Vittro, em vidro e barro, com as palavras amor e
                  gratidão gravadas em baixo relevo no filtro.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <HistoriaSidney />

        {/* 05 */}

        <section className="px-6 py-14 md:py-24">
          <div className="mx-auto max-w-3xl space-y-7 text-center">
            <Etiqueta>05 · O legado</Etiqueta>
            <Titulo>Ele deixou uma pergunta. Respondemos com engenharia.</Titulo>
            <Frase delay={0.05}>
              Se a água mais bonita vem das nascentes, o desafio é repetir a nascente dentro
              de casa.
            </Frase>
          </div>

          <div className="mx-auto mt-10 md:mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              { t: "Filtração em estágios", d: "Retém contaminantes, preserva minerais." },
              { t: "Reposição mineral", d: "Magnésio, cálcio e potássio equilibrados." },
              { t: "Água alcalina", d: "pH elevado de forma natural." },
              { t: "Movimento", d: "A água em fluxo, como em uma nascente." },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-sacra-veil bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-base font-semibold text-sacra-ink md:text-lg">
                  {f.t}
                </h3>
                <p className="mt-2 font-body text-sm text-sacra-muted">{f.d}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...rise}
            className="mx-auto mt-10 md:mt-14 max-w-xl text-center font-display text-xl font-semibold text-sacra-ink md:text-2xl"
          >
            Setenta por cento de você é água. Essa é a ponte entre a ciência e o cuidado.
          </motion.p>
        </section>

        {/* 05B · QUALIDADE */}
        <section className="bg-gradient-to-b from-white to-sacra-mist/50 px-6 py-14 md:py-24">
          <div className="mx-auto max-w-3xl space-y-7 text-center">
            <Etiqueta>Qualidade · O que existe dentro do copo</Etiqueta>
            <Titulo>Água potável e água boa não são a mesma coisa.</Titulo>
            <Frase delay={0.05}>
              Potável significa que não vai te fazer mal hoje.
            </Frase>
            <Frase delay={0.1}>
              Boa significa que hidrata, repõe minerais e não deixa gosto nenhum na boca.
            </Frase>
          </div>

          <div className="mx-auto mt-10 md:mt-14 max-w-4xl space-y-4">
            {[
              {
                t: "Cloro",
                d: "Protege a água na tubulação, mas altera sabor e aroma. Sai na filtração.",
              },
              {
                t: "Sedimentos e ferrugem",
                d: "Vêm da rede antiga e da caixa d'água. É o que deixa a água turva.",
              },
              {
                t: "Minerais",
                d: "Cálcio, magnésio e potássio deveriam ficar. Muitos sistemas tiram tudo junto.",
              },
              {
                t: "pH",
                d: "Água muito ácida pesa no organismo. A referência da natureza é levemente alcalina.",
              },
            ].map((q, i) => (
              <motion.div
                key={q.t}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col gap-1 rounded-2xl border border-sacra-veil bg-white p-6 shadow-sm md:flex-row md:items-baseline md:gap-8"
              >
                <h3 className="font-display text-base font-semibold text-sacra-deep md:w-48 md:shrink-0 md:text-lg">
                  {q.t}
                </h3>
                <p className="font-body text-sm leading-relaxed text-sacra-muted md:text-base">
                  {q.d}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...rise}
            className="mx-auto mt-12 max-w-2xl text-center font-body text-base leading-relaxed text-sacra-muted"
          >
            Tirar o que faz mal sem levar embora o que faz bem. É esse o equilíbrio que a
            engenharia da Acqualive persegue.
          </motion.p>
        </section>

        {/* 05C · SAÚDE */}
        <section className="px-6 py-14 md:py-24">
          <div className="mx-auto max-w-3xl space-y-7 text-center">
            <Etiqueta>Saúde e bem-estar · O corpo em água</Etiqueta>
            <Titulo>Você não bebe água. Você se reconstrói com ela.</Titulo>
            <Frase delay={0.05}>
              Ela transporta nutrientes, regula a temperatura e ajuda o corpo a eliminar o
              que sobra.
            </Frase>
            <Frase delay={0.1}>
              Nenhuma célula funciona bem em um corpo com pouca água.
            </Frase>
          </div>

          <div className="mx-auto mt-10 md:mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { n: "73%", d: "do cérebro é água" },
              { n: "83%", d: "do sangue é água" },
              { n: "31%", d: "dos ossos é água" },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-white bg-white/85 p-6 text-center shadow-sm backdrop-blur"
              >
                <p className="font-display text-3xl font-bold text-sacra-deep">{s.n}</p>
                <p className="mt-2 font-body text-sm text-sacra-muted">{s.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {[
              {
                t: "Energia ao longo do dia",
                d: "Cansaço no meio da tarde costuma ser sede antes de ser fome.",
              },
              {
                t: "Digestão mais leve",
                d: "Água acompanha o processo do começo ao fim.",
              },
              {
                t: "Pele e disposição",
                d: "Hidratação constante aparece antes de tudo no rosto.",
              },
              {
                t: "Vontade de beber",
                d: "Água com sabor limpo faz a pessoa beber mais, sem esforço.",
              },
            ].map((h, i) => (
              <motion.div
                key={h.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-sacra-veil bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-base font-semibold text-sacra-ink md:text-lg">
                  {h.t}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-sacra-muted">
                  {h.d}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...rise}
            className="mx-auto mt-10 md:mt-14 max-w-2xl text-center font-display text-xl font-semibold text-sacra-ink md:text-2xl"
          >
            A água que você repete todos os dias é a que constrói você.
          </motion.p>
        </section>

        {/* 06 CTA */}

        <section className="relative overflow-hidden bg-gradient-to-b from-white via-sacra-mist/70 to-white px-6 py-14 md:py-24">
          <div
            aria-hidden
            className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white blur-3xl"
          />
          <div className="relative mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <Etiqueta>Capítulo final</Etiqueta>
              <Titulo>A melhor água que ele descreveu, hoje, na sua cozinha.</Titulo>
              <Frase delay={0.05}>
                Purificada, alcalina e mineralizada. Natural ou fresquinha.
              </Frase>
            </div>

            <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <CarrosselFiltros />
              </motion.div>


              <div className="space-y-5">
                {[
                  "Troca de refil simples, sem manutenção complicada",
                  "Água alcalina e mineralizada para a família inteira",
                  "Natural ou fresquinha, na mesma torneira",
                  "Franqueado Acqualive perto de você",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sacra-gold" />
                    <p className="font-body text-sm text-sacra-ink md:text-base">{item}</p>
                  </motion.div>
                ))}

                <motion.div {...rise} className="pt-4">
                  <a
                    href="https://www.acqualive.com.br/collections/all"
                    target="_top"
                    className="inline-block w-full rounded-2xl bg-gradient-to-r from-sacra-blue to-sacra-gold px-8 py-4 text-center font-display text-base font-semibold text-white shadow-2xl transition-transform duration-300 hover:scale-[1.02] md:text-lg"
                  >
                    QUERO CONHECER OS FILTROS ACQUALIVE
                  </a>
                  <p className="mt-4 text-center font-body text-xs text-sacra-muted">
                    Em até 10x sem juros e frete grátis. Consulte regiões disponíveis.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.p
              {...rise}
              className="mx-auto mt-20 max-w-xl text-center font-display text-2xl italic leading-relaxed text-sacra-ink md:text-3xl"
            >
              Beba a vida em sua forma mais completa.
            </motion.p>
            <p className="mt-4 text-center font-body text-xs uppercase tracking-[0.3em] text-sacra-deep">
              Acqualive, o legado da água viva
            </p>
          </div>
        </section>
      </article>
    </>
  );
};

export default MassaruEmotoHistoria;
