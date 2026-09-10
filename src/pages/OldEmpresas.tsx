import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

import logo from "@/assets/acqualive-logo-azul.png.asset.json";
import banner2 from "@/assets/old-empresas/banner2.jpg.asset.json";
import bg3 from "@/assets/old-empresas/bg3.jpg.asset.json";
import ligueIcon from "@/assets/old-empresas/ligue.png.asset.json";
import icone1 from "@/assets/old-empresas/icone1.png.asset.json";
import icone2 from "@/assets/old-empresas/icone2.png.asset.json";
import icone3 from "@/assets/old-empresas/icone3.png.asset.json";
import icone4 from "@/assets/old-empresas/icone4.png.asset.json";
import icone5 from "@/assets/old-empresas/icone5.png.asset.json";
import check from "@/assets/old-empresas/check.png.asset.json";
import dep03 from "@/assets/old-empresas/depoimentos_03.jpg.asset.json";
import dep04 from "@/assets/old-empresas/depoimentos_04.jpg.asset.json";
import dep06 from "@/assets/old-empresas/depoimentos_06.jpg.asset.json";
import dep15 from "@/assets/old-empresas/depoimentos_15.jpg.asset.json";
import dep11 from "@/assets/old-empresas/depoimentos_11.jpg.asset.json";
import dep12 from "@/assets/old-empresas/depoimentos_12.jpg.asset.json";
import selos from "@/assets/old-empresas/selos.jpg.asset.json";
import duoFrente from "@/assets/duo/duo-frente-transp.png.asset.json";
import duoSecao1 from "@/assets/old-empresas/duo-secao1-empresas.png.asset.json";
import duoAmbAcademia from "@/assets/duo/Duo_Ambientada_3.png.asset.json";
import duoAmbCozinha from "@/assets/duo/Duo_Ambientada_1.png.asset.json";
import duoAmbGarrafa from "@/assets/duo/Duo_Ambientada_4.png.asset.json";

const AZUL = "#1460B6";
const CINZA = "#8A94A2";

/** Responsavel comercial da pagina: Alex */
const WHATSAPP_NUMERO = "555194896709";
const WHATSAPP_EXIBICAO = "(51) 99489-6709";
const TELEFONE_0800 = "0800 605 6501";
const TELEFONE_0800_LINK = "tel:08006056501";

const wa = (mensagem: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

const WA_GERAL = wa(
  "Olá, Alex! Vim pela página Acqualive para Empresas e gostaria de saber mais sobre as soluções."
);

/**
 * Produtos empresariais atuais: Acqualive DUO e Acqualive DUO Lite.
 * DUO: dados confirmados na pagina oficial do produto.
 * DUO Lite: sem ficha tecnica e sem imagem oficial disponiveis ate o momento.
 * Nao publicar preco, capacidade ou custo por litro sem fonte confirmada.
 */
const PRODUTOS = [
  {
    nome: "ACQUALIVE DUO",
    imagem: duoFrente.url,
    alt: "Acqualive DUO, purificador de água alcalina natural e gelada",
    nota: "*água natural e gelada no mesmo equipamento",
    destaques: [
      "Consumo direto no ponto de uso",
      "Água natural e gelada",
      "Tecnologia TriWay Acqualive",
      "Água alcalina ionizada",
      "Bancada, balcão, armário ou parede",
    ],
    preco: "R$ 4.397,00",
    precoNota: "10x sem juros",
    cta: wa(
      "Olá, Alex! Vim pela página Acqualive para Empresas e gostaria de saber mais sobre o Acqualive DUO."
    ),
  },
  {
    nome: "ACQUALIVE DUO LITE",
    imagem: null,
    alt: "Acqualive DUO Lite",
    nota: "*compatibilidade avaliada ponto a ponto",
    destaques: [
      "Versatilidade de instalação",
      "Torneiras, copas e cozinhas",
      "Geladeiras, cafeteiras e máquinas de suco",
      "Bebedouros e bebedouros industriais",
      "Instalação discreta, inclusive sob a pia",
    ],
    preco: "Consulte",
    precoNota: "condições comerciais para empresas",
    cta: wa(
      "Olá, Alex! Vim pela página Acqualive para Empresas e gostaria de saber mais sobre o Acqualive DUO Lite."
    ),
  },
];

const ICONES = [
  { img: icone1.url, alt: "icone1", texto: <>O <strong>Acqualive DUO</strong> e o <strong>DUO Lite</strong> atendem diferentes necessidades da sua <strong>empresa</strong></> },
  { img: icone2.url, alt: "icone2", texto: <><strong>Fale com nosso consultor</strong> e receba a solução instalada no seu endereço</> },
  { img: icone3.url, alt: "icone3", texto: <>Desfrute dos benefícios de consumir uma <strong>água pura, alcalina e ionizada</strong></> },
  { img: icone4.url, alt: "icone4", texto: <>Uma vez adquirido o equipamento, <strong>você só precisa trocar o refil</strong></> },
  { img: icone5.url, alt: "icone5", texto: <>Parcele seu pedido em <strong>até 10x no cartão</strong> ou economize adquirindo um <strong>combo</strong></> },
];

const BENEFICIOS_ESQ = [
  { titulo: "PRATICIDADE", texto: "Água sempre disponível, sem a necessidade de fazer pedidos." },
  { titulo: "SEGURANÇA", texto: "Evite a circulação de pessoas estranhas no interior da empresa" },
  { titulo: "PUREZA", texto: "A água de galão pode ser contaminada por agentes externos e o plástico pode ser cancerígeno por causa do Bisfenol-A" },
];

const BENEFICIOS_DIR = [
  { titulo: "SAÚDE", texto: "Estudos mostram que a água alcalina ionizada aumenta a imunidade" },
  { titulo: "ORGANIZAÇÃO", texto: "Evite o acúmulo de galões vazios até a próxima compra" },
  { titulo: "GARANTIA", texto: "A Acqualive possui todas as certificações para garantir a entrega da melhor água do mundo" },
];

const DEPOIMENTOS = [
  {
    foto: dep03.url,
    texto:
      "“Eu já era cliente da Acqualive há mais de um ano por conta dos benefícios da água alcalina para a saúde e o bem-estar da família. Minha empresa está em busca de cuidar, cada vez mais, do funcionário, pois eles são o maior capital de uma empresa. Por isso instalei os filtros para que meus funcionários possam ter uma saúde melhor, isso é muito importante para nós.”",
    nome: "Leonardo Curioni",
    cargo: "CEO Sices Solar SP",
  },
  {
    foto: dep04.url,
    texto:
      "“Me apaixonei pela Empresa. Eu falo para todos da água alcalina ionizada Acqualive porque, realmente, sou fã.”",
    nome: "Caroline Du Fernandes",
    cargo: "Empresária",
  },
  {
    foto: dep06.url,
    texto:
      "“Para os resultados em uma academia, a parte de nutrição é muito importante. Por isso, a gente conta com uma água diferenciada, uma água alcalina ionizada que faz com que a gente consiga ter nos nossos alunos e atletas um melhor resultado, isso já é comprovado!”",
    nome: "Christian Krause",
    cargo: "Academia Sinergy",
  },
  {
    foto: dep15.url,
    texto:
      "“A água não é só ‘tomar água’, qual água? De onde ela vem? Qual a qualidade? É aí que inicia-se tudo. Nós usamos há quase dez anos os filtros da Acqualive. Pra mim a Acqualive foi um divisor de águas, porque há muito tempo eu vinha buscando qualidade nesse quesito de hidratação e água.”",
    nome: "Silvia Bauer Vitta",
    cargo: "Centro de Bem-Estar Físico",
  },
  {
    foto: dep11.url,
    texto:
      "“Eu utilizo o filtro Acqualive há 6 anos e aqui na clínica todos os pacientes também têm acesso à essa água pura e alcalina para ingerir. Que, além de todos os benefícios de alcalinizar nosso corpo e manter os nutrientes, ela também é uma água que não tem resíduo de sabor.”",
    nome: "Cláudia Flach Dir. Médica",
    cargo: "Clínica Cláudia Flach",
  },
  {
    foto: dep12.url,
    texto:
      "“Meus pacientes me perguntam: Maribel, qual o filtro que você indica? Eu indico os filtros da Acqualive porque eu confio e não me imagino sem ele. Conheço diversos profissionais que, assim como eu, utilizam e recomendam a Acqualive.”",
    nome: "Maribel Melos",
    cargo: "Nutricionista Funcional",
  },
];

const SECOES: { id: string; rotulo: string }[] = [
  { id: "topo", rotulo: "o início da página" },
  { id: "economia", rotulo: "Economia" },
  { id: "produtividade", rotulo: "Água e Produtividade" },
  { id: "tecnologia", rotulo: "Água Alcalina Ionizada" },
  { id: "produtos", rotulo: "Acqualive DUO e DUO Lite" },
  { id: "contato", rotulo: "Contato" },
  { id: "beneficios", rotulo: "Benefícios" },
  { id: "depoimentos", rotulo: "Opinião de Quem Usa" },
];

interface FormProps {
  variante?: "empilhado" | "linha";
  origem: string;
}

const FormMeLigue = ({ variante = "empilhado", origem }: FormProps) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [enviando, setEnviando] = useState(false);

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      toast.error("Preencha nome, e-mail e telefone.");
      return;
    }
    setEnviando(true);
    const { error } = await supabase.from("leads_empresas").insert({
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      empresa: empresa.trim() || nome.trim(),
      origem,
      mensagem: "Solicitou retorno pelo formulario ME LIGUE",
    });
    setEnviando(false);
    if (error) {
      toast.error("Nao foi possivel enviar. Tente novamente ou fale conosco no WhatsApp.");
    }

    const linhas = [
      `Nome: ${nome.trim()}`,
      empresa.trim() ? `Empresa: ${empresa.trim()}` : "",
      `Telefone: ${telefone.trim()}`,
      `E-mail: ${email.trim()}`,
    ].filter(Boolean);

    const mensagem = `Olá, Alex! Vim pela página Acqualive para Empresas.\n\n${linhas.join(
      "\n"
    )}\n\nGostaria de conhecer melhor as soluções da Acqualive para minha empresa.`;

    window.open(wa(mensagem), "_blank", "noopener,noreferrer");

    if (!error) {
      toast.success("Recebemos seu contato. Estamos abrindo o WhatsApp do Alex.");
      setNome("");
      setEmail("");
      setTelefone("");
      setEmpresa("");
    }
  };

  const inputClass =
    "w-full bg-white px-5 py-4 text-[15px] text-[#5b6472] placeholder:text-[#9aa3b0] outline-none border-0";

  if (variante === "linha") {
    return (
      <form onSubmit={enviar} className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
        <input className={inputClass} placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input className={inputClass} placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
        <input className={inputClass} placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={inputClass} placeholder="DDD+Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        <button
          type="submit"
          disabled={enviando}
          className="bg-white text-[#1460B6] text-xl font-medium tracking-wide py-4 hover:bg-white/90 transition-colors disabled:opacity-60"
        >
          {enviando ? "ENVIANDO..." : "ME LIGUE"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={enviar} className="w-full max-w-[500px] mx-auto space-y-4">
      <input className={inputClass} placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input className={inputClass} placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
      <input className={inputClass} placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className={inputClass} placeholder="DDD+Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <button
        type="submit"
        disabled={enviando}
        className="w-full bg-white text-[#1460B6] text-xl sm:text-2xl font-medium tracking-wide py-4 hover:bg-white/90 transition-colors disabled:opacity-60"
      >
        {enviando ? "ENVIANDO..." : "ME LIGUE"}
      </button>
    </form>
  );
};

/** Botao flutuante de WhatsApp com identificacao da secao visivel. */
const WhatsAppFlutuante = () => {
  const [rotulo, setRotulo] = useState<string | null>(null);
  const visiveis = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          visiveis.current.set(entrada.target.id, entrada.isIntersecting ? entrada.intersectionRatio : 0);
        });
        let melhorId: string | null = null;
        let melhorRatio = 0;
        visiveis.current.forEach((ratio, id) => {
          if (ratio > melhorRatio) {
            melhorRatio = ratio;
            melhorId = id;
          }
        });
        const secao = SECOES.find((s) => s.id === melhorId);
        setRotulo(secao && secao.id !== "topo" ? secao.rotulo : null);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    SECOES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const link = rotulo
    ? wa(
        `Olá, Alex! Vim pela página Acqualive para Empresas. Eu estava vendo a seção de ${rotulo} e gostaria de saber mais.`
      )
    : WA_GERAL;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Alex no WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
};

const OldEmpresas = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Helmet>
        <title>Acqualive Empresas | Acqualive DUO e DUO Lite para o seu negócio</title>
        <meta
          name="description"
          content="Água alcalina ionizada para a sua empresa com o Acqualive DUO e o Acqualive DUO Lite. Fale com o nosso consultor e descubra a solução ideal."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* HEADER */}
      <header className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo.url} alt="Acqualive" className="h-10 md:h-14 w-auto" />
          <p className="text-center md:text-right text-base md:text-2xl tracking-wide uppercase" style={{ color: CINZA }}>
            a solução ideal <strong style={{ color: AZUL }}>para a sua empresa</strong>
          </p>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white pt-6 md:pt-8">
          <div className="text-center px-6">
            <p className="uppercase tracking-[0.08em] text-xs sm:text-sm md:text-base font-medium" style={{ color: CINZA }}>
              mude a água da sua empresa
            </p>
            <h1
              className="uppercase text-xl sm:text-2xl md:text-4xl font-medium leading-tight mt-2"
              style={{ color: AZUL }}
            >
              e ganhe mais economia,
              <br />
              produtividade e saúde
            </h1>
          </div>
          <img
            src={duoSecao1.url}
            alt="Acqualive DUO em ambiente corporativo, entregando água natural e gelada para equipes"
            className="w-full mt-4 max-h-[480px] object-cover object-center"
          />
        </div>

        <div className="bg-[#1460B6] text-white flex items-center">
          <div className="w-full px-5 sm:px-6 py-10 md:py-12 text-center">
            <p className="uppercase tracking-[0.1em] text-sm md:text-base">fale com o alex</p>
            <a
              href={WA_GERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-3xl sm:text-4xl md:text-6xl font-medium my-2 hover:opacity-90"
            >
              {WHATSAPP_EXIBICAO}
            </a>
            <p className="uppercase text-sm md:text-base mb-8">ou ligamos para você!</p>
            <FormMeLigue origem="old-empresas-topo" />
          </div>
        </div>
      </section>

      {/* ECONOMIA */}
      <section id="economia" className="max-w-[1280px] mx-auto px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <p className="text-xl sm:text-2xl md:text-[28px] uppercase leading-snug" style={{ color: CINZA }}>
            Mais benefícios
            <br />e maior economia
            <br />para sua empresa
          </p>
          <p className="text-xl sm:text-2xl md:text-[28px] uppercase leading-snug" style={{ color: CINZA }}>
            <span style={{ color: AZUL }}>fim do galão</span>
            <br />
            e da logística de entregas
          </p>
          <p className="text-xl sm:text-2xl md:text-[28px] uppercase leading-snug" style={{ color: CINZA }}>
            <span style={{ color: AZUL }}>custo previsível</span>
            <br />
            com a troca dos refis
          </p>
        </div>

        <hr className="my-12 border-[#d7dce2]" />

        <h2 className="text-center text-xl sm:text-2xl md:text-[32px] uppercase" style={{ color: CINZA }}>
          Conheça as soluções <strong style={{ color: AZUL }}>Acqualive para empresas</strong>
        </h2>

        {/* PRODUTOS: DUO e DUO LITE */}
        <div id="produtos" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-[860px] mx-auto">
          {PRODUTOS.map((p) => (
            <div key={p.nome} className="flex flex-col">
              <div className="relative flex items-end justify-center h-[260px]">
                {p.imagem ? (
                  <img
                    src={p.imagem}
                    alt={p.alt}
                    loading="lazy"
                    className="max-h-[260px] w-auto object-contain relative z-10"
                  />
                ) : (
                  /* Placeholder: aguardando imagem oficial do Acqualive DUO Lite */
                  <div className="w-full h-[260px] bg-[#F2F4F7] border border-dashed border-[#c9d0d9] flex items-center justify-center text-center px-6">
                    <p className="text-[13px] uppercase leading-snug" style={{ color: CINZA }}>
                      imagem oficial do
                      <br />
                      acqualive duo lite
                      <br />
                      <span className="text-[11px]">em breve</span>
                    </p>
                  </div>
                )}
              </div>
              <div className="bg-[#E4E8ED] pt-6 pb-6 text-center">
                <h3 className="text-2xl uppercase" style={{ color: "#4b5563" }}>
                  {p.nome}
                </h3>
                {p.nota && <p className="text-[11px] mt-1" style={{ color: CINZA }}>{p.nota}</p>}
              </div>
              <div className="bg-[#E4E8ED] mt-2 py-6 px-6 text-center space-y-5 flex-1 flex flex-col">
                <ul className="space-y-3 text-left">
                  {p.destaques.map((d) => (
                    <li key={d} className="flex gap-3 items-start">
                      <img src={check.url} alt="" className="h-5 w-auto mt-[2px]" />
                      <span className="text-[14px] leading-snug" style={{ color: "#5b6472" }}>
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="text-[11px] uppercase tracking-wide" style={{ color: "#6b7280" }}>preço</p>
                  <p className="text-xl font-medium" style={{ color: AZUL }}>{p.preco}</p>
                  <p className="text-[11px]" style={{ color: CINZA }}>{p.precoNota}</p>
                </div>
                <a
                  href={p.cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block bg-[#1460B6] text-white uppercase text-[15px] tracking-wide py-3 hover:bg-[#11529c] transition-colors"
                >
                  falar com o alex
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-left md:text-right text-[11px] uppercase mt-4 leading-relaxed" style={{ color: CINZA }}>
          <p>* consulte as condições comerciais para empresas</p>
          <p>** compatibilidade do DUO Lite avaliada em cada ponto de consumo</p>
        </div>
      </section>

      {/* PRODUTIVIDADE */}
      <section id="produtividade" className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10 pb-12 lg:pb-0">
        <div>
          <img src={banner2.url} alt="Equipe trabalhando em escritório" className="w-full h-[220px] sm:h-[320px] lg:h-auto object-cover" loading="lazy" />
        </div>
        <div className="px-6 lg:pr-16 max-w-[620px]">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] uppercase leading-tight" style={{ color: CINZA }}>
            Você sabia que
            <br />
            <span style={{ color: AZUL }}>a água</span> pode <span style={{ color: AZUL }}>influenciar</span>
            <br />
            na <span style={{ color: AZUL }}>produtividade no trabalho</span>?
          </h2>
          <p className="mt-8 text-[15px] leading-relaxed" style={{ color: "#5b6472" }}>
            A falta de hidratação pode provocar uma redução súbita de pressão e um aumento do esforço cardiovascular.
            Alguns sintomas comuns desse quadro são dores de cabeça, cansaço e diminuição da capacidade de concentração.
            Quem trabalha em ambiente fechado com ar-condicionado precisa tomar ainda mais cuidado.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#5b6472" }}>
            Um bom truque é manter sempre um copo ou garrafa reutilizável em sua mesa ou posto de trabalho. Além disso, é
            preciso que se tenha acesso à uma água de qualidade. A água ionizada é leve e capaz de hidratação, oferecendo
            muito mais energia para o seu dia a dia.
          </p>
        </div>
      </section>

      {/* AGUA ALCALINA SEMPRE A MAO */}
      <section id="tecnologia" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end max-w-[1280px] mx-auto px-6 py-12 md:py-16">
        <div className="max-w-[420px] mx-auto lg:mx-0 text-[15px] leading-relaxed" style={{ color: "#5b6472" }}>
          <p>
            <strong style={{ color: AZUL }}>
              A Acqualive possibilita o tratamento de água da forma mais completa e garante que você tenha à mão uma
              água alcalina, antioxidante, pura, magnesiana e hidratante.
            </strong>{" "}
            Pensando em oferecer mais facilidade na hora do consumo, a Acqualive desenvolveu o Acqualive DUO e o
            Acqualive DUO Lite, capazes de transformar a água da torneira na água ideal para a saúde.
          </p>
          <p className="mt-4">
            O DUO entrega água natural e gelada no próprio equipamento. O DUO Lite leva a tecnologia Acqualive até
            torneiras, copas, cozinhas e equipamentos compatíveis da sua operação.
          </p>
          <p className="mt-4">
            Converse com nossos consultores e descubra qual a melhor solução para atender as necessidades da sua
            empresa.
          </p>
        </div>
        <div className="relative">
          <img src={bg3.url} alt="Copo com água alcalina" className="w-full h-auto object-contain" loading="lazy" />
          <h2 className="text-2xl sm:text-3xl md:text-[42px] uppercase leading-tight text-right mt-4" style={{ color: CINZA }}>
            água alcalina
            <br />
            ionizada <span style={{ color: AZUL }}>sempre</span>
            <br />
            <span style={{ color: AZUL }}>à mão</span>
          </h2>
        </div>
      </section>

      {/* SOLUCAO IDEAL */}
      <section className="py-12 md:py-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-[42px] uppercase leading-tight px-6" style={{ color: CINZA }}>
          Descubra <span style={{ color: AZUL }}>a solução ideal</span>
          <br />
          para sua empresa
        </h2>
        <div className="mt-8 max-w-[1100px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <img
            src={duoAmbGarrafa.url}
            alt="Acqualive DUO em recepção de clínica"
            className="w-full h-[260px] sm:h-[340px] object-cover"
            loading="lazy"
          />
          <img
            src={duoAmbAcademia.url}
            alt="Acqualive DUO em ambiente de academia"
            className="w-full h-[260px] sm:h-[340px] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* CONTATO AZUL */}
      <section id="contato" className="bg-[#1460B6] text-white">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 md:py-14">
          <div className="text-center">
            <img src={ligueIcon.url} alt="" className="h-14 w-auto mx-auto" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl mt-4">FALE</h2>
            <hr className="border-white/50 max-w-[280px] mx-auto my-5" />
            <a
              href={WA_GERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-3xl sm:text-4xl md:text-5xl hover:opacity-90 break-words"
            >
              {WHATSAPP_EXIBICAO}
            </a>
            <hr className="border-white/50 max-w-[280px] mx-auto my-5" />
            <p className="uppercase text-sm md:text-base leading-relaxed">
              Horário de Atendimento:
              <br />
              Seg a Sex: 9h às 19h – Sáb: 9h às 12h
            </p>
          </div>
          <div className="bg-white/10 p-6 sm:p-8 lg:p-10">
            <p className="text-right uppercase text-lg md:text-xl mb-6">
              ou <strong>nós ligamos pra você</strong>
            </p>
            <FormMeLigue origem="old-empresas-meio" />
          </div>
        </div>

        {/* ICONES */}
        <div className="max-w-[1280px] mx-auto px-6 pb-14 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/25">
          {ICONES.map((i) => (
            <div key={i.alt} className="px-6 py-6 text-center">
              <img src={i.img} alt={i.alt} className="h-16 w-auto mx-auto" loading="lazy" />
              <p className="mt-4 text-[15px] leading-snug">{i.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUTROS BENEFICIOS */}
      <section id="beneficios" className="max-w-[1280px] mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-12 lg:text-right order-2 lg:order-1">
            {BENEFICIOS_ESQ.map((b) => (
              <div key={b.titulo}>
                <img src={check.url} alt="" className="h-10 w-auto lg:ml-auto" />
                <h3 className="text-2xl tracking-[0.12em] mt-2" style={{ color: AZUL }}>
                  {b.titulo}
                </h3>
                <p className="mt-2 text-[15px] leading-snug" style={{ color: "#5b6472" }}>
                  {b.texto}
                </p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-[38px] uppercase" style={{ color: CINZA }}>
              outros <strong style={{ color: AZUL }}>benefícios</strong>
            </h2>
            <img
              src={duoAmbCozinha.url}
              alt="Acqualive DUO em copa corporativa"
              className="w-full max-w-[420px] mx-auto mt-6"
              loading="lazy"
            />
          </div>

          <div className="space-y-12 order-3">
            {BENEFICIOS_DIR.map((b) => (
              <div key={b.titulo}>
                <img src={check.url} alt="" className="h-10 w-auto" />
                <h3 className="text-2xl tracking-[0.12em] mt-2" style={{ color: AZUL }}>
                  {b.titulo}
                </h3>
                <p className="mt-2 text-[15px] leading-snug" style={{ color: "#5b6472" }}>
                  {b.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="max-w-[1280px] mx-auto px-6 pb-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-[38px] uppercase font-medium" style={{ color: AZUL }}>
          Opinião de quem usa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-12">
          {DEPOIMENTOS.map((d) => (
            <div key={d.nome} className="text-center">
              <img
                src={d.foto}
                alt={d.nome}
                className="w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] rounded-full object-cover mx-auto"
                loading="lazy"
              />
              <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "#5b6472" }}>
                {d.texto}
              </p>
              <p className="mt-6 font-medium leading-snug" style={{ color: AZUL }}>
                {d.nome}
                <br />
                {d.cargo}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAIXA FINAL */}
      <section className="bg-[#1460B6] text-white py-10">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <p className="uppercase text-lg">fale com o alex</p>
            <a
              href={WA_GERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-3xl md:text-4xl mt-2 hover:opacity-90"
            >
              {WHATSAPP_EXIBICAO}
            </a>
          </div>
          <div className="lg:col-span-2">
            <p className="uppercase text-lg mb-4">ou ligamos para você</p>
            <FormMeLigue variante="linha" origem="old-empresas-rodape" />
          </div>
        </div>
      </section>

      {/* RODAPE */}
      <footer className="bg-white py-10">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex flex-wrap gap-10 uppercase text-sm" style={{ color: AZUL }}>
              <a href="/politica-de-privacidade" className="hover:underline">política de privacidade</a>
              <a href="/termos-de-uso" className="hover:underline">termos de uso</a>
            </div>
            <p className="mt-6 uppercase text-sm leading-relaxed" style={{ color: CINZA }}>
              CNPJ: 20.158.447/0001-09
              <br />
              Acqualive © Todos os direitos reservados.
            </p>
            <p className="mt-4 text-sm" style={{ color: CINZA }}>
              <a href={TELEFONE_0800_LINK} className="hover:underline">{TELEFONE_0800}</a>
            </p>
          </div>
          <div className="flex lg:justify-end">
            <img src={selos.url} alt="Selos Loja Confiável e Reclame Aqui" className="h-24 w-auto" loading="lazy" />
          </div>
        </div>
      </footer>

      <WhatsAppFlutuante />
    </div>
  );
};

export default OldEmpresas;
