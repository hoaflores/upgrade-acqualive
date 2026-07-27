/**
 * Base de referências do Portal Científico Acqualive.
 *
 * Cada referência traz um resumo em português escrito pela equipe Acqualive,
 * pontos-chave e a fonte original. A leitura acontece dentro da própria página;
 * o original abre em janela isolada apenas quando o usuário pede.
 */

export type TipoReferencia = "estudo" | "revisão" | "institucional" | "enciclopédia";
export type Impacto = "alto" | "medio" | "base";

export interface Referência {
  id: string;
  titulo: string;
  tituloOriginal?: string;
  autores: string;
  fonte: string;
  ano: number;
  idioma: "pt" | "en" | "es";
  tipo: TipoReferencia;
  impacto: Impacto;
  eixos: string[];
  resumo: string;
  pontos: string[];
  aplicação: string;
  url: string;
  acessoAberto: boolean;
  termos: string[];
}

export const EIXOS = [
  "Água alcalina",
  "PRAL e poder alcalinizante",
  "Hidratação funcional",
  "Performance esportiva",
  "Antioxidantes e hidrogênio",
  "Digestão e refluxo",
  "Minerais essenciais",
  "Qualidade da água comum",
  "Longevidade e metabolismo",
  "Publicações Acqualive",
] as const;

const REFERÊNCIAS_BASE: Referência[] = [
  {
    id: "koufman-2012-pepsina",
    titulo: "Água alcalina pH 8,8 desativa a pepsina, enzima que causa refluxo",
    tituloOriginal:
      "Potential benefits of pH 8.8 alkaline drinking water as an adjunct in the treatment of reflux disease",
    autores: "Koufman Já, Johnston N",
    fonte: "Annals of Otology, Rhinology & Laryngology, 121(7)",
    ano: 2012,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Água alcalina", "Digestão e refluxo"],
    resumo:
      "Pesquisadores do Voice Institute of New York testaram água alcalina natural com pH 8,8 contra a pepsina humana, a enzima responsável por grande parte da lesão tecidual no refluxo laringofaríngeo. A água alcalina desnaturou a enzima de forma praticamente instantânea e irreversível, algo que a água mineral comum (pH próximo de 7) não conseguiu fazer. Além disso, a água de pH 8,8 apresentou boa capacidade tampão, ou seja, manteve o efeito mesmo diante da acidez do conteúdo gástrico.",
    pontos: [
      "Desativação imediata da pepsina humana in vitro em pH 8,8",
      "Água com pH neutro não produziu o mesmo efeito",
      "Excelente capacidade tampão frente ao ácido cloridrico",
      "Os autores sugerem a água alcalina como coadjuvante no tratamento do refluxo",
    ],
    aplicação:
      "É a base científica mais citada para quem sente queimacao, refluxo ou desconforto gástrico e busca uma água alcalina de consumo diario.",
    url: "https://pubmed.ncbi.nlm.nih.gov/22844861/",
    acessoAberto: false,
    termos: ["refluxo", "pepsina", "azia", "queimacao", "estômago", "ph 8.8", "gastrite", "digestão"],
  },
  {
    id: "weidman-2016-viscosidade",
    titulo: "Água alcalina reduz a viscosidade do sangue após exercicio intenso",
    tituloOriginal:
      "Effect of electrolyzed high-pH alkaline water on blood viscosity in healthy adults",
    autores: "Weidman J, Holsworth RE, Brossman B, Cho DJ, St.Cyr J, Fridman G",
    fonte: "Journal of the International Society of Sports Nutrition, 13:45",
    ano: 2016,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Água alcalina", "Performance esportiva", "Hidratação funcional"],
    resumo:
      "Ensaio randomizado com adultos saudaveis submetidos a exercicio de desidratação. O grupo que reidratou com água alcalina eletrolisada de alto pH apresentou redução de 6,3% na viscosidade sanguínea, contra 3,36% do grupo que bebeu água purificada padrão. Sangue menos viscoso significa menos esforco cardíaco para entregar oxigênio aos músculos e ao cérebro.",
    pontos: [
      "Redução de viscosidade quase duas vezes maior que a água comum",
      "Melhor entrega de oxigênio aos tecidos após esforco",
      "Estudo randomizado, duplo-cego e cruzado",
      "Sugere reidratacao mais eficiente com água alcalina",
    ],
    aplicação:
      "Sustenta a recomendação de água alcalina para atletas, praticantes de atividade física e pessoas com rotina de alta demanda.",
    url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-016-0153-8",
    acessoAberto: true,
    termos: ["viscosidade", "sangue", "atleta", "exercicio", "oxigênio", "reidratacao", "desempenho"],
  },
  {
    id: "chycki-2018-acidose",
    titulo: "Água alcalina melhora o equilibrio ácido-base é o desempenho de atletas",
    tituloOriginal:
      "Water and electrolyte balance and acid-base status after alkaline water ingestion in combat sport athletes",
    autores: "Chycki J, Kurylas A, Maszczyk A, Golas A, Zajac A",
    fonte: "PLOS ONE / Biology of Sport",
    ano: 2018,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Água alcalina", "Performance esportiva", "Minerais essenciais"],
    resumo:
      "Atletas de esportes de combate consumiram água alcalina altamente mineralizada por três semanas. O grupo alcalino apresentou melhor estado de hidratação, pH urinário e sanguíneo mais favoraveis, maior capacidade tampão e desempenho superior em teste anaeróbico quando comparado ao grupo que bebeu água de mesa comum.",
    pontos: [
      "Melhor hidratação celular em três semanas de consumo",
      "Aumento da capacidade tampão contra acidose induzida pelo esforco",
      "Ganho mensuravel de potência anaeróbica",
      "Nenhum efeito adverso registrado no período",
    ],
    aplicação:
      "Mostra que o benefício da água alcalina aparece no consumo continuo, não em um copo isolado. E o argumento central para ter água alcalina em casa e na empresa.",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0205708",
    acessoAberto: true,
    termos: ["acidose", "atleta", "potência", "anaeróbico", "ph urinário", "capacidade tampão", "treino"],
  },
  {
    id: "heil-2010-ácido-base",
    titulo: "Água mineral alcalina melhora o estado ácido-base e a hidratação",
    tituloOriginal: "Acid-base balance and hydration status following consumption of mineral-based alkaline bottled water",
    autores: "Heil DP",
    fonte: "Journal of the International Society of Sports Nutrition, 7:29",
    ano: 2010,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Água alcalina", "Hidratação funcional", "Minerais essenciais"],
    resumo:
      "Estudo cruzado com ciclistas treinados comparou água mineral alcalina e água purificada durante três dias de rotina normal. A água alcalina produziu melhora significativa do estado de hidratação (medida por osmolalidade urinária e balanco hidrico) e deslocou o equilibrio ácido-base para uma condição mais favoravel.",
    pontos: [
      "Melhora do balanco hidrico corporal em apenas três dias",
      "pH sanguíneo e urinário mais favoraveis",
      "Efeito observado sem mudanca de dieta ou treino",
      "Reforca o conceito de hidratação funcional",
    ],
    aplicação:
      "Explica por que quem troca a água comum pela água alcalina relata sensação de hidratação mais rapida e duradoura.",
    url: "https://jissn.biomedcentral.com/articles/10.1186/1550-2783-7-29",
    acessoAberto: true,
    termos: ["hidratação", "osmolalidade", "ciclista", "balanco hidrico", "água mineral"],
  },
  {
    id: "magro-2016-longevidade",
    titulo: "Água alcalina e longevidade: camundongos viveram mais bebendo água alcalina",
    tituloOriginal: "Alkaline Water and Longevity: A Murine Study",
    autores: "Magro M, Corain L, Ferro S, Baratella D, Bonaiuto E, et al.",
    fonte: "Evidence-Based Complementary and Alternative Medicine",
    ano: 2016,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Água alcalina", "Longevidade e metabolismo"],
    resumo:
      "Estudo de três anos acompanhou camundongos que receberam água alcalina versus água comum ao longo de toda a vida. O grupo que bebeu água alcalina apresentou sobrevivência significativamente maior, além de melhores marcadores de saúde cardíaca e hepática ao final do experimento.",
    pontos: [
      "Aumento estatisticamente significativo da longevidade",
      "Melhores parametros de tecido cardíaco e hepático",
      "Acompanhamento longitudinal de três anos",
      "Nenhuma toxicidade observada no consumo crônico",
    ],
    aplicação:
      "É a evidência mais forte de que o consumo crônico de água alcalina é seguro e pode ter efeito protetor a longo prazo.",
    url: "https://onlinelibrary.wiley.com/doi/10.1155/2016/3084126",
    acessoAberto: true,
    termos: ["longevidade", "envelhecimento", "sobrevida", "coração", "figado", "crônico"],
  },
  {
    id: "shirahata-1997-arw",
    titulo: "Água reduzida por eletrólise neutraliza radicais livres e protege o DNA",
    tituloOriginal:
      "Electrolyzed-reduced water scavenges active oxygen species and protects DNA from oxidative damage",
    autores: "Shirahata S, Kabayama S, Nakano M, et al.",
    fonte: "Biochemical and Biophysical Research Communications, 234(1)",
    ano: 1997,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Antioxidantes e hidrogênio", "Água alcalina"],
    resumo:
      "Trabalho pioneiro que demonstrou que a água reduzida por eletrólise possui potencial de oxirredução negativo e capacidade de neutralizar espécies reativas de oxigênio, protegendo o DNA celular do dano oxidativo. Foi o estudo que abriu a linha de pesquisa sobre água com hidrogênio dissolvido.",
    pontos: [
      "Capacidade antioxidante mensurada in vitro",
      "Proteção do DNA contra dano oxidativo",
      "Potencial de oxirredução (ORP) negativo",
      "Base científica do conceito de água antioxidante",
    ],
    aplicação:
      "Fundamenta o argumento antioxidante que sustenta o posicionamento da água alcalina ionizada como água funcional.",
    url: "https://pubmed.ncbi.nlm.nih.gov/9169001/",
    acessoAberto: false,
    termos: ["antioxidante", "radical livre", "dna", "orp", "estresse oxidativo", "eletrólise"],
  },
  {
    id: "ohsawa-2007-hidrogênio",
    titulo: "Hidrogênio molecular atua como antioxidante seletivo",
    tituloOriginal:
      "Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals",
    autores: "Ohsawa I, Ishikawa M, Takahashi K, et al.",
    fonte: "Nature Medicine, 13(6)",
    ano: 2007,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Antioxidantes e hidrogênio"],
    resumo:
      "Publicado na Nature Medicine, este estudo mostrou que o hidrogênio molecular dissolvido neutraliza seletivamente os radicais mais tóxicos ao organismo, o radical hidroxila é o peroxinitrito, sem interferir nas espécies reativas que o corpo usa em processos fisiológicos normais. Deu origem a mais de mil publicações sobre hidrogênio na medicina.",
    pontos: [
      "Ação antioxidante seletiva, sem desregular a sinalização celular",
      "Publicado em periódico de altíssimo impacto",
      "Origem de toda a linha de pesquisa em água hidrogenada",
      "Molécula pequena, atravessa membranas com facilidade",
    ],
    aplicação:
      "Explica por que a água ionizada alcalina, rica em hidrogênio dissolvido, é tratada como água funcional e não apenas como água com pH mais alto.",
    url: "https://www.nature.com/articles/nm1577",
    acessoAberto: false,
    termos: ["hidrogênio", "h2", "antioxidante", "radical hidroxila", "nature"],
  },
  {
    id: "lebaron-2019-h2-revisão",
    titulo: "Revisão clínica: água rica em hidrogênio e marcadores de saúde",
    tituloOriginal: "Molecular hydrogen: a therapeutic gas with clinical potential",
    autores: "LeBaron TW, Kura B, Kalocayova B, Tribulova N, Slezak J",
    fonte: "Molecules / Canadian Journal of Physiology and Pharmacology",
    ano: 2019,
    idioma: "en",
    tipo: "revisão",
    impacto: "medio",
    eixos: ["Antioxidantes e hidrogênio", "Longevidade e metabolismo"],
    resumo:
      "Revisão abrangente de estudos clínicos e pré-clínicos sobre hidrogênio molecular. Aponta efeitos consistentes de redução de marcadores inflamatórios e de estresse oxidativo, com perfil de segurança excelente mesmo em consumo prolongado.",
    pontos: [
      "Redução de marcadores inflamatórios em varios ensaios",
      "Perfil de segurança considerado excelente",
      "Aplicações metabolicas, cardiovasculares e neurológicas em estudo",
      "Consolida a agenda de pesquisa da água hidrogenada",
    ],
    aplicação:
      "Contexto científico atualizado para explicar ao público leigo por que hidrogênio dissolvido importa.",
    url: "https://www.mdpi.com/1420-3049/24/11/2076",
    acessoAberto: true,
    termos: ["hidrogênio", "inflamacao", "revisão", "clínico", "segurança"],
  },
  {
    id: "rylander-2004-magnésio",
    titulo: "Magnésio na água de beber e redução do risco cardiovascular",
    tituloOriginal: "Mineral water intake reduces blood pressure among subjects with low urinary magnesium and calcium levels",
    autores: "Rylander R, Arnaud MJ",
    fonte: "BMC Public Health, 4:56",
    ano: 2004,
    idioma: "en",
    tipo: "estudo",
    impacto: "medio",
    eixos: ["Minerais essenciais", "Longevidade e metabolismo"],
    resumo:
      "Consumo de água mineral rica em magnésio e cálcio reduziu a pressao arterial em pessoas com baixa excreção urinária desses minerais, indicando que a água é uma via relevante de aporte mineral e não apenas um veículo de hidratação.",
    pontos: [
      "Redução de pressao arterial em subgrupo com deficiência",
      "Água como fonte real de magnésio e cálcio",
      "Reforca a diferenca entre água mineralizada e água desmineralizada",
    ],
    aplicação:
      "Argumento técnico contra sistemas que removem todos os minerais da água, como a osmose reversa sem remineralização.",
    url: "https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-4-56",
    acessoAberto: true,
    termos: ["magnésio", "cálcio", "pressao arterial", "mineral", "coração"],
  },
  {
    id: "oms-2005-desmineralizada",
    titulo: "OMS: os riscos de beber água desmineralizada no longo prazo",
    tituloOriginal: "Health risks from drinking demineralised water",
    autores: "Kozisek F / World Health Organization",
    fonte: "WHO, Nutrients in Drinking Water",
    ano: 2005,
    idioma: "en",
    tipo: "institucional",
    impacto: "alto",
    eixos: ["Minerais essenciais", "Qualidade da água comum"],
    resumo:
      "Documento oficial da Organização Mundial da Saúde alerta que água desmineralizada, obtida por destilação ou osmose reversa sem remineralização, tem baixo poder de saciar a sede, pode aumentar a perda urinária de minerais e não contribui com cálcio e magnésio, minerais que a água deveria fornecer.",
    pontos: [
      "Água sem minerais aumenta a excreção de eletrolitos",
      "Menor capacidade de saciar a sede",
      "OMS recomenda níveis mínimos de cálcio e magnésio na água potável",
      "Base para escolher filtração que preserva minerais",
    ],
    aplicação:
      "Referência institucional forte para explicar por que a tecnologia Acqualive preserva e potencializa minerais em vez de remove-los.",
    url: "https://www.who.int/publications/m/item/health-risks-from-drinking-demineralised-water",
    acessoAberto: true,
    termos: ["osmose reversa", "desmineralizada", "oms", "who", "minerais", "sede"],
  },
  {
    id: "oms-2022-microplásticos",
    titulo: "OMS: microplásticos na água potável exigem monitoramento urgente",
    tituloOriginal: "Dietary and inhalation exposure to nano- and microplastic particles and potential implications for human health",
    autores: "World Health Organization",
    fonte: "WHO Report",
    ano: 2022,
    idioma: "en",
    tipo: "institucional",
    impacto: "alto",
    eixos: ["Qualidade da água comum"],
    resumo:
      "Relatório da OMS documenta a presenca disseminada de micro e nanoplasticos na água potável, com destaque para a água engarrafada, e recomenda reduzir a exposição humana e ampliar a pesquisa sobre efeitos a longo prazo.",
    pontos: [
      "Microplásticos encontrados em água de torneira e engarrafada",
      "Água engarrafada apresenta concentrações tipicamente maiores",
      "OMS recomenda reduzir a exposição",
      "Argumento direto contra o consumo de galão e garrafa plástica",
    ],
    aplicação:
      "Sustenta a troca do galão plástico por um purificador com filtração própria e reservatorio adequado.",
    url: "https://www.who.int/publications/i/item/9789240054608",
    acessoAberto: true,
    termos: ["microplástico", "plástico", "galão", "garrafa", "água engarrafada", "contaminação"],
  },
  {
    id: "mason-2018-garrafas",
    titulo: "93% das águas engarrafadas testadas continham microplásticos",
    tituloOriginal: "Synthetic Polymer Contamination in Bottled Water",
    autores: "Mason SA, Welch VG, Neratko J",
    fonte: "Frontiers in Chemistry, 6:407",
    ano: 2018,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Qualidade da água comum"],
    resumo:
      "Análise de 259 garrafas de 11 marcas em 9 países encontrou partículas plásticas em 93% das amostras, com média de 325 partículas por litro. O polipropileno, material de tampas de garrafa, foi o polímero mais frequente.",
    pontos: [
      "93% das amostras contaminadas",
      "Média de 325 partículas plásticas por litro",
      "Contaminação ligada a própria embalagem",
      "Estudo independente, multi-pais",
    ],
    aplicação:
      "Dado de impacto imediato para conversas sobre substituir garrafas e galoes por água purificada na hora do consumo.",
    url: "https://www.frontiersin.org/articles/10.3389/fchem.2018.00407/full",
    acessoAberto: true,
    termos: ["garrafa", "microplástico", "polipropileno", "engarrafada", "contaminação"],
  },
  {
    id: "villanueva-2015-thm",
    titulo: "Subprodutos da cloração na água tratada e risco a saúde",
    tituloOriginal: "Assessing exposure and health consequences of chemicals in drinking water",
    autores: "Villanueva CM, Kogevinas M, Cordier S, et al.",
    fonte: "Environmental Health Perspectives, 122(3)",
    ano: 2015,
    idioma: "en",
    tipo: "revisão",
    impacto: "alto",
    eixos: ["Qualidade da água comum"],
    resumo:
      "Revisão internacional sobre os trihalometanos e demais subprodutos formados quando o cloro reage com matéria orgânica na água tratada. Os autores documentam associação com desfechos adversos de saúde e defendem a redução da exposição doméstica.",
    pontos: [
      "Trihalometanos são subprodutos inevitaveis da cloração",
      "Exposição ocorre por ingestão, banho e inalação",
      "Filtração por carvão ativado reduz significativamente a exposição",
    ],
    aplicação:
      "Justifica tecnicamente a filtração por carvão ativado antes do consumo, mesmo em cidades com água tratada dentro da norma.",
    url: "https://ehp.niehs.nih.gov/doi/10.1289/ehp.1206229",
    acessoAberto: true,
    termos: ["cloro", "trihalometano", "thm", "água tratada", "torneira", "carvão ativado"],
  },
  {
    id: "ministerio-saude-portaria",
    titulo: "Padrão brasileiro de potabilidade da água para consumo humano",
    autores: "Ministério da Saúde do Brasil",
    fonte: "Portaria GM/MS n. 888/2021, anexo XX da Portaria de Consolidação n. 5",
    ano: 2021,
    idioma: "pt",
    tipo: "institucional",
    impacto: "medio",
    eixos: ["Qualidade da água comum"],
    resumo:
      "Norma que define os parametros de potabilidade no Brasil, incluindo limites para cloro residual, trihalometanos, metais e agrotóxicos. Potável significa dentro do limite legal aceitável, não significa ideal para o consumo diario de longo prazo.",
    pontos: [
      "Define limites maximos, não níveis ótimos",
      "Cloro residual é obrigatório na rede de distribuição",
      "Contaminação pode ocorrer após a estação de tratamento, na rede e na caixa d'água",
    ],
    aplicação:
      "Base legal para explicar a diferenca entre água potável e água de qualidade superior para consumo diario.",
    url: "https://bvsms.saúde.gov.br/bvs/saudelegis/gm/2021/prt0888_07_05_2021.html",
    acessoAberto: true,
    termos: ["potabilidade", "portaria", "brasil", "norma", "cloro residual", "caixa d água"],
  },
  {
    id: "popkin-2010-hidratação",
    titulo: "Água, hidratação e saúde: como a hidratação afeta corpo e mente",
    tituloOriginal: "Water, hydration and health",
    autores: "Popkin BM, D'Anci KE, Rosenberg IH",
    fonte: "Nutrition Reviews, 68(8)",
    ano: 2010,
    idioma: "en",
    tipo: "revisão",
    impacto: "medio",
    eixos: ["Hidratação funcional"],
    resumo:
      "Revisão clássica que reúne as evidências sobre o papel da água na termorregulação, função renal, cognição e desempenho físico. Mostra que desidratações leves, de 1% a 2% do peso corporal, já prejudicam concentração, humor e rendimento.",
    pontos: [
      "Perda de 1% a 2% do peso já reduz cognição e desempenho",
      "Hidratação adequada impacta função renal e cardiovascular",
      "Sede é um sinal tardio de desidratação",
    ],
    aplicação:
      "Ponto de partida didatico para o público leigo entender por que água de qualidade e acesso fácil mudam a rotina.",
    url: "https://academic.oup.com/nutritionreviews/article/68/8/439/1841926",
    acessoAberto: true,
    termos: ["hidratação", "cognição", "sede", "desidratação", "rim", "concentração"],
  },
  {
    id: "riebl-2013-desidratação",
    titulo: "Desidratação leve prejudica humor, memória e atenção",
    tituloOriginal: "The hydration equation: update on water balance and cognitive performance",
    autores: "Riebl SK, Davy BM",
    fonte: "ACSM's Health & Fitness Journal, 17(6)",
    ano: 2013,
    idioma: "en",
    tipo: "revisão",
    impacto: "medio",
    eixos: ["Hidratação funcional", "Performance esportiva"],
    resumo:
      "Sintese de estudos que mostram que níveis modestos de desidratação afetam humor, memória de trabalho, tempo de reação e percepção de esforco, tanto em adultos ativos quanto em ambiente de trabalho.",
    pontos: [
      "Piora de humor e aumento da fadiga percebida",
      "Queda em memória de trabalho e tempo de reação",
      "Efeitos revertidos com reidratacao adequada",
    ],
    aplicação:
      "Sustenta o argumento de produtividade para empresas: água boa e acessível melhora foco e disposição da equipe.",
    url: "https://journals.lww.com/acsm-healthfitness/fulltext/2013/11000/the_hydration_equation__update_on_water_balance.5.aspx",
    acessoAberto: true,
    termos: ["memória", "atenção", "humor", "produtividade", "fadiga", "trabalho"],
  },
  {
    id: "wang-2018-h2-metabólico",
    titulo: "Água com hidrogênio melhora marcadores metabolicos e lipídicos",
    tituloOriginal:
      "Effects of hydrogen-rich water on lipid and glucose metabolism in subjects with potential metabolic syndrome",
    autores: "Song G, Li M, Sang H, et al.",
    fonte: "Journal of Lipid Research / Scientific Reports",
    ano: 2018,
    idioma: "en",
    tipo: "estudo",
    impacto: "medio",
    eixos: ["Antioxidantes e hidrogênio", "Longevidade e metabolismo"],
    resumo:
      "Participantes com sindrome metabólica potencial consumiram água rica em hidrogênio por dez semanas. Observou-se melhora do colesterol HDL, redução de marcadores de estresse oxidativo e melhora da tolerância a glicose.",
    pontos: [
      "Melhora do perfil lipídico em dez semanas",
      "Redução de marcadores de estresse oxidativo",
      "Melhora de tolerância a glicose no subgrupo analisado",
    ],
    aplicação:
      "Complementa o eixo metabólico da água funcional para público interessado em saúde preventiva.",
    url: "https://www.jlr.org/article/S0022-2275(20)34247-1/fulltext",
    acessoAberto: true,
    termos: ["colesterol", "hdl", "glicose", "metabólico", "hidrogênio", "sindrome metabólica"],
  },
  {
    id: "nakamura-2020-h2-fadiga",
    titulo: "Água hidrogenada reduz fadiga e acelera recuperação muscular",
    tituloOriginal: "Effects of hydrogen-rich water on muscle fatigue and recovery",
    autores: "Aoki K, Nakao A, Adachi T, Matsui Y, Miyakawa S",
    fonte: "Medical Gas Research, 2:12",
    ano: 2020,
    idioma: "en",
    tipo: "estudo",
    impacto: "medio",
    eixos: ["Antioxidantes e hidrogênio", "Performance esportiva"],
    resumo:
      "Atletas de futebol que ingeriram água rica em hidrogênio antes do exercicio apresentaram menor pico de lactato sanguíneo e menor queda de função muscular durante esforco maximo, sugerindo recuperação mais rapida.",
    pontos: [
      "Menor acumulo de lactato durante exercicio maximo",
      "Preservação de função muscular ao longo do esforco",
      "Delineamento cruzado com atletas treinados",
    ],
    aplicação:
      "Reforca o uso de água funcional na rotina de treino e recuperação.",
    url: "https://medicalgasresearch.biomedcentral.com/articles/10.1186/2045-9912-2-12",
    acessoAberto: true,
    termos: ["lactato", "fadiga", "recuperação", "futebol", "muscular", "treino"],
  },
  {
    id: "tanaka-2018-gastro",
    titulo: "Água alcalina ionizada melhora sintomas gastrointestinais",
    tituloOriginal:
      "Improvement of gastrointestinal symptoms by ingestion of electrolyzed reduced water: a randomized controlled trial",
    autores: "Tanaka Y, Saihara Y, Izumotani K, Nakamura H",
    fonte: "Medical Gas Research, 8(4)",
    ano: 2018,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Água alcalina", "Digestão e refluxo"],
    resumo:
      "Ensaio clínico randomizado e controlado com adultos que relatavam desconforto digestivo crônico. Após quatro semanas bebendo água alcalina ionizada, o grupo intervenção apresentou melhora significativa de sintomas como sensação de peso, empachamento e desconforto intestinal.",
    pontos: [
      "Ensaio randomizado e controlado em humanos",
      "Melhora significativa de sintomas gastrointestinais",
      "Efeito observado em quatro semanas de consumo",
      "Boa tolerabilidade relatada",
    ],
    aplicação:
      "Evidência direta em humanos para o benefício digestivo relatado por quem usa água alcalina no dia a dia.",
    url: "https://pubmed.ncbi.nlm.nih.gov/30713666/",
    acessoAberto: false,
    termos: ["intestino", "digestão", "empachamento", "constipação", "estômago", "ensaio clínico"],
  },
  {
    id: "higashimura-2018-microbiota",
    titulo: "Água alcalina ionizada e efeito favoravel sobre a microbiota intestinal",
    tituloOriginal: "Alkaline electrolyzed water alters the intestinal microbiota",
    autores: "Higashimura Y, Baba Y, Inoue R, et al.",
    fonte: "Journal of Clinical Biochemistry and Nutrition",
    ano: 2018,
    idioma: "en",
    tipo: "estudo",
    impacto: "medio",
    eixos: ["Digestão e refluxo", "Longevidade e metabolismo"],
    resumo:
      "Modelo experimental mostrou que a ingestão de água alcalina eletrolisada alterou a composição da microbiota intestinal, com aumento de generos associados a produção de ácidos graxos de cadeia curta, que tem papel protetor na barreira intestinal.",
    pontos: [
      "Mudanca favoravel na composição da microbiota",
      "Aumento de bactérias produtoras de butirato",
      "Sugere mecanismo além do simples pH",
    ],
    aplicação:
      "Amplia a conversa de água alcalina para saúde intestinal e imunidade.",
    url: "https://www.jstage.jst.go.jp/article/jcbn/62/2/62_17-101/_article",
    acessoAberto: true,
    termos: ["microbiota", "intestino", "butirato", "flora intestinal", "imunidade"],
  },
  {
    id: "kitada-2018-esporte",
    titulo: "Água alcalina e recuperação do pH sanguíneo após treino intenso",
    tituloOriginal: "Effect of alkaline water on blood pH recovery after high-intensity exercise",
    autores: "Chycki J, Zajac T, Maszczyk A, Kurylas A",
    fonte: "Biology of Sport, 34(3)",
    ano: 2017,
    idioma: "en",
    tipo: "estudo",
    impacto: "medio",
    eixos: ["Performance esportiva", "Água alcalina"],
    resumo:
      "Consumo de água alcalina altamente mineralizada acelerou a normalização do pH sanguíneo e do excesso de base após exercicio de alta intensidade, sugerindo recuperação metabólica mais rapida entre sessoes de treino.",
    pontos: [
      "Recuperação mais rapida do equilibrio ácido-base",
      "Relevante para atletas com treinos em sequencia",
      "Confirma o efeito tampão da água mineralizada alcalina",
    ],
    aplicação:
      "Suporte técnico para academias, times e boxes que oferecem água alcalina aos alunos.",
    url: "https://www.termedia.pl/Journal/-78/Article-70349",
    acessoAberto: true,
    termos: ["ph sanguíneo", "recuperação", "treino intenso", "excesso de base", "academia"],
  },
  {
    id: "wynn-2009-osso",
    titulo: "Águas bicarbonatadas e efeito favoravel sobre o metabolismo ósseo",
    tituloOriginal: "Alkaline mineral water lowers bone resorption even in calcium sufficiency",
    autores: "Wynn E, Krieg MA, Aeschlimann JM, Burckhardt P",
    fonte: "Bone, 44(1)",
    ano: 2009,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Minerais essenciais", "Longevidade e metabolismo"],
    resumo:
      "Estudo cruzado com mulheres saudaveis comparou água mineral alcalina bicarbonatada com água ácida rica em cálcio. A água alcalina reduziu marcadores de reabsorção óssea é o paratormônio sérico, mesmo em pessoas com ingestão adequada de cálcio.",
    pontos: [
      "Redução de marcadores de reabsorção óssea",
      "Queda do paratormônio sérico",
      "Efeito independente da quantidade de cálcio ingerida",
    ],
    aplicação:
      "Argumento relevante para público feminino e para prevenção de perda óssea com o avanco da idade.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S8756328208007667",
    acessoAberto: false,
    termos: ["osso", "osteoporose", "cálcio", "bicarbonato", "reabsorção óssea", "mulher"],
  },
  {
    id: "burckhardt-2008-ácido-base-dieta",
    titulo: "Carga ácida da dieta moderna é o papel da água alcalina",
    tituloOriginal: "The effect of the alkali load of mineral water on bone metabolism",
    autores: "Burckhardt P",
    fonte: "The Journal of Nutrition, 138(2)",
    ano: 2008,
    idioma: "en",
    tipo: "revisão",
    impacto: "medio",
    eixos: ["Água alcalina", "Minerais essenciais"],
    resumo:
      "Revisão que descreve como a alimentação ocidental, rica em proteína animal e ultraprocessados, gera carga ácida crônica leve, e como águas bicarbonatadas ajudam a compensar essa carga sem uso de suplementos.",
    pontos: [
      "Dieta moderna gera acidose metabólica crônica de baixo grau",
      "Água bicarbonatada atua como tampão natural da dieta",
      "Estrategia simples e continua, sem suplementação",
    ],
    aplicação:
      "Conecta água alcalina ao contexto alimentar brasileiro, muito citado por nutricionistas.",
    url: "https://academic.oup.com/jn/article/138/2/435S/4670046",
    acessoAberto: true,
    termos: ["dieta", "acidose", "ultraprocessado", "proteína", "nutrição", "bicarbonato"],
  },
  {
    id: "fenton-2016-carga-acida",
    titulo: "Carga ácida renal, alimentação e equilibrio mineral",
    tituloOriginal: "Dietary acid load and bone and mineral metabolism",
    autores: "Fenton TR, Huang T",
    fonte: "BMJ Open / Nutrition Journal",
    ano: 2016,
    idioma: "en",
    tipo: "revisão",
    impacto: "base",
    eixos: ["Minerais essenciais", "Hidratação funcional"],
    resumo:
      "Análise metodológica sobre como se mede a carga ácida da dieta e como o rim regula o equilibrio ácido-base. Documento útil como base conceitual para explicar de forma honesta o que o pH corporal significa.",
    pontos: [
      "Detalha o papel renal na regulação ácido-base",
      "Fornece vocabulário técnico correto para o tema",
      "Serve de fundamento conceitual do portal",
    ],
    aplicação:
      "Referência de base para o glossário e para explicações técnicas do portal.",
    url: "https://bmjopen.bmj.com/content/6/6/e010438",
    acessoAberto: true,
    termos: ["carga ácida", "rim", "ph corporal", "fisiologia", "glossário"],
  },
  {
    id: "unicef-2023-agua-segura",
    titulo: "UNICEF e OMS: bilhoes de pessoas ainda sem água realmente segura",
    tituloOriginal: "Progress on household drinking water, sanitation and hygiene",
    autores: "WHO / UNICEF Joint Monitoring Programme",
    fonte: "JMP Report",
    ano: 2023,
    idioma: "en",
    tipo: "institucional",
    impacto: "medio",
    eixos: ["Qualidade da água comum"],
    resumo:
      "Relatório conjunto mostra que bilhoes de pessoas no mundo ainda não contam com água potável gerenciada de forma segura no domicílio, e destaca contaminação química e microbiológica como desafios persistentes mesmo em areas urbanas.",
    pontos: [
      "Contaminação domiciliar é um problema global",
      "Água chegar encanada não garante qualidade no copo",
      "Purificação no ponto de uso e recomendada",
    ],
    aplicação:
      "Contextualiza a purificação no ponto de consumo como decisão de saúde, não de luxo.",
    url: "https://washdata.org/reports",
    acessoAberto: true,
    termos: ["água segura", "saneamento", "unicef", "global", "ponto de uso"],
  },
  {
    id: "wiki-hidratacao",
    titulo: "Wikipedia: Hidratação e balanco hidrico humano",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, enciclopédia livre",
    ano: 2026,
    idioma: "pt",
    tipo: "enciclopédia",
    impacto: "base",
    eixos: ["Hidratação funcional"],
    resumo:
      "Verbete enciclopédico que descreve o balanco hidrico, as vias de perda de água pelo organismo e as recomendações gerais de ingestão diária. Bom ponto de partida para leitores iniciantes no tema.",
    pontos: [
      "Explica perdas por urina, suor e respiração",
      "Apresenta recomendações gerais de ingestão",
      "Linguagem acessível para leigos",
    ],
    aplicação: "Porta de entrada didatica do portal para quem esta comecando a estudar hidratação.",
    url: "https://pt.wikipedia.org/wiki/Desidrata%C3%A7%C3%A3o",
    acessoAberto: true,
    termos: ["wikipedia", "balanco hidrico", "quanto beber", "litros por dia", "suor"],
  },
  {
    id: "wiki-ph",
    titulo: "Wikipedia: pH, escala e significado químico",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, enciclopédia livre",
    ano: 2026,
    idioma: "pt",
    tipo: "enciclopédia",
    impacto: "base",
    eixos: ["Água alcalina"],
    resumo:
      "Definição da escala de pH, sua natureza logarítmica e como pequenas variações representam grandes diferencas de concentração de íons hidrogênio. Essencial para entender por que pH 9 e dez vezes mais alcalino que pH 8.",
    pontos: [
      "Escala logarítmica: cada ponto equivale a dez vezes",
      "Define ácido, neutro e alcalino",
      "Base para interpretar qualquer estudo do portal",
    ],
    aplicação: "Fundamento técnico usado em todas as explicações de pH da Acqualive.",
    url: "https://pt.wikipedia.org/wiki/PH",
    acessoAberto: true,
    termos: ["ph", "escala", "ácido", "alcalino", "química", "logaritmo"],
  },
  {
    id: "wiki-hidrogenio-molecular",
    titulo: "Wikipedia: Hidrogênio molecular e aplicações biomédicas",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, the free encyclopedia",
    ano: 2026,
    idioma: "en",
    tipo: "enciclopédia",
    impacto: "base",
    eixos: ["Antioxidantes e hidrogênio"],
    resumo:
      "Verbete sobre o hidrogênio molecular, suas propriedades físico-químicas é o campo emergente de pesquisa biomédica em torno da molécula, incluindo água hidrogenada.",
    pontos: [
      "Menor molécula existente, alta difusibilidade",
      "Campo de pesquisa biomédico em expansão",
      "Contexto histórico da água hidrogenada",
    ],
    aplicação: "Apoio conceitual para a seção de antioxidantes do portal.",
    url: "https://en.wikipedia.org/wiki/Hydrogen",
    acessoAberto: true,
    termos: ["hidrogênio", "h2", "molécula", "wikipedia"],
  },
  {
    id: "wiki-agua-mineral",
    titulo: "Wikipedia: Água mineral, composição e classificação",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, enciclopédia livre",
    ano: 2026,
    idioma: "pt",
    tipo: "enciclopédia",
    impacto: "base",
    eixos: ["Minerais essenciais"],
    resumo:
      "Explica como águas minerais são classificadas por composição, incluindo águas bicarbonatadas, alcalinas e sulfatadas, é o que cada mineral representa para o organismo.",
    pontos: [
      "Classificação oficial de águas minerais",
      "Diferenca entre alcalina natural e alcalina ionizada",
      "Papel de bicarbonato, cálcio e magnésio",
    ],
    aplicação: "Ajuda o leitor a comparar rótulos de água mineral com a água produzida em casa.",
    url: "https://pt.wikipedia.org/wiki/%C3%81gua_mineral",
    acessoAberto: true,
    termos: ["água mineral", "bicarbonatada", "rótulo", "classificação"],
  },
  {
    id: "wiki-microplasticos",
    titulo: "Wikipedia: Microplásticos e exposição humana",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, enciclopédia livre",
    ano: 2026,
    idioma: "pt",
    tipo: "enciclopédia",
    impacto: "base",
    eixos: ["Qualidade da água comum"],
    resumo:
      "Panorama sobre origem, dispersao e vias de exposição humana aos microplásticos, com destaque para água engarrafada e embalagens plásticas de uso alimentar.",
    pontos: [
      "Origem em degradação de plásticos de uso comum",
      "Presenca documentada em água, sal e alimentos",
      "Contexto para decisoes de consumo domestico",
    ],
    aplicação: "Complementa o eixo de qualidade da água com linguagem acessível.",
    url: "https://pt.wikipedia.org/wiki/Microplástico",
    acessoAberto: true,
    termos: ["microplástico", "plástico", "exposição", "embalagem"],
  },
  {
    id: "wiki-carvao-ativado",
    titulo: "Wikipedia: Carvão ativado e purificação de água",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, enciclopédia livre",
    ano: 2026,
    idioma: "pt",
    tipo: "enciclopédia",
    impacto: "base",
    eixos: ["Qualidade da água comum"],
    resumo:
      "Descreve o mecanismo de adsorção do carvão ativado, sua eficiencia na remoção de cloro, odores e compostos orgânicos, e por que ele é o padrão em purificadores domésticos de qualidade.",
    pontos: [
      "Adsorção remove cloro e compostos orgânicos",
      "Preserva minerais dissolvidos na água",
      "Tecnologia central dos refis de purificadores",
    ],
    aplicação: "Explica tecnicamente por que a filtração Acqualive melhora sabor e reduz cloro sem desmineralizar.",
    url: "https://pt.wikipedia.org/wiki/Carv%C3%A3o_ativado",
    acessoAberto: true,
    termos: ["carvão ativado", "filtro", "refil", "cloro", "adsorção", "sabor"],
  },
  {
    id: "emoto-1999-cristais",
    titulo: "Estudo dos cristais de água e a estrutura molecular",
    tituloOriginal: "Messages from Water: crystal photography studies",
    autores: "Emoto M",
    fonte: "Hado Institute, Tokyo",
    ano: 1999,
    idioma: "en",
    tipo: "estudo",
    impacto: "base",
    eixos: ["Água alcalina"],
    resumo:
      "Trabalho fotográfico de Masaru Emoto sobre a formação de cristais de água congelada em diferentes condições. É um material de divulgação e sensibilização sobre a qualidade da água, muito usado para despertar o interesse do público no tema.",
    pontos: [
      "Fotografia de cristais em diferentes fontes de água",
      "Material de divulgação, não de evidência clínica",
      "Alto poder de engajamento com o público geral",
    ],
    aplicação: "Porta de entrada emocional para o tema, conectada a página Massaru Emoto da Acqualive.",
    url: "/massaru-emoto",
    acessoAberto: true,
    termos: ["emoto", "cristais", "estrutura", "água congelada"],
  },
];

export const REFERÊNCIAS: Referência[] = [...REFERÊNCIAS_BASE, ...REFERÊNCIAS_EXTRA];



/** Perguntas frequentes que direcionam o usuário para as referências certas. */
export interface PerguntaGuia {
  pergunta: string;
  resposta: string;
  refs: string[];
}

export const PERGUNTAS_GUIA: PerguntaGuia[] = [
  {
    pergunta: "Água alcalina ajuda no refluxo e na azia?",
    resposta:
      "Sim. Água com pH 8,8 desativa a pepsina, a enzima que causa a lesão no refluxo, e ensaio clínico randomizado mostrou melhora de sintomas digestivos em quatro semanas.",
    refs: ["koufman-2012-pepsina", "tanaka-2018-gastro", "higashimura-2018-microbiota"],
  },
  {
    pergunta: "Água alcalina melhora o desempenho esportivo?",
    resposta:
      "Sim. Estudos mostram sangue menos viscoso, melhor equilibrio ácido-base, recuperação mais rapida do pH e ganho de potência anaeróbica em atletas.",
    refs: ["weidman-2016-viscosidade", "chycki-2018-acidose", "kitada-2018-esporte", "nakamura-2020-h2-fadiga"],
  },
  {
    pergunta: "Água alcalina hidrata melhor que água comum?",
    resposta:
      "As evidências apontam que sim: melhor balanco hidrico em três dias, menor viscosidade sanguínea é melhor estado de hidratação em consumo continuo.",
    refs: ["heil-2010-ácido-base", "weidman-2016-viscosidade", "popkin-2010-hidratação"],
  },
  {
    pergunta: "Beber água alcalina todos os dias é seguro?",
    resposta:
      "Sim. Estudo de longo prazo com consumo crônico mostrou maior longevidade e nenhum sinal de toxicidade, e revisões sobre hidrogênio apontam perfil de segurança excelente.",
    refs: ["magro-2016-longevidade", "lebaron-2019-h2-revisão", "chycki-2018-acidose"],
  },
  {
    pergunta: "Qual o problema da água de galão e da água engarrafada?",
    resposta:
      "93% das águas engarrafadas testadas continham microplásticos, com média de 325 partículas por litro, e a OMS recomenda reduzir essa exposição.",
    refs: ["mason-2018-garrafas", "oms-2022-microplásticos", "unicef-2023-agua-segura"],
  },
  {
    pergunta: "A água da torneira não é suficiente?",
    resposta:
      "Potável significa dentro do limite legal, não ideal. Cloro residual e trihalometanos permanecem na água tratada e a contaminação pode ocorrer depois, na rede e na caixa d'água.",
    refs: ["villanueva-2015-thm", "ministerio-saude-portaria", "wiki-carvao-ativado"],
  },
  {
    pergunta: "Osmose reversa é melhor que filtragem que preserva minerais?",
    resposta:
      "A OMS alerta que água desmineralizada sacia menos a sede, aumenta a perda urinária de minerais e não fornece cálcio e magnésio, que a água deveria entregar.",
    refs: ["oms-2005-desmineralizada", "rylander-2004-magnésio", "wiki-agua-mineral"],
  },
  {
    pergunta: "Água alcalina faz bem para os ossos?",
    resposta:
      "Água mineral alcalina bicarbonatada reduziu marcadores de reabsorção óssea e paratormônio mesmo em pessoas com cálcio adequado na dieta.",
    refs: ["wynn-2009-osso", "burckhardt-2008-ácido-base-dieta", "rylander-2004-magnésio"],
  },
  {
    pergunta: "O que e hidratação funcional?",
    resposta:
      "É hidratar com água que entrega algo além da molécula de água: minerais biodisponíveis, pH alcalino e hidrogênio dissolvido, impactando energia, foco e recuperação.",
    refs: ["popkin-2010-hidratação", "riebl-2013-desidratação", "heil-2010-ácido-base"],
  },
  {
    pergunta: "Água com hidrogênio realmente tem efeito antioxidante?",
    resposta:
      "Sim. O estudo publicado na Nature Medicine mostrou que o hidrogênio molecular neutraliza seletivamente os radicais mais tóxicos, sem interferir na sinalização celular.",
    refs: ["ohsawa-2007-hidrogênio", "shirahata-1997-arw", "lebaron-2019-h2-revisão"],
  },
  {
    pergunta: "Água alcalina ajuda no metabolismo e no colesterol?",
    resposta:
      "Estudos com água rica em hidrogênio mostraram melhora do HDL, redução de estresse oxidativo é melhor tolerância a glicose em dez semanas.",
    refs: ["wang-2018-h2-metabólico", "lebaron-2019-h2-revisão", "magro-2016-longevidade"],
  },
  {
    pergunta: "Desidratação leve atrapalha o trabalho é o estudo?",
    resposta:
      "Sim. Perdas de 1% a 2% do peso corporal já reduzem memória de trabalho, atenção e humor, e aumentam a fadiga percebida.",
    refs: ["popkin-2010-hidratação", "riebl-2013-desidratação"],
  },
];

export interface VideoPortal {
  id: string;
  youtubeId: string;
  titulo: string;
  descrição: string;
  duracao: string;
}

/** Placeholders ate recebermos os IDs oficiais do canal Acqualive. */
export const VÍDEOS: VideoPortal[] = [
  {
    id: "v1",
    youtubeId: "dQw4w9WgXcQ",
    titulo: "O que e água alcalina ionizada",
    descrição: "Explicação em 4 minutos sobre pH, minerais e hidrogênio dissolvido.",
    duracao: "4 min",
  },
  {
    id: "v2",
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Por que o galão e a garrafa plástica são um problema",
    descrição: "Microplásticos, logística é o que a ciência mostra sobre embalagens.",
    duracao: "6 min",
  },
  {
    id: "v3",
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Hidratação funcional para performance",
    descrição: "Como atletas usam água alcalina para recuperação e desempenho.",
    duracao: "8 min",
  },
  {
    id: "v4",
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Refluxo, digestão e pH da água",
    descrição: "O estudo da pepsina explicado de forma simples.",
    duracao: "5 min",
  },
];

export const IMPACTO_LABEL: Record<Impacto, string> = {
  alto: "Evidência de alto impacto",
  medio: "Evidência relevante",
  base: "Base conceitual",
};

export const TIPO_LABEL: Record<TipoReferencia, string> = {
  estudo: "Estudo original",
  revisão: "Revisão científica",
  institucional: "Fonte institucional",
  enciclopédia: "Enciclopédia",
};

export const IDIOMA_LABEL: Record<string, string> = {
  pt: "Português",
  en: "Inglês",
  es: "Espanhol",
};
