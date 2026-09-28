// Artigos 31 a 50 do blog Acqualive (serie primavera 2026).
// Mesma base GEO dos artigos 25 a 30 (resposta direta, FAQPage, Article JSON-LD),
// mas cada artigo usa um formato diferente: calculadora, quiz, linha do tempo,
// glossario, receita, carta, agenda, mito x fato, escala visual, checklist etc.
// Imagens publicas no bucket blog-images.

import { wrap } from "./blog-articles-extra";

const IMG = "https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images";
const BLOG = "https://blog.acqualive.com.br";

// Estilos extras dos novos formatos (somam ao SHARED_CSS do wrap)
const FMT_CSS = `<style>
.fx-box{background:#f5f9ff;border:1px solid #dbe7f7;border-radius:16px;padding:24px;margin:28px 0}
.fx-box h3{margin-top:0}
.fx-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin:12px 0}
.fx-row label{font-weight:600;font-size:14px;color:#1e3a5f}
.fx-row input[type=number],.fx-row select{padding:10px 12px;border:1px solid #c9d8ec;border-radius:10px;font-size:15px;min-width:120px}
.fx-row input[type=range]{flex:1;min-width:200px;accent-color:#1460b6}
.fx-btn{background:#1460b6;color:#fff;border:0;border-radius:999px;padding:12px 22px;font-weight:700;cursor:pointer;font-size:14px}
.fx-btn:hover{background:#0e4a8f}
.fx-out{margin-top:16px;padding:18px;border-radius:12px;background:#fff;border-left:4px solid #1460b6;font-size:16px;line-height:1.6}
.fx-out strong{color:#1460b6;font-size:22px}
.fx-check{list-style:none;padding:0;margin:0}
.fx-check li{padding:10px 0;border-bottom:1px dashed #d6e2f2}
.fx-check label{display:flex;gap:10px;cursor:pointer;align-items:flex-start}
.fx-check input{margin-top:5px;accent-color:#1460b6;width:18px;height:18px}
.fx-progress{height:10px;background:#e3ecf8;border-radius:999px;overflow:hidden;margin-top:14px}
.fx-progress span{display:block;height:100%;width:0;background:linear-gradient(90deg,#1460b6,#32b4e6);transition:width .4s}
details.fx-acc{border:1px solid #dbe7f7;border-radius:12px;padding:0;margin:10px 0;background:#fff;overflow:hidden}
details.fx-acc summary{cursor:pointer;padding:16px 18px;font-weight:700;color:#12304f;list-style:none}
details.fx-acc summary::-webkit-details-marker{display:none}
details.fx-acc summary:after{content:"+";float:right;color:#1460b6;font-size:20px;line-height:1}
details.fx-acc[open] summary:after{content:"-"}
details.fx-acc .fx-acc-body{padding:0 18px 16px;color:#40546b}
.fx-tag{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.08em;padding:3px 10px;border-radius:999px;margin-right:8px;vertical-align:middle}
.fx-mito{background:#fdecec;color:#b42318}.fx-fato{background:#e6f6ec;color:#127a3e}
.fx-timeline{position:relative;margin:28px 0;padding-left:28px;border-left:3px solid #cfe0f5}
.fx-timeline .fx-t{position:relative;margin-bottom:22px}
.fx-timeline .fx-t:before{content:"";position:absolute;left:-37px;top:4px;width:16px;height:16px;border-radius:50%;background:#1460b6;border:3px solid #fff;box-shadow:0 0 0 2px #1460b6}
.fx-timeline .fx-y{font-weight:800;color:#1460b6;font-size:14px;letter-spacing:.05em}
.fx-table{width:100%;border-collapse:collapse;margin:24px 0;font-size:15px}
.fx-table th{background:#12304f;color:#fff;text-align:left;padding:12px}
.fx-table td{padding:12px;border-bottom:1px solid #e3ecf8;vertical-align:top}
.fx-table tr:nth-child(even) td{background:#f7faff}
.fx-scale{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:24px 0}
.fx-scale div{border-radius:12px;padding:16px 10px;text-align:center;font-size:13px;font-weight:600;color:#12304f;min-height:90px}
.fx-letter{background:#fffdf7;border:1px solid #efe4c8;border-radius:16px;padding:32px;font-family:Georgia,serif;font-size:17px;line-height:1.8;color:#3b3325;margin:28px 0}
.fx-letter .fx-sign{margin-top:24px;font-style:italic}
.fx-recipe{border:1px solid #dbe7f7;border-radius:16px;overflow:hidden;margin:24px 0}
.fx-recipe .fx-rh{background:#12304f;color:#fff;padding:14px 20px;font-weight:800}
.fx-recipe .fx-rb{padding:18px 20px}
.fx-recipe .fx-meta{display:flex;gap:18px;font-size:13px;color:#5b6b80;margin-bottom:10px}
.fx-agenda .fx-slot{display:grid;grid-template-columns:90px 1fr;gap:16px;padding:14px 0;border-bottom:1px solid #e3ecf8}
.fx-agenda .fx-h{font-weight:800;color:#1460b6;font-size:18px}
.fx-gloss dt{font-weight:800;color:#12304f;margin-top:18px;font-size:17px}
.fx-gloss dd{margin:6px 0 0;color:#40546b}
.fx-letters{display:flex;flex-wrap:wrap;gap:6px;margin:16px 0}
.fx-letters a{display:inline-block;width:34px;height:34px;line-height:34px;text-align:center;border-radius:8px;background:#e8f1fc;color:#1460b6;font-weight:800;text-decoration:none}
.fx-quiz .fx-q{margin:22px 0;padding:18px;border:1px solid #dbe7f7;border-radius:14px;background:#fff}
.fx-quiz .fx-q p{font-weight:700;margin:0 0 10px}
.fx-quiz label{display:block;padding:8px 0;cursor:pointer}
.fx-big{font-size:56px;font-weight:900;color:#1460b6;line-height:1;margin:8px 0}
.fx-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:24px 0}
.fx-cards .fx-c{background:#fff;border:1px solid #dbe7f7;border-radius:14px;padding:18px}
.fx-cards .fx-c b{display:block;color:#1460b6;font-size:15px;margin-bottom:6px}
.fx-steps{counter-reset:s;list-style:none;padding:0}
.fx-steps li{counter-increment:s;position:relative;padding:4px 0 18px 54px}
.fx-steps li:before{content:counter(s);position:absolute;left:0;top:0;width:38px;height:38px;border-radius:50%;background:#1460b6;color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center}
.fx-interview p.fx-ask{font-weight:800;color:#12304f;margin-top:22px}
.fx-interview p.fx-ask:before{content:"P. ";color:#1460b6}
.fx-interview p.fx-ans:before{content:"R. ";font-weight:800;color:#32b4e6}
@media(max-width:640px){.fx-scale{grid-template-columns:repeat(2,1fr)}.fx-agenda .fx-slot{grid-template-columns:64px 1fr}.fx-big{font-size:42px}}
</style>`;

type Faq = [string, string];

interface Cfg {
  slug: string;
  title: string;
  metaTitle: string;
  desc: string;
  keywords: string;
  badge: string;
  h1: string;
  sub: string;
  date: string; // ISO
  dateLabel: string;
  read: string;
  img: string;
  alt: string;
  answer: string;
  faq: Faq[];
  body: string;
  related: [string, string][];
}

const esc = (s: string) => s.replace(/"/g, '\\"');

const CTA_FINAL = (titulo: string, destaque: string) => `
  <div class="cta-section">
    <h2>${titulo} <span>${destaque}</span></h2>
    <p>Purificadores Acqualive com tecnologia TriWay: água alcalina, mineralizada, antioxidante e livre de cloro. Em até 10x sem juros e com frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer os purificadores Acqualive →</a>
  </div>`;

const MID_CTA = (texto: string) => `
  <div class="mid-cta">
    <p>${texto}</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>`;

const make = (c: Cfg) => ({
  title: c.title,
  slug: c.slug,
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${c.metaTitle}</title>
<meta name="description" content="${c.desc}">
<meta name="keywords" content="${c.keywords}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="author" content="Acqualive">
<link rel="canonical" href="${BLOG}/${c.slug}/">
<meta property="og:title" content="${c.title}">
<meta property="og:description" content="${c.desc}">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="${IMG}/${c.img}">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"${esc(c.title)}","description":"${esc(c.desc)}","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive","logo":{"@type":"ImageObject","url":"${BLOG}/logo.png"}},"datePublished":"${c.date}","dateModified":"${c.date}","inLanguage":"pt-BR","image":"${IMG}/${c.img}","mainEntityOfPage":"${BLOG}/${c.slug}/"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[${c.faq
      .map(
        ([q, a]) =>
          `{"@type":"Question","name":"${esc(q)}","acceptedAnswer":{"@type":"Answer","text":"${esc(a)}"}}`,
      )
      .join(",")}]}
</script>
${FMT_CSS}`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">${c.badge}</span>
    <h1>${c.h1}</h1>
    <p class="header-desc">${c.sub}</p>
    <div class="header-meta"><span>Acqualive</span><span>•</span><span>${c.dateLabel}</span><span>•</span><span>${c.read} de leitura</span></div>
  </div>
  <div class="hero-img-wrap">
    <img src="${IMG}/${c.img}" alt="${c.alt}" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <div class="quote">Resposta direta: ${c.answer}</div>
${c.body}

  <h2>Perguntas frequentes</h2>
${c.faq
  .map(
    ([q, a]) => `  <details class="fx-acc"><summary>${q}</summary><div class="fx-acc-body">${a}</div></details>`,
  )
  .join("\n")}

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
${c.related.map(([t, u]) => `      <li><a href="${u}" target="_blank">${t}</a></li>`).join("\n")}
      <li><a href="https://paginas.acqualive.com.br/portal-cientifico" target="_blank">Portal Científico Acqualive</a></li>
    </ul>
  </div>
</main>`,
  ),
});

const R = (slug: string) => `${BLOG}/${slug}/`;

// 31. Onda de calor: guia de emergencia com checklist interativo
const a31 = make({
  slug: "onda-de-calor-primavera-2026-hidratacao",
  title: "Onda de calor de primavera: o guia de hidratação para passar os dias de alerta vermelho",
  metaTitle: "Onda de Calor 2026: Guia de Hidratação para o Alerta Vermelho | Acqualive",
  desc: "O INMET emitiu alerta vermelho para a primeira onda de calor da primavera de 2026. Veja quanto beber, quem precisa de mais atenção e um checklist interativo para a sua casa.",
  keywords: "onda de calor 2026, alerta vermelho inmet, hidratação no calor, quanto beber no calor, desidratação sinais, água alcalina calor, Acqualive",
  badge: "GUIA RÁPIDO",
  h1: "Onda de calor de primavera: <span>o guia de hidratação</span> para os dias de alerta vermelho",
  sub: "A primeira onda de calor da primavera colocou oito estados em alerta. Aqui está o que fazer em casa, em formato de checklist que você marca enquanto lê.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "5 min",
  img: "onda-de-calor-hidratacao.jpg",
  alt: "Mulher bebendo um copo de água em uma varanda ensolarada durante um dia muito quente",
  answer: "em dias de onda de calor, some de 500 ml a 1 litro à sua meta diária (30 a 40 ml por quilo de peso), beba em pequenos goles ao longo do dia e redobre a atenção com crianças, idosos e gestantes.",
  faq: [
    ["Quanto de água beber em uma onda de calor?", "A referência diária é de 30 a 40 ml por quilo de peso. Em dias de calor extremo, a transpiração aumenta e vale somar de 500 ml a 1 litro, distribuídos ao longo do dia."],
    ["Quais são os sinais de desidratação?", "Sede intensa, urina escura ou em pouca quantidade, cansaço, tontura, pele seca e batimentos acelerados. Diante de confusão mental ou desmaio, procure atendimento imediatamente."],
    ["Água alcalina ajuda no calor?", "A água alcalina mineralizada ajuda na reposição, porque leva cálcio e magnésio junto com o volume de água, e o sabor leve auxilia a beber mais vezes ao longo do dia."],
  ],
  body: `
  <p>Entre 26 e 30 de setembro de 2026, o INMET manteve aviso vermelho de grande perigo para partes de oito estados, com temperaturas ao menos 5 °C acima da média e máximas perto de 41 °C em Cuiabá. Em São Carlos (SP), o consumo de água da cidade subiu cerca de 30% no fim de semana. O corpo sente o mesmo: ele gasta mais água para se resfriar.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">+5 °C</div><div class="stat-label">acima da média, por vários dias seguidos</div></div>
    <div class="stat-card"><div class="stat-number">30 a 40 ml</div><div class="stat-label">de água por quilo de peso, como ponto de partida</div></div>
    <div class="stat-card"><div class="stat-number">+30%</div><div class="stat-label">no consumo de água registrado em São Carlos no fim de semana</div></div>
  </div>

  <div class="fx-box">
    <h3>Checklist da casa hidratada</h3>
    <p>Marque o que você já faz. A barra mostra o quanto a sua rotina está pronta para o calor.</p>
    <ul class="fx-check" id="ck31">
      <li><label><input type="checkbox"> Tenho água boa disponível na cozinha a qualquer hora, sem depender de galão</label></li>
      <li><label><input type="checkbox"> Cada pessoa da casa tem uma garrafa própria para sair</label></li>
      <li><label><input type="checkbox"> Ofereço água às crianças a cada intervalo, mesmo sem pedirem</label></li>
      <li><label><input type="checkbox"> Os idosos da família têm um copo sempre à vista</label></li>
      <li><label><input type="checkbox"> Evito ficar ao sol entre 10h e 16h</label></li>
      <li><label><input type="checkbox"> Incluo frutas ricas em água nas refeições (melancia, laranja, pepino)</label></li>
      <li><label><input type="checkbox"> Troco parte do café e do refrigerante por água</label></li>
      <li><label><input type="checkbox"> Observo a cor da urina ao longo do dia</label></li>
    </ul>
    <div class="fx-progress"><span id="bar31"></span></div>
    <p id="txt31" style="margin-top:10px;font-weight:700;color:#12304f">0 de 8 hábitos</p>
  </div>
  <script>(function(){var b=document.querySelectorAll('#ck31 input');function u(){var n=0;b.forEach(function(i){if(i.checked)n++});document.getElementById('bar31').style.width=(n/b.length*100)+'%';document.getElementById('txt31').textContent=n+' de '+b.length+' hábitos'+(n===b.length?'. Sua casa está pronta para o calor.':'');}b.forEach(function(i){i.addEventListener('change',u)});})();</script>

  <h2>Quem precisa de mais cuidado</h2>
  <div class="fx-cards">
    <div class="fx-c"><b>Crianças</b>Brincam, suam e esquecem de beber. Ofereça água em intervalos fixos.</div>
    <div class="fx-c"><b>Idosos</b>A sensação de sede diminui com a idade. Deixe água à vista e lembre com carinho.</div>
    <div class="fx-c"><b>Gestantes</b>A demanda de líquido já é maior. Converse com o obstetra sobre a meta diária.</div>
    <div class="fx-c"><b>Quem treina</b>Repor antes, durante e depois do treino ajuda a manter o rendimento.</div>
  </div>
${MID_CTA("Água alcalina e mineralizada direto na torneira, fresquinha e sem carregar galão no calor.")}
  <h2>Por que a qualidade da água conta no calor</h2>
  <p>Beber mais só acontece quando a água é agradável. Gosto de cloro, galão vazio e garrafas esquentando no carro são os principais motivos para a pessoa deixar para depois. Uma água leve, mineralizada e sempre disponível ajuda a transformar a meta em hábito.</p>
${CTA_FINAL("Atravesse o calor", "com água boa na torneira")}`,
  related: [
    ["Calculadora: quanta água você precisa por dia", R("calculadora-agua-por-dia-peso")],
    ["Os 8 sinais silenciosos da desidratação", R("sinais-desidratacao-cor-da-urina")],
  ],
});

// 32. Calculadora de agua por peso
const a32 = make({
  slug: "calculadora-agua-por-dia-peso",
  title: "Calculadora: quanta água você precisa beber por dia, de acordo com o seu peso e a sua rotina",
  metaTitle: "Calculadora de Água por Dia: Quanto Beber pelo Seu Peso | Acqualive",
  desc: "Calcule em segundos quanta água beber por dia com base no seu peso, no clima e na atividade física. Ferramenta gratuita com explicação da fórmula.",
  keywords: "calculadora de agua, quanta agua beber por dia, agua por kg, ml por quilo, meta de hidratação, Acqualive",
  badge: "FERRAMENTA",
  h1: "Calculadora: <span>quanta água você precisa</span> beber por dia",
  sub: "Coloque o seu peso, conte como é o seu dia e veja a sua meta em litros e em copos. Depois, entenda de onde vem a conta.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "4 min",
  img: "calculadora-agua-peso.jpg",
  alt: "Garrafa de vidro com marcações de volume ao lado de um caderno na bancada da cozinha",
  answer: "a referência mais usada é de 30 a 40 ml de água por quilo de peso por dia. Uma pessoa de 70 kg precisa de 2,1 a 2,8 litros, com acréscimo em dias quentes ou de treino.",
  faq: [
    ["Qual é a fórmula para calcular a água por dia?", "Multiplique o seu peso em quilos por 35 ml, o ponto médio da faixa de 30 a 40 ml. Some cerca de 500 ml por hora de exercício e mais 500 ml em dias muito quentes."],
    ["Café e chá contam na meta?", "Contam em parte, mas a água pura segue sendo a base. Ela hidrata sem açúcar, sem cafeína e sem calorias."],
    ["Beber água demais faz mal?", "Para pessoas saudáveis, o risco é raro e está ligado a volumes muito altos em pouco tempo. Distribuir ao longo do dia é o caminho mais seguro. Pessoas com doença renal ou cardíaca devem seguir a orientação médica."],
  ],
  body: `
  <div class="fx-box">
    <h3>Calcule a sua meta</h3>
    <div class="fx-row"><label for="p32">Peso (kg)</label><input id="p32" type="number" value="70" min="20" max="200"></div>
    <div class="fx-row"><label for="e32">Exercício por dia</label>
      <select id="e32"><option value="0">Não treino</option><option value="500">Até 1 hora</option><option value="1000">Mais de 1 hora</option></select></div>
    <div class="fx-row"><label for="c32">Clima</label>
      <select id="c32"><option value="0">Ameno</option><option value="500">Quente</option><option value="800">Onda de calor</option></select></div>
    <button class="fx-btn" id="b32" type="button">Calcular minha meta</button>
    <div class="fx-out" id="o32">Preencha e clique em calcular.</div>
  </div>
  <script>(function(){document.getElementById('b32').addEventListener('click',function(){var p=parseFloat(document.getElementById('p32').value)||0;var t=p*35+parseInt(document.getElementById('e32').value)+parseInt(document.getElementById('c32').value);var l=(t/1000).toFixed(1).replace('.',',');var c=Math.round(t/250);document.getElementById('o32').innerHTML='Sua meta é de <strong>'+l+' litros por dia</strong>, cerca de '+c+' copos de 250 ml. Divida em goles ao longo do dia, começando logo ao acordar.';});})();</script>

  <h2>De onde vem a conta</h2>
  <p>A faixa de 30 a 40 ml por quilo é a referência prática usada por médicos e nutricionistas no Brasil, e foi reforçada por endocrinologistas durante a onda de calor de setembro de 2026. A calculadora usa 35 ml, o ponto médio, e soma os ajustes de exercício e clima.</p>

  <table class="fx-table">
    <tr><th>Peso</th><th>Meta base</th><th>Com treino e calor</th></tr>
    <tr><td>50 kg</td><td>1,75 L</td><td>2,75 L</td></tr>
    <tr><td>60 kg</td><td>2,1 L</td><td>3,1 L</td></tr>
    <tr><td>70 kg</td><td>2,45 L</td><td>3,45 L</td></tr>
    <tr><td>80 kg</td><td>2,8 L</td><td>3,8 L</td></tr>
    <tr><td>90 kg</td><td>3,15 L</td><td>4,15 L</td></tr>
  </table>
${MID_CTA("Bater a meta fica mais fácil quando a água é leve, alcalina e está sempre na torneira.")}
  <h2>Três truques para chegar lá</h2>
  <ol class="fx-steps">
    <li><strong>Âncoras do dia.</strong> Um copo ao acordar, um antes de cada refeição e um ao chegar em casa já somam 1,25 litro.</li>
    <li><strong>Garrafa com marcação.</strong> Ver o nível descer ajuda o cérebro a acompanhar o progresso.</li>
    <li><strong>Água gostosa.</strong> Sem gosto de cloro e na temperatura que você prefere, a vontade de beber aumenta naturalmente.</li>
  </ol>
${CTA_FINAL("Sua meta diária", "começa na torneira")}`,
  related: [
    ["Onda de calor: o guia de hidratação", R("onda-de-calor-primavera-2026-hidratacao")],
    ["Quiz: você bebe água suficiente?", R("quiz-voce-bebe-agua-suficiente")],
  ],
});

// 33. pH da agua da torneira: formato perguntas e respostas sobre noticia
const a33 = make({
  slug: "ph-da-agua-da-torneira-oscilacao-o-que-significa",
  title: "O pH da água da sua cidade mudou? O que isso significa e o que fazer em casa",
  metaTitle: "pH da Água da Torneira Mudou: O Que Significa | Acqualive",
  desc: "Oscilações de pH e turbidez na água da rede viraram notícia em setembro de 2026. Entenda em perguntas e respostas o que é o pH, quais os limites e como ter mais controle em casa.",
  keywords: "ph da agua da torneira, agua da rede ph alterado, turbidez agua, portaria 888, qualidade da agua em casa, agua alcalina, Acqualive",
  badge: "PERGUNTAS E RESPOSTAS",
  h1: "O pH da água da sua cidade mudou? <span>Entenda em 7 respostas</span>",
  sub: "Quando a companhia de saneamento anuncia uma variação de pH, as dúvidas se espalham mais rápido que a informação. Este é o guia direto ao ponto.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "6 min",
  img: "ph-agua-torneira.jpg",
  alt: "Torneira enchendo um copo de água ao lado de fitas medidoras de pH",
  answer: "uma variação de pH na rede não significa, por si só, contaminação. A Portaria GM/MS 888/2021 aceita pH entre 6,0 e 9,0 na água distribuída. Em casa, um purificador garante uma água estável, alcalina e livre de cloro independente das oscilações da rede.",
  faq: [
    ["Qual é o pH permitido para a água da torneira no Brasil?", "A Portaria GM/MS nº 888/2021 recomenda pH entre 6,0 e 9,0 na água distribuída para consumo humano."],
    ["pH alterado quer dizer que a água está contaminada?", "Não necessariamente. Chuvas intensas e mudanças na água captada alteram o pH. A potabilidade depende de vários parâmetros analisados em conjunto."],
    ["Como ter uma água com pH estável em casa?", "Um purificador com tecnologia de alcalinização, como o TriWay Acqualive, entrega água com pH alcalino estável no ponto de consumo, além de reter cloro e impurezas."],
  ],
  body: `
  <p>Em setembro de 2026, a Corsan informou uma variação de pH e turbidez na água de Santa Maria (RS). A companhia fez 72 coletas na rede, 360 análises e reforçou que a água seguia dentro dos padrões. Mesmo assim, as mensagens nas redes sociais correram. Casos assim são um bom momento para entender o assunto com calma.</p>

  <div class="fx-interview">
    <p class="fx-ask">O que é o pH da água?</p>
    <p class="fx-ans">É a medida de acidez ou alcalinidade, numa escala de 0 a 14. Abaixo de 7 a água é ácida, 7 é neutro e acima de 7 é alcalina.</p>
    <p class="fx-ask">Por que o pH da rede varia?</p>
    <p class="fx-ans">A água bruta muda com as chuvas, com a temperatura e com o que chega aos rios. A estação de tratamento corrige, mas pequenas variações podem aparecer na tubulação.</p>
    <p class="fx-ask">Qual é a faixa aceita?</p>
    <p class="fx-ans">A Portaria GM/MS 888/2021 recomenda pH entre 6,0 e 9,0 na água distribuída.</p>
    <p class="fx-ask">E a turbidez?</p>
    <p class="fx-ans">É o quanto a água está turva, geralmente por partículas em suspensão. Ela costuma subir junto com chuvas fortes e com manutenção na rede.</p>
    <p class="fx-ask">Posso medir em casa?</p>
    <p class="fx-ans">Sim, com fitas medidoras de pH, vendidas em farmácias e lojas de aquário. Elas dão uma boa noção, embora não substituam uma análise laboratorial.</p>
    <p class="fx-ask">O que fazer se eu perceber algo diferente?</p>
    <p class="fx-ans">Registre (cor, cheiro, sabor), avise a companhia pelos canais oficiais e prefira água purificada para beber e cozinhar até a situação normalizar.</p>
    <p class="fx-ask">Como ficar menos dependente dessas oscilações?</p>
    <p class="fx-ans">Tratando a água no ponto de consumo. Um purificador retém cloro e partículas e entrega sempre a mesma qualidade no seu copo.</p>
  </div>

  <div class="fx-scale">
    <div style="background:#fde2e1">pH 5<br>ácida</div>
    <div style="background:#eef3f8">pH 7<br>neutra</div>
    <div style="background:#dcefff">pH 8 a 9<br>faixa da rede aceita</div>
    <div style="background:#c7e6ff">pH 8,5 a 9,5<br>água alcalina Acqualive</div>
  </div>
${MID_CTA("Água alcalina com pH estável, livre de cloro, na torneira da sua cozinha.")}
${CTA_FINAL("Qualidade estável", "no seu copo todos os dias")}`,
  related: [
    ["O que o cloro faz na sua água", R("cloro-na-agua-historia-e-cuidados")],
    ["Glossário da água de A a Z", R("glossario-da-agua-de-a-a-z")],
  ],
});

// 34. Escala visual da cor da urina
const a34 = make({
  slug: "sinais-desidratacao-cor-da-urina",
  title: "Os 8 sinais silenciosos da desidratação e a escala de cor da urina que você pode usar hoje",
  metaTitle: "Sinais de Desidratação e Escala de Cor da Urina | Acqualive",
  desc: "Dor de cabeça, cansaço e irritação podem ser falta de água. Veja os 8 sinais silenciosos da desidratação e use a escala visual de cor da urina para se orientar.",
  keywords: "sinais de desidratação, cor da urina, escala da urina, desidratação leve, falta de água no corpo, Acqualive",
  badge: "ESCALA VISUAL",
  h1: "Os 8 sinais silenciosos da desidratação <span>e a escala da cor da urina</span>",
  sub: "Antes da sede, o corpo manda outros recados. Aprenda a lê-los e a usar a ferramenta mais simples que existe: olhar a cor.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "5 min",
  img: "sinais-desidratacao.jpg",
  alt: "Mulher cansada com a mão na testa em frente a um copo de água sobre a mesa",
  answer: "urina amarelo clarinho indica boa hidratação. Tons de amarelo escuro a âmbar pedem água logo. Dor de cabeça, cansaço, boca seca e dificuldade de concentração são sinais comuns de que o corpo está pedindo água.",
  faq: [
    ["Qual é a cor ideal da urina?", "Amarelo claro, cor de palha. Totalmente transparente o tempo todo pode indicar excesso, e amarelo escuro indica que falta água."],
    ["Dor de cabeça pode ser desidratação?", "Sim, é um dos sinais mais frequentes. Um copo de água e alguns minutos de pausa ajudam a aliviar em muitos casos."],
    ["Vitaminas alteram a cor da urina?", "Sim. Complexo B, por exemplo, deixa a urina amarelo forte. Nesses dias, use os outros sinais como referência."],
  ],
  body: `
  <h2>A escala de cor</h2>
  <p>Compare com a última ida ao banheiro:</p>
  <div class="fx-scale">
    <div style="background:#fbfbe8">1 e 2<br>Palha clara<br><small>Bem hidratado</small></div>
    <div style="background:#f7f0a8">3 e 4<br>Amarelo<br><small>Beba um copo</small></div>
    <div style="background:#efd66a">5 e 6<br>Amarelo escuro<br><small>Beba agora</small></div>
    <div style="background:#d9a441;color:#fff">7 e 8<br>Âmbar<br><small>Reponha e observe</small></div>
  </div>

  <h2>Os 8 sinais silenciosos</h2>
  <div class="fx-cards">
    <div class="fx-c"><b>1. Dor de cabeça</b>Principalmente no fim da tarde.</div>
    <div class="fx-c"><b>2. Cansaço sem motivo</b>O volume de sangue cai e o coração trabalha mais.</div>
    <div class="fx-c"><b>3. Boca e lábios secos</b>Menos saliva, mais sensação de boca pastosa.</div>
    <div class="fx-c"><b>4. Falta de foco</b>Pequenas perdas de água já afetam atenção e memória.</div>
    <div class="fx-c"><b>5. Irritação</b>O humor também sente a falta de água.</div>
    <div class="fx-c"><b>6. Vontade de doce</b>O corpo às vezes confunde sede com fome.</div>
    <div class="fx-c"><b>7. Pele sem viço</b>A pele perde elasticidade quando falta água.</div>
    <div class="fx-c"><b>8. Intestino preso</b>Fibra sem água não faz o trabalho dela.</div>
  </div>
  <div class="danger-box"><strong>Procure atendimento</strong> se houver confusão mental, desmaio, febre alta ou ausência de urina por muitas horas.</div>
${MID_CTA("Deixe a água boa mais perto de você: alcalina, mineralizada e na torneira.")}
${CTA_FINAL("Hidratação que você", "enxerga no dia a dia")}`,
  related: [
    ["Calculadora de água por dia", R("calculadora-agua-por-dia-peso")],
    ["Hidratação no home office: a agenda ideal", R("agenda-hidratacao-home-office")],
  ],
});

// 35. Galao x purificador: tabela + calculadora de custo
const a35 = make({
  slug: "galao-ou-purificador-custo-por-litro",
  title: "Galão ou purificador? A conta do custo por litro que muda a decisão da sua casa",
  metaTitle: "Galão ou Purificador: Comparativo de Custo por Litro | Acqualive",
  desc: "Compare galão de 20 litros e purificador de água em custo por litro, praticidade, espaço e qualidade. Use a calculadora e veja quanto sua família gasta por ano.",
  keywords: "galao ou purificador, custo por litro agua, galao 20 litros preço, purificador vale a pena, economia agua, Acqualive",
  badge: "COMPARATIVO",
  h1: "Galão ou purificador? <span>A conta do custo por litro</span>",
  sub: "Uma tabela lado a lado e uma calculadora para você ver, em reais, a diferença no fim do ano.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "6 min",
  img: "galao-vs-purificador.jpg",
  alt: "Galão azul de 20 litros no chão da cozinha ao lado de um purificador instalado embaixo da pia",
  answer: "com o galão de 20 litros a R$ 18,90, o litro sai por cerca de R$ 0,95. No purificador Acqualive, o litro sai a partir de R$ 0,17, considerando o valor da troca de refis. Para uma família que bebe 8 litros por dia, a diferença passa de R$ 2.200 por ano.",
  faq: [
    ["Quanto custa o litro do galão de 20 litros?", "Com o galão a R$ 18,90, o litro custa cerca de R$ 0,95, sem contar entrega e o casco."],
    ["Quanto custa o litro no purificador Acqualive?", "A partir de R$ 0,17 por litro, cálculo baseado no valor da troca de refis."],
    ["O purificador ocupa muito espaço?", "Não. Os modelos Acqualive ficam sobre a bancada ou embaixo da pia, liberando o canto que o galão ocupava."],
  ],
  body: `
  <table class="fx-table">
    <tr><th>Critério</th><th>Galão 20 L</th><th>Purificador Acqualive</th></tr>
    <tr><td>Custo por litro</td><td>cerca de R$ 0,95</td><td>a partir de R$ 0,17*</td></tr>
    <tr><td>Esforço</td><td>Carregar 20 kg, trocar na base</td><td>Abrir a torneira</td></tr>
    <tr><td>Espaço</td><td>Canto fixo e estoque de cascos</td><td>Bancada ou embaixo da pia</td></tr>
    <tr><td>Plástico</td><td>Casco reutilizado com validade</td><td>Sem casco</td></tr>
    <tr><td>Água</td><td>Depende da marca e do armazenamento</td><td>Alcalina, mineralizada, antioxidante e livre de cloro</td></tr>
  </table>
  <p style="font-size:13px;color:#6b7a8d">*Cálculo baseado no valor da troca de refis.</p>

  <div class="fx-box">
    <h3>Quanto a sua casa gasta por ano?</h3>
    <div class="fx-row"><label for="l35">Litros por dia</label><input id="l35" type="range" min="2" max="20" value="8"><span id="v35" style="font-weight:800;color:#1460b6">8 L</span></div>
    <div class="fx-out" id="o35"></div>
  </div>
  <script>(function(){var r=document.getElementById('l35');function f(n){return n.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0})}function u(){var l=+r.value;document.getElementById('v35').textContent=l+' L';var g=l*0.95*365,p=l*0.17*365;document.getElementById('o35').innerHTML='Galão: '+f(g)+' por ano<br>Acqualive: '+f(p)+' por ano<br>Economia estimada: <strong>'+f(g-p)+' por ano</strong>';}r.addEventListener('input',u);u();})();</script>
${MID_CTA("Troque o peso do galão por uma torneira com água alcalina. Em até 10x sem juros.")}
  <h2>O que a conta não mostra</h2>
  <p>Além do dinheiro, existe o tempo de pedir, esperar e trocar o galão, e o espaço que ele ocupa. Quando a água boa sai da torneira, a família bebe mais sem pensar nisso, e é aí que o investimento se paga em saúde e bem-estar.</p>
${CTA_FINAL("Menos peso,", "mais água boa")}`,
  related: [
    ["Quanto plástico uma família deixa de usar em um ano", R("quanto-plastico-familia-deixa-de-usar")],
    ["Quando trocar o refil do purificador", R("quando-trocar-refil-purificador")],
  ],
});

// 36. Cloro: linha do tempo
const a36 = make({
  slug: "cloro-na-agua-historia-e-cuidados",
  title: "Cloro na água: a linha do tempo de uma invenção que salvou vidas e por que retirá-lo no copo",
  metaTitle: "Cloro na Água: História, Função e Por Que Filtrar | Acqualive",
  desc: "O cloro revolucionou a saúde pública no século 20. Veja a linha do tempo do tratamento da água e entenda por que retirar o cloro no ponto de consumo melhora sabor e experiência.",
  keywords: "cloro na agua, historia do tratamento de agua, gosto de cloro, remover cloro da agua, purificador cloro, Acqualive",
  badge: "LINHA DO TEMPO",
  h1: "Cloro na água: <span>a linha do tempo</span> de uma invenção que salvou vidas",
  sub: "O cloro é o herói da rede de abastecimento. No seu copo, ele já cumpriu a missão. Veja como chegamos até aqui.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "6 min",
  img: "cloro-na-agua.jpg",
  alt: "Copo de água com pequenas bolhas sobre a borda de uma piscina azul",
  answer: "o cloro é essencial para levar água segura pela tubulação até a sua casa. Depois que chega à torneira, retirá-lo com um purificador melhora sabor e cheiro e reduz subprodutos da cloração, sem abrir mão da segurança.",
  faq: [
    ["Por que a água da torneira tem cloro?", "Para eliminar microrganismos e manter a água protegida ao longo de quilômetros de tubulação até a sua casa."],
    ["Beber água com cloro faz mal?", "Nos limites da legislação, a água é segura. Retirar o cloro no ponto de consumo melhora sabor e odor e reduz subprodutos da cloração."],
    ["Ferver a água tira o cloro?", "Parte evapora, mas ferver não retém outras impurezas. Um purificador com carvão ativado faz esse trabalho de forma prática."],
  ],
  body: `
  <div class="fx-timeline">
    <div class="fx-t"><div class="fx-y">1854</div><p>Em Londres, John Snow liga um surto de cólera a uma bomba de água contaminada. Nasce a ideia de que água limpa é saúde pública.</p></div>
    <div class="fx-t"><div class="fx-y">1908</div><p>Jersey City, nos Estados Unidos, adota a cloração contínua do abastecimento. Os casos de febre tifoide despencam.</p></div>
    <div class="fx-t"><div class="fx-y">Década de 1920</div><p>Cidades brasileiras começam a clorar a água distribuída.</p></div>
    <div class="fx-t"><div class="fx-y">1974</div><p>Pesquisadores identificam os trialometanos, subprodutos formados quando o cloro reage com matéria orgânica.</p></div>
    <div class="fx-t"><div class="fx-y">2021</div><p>A Portaria GM/MS 888 atualiza os padrões de potabilidade no Brasil, incluindo limites para cloro residual e subprodutos.</p></div>
    <div class="fx-t"><div class="fx-y">Hoje</div><p>O modelo ideal combina as duas coisas: cloro na rede para proteger o caminho e purificação no ponto de consumo para entregar a melhor água no copo.</p></div>
  </div>
${MID_CTA("A tecnologia TriWay Acqualive retém o cloro e entrega água alcalina e mineralizada.")}
  <h2>O que muda quando o cloro sai</h2>
  <div class="fx-cards">
    <div class="fx-c"><b>Sabor</b>A água fica leve e sem aquele gosto de piscina.</div>
    <div class="fx-c"><b>Café e chá</b>Os aromas aparecem com mais clareza.</div>
    <div class="fx-c"><b>Hábito</b>Água gostosa é água que a família bebe mais.</div>
  </div>
${CTA_FINAL("Cloro protege o caminho.", "O Acqualive cuida do copo")}`,
  related: [
    ["pH da água da torneira mudou? O que significa", R("ph-da-agua-da-torneira-oscilacao-o-que-significa")],
    ["Água, café e chá: receitas com água alcalina", R("receitas-cafe-cha-agua-alcalina")],
  ],
});

// 37. Magnesio: ficha tecnica
const a37 = make({
  slug: "magnesio-na-agua-sono-caibras",
  title: "Magnésio na água: a ficha técnica do mineral que ajuda no sono, nos músculos e no coração",
  metaTitle: "Magnésio na Água: Sono, Cãibras e Coração | Acqualive",
  desc: "Ficha técnica do magnésio: para que serve, quanto precisamos, onde encontrar e como a água mineralizada ajuda a completar a ingestão diária.",
  keywords: "magnesio na agua, magnesio sono, magnesio caibras, agua mineralizada magnesio, ingestão diaria magnesio, Acqualive",
  badge: "FICHA TÉCNICA",
  h1: "Magnésio na água: <span>a ficha técnica</span> do mineral do descanso",
  sub: "Um mineral discreto que participa de mais de 300 reações no corpo. Veja tudo em formato de ficha, para consultar quando quiser.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "5 min",
  img: "magnesio-sono.jpg",
  alt: "Copo de água sobre o criado-mudo iluminado por um abajur em quarto tranquilo à noite",
  answer: "o magnésio participa de mais de 300 reações enzimáticas, auxilia no relaxamento muscular, na qualidade do sono e no ritmo cardíaco. A água mineralizada ajuda a completar a ingestão diária, porque o magnésio dissolvido na água é bem absorvido.",
  faq: [
    ["Quanto magnésio precisamos por dia?", "Adultos precisam, em média, de 310 a 420 mg por dia, conforme idade e sexo."],
    ["Água com magnésio ajuda no sono?", "O magnésio auxilia no relaxamento muscular e no sistema nervoso. Somado a uma boa rotina, ele ajuda a preparar o corpo para o descanso."],
    ["Onde mais encontro magnésio?", "Em folhas verde-escuras, castanhas, sementes, feijões e cacau. A água mineralizada é um complemento diário prático."],
  ],
  body: `
  <table class="fx-table">
    <tr><th colspan="2">Ficha técnica: Magnésio (Mg)</th></tr>
    <tr><td><strong>Função</strong></td><td>Cofator de mais de 300 enzimas, energia celular, contração e relaxamento muscular, ritmo cardíaco</td></tr>
    <tr><td><strong>Ingestão diária</strong></td><td>310 a 420 mg para adultos</td></tr>
    <tr><td><strong>Sinais de pouco magnésio</strong></td><td>Cãibras, tensão muscular, cansaço, sono leve</td></tr>
    <tr><td><strong>Melhores fontes</strong></td><td>Folhas escuras, castanhas, sementes de abóbora, feijão, cacau e água mineralizada</td></tr>
    <tr><td><strong>Parceiros</strong></td><td>Cálcio e vitamina D, em equilíbrio</td></tr>
    <tr><td><strong>Atenção</strong></td><td>Pessoas com doença renal devem seguir orientação médica</td></tr>
  </table>

  <h2>Por que na água faz diferença</h2>
  <p>Na água, o magnésio já está dissolvido na forma iônica, pronto para ser absorvido. E a água acompanha você o dia inteiro, em pequenas doses, o que ajuda o corpo a aproveitar melhor. É um complemento que acontece sem esforço, copo após copo.</p>
${MID_CTA("Água mineralizada com cálcio e magnésio, direto na torneira.")}
  <h2>Ritual noturno em 3 passos</h2>
  <ol class="fx-steps">
    <li>Um copo de água mineralizada uma hora antes de dormir.</li>
    <li>Telas apagadas e luz baixa, para o corpo entender que é hora de desacelerar.</li>
    <li>Um copo no criado-mudo, para não levantar com sede.</li>
  </ol>
${CTA_FINAL("Minerais que ajudam", "no seu descanso")}`,
  related: [
    ["Glossário da água de A a Z", R("glossario-da-agua-de-a-a-z")],
    ["Hidratação depois dos 60", R("carta-hidratacao-idosos-cuidadores")],
  ],
});

// 38. Idosos: formato carta
const a38 = make({
  slug: "carta-hidratacao-idosos-cuidadores",
  title: "Carta para quem cuida: como ajudar os idosos da família a beber mais água, sem brigas",
  metaTitle: "Hidratação de Idosos: Guia Carinhoso para Cuidadores | Acqualive",
  desc: "Com a idade, a sede diminui. Em formato de carta, um guia prático e afetuoso para filhos, netos e cuidadores ajudarem os idosos a se hidratar melhor.",
  keywords: "hidratação idosos, idoso nao sente sede, desidratação idoso, cuidador idoso agua, Acqualive",
  badge: "CARTA",
  h1: "Carta para quem cuida: <span>idosos bem hidratados</span>, sem brigas",
  sub: "Este texto é diferente. É uma carta para você que cuida de um pai, uma mãe, uma avó. Com ideias práticas no final.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "5 min",
  img: "hidratacao-idosos.jpg",
  alt: "Senhora sorrindo segurando um copo de água ao lado da filha na sala de estar",
  answer: "com o envelhecimento, a percepção de sede diminui e a reserva de água do corpo é menor. Oferecer água em horários fixos, deixar o copo à vista e servir uma água gostosa ajuda muito a manter os idosos hidratados.",
  faq: [
    ["Por que o idoso não sente sede?", "Com a idade, o mecanismo que sinaliza a sede fica menos sensível, e o corpo passa a ter menos água total. Por isso a hidratação precisa ser lembrada."],
    ["Quais sinais indicam desidratação no idoso?", "Confusão, sonolência, boca seca, tontura ao levantar e pouca urina. Diante de confusão súbita, procure atendimento."],
    ["Que horários ajudam a criar o hábito?", "Ao acordar, junto com os remédios, antes das refeições, no lanche da tarde e no início da noite."],
  ],
  body: `
  <div class="fx-letter">
    <p>Querida pessoa que cuida,</p>
    <p>Eu sei que você já pediu muitas vezes. "Mãe, bebe água." "Pai, você bebeu hoje?" E sei que, às vezes, a resposta vem com um suspiro. Não é teimosia. Com os anos, o corpo simplesmente deixa de avisar que tem sede.</p>
    <p>Por isso, a hidratação de quem você ama precisa sair do campo da lembrança e entrar no campo do ambiente. Um copo bonito sempre à vista. Uma jarra na mesa da sala. Um pequeno ritual junto com o remédio da manhã. Coisas que acontecem sem precisar de conversa.</p>
    <p>E tem mais uma coisa que faz diferença: o gosto. Água com gosto de cloro ou morna de garrafa esquecida é fácil de recusar. Água leve, fresquinha, servida com carinho, é convite.</p>
    <p>Cuidar também é isso. Tornar o bem fácil.</p>
    <p class="fx-sign">Com carinho,<br>Equipe Acqualive</p>
  </div>

  <h2>Ideias práticas para começar hoje</h2>
  <ul class="fx-check">
    <li><label><input type="checkbox"> Copo leve, com alça, na altura das mãos</label></li>
    <li><label><input type="checkbox"> Água junto de cada remédio</label></li>
    <li><label><input type="checkbox"> Frutas com água no lanche: melancia, melão, laranja</label></li>
    <li><label><input type="checkbox"> Sopas e caldos no jantar</label></li>
    <li><label><input type="checkbox"> Um copo cheio no criado-mudo</label></li>
  </ul>
${MID_CTA("Água alcalina e mineralizada, fácil de servir, direto na torneira da cozinha.")}
${CTA_FINAL("Cuidar é tornar", "o bem mais fácil")}`,
  related: [
    ["Os 8 sinais silenciosos da desidratação", R("sinais-desidratacao-cor-da-urina")],
    ["Magnésio na água: a ficha técnica", R("magnesio-na-agua-sono-caibras")],
  ],
});

// 39. Criancas: checklist lancheira + tabela por idade
const a39 = make({
  slug: "hidratacao-criancas-escola-lancheira",
  title: "Garrafinha na lancheira: quanta água as crianças precisam por idade e como fazer elas beberem",
  metaTitle: "Hidratação Infantil: Quanta Água a Criança Precisa por Idade | Acqualive",
  desc: "Tabela de água por idade, sinais de desidratação em crianças e truques para a garrafinha voltar vazia da escola.",
  keywords: "hidratação infantil, quanta agua crianca, garrafinha escola, crianca nao bebe agua, agua por idade, Acqualive",
  badge: "PARA PAIS",
  h1: "Garrafinha na lancheira: <span>quanta água as crianças precisam</span>",
  sub: "Uma tabela por idade, e truques testados por pais para a garrafinha voltar vazia.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "5 min",
  img: "hidratacao-criancas.jpg",
  alt: "Lancheira infantil azul com sanduíche e frutas ao lado de uma garrafinha de água",
  answer: "crianças de 4 a 8 anos precisam de cerca de 1,2 litro de água por dia vindo de bebidas, e de 9 a 13 anos, de 1,6 a 1,9 litro. Garrafinha própria, água gostosa e pausas combinadas com a escola ajudam muito.",
  faq: [
    ["Quanta água uma criança de 6 anos deve beber?", "Cerca de 1,2 litro por dia em bebidas, com mais em dias quentes e de atividade física."],
    ["Suco substitui a água?", "Não. Mesmo o natural tem açúcar da fruta. A água deve ser a bebida principal."],
    ["Como saber se meu filho está desidratado?", "Boca seca, pouca urina, irritação, cansaço e dor de cabeça. Em bebês, fraldas secas por muitas horas pedem atenção."],
  ],
  body: `
  <table class="fx-table">
    <tr><th>Idade</th><th>Água por dia em bebidas</th><th>Em copos de 200 ml</th></tr>
    <tr><td>1 a 3 anos</td><td>cerca de 0,9 L</td><td>4 a 5</td></tr>
    <tr><td>4 a 8 anos</td><td>cerca de 1,2 L</td><td>6</td></tr>
    <tr><td>9 a 13 anos</td><td>1,6 a 1,9 L</td><td>8 a 9</td></tr>
    <tr><td>14 a 18 anos</td><td>1,9 a 2,6 L</td><td>9 a 13</td></tr>
  </table>
  <p style="font-size:13px;color:#6b7a8d">Valores de referência aproximados. Em dias quentes e de esporte, a necessidade aumenta.</p>

  <h2>5 truques que funcionam</h2>
  <div class="fx-cards">
    <div class="fx-c"><b>Garrafa escolhida por ela</b>Criança cuida do que escolheu.</div>
    <div class="fx-c"><b>Marcação com adesivos</b>Um adesivo para cada período do dia.</div>
    <div class="fx-c"><b>Água gostosa em casa</b>Sem gosto de cloro, a criança aceita melhor.</div>
    <div class="fx-c"><b>Exemplo dos pais</b>Criança copia o que vê na mesa.</div>
    <div class="fx-c"><b>Frutas com água</b>Melancia e laranja contam na hidratação.</div>
  </div>
${MID_CTA("Encha a garrafinha todas as manhãs com água alcalina e mineralizada.")}
${CTA_FINAL("Garrafinha cheia,", "criança disposta")}`,
  related: [
    ["Quiz: você bebe água suficiente?", R("quiz-voce-bebe-agua-suficiente")],
    ["Onda de calor: o guia de hidratação", R("onda-de-calor-primavera-2026-hidratacao")],
  ],
});

// 40. Receitas
const a40 = make({
  slug: "receitas-cafe-cha-agua-alcalina",
  title: "Três receitas que mudam com a água: café coado, chá verde e água aromatizada",
  metaTitle: "Receitas com Água Alcalina: Café, Chá e Água Aromatizada | Acqualive",
  desc: "A água é o ingrediente principal do café e do chá. Três receitas com temperatura, proporção e tempo certos, e por que a água sem cloro faz diferença no sabor.",
  keywords: "cafe com agua alcalina, agua para cafe, cha verde temperatura, agua aromatizada receita, Acqualive",
  badge: "RECEITAS",
  h1: "Três receitas que <span>mudam com a água</span>",
  sub: "Mais de 98% de uma xícara de café é água. Então vale escolher bem o ingrediente principal.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "5 min",
  img: "cafe-cha-agua.jpg",
  alt: "Café coado, chá verde em cumbuca e jarra de vidro com água sobre bancada de madeira",
  answer: "água sem cloro e com minerais equilibrados valoriza os aromas do café e do chá. A água alcalina e mineralizada ajuda a extrair doçura e corpo, com menos amargor residual.",
  faq: [
    ["Qual é a melhor água para fazer café?", "Uma água sem cloro, sem odor e com minerais equilibrados. O cloro mascara aromas, e minerais como magnésio ajudam na extração."],
    ["Qual temperatura para o chá verde?", "Entre 70 e 80 °C. Água fervendo deixa o chá verde amargo."],
    ["Água aromatizada tem calorias?", "Praticamente nenhuma, se feita só com frutas e ervas, sem açúcar."],
  ],
  body: `
  <div class="fx-recipe">
    <div class="fx-rh">1. Café coado equilibrado</div>
    <div class="fx-rb">
      <div class="fx-meta"><span>Rende 2 xícaras</span><span>5 minutos</span><span>Água a 92 °C</span></div>
      <ul><li>20 g de café moído médio</li><li>300 ml de água Acqualive</li></ul>
      <ol><li>Aqueça a água até pequenas bolhas no fundo, sem ferver forte.</li><li>Molhe o filtro de papel e descarte essa água.</li><li>Despeje um pouco de água sobre o pó e espere 30 segundos.</li><li>Complete em movimentos circulares, sem pressa.</li></ol>
    </div>
  </div>
  <div class="fx-recipe">
    <div class="fx-rh">2. Chá verde sem amargor</div>
    <div class="fx-rb">
      <div class="fx-meta"><span>1 xícara</span><span>3 minutos</span><span>Água a 75 °C</span></div>
      <ul><li>1 colher de chá de folhas</li><li>200 ml de água Acqualive</li></ul>
      <ol><li>Ferva a água e espere 3 minutos para baixar a temperatura.</li><li>Infusione por 2 a 3 minutos e retire as folhas.</li></ol>
    </div>
  </div>
  <div class="fx-recipe">
    <div class="fx-rh">3. Água aromatizada de pepino, limão e hortelã</div>
    <div class="fx-rb">
      <div class="fx-meta"><span>1 litro</span><span>2 horas na geladeira</span></div>
      <ul><li>1 litro de água Acqualive</li><li>Meio pepino em rodelas</li><li>Meio limão em fatias</li><li>Folhas de hortelã</li></ul>
      <ol><li>Coloque tudo em uma jarra de vidro.</li><li>Deixe na geladeira por 2 horas e consuma no mesmo dia.</li></ol>
    </div>
  </div>
${MID_CTA("A água que faz o seu café render mais sabor: alcalina, mineralizada e sem cloro.")}
${CTA_FINAL("O ingrediente principal", "sai da sua torneira")}`,
  related: [
    ["Cloro na água: a linha do tempo", R("cloro-na-agua-historia-e-cuidados")],
    ["Água e pele no verão", R("agua-e-pele-no-verao-5-minutos")],
  ],
});

// 41. Mito x Fato (acordeao)
const a41 = make({
  slug: "10-mitos-e-fatos-agua-alcalina",
  title: "10 mitos e fatos sobre água alcalina: clique e descubra a resposta de cada um",
  metaTitle: "10 Mitos e Fatos sobre Água Alcalina | Acqualive",
  desc: "Água alcalina muda o pH do sangue? Ajuda no refluxo? Pode ser bebida todos os dias? Teste o que você sabe em 10 afirmações com resposta explicada.",
  keywords: "mitos agua alcalina, agua alcalina verdade, agua alcalina ph sangue, agua alcalina refluxo, Acqualive",
  badge: "MITO OU FATO",
  h1: "10 mitos e fatos sobre <span>água alcalina</span>",
  sub: "Leia a afirmação, pense na resposta e toque para abrir. Sem enrolação, com a ciência explicada.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "6 min",
  img: "mitos-agua-alcalina.jpg",
  alt: "Dois copos de água lado a lado sobre fundo branco",
  answer: "a água alcalina não altera o pH do sangue, que é controlado pelo corpo, mas ajuda de forma real no refluxo (inativando a pepsina), na hidratação e no pH urinário, e pode ser consumida todos os dias por adultos saudáveis.",
  faq: [
    ["Água alcalina muda o pH do sangue?", "Não. O pH do sangue fica entre 7,35 e 7,45, controlado por pulmões e rins. O que muda é o pH da urina."],
    ["Posso beber água alcalina todos os dias?", "Sim. Para adultos saudáveis, o consumo diário é seguro. Quem tem doença renal deve conversar com o médico."],
    ["Água alcalina ajuda no refluxo?", "Sim. Com pH acima de 8,8, ela inativa a pepsina, enzima envolvida nos sintomas do refluxo."],
  ],
  body: `
${[
  ["Água alcalina muda o pH do sangue.", "mito", "O pH do sangue é mantido entre 7,35 e 7,45 por pulmões, rins e sistemas tampão. O que a água alcalina altera de forma mensurável é o pH da urina."],
  ["Água alcalina ajuda no refluxo.", "fato", "Estudos mostram que água com pH acima de 8,8 inativa a pepsina, enzima que agride a mucosa do esôfago. É a aplicação com melhor suporte científico."],
  ["Toda água alcalina é igual.", "mito", "O que acompanha o pH importa. Minerais como cálcio e magnésio fazem diferença na qualidade da água."],
  ["Pode ser bebida todos os dias.", "fato", "Para adultos saudáveis, é segura no consumo diário. Pessoas com doença renal devem ter orientação médica."],
  ["Água alcalina substitui remédio.", "mito", "Ela ajuda e auxilia a rotina de cuidado, somando ao acompanhamento médico, sem substituir tratamento."],
  ["Ajuda na hidratação depois do treino.", "fato", "Estudos com atletas registram melhora em marcadores de hidratação e na reposição após esforço."],
  ["Limão deixa a água alcalina.", "mito", "O limão é ácido. No corpo, ele gera resíduo alcalino, mas não transforma a água em alcalina no copo."],
  ["O sabor costuma ser mais leve.", "fato", "Sem cloro e com minerais equilibrados, muitas pessoas descrevem a água como mais suave, o que ajuda a beber mais."],
  ["Ferver deixa a água alcalina.", "mito", "Ferver pode mudar levemente o pH por perda de gás carbônico, mas não mineraliza nem purifica a água."],
  ["Um purificador consegue entregar água alcalina.", "fato", "Tecnologias como a TriWay Acqualive alcalinizam e mineralizam a água no ponto de consumo, com pH estável."],
]
  .map(
    ([t, tipo, a], i) =>
      `  <details class="fx-acc"><summary>${i + 1}. ${t}</summary><div class="fx-acc-body"><span class="fx-tag ${tipo === "mito" ? "fx-mito" : "fx-fato"}">${tipo.toUpperCase()}</span>${a}</div></details>`,
  )
  .join("\n")}
${MID_CTA("Água alcalina de verdade: mineralizada, antioxidante e livre de cloro.")}
${CTA_FINAL("Fique com os fatos", "e com a melhor água")}`,
  related: [
    ["Água alcalina é fato ou mito de marketing?", R("agua-alcalina-fato-ou-mito-revisao-2026")],
    ["Glossário da água de A a Z", R("glossario-da-agua-de-a-a-z")],
  ],
});

// 42. Glossario
const GLOSS: [string, string][] = [
  ["Alcalinidade", "Capacidade da água de neutralizar ácidos. Não é o mesmo que pH, embora os dois caminhem juntos."],
  ["Antioxidante", "Substância ou propriedade que ajuda a neutralizar radicais livres. Na água, está ligada ao potencial de oxirredução negativo."],
  ["Bicarbonato", "Íon que atua como tampão natural, presente em águas minerais e no nosso sangue."],
  ["Cálcio", "Mineral dos ossos, dos dentes e da contração muscular. Na água, é bem absorvido."],
  ["Carvão ativado", "Material poroso que retém cloro, odores e compostos orgânicos. Presente em bons purificadores."],
  ["Cloro residual", "Cloro que permanece na água para protegê-la ao longo da rede de distribuição."],
  ["Dureza", "Quantidade de cálcio e magnésio na água. Água muito dura deixa marcas brancas em torneiras."],
  ["Eletrólitos", "Minerais com carga elétrica, como sódio, potássio e magnésio, que regulam a hidratação das células."],
  ["Hidrogênio molecular", "Gás H2 dissolvido na água, estudado por sua ação antioxidante seletiva."],
  ["Magnésio", "Mineral de mais de 300 reações do corpo, ligado ao relaxamento muscular e ao sono."],
  ["Microplásticos", "Partículas de plástico menores que 5 mm, encontradas em garrafas, oceanos e até no ar."],
  ["ORP", "Potencial de oxirredução. Valores negativos indicam água com característica antioxidante."],
  ["Pepsina", "Enzima digestiva do estômago. Inativada por água com pH acima de 8,8, o que ajuda no refluxo."],
  ["pH", "Escala de 0 a 14 que mede acidez e alcalinidade. 7 é neutro."],
  ["Potabilidade", "Conjunto de padrões que tornam a água própria para consumo humano, definidos no Brasil pela Portaria GM/MS 888/2021."],
  ["Refil", "Elemento filtrante do purificador, trocado periodicamente para manter a qualidade da água."],
  ["TriWay", "Tecnologia Acqualive que purifica, alcaliniza e mineraliza a água em um só sistema."],
  ["Turbidez", "Grau de transparência da água. Sobe com partículas em suspensão."],
];
const a42 = make({
  slug: "glossario-da-agua-de-a-a-z",
  title: "Glossário da água de A a Z: 18 termos para entender rótulos, laudos e purificadores",
  metaTitle: "Glossário da Água de A a Z: pH, ORP, Dureza e Mais | Acqualive",
  desc: "pH, ORP, dureza, turbidez, eletrólitos, pepsina. Um glossário claro com os 18 termos mais usados em rótulos de água, laudos e fichas de purificadores.",
  keywords: "glossario agua, o que é orp, dureza da agua, turbidez, eletrolitos, ph agua, Acqualive",
  badge: "GLOSSÁRIO",
  h1: "Glossário da água <span>de A a Z</span>",
  sub: "Salve esta página. Sempre que um rótulo ou laudo trouxer uma palavra difícil, a explicação está aqui.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "7 min",
  img: "glossario-agua.jpg",
  alt: "Caderno aberto com ilustrações de gotas de água em aquarela e um copo de água sobre a mesa",
  answer: "os termos mais importantes para avaliar uma água são pH (acidez ou alcalinidade), dureza (cálcio e magnésio), ORP (característica antioxidante), turbidez (transparência) e cloro residual. Este glossário explica cada um em linguagem simples.",
  faq: [
    ["O que é ORP na água?", "É o potencial de oxirredução. Valores negativos indicam uma água com característica antioxidante."],
    ["O que é dureza da água?", "É a quantidade de cálcio e magnésio dissolvidos. Afeta sabor e pode deixar marcas brancas em torneiras."],
    ["pH e alcalinidade são a mesma coisa?", "Não. O pH mede o estado atual, e a alcalinidade mede a capacidade de neutralizar ácidos."],
  ],
  body: `
  <div class="fx-letters">${[...new Set(GLOSS.map(([t]) => t[0]))].map((l) => `<a href="#g-${l}">${l}</a>`).join("")}</div>
  <dl class="fx-gloss">
${GLOSS.map(([t, d], i, arr) => {
  const first = i === 0 || arr[i - 1][0][0] !== t[0];
  return `    <dt${first ? ` id="g-${t[0]}"` : ""}>${t}</dt><dd>${d}</dd>`;
}).join("\n")}
  </dl>
${MID_CTA("TriWay Acqualive: purifica, alcaliniza e mineraliza a água em um só sistema.")}
${CTA_FINAL("Agora você entende.", "Conheça a água que reúne tudo isso")}`,
  related: [
    ["10 mitos e fatos sobre água alcalina", R("10-mitos-e-fatos-agua-alcalina")],
    ["Magnésio na água: a ficha técnica", R("magnesio-na-agua-sono-caibras")],
  ],
});

// 43. Quiz
const QZ: [string, string[], number][] = [
  ["Quando você costuma beber o primeiro copo de água do dia?", ["Logo ao acordar", "No meio da manhã", "Só no almoço"], 0],
  ["Qual é a cor da sua urina na maior parte do dia?", ["Amarelo clarinho", "Amarelo", "Amarelo escuro"], 0],
  ["Você tem uma garrafa por perto enquanto trabalha?", ["Sempre", "Às vezes", "Quase nunca"], 0],
  ["Quantos cafés e refrigerantes você toma por dia?", ["Até 2", "3 a 4", "5 ou mais"], 0],
  ["Você sente dor de cabeça no fim da tarde?", ["Raramente", "Algumas vezes por semana", "Quase todo dia"], 0],
  ["Como é a água que você bebe em casa?", ["Purificada, sempre disponível", "Galão ou garrafa", "Direto da torneira"], 0],
];
const a43 = make({
  slug: "quiz-voce-bebe-agua-suficiente",
  title: "Quiz: você bebe água suficiente? Responda 6 perguntas e descubra o seu nível de hidratação",
  metaTitle: "Quiz de Hidratação: Você Bebe Água Suficiente? | Acqualive",
  desc: "Teste rápido com 6 perguntas sobre a sua rotina. Descubra o seu nível de hidratação e receba dicas personalizadas.",
  keywords: "quiz hidratação, bebo agua suficiente, teste hidratação, nivel de hidratação, Acqualive",
  badge: "QUIZ",
  h1: "Quiz: <span>você bebe água suficiente?</span>",
  sub: "Seis perguntas sobre a sua rotina, um resultado na hora e dicas para o seu perfil.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "3 min",
  img: "quiz-hidratacao.jpg",
  alt: "Mão segurando um celular colorido ao lado de um copo de água em mesa de café",
  answer: "se você bebe água logo ao acordar, mantém a urina amarelo clarinho e tem uma garrafa sempre por perto, sua hidratação provavelmente está em dia. Faça o quiz para ver o seu perfil completo.",
  faq: [
    ["Como saber se estou bem hidratado?", "Urina amarelo clara, pouca sede, boa disposição e ausência de dor de cabeça no fim do dia são bons sinais."],
    ["O quiz substitui avaliação médica?", "Não. Ele é uma ferramenta educativa para refletir sobre a rotina."],
    ["Qual o hábito que mais ajuda?", "Ter água boa sempre à mão. A disponibilidade é o que mais aumenta o consumo."],
  ],
  body: `
  <div class="fx-box fx-quiz" id="qz43">
${QZ.map(
  ([q, ops], i) =>
    `    <div class="fx-q"><p>${i + 1}. ${q}</p>${ops
      .map((o, j) => `<label><input type="radio" name="q43_${i}" value="${2 - j}"> ${o}</label>`)
      .join("")}</div>`,
).join("\n")}
    <button class="fx-btn" type="button" id="b43">Ver meu resultado</button>
    <div class="fx-out" id="o43" style="display:none"></div>
  </div>
  <script>(function(){document.getElementById('b43').addEventListener('click',function(){var s=0,n=0;for(var i=0;i<${QZ.length};i++){var r=document.querySelector('input[name="q43_'+i+'"]:checked');if(r){s+=+r.value;n++;}}var o=document.getElementById('o43');o.style.display='block';if(n<${QZ.length}){o.innerHTML='Responda todas as perguntas para ver o resultado.';return;}var t;if(s>=10)t='<strong>Hidratação em dia.</strong><br>Você já tem os hábitos certos. Mantenha a água boa por perto e aproveite os dias quentes com tranquilidade.';else if(s>=6)t='<strong>No caminho certo.</strong><br>Alguns ajustes fazem diferença: um copo ao acordar e uma garrafa na mesa de trabalho já mudam o seu dia.';else t='<strong>Seu corpo está pedindo água.</strong><br>Comece com três âncoras: ao acordar, antes do almoço e ao chegar em casa. Ter água gostosa sempre disponível ajuda muito.';o.innerHTML=t+'<br><small>Pontuação: '+s+' de 12</small>';});})();</script>
${MID_CTA("O hábito que mais ajuda é ter água boa sempre disponível. O Acqualive resolve isso na torneira.")}
${CTA_FINAL("Suba de nível", "na sua hidratação")}`,
  related: [
    ["Calculadora de água por dia", R("calculadora-agua-por-dia-peso")],
    ["Os 8 sinais silenciosos da desidratação", R("sinais-desidratacao-cor-da-urina")],
  ],
});

// 44. Garrafa no carro: antes x depois / o que acontece
const a44 = make({
  slug: "garrafa-de-agua-no-carro-calor-microplasticos",
  title: "Garrafa de água esquecida no carro quente: o que acontece com o plástico e com a água",
  metaTitle: "Garrafa de Água no Carro Quente: Riscos e Cuidados | Acqualive",
  desc: "Com o calor, o carro pode passar de 60 °C por dentro. Veja em etapas o que acontece com a garrafa plástica, a liberação de microplásticos e como evitar.",
  keywords: "garrafa no carro quente, microplasticos garrafa, plastico calor agua, garrafa pet sol, Acqualive",
  badge: "PASSO A PASSO",
  h1: "Garrafa esquecida no carro quente: <span>o que acontece em 4 etapas</span>",
  sub: "Na onda de calor, o painel do carro vira forno. Veja o que isso faz com a água que você vai beber depois.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "5 min",
  img: "garrafa-carro-calor.jpg",
  alt: "Garrafa plástica de água sobre o painel do carro sob sol forte",
  answer: "com o calor, a liberação de micro e nanoplásticos e de compostos do plástico para a água aumenta. O ideal é não deixar garrafas plásticas ao sol e preferir garrafas de vidro ou inox, abastecidas com água purificada.",
  faq: [
    ["Posso beber a água da garrafa que ficou no carro?", "O mais seguro é evitar, principalmente se ficou horas ao sol. O calor aumenta a migração de partículas e compostos do plástico para a água."],
    ["Qual garrafa é melhor para o carro?", "Garrafas de inox com parede dupla ou de vidro com capa protetora."],
    ["Quantos microplásticos tem uma garrafa de água?", "Um estudo da Universidade Columbia (2024) encontrou, em média, cerca de 240 mil partículas de nanoplástico por litro de água engarrafada."],
  ],
  body: `
  <ol class="fx-steps">
    <li><strong>Primeiros 30 minutos.</strong> Com sol direto, o interior do carro pode passar de 50 °C. A água esquenta rápido.</li>
    <li><strong>Depois de 1 hora.</strong> O plástico amolece levemente. A migração de partículas e compostos para a água aumenta com a temperatura.</li>
    <li><strong>Várias horas.</strong> O sabor muda, ganha notas de plástico. É o sinal de que algo passou da garrafa para a água.</li>
    <li><strong>Dias seguidos.</strong> Reusar a mesma garrafa descartável ao sol soma desgaste e riscos de contaminação.</li>
  </ol>
  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">240 mil</div><div class="stat-label">partículas de nanoplástico por litro de água engarrafada, em média (Columbia, 2024)</div></div>
    <div class="stat-card"><div class="stat-number">60 °C</div><div class="stat-label">temperatura que o interior de um carro pode atingir no verão</div></div>
  </div>
  <h2>O kit do carro sem plástico</h2>
  <ul class="fx-check">
    <li><label><input type="checkbox"> Garrafa de inox com parede dupla</label></li>
    <li><label><input type="checkbox"> Abastecida em casa com água purificada</label></li>
    <li><label><input type="checkbox"> Guardada longe do painel e do sol</label></li>
    <li><label><input type="checkbox"> Lavada todos os dias</label></li>
  </ul>
${MID_CTA("Encha sua garrafa de inox em casa, com água alcalina e livre de cloro.")}
${CTA_FINAL("Menos plástico,", "mais água boa no caminho")}`,
  related: [
    ["Quanto plástico uma família deixa de usar em um ano", R("quanto-plastico-familia-deixa-de-usar")],
    ["Onda de calor: o guia de hidratação", R("onda-de-calor-primavera-2026-hidratacao")],
  ],
});

// 45. Troca de refil: guia passo a passo + lembrete
const a45 = make({
  slug: "quando-trocar-refil-purificador",
  title: "Quando trocar o refil do purificador: sinais, prazos e um lembrete que você calcula agora",
  metaTitle: "Quando Trocar o Refil do Purificador de Água | Acqualive",
  desc: "Saiba de quanto em quanto tempo trocar o refil, quais sinais indicam que ele já passou do ponto e calcule a data da próxima troca.",
  keywords: "quando trocar refil, refil purificador, troca de filtro de agua, validade refil, Acqualive refil",
  badge: "MANUTENÇÃO",
  h1: "Quando trocar o refil <span>do purificador</span>",
  sub: "O refil é o coração do purificador. Veja os prazos, os sinais e calcule a sua próxima troca.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "4 min",
  img: "troca-refil.jpg",
  alt: "Mãos trocando o refil de um purificador de água embaixo da pia",
  answer: "o refil deve ser trocado no prazo indicado pelo fabricante ou quando atingir a capacidade em litros, o que vier primeiro. Mudança de sabor, vazão mais lenta e aparência diferente são sinais de que a troca chegou.",
  faq: [
    ["De quanto em quanto tempo trocar o refil?", "Siga o prazo e a capacidade em litros indicados para o seu modelo. Em casas com consumo alto, a troca chega antes."],
    ["O que acontece se eu não trocar?", "O elemento filtrante satura, a vazão diminui e a água perde as características que o purificador entrega."],
    ["A Acqualive avisa quando trocar?", "Sim. A Acqualive acompanha seus clientes com lembretes de troca de refil."],
  ],
  body: `
  <div class="fx-box">
    <h3>Calcule a sua próxima troca</h3>
    <div class="fx-row"><label for="d45">Última troca</label><input id="d45" type="date"></div>
    <div class="fx-row"><label for="m45">Intervalo do seu modelo</label>
      <select id="m45"><option value="6">6 meses</option><option value="12" selected>12 meses</option></select></div>
    <button class="fx-btn" type="button" id="b45">Calcular data</button>
    <div class="fx-out" id="o45">Informe a data da última troca.</div>
  </div>
  <script>(function(){document.getElementById('b45').addEventListener('click',function(){var v=document.getElementById('d45').value;if(!v)return;var d=new Date(v+'T12:00:00');d.setMonth(d.getMonth()+parseInt(document.getElementById('m45').value));var hoje=new Date();var dias=Math.round((d-hoje)/86400000);document.getElementById('o45').innerHTML='Próxima troca: <strong>'+d.toLocaleDateString('pt-BR')+'</strong><br>'+(dias<0?'A troca já passou do prazo. Vale agendar agora.':'Faltam '+dias+' dias. Anote na agenda.');});})();</script>

  <h2>Os 4 sinais de que chegou a hora</h2>
  <div class="fx-cards">
    <div class="fx-c"><b>Sabor diferente</b>O gosto de cloro volta ou a água fica "pesada".</div>
    <div class="fx-c"><b>Vazão lenta</b>O copo demora mais para encher.</div>
    <div class="fx-c"><b>Prazo vencido</b>Mesmo sem sinais, o prazo conta.</div>
    <div class="fx-c"><b>Casa mudou</b>Mais pessoas, mais litros, troca mais cedo.</div>
  </div>
${MID_CTA("Clientes Acqualive recebem lembrete de troca e refis originais com entrega.")}
${CTA_FINAL("Refil em dia,", "água perfeita todos os dias")}`,
  related: [
    ["Galão ou purificador? A conta do custo por litro", R("galao-ou-purificador-custo-por-litro")],
    ["Glossário da água de A a Z", R("glossario-da-agua-de-a-a-z")],
  ],
});

// 46. Pele: formato "5 minutos"
const a46 = make({
  slug: "agua-e-pele-no-verao-5-minutos",
  title: "Água e pele no verão: o que você precisa saber em 5 minutos",
  metaTitle: "Água e Pele no Verão: Guia Rápido de Hidratação | Acqualive",
  desc: "Hidratação de dentro para fora, banho, sol e água que você bebe. Um guia rápido em blocos de um minuto para cuidar da pele nos dias quentes.",
  keywords: "agua e pele, hidratação da pele verao, beber agua pele, pele seca calor, Acqualive",
  badge: "5 MINUTOS",
  h1: "Água e pele no verão: <span>o essencial em 5 minutos</span>",
  sub: "Cinco blocos, um minuto cada. Leia no intervalo do café.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "5 min",
  img: "agua-pele-verao.jpg",
  alt: "Mulher com pele iluminada bebendo um copo de água ao ar livre em dia de sol",
  answer: "a pele é o maior órgão do corpo e sente a falta de água. Beber água ao longo do dia auxilia na elasticidade e no viço, especialmente somada a protetor solar, banhos mornos e alimentação rica em frutas e verduras.",
  faq: [
    ["Beber água melhora a pele?", "Beber água ajuda a manter a hidratação da pele, auxiliando elasticidade e viço, principalmente em quem bebe pouco."],
    ["Banho quente resseca a pele?", "Sim. Prefira água morna e banhos curtos, e hidrate a pele logo depois."],
    ["O cloro da água do banho afeta a pele?", "Em peles sensíveis, o cloro pode aumentar a sensação de ressecamento. Filtros para chuveiro ajudam nesse caso."],
  ],
  body: `
${[
  ["Minuto 1: de dentro para fora", "A pele recebe água do sangue. Quando falta água, ela é uma das primeiras a perder viço. Beber ao longo do dia é o primeiro passo de qualquer rotina de pele."],
  ["Minuto 2: o sol cobra água", "Sol e calor aumentam a perda de água pela pele. Protetor solar e mais copos de água andam juntos no verão."],
  ["Minuto 3: banho morno e curto", "Água muito quente remove a camada de gordura natural. Prefira banhos mornos e hidratante logo depois."],
  ["Minuto 4: o prato também hidrata", "Melancia, pepino, tomate e laranja somam água e antioxidantes à rotina."],
  ["Minuto 5: a água que você bebe", "Uma água leve, mineralizada e sem cloro é mais gostosa, e água gostosa você bebe mais."],
]
  .map(([t, d]) => `  <div class="fx-box"><h3>${t}</h3><p style="margin:0">${d}</p></div>`)
  .join("\n")}
${MID_CTA("Água alcalina, mineralizada e antioxidante para a sua rotina de cuidado.")}
  <p>Para o banho, o <a href="https://paginas.acqualive.com.br/shower-care" target="_blank">Shower Care Acqualive</a> ajuda a reduzir o cloro da água do chuveiro.</p>
${CTA_FINAL("Pele bonita", "começa no copo")}`,
  related: [
    ["Receitas que mudam com a água", R("receitas-cafe-cha-agua-alcalina")],
    ["Cloro na água: a linha do tempo", R("cloro-na-agua-historia-e-cuidados")],
  ],
});

// 47. Home office: agenda horaria
const a47 = make({
  slug: "agenda-hidratacao-home-office",
  title: "A agenda da hidratação no home office: o que beber, e quando, das 7h às 19h",
  metaTitle: "Hidratação no Home Office: Agenda do Dia | Acqualive",
  desc: "Uma agenda hora a hora para quem trabalha em casa lembrar de beber água, manter o foco e fechar o dia com energia.",
  keywords: "hidratação home office, beber agua trabalhando, rotina de agua, foco e hidratação, Acqualive",
  badge: "AGENDA DO DIA",
  h1: "A agenda da hidratação <span>no home office</span>",
  sub: "Em casa, a cozinha está perto, mas a gente esquece. Esta agenda cabe em qualquer rotina.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "4 min",
  img: "home-office-agua.jpg",
  alt: "Mesa de home office com notebook, planta e um copo grande de água sob luz da manhã",
  answer: "distribua a água em âncoras: um copo ao acordar, um a cada reunião ou bloco de trabalho, um antes de cada refeição e um no fim do expediente. Assim, você chega a 2 litros sem pensar.",
  faq: [
    ["Como lembrar de beber água trabalhando?", "Associe a água a eventos que já acontecem: início de reunião, pausa do café, antes das refeições."],
    ["Beber água ajuda na concentração?", "Sim. Pequenas perdas de água já afetam atenção e memória, e manter a hidratação ajuda o foco ao longo do dia."],
    ["Quantos copos por hora?", "Cerca de um copo a cada hora de trabalho é uma boa referência para a maioria das pessoas."],
  ],
  body: `
  <div class="fx-agenda">
${[
  ["7h", "Ao acordar", "Um copo grande antes do café. O corpo passou a noite sem água."],
  ["8h30", "Primeiro bloco", "Garrafa cheia na mesa. Ela é o seu lembrete visual."],
  ["10h", "Pausa", "Levante, alongue e encha a garrafa na cozinha."],
  ["11h30", "Antes do almoço", "Um copo de água. Ajuda a perceber a fome real."],
  ["14h", "Queda de energia", "Antes do segundo café, tente um copo de água."],
  ["15h30", "Reunião longa", "Copo ao lado do teclado, goles durante a conversa."],
  ["17h", "Última hora", "Hora de conferir: a garrafa foi esvaziada duas vezes?"],
  ["19h", "Fim do dia", "Um copo ao fechar o notebook. Jantar e descanso com o corpo em dia."],
]
  .map(([h, t, d]) => `    <div class="fx-slot"><div class="fx-h">${h}</div><div><strong>${t}.</strong> ${d}</div></div>`)
  .join("\n")}
  </div>
${MID_CTA("Encher a garrafa fica mais fácil com água alcalina e fresquinha na torneira da cozinha.")}
${CTA_FINAL("Mais foco,", "um copo de cada vez")}`,
  related: [
    ["Os 8 sinais silenciosos da desidratação", R("sinais-desidratacao-cor-da-urina")],
    ["Água na empresa: produtividade e economia", R("agua-na-empresa-produtividade-e-economia")],
  ],
});

// 48. Empresa: numero em destaque + simulador
const a48 = make({
  slug: "agua-na-empresa-produtividade-e-economia",
  title: "Água na empresa: como a hidratação da equipe se conecta a produtividade e economia",
  metaTitle: "Água na Empresa: Produtividade e Economia com Purificador | Acqualive",
  desc: "Hidratação afeta atenção, humor e energia. Veja o impacto da água no trabalho, simule a economia de trocar galões por purificador e conheça o Acqualive DUO.",
  keywords: "agua na empresa, purificador para empresa, galao empresa custo, produtividade hidratação, acqualive duo, Acqualive empresas",
  badge: "PARA EMPRESAS",
  h1: "Água na empresa: <span>produtividade e economia</span> no mesmo copo",
  sub: "Um número para lembrar, um simulador para a sua equipe e uma solução que cabe na copa.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "5 min",
  img: "agua-empresa-produtividade.jpg",
  alt: "Colaboradores enchendo copos de água em purificador na copa de um escritório moderno",
  answer: "equipes bem hidratadas mantêm atenção e energia por mais tempo. Trocar galões por purificador reduz o custo do litro de cerca de R$ 0,95 para a partir de R$ 0,17, cálculo baseado na troca de refis, além de liberar espaço e logística.",
  faq: [
    ["Quanto uma empresa economiza trocando galão por purificador?", "Com o litro do galão a R$ 0,95 e o do Acqualive a partir de R$ 0,17, uma equipe que consome 40 litros por dia economiza mais de R$ 11 mil por ano."],
    ["Hidratação afeta a produtividade?", "Sim. Pequenas perdas de água já afetam atenção, memória de curto prazo e humor."],
    ["Qual purificador Acqualive é indicado para empresas?", "O Acqualive DUO, com água alcalina, mineralizada e na temperatura natural ou fresquinha, pensado para copas e recepções."],
  ],
  body: `
  <div style="text-align:center;margin:30px 0">
    <div class="fx-big">82%</div>
    <p style="max-width:520px;margin:0 auto;color:#40546b">de economia no custo por litro ao trocar o galão (R$ 0,95) pelo Acqualive (a partir de R$ 0,17*).</p>
    <p style="font-size:12px;color:#8a97a8">*Cálculo baseado no valor da troca de refis.</p>
  </div>
  <div class="fx-box">
    <h3>Simule na sua empresa</h3>
    <div class="fx-row"><label for="n48">Colaboradores</label><input id="n48" type="range" min="5" max="200" value="20"><span id="v48" style="font-weight:800;color:#1460b6">20</span></div>
    <div class="fx-out" id="o48"></div>
  </div>
  <script>(function(){var r=document.getElementById('n48');function f(n){return n.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0})}function u(){var n=+r.value;document.getElementById('v48').textContent=n;var l=n*2*22*12;var e=l*(0.95-0.17);document.getElementById('o48').innerHTML='Consumo estimado: '+l.toLocaleString('pt-BR')+' litros por ano<br>Economia estimada: <strong>'+f(e)+' por ano</strong><br><small>Considera 2 litros por pessoa em 22 dias úteis por mês.</small>';}r.addEventListener('input',u);u();})();</script>
  <h2>O que muda na rotina</h2>
  <div class="fx-cards">
    <div class="fx-c"><b>Sem logística</b>Nada de pedir, receber e estocar galões.</div>
    <div class="fx-c"><b>Mais espaço</b>A copa ganha o canto que era dos cascos.</div>
    <div class="fx-c"><b>Cuidado visível</b>Água alcalina é um benefício que a equipe percebe todos os dias.</div>
  </div>
  <div class="mid-cta">
    <p>Conheça o Acqualive DUO para empresas: 10x de R$ 439,70 sem juros.</p>
    <a href="https://paginas.acqualive.com.br/acqualive-duo-empresas" target="_blank" rel="noopener">Ver soluções para empresas →</a>
  </div>
${CTA_FINAL("Equipe hidratada,", "empresa mais leve")}`,
  related: [
    ["Galão ou purificador? A conta do custo por litro", R("galao-ou-purificador-custo-por-litro")],
    ["A agenda da hidratação no home office", R("agenda-hidratacao-home-office")],
  ],
});

// 49. Pets
const a49 = make({
  slug: "agua-para-pets-no-calor",
  title: "Água para cães e gatos no calor: quanto oferecer, sinais de alerta e cuidados com o pote",
  metaTitle: "Água para Pets no Calor: Quanto Oferecer e Cuidados | Acqualive",
  desc: "Na onda de calor, os pets também precisam de mais água. Veja quanto oferecer por peso, os sinais de alerta e como manter o pote sempre limpo e convidativo.",
  keywords: "agua para cachorro, agua para gato, pet calor, quanto agua cachorro bebe, pote de agua pet, Acqualive",
  badge: "PARA TUTORES",
  h1: "Água para cães e gatos <span>no calor</span>",
  sub: "Eles não pedem com palavras. Veja como garantir que a família de quatro patas também passe bem pela onda de calor.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "4 min",
  img: "agua-pets-calor.jpg",
  alt: "Golden retriever bebendo água de um pote de inox em cozinha ensolarada",
  answer: "cães e gatos precisam, em média, de 50 a 60 ml de água por quilo por dia, com mais em dias quentes. Pote limpo, água trocada várias vezes ao dia e sem gosto de cloro ajudam o pet a beber mais.",
  faq: [
    ["Quanta água um cachorro precisa por dia?", "Em média, de 50 a 60 ml por quilo. Um cão de 20 kg precisa de cerca de 1 a 1,2 litro, com mais no calor."],
    ["Gato bebe pouca água, é normal?", "Gatos têm baixa sensação de sede. Fontes de água corrente, vários potes pela casa e alimentação úmida ajudam."],
    ["Posso dar água purificada ao meu pet?", "Sim. Água purificada, sem cloro e fresquinha é bem aceita pelos pets. Consulte o veterinário em casos de doença renal."],
  ],
  body: `
  <div class="fx-box">
    <h3>Quanto o seu pet precisa</h3>
    <div class="fx-row"><label for="p49">Peso do pet (kg)</label><input id="p49" type="number" value="10" min="1" max="80"></div>
    <div class="fx-out" id="o49"></div>
  </div>
  <script>(function(){var i=document.getElementById('p49');function u(){var p=parseFloat(i.value)||0;var a=(p*50/1000).toFixed(1).replace('.',','),b=(p*60/1000).toFixed(1).replace('.',',');document.getElementById('o49').innerHTML='Entre <strong>'+a+' e '+b+' litros por dia</strong>. Em dias de calor, ofereça um pouco mais.';}i.addEventListener('input',u);u();})();</script>
  <h2>Sinais de alerta</h2>
  <div class="danger-box">Respiração muito ofegante, gengiva seca, apatia, vômito ou língua muito vermelha pedem sombra, água e contato com o veterinário.</div>
  <h2>O pote ideal</h2>
  <ol class="fx-steps">
    <li>Inox ou cerâmica, fáceis de lavar e sem gosto.</li>
    <li>Água trocada pelo menos duas vezes ao dia.</li>
    <li>Pote na sombra e longe da comida.</li>
    <li>Mais de um ponto de água pela casa, principalmente para gatos.</li>
  </ol>
${MID_CTA("Água purificada, sem cloro e fresquinha para toda a família, inclusive a de quatro patas.")}
${CTA_FINAL("Toda a família", "bem hidratada")}`,
  related: [
    ["Onda de calor: o guia de hidratação", R("onda-de-calor-primavera-2026-hidratacao")],
    ["Garrafa esquecida no carro quente", R("garrafa-de-agua-no-carro-calor-microplasticos")],
  ],
});

// 50. Plastico: contador sustentavel
const a50 = make({
  slug: "quanto-plastico-familia-deixa-de-usar",
  title: "Quanto plástico a sua família deixa de usar em um ano ao trocar garrafas por purificador",
  metaTitle: "Quanto Plástico Sua Família Economiza com Purificador | Acqualive",
  desc: "Calcule quantas garrafas plásticas a sua família deixa de consumir por ano e entenda o impacto em resíduos e microplásticos.",
  keywords: "reduzir plastico, garrafas plasticas por ano, sustentabilidade agua, purificador sustentavel, microplasticos, Acqualive",
  badge: "CONTADOR",
  h1: "Quanto plástico <span>a sua família deixa de usar</span> em um ano",
  sub: "Coloque o número de pessoas da casa e veja o contador subir. É o impacto de uma escolha simples.",
  date: "2026-09-28",
  dateLabel: "28 set 2026",
  read: "4 min",
  img: "plastico-familia-ano.jpg",
  alt: "Pilha de garrafas plásticas vazias ao lado de uma garrafa de vidro reutilizável",
  answer: "uma família de 4 pessoas que bebe 2 litros por pessoa por dia em garrafas de 1,5 litro usa cerca de 1.950 garrafas por ano. Com um purificador, esse número cai para praticamente zero, reduzindo resíduos e a exposição a microplásticos.",
  faq: [
    ["Quantas garrafas plásticas uma família usa por ano?", "Uma família de 4 pessoas, bebendo 2 litros cada por dia em garrafas de 1,5 L, usa cerca de 1.950 garrafas por ano."],
    ["Purificador ajuda a reduzir microplásticos?", "Sim. Ao deixar de beber água de garrafas plásticas, você reduz uma das principais fontes de exposição a micro e nanoplásticos."],
    ["E o refil, não é plástico também?", "O refil é trocado periodicamente e representa uma fração mínima do plástico de milhares de garrafas."],
  ],
  body: `
  <div class="fx-box" style="text-align:center">
    <h3>Pessoas na sua casa</h3>
    <div class="fx-row" style="justify-content:center"><input id="n50" type="range" min="1" max="8" value="4" style="max-width:320px"><span id="v50" style="font-weight:800;color:#1460b6">4</span></div>
    <div class="fx-big" id="g50">0</div>
    <p style="margin:0;color:#40546b">garrafas de 1,5 litro a menos por ano</p>
    <p id="k50" style="font-weight:700;color:#12304f"></p>
  </div>
  <script>(function(){var r=document.getElementById('n50'),g=document.getElementById('g50'),t;function u(){var n=+r.value;document.getElementById('v50').textContent=n;var alvo=Math.round(n*2*365/1.5),c=0;clearInterval(t);t=setInterval(function(){c+=Math.ceil(alvo/40);if(c>=alvo){c=alvo;clearInterval(t);}g.textContent=c.toLocaleString('pt-BR');},20);document.getElementById('k50').textContent='Cerca de '+Math.round(alvo*0.03)+' kg de plástico a menos';}r.addEventListener('input',u);u();})();</script>
  <p style="font-size:13px;color:#6b7a8d">Estimativa com 2 litros por pessoa por dia e garrafa de cerca de 30 g.</p>
  <h2>Três impactos de uma escolha</h2>
  <div class="fx-cards">
    <div class="fx-c"><b>Menos resíduo</b>Milhares de garrafas a menos no lixo da sua casa.</div>
    <div class="fx-c"><b>Menos microplástico</b>Menos exposição a partículas que se desprendem das garrafas.</div>
    <div class="fx-c"><b>Menos esforço</b>Sem carregar fardos do mercado até a cozinha.</div>
  </div>
${MID_CTA("Água alcalina direto da torneira, sem garrafas e sem galão.")}
${CTA_FINAL("Menos plástico,", "mais saúde e bem-estar")}`,
  related: [
    ["Garrafa esquecida no carro quente", R("garrafa-de-agua-no-carro-calor-microplasticos")],
    ["Galão ou purificador? A conta do custo por litro", R("galao-ou-purificador-custo-por-litro")],
  ],
});

export const SERIE_PRIMAVERA_ARTICLES = [
  a31, a32, a33, a34, a35, a36, a37, a38, a39, a40,
  a41, a42, a43, a44, a45, a46, a47, a48, a49, a50,
];
