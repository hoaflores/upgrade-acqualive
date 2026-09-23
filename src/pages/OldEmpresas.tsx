import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

import logo from "@/assets/acqualive-logo-azul.png.asset.json";
import banner2 from "@/assets/old-empresas/banner2.jpg.asset.json";
import bg3 from "@/assets/old-empresas/agua-alcalina-mao.png.asset.json";
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
import duoSecao1 from "@/assets/old-empresas/duo-hero-empresas.jpg.asset.json";
import duoRecepcao from "@/assets/old-empresas/duo-escritorio-recepcao.png.asset.json";
import duoCopa from "@/assets/old-empresas/duo-copa-empresa.png.asset.json";
import duoAmbCozinha from "@/assets/duo/Duo_Ambientada_1.png.asset.json";
import duoLiteEmpresas from "@/assets/old-empresas/duo-lite-empresas.png.asset.json";
import logoSynergy from "@/assets/logos/synergy.jpg.asset.json";
import logoGaloCinza from "@/assets/logos/galo-cinza.jpg.asset.json";
import logoWilliamSons from "@/assets/logos/william-sons.webp.asset.json";
import logoVitta from "@/assets/logos/vitta.jpg.asset.json";
import logoDalleLaste from "@/assets/logos/dalle-laste.png.asset.json";
import logoUrbanFarmcy from "@/assets/logos/urban-farmcy.jpg.asset.json";
import logoRaw from "@/assets/logos/raw.jpg.asset.json";
import logoCasaViva from "@/assets/logos/casa-viva.jpg.asset.json";

const EMPRESAS_CLIENTES = [
  { nome: "William & Sons Coffee Co.", src: logoWilliamSons.url },
  { nome: "Synergy Centro de Treinamento", src: logoSynergy.url },
  { nome: "Restaurante Galo Cinza", src: logoGaloCinza.url },
  { nome: "Vitta Centro de Bem-Estar Físico", src: logoVitta.url },
  { nome: "Clínica Dalle Laste", src: logoDalleLaste.url },
  { nome: "Urban Farmcy", src: logoUrbanFarmcy.url },
  { nome: "Restaurante Raw", src: logoRaw.url },
  { nome: "Casa Vivá", src: logoCasaViva.url },
];

const AZUL = "#1460B6";
const CINZA = "#8A94A2";

/** Contato comercial da pagina: nosso consultor */
const WHATSAPP_NUMERO = "555194896709";
const WHATSAPP_EXIBICAO = "(51) 99489-6709";
const TELEFONE_0800 = "0800 605 6501";
const TELEFONE_0800_LINK = "tel:08006056501";

const wa = (mensagem: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

const WA_GERAL = wa(
  "Olá! Vim pela página Acqualive para Empresas e gostaria de saber mais sobre as soluções."
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
    preco: "10x de R$ 439,70",
    precoNota: "",
    ctaLabel: "FALAR COM O NOSSO CONSULTOR",
    cta: wa(
      "Olá! Vim pela página Acqualive para Empresas e gostaria de saber mais sobre o Acqualive DUO."
    ),
  },
  {
    nome: "ACQUALIVE DUO LITE",
    imagem: duoLiteEmpresas.url,
    alt: "Acqualive DUO Lite instalado sob a pia em ambiente corporativo",
    nota: "*compatibilidade avaliada ponto a ponto",
    destaques: [
      "Versatilidade de instalação",
      "Água alcalina com excelente custo-benefício",
      "Tecnologia TriWay Acqualive",
      "Bebedouros e bebedouros industriais",
      "Geladeiras, cafeteiras e máquinas de suco",
    ],
    preco: "10x de R$ 109,70",
    precoNota: "\n",
    ctaLabel: "FALAR COM O NOSSO CONSULTOR ",
    cta: wa(
      "Olá! Vim pela página Acqualive para Empresas e gostaria de saber mais sobre o Acqualive DUO Lite."
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
      mensagem: "Solicitou mais informacoes pelo formulario da pagina de empresas",
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

    const mensagem = `Olá! Vim pela página Acqualive para Empresas.\n\n${linhas.join(
      "\n"
    )}\n\nGostaria de conhecer melhor as soluções da Acqualive para minha empresa.`;

    window.open(wa(mensagem), "_blank", "noopener,noreferrer");

    if (!error) {
      toast.success("Recebemos seu contato. Estamos abrindo o WhatsApp do nosso consultor.");
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
          className="bg-white text-[#1460B6] text-base font-semibold tracking-wide py-4 px-2 hover:bg-white/90 transition-colors disabled:opacity-60"
        >
          {enviando ? "ENVIANDO..." : "QUERO MAIS INFORMAÇÕES"}
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
        className="w-full bg-white text-[#1460B6] text-lg sm:text-xl font-semibold tracking-wide py-4 hover:bg-white/90 transition-colors disabled:opacity-60"
      >
        {enviando ? "ENVIANDO..." : "QUERO MAIS INFORMAÇÕES"}
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
        `Olá! Vim pela página Acqualive para Empresas. Eu estava vendo a seção de ${rotulo} e gostaria de saber mais.`
      )
    : WA_GERAL;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com nosso consultor no WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
};

const LITRO_DUO = 0.17;
const LITRO_GALAO = 0.95;

const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 2 });

const ComparativoLitro = () => {
  const [litrosDia, setLitrosDia] = useState(100);

  const litrosMes = litrosDia * 30;
  const gastoGalao = litrosMes * LITRO_GALAO;
  const gastoDuo = litrosMes * LITRO_DUO;
  const economiaMes = gastoGalao - gastoDuo;
  const economiaAno = economiaMes * 12;
  const proporcao = Math.max((gastoDuo / gastoGalao) * 100, 6);

  return (
    <div className="mt-14 rounded-3xl border border-[#d7dce2] bg-gradient-to-b from-[#f4f8fd] to-white p-6 sm:p-10 shadow-sm">
      <h2 className="text-center text-xl sm:text-2xl md:text-[32px] uppercase leading-tight" style={{ color: CINZA }}>
        Quanto custa o litro da água <strong style={{ color: AZUL }}>na sua empresa?</strong>
      </h2>

      {/* Cards de preço por litro */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-[720px] mx-auto">
        <div className="rounded-2xl bg-white border border-[#e3e8ef] p-5 text-center">
          <p className="uppercase text-xs sm:text-sm tracking-wide" style={{ color: CINZA }}>
            Galão de 20 litros
          </p>
          <p className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: CINZA }}>
            R$ 0,95<span className="text-base font-normal">/litro</span>
          </p>
          <p className="text-xs mt-2" style={{ color: CINZA }}>
            Galão de 20 L a R$ 18,90
          </p>
        </div>
        <div
          className="rounded-2xl p-5 text-center text-white shadow-xl"
          style={{ background: "linear-gradient(135deg, #1460B6 0%, #0d4b8f 100%)" }}
        >
          <p className="uppercase text-xs sm:text-sm tracking-wide text-white/80">Acqualive DUO</p>
          <p className="text-3xl sm:text-4xl font-semibold mt-1">
            a partir de R$ 0,17<span className="text-base font-normal text-white/80">/litro</span>
          </p>
          <p className="text-xs mt-2 text-white/70">Cálculo baseado no valor da troca de refis</p>
        </div>
      </div>

      {/* Slider de consumo */}
      <div className="max-w-[720px] mx-auto mt-10">
        <label className="block text-center uppercase text-sm sm:text-base tracking-wide" style={{ color: CINZA }}>
          Consumo da sua empresa:{" "}
          <strong style={{ color: AZUL }}>
            {litrosDia} litros/dia
          </strong>
        </label>
        <input
          type="range"
          min={20}
          max={500}
          step={10}
          value={litrosDia}
          onChange={(e) => setLitrosDia(Number(e.target.value))}
          className="w-full mt-4 accent-[#1460B6] h-2 cursor-pointer"
          aria-label="Consumo diário de água em litros"
        />
        <div className="flex justify-between text-xs mt-1" style={{ color: CINZA }}>
          <span>20 L</span>
          <span>500 L</span>
        </div>
      </div>

      {/* Barras comparativas */}
      <div className="max-w-[720px] mx-auto mt-8 space-y-5">
        <div>
          <div className="flex justify-between text-sm sm:text-base mb-1" style={{ color: CINZA }}>
            <span className="uppercase">Com galão</span>
            <strong>{brl(gastoGalao)}/mês</strong>
          </div>
          <div className="h-9 rounded-full bg-[#e3e8ef] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: "100%", background: "linear-gradient(90deg, #9aa5b1, #8A94A2)" }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm sm:text-base mb-1" style={{ color: AZUL }}>
            <span className="uppercase font-medium">Com Acqualive DUO</span>
            <strong>{brl(gastoDuo)}/mês</strong>
          </div>
          <div className="h-9 rounded-full bg-[#dbe8f7] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${proporcao}%`, background: "linear-gradient(90deg, #1460B6, #2f80d6)" }}
            />
          </div>
        </div>
      </div>

      {/* Economia em destaque */}
      <div
        className="max-w-[720px] mx-auto mt-10 rounded-2xl p-6 sm:p-8 text-center text-white shadow-2xl"
        style={{ background: "linear-gradient(135deg, #1460B6 0%, #0d4b8f 100%)" }}
      >
        <p className="uppercase tracking-wide text-sm sm:text-base text-white/85">Sua empresa economiza</p>
        <p className="text-4xl sm:text-5xl md:text-6xl font-semibold my-2">{brl(economiaMes)}</p>
        <p className="uppercase text-sm sm:text-base text-white/85">
          por mês &bull; <strong className="text-white">{brl(economiaAno)} por ano</strong>
        </p>
        <a
          href={WA_GERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-white text-[#1460B6] font-semibold uppercase tracking-wide rounded-full px-8 py-3 text-sm sm:text-base hover:opacity-90 transition-opacity"
        >
          Quero economizar na minha empresa
        </a>
      </div>

      <p className="text-center text-xs mt-6 max-w-[640px] mx-auto" style={{ color: CINZA }}>
        Valor do litro Acqualive calculado com base no valor da troca de refis. Comparativo considera galão de 20
        litros a R$ 18,90, equivalente a R$ 0,95 por litro. Valores estimados, podem variar conforme a região.
      </p>
    </div>
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
        <div className="max-w-[1280px] mx-auto px-6 pt-6 pb-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <img src={logo.url} alt="Acqualive" className="h-14 sm:h-16 md:h-20 w-auto" />
          <p className="text-center md:text-right text-lg sm:text-2xl md:text-3xl tracking-wide uppercase leading-snug max-w-[18ch] md:max-w-none" style={{ color: CINZA }}>
            a solução ideal <strong style={{ color: AZUL }}>para a sua empresa</strong>
          </p>

        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white pt-2 md:pt-8">
          <div className="text-center px-6">
            <p className="uppercase tracking-[0.12em] text-[10px] sm:text-xs md:text-sm font-medium" style={{ color: CINZA }}>
              mude a água da sua empresa
            </p>
            <h1
              className="uppercase text-base sm:text-xl md:text-3xl font-medium leading-snug mt-1.5 md:mt-2"
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
            className="w-full mt-4 h-auto"
          />
        </div>

        <div className="bg-[#1460B6] text-white flex items-center">
          <div className="w-full px-5 sm:px-6 py-10 md:py-12 text-center">
            <p className="uppercase tracking-[0.18em] text-[11px] md:text-xs text-white/80">
              a solução ideal para a sua empresa
            </p>
            <h2 className="uppercase text-2xl sm:text-3xl md:text-[34px] font-medium leading-tight mt-3">
              receba uma proposta
              <br />
              sem custo para a sua empresa
            </h2>
            <p className="text-sm md:text-[15px] text-white/85 leading-relaxed mt-4 mb-8 max-w-[440px] mx-auto">
              Preencha os dados abaixo e nosso consultor entra em contato com a melhor solução de água alcalina
              ionizada para o seu negócio, com condições comerciais para empresas.
            </p>
            <FormMeLigue origem="old-empresas-topo" />
            <p className="text-xs md:text-sm mt-6 text-white/80">
              Prefere falar agora?{" "}
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-90">
                {WHATSAPP_EXIBICAO}
              </a>
            </p>
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

        <ComparativoLitro />

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
                  {p.ctaLabel}
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
      <section
        id="tecnologia"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 md:py-14 px-6 lg:pr-0 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
      >
        <div className="max-w-[460px] mx-auto lg:mx-0 text-[15px] leading-relaxed" style={{ color: "#5b6472" }}>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] uppercase leading-tight mb-6" style={{ color: CINZA }}>
            água alcalina ionizada <span style={{ color: AZUL }}>sempre à mão</span>
          </h2>
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
        <div className="relative -mx-6 lg:mx-0">
          <img src={bg3.url} alt="Copo com água alcalina" className="w-full h-auto object-contain object-right" loading="lazy" />
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
            src={duoRecepcao.url}
            alt="Acqualive DUO instalado em recepção de escritório"
            className="w-full h-auto"
            loading="lazy"
          />
          <img
            src={duoCopa.url}
            alt="Colaborador servindo água no Acqualive DUO na copa da empresa"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* CONTATO AZUL */}
      <section id="contato" className="bg-[#1460B6] text-white">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 md:py-14 items-center">
          <div className="text-center lg:text-left">
            <img src={ligueIcon.url} alt="" className="h-12 w-auto mx-auto lg:mx-0" />
            <h2 className="uppercase text-2xl sm:text-3xl md:text-[40px] font-medium leading-tight mt-4">
              descubra a solução ideal
              <br />
              para a sua empresa
            </h2>
            <p className="text-sm md:text-[15px] text-white/85 leading-relaxed mt-5 max-w-[460px] mx-auto lg:mx-0">
              Nosso consultor avalia o consumo da sua operação, indica o modelo certo entre o Acqualive DUO e o DUO
              Lite e apresenta as condições comerciais para empresas. A avaliação é gratuita e sem compromisso.
            </p>
            <p className="uppercase text-xs md:text-sm leading-relaxed mt-6 text-white/80">
              Horário de atendimento:
              <br />
              Seg a Sex: 9h às 19h – Sáb: 9h às 12h
            </p>
            <p className="text-sm mt-4 text-white/85">
              Prefere falar agora?{" "}
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-90">
                {WHATSAPP_EXIBICAO}
              </a>
            </p>
          </div>
          <div className="bg-white/10 p-6 sm:p-8 lg:p-10">
            <p className="uppercase text-lg md:text-xl mb-2 text-center">
              <strong>fale com o nosso consultor</strong>
            </p>
            <p className="text-sm text-white/85 text-center mb-6">
              Deixe seus dados e receba a proposta para a sua empresa.
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

      {/* EMPRESAS QUE USAM */}
      <section className="pb-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-center uppercase tracking-[0.2em] text-[11px] md:text-xs" style={{ color: CINZA }}>
            parceiros Acqualive
          </p>
          <h2 className="text-center text-2xl sm:text-3xl md:text-[38px] uppercase font-medium mt-3" style={{ color: CINZA }}>
            empresas que já usam <span style={{ color: AZUL }}>a Acqualive</span>
          </h2>
          <p className="text-center text-[15px] mt-4 max-w-[640px] mx-auto leading-relaxed" style={{ color: "#5b6472" }}>
            Restaurantes, clínicas, cafeterias, academias e escritórios que já oferecem água alcalina ionizada para
            equipes e clientes todos os dias.
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 mt-10">
          <div className="rounded-2xl border border-[#E7EBF1] bg-gradient-to-b from-white to-[#F6F9FC] py-8 shadow-[0_18px_40px_-32px_rgba(20,96,182,0.45)]">
            <div
              className="group relative overflow-hidden"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
                {[...EMPRESAS_CLIENTES, ...EMPRESAS_CLIENTES].map((e, i) => (
                  <div
                    key={`${e.nome}-${i}`}
                    className="flex h-28 w-[190px] sm:w-[220px] flex-shrink-0 flex-col items-center justify-center gap-2 border-r border-[#E7EBF1] px-6 last:border-r-0"
                  >
                    <img
                      src={e.src}
                      alt={e.nome}
                      title={e.nome}
                      className="max-h-[48px] w-auto object-contain opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 mix-blend-multiply"
                      loading="lazy"
                    />
                    <span className="text-center text-[11px] leading-tight text-[#8A94A2]">
                      {e.nome}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FAIXA FINAL */}
      <section className="bg-[#1460B6] text-white py-10">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="text-center lg:text-left">
            <p className="uppercase text-xl md:text-2xl font-medium leading-snug">
              leve a Acqualive
              <br />
              para a sua empresa
            </p>
            <p className="text-sm text-white/85 mt-3">
              Ou fale agora:{" "}
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-90">
                {WHATSAPP_EXIBICAO}
              </a>
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="uppercase text-lg mb-4">
              <strong>preencha e receba o contato do nosso consultor</strong>
            </p>
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
