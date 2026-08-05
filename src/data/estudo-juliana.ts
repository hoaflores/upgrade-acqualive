/** Conteúdo editorial do Dossiê Científico da Dra. Juliana Chaves. */

export type Capitulo = {
  id: string;
  numero: string;
  etiqueta: string;
  titulo: string;
  resumo: string;
  blocos: Array<
    | { tipo: "p"; texto: string }
    | { tipo: "destaque"; texto: string }
    | { tipo: "lista"; itens: string[] }
  >;
};

export const CAPÍTULOS: Capitulo[] = [
  {
    id: "pergunta",
    numero: "01",
    etiqueta: "O ponto de partida",
    titulo: "Uma pergunta foi suficiente para começar",
    resumo:
      "Antes do artigo, do congresso e dos resultados, existiu uma inquietação: e se a água consumida todos os dias também influenciasse o estômago?",
    blocos: [
      {
        tipo: "p",
        texto:
          "Toda descoberta científica nasce de uma inquietação. A ciência avança quando uma pergunta encontra método, acompanhamento e pessoas preparadas para investigá-la.",
      },
      {
        tipo: "p",
        texto:
          "Na Universidade Federal do Pará, a conversa sobre gastrite seguia um roteiro conhecido: alimentação, medicamentos, hábitos de vida e a bactéria Helicobacter pylori. A água fazia parte da rotina de todos os pacientes, mas quase nunca ocupava o centro de uma investigação.",
      },
      {
        tipo: "destaque",
        texto: "Será que a água consumida diariamente também poderia influenciar esse ambiente?",
      },
      {
        tipo: "p",
        texto:
          "Responder a essa questão exigiu meses de acompanhamento, exames, análise laboratorial e uma parceria entre a Dra. Juliana Chaves, a Universidade Federal do Pará e a tecnologia de água alcalina ionizada da Acqualive.",
      },
      {
        tipo: "p",
        texto:
          "Com o avanço da pesquisa, a dissertação passou a fazer parte de uma discussão científica mais ampla. Os resultados foram apresentados em congressos e dialogaram com referências internacionais sobre água alcalina e saúde digestiva.",
      },
    ],
  },
  {
    id: "lacuna",
    numero: "02",
    etiqueta: "A lacuna",
    titulo: "A pergunta que quase ninguém estava fazendo",
    resumo:
      "A água acompanha refeições, medicamentos e hidratação. Ainda assim, permanecia invisível dentro da investigação clínica sobre gastrite.",
    blocos: [
      {
        tipo: "p",
        texto:
          "Quando um paciente chegava ao consultório com queimação, dor na boca do estômago, azia ou refluxo, a investigação seguia sempre os mesmos caminhos: H. pylori, hábitos alimentares, álcool, tabagismo, anti-inflamatórios e estresse.",
      },
      {
        tipo: "p",
        texto:
          "Esses fatores continuam extremamente importantes. Mas existe um detalhe curioso: durante todo esse processo, a água quase nunca era questionada.",
      },
      {
        tipo: "lista",
        itens: [
          "Ela prepara os alimentos e acompanha as refeições.",
          "Ela é usada para tomar os medicamentos.",
          "Ela hidrata o organismo ao longo de todo o dia.",
          "É o elemento que mais frequentemente entra em contato com o sistema digestivo.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Ao estudar a literatura internacional, a Dra. Juliana Chaves encontrou pesquisas sugerindo uma relação interessante entre água alcalina, refluxo gastroesofágico e a atividade da pepsina. Ainda não era consenso, mas já era suficiente para despertar uma pergunta importante.",
      },
      {
        tipo: "destaque",
        texto:
          "A hipótese nunca foi substituir tratamentos consagrados. A proposta era investigar se existia mais uma ferramenta capaz de contribuir.",
      },
      {
        tipo: "p",
        texto:
          "A ciência costuma avançar quando alguém decide observar aquilo que todos consideram comum. Foi assim com o sono, foi assim com a qualidade dos alimentos. Com a água, o que mudou não foi a presença. Foi a pergunta.",
      },
    ],
  },
  {
    id: "gastrite",
    numero: "03",
    etiqueta: "O ambiente estudado",
    titulo: "Antes da pesquisa, é preciso entender a gastrite",
    resumo:
      "O estômago não é um ambiente delicado. Ele convive com ácido clorídrico e enzimas potentes graças a uma barreira biológica muito bem construída.",
    blocos: [
      {
        tipo: "p",
        texto:
          "Imagine uma casa com paredes construídas para resistir à chuva, ao vento e ao calor. Durante anos elas cumprem sua função, até que pequenas infiltrações aparecem e comprometem toda a estrutura. Algo parecido acontece dentro do estômago.",
      },
      {
        tipo: "p",
        texto:
          "A parede interna do estômago é revestida por uma mucosa formada por células especializadas e por uma camada de muco rica em bicarbonato. Essa barreira funciona como um escudo biológico: de um lado o ácido necessário para a digestão, do outro um tecido vivo que precisa permanecer íntegro.",
      },
      { tipo: "destaque", texto: "A gastrite aparece quando esse equilíbrio deixa de existir." },
      {
        tipo: "p",
        texto:
          "Mais do que uma doença única, vale imaginar a gastrite como um processo inflamatório. A causa pode ser a infecção por Helicobacter pylori, o uso frequente de anti-inflamatórios, álcool, tabagismo ou doenças autoimunes. O desfecho costuma ser o mesmo: a barreira perde eficiência, o tecido fica exposto e a inflamação se instala.",
      },
      {
        tipo: "p",
        texto:
          "Nem toda gastrite provoca sintomas intensos. Existem pessoas que convivem anos com alterações importantes sem sentir quase nada, e outras com grande desconforto mesmo quando a inflamação é discreta. Por isso a endoscopia ocupa um papel central na pesquisa: ela mostra como o tecido realmente está.",
      },
      {
        tipo: "p",
        texto:
          "Existe ainda outro personagem fundamental: a pepsina. Enzima produzida pelo próprio organismo para iniciar a digestão das proteínas, ela é essencial dentro do estômago. O problema começa quando permanece ativa em ambientes onde não deveria estar.",
      },
    ],
  },
  {
    id: "pistas",
    numero: "04",
    etiqueta: "O contexto internacional",
    titulo: "A ciência já vinha deixando pistas",
    resumo:
      "Refluxo e gastrite são doenças diferentes, mas compartilham um ambiente agressivo para os tecidos do sistema digestivo.",
    blocos: [
      {
        tipo: "p",
        texto:
          "Durante muitos anos, acreditava-se que o grande responsável pelos danos do refluxo era apenas o ácido. Com o avanço das pesquisas, a pepsina ganhou destaque.",
      },
      {
        tipo: "p",
        texto:
          "Mesmo quando o ácido já não está presente em grandes quantidades, a pepsina pode permanecer aderida aos tecidos. Ao reencontrar um ambiente ácido, torna-se ativa novamente e continua provocando lesões. Essa descoberta mudou a forma como muitos pesquisadores passaram a enxergar o refluxo.",
      },
      {
        tipo: "p",
        texto:
          "Em 2012, pesquisadores liderados pelo otorrinolaringologista Jamie Koufman publicaram um estudo mostrando que a água com pH acima de 8,0 foi capaz de inativar a pepsina em condições laboratoriais, além de apresentar boa capacidade tamponante. O trabalho se tornou uma das principais referências internacionais sobre o tema.",
      },
      {
        tipo: "destaque",
        texto:
          "Enquanto os estudos internacionais olhavam para o refluxo, a pesquisa brasileira decidiu olhar para a gastrite.",
      },
      {
        tipo: "p",
        texto:
          "Em vez de reproduzir uma situação artificial de laboratório, o estudo acompanharia pessoas vivendo sua rotina normalmente. A principal mudança seria a substituição da água consumida por uma água alcalina ionizada produzida pela tecnologia da Acqualive, durante aproximadamente quatro meses.",
      },
    ],
  },
  {
    id: "metodo",
    numero: "05",
    etiqueta: "Metodologia",
    titulo: "Como a pesquisa foi desenhada",
    resumo:
      "Aprovação ética, critérios de inclusão, endoscopia antes e depois, análise anatomopatológica e investigação molecular no mesmo protocolo.",
    blocos: [
      {
        tipo: "p",
        texto:
          "A pesquisa não nasceu da ideia de provar que a água alcalina funcionava. Nasceu da observação de que diferentes estudos internacionais já apontavam resultados interessantes envolvendo água alcalina, pepsina e doenças do trato digestivo.",
      },
      {
        tipo: "p",
        texto:
          "Antes do início do acompanhamento, o projeto foi submetido ao Comitê de Ética em Pesquisa da Universidade Federal do Pará, que avaliou a metodologia, os riscos e a segurança oferecida aos participantes. Somente após essa aprovação a pesquisa pôde começar.",
      },
      {
        tipo: "lista",
        itens: [
          "Avaliação clínica de cada participante com gastrite confirmada por exame anatomopatológico.",
          "Endoscopia digestiva alta no início do estudo, com coleta de amostras.",
          "Consumo diário da água alcalina ionizada da Acqualive por aproximadamente quatro meses, com pH entre 8,5 e 10.",
          "Nova endoscopia ao final, seguindo exatamente os mesmos critérios da primeira.",
          "Análise da expressão de quatro microRNAs relacionados à inflamação da mucosa gástrica.",
        ],
      },
      {
        tipo: "destaque",
        texto:
          "A pesquisa não utilizou uma água alcalina genérica. A água teve pH, potencial de oxirredução, alcalinidade, condutividade e composição mineral documentados.",
      },
      {
        tipo: "p",
        texto:
          "Essa padronização é um dos pilares de qualquer pesquisa clínica. Imagine dois grupos estudando um medicamento com fórmulas diferentes: ninguém saberia se as diferenças vieram do tratamento ou da composição. Com a água acontece exatamente o mesmo.",
      },
      {
        tipo: "p",
        texto:
          "Poucas pesquisas conseguem reunir, em um único protocolo, avaliação clínica, exame endoscópico, análise anatomopatológica e investigação molecular. Cada etapa oferece uma perspectiva diferente do mesmo problema.",
      },
    ],
  },
  {
    id: "resultados",
    numero: "06",
    etiqueta: "Resultados",
    titulo: "O dia em que os resultados começaram a aparecer",
    resumo:
      "Melhora estatisticamente significativa na classificação endoscópica, nenhum caso de piora e aumento de expressão nos quatro microRNAs avaliados.",
    blocos: [
      {
        tipo: "p",
        texto:
          "Depois de quatro meses de consumo diário, foi possível colocar lado a lado as endoscopias realizadas no início da pesquisa e aquelas obtidas ao final do protocolo.",
      },
      {
        tipo: "lista",
        itens: [
          "Doze participantes que apresentavam gastrite moderada no primeiro exame passaram a apresentar gastrite leve na segunda endoscopia.",
          "Nenhum participante apresentou agravamento da classificação endoscópica durante o período.",
          "A melhora na classificação endoscópica foi estatisticamente significativa.",
          "Os quatro microRNAs avaliados apresentaram aumento de expressão em relação ao início do estudo.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Esses números ganham significado quando entendemos o que representam. A endoscopia permite observar diretamente a superfície interna do estômago. É como fotografar o mesmo local em dois momentos diferentes: quando as imagens mostram redução da inflamação, estamos diante de uma mudança documentada por exame.",
      },
      {
        tipo: "destaque",
        texto: "A melhora observada não ficou restrita à percepção dos participantes. Ela apareceu no exame.",
      },
      {
        tipo: "p",
        texto:
          "Os microRNAs podem ser imaginados como pequenos reguladores da atividade celular. Eles ajudam a coordenar quais proteínas serão produzidas e como as células respondem aos estímulos. Analisá-los permitiu conectar as alterações vistas na endoscopia com mecanismos celulares envolvidos na resposta inflamatória.",
      },
      {
        tipo: "p",
        texto:
          "Em muitas pesquisas clínicas, o resultado termina quando o médico observa melhora no exame. Neste estudo, a investigação continuou uma camada mais fundo.",
      },
    ],
  },
  {
    id: "impacto",
    numero: "07",
    etiqueta: "Impacto",
    titulo: "Quando a água passou a fazer parte da conversa",
    resumo:
      "O maior efeito da pesquisa não está apenas nos números. Está na mudança de perspectiva que ela ajudou a construir.",
    blocos: [
      {
        tipo: "p",
        texto:
          "Pela primeira vez, um estudo clínico brasileiro acompanhava pacientes com gastrite utilizando água alcalina ionizada produzida pela tecnologia da Acqualive e avaliava sua evolução por endoscopia, análise histológica e marcadores moleculares.",
      },
      {
        tipo: "p",
        texto:
          "Toda área do conhecimento passa por momentos em que um tema considerado secundário começa a receber atenção suficiente para gerar novas perguntas. Foi assim com a microbiota intestinal. Algo semelhante começou a acontecer com a água.",
      },
      {
        tipo: "destaque",
        texto:
          "A pergunta deixou de ser apenas quanta água beber. Passou a incluir qual água estamos bebendo.",
      },
      {
        tipo: "p",
        texto:
          "Depois da defesa, a dissertação passou a ser apresentada em congressos científicos e a dialogar com um conjunto crescente de trabalhos internacionais dedicados à água alcalina ionizada e à saúde digestiva.",
      },
      {
        tipo: "p",
        texto:
          "A ciência raramente muda de direção por causa de um único trabalho. Ela avança quando diferentes pesquisas começam a apontar para a mesma direção, cada uma respondendo parte das perguntas ainda abertas.",
      },
    ],
  },
  {
    id: "traducao",
    numero: "08",
    etiqueta: "Traduzindo a ciência",
    titulo: "Quatro imagens que explicam tudo",
    resumo:
      "Produzir conhecimento é difícil. Explicar esse conhecimento de forma simples é mais difícil ainda. Estas analogias resolvem boa parte do problema.",
    blocos: [
      {
        tipo: "p",
        texto:
          "O cérebro humano compreende ideias complexas muito mais rapidamente quando consegue visualizá-las. Foi assim que a ciência sempre foi ensinada: o coração vira bomba hidráulica, o DNA vira livro de instruções, o sistema imunológico vira exército.",
      },
      {
        tipo: "p",
        texto:
          "As analogias reunidas neste capítulo não substituem a ciência apresentada no dossiê. Elas funcionam como ferramentas para aulas, palestras, entrevistas e conversas de consultório.",
      },
    ],
  },
  {
    id: "futuro",
    numero: "09",
    etiqueta: "O que vem depois",
    titulo: "O próximo capítulo ainda está sendo escrito",
    resumo:
      "Cada pesquisa responde parte de uma dúvida e abre espaço para novas investigações. Foi exatamente isso que aconteceu aqui.",
    blocos: [
      {
        tipo: "p",
        texto:
          "Hoje, quando novos pesquisadores decidem estudar água alcalina ionizada, eles já não partem do zero. Existe uma base construída por diferentes grupos ao redor do mundo, envolvendo refluxo, pepsina, estresse oxidativo, inflamação e qualidade da água.",
      },
      {
        tipo: "p",
        texto:
          "Existe também uma contribuição brasileira importante, desenvolvida na Universidade Federal do Pará com a tecnologia de água alcalina ionizada da Acqualive.",
      },
      {
        tipo: "destaque",
        texto:
          "Uma boa pesquisa não muda a medicina de um dia para o outro. Ela muda a direção das próximas perguntas.",
      },
      {
        tipo: "p",
        texto:
          "Depois de conhecer essa história, fica difícil enxergar a água da mesma forma. Ela deixa de ser um hábito automático da rotina e passa a ser um tema legítimo de investigação científica.",
      },
      {
        tipo: "p",
        texto:
          "Para a Acqualive, participar dessa história representa a convicção de que inovação precisa caminhar ao lado da ciência. Toda tecnologia voltada para a saúde deve estar disposta a ser investigada, medida e analisada por pesquisadores independentes.",
      },
    ],
  },
];

export const NÚMEROS = [
  { valor: "12", rótulo: "pacientes migraram de gastrite moderada para leve" },
  { valor: "4", rótulo: "meses de consumo diário acompanhado" },
  { valor: "8,5 a 10", rótulo: "faixa de pH da água utilizada no protocolo" },
  { valor: "4", rótulo: "microRNAs analisados na mucosa gástrica" },
  { valor: "0", rótulo: "casos de piora na classificação endoscópica" },
];

export const LINHA_DO_TEMPO = [
  {
    periodo: "Antes dos anos 2000",
    texto:
      "As primeiras pesquisas sobre água alcalina se concentravam em parâmetros físico-químicos, hidratação e composição mineral. Estudos exploratórios, mas com uma hipótese importante: águas diferentes podem produzir respostas biológicas diferentes.",
  },
  {
    periodo: "Início dos anos 2000",
    texto:
      "O refluxo gastroesofágico ganha atenção. A pepsina aparece como protagonista ao lado do ácido: ela pode permanecer aderida aos tecidos e voltar a ser ativada quando reencontra um ambiente ácido.",
  },
  {
    periodo: "2012",
    texto:
      "O grupo liderado pelo Dr. Jamie Koufman observa que a água com pH superior a 8,0 é capaz de inativar a pepsina em condições experimentais, com boa capacidade tamponante. O interesse científico pelo tema cresce de forma significativa.",
  },
  {
    periodo: "2015 a 2020",
    texto:
      "Surgem pesquisas envolvendo estresse oxidativo, metabolismo celular, inflamação e qualidade da água consumida diariamente. As perguntas deixam de ser apenas químicas e passam a envolver respostas biológicas complexas.",
  },
  {
    periodo: "2021",
    texto:
      "A dissertação da Dra. Juliana Chaves é desenvolvida na Universidade Federal do Pará em parceria com a Acqualive, reunindo acompanhamento clínico, endoscopia, análise anatomopatológica e expressão de microRNAs.",
  },
  {
    periodo: "Depois da publicação",
    texto:
      "A pesquisa passa a integrar a literatura científica sobre água alcalina e saúde digestiva, dialogando com estudos internacionais e fortalecendo uma linha de investigação que continua crescendo.",
  },
];

export const ANALOGIAS = [
  {
    tema: "Gastrite",
    frente: "Uma parede com tinta impermeável",
    verso:
      "Enquanto a proteção permanece íntegra, a chuva não causa danos. Quando surgem pequenas falhas, a água infiltra. A mucosa protege o tecido contra um ambiente extremamente ácido. Quando a barreira perde eficiência, instala-se o processo inflamatório.",
  },
  {
    tema: "Pepsina",
    frente: "Uma faca de cozinha",
    verso:
      "Nas mãos de um cozinheiro, indispensável. Ninguém gostaria que ela estivesse atuando sobre um tecido delicado. O problema não está na ferramenta, está no lugar onde ela age.",
  },
  {
    tema: "Endoscopia",
    frente: "Duas fotografias do mesmo jardim",
    verso:
      "Fotografe um jardim antes de uma restauração e novamente quatro meses depois, do mesmo ponto. Lado a lado, as imagens revelam mudanças que a memória dificilmente perceberia.",
  },
  {
    tema: "MicroRNAs",
    frente: "O maestro de uma orquestra",
    verso:
      "Dezenas de músicos talentosos ainda dependem de alguém que coordene a entrada de cada instrumento. Os microRNAs regulam quando determinados processos celulares aumentam ou reduzem sua atividade.",
  },
];

export const PERGUNTAS = [
  {
    pergunta: "Toda água alcalina é igual?",
    resposta:
      "Não. O estudo não investigou água alcalina de forma genérica: utilizou uma água específica, produzida pela tecnologia de ionização da Acqualive, com pH, alcalinidade, potencial de oxirredução e composição mineral registrados durante todo o trabalho. Tecnologias diferentes produzem águas com características diferentes, e a ciência sempre considera qual foi a intervenção utilizada.",
  },
  {
    pergunta: "O pH é a única característica importante?",
    resposta:
      "Não. O pH indica o grau de alcalinidade, mas não descreve toda a composição. A pesquisa registrou também alcalinidade total, potencial de oxirredução, condutividade elétrica e concentração de minerais como magnésio, cálcio, sódio e potássio. Reduzir a discussão apenas ao pH simplificaria demais uma investigação que avaliou um conjunto de características.",
  },
  {
    pergunta: "Por que a pesquisa utilizou endoscopia?",
    resposta:
      "Porque a endoscopia permite observar diretamente a mucosa do estômago. O relato de melhora do paciente é importante, mas comparar imagens obtidas antes e depois da intervenção acrescenta um nível adicional de evidência.",
  },
  {
    pergunta: "O que motivou a análise dos microRNAs?",
    resposta:
      "A busca por compreender a pesquisa sob diferentes perspectivas. Além da evolução clínica e endoscópica, a pesquisadora investigou mecanismos celulares relacionados ao processo inflamatório. Os microRNAs regulam a atividade dos genes e já vinham sendo estudados em doenças inflamatórias e gastrointestinais.",
  },
  {
    pergunta: "Por que essa pesquisa ganhou tanta atenção?",
    resposta:
      "Porque reuniu elementos que raramente aparecem juntos: acompanhamento clínico, endoscopias antes e depois, amostras analisadas em laboratório e uma água com características físico-químicas completamente documentadas.",
  },
  {
    pergunta: "Qual foi o papel da Acqualive?",
    resposta:
      "A Acqualive participou disponibilizando a tecnologia utilizada para produzir a água consumida pelos participantes. Os resultados apresentados referem-se a essa água específica, cujas características foram registradas durante todo o estudo, o que oferece padronização para futuras comparações científicas.",
  },
  {
    pergunta: "O que essa pesquisa representa para a ciência brasileira?",
    resposta:
      "Um passo importante dentro de uma área que continua crescendo. A dissertação ajudou a inserir o Brasil em uma discussão internacional sobre água alcalina ionizada e saúde digestiva, mostrando que universidades brasileiras podem contribuir de forma relevante para esse campo.",
  },
];

export const REFERÊNCIAS_ESTUDO = [
  {
    autor: "Chaves, J. S.",
    titulo:
      "Avaliação da expressão de microRNAs em pacientes com gastrite submetidos ao consumo de água alcalina ionizada",
    fonte: "Dissertação de Mestrado. Universidade Federal do Pará, 2021",
    nota:
      "Principal referência deste dossiê. Acompanhou pacientes com gastrite submetidos ao consumo de água alcalina ionizada produzida pela tecnologia da Acqualive, avaliando evolução clínica, endoscópica e molecular.",
  },
  {
    autor: "Koufman, J. A.; Johnston, N.",
    titulo:
      "Potential benefits of pH 8.8 alkaline drinking water as an adjunct in the treatment of reflux disease",
    fonte: "Annals of Otology, Rhinology & Laryngology, 2012",
    nota:
      "Um dos estudos mais citados sobre água alcalina e saúde digestiva. Demonstrou a inativação da pepsina em condições experimentais.",
  },
  {
    autor: "Johnston, N.; Dettmar, P. W.; Lively, M. O.; Koufman, J. A.",
    titulo: "Conjunto de pesquisas sobre a atuação da pepsina",
    fonte: "Refluxo gastroesofágico e laringofaríngeo",
    nota:
      "Trabalhos que aprofundaram o conhecimento sobre a pepsina e modificaram a forma como muitos pesquisadores compreendem essas doenças.",
  },
  {
    autor: "Organização Mundial da Saúde (OMS)",
    titulo: "Guidelines for Drinking-water Quality",
    fonte: "Documento de referência internacional",
    nota:
      "Referência sobre qualidade da água destinada ao consumo humano, utilizada por pesquisadores e órgãos reguladores em diferentes países.",
  },
  {
    autor: "Sociedade Brasileira de Endoscopia Digestiva (SOBED)",
    titulo: "Diretrizes de procedimentos endoscópicos",
    fonte: "Interpretação clínica das alterações do trato digestivo",
    nota: "Referência para procedimentos e classificação das alterações observadas durante os exames.",
  },
  {
    autor: "Sociedade Brasileira de Gastroenterologia (SBG)",
    titulo: "Publicações e consensos",
    fonte: "Gastrite, refluxo e doenças do aparelho digestivo",
    nota: "Base para diagnóstico, tratamento e acompanhamento dos pacientes citados no dossiê.",
  },
];
