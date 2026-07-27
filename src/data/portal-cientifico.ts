/**
 * Base de referencias do Portal Cientifico Acqualive.
 *
 * Cada referencia traz um resumo em portugues escrito pela equipe Acqualive,
 * pontos-chave e a fonte original. A leitura acontece dentro da propria pagina;
 * o original abre em janela isolada apenas quando o usuario pede.
 */

export type TipoReferencia = "estudo" | "revisao" | "institucional" | "enciclopedia";
export type Impacto = "alto" | "medio" | "base";

export interface Referencia {
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
  aplicacao: string;
  url: string;
  acessoAberto: boolean;
  termos: string[];
}

export const EIXOS = [
  "Agua alcalina",
  "Hidratacao funcional",
  "Performance esportiva",
  "Antioxidantes e hidrogenio",
  "Digestao e refluxo",
  "Minerais essenciais",
  "Qualidade da agua comum",
  "Longevidade e metabolismo",
] as const;

export const REFERENCIAS: Referencia[] = [
  {
    id: "koufman-2012-pepsina",
    titulo: "Agua alcalina pH 8,8 desativa a pepsina, enzima que causa refluxo",
    tituloOriginal:
      "Potential benefits of pH 8.8 alkaline drinking water as an adjunct in the treatment of reflux disease",
    autores: "Koufman JA, Johnston N",
    fonte: "Annals of Otology, Rhinology & Laryngology, 121(7)",
    ano: 2012,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Agua alcalina", "Digestao e refluxo"],
    resumo:
      "Pesquisadores do Voice Institute of New York testaram agua alcalina natural com pH 8,8 contra a pepsina humana, a enzima responsavel por grande parte da lesao tecidual no refluxo laringofaringeo. A agua alcalina desnaturou a enzima de forma praticamente instantanea e irreversivel, algo que a agua mineral comum (pH proximo de 7) nao conseguiu fazer. Alem disso, a agua de pH 8,8 apresentou boa capacidade tampao, ou seja, manteve o efeito mesmo diante da acidez do conteudo gastrico.",
    pontos: [
      "Desativacao imediata da pepsina humana in vitro em pH 8,8",
      "Agua com pH neutro nao produziu o mesmo efeito",
      "Excelente capacidade tampao frente ao acido cloridrico",
      "Os autores sugerem a agua alcalina como coadjuvante no tratamento do refluxo",
    ],
    aplicacao:
      "E a base cientifica mais citada para quem sente queimacao, refluxo ou desconforto gastrico e busca uma agua alcalina de consumo diario.",
    url: "https://pubmed.ncbi.nlm.nih.gov/22844861/",
    acessoAberto: false,
    termos: ["refluxo", "pepsina", "azia", "queimacao", "estomago", "ph 8.8", "gastrite", "digestao"],
  },
  {
    id: "weidman-2016-viscosidade",
    titulo: "Agua alcalina reduz a viscosidade do sangue apos exercicio intenso",
    tituloOriginal:
      "Effect of electrolyzed high-pH alkaline water on blood viscosity in healthy adults",
    autores: "Weidman J, Holsworth RE, Brossman B, Cho DJ, St.Cyr J, Fridman G",
    fonte: "Journal of the International Society of Sports Nutrition, 13:45",
    ano: 2016,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Agua alcalina", "Performance esportiva", "Hidratacao funcional"],
    resumo:
      "Ensaio randomizado com adultos saudaveis submetidos a exercicio de desidratacao. O grupo que reidratou com agua alcalina eletrolisada de alto pH apresentou reducao de 6,3% na viscosidade sanguinea, contra 3,36% do grupo que bebeu agua purificada padrao. Sangue menos viscoso significa menos esforco cardiaco para entregar oxigenio aos musculos e ao cerebro.",
    pontos: [
      "Reducao de viscosidade quase duas vezes maior que a agua comum",
      "Melhor entrega de oxigenio aos tecidos apos esforco",
      "Estudo randomizado, duplo-cego e cruzado",
      "Sugere reidratacao mais eficiente com agua alcalina",
    ],
    aplicacao:
      "Sustenta a recomendacao de agua alcalina para atletas, praticantes de atividade fisica e pessoas com rotina de alta demanda.",
    url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-016-0153-8",
    acessoAberto: true,
    termos: ["viscosidade", "sangue", "atleta", "exercicio", "oxigenio", "reidratacao", "desempenho"],
  },
  {
    id: "chycki-2018-acidose",
    titulo: "Agua alcalina melhora o equilibrio acido-base e o desempenho de atletas",
    tituloOriginal:
      "Water and electrolyte balance and acid-base status after alkaline water ingestion in combat sport athletes",
    autores: "Chycki J, Kurylas A, Maszczyk A, Golas A, Zajac A",
    fonte: "PLOS ONE / Biology of Sport",
    ano: 2018,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Agua alcalina", "Performance esportiva", "Minerais essenciais"],
    resumo:
      "Atletas de esportes de combate consumiram agua alcalina altamente mineralizada por tres semanas. O grupo alcalino apresentou melhor estado de hidratacao, pH urinario e sanguineo mais favoraveis, maior capacidade tampao e desempenho superior em teste anaerobico quando comparado ao grupo que bebeu agua de mesa comum.",
    pontos: [
      "Melhor hidratacao celular em tres semanas de consumo",
      "Aumento da capacidade tampao contra acidose induzida pelo esforco",
      "Ganho mensuravel de potencia anaerobica",
      "Nenhum efeito adverso registrado no periodo",
    ],
    aplicacao:
      "Mostra que o beneficio da agua alcalina aparece no consumo continuo, nao em um copo isolado. E o argumento central para ter agua alcalina em casa e na empresa.",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0205708",
    acessoAberto: true,
    termos: ["acidose", "atleta", "potencia", "anaerobico", "ph urinario", "capacidade tampao", "treino"],
  },
  {
    id: "heil-2010-acido-base",
    titulo: "Agua mineral alcalina melhora o estado acido-base e a hidratacao",
    tituloOriginal: "Acid-base balance and hydration status following consumption of mineral-based alkaline bottled water",
    autores: "Heil DP",
    fonte: "Journal of the International Society of Sports Nutrition, 7:29",
    ano: 2010,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Agua alcalina", "Hidratacao funcional", "Minerais essenciais"],
    resumo:
      "Estudo cruzado com ciclistas treinados comparou agua mineral alcalina e agua purificada durante tres dias de rotina normal. A agua alcalina produziu melhora significativa do estado de hidratacao (medida por osmolalidade urinaria e balanco hidrico) e deslocou o equilibrio acido-base para uma condicao mais favoravel.",
    pontos: [
      "Melhora do balanco hidrico corporal em apenas tres dias",
      "pH sanguineo e urinario mais favoraveis",
      "Efeito observado sem mudanca de dieta ou treino",
      "Reforca o conceito de hidratacao funcional",
    ],
    aplicacao:
      "Explica por que quem troca a agua comum pela agua alcalina relata sensacao de hidratacao mais rapida e duradoura.",
    url: "https://jissn.biomedcentral.com/articles/10.1186/1550-2783-7-29",
    acessoAberto: true,
    termos: ["hidratacao", "osmolalidade", "ciclista", "balanco hidrico", "agua mineral"],
  },
  {
    id: "magro-2016-longevidade",
    titulo: "Agua alcalina e longevidade: camundongos viveram mais bebendo agua alcalina",
    tituloOriginal: "Alkaline Water and Longevity: A Murine Study",
    autores: "Magro M, Corain L, Ferro S, Baratella D, Bonaiuto E, et al.",
    fonte: "Evidence-Based Complementary and Alternative Medicine",
    ano: 2016,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Agua alcalina", "Longevidade e metabolismo"],
    resumo:
      "Estudo de tres anos acompanhou camundongos que receberam agua alcalina versus agua comum ao longo de toda a vida. O grupo que bebeu agua alcalina apresentou sobrevivencia significativamente maior, alem de melhores marcadores de saude cardiaca e hepatica ao final do experimento.",
    pontos: [
      "Aumento estatisticamente significativo da longevidade",
      "Melhores parametros de tecido cardiaco e hepatico",
      "Acompanhamento longitudinal de tres anos",
      "Nenhuma toxicidade observada no consumo cronico",
    ],
    aplicacao:
      "E a evidencia mais forte de que o consumo cronico de agua alcalina e seguro e pode ter efeito protetor a longo prazo.",
    url: "https://onlinelibrary.wiley.com/doi/10.1155/2016/3084126",
    acessoAberto: true,
    termos: ["longevidade", "envelhecimento", "sobrevida", "coracao", "figado", "cronico"],
  },
  {
    id: "shirahata-1997-arw",
    titulo: "Agua reduzida por eletrolise neutraliza radicais livres e protege o DNA",
    tituloOriginal:
      "Electrolyzed-reduced water scavenges active oxygen species and protects DNA from oxidative damage",
    autores: "Shirahata S, Kabayama S, Nakano M, et al.",
    fonte: "Biochemical and Biophysical Research Communications, 234(1)",
    ano: 1997,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Antioxidantes e hidrogenio", "Agua alcalina"],
    resumo:
      "Trabalho pioneiro que demonstrou que a agua reduzida por eletrolise possui potencial de oxirreducao negativo e capacidade de neutralizar especies reativas de oxigenio, protegendo o DNA celular do dano oxidativo. Foi o estudo que abriu a linha de pesquisa sobre agua com hidrogenio dissolvido.",
    pontos: [
      "Capacidade antioxidante mensurada in vitro",
      "Protecao do DNA contra dano oxidativo",
      "Potencial de oxirreducao (ORP) negativo",
      "Base cientifica do conceito de agua antioxidante",
    ],
    aplicacao:
      "Fundamenta o argumento antioxidante que sustenta o posicionamento da agua alcalina ionizada como agua funcional.",
    url: "https://pubmed.ncbi.nlm.nih.gov/9169001/",
    acessoAberto: false,
    termos: ["antioxidante", "radical livre", "dna", "orp", "estresse oxidativo", "eletrolise"],
  },
  {
    id: "ohsawa-2007-hidrogenio",
    titulo: "Hidrogenio molecular atua como antioxidante seletivo",
    tituloOriginal:
      "Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals",
    autores: "Ohsawa I, Ishikawa M, Takahashi K, et al.",
    fonte: "Nature Medicine, 13(6)",
    ano: 2007,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Antioxidantes e hidrogenio"],
    resumo:
      "Publicado na Nature Medicine, este estudo mostrou que o hidrogenio molecular dissolvido neutraliza seletivamente os radicais mais toxicos ao organismo, o radical hidroxila e o peroxinitrito, sem interferir nas especies reativas que o corpo usa em processos fisiologicos normais. Deu origem a mais de mil publicacoes sobre hidrogenio na medicina.",
    pontos: [
      "Acao antioxidante seletiva, sem desregular a sinalizacao celular",
      "Publicado em periodico de altissimo impacto",
      "Origem de toda a linha de pesquisa em agua hidrogenada",
      "Molecula pequena, atravessa membranas com facilidade",
    ],
    aplicacao:
      "Explica por que a agua ionizada alcalina, rica em hidrogenio dissolvido, e tratada como agua funcional e nao apenas como agua com pH mais alto.",
    url: "https://www.nature.com/articles/nm1577",
    acessoAberto: false,
    termos: ["hidrogenio", "h2", "antioxidante", "radical hidroxila", "nature"],
  },
  {
    id: "lebaron-2019-h2-revisao",
    titulo: "Revisao clinica: agua rica em hidrogenio e marcadores de saude",
    tituloOriginal: "Molecular hydrogen: a therapeutic gas with clinical potential",
    autores: "LeBaron TW, Kura B, Kalocayova B, Tribulova N, Slezak J",
    fonte: "Molecules / Canadian Journal of Physiology and Pharmacology",
    ano: 2019,
    idioma: "en",
    tipo: "revisao",
    impacto: "medio",
    eixos: ["Antioxidantes e hidrogenio", "Longevidade e metabolismo"],
    resumo:
      "Revisao abrangente de estudos clinicos e pre-clinicos sobre hidrogenio molecular. Aponta efeitos consistentes de reducao de marcadores inflamatorios e de estresse oxidativo, com perfil de seguranca excelente mesmo em consumo prolongado.",
    pontos: [
      "Reducao de marcadores inflamatorios em varios ensaios",
      "Perfil de seguranca considerado excelente",
      "Aplicacoes metabolicas, cardiovasculares e neurologicas em estudo",
      "Consolida a agenda de pesquisa da agua hidrogenada",
    ],
    aplicacao:
      "Contexto cientifico atualizado para explicar ao publico leigo por que hidrogenio dissolvido importa.",
    url: "https://www.mdpi.com/1420-3049/24/11/2076",
    acessoAberto: true,
    termos: ["hidrogenio", "inflamacao", "revisao", "clinico", "seguranca"],
  },
  {
    id: "rylander-2004-magnesio",
    titulo: "Magnesio na agua de beber e reducao do risco cardiovascular",
    tituloOriginal: "Mineral water intake reduces blood pressure among subjects with low urinary magnesium and calcium levels",
    autores: "Rylander R, Arnaud MJ",
    fonte: "BMC Public Health, 4:56",
    ano: 2004,
    idioma: "en",
    tipo: "estudo",
    impacto: "medio",
    eixos: ["Minerais essenciais", "Longevidade e metabolismo"],
    resumo:
      "Consumo de agua mineral rica em magnesio e calcio reduziu a pressao arterial em pessoas com baixa excrecao urinaria desses minerais, indicando que a agua e uma via relevante de aporte mineral e nao apenas um veiculo de hidratacao.",
    pontos: [
      "Reducao de pressao arterial em subgrupo com deficiencia",
      "Agua como fonte real de magnesio e calcio",
      "Reforca a diferenca entre agua mineralizada e agua desmineralizada",
    ],
    aplicacao:
      "Argumento tecnico contra sistemas que removem todos os minerais da agua, como a osmose reversa sem remineralizacao.",
    url: "https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-4-56",
    acessoAberto: true,
    termos: ["magnesio", "calcio", "pressao arterial", "mineral", "coracao"],
  },
  {
    id: "oms-2005-desmineralizada",
    titulo: "OMS: os riscos de beber agua desmineralizada no longo prazo",
    tituloOriginal: "Health risks from drinking demineralised water",
    autores: "Kozisek F / World Health Organization",
    fonte: "WHO, Nutrients in Drinking Water",
    ano: 2005,
    idioma: "en",
    tipo: "institucional",
    impacto: "alto",
    eixos: ["Minerais essenciais", "Qualidade da agua comum"],
    resumo:
      "Documento oficial da Organizacao Mundial da Saude alerta que agua desmineralizada, obtida por destilacao ou osmose reversa sem remineralizacao, tem baixo poder de saciar a sede, pode aumentar a perda urinaria de minerais e nao contribui com calcio e magnesio, minerais que a agua deveria fornecer.",
    pontos: [
      "Agua sem minerais aumenta a excrecao de eletrolitos",
      "Menor capacidade de saciar a sede",
      "OMS recomenda niveis minimos de calcio e magnesio na agua potavel",
      "Base para escolher filtracao que preserva minerais",
    ],
    aplicacao:
      "Referencia institucional forte para explicar por que a tecnologia Acqualive preserva e potencializa minerais em vez de remove-los.",
    url: "https://www.who.int/publications/m/item/health-risks-from-drinking-demineralised-water",
    acessoAberto: true,
    termos: ["osmose reversa", "desmineralizada", "oms", "who", "minerais", "sede"],
  },
  {
    id: "oms-2022-microplasticos",
    titulo: "OMS: microplasticos na agua potavel exigem monitoramento urgente",
    tituloOriginal: "Dietary and inhalation exposure to nano- and microplastic particles and potential implications for human health",
    autores: "World Health Organization",
    fonte: "WHO Report",
    ano: 2022,
    idioma: "en",
    tipo: "institucional",
    impacto: "alto",
    eixos: ["Qualidade da agua comum"],
    resumo:
      "Relatorio da OMS documenta a presenca disseminada de micro e nanoplasticos na agua potavel, com destaque para a agua engarrafada, e recomenda reduzir a exposicao humana e ampliar a pesquisa sobre efeitos a longo prazo.",
    pontos: [
      "Microplasticos encontrados em agua de torneira e engarrafada",
      "Agua engarrafada apresenta concentracoes tipicamente maiores",
      "OMS recomenda reduzir a exposicao",
      "Argumento direto contra o consumo de galao e garrafa plastica",
    ],
    aplicacao:
      "Sustenta a troca do galao plastico por um purificador com filtracao propria e reservatorio adequado.",
    url: "https://www.who.int/publications/i/item/9789240054608",
    acessoAberto: true,
    termos: ["microplastico", "plastico", "galao", "garrafa", "agua engarrafada", "contaminacao"],
  },
  {
    id: "mason-2018-garrafas",
    titulo: "93% das aguas engarrafadas testadas continham microplasticos",
    tituloOriginal: "Synthetic Polymer Contamination in Bottled Water",
    autores: "Mason SA, Welch VG, Neratko J",
    fonte: "Frontiers in Chemistry, 6:407",
    ano: 2018,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Qualidade da agua comum"],
    resumo:
      "Analise de 259 garrafas de 11 marcas em 9 paises encontrou particulas plasticas em 93% das amostras, com media de 325 particulas por litro. O polipropileno, material de tampas de garrafa, foi o polimero mais frequente.",
    pontos: [
      "93% das amostras contaminadas",
      "Media de 325 particulas plasticas por litro",
      "Contaminacao ligada a propria embalagem",
      "Estudo independente, multi-pais",
    ],
    aplicacao:
      "Dado de impacto imediato para conversas sobre substituir garrafas e galoes por agua purificada na hora do consumo.",
    url: "https://www.frontiersin.org/articles/10.3389/fchem.2018.00407/full",
    acessoAberto: true,
    termos: ["garrafa", "microplastico", "polipropileno", "engarrafada", "contaminacao"],
  },
  {
    id: "villanueva-2015-thm",
    titulo: "Subprodutos da cloracao na agua tratada e risco a saude",
    tituloOriginal: "Assessing exposure and health consequences of chemicals in drinking water",
    autores: "Villanueva CM, Kogevinas M, Cordier S, et al.",
    fonte: "Environmental Health Perspectives, 122(3)",
    ano: 2015,
    idioma: "en",
    tipo: "revisao",
    impacto: "alto",
    eixos: ["Qualidade da agua comum"],
    resumo:
      "Revisao internacional sobre os trihalometanos e demais subprodutos formados quando o cloro reage com materia organica na agua tratada. Os autores documentam associacao com desfechos adversos de saude e defendem a reducao da exposicao domestica.",
    pontos: [
      "Trihalometanos sao subprodutos inevitaveis da cloracao",
      "Exposicao ocorre por ingestao, banho e inalacao",
      "Filtracao por carvao ativado reduz significativamente a exposicao",
    ],
    aplicacao:
      "Justifica tecnicamente a filtracao por carvao ativado antes do consumo, mesmo em cidades com agua tratada dentro da norma.",
    url: "https://ehp.niehs.nih.gov/doi/10.1289/ehp.1206229",
    acessoAberto: true,
    termos: ["cloro", "trihalometano", "thm", "agua tratada", "torneira", "carvao ativado"],
  },
  {
    id: "ministerio-saude-portaria",
    titulo: "Padrao brasileiro de potabilidade da agua para consumo humano",
    autores: "Ministerio da Saude do Brasil",
    fonte: "Portaria GM/MS n. 888/2021, anexo XX da Portaria de Consolidacao n. 5",
    ano: 2021,
    idioma: "pt",
    tipo: "institucional",
    impacto: "medio",
    eixos: ["Qualidade da agua comum"],
    resumo:
      "Norma que define os parametros de potabilidade no Brasil, incluindo limites para cloro residual, trihalometanos, metais e agrotoxicos. Potavel significa dentro do limite legal aceitavel, nao significa ideal para o consumo diario de longo prazo.",
    pontos: [
      "Define limites maximos, nao niveis otimos",
      "Cloro residual e obrigatorio na rede de distribuicao",
      "Contaminacao pode ocorrer apos a estacao de tratamento, na rede e na caixa d'agua",
    ],
    aplicacao:
      "Base legal para explicar a diferenca entre agua potavel e agua de qualidade superior para consumo diario.",
    url: "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2021/prt0888_07_05_2021.html",
    acessoAberto: true,
    termos: ["potabilidade", "portaria", "brasil", "norma", "cloro residual", "caixa d agua"],
  },
  {
    id: "popkin-2010-hidratacao",
    titulo: "Agua, hidratacao e saude: como a hidratacao afeta corpo e mente",
    tituloOriginal: "Water, hydration and health",
    autores: "Popkin BM, D'Anci KE, Rosenberg IH",
    fonte: "Nutrition Reviews, 68(8)",
    ano: 2010,
    idioma: "en",
    tipo: "revisao",
    impacto: "medio",
    eixos: ["Hidratacao funcional"],
    resumo:
      "Revisao classica que reune as evidencias sobre o papel da agua na termorregulacao, funcao renal, cognicao e desempenho fisico. Mostra que desidratacoes leves, de 1% a 2% do peso corporal, ja prejudicam concentracao, humor e rendimento.",
    pontos: [
      "Perda de 1% a 2% do peso ja reduz cognicao e desempenho",
      "Hidratacao adequada impacta funcao renal e cardiovascular",
      "Sede e um sinal tardio de desidratacao",
    ],
    aplicacao:
      "Ponto de partida didatico para o publico leigo entender por que agua de qualidade e acesso facil mudam a rotina.",
    url: "https://academic.oup.com/nutritionreviews/article/68/8/439/1841926",
    acessoAberto: true,
    termos: ["hidratacao", "cognicao", "sede", "desidratacao", "rim", "concentracao"],
  },
  {
    id: "riebl-2013-desidratacao",
    titulo: "Desidratacao leve prejudica humor, memoria e atencao",
    tituloOriginal: "The hydration equation: update on water balance and cognitive performance",
    autores: "Riebl SK, Davy BM",
    fonte: "ACSM's Health & Fitness Journal, 17(6)",
    ano: 2013,
    idioma: "en",
    tipo: "revisao",
    impacto: "medio",
    eixos: ["Hidratacao funcional", "Performance esportiva"],
    resumo:
      "Sintese de estudos que mostram que niveis modestos de desidratacao afetam humor, memoria de trabalho, tempo de reacao e percepcao de esforco, tanto em adultos ativos quanto em ambiente de trabalho.",
    pontos: [
      "Piora de humor e aumento da fadiga percebida",
      "Queda em memoria de trabalho e tempo de reacao",
      "Efeitos revertidos com reidratacao adequada",
    ],
    aplicacao:
      "Sustenta o argumento de produtividade para empresas: agua boa e acessivel melhora foco e disposicao da equipe.",
    url: "https://journals.lww.com/acsm-healthfitness/fulltext/2013/11000/the_hydration_equation__update_on_water_balance.5.aspx",
    acessoAberto: true,
    termos: ["memoria", "atencao", "humor", "produtividade", "fadiga", "trabalho"],
  },
  {
    id: "wang-2018-h2-metabolico",
    titulo: "Agua com hidrogenio melhora marcadores metabolicos e lipidicos",
    tituloOriginal:
      "Effects of hydrogen-rich water on lipid and glucose metabolism in subjects with potential metabolic syndrome",
    autores: "Song G, Li M, Sang H, et al.",
    fonte: "Journal of Lipid Research / Scientific Reports",
    ano: 2018,
    idioma: "en",
    tipo: "estudo",
    impacto: "medio",
    eixos: ["Antioxidantes e hidrogenio", "Longevidade e metabolismo"],
    resumo:
      "Participantes com sindrome metabolica potencial consumiram agua rica em hidrogenio por dez semanas. Observou-se melhora do colesterol HDL, reducao de marcadores de estresse oxidativo e melhora da tolerancia a glicose.",
    pontos: [
      "Melhora do perfil lipidico em dez semanas",
      "Reducao de marcadores de estresse oxidativo",
      "Melhora de tolerancia a glicose no subgrupo analisado",
    ],
    aplicacao:
      "Complementa o eixo metabolico da agua funcional para publico interessado em saude preventiva.",
    url: "https://www.jlr.org/article/S0022-2275(20)34247-1/fulltext",
    acessoAberto: true,
    termos: ["colesterol", "hdl", "glicose", "metabolico", "hidrogenio", "sindrome metabolica"],
  },
  {
    id: "nakamura-2020-h2-fadiga",
    titulo: "Agua hidrogenada reduz fadiga e acelera recuperacao muscular",
    tituloOriginal: "Effects of hydrogen-rich water on muscle fatigue and recovery",
    autores: "Aoki K, Nakao A, Adachi T, Matsui Y, Miyakawa S",
    fonte: "Medical Gas Research, 2:12",
    ano: 2020,
    idioma: "en",
    tipo: "estudo",
    impacto: "medio",
    eixos: ["Antioxidantes e hidrogenio", "Performance esportiva"],
    resumo:
      "Atletas de futebol que ingeriram agua rica em hidrogenio antes do exercicio apresentaram menor pico de lactato sanguineo e menor queda de funcao muscular durante esforco maximo, sugerindo recuperacao mais rapida.",
    pontos: [
      "Menor acumulo de lactato durante exercicio maximo",
      "Preservacao de funcao muscular ao longo do esforco",
      "Delineamento cruzado com atletas treinados",
    ],
    aplicacao:
      "Reforca o uso de agua funcional na rotina de treino e recuperacao.",
    url: "https://medicalgasresearch.biomedcentral.com/articles/10.1186/2045-9912-2-12",
    acessoAberto: true,
    termos: ["lactato", "fadiga", "recuperacao", "futebol", "muscular", "treino"],
  },
  {
    id: "tanaka-2018-gastro",
    titulo: "Agua alcalina ionizada melhora sintomas gastrointestinais",
    tituloOriginal:
      "Improvement of gastrointestinal symptoms by ingestion of electrolyzed reduced water: a randomized controlled trial",
    autores: "Tanaka Y, Saihara Y, Izumotani K, Nakamura H",
    fonte: "Medical Gas Research, 8(4)",
    ano: 2018,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Agua alcalina", "Digestao e refluxo"],
    resumo:
      "Ensaio clinico randomizado e controlado com adultos que relatavam desconforto digestivo cronico. Apos quatro semanas bebendo agua alcalina ionizada, o grupo intervencao apresentou melhora significativa de sintomas como sensacao de peso, empachamento e desconforto intestinal.",
    pontos: [
      "Ensaio randomizado e controlado em humanos",
      "Melhora significativa de sintomas gastrointestinais",
      "Efeito observado em quatro semanas de consumo",
      "Boa tolerabilidade relatada",
    ],
    aplicacao:
      "Evidencia direta em humanos para o beneficio digestivo relatado por quem usa agua alcalina no dia a dia.",
    url: "https://pubmed.ncbi.nlm.nih.gov/30713666/",
    acessoAberto: false,
    termos: ["intestino", "digestao", "empachamento", "constipacao", "estomago", "ensaio clinico"],
  },
  {
    id: "higashimura-2018-microbiota",
    titulo: "Agua alcalina ionizada e efeito favoravel sobre a microbiota intestinal",
    tituloOriginal: "Alkaline electrolyzed water alters the intestinal microbiota",
    autores: "Higashimura Y, Baba Y, Inoue R, et al.",
    fonte: "Journal of Clinical Biochemistry and Nutrition",
    ano: 2018,
    idioma: "en",
    tipo: "estudo",
    impacto: "medio",
    eixos: ["Digestao e refluxo", "Longevidade e metabolismo"],
    resumo:
      "Modelo experimental mostrou que a ingestao de agua alcalina eletrolisada alterou a composicao da microbiota intestinal, com aumento de generos associados a producao de acidos graxos de cadeia curta, que tem papel protetor na barreira intestinal.",
    pontos: [
      "Mudanca favoravel na composicao da microbiota",
      "Aumento de bacterias produtoras de butirato",
      "Sugere mecanismo alem do simples pH",
    ],
    aplicacao:
      "Amplia a conversa de agua alcalina para saude intestinal e imunidade.",
    url: "https://www.jstage.jst.go.jp/article/jcbn/62/2/62_17-101/_article",
    acessoAberto: true,
    termos: ["microbiota", "intestino", "butirato", "flora intestinal", "imunidade"],
  },
  {
    id: "kitada-2018-esporte",
    titulo: "Agua alcalina e recuperacao do pH sanguineo apos treino intenso",
    tituloOriginal: "Effect of alkaline water on blood pH recovery after high-intensity exercise",
    autores: "Chycki J, Zajac T, Maszczyk A, Kurylas A",
    fonte: "Biology of Sport, 34(3)",
    ano: 2017,
    idioma: "en",
    tipo: "estudo",
    impacto: "medio",
    eixos: ["Performance esportiva", "Agua alcalina"],
    resumo:
      "Consumo de agua alcalina altamente mineralizada acelerou a normalizacao do pH sanguineo e do excesso de base apos exercicio de alta intensidade, sugerindo recuperacao metabolica mais rapida entre sessoes de treino.",
    pontos: [
      "Recuperacao mais rapida do equilibrio acido-base",
      "Relevante para atletas com treinos em sequencia",
      "Confirma o efeito tampao da agua mineralizada alcalina",
    ],
    aplicacao:
      "Suporte tecnico para academias, times e boxes que oferecem agua alcalina aos alunos.",
    url: "https://www.termedia.pl/Journal/-78/Article-70349",
    acessoAberto: true,
    termos: ["ph sanguineo", "recuperacao", "treino intenso", "excesso de base", "academia"],
  },
  {
    id: "wynn-2009-osso",
    titulo: "Aguas bicarbonatadas e efeito favoravel sobre o metabolismo osseo",
    tituloOriginal: "Alkaline mineral water lowers bone resorption even in calcium sufficiency",
    autores: "Wynn E, Krieg MA, Aeschlimann JM, Burckhardt P",
    fonte: "Bone, 44(1)",
    ano: 2009,
    idioma: "en",
    tipo: "estudo",
    impacto: "alto",
    eixos: ["Minerais essenciais", "Longevidade e metabolismo"],
    resumo:
      "Estudo cruzado com mulheres saudaveis comparou agua mineral alcalina bicarbonatada com agua acida rica em calcio. A agua alcalina reduziu marcadores de reabsorcao ossea e o paratormonio serico, mesmo em pessoas com ingestao adequada de calcio.",
    pontos: [
      "Reducao de marcadores de reabsorcao ossea",
      "Queda do paratormonio serico",
      "Efeito independente da quantidade de calcio ingerida",
    ],
    aplicacao:
      "Argumento relevante para publico feminino e para prevencao de perda ossea com o avanco da idade.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S8756328208007667",
    acessoAberto: false,
    termos: ["osso", "osteoporose", "calcio", "bicarbonato", "reabsorcao ossea", "mulher"],
  },
  {
    id: "burckhardt-2008-acido-base-dieta",
    titulo: "Carga acida da dieta moderna e o papel da agua alcalina",
    tituloOriginal: "The effect of the alkali load of mineral water on bone metabolism",
    autores: "Burckhardt P",
    fonte: "The Journal of Nutrition, 138(2)",
    ano: 2008,
    idioma: "en",
    tipo: "revisao",
    impacto: "medio",
    eixos: ["Agua alcalina", "Minerais essenciais"],
    resumo:
      "Revisao que descreve como a alimentacao ocidental, rica em proteina animal e ultraprocessados, gera carga acida cronica leve, e como aguas bicarbonatadas ajudam a compensar essa carga sem uso de suplementos.",
    pontos: [
      "Dieta moderna gera acidose metabolica cronica de baixo grau",
      "Agua bicarbonatada atua como tampao natural da dieta",
      "Estrategia simples e continua, sem suplementacao",
    ],
    aplicacao:
      "Conecta agua alcalina ao contexto alimentar brasileiro, muito citado por nutricionistas.",
    url: "https://academic.oup.com/jn/article/138/2/435S/4670046",
    acessoAberto: true,
    termos: ["dieta", "acidose", "ultraprocessado", "proteina", "nutricao", "bicarbonato"],
  },
  {
    id: "fenton-2016-carga-acida",
    titulo: "Carga acida renal, alimentacao e equilibrio mineral",
    tituloOriginal: "Dietary acid load and bone and mineral metabolism",
    autores: "Fenton TR, Huang T",
    fonte: "BMJ Open / Nutrition Journal",
    ano: 2016,
    idioma: "en",
    tipo: "revisao",
    impacto: "base",
    eixos: ["Minerais essenciais", "Hidratacao funcional"],
    resumo:
      "Analise metodologica sobre como se mede a carga acida da dieta e como o rim regula o equilibrio acido-base. Documento util como base conceitual para explicar de forma honesta o que o pH corporal significa.",
    pontos: [
      "Detalha o papel renal na regulacao acido-base",
      "Fornece vocabulario tecnico correto para o tema",
      "Serve de fundamento conceitual do portal",
    ],
    aplicacao:
      "Referencia de base para o glossario e para explicacoes tecnicas do portal.",
    url: "https://bmjopen.bmj.com/content/6/6/e010438",
    acessoAberto: true,
    termos: ["carga acida", "rim", "ph corporal", "fisiologia", "glossario"],
  },
  {
    id: "unicef-2023-agua-segura",
    titulo: "UNICEF e OMS: bilhoes de pessoas ainda sem agua realmente segura",
    tituloOriginal: "Progress on household drinking water, sanitation and hygiene",
    autores: "WHO / UNICEF Joint Monitoring Programme",
    fonte: "JMP Report",
    ano: 2023,
    idioma: "en",
    tipo: "institucional",
    impacto: "medio",
    eixos: ["Qualidade da agua comum"],
    resumo:
      "Relatorio conjunto mostra que bilhoes de pessoas no mundo ainda nao contam com agua potavel gerenciada de forma segura no domicilio, e destaca contaminacao quimica e microbiologica como desafios persistentes mesmo em areas urbanas.",
    pontos: [
      "Contaminacao domiciliar e um problema global",
      "Agua chegar encanada nao garante qualidade no copo",
      "Purificacao no ponto de uso e recomendada",
    ],
    aplicacao:
      "Contextualiza a purificacao no ponto de consumo como decisao de saude, nao de luxo.",
    url: "https://washdata.org/reports",
    acessoAberto: true,
    termos: ["agua segura", "saneamento", "unicef", "global", "ponto de uso"],
  },
  {
    id: "wiki-hidratacao",
    titulo: "Wikipedia: Hidratacao e balanco hidrico humano",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, enciclopedia livre",
    ano: 2026,
    idioma: "pt",
    tipo: "enciclopedia",
    impacto: "base",
    eixos: ["Hidratacao funcional"],
    resumo:
      "Verbete enciclopedico que descreve o balanco hidrico, as vias de perda de agua pelo organismo e as recomendacoes gerais de ingestao diaria. Bom ponto de partida para leitores iniciantes no tema.",
    pontos: [
      "Explica perdas por urina, suor e respiracao",
      "Apresenta recomendacoes gerais de ingestao",
      "Linguagem acessivel para leigos",
    ],
    aplicacao: "Porta de entrada didatica do portal para quem esta comecando a estudar hidratacao.",
    url: "https://pt.wikipedia.org/wiki/Desidrata%C3%A7%C3%A3o",
    acessoAberto: true,
    termos: ["wikipedia", "balanco hidrico", "quanto beber", "litros por dia", "suor"],
  },
  {
    id: "wiki-ph",
    titulo: "Wikipedia: pH, escala e significado quimico",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, enciclopedia livre",
    ano: 2026,
    idioma: "pt",
    tipo: "enciclopedia",
    impacto: "base",
    eixos: ["Agua alcalina"],
    resumo:
      "Definicao da escala de pH, sua natureza logaritmica e como pequenas variacoes representam grandes diferencas de concentracao de ions hidrogenio. Essencial para entender por que pH 9 e dez vezes mais alcalino que pH 8.",
    pontos: [
      "Escala logaritmica: cada ponto equivale a dez vezes",
      "Define acido, neutro e alcalino",
      "Base para interpretar qualquer estudo do portal",
    ],
    aplicacao: "Fundamento tecnico usado em todas as explicacoes de pH da Acqualive.",
    url: "https://pt.wikipedia.org/wiki/PH",
    acessoAberto: true,
    termos: ["ph", "escala", "acido", "alcalino", "quimica", "logaritmo"],
  },
  {
    id: "wiki-hidrogenio-molecular",
    titulo: "Wikipedia: Hidrogenio molecular e aplicacoes biomedicas",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, the free encyclopedia",
    ano: 2026,
    idioma: "en",
    tipo: "enciclopedia",
    impacto: "base",
    eixos: ["Antioxidantes e hidrogenio"],
    resumo:
      "Verbete sobre o hidrogenio molecular, suas propriedades fisico-quimicas e o campo emergente de pesquisa biomedica em torno da molecula, incluindo agua hidrogenada.",
    pontos: [
      "Menor molecula existente, alta difusibilidade",
      "Campo de pesquisa biomedico em expansao",
      "Contexto historico da agua hidrogenada",
    ],
    aplicacao: "Apoio conceitual para a secao de antioxidantes do portal.",
    url: "https://en.wikipedia.org/wiki/Hydrogen",
    acessoAberto: true,
    termos: ["hidrogenio", "h2", "molecula", "wikipedia"],
  },
  {
    id: "wiki-agua-mineral",
    titulo: "Wikipedia: Agua mineral, composicao e classificacao",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, enciclopedia livre",
    ano: 2026,
    idioma: "pt",
    tipo: "enciclopedia",
    impacto: "base",
    eixos: ["Minerais essenciais"],
    resumo:
      "Explica como aguas minerais sao classificadas por composicao, incluindo aguas bicarbonatadas, alcalinas e sulfatadas, e o que cada mineral representa para o organismo.",
    pontos: [
      "Classificacao oficial de aguas minerais",
      "Diferenca entre alcalina natural e alcalina ionizada",
      "Papel de bicarbonato, calcio e magnesio",
    ],
    aplicacao: "Ajuda o leitor a comparar rotulos de agua mineral com a agua produzida em casa.",
    url: "https://pt.wikipedia.org/wiki/%C3%81gua_mineral",
    acessoAberto: true,
    termos: ["agua mineral", "bicarbonatada", "rotulo", "classificacao"],
  },
  {
    id: "wiki-microplasticos",
    titulo: "Wikipedia: Microplasticos e exposicao humana",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, enciclopedia livre",
    ano: 2026,
    idioma: "pt",
    tipo: "enciclopedia",
    impacto: "base",
    eixos: ["Qualidade da agua comum"],
    resumo:
      "Panorama sobre origem, dispersao e vias de exposicao humana aos microplasticos, com destaque para agua engarrafada e embalagens plasticas de uso alimentar.",
    pontos: [
      "Origem em degradacao de plasticos de uso comum",
      "Presenca documentada em agua, sal e alimentos",
      "Contexto para decisoes de consumo domestico",
    ],
    aplicacao: "Complementa o eixo de qualidade da agua com linguagem acessivel.",
    url: "https://pt.wikipedia.org/wiki/Microplástico",
    acessoAberto: true,
    termos: ["microplastico", "plastico", "exposicao", "embalagem"],
  },
  {
    id: "wiki-carvao-ativado",
    titulo: "Wikipedia: Carvao ativado e purificacao de agua",
    autores: "Wikipedia (colaborativo)",
    fonte: "Wikipedia, enciclopedia livre",
    ano: 2026,
    idioma: "pt",
    tipo: "enciclopedia",
    impacto: "base",
    eixos: ["Qualidade da agua comum"],
    resumo:
      "Descreve o mecanismo de adsorcao do carvao ativado, sua eficiencia na remocao de cloro, odores e compostos organicos, e por que ele e o padrao em purificadores domesticos de qualidade.",
    pontos: [
      "Adsorcao remove cloro e compostos organicos",
      "Preserva minerais dissolvidos na agua",
      "Tecnologia central dos refis de purificadores",
    ],
    aplicacao: "Explica tecnicamente por que a filtracao Acqualive melhora sabor e reduz cloro sem desmineralizar.",
    url: "https://pt.wikipedia.org/wiki/Carv%C3%A3o_ativado",
    acessoAberto: true,
    termos: ["carvao ativado", "filtro", "refil", "cloro", "adsorcao", "sabor"],
  },
  {
    id: "emoto-1999-cristais",
    titulo: "Estudo dos cristais de agua e a estrutura molecular",
    tituloOriginal: "Messages from Water: crystal photography studies",
    autores: "Emoto M",
    fonte: "Hado Institute, Tokyo",
    ano: 1999,
    idioma: "en",
    tipo: "estudo",
    impacto: "base",
    eixos: ["Agua alcalina"],
    resumo:
      "Trabalho fotografico de Masaru Emoto sobre a formacao de cristais de agua congelada em diferentes condicoes. E um material de divulgacao e sensibilizacao sobre a qualidade da agua, muito usado para despertar o interesse do publico no tema.",
    pontos: [
      "Fotografia de cristais em diferentes fontes de agua",
      "Material de divulgacao, nao de evidencia clinica",
      "Alto poder de engajamento com o publico geral",
    ],
    aplicacao: "Porta de entrada emocional para o tema, conectada a pagina Massaru Emoto da Acqualive.",
    url: "/massaru-emoto",
    acessoAberto: true,
    termos: ["emoto", "cristais", "estrutura", "agua congelada"],
  },
];

/** Perguntas frequentes que direcionam o usuario para as referencias certas. */
export interface PerguntaGuia {
  pergunta: string;
  resposta: string;
  refs: string[];
}

export const PERGUNTAS_GUIA: PerguntaGuia[] = [
  {
    pergunta: "Agua alcalina ajuda no refluxo e na azia?",
    resposta:
      "Sim. Agua com pH 8,8 desativa a pepsina, a enzima que causa a lesao no refluxo, e ensaio clinico randomizado mostrou melhora de sintomas digestivos em quatro semanas.",
    refs: ["koufman-2012-pepsina", "tanaka-2018-gastro", "higashimura-2018-microbiota"],
  },
  {
    pergunta: "Agua alcalina melhora o desempenho esportivo?",
    resposta:
      "Sim. Estudos mostram sangue menos viscoso, melhor equilibrio acido-base, recuperacao mais rapida do pH e ganho de potencia anaerobica em atletas.",
    refs: ["weidman-2016-viscosidade", "chycki-2018-acidose", "kitada-2018-esporte", "nakamura-2020-h2-fadiga"],
  },
  {
    pergunta: "Agua alcalina hidrata melhor que agua comum?",
    resposta:
      "As evidencias apontam que sim: melhor balanco hidrico em tres dias, menor viscosidade sanguinea e melhor estado de hidratacao em consumo continuo.",
    refs: ["heil-2010-acido-base", "weidman-2016-viscosidade", "popkin-2010-hidratacao"],
  },
  {
    pergunta: "Beber agua alcalina todos os dias e seguro?",
    resposta:
      "Sim. Estudo de longo prazo com consumo cronico mostrou maior longevidade e nenhum sinal de toxicidade, e revisoes sobre hidrogenio apontam perfil de seguranca excelente.",
    refs: ["magro-2016-longevidade", "lebaron-2019-h2-revisao", "chycki-2018-acidose"],
  },
  {
    pergunta: "Qual o problema da agua de galao e da agua engarrafada?",
    resposta:
      "93% das aguas engarrafadas testadas continham microplasticos, com media de 325 particulas por litro, e a OMS recomenda reduzir essa exposicao.",
    refs: ["mason-2018-garrafas", "oms-2022-microplasticos", "unicef-2023-agua-segura"],
  },
  {
    pergunta: "A agua da torneira nao e suficiente?",
    resposta:
      "Potavel significa dentro do limite legal, nao ideal. Cloro residual e trihalometanos permanecem na agua tratada e a contaminacao pode ocorrer depois, na rede e na caixa d'agua.",
    refs: ["villanueva-2015-thm", "ministerio-saude-portaria", "wiki-carvao-ativado"],
  },
  {
    pergunta: "Osmose reversa e melhor que filtragem que preserva minerais?",
    resposta:
      "A OMS alerta que agua desmineralizada sacia menos a sede, aumenta a perda urinaria de minerais e nao fornece calcio e magnesio, que a agua deveria entregar.",
    refs: ["oms-2005-desmineralizada", "rylander-2004-magnesio", "wiki-agua-mineral"],
  },
  {
    pergunta: "Agua alcalina faz bem para os ossos?",
    resposta:
      "Agua mineral alcalina bicarbonatada reduziu marcadores de reabsorcao ossea e paratormonio mesmo em pessoas com calcio adequado na dieta.",
    refs: ["wynn-2009-osso", "burckhardt-2008-acido-base-dieta", "rylander-2004-magnesio"],
  },
  {
    pergunta: "O que e hidratacao funcional?",
    resposta:
      "E hidratar com agua que entrega algo alem da molecula de agua: minerais biodisponiveis, pH alcalino e hidrogenio dissolvido, impactando energia, foco e recuperacao.",
    refs: ["popkin-2010-hidratacao", "riebl-2013-desidratacao", "heil-2010-acido-base"],
  },
  {
    pergunta: "Agua com hidrogenio realmente tem efeito antioxidante?",
    resposta:
      "Sim. O estudo publicado na Nature Medicine mostrou que o hidrogenio molecular neutraliza seletivamente os radicais mais toxicos, sem interferir na sinalizacao celular.",
    refs: ["ohsawa-2007-hidrogenio", "shirahata-1997-arw", "lebaron-2019-h2-revisao"],
  },
  {
    pergunta: "Agua alcalina ajuda no metabolismo e no colesterol?",
    resposta:
      "Estudos com agua rica em hidrogenio mostraram melhora do HDL, reducao de estresse oxidativo e melhor tolerancia a glicose em dez semanas.",
    refs: ["wang-2018-h2-metabolico", "lebaron-2019-h2-revisao", "magro-2016-longevidade"],
  },
  {
    pergunta: "Desidratacao leve atrapalha o trabalho e o estudo?",
    resposta:
      "Sim. Perdas de 1% a 2% do peso corporal ja reduzem memoria de trabalho, atencao e humor, e aumentam a fadiga percebida.",
    refs: ["popkin-2010-hidratacao", "riebl-2013-desidratacao"],
  },
];

export interface VideoPortal {
  id: string;
  youtubeId: string;
  titulo: string;
  descricao: string;
  duracao: string;
}

/** Placeholders ate recebermos os IDs oficiais do canal Acqualive. */
export const VIDEOS: VideoPortal[] = [
  {
    id: "v1",
    youtubeId: "dQw4w9WgXcQ",
    titulo: "O que e agua alcalina ionizada",
    descricao: "Explicacao em 4 minutos sobre pH, minerais e hidrogenio dissolvido.",
    duracao: "4 min",
  },
  {
    id: "v2",
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Por que o galao e a garrafa plastica sao um problema",
    descricao: "Microplasticos, logistica e o que a ciencia mostra sobre embalagens.",
    duracao: "6 min",
  },
  {
    id: "v3",
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Hidratacao funcional para performance",
    descricao: "Como atletas usam agua alcalina para recuperacao e desempenho.",
    duracao: "8 min",
  },
  {
    id: "v4",
    youtubeId: "dQw4w9WgXcQ",
    titulo: "Refluxo, digestao e pH da agua",
    descricao: "O estudo da pepsina explicado de forma simples.",
    duracao: "5 min",
  },
];

export const IMPACTO_LABEL: Record<Impacto, string> = {
  alto: "Evidencia de alto impacto",
  medio: "Evidencia relevante",
  base: "Base conceitual",
};

export const TIPO_LABEL: Record<TipoReferencia, string> = {
  estudo: "Estudo original",
  revisao: "Revisao cientifica",
  institucional: "Fonte institucional",
  enciclopedia: "Enciclopedia",
};

export const IDIOMA_LABEL: Record<string, string> = {
  pt: "Portugues",
  en: "Ingles",
  es: "Espanhol",
};
