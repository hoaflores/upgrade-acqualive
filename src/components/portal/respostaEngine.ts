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

const aberturaPorIntenção = (consulta: string, top: Referência): string => {
  const q = normalize(consulta);
  const simNao = /^(a agua|agua|beber|tomar|faz|ajuda|serve|pode|vale|existe|tem|e |é )/.test(q) || q.includes("ajuda");
  if (/quanto|quantos|quantas|litros/.test(q)) return "O que a base indica sobre quantidade";
  if (/como|de que forma|por que|porque/.test(q)) return "Como a ciência explica";
  if (simNao) return `Resposta curta, com base em ${top.autores} (${top.ano})`;
  return "O que os estudos indicados mostram";
};

/**
 * Sintetiza uma resposta em linguagem natural a partir das referências
 * mais relevantes, sem depender de perguntas pré-cadastradas.
 */
export const responder = (consulta: string): RespostaSintetizada | null => {
  const ranking = pontuarReferências(consulta);
  if (!ranking.length) return null;

  const principais = ranking.slice(0, 3);
  const [melhor] = principais;

  const tokens = tokenizar(consulta);
  const guiaPróxima = PERGUNTAS_GUIA.map((g) => {
    const alvo = normalize(g.pergunta);
    const acertos = tokens.filter((t) => contém(alvo, t)).length;
    return { g, acertos };
  })
    .sort((a, b) => b.acertos - a.acertos)
    .filter((x) => x.acertos >= 2)[0]?.g;

  const resumo = guiaPróxima
    ? guiaPróxima.resposta
    : `${primeiraFrase(melhor.trechos[0] ?? melhor.ref.resumo)} ${primeiraFrase(melhor.ref.aplicação)}`.trim();

  const detalhes: string[] = [];
  for (const p of principais) {
    const frase = p.trechos[0] ?? primeiraFrase(p.ref.resumo);
    detalhes.push(`${frase} (${p.ref.autores}, ${p.ref.ano}, ${p.ref.fonte}).`);
  }

  const confiança: Confiança =
    melhor.score >= 22 && principais.filter((p) => p.ref.impacto === "alto").length >= 1
      ? "alta"
      : melhor.score >= 10
        ? "média"
        : "exploratória";

  const eixos = [...new Set(principais.flatMap((p) => p.ref.eixos))].slice(0, 4);

  const relacionadas = PERGUNTAS_GUIA.filter((g) =>
    g.refs.some((id) => principais.some((p) => p.ref.id === id)),
  )
    .map((g) => g.pergunta)
    .filter((p) => p !== guiaPróxima?.pergunta)
    .slice(0, 3);

  return {
    titulo: aberturaPorIntenção(consulta, melhor.ref),
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
