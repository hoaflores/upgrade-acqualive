// Aprofundamento SEO/GEO dos artigos 31 a 50 (Serie primavera 2026).
// Cada entrada adiciona: pontos-chave, secoes longas, FAQ extra e fontes.

type Faq = [string, string];
export interface SeoExtra {
  takeaways: string[];
  sections: string;
  faq: Faq[];
  sources: [string, string][];
}

const S: Record<string, [string, string]> = {
  who: ["Organização Mundial da Saúde: Guidelines for drinking-water quality, 4ª edição", "https://www.who.int/publications/i/item/9789241549950"],
  efsa: ["EFSA: Scientific Opinion on Dietary Reference Values for water (2010)", "https://www.efsa.europa.eu/en/efsajournal/pub/1459"],
  nasem: ["National Academies: Dietary Reference Intakes for Water, Potassium, Sodium, Chloride and Sulfate", "https://nap.nationalacademies.org/catalog/10925"],
  popkin: ["Popkin, D'Anci e Rosenberg: Water, hydration and health. Nutrition Reviews, 2010", "https://pubmed.ncbi.nlm.nih.gov/20646222/"],
  inmet: ["INMET: avisos meteorológicos oficiais", "https://alertas2.inmet.gov.br/"],
  ms: ["Ministério da Saúde: orientações para ondas de calor", "https://www.gov.br/saude/pt-br"],
  port888: ["Portaria GM/MS nº 888/2021: padrão de potabilidade da água no Brasil", "https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-888-de-4-de-maio-de-2021-318461562"],
  armstrong: ["Armstrong et al.: Urinary indices of hydration status. Int J Sport Nutr, 1994", "https://pubmed.ncbi.nlm.nih.gov/7987361/"],
  ganio: ["Ganio et al.: Mild dehydration impairs cognitive performance and mood of men. Br J Nutr, 2011", "https://pubmed.ncbi.nlm.nih.gov/21736786/"],
  armstrong2012: ["Armstrong et al.: Mild dehydration affects mood in healthy young women. J Nutr, 2012", "https://pubmed.ncbi.nlm.nih.gov/22190027/"],
  qian: ["Qian et al.: Rapid single-particle chemical imaging of nanoplastics. PNAS, 2024", "https://www.pnas.org/doi/10.1073/pnas.2300582121"],
  mason: ["Mason, Welch e Neratko: Synthetic polymer contamination in bottled water. Frontiers in Chemistry, 2018", "https://www.frontiersin.org/articles/10.3389/fchem.2018.00407/full"],
  mg: ["NIH Office of Dietary Supplements: Magnesium fact sheet", "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"],
  cdc: ["CDC: Heat and older adults", "https://www.cdc.gov/heat-health/"],
  sbp: ["Sociedade Brasileira de Pediatria: hidratação na infância", "https://www.sbp.com.br/"],
  kosh: ["PubMed: estudos indexados sobre água alcalina e saúde", "https://pubmed.ncbi.nlm.nih.gov/?term=alkaline+water+health"],
  snis: ["Instituto Trata Brasil: dados de saneamento e perdas de água", "https://tratabrasil.org.br/"],
  aaha: ["WSAVA: diretrizes de nutrição e cuidados para cães e gatos", "https://wsava.org/global-guidelines/"],
  pele: ["Palma et al.: Dietary water affects human skin hydration and biomechanics. Clin Cosmet Investig Dermatol, 2015", "https://pubmed.ncbi.nlm.nih.gov/26345226/"],
  cloro: ["CDC: History of drinking water treatment", "https://www.cdc.gov/healthywater/drinking/history.html"],
  cafe: ["Specialty Coffee Association: Water Quality Standard", "https://sca.coffee/research/coffee-standards"],
};

const tb = (head: string[], rows: string[][]) =>
  `<table class="fx-table"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
    .join("")}</tbody></table>`;

export const SERIE_PRIMAVERA_SEO: Record<string, SeoExtra> = {
  "onda-de-calor-primavera-2026-hidratacao": {
    takeaways: [
      "Em dias de alerta vermelho, some de 500 ml a 1 litro à meta diária de 30 a 40 ml por quilo.",
      "Beba em goles frequentes: o corpo aproveita melhor pequenas quantidades ao longo do dia.",
      "Crianças, idosos, gestantes e quem trabalha ao ar livre precisam de lembretes ativos.",
      "Água agradável e sempre disponível ajuda a transformar a meta em hábito.",
    ],
    sections: `
  <h2>O que é uma onda de calor e por que o alerta vermelho importa</h2>
  <p>O INMET classifica como onda de calor o período de pelo menos cinco dias com temperaturas 5 °C acima da média do mês. O aviso vermelho indica grande perigo: é o nível em que a chance de efeitos na saúde é alta, principalmente em quem já tem alguma condição crônica. Nessas condições, o corpo transpira mais para manter a temperatura interna perto de 37 °C, e cada litro de suor carrega água e minerais como sódio, potássio e magnésio.</p>
  <p>A consequência prática é simples: a mesma rotina de hidratação que funciona em um dia ameno fica curta em uma semana de 38 °C. Por isso, a recomendação é ajustar o volume e, principalmente, a frequência.</p>
  <h2>Plano de hidratação hora a hora para dias de alerta</h2>
  ${tb(["Horário", "O que fazer", "Volume sugerido"], [
    ["Ao acordar", "Um copo antes do café, para repor a noite", "300 ml"],
    ["Manhã", "Garrafa à vista, goles a cada 20 minutos", "600 a 800 ml"],
    ["Almoço", "Água junto da refeição e frutas ricas em água", "300 ml"],
    ["Tarde (pico de calor)", "Redobrar a atenção entre 12h e 16h", "800 ml a 1 litro"],
    ["Noite", "Um copo depois do jantar e outro antes de dormir", "400 ml"],
  ])}
  <p style="font-size:13px;color:#6b7a8d">Referência para um adulto de 70 kg em dia de calor extremo. Ajuste com o seu médico em caso de restrição de líquidos.</p>
  <h2>Hidratação além do copo</h2>
  <p>Cerca de 20% da água que ingerimos vem dos alimentos. Em dias quentes, pratos frescos ajudam bastante:</p>
  <ul>
    <li><strong>Melancia e melão:</strong> mais de 90% de água, com potássio.</li>
    <li><strong>Pepino, alface e tomate:</strong> saladas que hidratam e refrescam.</li>
    <li><strong>Laranja e abacaxi:</strong> água, vitamina C e sabor que estimula a beber mais.</li>
    <li><strong>Sopas frias e caldos leves:</strong> repõem água e sais minerais.</li>
  </ul>
  <h2>Casa preparada: ambiente e rotina</h2>
  <p>Além de beber, vale reduzir o esforço do corpo para se resfriar: fechar cortinas nas horas de sol direto, ventilar a casa à noite, usar roupas claras e leves e planejar tarefas pesadas para o início da manhã. Deixar água boa disponível na cozinha, sem depender de galão que acaba no meio da tarde, é um dos pontos que mais ajuda famílias grandes a manterem o ritmo.</p>
  <h2>Quando procurar atendimento</h2>
  <p>Confusão mental, desmaio, pele quente e seca sem suor, vômitos persistentes ou febre alta durante o calor são sinais de alerta para insolação. Nesses casos, leve a pessoa para a sombra, ofereça água se ela estiver consciente e procure atendimento ou ligue para o SAMU (192).</p>`,
    faq: [
      ["Posso beber água muito fria no calor?", "Sim. Água fresquinha ajuda a baixar a sensação térmica e costuma ser mais agradável, o que auxilia a beber mais vezes."],
      ["Bebida isotônica é necessária?", "Para a maioria das pessoas em casa, água e alimentação equilibrada bastam. Isotônicos ajudam em atividades físicas longas e intensas sob sol."],
      ["O ar-condicionado desidrata?", "O ar seco aumenta a perda de água pela respiração e pela pele. Mantenha a garrafa por perto mesmo em ambientes climatizados."],
    ],
    sources: [S.inmet, S.ms, S.efsa, S.popkin],
  },

  "calculadora-agua-por-dia-peso": {
    takeaways: [
      "O ponto de partida para adultos é de 30 a 40 ml de água por quilo de peso ao dia.",
      "Atividade física, calor, gestação e amamentação aumentam a necessidade.",
      "A EFSA recomenda 2 litros para mulheres e 2,5 litros para homens, somando alimentos e bebidas.",
      "Cor da urina e frequência ao banheiro são termômetros práticos do dia a dia.",
    ],
    sections: `
  <h2>De onde vem a regra dos 35 ml por quilo</h2>
  <p>As referências internacionais partem de estudos de balanço hídrico: quanto o corpo perde por urina, suor, respiração e fezes, e quanto precisa repor. A Autoridade Europeia de Segurança Alimentar (EFSA) fixou a ingestão adequada total em 2 litros por dia para mulheres e 2,5 litros para homens adultos. As Academias Nacionais dos Estados Unidos chegam a valores próximos, de 2,7 e 3,7 litros, porque incluem toda a água dos alimentos. Traduzindo para o peso, a faixa de 30 a 40 ml por quilo cobre a maioria dos adultos saudáveis.</p>
  <h2>Tabela rápida por peso</h2>
  ${tb(["Peso", "Rotina leve (30 ml/kg)", "Rotina ativa (40 ml/kg)"], [
    ["50 kg", "1,5 litro", "2,0 litros"],
    ["60 kg", "1,8 litro", "2,4 litros"],
    ["70 kg", "2,1 litros", "2,8 litros"],
    ["80 kg", "2,4 litros", "3,2 litros"],
    ["90 kg", "2,7 litros", "3,6 litros"],
    ["100 kg", "3,0 litros", "4,0 litros"],
  ])}
  <h2>Fatores que aumentam a sua meta</h2>
  <ul>
    <li><strong>Exercício:</strong> some de 400 a 800 ml por hora de treino, conforme a intensidade e o calor.</li>
    <li><strong>Calor e ar seco:</strong> dias acima de 30 °C pedem de 500 ml a 1 litro extra.</li>
    <li><strong>Gestação:</strong> cerca de 300 ml a mais por dia, segundo a EFSA.</li>
    <li><strong>Amamentação:</strong> cerca de 700 ml a mais por dia.</li>
    <li><strong>Febre, diarreia ou vômito:</strong> a reposição aumenta e deve ser orientada por um profissional de saúde.</li>
  </ul>
  <h2>Como distribuir a meta ao longo do dia</h2>
  <p>Dividir o total em blocos facilita muito. Uma estratégia que funciona para a maioria das pessoas é: 20% da meta pela manhã, 30% até o almoço, 30% durante a tarde e 20% à noite. Uma garrafa de 750 ml reabastecida três vezes já cobre a meta de um adulto de 65 kg.</p>
  <h2>A qualidade da água também entra na conta</h2>
  <p>Quem gosta da água que bebe bebe mais. Gosto de cloro, sensação pesada ou galão acabando são barreiras reais. Uma água filtrada, alcalina e mineralizada, sempre disponível na torneira, ajuda a cumprir a meta sem esforço, e ainda leva cálcio e magnésio a cada copo.</p>`,
    faq: [
      ["Chá e café contam na meta?", "Sim, contam como líquido. Em excesso, o café tem efeito diurético leve, então vale equilibrar com água pura."],
      ["Existe risco em beber água demais?", "É raro em pessoas saudáveis, mas beber vários litros em pouco tempo pode diluir o sódio do sangue. Distribua ao longo do dia."],
      ["Criança segue a mesma conta por peso?", "Não. Crianças têm referências próprias por idade. Veja o nosso guia da garrafinha na lancheira."],
    ],
    sources: [S.efsa, S.nasem, S.popkin, S.armstrong],
  },

  "ph-da-agua-da-torneira-oscilacao-o-que-significa": {
    takeaways: [
      "A Portaria GM/MS 888/2021 aceita pH entre 6,0 e 9,0 na água distribuída no Brasil.",
      "Oscilações acontecem por chuvas, estiagem, manobras na rede e ajustes de tratamento.",
      "Dentro da faixa legal, a água é potável; pH não é sinônimo de contaminação.",
      "Filtragem em casa ajuda a padronizar sabor, retirar cloro e manter o pH estável no copo.",
    ],
    sections: `
  <h2>O que é pH, em uma frase</h2>
  <p>O pH mede a acidez ou a alcalinidade de uma solução em uma escala de 0 a 14. O 7 é neutro, abaixo disso é ácido e acima é alcalino. Cada ponto da escala representa uma variação de dez vezes na concentração de íons de hidrogênio, por isso pequenas mudanças no número aparecem no sabor.</p>
  <h2>O que diz a lei brasileira</h2>
  <p>A Portaria GM/MS nº 888/2021 define o padrão de potabilidade da água no país e recomenda que o pH da água distribuída fique entre 6,0 e 9,0. As companhias de saneamento monitoram esse valor de forma contínua e publicam relatórios anuais de qualidade, disponíveis na conta de água ou no site de cada empresa.</p>
  ${tb(["Faixa de pH", "Como é percebida", "O que significa"], [
    ["6,0 a 6,9", "Levemente ácida, sabor mais vivo", "Dentro do padrão legal"],
    ["7,0", "Neutra", "Dentro do padrão legal"],
    ["7,1 a 9,0", "Leve, macia, sabor suave", "Dentro do padrão legal"],
    ["Fora de 6,0 a 9,0", "Sabor alterado", "Comunique a concessionária"],
  ])}
  <h2>Por que o pH da rede oscila</h2>
  <ul>
    <li><strong>Chuvas intensas:</strong> arrastam matéria orgânica para rios e represas e mudam o equilíbrio da água bruta.</li>
    <li><strong>Estiagem:</strong> concentra minerais e pode alterar o ponto de captação.</li>
    <li><strong>Ajustes de tratamento:</strong> a cal e outros produtos corrigem o pH para proteger a tubulação.</li>
    <li><strong>Manobras e obras na rede:</strong> mudam o caminho e o tempo que a água percorre até a sua casa.</li>
  </ul>
  <h2>Como acompanhar a água da sua cidade</h2>
  <ol class="fx-steps">
    <li>Leia o quadro de qualidade que vem na conta de água, com pH, cloro e turbidez do mês.</li>
    <li>Consulte o relatório anual da concessionária no site oficial.</li>
    <li>Observe mudanças de cor, cheiro ou gosto e registre a data.</li>
    <li>Em caso de alteração persistente, ligue para o atendimento da companhia.</li>
  </ol>
  <h2>O papel do purificador em casa</h2>
  <p>Mesmo com a água dentro do padrão, o caminho até a torneira passa por caixas d'água e encanamentos. Um purificador com filtragem em etapas retém partículas, reduz o cloro e, no caso da tecnologia TriWay Acqualive, entrega água alcalina e mineralizada com pH estável no copo. Isso ajuda a manter o mesmo sabor todos os dias, independentemente das oscilações da rede.</p>`,
    faq: [
      ["Água com pH 6 faz mal?", "Não. Ela está dentro da faixa legal de potabilidade. A diferença é principalmente de sabor."],
      ["Como medir o pH em casa?", "Com fitas indicadoras ou gotas reagentes vendidas em lojas de aquarismo e piscina. Elas dão uma estimativa confiável."],
      ["A caixa d'água muda o pH?", "Pode alterar o sabor e a qualidade. Limpe a caixa a cada seis meses e mantenha a tampa bem vedada."],
    ],
    sources: [S.port888, S.who, S.snis],
  },

  "sinais-desidratacao-cor-da-urina": {
    takeaways: [
      "Perder apenas 1% a 2% do peso corporal em água já afeta humor, atenção e disposição.",
      "Urina amarelo-clara é o principal indicador caseiro de boa hidratação.",
      "Dor de cabeça, boca seca e cansaço à tarde são sinais precoces e comuns.",
      "Vitaminas do complexo B e alguns alimentos mudam a cor da urina sem indicar desidratação.",
    ],
    sections: `
  <h2>Por que a cor da urina funciona como termômetro</h2>
  <p>Os rins regulam a água do corpo o tempo todo. Quando falta água, eles concentram a urina para economizar líquido, e a cor escurece. Pesquisadores da Universidade de Connecticut validaram essa relação em 1994 com a escala de oito tons que ficou conhecida como escala de Armstrong. Ela é usada até hoje por equipes esportivas e militares como checagem rápida.</p>
  <h2>O que acontece com 1% ou 2% de perda</h2>
  <p>Dois estudos controlados do mesmo grupo mostraram que uma desidratação leve, de cerca de 1,5% do peso, já reduz a concentração, aumenta a sensação de fadiga e piora o humor em homens e mulheres jovens. Para uma pessoa de 70 kg, isso equivale a pouco mais de 1 litro, perda comum em uma tarde quente.</p>
  ${tb(["Perda de água", "O que você pode sentir"], [
    ["1%", "Sede leve, boca seca"],
    ["2%", "Cansaço, dor de cabeça, queda de atenção"],
    ["3% a 4%", "Tontura, irritabilidade, queda de rendimento físico"],
    ["Acima de 5%", "Confusão, batimento acelerado: procure atendimento"],
  ])}
  <h2>O que pode mudar a cor sem ser desidratação</h2>
  <ul>
    <li><strong>Vitaminas do complexo B:</strong> deixam a urina amarelo-fluorescente.</li>
    <li><strong>Beterraba e amoras:</strong> podem dar tom avermelhado.</li>
    <li><strong>Alguns medicamentos:</strong> alteram a cor, consulte a bula.</li>
    <li><strong>Primeira urina da manhã:</strong> é naturalmente mais concentrada.</li>
  </ul>
  <h2>Rotina de checagem em três momentos</h2>
  <p>Observe a cor no meio da manhã, no meio da tarde e à noite. Se dois desses momentos estiverem nos tons mais escuros da escala, aumente a ingestão nas horas seguintes. Ter água boa e fresquinha sempre ao alcance ajuda a corrigir a rota rapidamente.</p>`,
    faq: [
      ["Urina totalmente transparente é bom sinal?", "Indica que você bebeu bastante. Um amarelo bem claro já é o ideal; não é preciso buscar transparência total."],
      ["Idosos podem usar a escala?", "Sim, com atenção: a sede diminui com a idade, então a cor da urina vira um aliado importante para os cuidadores."],
      ["Quantas vezes é normal urinar por dia?", "Em geral, de 6 a 8 vezes em 24 horas para quem está bem hidratado."],
    ],
    sources: [S.armstrong, S.ganio, S.armstrong2012, S.popkin],
  },

  "galao-ou-purificador-custo-por-litro": {
    takeaways: [
      "O litro do galão de 20 litros a R$ 18,90 custa cerca de R$ 0,95.",
      "O litro do Acqualive sai a partir de R$ 0,17, com base no valor da troca de refis.",
      "Além do preço, pesam logística, espaço, higiene do vasilhame e disponibilidade.",
      "Famílias que bebem 4 litros por dia economizam mais de R$ 1.100 por ano.",
    ],
    sections: `
  <h2>A conta completa, passo a passo</h2>
  <p>Para comparar de forma justa, é preciso olhar o custo por litro. No galão, a conta é direta: R$ 18,90 dividido por 20 litros dá R$ 0,95. No purificador, o custo recorrente é a troca de refis: dividindo o valor do refil pelo volume que ele filtra, o litro do Acqualive fica a partir de R$ 0,17. O cálculo é baseado no valor da troca de refis.</p>
  ${tb(["Consumo da casa", "Galão por ano", "Acqualive por ano", "Diferença anual"], [
    ["2 litros/dia", "R$ 693", "R$ 124", "R$ 569"],
    ["4 litros/dia", "R$ 1.387", "R$ 248", "R$ 1.139"],
    ["6 litros/dia", "R$ 2.080", "R$ 372", "R$ 1.708"],
    ["8 litros/dia", "R$ 2.774", "R$ 496", "R$ 2.278"],
  ])}
  <h2>Custos que não aparecem na etiqueta</h2>
  <ul>
    <li><strong>Tempo e logística:</strong> pedir, receber, trocar e guardar vasilhames.</li>
    <li><strong>Espaço:</strong> galões vazios e cheios ocupam área na cozinha ou na área de serviço.</li>
    <li><strong>Esforço físico:</strong> um galão cheio pesa mais de 20 kg.</li>
    <li><strong>Higiene:</strong> vasilhames retornáveis exigem limpeza e controle de validade.</li>
    <li><strong>Falta no pior momento:</strong> galão vazio à noite ou no fim de semana.</li>
  </ul>
  <h2>Qualidade: o que você leva junto com cada litro</h2>
  <p>O purificador Acqualive com tecnologia TriWay entrega água filtrada, alcalina, mineralizada e antioxidante direto da torneira, fresquinha e sem cloro. Não há transporte nem armazenamento prolongado, e a água é produzida no momento em que você enche o copo.</p>
  <h2>Como decidir</h2>
  <p>Se a casa consome mais de 1 galão por semana, o purificador tende a compensar rapidamente. Some o custo anual do galão, compare com a troca de refis e considere o conforto de não carregar peso. Os purificadores Acqualive podem ser parcelados em até 10x sem juros, com frete grátis (consulte regiões disponíveis).</p>`,
    faq: [
      ["Com que frequência troco o refil?", "Depende do modelo e do consumo. O guia de troca de refil traz uma calculadora com a data estimada."],
      ["O purificador precisa de energia elétrica?", "Depende do modelo. Consulte a ficha técnica de cada purificador Acqualive."],
      ["A conta vale para empresas?", "Sim, e a economia cresce com o número de pessoas. Veja o simulador na página do Acqualive Duo para empresas."],
    ],
    sources: [S.port888, S.who, S.mason],
  },

  "cloro-na-agua-historia-e-cuidados": {
    takeaways: [
      "A cloração da água, a partir de 1908, ajudou a reduzir drasticamente doenças como cólera e febre tifoide.",
      "No Brasil, a água tratada precisa manter cloro residual para chegar segura às casas.",
      "No copo, retirar o cloro melhora o sabor e o aroma, sem perder a segurança do tratamento.",
      "Filtros com carvão ativado são a forma mais eficiente de reduzir cloro em casa.",
    ],
    sections: `
  <h2>Uma das maiores conquistas da saúde pública</h2>
  <p>Em 1908, Jersey City, nos Estados Unidos, se tornou a primeira cidade a clorar o abastecimento público de forma contínua. Nas décadas seguintes, a prática se espalhou pelo mundo e ajudou a derrubar os casos de doenças transmitidas pela água. O CDC lista a água tratada entre os grandes avanços de saúde pública do século XX.</p>
  <h2>Por que o cloro precisa chegar até a sua casa</h2>
  <p>A Portaria GM/MS 888/2021 exige um cloro residual livre mínimo de 0,2 mg/L em toda a rede de distribuição. Esse residual protege a água no longo caminho entre a estação de tratamento e a torneira. O valor máximo permitido é de 5 mg/L, e a maioria das cidades trabalha bem abaixo disso.</p>
  ${tb(["Etapa", "Papel do cloro"], [
    ["Estação de tratamento", "Desinfecção: elimina microrganismos"],
    ["Rede de distribuição", "Residual: protege a água no caminho"],
    ["Caixa d'água", "Mantém a proteção enquanto a água fica armazenada"],
    ["No copo", "Já cumpriu seu papel e pode ser retirado"],
  ])}
  <h2>Por que retirar o cloro na hora de beber</h2>
  <ul>
    <li><strong>Sabor e aroma:</strong> o cloro é o principal responsável pelo gosto de piscina.</li>
    <li><strong>Café e chá:</strong> interfere nos aromas mais delicados das bebidas.</li>
    <li><strong>Mais consumo:</strong> água sem gosto de cloro ajuda a beber mais vezes.</li>
    <li><strong>Subprodutos:</strong> filtros de carvão também ajudam a reduzir compostos formados na reação do cloro com matéria orgânica.</li>
  </ul>
  <h2>Como retirar o cloro de forma prática</h2>
  <p>Deixar a água descansar em jarra aberta reduz parte do cloro livre, mas leva horas e expõe a água ao ambiente. O carvão ativado, presente nos refis Acqualive, retém o cloro no momento da filtragem, e a tecnologia TriWay ainda entrega água alcalina e mineralizada, pronta para beber.</p>`,
    faq: [
      ["Ferver a água tira o cloro?", "Reduz parte dele, mas não é prático para o consumo diário e não retira outras partículas."],
      ["Posso tomar banho com água clorada?", "Sim, é segura. Quem tem pele sensível pode preferir um filtro de chuveiro, como o Acqualive Shower."],
      ["Cloro e cloramina são a mesma coisa?", "Não. A cloramina é uma combinação de cloro e amônia usada em algumas redes. Filtros de carvão também ajudam a reduzi-la."],
    ],
    sources: [S.cloro, S.port888, S.who],
  },

  "magnesio-na-agua-sono-caibras": {
    takeaways: [
      "O magnésio participa de mais de 300 reações enzimáticas no corpo.",
      "A recomendação diária para adultos fica entre 310 e 420 mg, conforme sexo e idade.",
      "O magnésio da água é bem absorvido e complementa a alimentação.",
      "Ele ajuda no relaxamento muscular, no sono e no ritmo do coração.",
    ],
    sections: `
  <h2>Ficha técnica do magnésio</h2>
  ${tb(["Item", "Informação"], [
    ["Símbolo químico", "Mg"],
    ["Funções principais", "Contração e relaxamento muscular, sistema nervoso, energia celular, ossos"],
    ["Recomendação diária (adultos)", "Mulheres: 310 a 320 mg. Homens: 400 a 420 mg"],
    ["Principais fontes", "Folhas verdes, castanhas, sementes, feijões, cacau, grãos integrais e água mineralizada"],
    ["Sinais de pouca ingestão", "Cansaço, cãibras, irritabilidade, sono leve"],
  ])}
  <h2>Por que o magnésio da água conta</h2>
  <p>Na água, o magnésio está dissolvido na forma iônica, pronta para ser absorvida. Estudos citados pelo NIH mostram que ele é bem aproveitado pelo intestino, especialmente quando ingerido ao longo do dia, em pequenas doses. Por isso, a água mineralizada funciona como um complemento constante da alimentação.</p>
  <h2>Magnésio e sono</h2>
  <p>O magnésio ajuda a regular neurotransmissores ligados ao relaxamento, como o GABA, e participa do ritmo da melatonina. Uma rotina com boa ingestão de magnésio, pouca cafeína à noite e hidratação equilibrada auxilia a ter um sono mais tranquilo.</p>
  <h2>Magnésio e músculos</h2>
  <p>O cálcio contrai o músculo e o magnésio ajuda a relaxá-lo. Em dias de calor e de treino, a perda pelo suor aumenta, e repor água mineralizada ajuda a manter esse equilíbrio, auxiliando na prevenção de cãibras.</p>
  <h2>Cardápio de um dia rico em magnésio</h2>
  <ul>
    <li><strong>Café da manhã:</strong> aveia com banana e sementes de abóbora.</li>
    <li><strong>Almoço:</strong> feijão, arroz integral e couve refogada.</li>
    <li><strong>Lanche:</strong> um punhado de castanhas-do-pará ou amêndoas.</li>
    <li><strong>Jantar:</strong> peixe com espinafre e quinoa.</li>
    <li><strong>O dia todo:</strong> água alcalina mineralizada Acqualive.</li>
  </ul>`,
    faq: [
      ["Posso tomar suplemento de magnésio por conta própria?", "Suplementos devem ser orientados por médico ou nutricionista, principalmente para quem tem doença renal."],
      ["Qual alimento tem mais magnésio?", "Sementes de abóbora, castanhas, cacau e folhas verde-escuras estão entre as melhores fontes."],
      ["Magnésio ajuda na enxaqueca?", "Há estudos que mostram benefício em alguns pacientes. Converse com o seu médico sobre o seu caso."],
    ],
    sources: [S.mg, S.who, S.efsa],
  },

  "carta-hidratacao-idosos-cuidadores": {
    takeaways: [
      "Com a idade, a sensação de sede diminui e os rins concentram menos a urina.",
      "Idosos são o grupo mais sensível a ondas de calor, segundo CDC e Ministério da Saúde.",
      "Estratégias afetivas e visuais funcionam melhor que cobrança.",
      "Copos leves, água fresquinha e horários fixos ajudam a criar o hábito.",
    ],
    sections: `
  <h2>Por que os idosos bebem menos água</h2>
  <p>Com o envelhecimento, o centro da sede no cérebro responde mais devagar, a massa muscular (que armazena água) diminui e os rins perdem parte da capacidade de concentrar a urina. Alguns medicamentos, como diuréticos, aumentam a perda de líquido, e o receio de ir ao banheiro à noite faz muitos idosos beberem menos de propósito.</p>
  <h2>Estratégias que funcionam na prática</h2>
  ${tb(["Estratégia", "Como aplicar"], [
    ["Copo sempre à vista", "Um copo cheio ao lado da poltrona, da cama e da mesa"],
    ["Horários âncora", "Um copo junto de cada remédio, refeição e programa de TV favorito"],
    ["Copos leves e com alça", "Facilitam para quem tem tremor ou pouca força nas mãos"],
    ["Sabor natural", "Rodelas de laranja, hortelã ou canela na água"],
    ["Alimentos hidratantes", "Gelatina, sopas, frutas e iogurte"],
    ["Beber junto", "Transformar o copo d'água em um momento de conversa"],
  ])}
  <h2>Sinais de alerta em idosos</h2>
  <ul>
    <li>Confusão ou sonolência fora do habitual.</li>
    <li>Urina escura ou pouca ida ao banheiro.</li>
    <li>Tontura ao levantar.</li>
    <li>Boca e lábios secos, pele sem elasticidade.</li>
    <li>Prisão de ventre persistente.</li>
  </ul>
  <p>Diante de confusão súbita ou desmaio, procure atendimento imediatamente. Idosos com insuficiência cardíaca ou renal podem ter restrição de líquidos: siga sempre a orientação médica.</p>
  <h2>Uma rotina para colar na geladeira</h2>
  <p>Ao acordar, um copo. No café da manhã, outro. No meio da manhã, uma fruta e um copo. No almoço, sopa ou salada e um copo. À tarde, dois copos com o lanche. No jantar, um copo. São cerca de 1,5 litro sem esforço, com água fresquinha e agradável disponível na cozinha.</p>`,
    faq: [
      ["Qual a meta de água para um idoso?", "Em geral, de 1,5 a 2 litros por dia, sempre respeitando orientações médicas específicas."],
      ["Beber menos à noite ajuda a evitar idas ao banheiro?", "Sim, concentre a ingestão até o fim da tarde e reduza nas duas horas antes de dormir."],
      ["Água alcalina pode ser dada a idosos?", "Sim, é água potável e mineralizada. Quem tem restrições médicas deve consultar o seu médico."],
    ],
    sources: [S.cdc, S.ms, S.popkin, S.efsa],
  },

  "hidratacao-criancas-escola-lancheira": {
    takeaways: [
      "Crianças de 4 a 8 anos precisam de cerca de 1,1 a 1,3 litro de líquidos por dia.",
      "Elas se desidratam mais rápido que adultos, porque têm maior superfície corporal.",
      "Garrafa própria, divertida e fácil de abrir aumenta muito o consumo na escola.",
      "Água deve ser a bebida principal, deixando sucos e refrigerantes para exceções.",
    ],
    sections: `
  <h2>Quanto de água por idade</h2>
  ${tb(["Idade", "Líquidos por dia (EFSA)", "Na escola (meio período)"], [
    ["1 a 2 anos", "1,1 a 1,2 litro", "Oferecer em copinho a cada intervalo"],
    ["2 a 3 anos", "1,3 litro", "300 a 400 ml"],
    ["4 a 8 anos", "1,6 litro", "400 a 500 ml"],
    ["9 a 13 anos", "1,9 a 2,1 litros", "500 a 750 ml"],
    ["14 a 18 anos", "2,0 a 2,5 litros", "750 ml a 1 litro"],
  ])}
  <p style="font-size:13px;color:#6b7a8d">Valores de ingestão total, somando bebidas e alimentos. Siga sempre a orientação do pediatra.</p>
  <h2>Por que as crianças precisam de mais atenção</h2>
  <p>Proporcionalmente ao peso, as crianças têm mais pele exposta, perdem calor e água com mais facilidade e se distraem nas brincadeiras. Além disso, dependem dos adultos para ter água disponível. Na escola, a garrafa na mochila é o que garante a hidratação entre as aulas.</p>
  <h2>Checklist da garrafinha ideal</h2>
  <ul>
    <li>Tampa fácil de abrir sozinha, sem vazamentos.</li>
    <li>Volume adequado para a idade, para não pesar na mochila.</li>
    <li>Material resistente e sem cheiro, preferencialmente inox ou vidro protegido.</li>
    <li>Nome da criança e um desenho que ela mesma escolheu.</li>
    <li>Lavagem diária com escovinha, incluindo o bico.</li>
  </ul>
  <h2>Truques que fazem a criança beber mais</h2>
  <ol class="fx-steps">
    <li>Deixe a criança escolher a garrafa e marque metas com adesivos.</li>
    <li>Combine com a professora pausas para a água após o recreio.</li>
    <li>Ofereça água fresquinha com frutas em cubos ou hortelã.</li>
    <li>Dê o exemplo: crianças imitam o que os adultos fazem.</li>
    <li>Na volta para casa, confira quanto sobrou e comemore as conquistas.</li>
  </ol>`,
    faq: [
      ["Suco natural substitui a água?", "Não. O suco tem açúcar natural e calorias. Ofereça água como bebida principal e suco em porções pequenas."],
      ["Criança pode beber água alcalina?", "Sim, é água potável e mineralizada. Para bebês, siga a orientação do pediatra."],
      ["Como saber se meu filho bebeu pouco?", "Observe a cor da urina, o humor no fim do dia, dor de cabeça e lábios secos."],
    ],
    sources: [S.efsa, S.sbp, S.popkin],
  },

  "receitas-cafe-cha-agua-alcalina": {
    takeaways: [
      "Um café coado tem cerca de 98% de água: a qualidade dela define o sabor final.",
      "A Specialty Coffee Association recomenda água sem cloro e com minerais equilibrados.",
      "Chás verdes pedem água entre 70 °C e 80 °C para não amargar.",
      "Água alcalina e mineralizada realça sabores e suaviza a acidez.",
    ],
    sections: `
  <h2>A ciência da água na xícara</h2>
  <p>Na extração do café e do chá, a água funciona como solvente: os minerais, principalmente cálcio e magnésio, ajudam a "puxar" os compostos aromáticos. Água sem minerais extrai pouco e deixa a bebida sem corpo. Água com cloro traz gosto e aroma indesejados. A Specialty Coffee Association recomenda água limpa, sem cloro, com pH próximo do neutro a levemente alcalino e minerais em equilíbrio.</p>
  ${tb(["Bebida", "Temperatura ideal", "Proporção", "Tempo"], [
    ["Café coado", "90 °C a 96 °C", "10 g de café para 150 ml", "3 a 4 minutos"],
    ["Chá verde", "70 °C a 80 °C", "2 g para 200 ml", "2 a 3 minutos"],
    ["Chá preto", "90 °C a 95 °C", "2 g para 200 ml", "3 a 5 minutos"],
    ["Chá de ervas", "95 °C a 100 °C", "2 g para 200 ml", "5 a 7 minutos"],
    ["Cold brew", "Fria", "100 g para 1 litro", "12 a 18 horas"],
  ])}
  <h2>Três erros que estragam a bebida</h2>
  <ul>
    <li><strong>Água fervendo no café:</strong> queima os compostos e deixa a bebida amarga. Espere 30 segundos após a fervura.</li>
    <li><strong>Água de torneira sem filtro:</strong> o cloro muda o aroma e o sabor.</li>
    <li><strong>Chaleira com calcário:</strong> limpe com vinagre e água a cada 15 dias.</li>
  </ul>
  <h2>Bônus: mais duas águas aromatizadas</h2>
  <p><strong>Abacaxi, gengibre e hortelã:</strong> 3 rodelas de abacaxi, 2 lâminas de gengibre e folhas de hortelã em 1 litro de água alcalina fresquinha. Descanse 2 horas na geladeira.</p>
  <p><strong>Morango e manjericão:</strong> 6 morangos cortados e 5 folhas de manjericão em 1 litro de água. Ótima para quem está trocando o refrigerante.</p>
  <h2>Por que a água Acqualive ajuda nessas receitas</h2>
  <p>A água da tecnologia TriWay é filtrada, sem cloro, alcalina e mineralizada. Isso ajuda a realçar a doçura natural do café, suaviza a acidez e deixa os chás mais aromáticos, além de manter a chaleira mais limpa por mais tempo.</p>`,
    faq: [
      ["Água alcalina muda o gosto do café?", "Ajuda a suavizar a acidez e a realçar notas doces, o que muitas pessoas preferem no dia a dia."],
      ["Quanto tempo dura a água aromatizada?", "Até 24 horas na geladeira. Depois disso, as frutas perdem frescor."],
      ["Posso usar água alcalina na cafeteira expresso?", "Sim. Água filtrada e sem cloro também ajuda a conservar o equipamento."],
    ],
    sources: [S.cafe, S.who],
  },

  "10-mitos-e-fatos-agua-alcalina": {
    takeaways: [
      "Água alcalina tem pH acima de 7 e costuma ser rica em minerais como cálcio e magnésio.",
      "Ela é água potável e pode ser consumida diariamente por toda a família.",
      "Os principais benefícios práticos são sabor leve, mineralização e estímulo à hidratação.",
      "Ela complementa hábitos saudáveis e não substitui tratamento médico.",
    ],
    sections: `
  <h2>O que é, de fato, a água alcalina</h2>
  <p>Água alcalina é aquela com pH acima de 7. Na natureza, ela surge quando a água atravessa rochas ricas em minerais e dissolve cálcio, magnésio e bicarbonato. Nos purificadores Acqualive, a tecnologia TriWay reproduz esse processo em três etapas: filtragem, mineralização e alcalinização, entregando água com pH estável e sabor leve.</p>
  <h2>Como ela se compara a outras águas</h2>
  ${tb(["Tipo de água", "pH típico", "Minerais", "Cloro"], [
    ["Torneira sem filtro", "6,0 a 9,0", "Variáveis", "Presente"],
    ["Filtro comum", "Igual à rede", "Variáveis", "Reduzido"],
    ["Mineral engarrafada", "4,5 a 10", "Conforme a fonte", "Ausente"],
    ["Acqualive TriWay", "Alcalino e estável", "Cálcio e magnésio", "Ausente no copo"],
  ])}
  <h2>O que a ciência mostra até aqui</h2>
  <p>Estudos com água alcalina mineralizada mostram resultados positivos em hidratação após exercício, conforto digestivo e na contribuição de cálcio e magnésio para a dieta. Pesquisas brasileiras, como as da UFPA sobre inflamação, e revisões internacionais indexadas no PubMed ajudam a construir essa base. Os resultados são mais consistentes quando a água alcalina faz parte de uma rotina com boa alimentação, sono e atividade física.</p>
  <h2>Como incluir no dia a dia</h2>
  <ul>
    <li>Use como água de beber principal da casa.</li>
    <li>Prepare café, chá e sucos com ela.</li>
    <li>Leve na garrafa para o trabalho e para o treino.</li>
    <li>Ofereça às crianças e aos idosos com a mesma naturalidade da água comum.</li>
  </ul>`,
    faq: [
      ["Água alcalina pode ser tomada com remédios?", "Em geral, sim. Em caso de medicamentos específicos para o estômago, confirme com o seu médico."],
      ["Qual a diferença entre alcalina e ionizada?", "A ionizada passa por eletrólise; a alcalina mineralizada ganha pH mais alto pela adição natural de minerais."],
      ["Posso cozinhar com água alcalina?", "Sim. Ela deixa arroz, feijão e legumes com sabor mais suave."],
    ],
    sources: [S.kosh, S.who, S.mg],
  },

  "glossario-da-agua-de-a-a-z": {
    takeaways: [
      "Entender termos como pH, TDS, turbidez e cloro residual ajuda a ler laudos e rótulos.",
      "Os valores de referência no Brasil estão na Portaria GM/MS 888/2021.",
      "Rótulo de água mineral traz a composição química e a fonte de origem.",
      "Purificadores devem ter certificação e informar a capacidade dos refis.",
    ],
    sections: `
  <h2>Como usar este glossário</h2>
  <p>Guarde esta página para consultar na hora de ler a conta de água, o rótulo de uma garrafa ou a ficha técnica de um purificador. Os termos mais importantes para o dia a dia estão resumidos na tabela abaixo, com o valor de referência brasileiro quando existe.</p>
  ${tb(["Termo", "O que mede", "Referência no Brasil"], [
    ["pH", "Acidez ou alcalinidade", "6,0 a 9,0"],
    ["Cloro residual livre", "Cloro que protege a água na rede", "0,2 a 5 mg/L"],
    ["Turbidez", "Transparência da água", "Até 5 uT na rede"],
    ["Sólidos dissolvidos totais (TDS)", "Quantidade de minerais e sais", "Até 500 mg/L"],
    ["Dureza", "Cálcio e magnésio dissolvidos", "Até 300 mg/L"],
    ["Coliformes totais", "Indicador de contaminação", "Ausência em 100 ml"],
  ])}
  <h2>Como ler um rótulo de água mineral</h2>
  <ol class="fx-steps">
    <li>Confira o nome da fonte e o número de registro.</li>
    <li>Veja o pH a 25 °C e a classificação (fluoretada, alcalino-terrosa, etc.).</li>
    <li>Leia a composição química em mg/L: cálcio, magnésio, sódio e bicarbonato.</li>
    <li>Verifique a data de envase e a validade.</li>
  </ol>
  <h2>Como ler a ficha técnica de um purificador</h2>
  <ul>
    <li><strong>Vazão:</strong> quantos litros por minuto o aparelho entrega.</li>
    <li><strong>Capacidade do refil:</strong> quantos litros ele filtra antes da troca.</li>
    <li><strong>Etapas de filtragem:</strong> sedimentos, carvão ativado, mineralização.</li>
    <li><strong>Certificação:</strong> selo de conformidade dos órgãos competentes.</li>
  </ul>`,
    faq: [
      ["O que é água alcalino-terrosa?", "É a classificação de águas minerais ricas em cálcio e magnésio, os metais alcalino-terrosos."],
      ["TDS alto é ruim?", "Não necessariamente. Um TDS moderado indica minerais que dão sabor e nutrientes à água."],
      ["Onde encontro o laudo da minha cidade?", "Na conta de água e no relatório anual da concessionária, disponível no site oficial."],
    ],
    sources: [S.port888, S.who],
  },

  "quiz-voce-bebe-agua-suficiente": {
    takeaways: [
      "Muitas pessoas bebem menos água do que imaginam, principalmente em dias corridos.",
      "Sede, cor da urina e disposição à tarde são os melhores sinais caseiros.",
      "Pequenos hábitos, como uma garrafa sempre à vista, mudam o resultado rapidamente.",
      "Refaça o quiz em uma semana para acompanhar a sua evolução.",
    ],
    sections: `
  <h2>Como interpretar o seu resultado</h2>
  ${tb(["Pontuação", "Nível", "Próximo passo"], [
    ["0 a 2", "Hidratação baixa", "Comece com um copo ao acordar e outro a cada refeição"],
    ["3 a 4", "Hidratação moderada", "Leve uma garrafa para o trabalho e reabasteça duas vezes"],
    ["5 a 6", "Hidratação excelente", "Mantenha o ritmo e ajuste nos dias de calor e treino"],
  ])}
  <h2>Plano de 7 dias para subir de nível</h2>
  <ol class="fx-steps">
    <li><strong>Dia 1:</strong> descubra a sua meta com a calculadora por peso.</li>
    <li><strong>Dia 2:</strong> escolha uma garrafa de 750 ml que você goste de usar.</li>
    <li><strong>Dia 3:</strong> crie três horários âncora: acordar, almoço e fim da tarde.</li>
    <li><strong>Dia 4:</strong> troque uma bebida açucarada por água aromatizada.</li>
    <li><strong>Dia 5:</strong> observe a cor da urina em três momentos do dia.</li>
    <li><strong>Dia 6:</strong> inclua duas porções de frutas ricas em água.</li>
    <li><strong>Dia 7:</strong> refaça o quiz e compare o resultado.</li>
  </ol>
  <h2>Por que isso faz diferença</h2>
  <p>Estudos controlados mostram que uma desidratação leve já afeta a atenção, a memória de curto prazo e o humor. Manter-se bem hidratado ajuda a ter mais disposição à tarde, menos dor de cabeça e melhor rendimento no trabalho e nos treinos.</p>
  <h2>O ambiente ajuda o hábito</h2>
  <p>A forma mais simples de beber mais é tornar a água a opção mais fácil da casa. Água fresquinha, saborosa e sempre disponível na torneira, sem galão para trocar, reduz a chance de deixar para depois.</p>`,
    faq: [
      ["O quiz substitui uma avaliação médica?", "Não. Ele é uma ferramenta educativa para refletir sobre hábitos."],
      ["Em quanto tempo sinto diferença?", "Muitas pessoas percebem mais disposição em poucos dias de hidratação regular."],
      ["Posso compartilhar o quiz?", "Sim. Envie o link para a família e compare os resultados."],
    ],
    sources: [S.ganio, S.armstrong2012, S.efsa],
  },

  "garrafa-de-agua-no-carro-calor-microplasticos": {
    takeaways: [
      "Um carro fechado ao sol pode passar de 60 °C por dentro em menos de uma hora.",
      "O calor acelera a liberação de partículas e compostos do plástico para a água.",
      "Estudo da PNAS (2024) encontrou em média 240 mil partículas de nanoplástico por litro de água engarrafada.",
      "Garrafas reutilizáveis de inox ou vidro são a alternativa mais segura para levar água.",
    ],
    sections: `
  <h2>O que acontece dentro do carro</h2>
  <p>Com o vidro fechado, a luz do sol entra e o calor fica preso, no efeito estufa. Medições em dias de 32 °C mostram temperaturas internas acima de 60 °C em cerca de uma hora, e o painel pode ultrapassar 70 °C. Uma garrafa plástica nessas condições aquece rapidamente.</p>
  <h2>O que a ciência já encontrou</h2>
  ${tb(["Estudo", "Achado principal"], [
    ["Mason et al., 2018 (Frontiers in Chemistry)", "Microplásticos em 93% das garrafas de 11 marcas analisadas"],
    ["Qian et al., 2024 (PNAS)", "Cerca de 240 mil partículas de nanoplástico por litro, em média"],
    ["Estudos de migração térmica", "Calor e tempo de armazenamento aumentam a liberação de compostos"],
  ])}
  <h2>Como proteger a água que você leva</h2>
  <ul>
    <li>Prefira garrafas de inox, alumínio revestido ou vidro protegido.</li>
    <li>Não reutilize garrafas descartáveis de plástico várias vezes.</li>
    <li>Evite deixar qualquer garrafa exposta ao sol ou no carro fechado.</li>
    <li>Encha a garrafa em casa, com água filtrada e fresquinha, antes de sair.</li>
    <li>Lave a garrafa reutilizável diariamente, incluindo a tampa.</li>
  </ul>
  <h2>Menos plástico no dia a dia</h2>
  <p>Trocar garrafas descartáveis por um purificador em casa e uma garrafa reutilizável reduz a exposição a microplásticos e diminui o lixo da família. Veja no contador interativo quantas garrafas a sua casa deixa de usar em um ano.</p>`,
    faq: [
      ["Garrafa que ficou no carro pode ser bebida?", "Se a água aqueceu por muito tempo, prefira descartar e encher uma nova garrafa com água fresquinha."],
      ["Garrafa de inox esquenta a água?", "Modelos térmicos mantêm a temperatura por horas, mesmo no calor."],
      ["Microplástico faz mal?", "As pesquisas ainda estão avançando. Reduzir a exposição é uma escolha prudente e simples."],
    ],
    sources: [S.qian, S.mason, S.who],
  },

  "quando-trocar-refil-purificador": {
    takeaways: [
      "O refil tem capacidade limitada em litros e também um prazo máximo de uso.",
      "Queda de vazão, mudança de sabor e cheiro são sinais de que a troca está próxima.",
      "Trocar no prazo mantém a retenção de cloro, partículas e a mineralização.",
      "A calculadora ajuda a prever a data com base no consumo da sua casa.",
    ],
    sections: `
  <h2>Por que o refil tem prazo</h2>
  <p>O carvão ativado e os meios filtrantes funcionam como esponjas: retêm cloro, partículas e compostos até atingirem a saturação. Depois disso, a eficiência cai. Por isso, o fabricante informa duas referências: a capacidade em litros e o prazo máximo em meses, o que acontecer primeiro.</p>
  <h2>Estimativa por tamanho da família</h2>
  ${tb(["Pessoas na casa", "Consumo estimado por dia", "Consumo por mês"], [
    ["1 a 2", "3 a 5 litros", "90 a 150 litros"],
    ["3 a 4", "6 a 10 litros", "180 a 300 litros"],
    ["5 ou mais", "10 a 15 litros", "300 a 450 litros"],
  ])}
  <p style="font-size:13px;color:#6b7a8d">Inclui água para beber e cozinhar. Use a calculadora acima para a data estimada do seu refil.</p>
  <h2>Sinais de que chegou a hora</h2>
  <ul>
    <li>A água sai mais devagar da torneira.</li>
    <li>O sabor ou o cheiro de cloro voltou.</li>
    <li>O prazo em meses indicado pelo fabricante foi atingido.</li>
    <li>A indicação do aparelho, quando existir, sinaliza a troca.</li>
  </ul>
  <h2>Passo a passo da troca</h2>
  <ol class="fx-steps">
    <li>Feche o registro de entrada de água.</li>
    <li>Retire o refil antigo conforme o manual do modelo.</li>
    <li>Encaixe o refil novo original, sem tocar na parte interna.</li>
    <li>Abra o registro e deixe escoar a água inicial pelo tempo indicado.</li>
    <li>Anote a data da troca para programar a próxima.</li>
  </ol>`,
    faq: [
      ["Posso usar refil de outra marca?", "Recomenda-se o refil original, que garante encaixe, vedação e a eficiência da tecnologia TriWay."],
      ["Refil vencido faz mal?", "Ele perde eficiência na retenção de cloro e partículas. O ideal é trocar dentro do prazo."],
      ["Onde compro o refil Acqualive?", "Nos canais oficiais da Acqualive e com os franqueados da sua região."],
    ],
    sources: [S.who, S.port888],
  },

  "agua-e-pele-no-verao-5-minutos": {
    takeaways: [
      "A pele é o maior órgão do corpo e perde água continuamente, mais ainda no calor.",
      "Estudo de 2015 mostrou melhora na hidratação da pele com aumento da ingestão de água.",
      "Banho morno, hidratante e protetor solar completam o cuidado de dentro para fora.",
      "Retirar o cloro da água do banho ajuda peles sensíveis.",
    ],
    sections: `
  <h2>O que a ciência mostra</h2>
  <p>Um estudo publicado em 2015 no Clinical, Cosmetic and Investigational Dermatology acompanhou pessoas que aumentaram a ingestão de água em cerca de 2 litros por dia durante um mês. Os resultados mostraram melhora na hidratação das camadas superficiais e profundas da pele, principalmente em quem bebia pouca água antes do estudo.</p>
  <h2>Rotina de verão para a pele</h2>
  ${tb(["Momento", "Cuidado"], [
    ["Manhã", "Copo de água, limpeza suave e protetor solar FPS 30 ou mais"],
    ["Durante o dia", "Garrafa sempre por perto e reaplicação do protetor a cada 2 horas no sol"],
    ["Banho", "Água morna, banho curto e sabonete suave"],
    ["Pós-banho", "Hidratante com a pele ainda úmida"],
    ["Noite", "Um copo de água e hidratação facial"],
  ])}
  <h2>O banho também conta</h2>
  <p>Banhos muito quentes e longos removem a oleosidade natural da pele. O cloro da rede pode ressecar ainda mais, principalmente em peles sensíveis e em cabelos tingidos. Um filtro de chuveiro, como o Acqualive Shower, ajuda a reduzir o cloro na água do banho.</p>
  <h2>Alimentos amigos da pele</h2>
  <ul>
    <li><strong>Melancia, pepino e tomate:</strong> água e antioxidantes.</li>
    <li><strong>Abacate e castanhas:</strong> gorduras boas para a barreira da pele.</li>
    <li><strong>Frutas cítricas:</strong> vitamina C para a produção de colágeno.</li>
    <li><strong>Peixes:</strong> ômega 3 com ação anti-inflamatória.</li>
  </ul>`,
    faq: [
      ["Beber água melhora a acne?", "A hidratação ajuda na saúde geral da pele. Para acne, procure um dermatologista."],
      ["Água termal ajuda?", "Pode refrescar e acalmar, mas não substitui a hidratação de dentro para fora."],
      ["Quanto tempo leva para ver diferença na pele?", "No estudo de 2015, as mudanças apareceram em cerca de 30 dias."],
    ],
    sources: [S.pele, S.efsa],
  },

  "agenda-hidratacao-home-office": {
    takeaways: [
      "No home office, a ausência de pausas e deslocamentos faz as pessoas beberem menos.",
      "Desidratação leve afeta atenção, memória e humor, segundo estudos controlados.",
      "Associar a água a reuniões e pausas cria hábito sem esforço.",
      "Uma garrafa de 750 ml à vista na mesa é o melhor lembrete.",
    ],
    sections: `
  <h2>Por que o home office desidrata</h2>
  <p>No escritório, o caminho até o café, as conversas e a ida ao bebedouro criam pausas naturais. Em casa, é comum passar horas seguidas diante da tela. O ar-condicionado e a concentração reduzem a percepção de sede, e o café costuma ocupar o lugar da água.</p>
  <h2>Efeitos no trabalho</h2>
  ${tb(["Sinal", "Impacto no dia"], [
    ["Queda de atenção à tarde", "Mais erros e retrabalho"],
    ["Dor de cabeça", "Menor tolerância a reuniões longas"],
    ["Cansaço e irritabilidade", "Pior comunicação com a equipe"],
    ["Olhos secos", "Desconforto diante da tela"],
  ])}
  <h2>Técnicas para lembrar de beber</h2>
  <ul>
    <li><strong>Regra da reunião:</strong> um copo antes de cada chamada.</li>
    <li><strong>Pomodoro hidratado:</strong> a cada pausa de 5 minutos, alguns goles.</li>
    <li><strong>Garrafa marcada:</strong> linhas com horários indicam o ritmo.</li>
    <li><strong>Alarme suave:</strong> um lembrete no celular a cada 90 minutos.</li>
    <li><strong>Água na cozinha:</strong> purificador perto facilita cada reabastecimento.</li>
  </ul>
  <h2>Ergonomia completa</h2>
  <p>Hidratação combina com outras pausas saudáveis: alongar a cada hora, olhar para longe da tela por 20 segundos a cada 20 minutos e caminhar um pouco depois do almoço. O ir e vir até a cozinha para encher a garrafa já cumpre parte desse movimento.</p>`,
    faq: [
      ["Café conta como hidratação?", "Conta como líquido, mas o ideal é intercalar cada xícara com um copo de água."],
      ["Qual o melhor tamanho de garrafa para a mesa?", "Entre 750 ml e 1 litro: grande o suficiente para não levantar toda hora, e leve para carregar."],
      ["Água gelada atrapalha a digestão?", "Não há evidência disso em pessoas saudáveis. Escolha a temperatura que ajuda você a beber mais."],
    ],
    sources: [S.ganio, S.armstrong2012, S.efsa],
  },

  "agua-na-empresa-produtividade-e-economia": {
    takeaways: [
      "Colaboradores bem hidratados têm mais atenção, disposição e menos dor de cabeça.",
      "O litro do galão custa cerca de R$ 0,95; o do Acqualive Duo, a partir de R$ 0,17.",
      "Purificadores eliminam logística de galões, espaço de estoque e esforço físico.",
      "Água de qualidade é um benefício percebido pela equipe e pelos clientes.",
    ],
    sections: `
  <h2>Hidratação é um tema de produtividade</h2>
  <p>Estudos controlados mostram que uma perda de água de 1% a 2% do peso corporal já reduz atenção e humor. Em uma equipe, isso aparece como cansaço à tarde, mais pausas e menor rendimento. Facilitar o acesso a água boa é uma das ações de bem-estar corporativo com melhor custo-benefício.</p>
  <h2>A conta para empresas</h2>
  ${tb(["Tamanho da equipe", "Consumo/mês (1,5 L por pessoa/dia útil)", "Galão por ano", "Acqualive Duo por ano"], [
    ["10 pessoas", "330 litros", "R$ 3.762", "R$ 673"],
    ["25 pessoas", "825 litros", "R$ 9.405", "R$ 1.683"],
    ["50 pessoas", "1.650 litros", "R$ 18.810", "R$ 3.366"],
  ])}
  <p style="font-size:13px;color:#6b7a8d">Galão de 20 L a R$ 18,90 (R$ 0,95/L). Acqualive a partir de R$ 0,17/L, cálculo baseado no valor da troca de refis. 22 dias úteis por mês.</p>
  <h2>Vantagens operacionais</h2>
  <ul>
    <li>Sem pedidos, recebimento e armazenamento de galões.</li>
    <li>Sem risco de faltar água no meio do expediente.</li>
    <li>Menos esforço físico para a equipe de apoio.</li>
    <li>Água gelada e natural disponível para café, chá e visitantes.</li>
    <li>Menos plástico descartável, apoiando metas de sustentabilidade.</li>
  </ul>
  <h2>Como implantar em 4 passos</h2>
  <ol class="fx-steps">
    <li>Mapeie o consumo atual de galões e garrafas.</li>
    <li>Defina os pontos: copa, recepção e áreas de produção.</li>
    <li>Escolha o modelo, como o Acqualive Duo ou o Duo Lite.</li>
    <li>Comunique à equipe e acompanhe o consumo no primeiro mês.</li>
  </ol>`,
    faq: [
      ["A empresa pode parcelar?", "Sim, os purificadores Acqualive podem ser parcelados em até 10x sem juros."],
      ["Quantos purificadores preciso?", "Depende do número de pessoas e dos pontos de uso. O consultor ajuda a dimensionar."],
      ["O purificador atende cafeteiras e máquinas?", "Sim, modelos como o Duo Lite também podem abastecer geladeiras e cafeteiras."],
    ],
    sources: [S.ganio, S.armstrong2012, S.port888],
  },

  "agua-para-pets-no-calor": {
    takeaways: [
      "Cães e gatos precisam de cerca de 50 a 60 ml de água por quilo de peso ao dia.",
      "Cães perdem calor principalmente pela respiração ofegante, o que aumenta a perda de água.",
      "Gatos bebem pouco por natureza: fontes e potes largos ajudam.",
      "O pote deve ser lavado todos os dias e a água trocada pelo menos duas vezes.",
    ],
    sections: `
  <h2>Quanto de água cada pet precisa</h2>
  ${tb(["Peso do pet", "Água por dia (referência)"], [
    ["3 kg (gato ou cão pequeno)", "150 a 180 ml"],
    ["5 kg", "250 a 300 ml"],
    ["10 kg", "500 a 600 ml"],
    ["20 kg", "1 a 1,2 litro"],
    ["30 kg", "1,5 a 1,8 litro"],
  ])}
  <p style="font-size:13px;color:#6b7a8d">Pets que comem ração úmida bebem menos, porque parte da água vem do alimento. Siga sempre a orientação do médico-veterinário.</p>
  <h2>Sinais de alerta no calor</h2>
  <ul>
    <li>Respiração muito ofegante e língua muito vermelha.</li>
    <li>Gengivas secas ou pegajosas.</li>
    <li>Apatia, fraqueza ou dificuldade para ficar em pé.</li>
    <li>Vômito ou salivação excessiva.</li>
  </ul>
  <p>Raças de focinho curto, como pug, buldogue e persa, e pets idosos são os mais sensíveis. Diante desses sinais, leve o animal para a sombra, ofereça água fresquinha e procure o veterinário.</p>
  <h2>Dicas para o pote ideal</h2>
  <ol class="fx-steps">
    <li>Prefira potes de inox ou cerâmica, fáceis de higienizar.</li>
    <li>Espalhe dois ou mais potes pela casa, longe da comida e da caixa de areia.</li>
    <li>Troque a água pelo menos duas vezes ao dia no calor.</li>
    <li>Para gatos, experimente fontes com água corrente.</li>
    <li>Use a mesma água filtrada e sem cloro que a família bebe.</li>
  </ol>
  <h2>Passeios no calor</h2>
  <p>Evite passeios entre 10h e 16h, teste o chão com a palma da mão (se está quente para você, está para as patas) e leve uma garrafa com bebedouro portátil.</p>`,
    faq: [
      ["Posso dar gelo para o cachorro?", "Pequenos cubos podem refrescar, desde que o pet não engula com pressa. Água fresca é suficiente."],
      ["Pet pode beber água alcalina?", "Água potável filtrada e sem cloro é adequada para pets saudáveis. Consulte o veterinário em caso de doença."],
      ["Meu gato bebe pouco, o que faço?", "Ofereça ração úmida, fontes de água corrente e potes largos em vários pontos da casa."],
    ],
    sources: [S.aaha],
  },

  "quanto-plastico-familia-deixa-de-usar": {
    takeaways: [
      "Uma família de quatro pessoas pode usar mais de 1.900 garrafas de 1,5 litro por ano.",
      "Cada garrafa pesa cerca de 30 g: são dezenas de quilos de plástico por ano.",
      "Estudos encontraram micro e nanoplásticos na maioria das águas engarrafadas analisadas.",
      "Purificador em casa e garrafas reutilizáveis reduzem lixo, custo e esforço.",
    ],
    sections: `
  <h2>A conta do plástico, por família</h2>
  ${tb(["Pessoas", "Garrafas de 1,5 L por ano", "Plástico por ano"], [
    ["1", "487", "cerca de 15 kg"],
    ["2", "973", "cerca de 29 kg"],
    ["4", "1.947", "cerca de 58 kg"],
    ["6", "2.920", "cerca de 88 kg"],
  ])}
  <p style="font-size:13px;color:#6b7a8d">Estimativa com 2 litros por pessoa por dia e garrafa de cerca de 30 g.</p>
  <h2>O caminho de uma garrafa</h2>
  <p>A garrafa plástica é produzida a partir de petróleo, envasada, transportada por centenas de quilômetros, refrigerada no mercado e levada até a sua casa. Depois de poucos minutos de uso, vira resíduo. Apenas uma parte é reciclada no Brasil; o restante vai para aterros ou para o ambiente, onde pode levar séculos para se degradar.</p>
  <h2>Microplásticos na água engarrafada</h2>
  <p>Em 2018, pesquisadores analisaram 259 garrafas de 11 marcas e encontraram partículas de plástico em 93% delas. Em 2024, um estudo publicado na PNAS, com uma nova técnica de imagem, identificou em média cerca de 240 mil partículas de nanoplástico por litro. Reduzir o uso de garrafas é uma forma simples de diminuir essa exposição.</p>
  <h2>Como fazer a transição em casa</h2>
  <ol class="fx-steps">
    <li>Instale um purificador na cozinha como fonte principal de água.</li>
    <li>Tenha uma garrafa reutilizável por pessoa da família.</li>
    <li>Deixe uma jarra de vidro na geladeira para os dias de calor.</li>
    <li>Leve a garrafa cheia para o trabalho, a escola e o treino.</li>
    <li>Acompanhe no contador quantas garrafas a família deixou de usar.</li>
  </ol>`,
    faq: [
      ["Reciclar não resolve o problema?", "Reciclar ajuda muito, mas reduzir o uso é ainda mais eficiente, porque evita a produção e o transporte."],
      ["Garrafa reutilizável de plástico é segura?", "Modelos livres de BPA são adequados, mas inox e vidro são as opções mais duráveis."],
      ["Quanto a família economiza?", "Além do plástico, o custo por litro do purificador é bem menor. Veja a conta completa no artigo do galão."],
    ],
    sources: [S.mason, S.qian, S.who],
  },
};
