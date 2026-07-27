import { normalize } from "@/utils/fuzzySearch";
import { PERGUNTAS_GUIA, REFERÊNCIAS, type Referência } from "@/data/portal-cientifico";

/**
 * Motor de resposta do Portal Científico.
 *
 * Em vez de casar a pergunta com uma lista fixa, o motor interpreta a frase
 * digitada, expande sinônimos, pontua toda a base de referências e sintetiza
 * uma resposta a partir dos estudos mais relevantes.
 */

const STOPWORDS = new Set(
  ("a o as os um uma uns umas de do da dos das em no na nos nas por para com sem sobre e ou que qual quais quem como " +
    "quando onde porque pq se e é sao são ser tem tenho ter faz fazer fez pode posso podem devo deve muito mais menos " +
    "meu minha meus minhas seu sua isso isto esse essa este esta ao aos as la ali aqui ja ainda todo toda todos todas " +
    "realmente mesmo bom boa melhor pior verdade sim nao não me mim eu voce você a gente").split(" "),
);

/** Sinônimos e termos populares mapeados para o vocabulário da base. */
const SINÔNIMOS: Record<string, string[]> = {
  azia: ["refluxo", "pepsina", "queimacao", "gastrite"],
  queimacao: ["refluxo", "pepsina"],
  estomago: ["refluxo", "gastrite", "digestao"],
  gastrite: ["refluxo", "pepsina", "gastrico"],
  intestino: ["microbiota", "digestao"],
  emagrecer: ["metabolismo", "glicose", "peso"],
  emagrecimento: ["metabolismo", "glicose", "peso"],
  diabete: ["diabetes", "glicose", "insulina"],
  acucar: ["glicose", "insulina", "diabetes"],
  pressao: ["hipertensao", "cardiovascular"],
  coracao: ["cardiovascular", "hipertensao", "magnesio"],
  colesterol: ["metabolismo", "hdl", "cardiovascular"],
  osso: ["ossea", "osteoporose", "calcio"],
  ossos: ["ossea", "osteoporose", "calcio"],
  osteoporose: ["ossea", "calcio", "reabsorcao"],
  rim: ["renal", "calculo renal", "pral"],
  rins: ["renal", "calculo renal", "pral"],
  pedra: ["calculo renal", "acido urico"],
  cansaco: ["fadiga", "desidratacao", "energia"],
  disposicao: ["energia", "fadiga", "hidratacao"],
  energia: ["fadiga", "metabolismo", "hidratacao"],
  treino: ["exercicio", "atleta", "performance", "recuperacao"],
  academia: ["exercicio", "atleta", "performance"],
  corrida: ["exercicio", "atleta", "performance"],
  atleta: ["performance", "exercicio", "recuperacao"],
  musculo: ["recuperacao", "exercicio", "acidose"],
  envelhecimento: ["longevidade", "antioxidante", "oxidativo"],
  velhice: ["longevidade", "envelhecimento"],
  cancer: ["oxidativo", "antioxidante", "radicais"],
  imunidade: ["oxidativo", "antioxidante", "microbiota"],
  plastico: ["microplastico", "garrafa", "galao"],
  garrafao: ["galao", "microplastico"],
  galao: ["garrafa", "microplastico", "galao"],
  torneira: ["agua tratada", "cloro", "abastecimento"],
  cloro: ["trihalometanos", "subprodutos", "carvao ativado"],
  filtro: ["purificacao", "carvao ativado", "filtragem"],
  purificador: ["purificacao", "filtragem", "carvao ativado"],
  osmose: ["desmineralizada", "osmose reversa", "minerais"],
  mineral: ["minerais", "magnesio", "calcio"],
  ph: ["alcalina", "alcalinidade", "pral"],
  alcalina: ["alcalinidade", "pral", "ionizada"],
  alcalinizante: ["pral", "alcalinidade"],
  hidrogenio: ["h2", "molecular", "antioxidante"],
  gravida: ["gestacao", "saude", "minerais"],
  crianca: ["infantil", "saude", "minerais"],
  idoso: ["longevidade", "envelhecimento"],
  sono: ["fadiga", "energia", "hidratacao"],
  pele: ["hidratacao", "oxidativo"],
  quantidade: ["hidratacao", "ingestao", "litros"],
  litros: ["hidratacao", "ingestao"],
  beber: ["hidratacao", "ingestao", "consumo"],
  refrigerante: ["liquidos", "acucar", "hidratacao"],
  cafe: ["liquidos", "hidratacao"],
  suco: ["liquidos", "acucar"],
};

const stem = (t: string) => (t.length > 5 ? t.slice(0, t.length - 1) : t);

export const tokenizar = (consulta: string): string[] => {
  const base = normalize(consulta)
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((p) => p.length > 2 && !STOPWORDS.has(p));

  const expandidos = new Set<string>();
  for (const t of base) {
    expandidos.add(t);
    for (const extra of SINÔNIMOS[t] ?? []) expandidos.add(normalize(extra));
  }
  return [...expandidos];
};

const pesoImpacto = { alto: 1.35, medio: 1.15, base: 1 } as const;

export interface RefPontuada {
  ref: Referência;
  score: number;
  trechos: string[];
}

const contém = (texto: string, token: string) => {
  if (texto.includes(token)) return true;
  const s = stem(token);
  return s.length > 3 && texto.includes(s);
};

/** Pontua toda a base contra os tokens da pergunta. */
export const pontuarReferências = (consulta: string, base: Referência[] = REFERÊNCIAS): RefPontuada[] => {
  const tokens = tokenizar(consulta);
  if (!tokens.length) return [];
  const originais = new Set(
    normalize(consulta)
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((p) => p.length > 2 && !STOPWORDS.has(p)),
  );

  return base
    .map((ref) => {
      const titulo = normalize(`${ref.titulo} ${ref.tituloOriginal ?? ""}`);
      const termos = normalize(ref.termos.join(" | "));
      const eixos = normalize(ref.eixos.join(" "));
      const frases = [
        ...ref.resumo.split(/(?<=\.)\s+/),
        ...ref.pontos,
        ref.aplicação,
      ].filter(Boolean);
      const corpo = normalize(frases.join(" "));

      let score = 0;
      const trechos: string[] = [];

      for (const token of tokens) {
        const peso = originais.has(token) ? 1 : 0.55; // sinônimo pesa menos
        if (contém(termos, token)) score += 6 * peso;
        if (contém(titulo, token)) score += 4.5 * peso;
        if (contém(eixos, token)) score += 2.5 * peso;
        if (contém(corpo, token)) {
          score += 1.6 * peso;
          const frase = frases.find((f) => contém(normalize(f), token));
          if (frase && !trechos.includes(frase)) trechos.push(frase);
        }
      }

      // cobertura: recompensa referência que cobre vários termos da pergunta
      const cobertos = tokens.filter(
        (t) => contém(termos, t) || contém(titulo, t) || contém(corpo, t),
      ).length;
      if (score > 0) score = (score + cobertos * 2) * pesoImpacto[ref.impacto];

      return { ref, score, trechos: trechos.slice(0, 3) };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
};

export type Confiança = "alta" | "média" | "exploratória";

export interface RespostaSintetizada {
  titulo: string;
  resumo: string;
  detalhes: string[];
  confiança: Confiança;
  eixos: string[];
  fontes: Referência[];
  relacionadas: string[];
}

const primeiraFrase = (texto: string) => {
  const f = texto.split(/(?<=\.)\s+/)[0] ?? texto;
  return f.trim();
};

/** Tokens da pergunta sem expansão por sinônimos. */
const tokensLiterais = (texto: string): string[] =>
  normalize(texto)
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((p) => p.length > 2 && !STOPWORDS.has(p));

type Intenção =
  | "definicao"
  | "quantidade"
  | "seguranca"
  | "comparacao"
  | "mecanismo"
  | "publico"
  | "simnao"
  | "geral";

const detectarIntenção = (consulta: string): Intenção => {
  const q = normalize(consulta);
  if (/^(o que e|oque e|o que sao|o que significa|que e|que sao|defini|conceito|significado)/.test(q)) return "definicao";
  if (/(quanto|quantos|quantas|litros|ml |mililitro|dose|por dia|frequencia)/.test(q)) return "quantidade";
  if (/(faz mal|prejudic|risco|perigo|efeito colateral|contraindic|seguro|segura|excesso|toxic)/.test(q)) return "seguranca";
  if (/(melhor que|comparad|versus| vs |diferenca|diferença|ou agua|em vez de|no lugar de)/.test(q)) return "comparacao";
  if (/(como funciona|de que forma|por que|porque|por qual motivo|mecanismo|qual o efeito)/.test(q)) return "mecanismo";
  if (/(crianca|criança|gestante|gravida|grávida|idoso|bebe|bebê|atleta|diabetic|hipertens)/.test(q)) return "publico";
  if (/^(a agua|agua|beber|tomar|faz|ajuda|serve|pode|vale|existe|tem|previne|melhora|cura|emagrece)/.test(q) || /\bajuda\b/.test(q))
    return "simnao";
  return "geral";
};

/** Definições curtas para perguntas conceituais ("o que é ..."). */
const CONCEITOS: { chaves: string[]; termo: string; definição: string }[] = [
  {
    chaves: ["agua alcalina", "alcalina", "alcalinidade"],
    termo: "água alcalina",
    definição:
      "Água alcalina é a água com pH acima de 7 (na faixa estudada, entre 8 e 9,5) e com minerais alcalinizantes como cálcio, magnésio e bicarbonato, que reduzem a carga ácida da dieta (PRAL) e ajudam o organismo a manter o equilíbrio ácido-base.",
  },
  {
    chaves: ["pral"],
    termo: "PRAL",
    definição:
      "PRAL é a carga ácida renal potencial de um alimento ou bebida: valores negativos indicam efeito alcalinizante e valores positivos, efeito acidificante sobre o organismo.",
  },
  {
    chaves: ["ph"],
    termo: "pH",
    definição:
      "pH é a medida de acidez ou alcalinidade de um líquido, de 0 a 14: abaixo de 7 é ácido, 7 é neutro e acima de 7 é alcalino. Água alcalina para consumo fica normalmente entre 8 e 9,5.",
  },
  {
    chaves: ["hidrogenio molecular", "hidrogenio", "h2"],
    termo: "hidrogênio molecular (H2)",
    definição:
      "Hidrogênio molecular (H2) é um gás dissolvido na água com ação antioxidante seletiva, estudado por neutralizar radicais livres ligados ao estresse oxidativo e à fadiga.",
  },
  {
    chaves: ["osmose reversa", "osmose"],
    termo: "osmose reversa",
    definição:
      "Osmose reversa é um processo de filtragem que remove praticamente tudo da água, inclusive os minerais, produzindo água desmineralizada, com pH mais baixo e sem cálcio ou magnésio.",
  },
  {
    chaves: ["agua ionizada", "ionizada", "ionizador"],
    termo: "água ionizada",
    definição:
      "Água ionizada é obtida por eletrólise, que separa a água em frações alcalina e ácida. Ela se diferencia da alcalinização por minerais, que ocorre por contato com elementos naturais.",
  },
  {
    chaves: ["microplastico", "microplasticos"],
    termo: "microplásticos",
    definição:
      "Microplásticos são partículas plásticas menores que 5 mm que migram de garrafas e galões para a água e já foram detectadas em amostras de consumo humano.",
  },
  {
    chaves: ["estresse oxidativo", "radicais livres", "antioxidante"],
    termo: "estresse oxidativo",
    definição:
      "Estresse oxidativo é o desequilíbrio entre radicais livres e defesas antioxidantes do corpo, associado a envelhecimento celular e doenças crônicas.",
  },
  {
    chaves: ["hidratacao"],
    termo: "hidratação",
    definição:
      "Hidratação é a manutenção do equilíbrio de água e eletrólitos no organismo, avaliada por marcadores como osmolalidade urinária e volume plasmático.",
  },
  {
    chaves: ["trihalometano", "cloro", "subproduto"],
    termo: "cloro e subprodutos",
    definição:
      "O cloro usado no tratamento público reage com matéria orgânica e forma subprodutos como os trihalometanos, removidos por filtragem com carvão ativado.",
  },
];

const conceitoDaPergunta = (consulta: string) => {
  const q = normalize(consulta);
  const candidatos = CONCEITOS.filter((c) => c.chaves.some((k) => q.includes(normalize(k))));
  // prioriza a chave mais específica encontrada
  return candidatos.sort(
    (a, b) =>
      Math.max(...b.chaves.map((k) => (q.includes(normalize(k)) ? k.length : 0))) -
      Math.max(...a.chaves.map((k) => (q.includes(normalize(k)) ? k.length : 0))),
  )[0];
};

/** Ordena frases candidatas pela aderência aos termos digitados. */
const frasesOrdenadas = (frases: string[], literais: string[], intenção: Intenção): string[] => {
  const vistas = new Set<string>();
  return frases
    .filter((f) => f && f.trim().length > 25 && !vistas.has(f) && vistas.add(f))
    .map((f) => {
      const n = normalize(f);
      let s = literais.filter((t) => contém(n, t)).length * 3;
      if (intenção === "quantidade" && /\d/.test(f)) s += 3;
      if (intenção === "seguranca" && /(seguran|risco|adverso|efeito|tolerad|sem alteracao|sem alteração)/i.test(f)) s += 3;
      if (intenção === "comparacao" && /(compara|do que|versus|melhor|maior|menor|em relacao|em relação)/i.test(f)) s += 2;
      if (intenção === "mecanismo" && /(porque|pois|mecanismo|atua|reduz|aumenta|ativa|neutraliza)/i.test(f)) s += 2;
      // penaliza frases meramente descritivas do estudo, que não respondem nada
      if (/^(estudo|verbete|compila|documento|revis|ensaio|artigo|pesquisa|meta-?anal|trabalho|este |esta |o estudo|a revis)/i.test(f.trim()))
        s -= 4;
      // valoriza frases com achado ou conclusão
      if (/(mostrou|mostra|reduziu|aumentou|melhorou|associad|indica|resultado|conclui|evidenc|recomend|sustenta)/i.test(f)) s += 2;
      return { f: f.trim(), s };
    })
    .sort((a, b) => b.s - a.s)
    .filter((x) => x.s > 0)
    .map((x) => x.f);
};

const tituloPorIntenção = (intenção: Intenção, consulta: string, top: Referência): string => {
  const foco = consulta
    .trim()
    .replace(/\?+$/, "")
    .replace(/^(o que e|o que é|oque é|oque e|o que sao|o que são|o que significa|que é|que e)\s+/i, "")
    .trim();
  switch (intenção) {
    case "definicao":
      return `Definição: ${foco.charAt(0).toUpperCase()}${foco.slice(1)}`;

    case "quantidade":
      return "O que a base indica sobre quantidade";
    case "seguranca":
      return "O que a base indica sobre segurança";
    case "comparacao":
      return "O que a base mostra na comparação";
    case "mecanismo":
      return "Como a ciência explica";
    case "publico":
      return "O que a base indica para esse público";
    case "simnao":
      return `Resposta direta, com base em ${top.autores} (${top.ano})`;
    default:
      return "O que os estudos indicados mostram";
  }
};

/**
 * Sintetiza uma resposta em linguagem natural a partir das referências
 * mais relevantes, sem depender de perguntas pré-cadastradas.
 */
export const responder = (consulta: string): RespostaSintetizada | null => {
  const ranking = pontuarReferências(consulta);
  const literais = tokensLiterais(consulta);
  const intenção = detectarIntenção(consulta);
  const conceito = intenção === "definicao" ? conceitoDaPergunta(consulta) : undefined;

  if (!ranking.length && !conceito) return null;

  const principais = ranking.slice(0, 3);
  const melhor = principais[0];

  // Só reaproveita a resposta de uma pergunta-guia quando ela é praticamente
  // a mesma pergunta: exige alta cobertura nos dois sentidos, usando apenas
  // os termos literais digitados (sinônimos causavam respostas fora do tema).
  const guiaPróxima =
    literais.length && intenção !== "definicao"
      ? PERGUNTAS_GUIA.map((g) => {
          const alvoTokens = tokensLiterais(g.pergunta);
          if (!alvoTokens.length) return { g, similaridade: 0 };
          const alvo = normalize(g.pergunta);
          const consultaTxt = normalize(consulta);
          const cobPergunta = literais.filter((t) => contém(alvo, t)).length / literais.length;
          const cobGuia = alvoTokens.filter((t) => contém(consultaTxt, t)).length / alvoTokens.length;
          return { g, similaridade: Math.min(cobPergunta, cobGuia) };
        })
          .sort((a, b) => b.similaridade - a.similaridade)
          .filter((x) => x.similaridade >= 0.75)[0]?.g
      : undefined;

  // Frases candidatas: prioriza os trechos que casaram com os termos digitados.
  const candidatas = principais.flatMap((p) => [
    ...p.trechos,
    ...p.ref.pontos,
    ...p.ref.resumo.split(/(?<=\.)\s+/),
    p.ref.aplicação,
  ]);
  let relevantes = frasesOrdenadas(candidatas, literais, intenção);

  // Em perguntas de quantidade, só valem frases que trazem números.
  if (intenção === "quantidade") {
    const comNúmero = relevantes.filter((f) => /\d/.test(f) && /(litro|ml|copo|dia|kg|%)/i.test(f));
    relevantes = comNúmero.length ? comNúmero : relevantes;
  }

  const corpo = relevantes.slice(0, 2).map(primeiraFrase).join(" ").trim();

  let resumo: string;
  if (guiaPróxima) {
    resumo = guiaPróxima.resposta;
  } else if (conceito) {
    resumo = [conceito.definição, corpo].filter(Boolean).join(" ");
  } else if (intenção === "quantidade") {
    resumo = [
      "A referência mais usada é de 30 a 35 ml de água por quilo de peso ao dia, ajustando para clima, atividade física e orientação profissional.",
      corpo,
    ]
      .filter(Boolean)
      .join(" ");
  } else if (intenção === "simnao" && melhor) {
    const forte = melhor.score >= 22;

    const forte = melhor.score >= 22;
    const abertura = forte
      ? "Sim, a base científica sustenta essa relação."
      : "A base traz indícios, mas a evidência ainda é parcial.";
    resumo = [abertura, corpo || primeiraFrase(melhor.ref.resumo)].filter(Boolean).join(" ");
  } else if (melhor) {
    resumo = corpo || [primeiraFrase(melhor.ref.resumo), primeiraFrase(melhor.ref.aplicação)].filter(Boolean).join(" ");
  } else {
    resumo = conceito?.definição ?? "";
  }

  const detalhes: string[] = principais.map((p) => {
    const frase =
      frasesOrdenadas([...p.trechos, ...p.ref.pontos, primeiraFrase(p.ref.resumo)], literais, intenção)[0] ??
      primeiraFrase(p.ref.resumo);
    return `${frase.replace(/\.$/, "")} (${p.ref.autores}, ${p.ref.ano}, ${p.ref.fonte}).`;
  });

  const confiança: Confiança = !melhor
    ? "exploratória"
    : melhor.score >= 22 && principais.some((p) => p.ref.impacto === "alto")
      ? "alta"
      : melhor.score >= 10
        ? "média"
        : "exploratória";

  const eixos = [...new Set(principais.flatMap((p) => p.ref.eixos))].slice(0, 4);

  const relacionadas = PERGUNTAS_GUIA.filter((g) =>
    g.refs.some((id) => principais.some((p) => p.ref.id === id)),
  )
    .map((g) => g.pergunta)
    .filter((p) => p !== guiaPróxima?.pergunta && normalize(p) !== normalize(consulta))
    .slice(0, 3);

  return {
    titulo: tituloPorIntenção(intenção, consulta, melhor?.ref ?? principais[0]?.ref ?? ({ autores: "a base", ano: new Date().getFullYear() } as Referência)),
    resumo,
    detalhes,
    confiança,
    eixos,
    fontes: principais.map((p) => p.ref),
    relacionadas,
  };
};

export const rótuloConfiança: Record<Confiança, string> = {
  alta: "Evidência consistente na base",
  média: "Evidência parcial, leia as fontes",
  exploratória: "Relação indireta, use como ponto de partida",
};

