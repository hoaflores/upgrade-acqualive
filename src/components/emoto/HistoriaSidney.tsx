import { motion } from "framer-motion";
import { Mail, Phone, Plane, Award } from "lucide-react";
import retrato from "@/assets/emoto-historia/emoto-retrato.jpg.asset.json";
import chegada from "@/assets/emoto-historia/emoto-chegada.jpg.asset.json";
import banner from "@/assets/emoto-historia/emoto-banner-evento.jpg.asset.json";
import equipe from "@/assets/emoto-historia/emoto-equipe-evento.jpg.asset.json";
import reuniao from "@/assets/emoto-historia/emoto-reuniao.jpg.asset.json";
import time from "@/assets/emoto-historia/emoto-time-acqualive.jpg.asset.json";
import plateia from "@/assets/emoto-historia/plateia-evento.jpg.asset.json";
import palco from "@/assets/emoto-historia/palco-cristais.jpg.asset.json";
import palestra from "@/assets/emoto-historia/palestra-vittro.jpg.asset.json";
import vittro from "@/assets/emoto-historia/vittro-produto.jpg.asset.json";
import cristal from "@/assets/emoto-historia/cristal-acqualive.jpg.asset.json";

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

const Titulo = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    {...rise}
    className="font-display text-3xl font-bold leading-[1.15] text-sacra-ink md:text-5xl"
  >
    {children}
  </motion.h2>
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

const PASSOS = [
  {
    icone: Mail,
    titulo: "Um e-mail para Tóquio",
    texto:
      "Sidney escreveu direto para o escritório do Dr. Emoto no Japão. A resposta veio com um número de telefone e um convite para conversar.",
  },
  {
    icone: Phone,
    titulo: "A ligação que virou evento",
    texto:
      "A ideia foi apresentada ao próprio Dr. Emoto por telefone. Em 2010, no Clube Monte Líbano, no Rio de Janeiro, mais de 1200 pessoas assistiram ao encontro As Mensagens da Água.",
  },
  {
    icone: Plane,
    titulo: "Treinamento no Japão",
    texto:
      "Depois do evento veio a viagem ao Japão e a formação na técnica Vibration, criada pelo próprio Dr. Emoto para o estudo da memória da água.",
  },
  {
    icone: Award,
    titulo: "Projeto Emoto pela Paz",
    texto:
      "O reconhecimento chegou como convite: representar no Brasil o Projeto Emoto pela Paz, iniciativa internacional dedicada à água.",
  },
];

const GALERIA = [
  {
    src: banner.url,
    alt: "Equipe Acqualive e Dr. Masaru Emoto diante dos banners do evento O Poder Curativo da Água",
    legenda: "O Poder Curativo da Água, Rio de Janeiro",
    span: "sm:col-span-2",
  },
  {
    src: plateia.url,
    alt: "Auditório lotado durante a palestra do Dr. Masaru Emoto no Rio de Janeiro",
    legenda: "Mais de 1200 pessoas no Clube Monte Líbano",
    span: "",
  },
  {
    src: chegada.url,
    alt: "Dr. Masaru Emoto caminhando acompanhado pela equipe no dia do evento",
    legenda: "A chegada do Dr. Emoto ao evento",
    span: "",
  },
  {
    src: reuniao.url,
    alt: "Dr. Masaru Emoto e a equipe Acqualive reunidos em torno de uma mesa de trabalho",
    legenda: "Reuniões de trabalho com a equipe Acqualive",
    span: "",
  },
  {
    src: time.url,
    alt: "Dr. Masaru Emoto posando com integrantes da equipe Acqualive",
    legenda: "O time que recebeu o Dr. Emoto no Brasil",
    span: "",
  },
  {
    src: palco.url,
    alt: "Palco do evento com a exposição das fotografias de cristais de água",
    legenda: "A exposição de cristais no palco",
    span: "",
  },
  {
    src: palestra.url,
    alt: "Apresentação do purificador Acqualive Vittro durante a palestra",
    legenda: "O Vittro apresentado ao público",
    span: "",
  },
  {
    src: equipe.url,
    alt: "Dr. Masaru Emoto e convidados reunidos para foto oficial do evento",
    legenda: "Foto oficial da noite de lançamento",
    span: "sm:col-span-2",
  },
];

const HistoriaSidney = () => (
  <>
    {/* SIDNEY */}
    <section id="sidney-rodrigues" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-sacra-gold/10 blur-3xl" />
          <img
            src={retrato.url}
            alt="Dr. Masaru Emoto ao lado da equipe Acqualive durante sua vinda ao Brasil"
            loading="lazy"
            width={910}
            height={768}
            className="relative rounded-3xl border border-white object-cover shadow-xl"
          />
          <p className="relative mt-3 text-center font-body text-xs text-sacra-muted">
            Dr. Masaru Emoto no Brasil, a convite da Acqualive
          </p>
        </motion.div>

        <div className="space-y-7">
          <Etiqueta>04B · Sidney Rodrigues</Etiqueta>
          <Titulo>Quem trouxe o Dr. Emoto para o Brasil.</Titulo>
          <Frase delay={0.05}>
            Sidney Rodrigues, diretor científico da Acqualive, foi o responsável por transformar
            admiração em encontro.
          </Frase>
          <Frase delay={0.1}>
            Antes de existir parceria, existiu curiosidade. E uma pergunta simples: será que ele
            responde?
          </Frase>
          <motion.div
            {...rise}
            transition={{ ...rise.transition, delay: 0.15 }}
            className="rounded-2xl border-l-2 border-sacra-gold bg-white p-6 shadow-sm"
          >
            <p className="font-display text-lg font-semibold leading-snug text-sacra-ink">
              "Mandei um e-mail para o escritório dele em Tóquio. Para minha surpresa, responderam
              com um telefone para que eu ligasse."
            </p>
            <p className="mt-3 font-body text-sm text-sacra-muted">
              Sidney Rodrigues, diretor científico da Acqualive
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* PASSOS */}
    <section className="bg-gradient-to-b from-white to-sacra-mist/50 px-6 pb-24 pt-4 md:pb-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {PASSOS.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-sacra-veil bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sacra-mist text-sacra-deep">
                <p.icone className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-sacra-ink md:text-lg">
                {p.titulo}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-sacra-muted">{p.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* GALERIA */}
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Etiqueta>2010 e 2014 · Os encontros</Etiqueta>
          <Titulo>Não foi teoria. Foi presença.</Titulo>
          <Frase delay={0.05}>
            Registros das duas vindas do Dr. Emoto ao Brasil, das reuniões com a equipe Acqualive
            e das plateias que lotaram os encontros sobre a água.
          </Frase>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALERIA.map((g, i) => (
            <motion.figure
              key={g.src}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className={`group overflow-hidden rounded-3xl border border-sacra-veil bg-white shadow-sm ${g.span}`}
            >
              <div className="overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64"
                />
              </div>
              <figcaption className="px-5 py-4 font-body text-sm text-sacra-muted">
                {g.legenda}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>

    {/* VITTRO E CRISTAL */}
    <section className="bg-gradient-to-b from-sacra-mist/60 to-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Etiqueta>2014 · O Vittro</Etiqueta>
          <Titulo>O purificador que nasceu desse encontro.</Titulo>
          <Frase delay={0.05}>
            Vidro e barro, com as palavras amor e gratidão gravadas em baixo relevo no filtro.
            Uma homenagem ao experimento mais conhecido do Dr. Emoto, feita em forma de produto.
          </Frase>
        </div>

        <div className="mt-14 grid items-center gap-8 md:grid-cols-2">
          <motion.figure
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl border border-sacra-veil bg-white shadow-lg"
          >
            <img
              src={vittro.url}
              alt="Purificador Acqualive Vittro em vidro e barro exposto no evento de lançamento"
              loading="lazy"
              className="h-72 w-full object-cover md:h-96"
            />
            <figcaption className="px-5 py-4 font-body text-sm text-sacra-muted">
              Acqualive Vittro, lançado em 2014
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl border border-sacra-veil bg-sacra-ink/95 shadow-lg"
          >
            <img
              src={cristal.url}
              alt="Cristal hexagonal fotografado a partir da água filtrada pelo Acqualive"
              loading="lazy"
              className="h-72 w-full object-contain p-6 md:h-96"
            />
            <figcaption className="px-5 py-4 font-body text-sm text-white/70">
              O cristal fotografado pelo Dr. Emoto a partir da água que passou pelo Acqualive
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  </>
);

export default HistoriaSidney;
