// Artigos 6-10 do blog Acqualive
// Imagens públicas em https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/ servidas via origin do site

const SHARED_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #fafbfc;
    color: #18181b;
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
  }
  .article-header {
    background: #08101e;
    padding: 64px 24px 0;
    position: relative;
    overflow: hidden;
  }
  .article-header::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background:
      radial-gradient(ellipse at 20% 100%, rgba(59,130,246,0.12) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 0%, rgba(6,182,212,0.08) 0%, transparent 50%);
  }
  .header-inner {
    position: relative; z-index: 1;
    max-width: 720px; margin: 0 auto;
    text-align: center;
    padding-bottom: 48px;
  }
  .badge {
    display: inline-block;
    background: rgba(59,130,246,0.12);
    border: 1px solid rgba(59,130,246,0.25);
    color: #93c5fd;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    padding: 6px 18px;
    border-radius: 100px;
    margin-bottom: 24px;
  }
  .article-header h1 {
    font-size: clamp(28px, 5vw, 48px);
    font-weight: 900;
    color: #ffffff;
    line-height: 1.15;
    margin-bottom: 18px;
    letter-spacing: -0.02em;
  }
  .article-header h1 span { color: #60a5fa; }
  .header-desc {
    font-size: 17px;
    color: #94a3b8;
    max-width: 560px;
    margin: 0 auto;
    line-height: 1.7;
  }
  .header-meta {
    margin-top: 24px;
    font-size: 13px;
    color: #475569;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .header-meta span { color: #93c5fd; font-weight: 600; }
  .hero-img-wrap {
    position: relative;
    z-index: 2;
    max-width: 860px;
    margin: 0 auto;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    box-shadow: 0 -10px 40px rgba(0,0,0,0.3);
  }
  .hero-img-wrap img { display: block; width: 100%; height: auto; }
  main.article-body {
    max-width: 720px;
    margin: -40px auto 0;
    padding: 56px 24px 80px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(15,23,42,0.06);
    position: relative;
    z-index: 3;
  }
  main.article-body p {
    font-size: 17px;
    color: #3f3f46;
    margin-bottom: 22px;
    line-height: 1.85;
  }
  main.article-body h2 {
    font-size: 28px;
    font-weight: 800;
    color: #0f172a;
    margin: 48px 0 20px;
    line-height: 1.25;
    letter-spacing: -0.01em;
    position: relative;
    padding-left: 18px;
  }
  main.article-body h2::before {
    content: '';
    position: absolute;
    left: 0; top: 8px;
    width: 4px; height: calc(100% - 16px);
    background: linear-gradient(180deg, #2563eb, #06b6d4);
    border-radius: 4px;
  }
  main.article-body h3 {
    font-size: 21px;
    font-weight: 700;
    color: #1e293b;
    margin: 32px 0 14px;
  }
  main.article-body a {
    color: #2563eb;
    text-decoration: none;
    border-bottom: 1px solid rgba(37,99,235,0.3);
    transition: all 0.2s;
  }
  main.article-body a:hover { border-bottom-color: #2563eb; }
  main.article-body strong { color: #0f172a; font-weight: 700; }
  main.article-body ul, main.article-body ol {
    padding-left: 24px;
    margin-bottom: 24px;
  }
  main.article-body li {
    font-size: 17px;
    color: #3f3f46;
    margin-bottom: 10px;
    line-height: 1.75;
  }
  .article-img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 14px;
    margin: 36px 0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }
  .article-img + em {
    display: block;
    text-align: center;
    font-size: 13px;
    color: #71717a;
    margin: -24px 0 36px;
    font-style: italic;
  }
  .quote {
    font-size: 22px;
    font-weight: 600;
    color: #0f172a;
    line-height: 1.45;
    padding: 28px 0 28px 28px;
    margin: 36px 0;
    border-left: 4px solid #2563eb;
    background: linear-gradient(90deg, #eff6ff 0%, transparent 100%);
    border-radius: 0 12px 12px 0;
    font-style: italic;
  }
  .info-box {
    background: linear-gradient(135deg, #eff6ff, #f0f9ff);
    border: 1px solid #bfdbfe;
    border-left: 4px solid #2563eb;
    border-radius: 0 16px 16px 0;
    padding: 24px 28px;
    margin: 32px 0;
  }
  .info-box h4 {
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #1d4ed8;
    margin-bottom: 10px;
  }
  .info-box p { color: #1e3a8a; margin: 0; font-size: 15px; line-height: 1.7; }
  .danger-box {
    background: linear-gradient(135deg, #fef2f2, #fff1f2);
    border: 1px solid #fecaca;
    border-left: 4px solid #ef4444;
    border-radius: 0 16px 16px 0;
    padding: 24px 28px;
    margin: 32px 0;
  }
  .danger-box h4 {
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #dc2626;
    margin-bottom: 10px;
  }
  .danger-box p { color: #7f1d1d; margin: 0; font-size: 15px; }
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    margin: 36px 0;
  }
  .stat-card {
    background: #020617;
    border-radius: 16px;
    padding: 28px 20px;
    text-align: center;
  }
  .stat-number {
    font-size: 36px;
    font-weight: 900;
    background: linear-gradient(135deg, #60a5fa, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
    margin-bottom: 6px;
  }
  .stat-label { font-size: 13px; color: #94a3b8; line-height: 1.4; }
  .toc {
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    padding: 32px 36px;
    margin-bottom: 56px;
    box-shadow: 0 4px 24px rgba(15,23,42,0.06);
    position: relative;
    overflow: hidden;
  }
  .toc::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2563eb 0%, #06b6d4 100%);
  }
  .toc-title {
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #2563eb;
    margin-bottom: 20px;
  }
  .toc ol {
    padding-left: 0;
    list-style: none;
    counter-reset: toc-counter;
    display: grid;
    gap: 4px;
  }
  .toc li { counter-increment: toc-counter; }
  .toc li a {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 12px 14px;
    border-radius: 10px;
    font-size: 14.5px;
    font-weight: 600;
    color: #334155;
    text-decoration: none;
    border: 1px solid transparent;
  }
  .toc li a::before {
    content: counter(toc-counter, decimal-leading-zero);
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 800;
    color: #2563eb;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 6px;
    padding: 3px 8px;
    line-height: 1.3;
    min-width: 32px;
    text-align: center;
  }
  .toc li a:hover {
    background: #eff6ff;
    color: #1d4ed8;
    border-color: #bfdbfe;
  }
  .cta-section {
    background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%);
    border: 1px solid #bfdbfe;
    border-radius: 24px;
    padding: 56px 36px;
    text-align: center;
    margin: 64px 0 32px;
    position: relative;
    overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2563eb 0%, #06b6d4 100%);
  }
  .cta-section h2 {
    color: #0f172a;
    margin: 0 0 14px;
    font-size: 28px;
    position: relative;
    padding-left: 0;
  }
  .cta-section h2::before { display: none; }
  .cta-section h2 span { color: #2563eb; }
  .cta-section p {
    color: #334155;
    font-size: 16px;
    margin-bottom: 32px;
    position: relative;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }
  .cta-button {
    display: inline-block !important;
    background: linear-gradient(135deg, #2563eb, #1d4ed8) !important;
    color: #ffffff !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    padding: 18px 40px !important;
    border-radius: 14px !important;
    text-decoration: none !important;
    box-shadow: 0 4px 28px rgba(37,99,235,0.4) !important;
    border: none;
  }
  .mid-cta {
    background: #ffffff !important;
    border: 1px solid #bfdbfe !important;
    border-radius: 16px !important;
    padding: 24px 28px !important;
    margin: 40px 0;
    text-align: center;
  }
  .mid-cta p { color: #1d4ed8 !important; font-weight: 600 !important; margin-bottom: 14px !important; font-size: 15px !important; }
  .mid-cta a {
    display: inline-block !important;
    background: #2563eb !important;
    color: #ffffff !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    padding: 12px 28px !important;
    border-radius: 10px !important;
    text-decoration: none !important;
    border: none;
  }
  .related-links {
    background: #f8fafc;
    border-radius: 16px;
    padding: 28px;
    margin: 48px 0;
  }
  .related-links h4 {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #64748b;
    margin-bottom: 16px;
    font-weight: 800;
  }
  .related-links ul { list-style: none; padding: 0; margin: 0; }
  .related-links li { margin-bottom: 10px; padding: 0; }
  .related-links li::before { display: none; }
  .related-links a {
    color: #1e293b;
    font-weight: 600;
    font-size: 15px;
    border: none;
    text-decoration: none;
  }
  .related-links a:hover { color: #2563eb; }
  ul.check-list { list-style: none; padding: 0; margin: 20px 0; }
  ul.check-list li {
    padding: 8px 0 8px 30px;
    position: relative;
    font-size: 16px;
    color: #3f3f46;
    line-height: 1.7;
  }
  ul.check-list li::before {
    content: '\\2713';
    position: absolute;
    left: 0;
    color: #2563eb;
    font-weight: 700;
    font-size: 16px;
  }
  @media (max-width: 600px) {
    main.article-body { padding: 40px 20px 60px; }
    main.article-body h2 { font-size: 24px; }
    .cta-section { padding: 40px 24px; }
  }
`;

const wrap = (head: string, body: string) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
${head}
<style>${SHARED_CSS}</style>
</head>
<body>
${body}
</body>
</html>`;

// ============================================================
// ARTIGO 6 — Microplásticos no cérebro
// ============================================================
const article6 = {
  title: "Microplásticos no cérebro: o que ninguém te contou sobre a água que você bebe",
  slug: "microplasticos-no-cerebro",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Microplásticos no Cérebro: O Que Ninguém Te Contou Sobre Sua Água | Acqualive</title>
<meta name="description" content="Estudo da Nature 2025 revelou níveis alarmantes de microplásticos no cérebro humano. Descubra de onde vêm, o que fazem com sua saúde e como reduzir a exposição a partir da água que você bebe.">
<meta name="keywords" content="microplásticos no cérebro, microplásticos água, microplásticos saúde, água com plástico, filtro de água microplásticos, contaminação água torneira, Acqualive, água alcalina">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/microplasticos-no-cerebro/">
<meta property="og:title" content="Microplásticos no Cérebro: O Que Ninguém Te Contou">
<meta property="og:description" content="Cientistas encontraram o equivalente a uma colher de plástico no cérebro humano. Entenda de onde vem e o que fazer.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/cerebro-microplasticos.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Microplásticos no Cérebro: O Que Ninguém Te Contou Sobre a Água Que Você Bebe","description":"Estudo da Nature 2025 revelou níveis alarmantes de microplásticos em cérebros humanos. Descubra a relação com a água que bebemos e como reduzir a exposição.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive","logo":{"@type":"ImageObject","url":"https://blog.acqualive.com.br/images/logo.png"}},"datePublished":"2026-04-20","dateModified":"2026-04-20","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/cerebro-microplasticos.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Microplásticos realmente entram no cérebro humano?","acceptedAnswer":{"@type":"Answer","text":"Sim. Um estudo publicado na Nature Medicine em 2025 analisou cérebros humanos e encontrou microplásticos e nanoplásticos em concentrações até 30 vezes maiores que as encontradas no fígado e nos rins, o equivalente a uma colher de chá de plástico no tecido cerebral."}},
{"@type":"Question","name":"De onde vêm os microplásticos que ingerimos?","acceptedAnswer":{"@type":"Answer","text":"As principais fontes são água engarrafada (até 240 mil partículas por litro segundo estudo da Universidade de Columbia), água da torneira não filtrada, embalagens plásticas, sal marinho, alimentos processados e ar contaminado em ambientes fechados."}},
{"@type":"Question","name":"Como reduzir a exposição a microplásticos pela água?","acceptedAnswer":{"@type":"Answer","text":"A forma mais eficaz é substituir a água engarrafada por água filtrada de qualidade. Purificadores com múltiplas etapas de filtração, como o Acqualive, retêm partículas microscópicas, cloro e contaminantes, oferecendo água pura, alcalina e sem plástico."}},
{"@type":"Question","name":"Filtro de barro retém microplásticos?","acceptedAnswer":{"@type":"Answer","text":"O filtro de barro tradicional não foi projetado para reter microplásticos. Sua porosidade é maior que o tamanho dessas partículas. Um purificador moderno como o Acqualive utiliza tecnologia de filtragem que vai além da remoção visual de impurezas."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">SAÚDE • CIÊNCIA</span>
    <h1>Microplásticos no <span>cérebro</span>: o que ninguém te contou sobre a água que você bebe</h1>
    <p class="header-desc">Pesquisadores encontraram o equivalente a uma colher de plástico em cérebros humanos. E grande parte vem do copo d'água do seu dia.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>20 abr 2026</span><span>•</span><span>9 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/cerebro-microplasticos.jpg" alt="Cérebro humano translúcido com fragmentos de microplásticos coloridos visíveis em seu interior, representando a contaminação descoberta pelo estudo Nature 2025" width="860" height="500" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Você bebe água achando que está fazendo bem para o corpo. E está. Mas há uma pergunta que pouca gente faz: <strong>o que mais está entrando junto com essa água?</strong></p>

  <p>Em fevereiro de 2025, a revista científica <a href="https://www.nature.com/articles/s41591-024-03453-1" target="_blank" rel="noopener">Nature Medicine publicou um estudo</a> que viralizou no mundo inteiro. Cientistas analisaram cérebros humanos e encontraram microplásticos em quantidade alarmante. Para se ter ideia, o tecido cerebral acumula <strong>até 30 vezes mais plástico</strong> do que o fígado ou os rins. O equivalente, segundo os pesquisadores, a uma colher de chá de plástico dentro da sua cabeça.</p>

  <div class="quote">"Não estamos mais falando de poluição lá fora. Estamos falando de poluição dentro de nós." — Dr. Matthew Campen, autor principal do estudo Nature 2025</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#descoberta">A descoberta que assustou cientistas</a></li>
      <li><a href="#agua">A água como principal porta de entrada</a></li>
      <li><a href="#corpo">O que os microplásticos fazem no corpo</a></li>
      <li><a href="#torneira">A torneira é mais segura que a garrafa?</a></li>
      <li><a href="#reduzir">Como reduzir a exposição hoje</a></li>
      <li><a href="#solucao">A solução está no que filtra a sua água</a></li>
    </ol>
  </nav>

  <h2 id="descoberta">A descoberta que assustou cientistas</h2>
  <p>Por décadas, microplásticos eram um problema de oceano e tartaruga marinha. Em 2024, virou problema de coração. Em 2025, virou problema de cérebro.</p>

  <p>O estudo <a href="https://www.nature.com/articles/s41591-024-03453-1" target="_blank" rel="noopener">"Bioaccumulation of microplastics in decedent human brains"</a> analisou amostras de cérebros coletadas em 2016 e em 2024. Resultado: a concentração de plástico no tecido cerebral aumentou cerca de 50% em apenas oito anos. Pessoas com demência apresentaram níveis ainda mais altos.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">240 mil</div><div class="stat-label">partículas de plástico por litro em garrafas de água (Universidade de Columbia)</div></div>
    <div class="stat-card"><div class="stat-number">30x</div><div class="stat-label">mais plástico no cérebro do que no fígado e rins</div></div>
    <div class="stat-card"><div class="stat-number">+50%</div><div class="stat-label">aumento da contaminação cerebral entre 2016 e 2024</div></div>
  </div>

  <p>O que assusta não é só a quantidade. É a velocidade.</p>

  <h2 id="agua">A água como principal porta de entrada</h2>
  <p>Comer um morango contaminado é uma coisa. Beber dois litros de água por dia, todos os dias, durante a vida inteira, é outra. A água é, hoje, a maior fonte de microplásticos no organismo humano.</p>

  <p>Pesquisadores da <a href="https://www.em.com.br/emfoco/2026/02/02/estudo-revela-240-mil-fragmentos-de-plastico-por-litro-em-garrafa-de-agua-e-o-que-isso-pode-causar-no-seu-corpo-assusta/" target="_blank" rel="noopener">Universidade de Columbia detectaram cerca de 240 mil fragmentos de plástico por litro</a> em uma garrafa de água mineral comum. A maioria invisível a olho nu, do tamanho de nanopartículas, capazes de atravessar a barreira hematoencefálica e se alojar no cérebro.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-natureza.jpg" alt="Purificador Acqualive em cozinha moderna com plantas, alternativa segura à água engarrafada" class="article-img" loading="lazy" width="1200" height="800">
  <em>Trocar a garrafa plástica por um purificador na cozinha é a primeira mudança real.</em>

  <div class="danger-box">
    <h4>O dado que muda tudo</h4>
    <p>Quem consome a quantidade de água diária recomendada apenas em garrafas plásticas pode ingerir o equivalente a um cartão de crédito de plástico por semana, segundo a WWF.</p>
  </div>

  <h2 id="corpo">O que os microplásticos fazem no corpo</h2>
  <p>A ciência ainda está mapeando, mas as evidências são preocupantes:</p>

  <ul class="check-list">
    <li><strong>Inflamação crônica:</strong> partículas plásticas ativam respostas imunes constantes, criando o ambiente perfeito para doenças.</li>
    <li><strong>Distúrbios hormonais:</strong> aditivos como BPA e ftalatos imitam hormônios e desregulam tireoide, fertilidade e humor.</li>
    <li><strong>Risco cardiovascular:</strong> estudo italiano de 2024 mostrou que pessoas com microplásticos nas artérias tiveram <strong>quatro vezes mais infartos e AVCs</strong>.</li>
    <li><strong>Possível ligação com demência:</strong> os altos níveis encontrados em cérebros de pacientes com Alzheimer levantaram a hipótese.</li>
  </ul>

  <div class="mid-cta">
    <p>Cada gole de água é uma escolha. Comece a sua troca hoje.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o purificador Acqualive →</a>
  </div>

  <h2 id="torneira">A torneira é mais segura que a garrafa?</h2>
  <p>Em alguns aspectos, sim. A água da torneira contém menos microplásticos que a engarrafada, simplesmente porque não passou meses dentro de uma embalagem plástica esquentando no caminhão. Mas torneira no Brasil <a href="https://blog.acqualive.com.br/agua-da-torneira-segura-brasil/" target="_blank">tem outros problemas sérios</a>: cloro, trihalometanos, metais pesados, sedimentos das tubulações antigas e, ocasionalmente, a própria contaminação por microplásticos vinda das estações de tratamento.</p>

  <p>A <a href="https://www.nationalgeographicbrasil.com/ciencia/2025/01/e-seguro-tomar-agua-da-torneira-aqui-o-que-diz-a-ciencia" target="_blank" rel="noopener">National Geographic publicou um especial</a> em 2025 mostrando que mesmo a água tratada não é "água perfeita". O tratamento convencional não foi desenhado para microplásticos.</p>

  <h2 id="reduzir">Como reduzir a exposição hoje</h2>
  <p>Você não vai zerar o problema, mas pode cortar a maior parte dele com mudanças simples:</p>

  <ul class="check-list">
    <li>Substitua a garrafa plástica por garrafas de vidro ou inox.</li>
    <li>Não esquente comida em pote plástico no micro-ondas.</li>
    <li>Evite chá em saquinhos brancos colados (alguns liberam bilhões de partículas).</li>
    <li>Beba <strong>água filtrada de verdade</strong>, com tecnologia que vai além de prender o cloro.</li>
  </ul>

  <h2 id="solucao">A solução está no que filtra a sua água</h2>
  <p>Filtro de barro tem tradição, mas não foi feito para microplásticos. A porosidade do barro é maior que as partículas que precisamos reter. <a href="https://blog.acqualive.com.br/qual-o-melhor-filtro-de-agua/" target="_blank">Por isso o filtro de barro perde para o purificador moderno</a> em todos os critérios técnicos.</p>

  <p>O <strong>Purificador Acqualive</strong> trabalha com múltiplas etapas de filtragem, retém partículas microscópicas, remove cloro e ainda alcaliniza naturalmente a água com magnésio. É a evolução do filtro de barro, sem perder a essência do que torna a água verdadeiramente fresca.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-moderna.png" alt="Purificador Acqualive transparente em cozinha contemporânea, oferecendo água pura sem microplásticos" class="article-img" loading="lazy" width="1080" height="1350">

  <div class="info-box">
    <h4>Por que escolher Acqualive</h4>
    <p>Filtra cloro, trihalometanos, partículas e contaminantes. Alcaliniza a água naturalmente com magnésio. Sem eletricidade. Sem garrafas plásticas. Sem microplásticos no seu copo.</p>
  </div>

  <div class="cta-section">
    <h2>Sua família merece água <span>de verdade</span></h2>
    <p>Tire as garrafas plásticas da sua casa. Tenha água pura, alcalina e segura, direto na sua cozinha, todos os dias.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 7 — Água da torneira no Brasil
// ============================================================
const article7 = {
  title: "Água da torneira no Brasil é segura? O que dizem os dados oficiais (e o que ninguém te conta)",
  slug: "agua-da-torneira-segura-brasil",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Água da Torneira no Brasil é Segura? Dados Oficiais 2026 | Acqualive</title>
<meta name="description" content="Pesquisas mostram que mais de 6 mil municípios brasileiros tiveram água com algum contaminante. Saiba se a água da sua torneira é segura, o que ela carrega e como filtrar de verdade.">
<meta name="keywords" content="água da torneira segura, água tratada Brasil, contaminação água torneira, qualidade água Sabesp, mapa da água, filtrar água torneira, Acqualive, purificador de água">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/agua-da-torneira-segura-brasil/">
<meta property="og:title" content="Água da Torneira no Brasil é Segura?">
<meta property="og:description" content="Os dados oficiais que mostram a verdade sobre a água que sai da sua torneira e o que fazer agora.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-agua-comum-ou-alcalina.png">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Água da torneira no Brasil é segura? O que dizem os dados oficiais","description":"Análise dos dados oficiais sobre a qualidade da água da torneira no Brasil, contaminantes mais comuns e como se proteger.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-04-20","dateModified":"2026-04-20","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-agua-comum-ou-alcalina.png"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"A água da torneira no Brasil é segura para beber?","acceptedAnswer":{"@type":"Answer","text":"A água tratada atende aos padrões mínimos de potabilidade, mas o Mapa da Água da Repórter Brasil mostrou que mais de 6 mil municípios apresentaram amostras com contaminantes acima do desejável, incluindo agrotóxicos, metais pesados e subprodutos do cloro. Filtrar é fortemente recomendado."}},
{"@type":"Question","name":"O que pode estar na água da minha torneira?","acceptedAnswer":{"@type":"Answer","text":"Cloro residual, trihalometanos (subprodutos do cloro associados a câncer), agrotóxicos, metais pesados como chumbo vindos das tubulações antigas, sedimentos, e em alguns casos microplásticos. A composição depende da estação de tratamento e do trajeto até sua casa."}},
{"@type":"Question","name":"Por que a água às vezes tem cheiro ou cor diferente?","acceptedAnswer":{"@type":"Answer","text":"Variações de cheiro, cor ou sabor indicam excesso de cloro, presença de matéria orgânica ou problemas na rede de distribuição. Em 2025, várias regiões de São Paulo registraram episódios de água escura e com cheiro forte saindo das torneiras."}},
{"@type":"Question","name":"Vale mais a pena água engarrafada ou filtrada?","acceptedAnswer":{"@type":"Answer","text":"Filtrada. A água engarrafada pode conter centenas de milhares de partículas de microplástico por litro, gera lixo plástico e custa muito mais a longo prazo. Um purificador como o Acqualive entrega água pura, alcalina e mineralizada com custo por litro infinitamente menor."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">SAÚDE PÚBLICA</span>
    <h1>A água da torneira <span>é segura</span> mesmo?</h1>
    <p class="header-desc">Os dados oficiais brasileiros, as denúncias recentes e o que ninguém te conta sobre o que sai da sua pia todos os dias.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>20 abr 2026</span><span>•</span><span>10 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-agua-comum-ou-alcalina.png" alt="Cozinha moderna com torneira de inox e Purificador Acqualive Terracota ao lado, escolha entre água comum ou água alcalina" width="860" height="1080" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Você abre a torneira, enche o copo, bebe. Pronto, mais um dia. Mas a Sabesp recebeu, só em 2025, uma série de denúncias de moradores da zona oeste de São Paulo reclamando de água com cheiro forte, gosto alterado e cor escura saindo da torneira. <a href="https://cbn.globo.com/sao-paulo/noticia/2025/12/03/moradores-da-zona-oeste-de-sa-paulo-denunciam-agua-fornecida-pela-sabesp-com-gosto-e-cheiro-alterados.ghtml" target="_blank" rel="noopener">A reportagem da CBN</a> não foi um caso isolado.</p>

  <p>A pergunta que precisa ser feita: <strong>água tratada é mesmo sinônimo de água segura?</strong></p>

  <div class="quote">"Água tratada nem sempre é segura. Estudos apontam riscos invisíveis à saúde no transporte pela rede de distribuição." — A Notícia do Vale, 2026</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#tratada">Água tratada não é água perfeita</a></li>
      <li><a href="#contaminantes">Os 5 contaminantes que podem chegar à sua casa</a></li>
      <li><a href="#mapa">O Mapa da Água do Brasil</a></li>
      <li><a href="#cloro">O problema silencioso do cloro</a></li>
      <li><a href="#tubulacoes">A rede entre a estação e seu copo</a></li>
      <li><a href="#solucao">O que fazer hoje</a></li>
    </ol>
  </nav>

  <h2 id="tratada">Água tratada não é água perfeita</h2>
  <p>A reportagem da <a href="https://epocanegocios.globo.com/ciencia-e-saude/noticia/2025/12/agua-e-potavel-mas-nao-perfeita-5-elementos-contaminantes-que-podem-chegar-a-sua-torneira.ghtml" target="_blank" rel="noopener">Época Negócios em dezembro de 2025</a> deixou claro: os processos convencionais de tratamento não removem totalmente resíduos químicos, metais e subprodutos da desinfecção. Eles atendem ao mínimo legal. E o mínimo legal não é o ideal para a sua saúde.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">+6 mil</div><div class="stat-label">municípios brasileiros com pelo menos uma amostra contaminada (Mapa da Água)</div></div>
    <div class="stat-card"><div class="stat-number">27</div><div class="stat-label">tipos de agrotóxicos monitorados pelo Ministério da Saúde na água potável</div></div>
    <div class="stat-card"><div class="stat-number">100%</div><div class="stat-label">da água tratada brasileira contém cloro residual</div></div>
  </div>

  <h2 id="contaminantes">Os 5 contaminantes que podem chegar à sua casa</h2>

  <h3>1. Cloro e trihalometanos</h3>
  <p>O cloro mata bactérias na estação. Mas, ao reagir com matéria orgânica, forma <strong>trihalometanos (THMs)</strong>, subprodutos classificados como possivelmente cancerígenos pela OMS.</p>

  <h3>2. Agrotóxicos</h3>
  <p>Em municípios com agricultura intensiva, a água da torneira chega a apresentar resíduos de defensivos agrícolas que escapam do tratamento convencional.</p>

  <h3>3. Metais pesados</h3>
  <p>Chumbo, ferro e outros metais aparecem por causa de tubulações antigas. Mesmo em casas novas, o caminho entre a rua e a sua torneira pode ser longo.</p>


  <h3>4. Sedimentos e ferrugem</h3>
  <p>A água escurecida que apareceu nas torneiras paulistanas em 2025 é o sintoma visível de um problema que existe sempre, em menor escala.</p>

  <h3>5. Microplásticos</h3>
  <p>O tratamento convencional não foi projetado para reter partículas plásticas microscópicas. <a href="https://blog.acqualive.com.br/microplasticos-no-cerebro/" target="_blank">Como mostramos neste artigo</a>, o impacto disso na saúde é assustador.</p>

  <div class="danger-box">
    <h4>Atenção</h4>
    <p>A potabilidade legal garante que você não vá ter uma intoxicação aguda hoje. Não garante o que esses contaminantes fazem com seu organismo ao longo de 30 anos de consumo diário.</p>
  </div>

  <h2 id="mapa">O Mapa da Água do Brasil</h2>
  <p>O <a href="https://mapadaagua.reporterbrasil.org.br/" target="_blank" rel="noopener">Mapa da Água da Repórter Brasil</a>, baseado em dados do Sisagua/Ministério da Saúde, é o melhor retrato disponível. A ferramenta cruza testes de mais de 5 mil municípios e mostra: <strong>a maioria das cidades brasileiras apresentou pelo menos uma amostra com contaminante acima do desejável</strong> nos últimos cinco anos.</p>

  <p>Não é catastrofismo. É dado oficial.</p>

  <div class="mid-cta">
    <p>Você não controla o que acontece na rua. Mas controla o que acontece na sua cozinha.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Quero água pura todos os dias →</a>
  </div>

  <h2 id="cloro">O problema silencioso do cloro</h2>
  <p>Cloro tem cheiro. Cloro tem gosto. Cloro deixa a pele ressecada e o cabelo opaco. <a href="https://blog.acqualive.com.br/cloro-pele-cabelo/" target="_blank">E faz mal ao seu intestino</a> a longo prazo, porque agride a microbiota benéfica do mesmo jeito que mata bactérias na estação de tratamento.</p>

  <h2 id="tubulacoes">A rede entre a estação e seu copo</h2>
  <p>Mesmo que a água saísse perfeita da Sabesp, da Cedae ou de qualquer companhia, ela percorre quilômetros de tubulações de idades variadas. Pode pegar carona com qualquer coisa no caminho. A caixa d'água da sua casa, se não for limpa há mais de seis meses, é outro problema.</p>

  <h2 id="solucao">O que fazer hoje</h2>
  <p>A solução não é entrar em pânico. É instalar uma camada extra de proteção dentro de casa. Um <strong>purificador de água de qualidade</strong> resolve o que a estação de tratamento e as tubulações não conseguem.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-cozinha-classica.png" alt="Purificador Acqualive Terracota em cozinha clássica, evolução do filtro de barro com água alcalina" class="article-img" loading="lazy" width="1080" height="1350">

  <p>O <strong>Purificador Acqualive</strong> retém cloro, trihalometanos, sedimentos, agrotóxicos e partículas microscópicas. Ainda alcaliniza a água com magnésio natural, deixando o pH próximo de 9, ideal para o organismo. Sem eletricidade, sem químicos, sem garrafas plásticas.</p>

  <div class="info-box">
    <h4>Por que vale a pena</h4>
    <p>Custo por litro infinitamente menor que água engarrafada. Sem lixo plástico. Sem microplásticos. Sem cloro. Com magnésio. A escolha que sua família precisa fazer uma única vez.</p>
  </div>

  <div class="cta-section">
    <h2>Tenha controle <span>do que entra</span> em casa</h2>
    <p>Não dá para esperar a rede pública resolver. Comece pela sua cozinha, hoje, com um purificador que faz o trabalho que a estação de tratamento não faz.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 8 — Cloro pele e cabelo
// ============================================================
const article8 = {
  title: "Por que sua pele e seu cabelo estão ressecados? A culpa pode ser do cloro da torneira",
  slug: "cloro-pele-cabelo",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cloro Resseca Pele e Cabelo? A Verdade Que Ninguém Te Conta | Acqualive</title>
<meta name="description" content="Sua pele puxa, seu cabelo está sem brilho? O cloro da água que você bebe e usa no banho pode ser o vilão. Entenda como ele age e como reduzir com um filtro de água alcalina.">
<meta name="keywords" content="cloro resseca pele, cloro cabelo, água do banho, cloro torneira, água alcalina pele, hidratação pele, dermatite cloro, Acqualive">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/cloro-pele-cabelo/">
<meta property="og:title" content="Por que sua pele e seu cabelo estão ressecados?">
<meta property="og:description" content="O cloro da torneira faz muito mais estrago do que você imagina.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-natureza.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Por que sua pele e seu cabelo estão ressecados? A culpa pode ser do cloro","description":"Como o cloro da água da torneira afeta pele, cabelo e microbiota intestinal. Ciência, sintomas e soluções práticas.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-04-20","dateModified":"2026-04-20","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-natureza.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"O cloro da água realmente resseca a pele?","acceptedAnswer":{"@type":"Answer","text":"Sim. O cloro retira a oleosidade natural protetora da pele e do cabelo, danifica a barreira lipídica e pode desencadear coceiras, ressecamento, eczema e dermatite em pessoas sensíveis."}},
{"@type":"Question","name":"Beber água com cloro faz mal?","acceptedAnswer":{"@type":"Answer","text":"O consumo prolongado de água com cloro está associado à formação de trihalometanos, subprodutos potencialmente cancerígenos. Além disso, agride a microbiota intestinal, importante para imunidade, humor e digestão."}},
{"@type":"Question","name":"Como tirar o cloro da água do banho?","acceptedAnswer":{"@type":"Answer","text":"Filtros de chuveiro com carvão ativado reduzem boa parte do cloro. Para a água que você bebe, um purificador como o Acqualive remove cloro e ainda alcaliniza a água com magnésio natural."}},
{"@type":"Question","name":"Água alcalina ajuda a pele?","acceptedAnswer":{"@type":"Answer","text":"Sim. A água alcalina rica em minerais auxilia na hidratação celular profunda e neutraliza a acidez metabólica, fator associado a envelhecimento da pele e perda de viço."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">PELE • BEM-ESTAR</span>
    <h1>Sua pele puxa? Seu cabelo está sem vida? <span>O culpado pode ser o cloro</span></h1>
    <p class="header-desc">A água que sai da torneira faz mais estrago do que parece. Entenda o que ela está fazendo com você todos os dias.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>20 abr 2026</span><span>•</span><span>8 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-natureza.jpg" alt="Purificador Acqualive em cozinha moderna com parede verde de plantas, alternativa para água sem cloro" width="860" height="600" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Você acordou, abriu o chuveiro, lavou o rosto. Tudo normal. Mas, na hora de passar o creme, a sensação é a mesma: <strong>a pele puxa, o cabelo está sem brilho e o couro cabeludo coça</strong>. E você troca de hidratante, troca de shampoo, gasta dinheiro com tratamento, e nada muda.</p>

  <p>A pergunta certa quase nunca é feita: <strong>o que tem na água que toca seu corpo todos os dias?</strong></p>

  <div class="quote">"O cloro residual afeta o sabor da água, mas seu impacto vai muito além: subprodutos da desinfecção podem afetar a saúde com a exposição prolongada." — Estudos sobre química ambiental, 2025</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#cloro">O cloro está em todo lugar</a></li>
      <li><a href="#pele">O que ele faz com sua pele</a></li>
      <li><a href="#cabelo">Por que seu cabelo perdeu o brilho</a></li>
      <li><a href="#intestino">O ataque silencioso ao seu intestino</a></li>
      <li><a href="#solucao">Como reduzir a exposição</a></li>
    </ol>
  </nav>

  <h2 id="cloro">O cloro está em todo lugar</h2>
  <p>O cloro é adicionado à água tratada para matar bactérias e vírus. Sem ele, teríamos epidemias. O problema é que, depois de cumprir essa função, ele continua na água. E entra na sua pele, no seu cabelo, no seu copo, no seu intestino.</p>

  <p>Pior: ao reagir com matéria orgânica, forma <strong>trihalometanos</strong>, subprodutos classificados como possivelmente cancerígenos pela <a href="https://www.who.int/" target="_blank" rel="noopener">Organização Mundial de Saúde</a>.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">15 min</div><div class="stat-label">de banho equivalem a beber 8 copos de água com cloro pela pele e pulmões</div></div>
    <div class="stat-card"><div class="stat-number">~2 mg/L</div><div class="stat-label">de cloro residual em torneiras brasileiras (limite permitido)</div></div>
    <div class="stat-card"><div class="stat-number">9 sintomas</div><div class="stat-label">comuns ligados ao excesso de cloro, da coceira ao ressecamento crônico</div></div>
  </div>

  <h2 id="pele">O que ele faz com sua pele</h2>
  <p>A pele tem um manto hidrolipídico — uma fina camada protetora de óleo natural que regula a umidade. O cloro <strong>quebra esse manto</strong>. Resultado:</p>

  <ul class="check-list">
    <li>Sensação constante de ressecamento, mesmo passando hidratante.</li>
    <li>Coceira após o banho.</li>
    <li>Vermelhidão, dermatite e piora de quadros como eczema e psoríase.</li>
    <li>Envelhecimento acelerado da pele.</li>
    <li>Acne e inflamações em peles sensíveis.</li>
  </ul>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-cozinha-industrial.png" alt="Purificador Acqualive Terracota em cozinha industrial, oferecendo água alcalina sem cloro para uso diário" class="article-img" loading="lazy" width="1080" height="1350">

  <div class="danger-box">
    <h4>O que pouca gente sabe</h4>
    <p>A pele absorve líquidos. Tomar banho com água clorada significa absorver cloro pela pele. E inalar vapor clorado durante o banho quente também coloca os subprodutos direto nos pulmões.</p>
  </div>

  <h2 id="cabelo">Por que seu cabelo perdeu o brilho</h2>
  <p>O cabelo é proteína (queratina). O cloro oxida essa proteína, abre a cutícula do fio, deixa o cabelo poroso, opaco e quebradiço. Loiras e cabelos coloridos sentem o efeito mais rápido — a cor literalmente desbota.</p>

  <p>Não é o seu shampoo. É a água com a qual você lava o cabelo.</p>

  <div class="mid-cta">
    <p>O que entra no seu corpo (e na sua pele) começa pela água.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o purificador Acqualive →</a>
  </div>

  <h2 id="intestino">O ataque silencioso ao seu intestino</h2>
  <p>O cloro mata bactérias. Inclusive as boas, que vivem no seu intestino e regulam imunidade, humor, digestão e absorção de nutrientes.</p>

  <p>Pesquisas recentes da BBC <a href="https://g1.globo.com/saude/noticia/2026/01/14/melhorar-a-saude-do-intestino-ajuda-a-envelhecer-melhor-o-que-descobri-mudando-minha-dieta.ghtml" target="_blank" rel="noopener">vincularam saúde intestinal a envelhecimento saudável</a>. Beber água clorada todos os dias é trabalhar contra a sua microbiota.</p>

  <p>Quem vive em busca de probiótico bom, vegetal fermentado, kombucha — está fazendo a coisa certa. Mas a água clorada anula parte do esforço.</p>

  <h2 id="solucao">Como reduzir a exposição</h2>
  <p>Você não tira o cloro da rede de abastecimento. Mas tira da sua casa.</p>

  <ul class="check-list">
    <li>Filtro de chuveiro com carvão ativado reduz cloro do banho.</li>
    <li>Filtro/purificador de boa qualidade na cozinha resolve a água que você bebe e cozinha.</li>
    <li>Evite ferver muito tempo a água (concentra trihalometanos em vez de eliminá-los).</li>
  </ul>

  <p>O <strong>Purificador Acqualive</strong> remove o cloro e os trihalometanos da água que você bebe. E vai além: alcaliniza com magnésio natural, deixando uma água com pH próximo de 9 — que <a href="https://blog.acqualive.com.br/agua-alcalina-anti-inflamatoria/" target="_blank">tem ação anti-inflamatória</a> e ajuda na hidratação profunda da pele de dentro para fora.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-grafite-arte.png" alt="Purificador Acqualive Terracota em versão grafite, design contemporâneo para água alcalina sem cloro" class="article-img" loading="lazy" width="1080" height="1350">

  <div class="info-box">
    <h4>Pele saudável começa por dentro</h4>
    <p>Toda crema do mundo perde para uma pele bem hidratada de dentro pra fora, com água pura, alcalina e rica em minerais. É a fórmula mais simples e mais negligenciada do skincare.</p>
  </div>

  <div class="cta-section">
    <h2>Pele radiante começa <span>na água</span></h2>
    <p>Pare de gastar com tratamento e cuide do que toca seu corpo o dia inteiro. Água sem cloro, com minerais, todos os dias.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 9 — Hidratação na menopausa / após os 40
// ============================================================
const article9 = {
  title: "Hidratação após os 40: por que a água certa muda tudo na menopausa e na longevidade feminina",
  slug: "hidratacao-apos-40-menopausa",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hidratação Após os 40 e Menopausa: A Água Certa Muda Tudo | Acqualive</title>
<meta name="description" content="Após os 40, o corpo retém menos água, a pele perde viço e a menopausa intensifica tudo. Descubra por que a qualidade da água é mais importante que a quantidade.">
<meta name="keywords" content="hidratação após 40, água menopausa, água alcalina mulheres, hidratação madura, longevidade feminina, sintomas menopausa hidratação, Acqualive">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/hidratacao-apos-40-menopausa/">
<meta property="og:title" content="Hidratação após os 40: por que a água certa muda tudo">
<meta property="og:description" content="Quem está passando dos 40 sabe: o corpo é outro. E a água que ele precisa também.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-cozinha-classica.png">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Hidratação após os 40 e a água certa para a menopausa","description":"Como a qualidade da água impacta sintomas da menopausa, hidratação madura e envelhecimento saudável.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-04-20","dateModified":"2026-04-20","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-cozinha-classica.png"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Por que a hidratação muda após os 40 anos?","acceptedAnswer":{"@type":"Answer","text":"Com o avanço da idade, a sensação de sede diminui, a função renal é menos eficiente e a quantidade de água total no corpo cai naturalmente. Isso torna a qualidade e a frequência da hidratação ainda mais importantes."}},
{"@type":"Question","name":"Água alcalina ajuda na menopausa?","acceptedAnswer":{"@type":"Answer","text":"Sim. A água alcalina rica em magnésio auxilia no equilíbrio do pH corporal, combate a acidose metabólica que acelera ondas de calor e ajuda a saúde óssea, tema central na menopausa."}},
{"@type":"Question","name":"Quanta água uma mulher após os 40 deve beber?","acceptedAnswer":{"@type":"Answer","text":"A recomendação geral é de 30 a 35 ml por kg de peso corporal. Mais importante que a quantidade exata é a qualidade: água pura, alcalina, livre de cloro e contaminantes, distribuída ao longo do dia."}},
{"@type":"Question","name":"O magnésio da água ajuda a saúde óssea?","acceptedAnswer":{"@type":"Answer","text":"Sim. O magnésio é fundamental para a fixação do cálcio nos ossos. Águas alcalinas mineralizadas com magnésio são uma fonte natural diária desse mineral, especialmente importante para mulheres na menopausa."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">MULHER • LONGEVIDADE</span>
    <h1>Após os 40, a <span>água certa</span> muda tudo</h1>
    <p class="header-desc">Menopausa, ondas de calor, pele que perde viço, ossos pedindo socorro. A qualidade da água que você bebe importa muito mais do que parece.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>20 abr 2026</span><span>•</span><span>9 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-cozinha-classica.png" alt="Purificador Acqualive Terracota em cozinha clássica de madeira, água alcalina rica em magnésio para mulheres maduras" width="860" height="1080" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Quem passou dos 40 sabe: o corpo é outro. A pele responde diferente, a energia é outra, o sono não vem do mesmo jeito. E aí chega a menopausa, e tudo é multiplicado por dez. Ondas de calor, irritabilidade, ressecamento, ossos enfraquecendo. A medicina, finalmente, tem dado mais atenção a essa fase.</p>

  <p>Mas há um detalhe quase sempre esquecido nas consultas: <strong>a água que você bebe.</strong></p>

  <div class="quote">"Com o avanço da idade, a sensação de sede diminui. Beber água passa a ser uma decisão consciente, não mais um instinto." — Diário da Saúde, 2025</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#corpo">Por que o corpo retém menos água com o tempo</a></li>
      <li><a href="#menopausa">Menopausa e desidratação silenciosa</a></li>
      <li><a href="#magnesio">O papel do magnésio nessa fase</a></li>
      <li><a href="#pele">Pele madura: o que muda com a água certa</a></li>
      <li><a href="#ossos">Ossos: o capítulo silencioso</a></li>
      <li><a href="#solucao">A escolha que sua saúde merece agora</a></li>
    </ol>
  </nav>

  <h2 id="corpo">Por que o corpo retém menos água com o tempo</h2>
  <p>A partir dos 40, a água total no organismo começa a cair. Por dois motivos: perda gradual de massa magra (que armazena mais água que a gordura) e diminuição da eficiência renal. A consequência é simples: você se desidrata mais fácil sem perceber.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">-15%</div><div class="stat-label">de água corporal entre os 30 e os 70 anos</div></div>
    <div class="stat-card"><div class="stat-number">75%</div><div class="stat-label">das mulheres na menopausa relatam pele e mucosas mais ressecadas</div></div>
    <div class="stat-card"><div class="stat-number">~310mg</div><div class="stat-label">de magnésio diário recomendado para mulheres adultas</div></div>
  </div>

  <h2 id="menopausa">Menopausa e desidratação silenciosa</h2>
  <p>A queda do estrogênio mexe com tudo. Inclusive com a regulação da temperatura, da retenção de líquidos e da hidratação celular. Resultado: <strong>ondas de calor que sugam o líquido corporal, ressecamento vaginal e da pele, fadiga, dores de cabeça e dificuldade de concentração</strong>.</p>

  <p>Beber mais água ajuda. Beber a água certa transforma.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-natureza.jpg" alt="Cozinha contemporânea com Purificador Acqualive, ambiente acolhedor para hidratação de qualidade" class="article-img" loading="lazy" width="1200" height="800">

  <h2 id="magnesio">O papel do magnésio nessa fase</h2>
  <p>O magnésio é o mineral mais negligenciado da menopausa. Ele participa de mais de 300 reações no corpo, ajuda no sono, no humor, no metabolismo da glicose e — fundamental — na <strong>fixação do cálcio nos ossos</strong>.</p>

  <p>Suplementar é uma opção. Beber magnésio todo dia, naturalmente, é melhor. A água alcalina mineralizada do Purificador Acqualive entrega magnésio biodisponível em cada copo.</p>

  <div class="info-box">
    <h4>Detalhe importante</h4>
    <p>O cálcio sozinho não fixa nos ossos. Precisa de magnésio, vitamina D e vitamina K. A maior parte das suplementações falha porque ignora esse trio.</p>
  </div>

  <div class="mid-cta">
    <p>Sua segunda metade da vida pede mais qualidade. Inclusive na água.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Quero água alcalina com magnésio →</a>
  </div>

  <h2 id="pele">Pele madura: o que muda com a água certa</h2>
  <p>Aos 50, a pele perde até 50% do colágeno. Hidratação interna passa a ser tão importante quanto qualquer creme caro. Água com pH alcalino e rica em minerais hidrata as células de dentro para fora, combate o estresse oxidativo e ajuda na elasticidade.</p>

  <p>O segredo das peles que parecem brilhar não está só no skincare. Está na água que essa pele recebe por dentro, todos os dias, durante anos.</p>

  <h2 id="ossos">Ossos: o capítulo silencioso</h2>
  <p>A osteoporose pós-menopausa é uma epidemia subestimada. Atinge milhões de brasileiras. E é silenciosa até a primeira fratura. A acidose metabólica de baixo grau (causada por dieta industrializada e água com pH baixo) força o corpo a tirar cálcio dos ossos para neutralizar o sangue. <a href="https://blog.acqualive.com.br/agua-alcalina-anti-inflamatoria/" target="_blank">Como mostramos neste artigo sobre acidez</a>, beber água alcalina diariamente reduz esse efeito.</p>

  <h2 id="solucao">A escolha que sua saúde merece agora</h2>
  <p>O <strong>Purificador Acqualive</strong> entrega água:</p>

  <ul class="check-list">
    <li>Alcalina, com pH em torno de 9, ajudando a neutralizar a acidez metabólica.</li>
    <li>Rica em magnésio biodisponível.</li>
    <li>Sem cloro, sem trihalometanos, sem microplásticos.</li>
    <li>Com PRAL negativo, o que comprova cientificamente seu poder alcalinizante real.</li>
  </ul>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-grafite-arte.png" alt="Purificador Acqualive Terracota em versão grafite com arte contemporânea ao fundo, design para mulheres maduras" class="article-img" loading="lazy" width="1080" height="1350">

  <div class="cta-section">
    <h2>Sua segunda metade <span>merece o melhor</span></h2>
    <p>Hidratação inteligente, magnésio diário, pH equilibrado. Tudo isso na água que já está na sua casa.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 10 — Café perfeito começa na água
// ============================================================
const article10 = {
  title: "O café perfeito começa na água: por que a qualidade da água define o sabor da xícara",
  slug: "cafe-perfeito-comeca-na-agua",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>O Café Perfeito Começa na Água: Como a Água Define o Sabor | Acqualive</title>
<meta name="description" content="98% do seu café é água. Descubra por que a qualidade da água define o sabor, o aroma e o corpo da bebida — e qual filtro usam baristas profissionais e cafeterias premiadas.">
<meta name="keywords" content="água para café, melhor água café, café especial água, dureza água café, filtro água café, água alcalina café, Acqualive, água sem cloro café">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/cafe-perfeito-comeca-na-agua/">
<meta property="og:title" content="O café perfeito começa na água">
<meta property="og:description" content="98% do seu café é água. Sua origem importa mais do que o grão.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-moderna.png">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"O café perfeito começa na água","description":"Como a água filtrada e mineralizada transforma o sabor do café em casa, segundo baristas e estudos sensoriais.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-04-20","dateModified":"2026-04-20","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-moderna.png"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"A água realmente influencia o sabor do café?","acceptedAnswer":{"@type":"Answer","text":"Sim. O café é composto por 98% de água. Cloro, dureza excessiva e contaminantes alteram aroma, acidez, doçura e corpo da bebida. Baristas profissionais consideram a qualidade da água um dos fatores mais importantes."}},
{"@type":"Question","name":"Qual é a melhor água para fazer café?","acceptedAnswer":{"@type":"Answer","text":"Água filtrada, sem cloro, com mineralização equilibrada e pH levemente alcalino. A SCA (Specialty Coffee Association) recomenda água com cerca de 150 mg/L de TDS e pH próximo de 7. Águas alcalinas suaves preservam aromas e doçura."}},
{"@type":"Question","name":"Posso usar água da torneira no café?","acceptedAnswer":{"@type":"Answer","text":"Pode, mas não é o ideal. O cloro mascara aromas e reage com compostos do café, deixando sabor metálico ou medicinal. Filtrar antes faz uma diferença imediata e perceptível na xícara."}},
{"@type":"Question","name":"Água destilada serve para café?","acceptedAnswer":{"@type":"Answer","text":"Não é recomendada. Sem minerais, a extração fica desequilibrada, o café perde corpo e fica plano. O ideal é água filtrada com mineralização moderada, como a entregue pelo Purificador Acqualive."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">CAFÉ • LIFESTYLE</span>
    <h1>O café perfeito <span>começa na água</span></h1>
    <p class="header-desc">98% do que está na sua xícara é água. Mudar a água é o atalho mais negligenciado para um café que parece de cafeteria premiada.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>20 abr 2026</span><span>•</span><span>7 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-moderna.png" alt="Purificador Acqualive transparente em cozinha moderna com luz dourada, água ideal para café especial" width="860" height="1080" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Você comprou o grão especial. Você pesou o pó na balança. Calculou a temperatura, mediu o tempo, fez tudo certo. E o café saiu… razoável. De novo.</p>

  <p>O detalhe quase sempre esquecido na receita do café perfeito é o ingrediente que ocupa mais espaço na xícara: <strong>a água</strong>.</p>

  <div class="quote">"Não importa quão bom seja o grão. Se a água for ruim, o café será ruim. É a regra de ouro do barista." — SCA — Specialty Coffee Association</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#porcentagem">98% da xícara é água</a></li>
      <li><a href="#cloro">O cloro é inimigo do café</a></li>
      <li><a href="#mineralizacao">A mineralização certa para extração</a></li>
      <li><a href="#ph">pH e doçura: a relação invisível</a></li>
      <li><a href="#barista">O que baristas profissionais fazem</a></li>
      <li><a href="#solucao">Como ter água de barista em casa</a></li>
    </ol>
  </nav>

  <h2 id="porcentagem">98% da xícara é água</h2>
  <p>Parece óbvio, mas vale ser dito: dos 200 ml da sua xícara, cerca de 196 ml é água. O grão moído é só 2%. Toda a alquimia da extração — açúcares, ácidos, óleos, aromas — acontece com a água como solvente. Se a água tem cloro, o cloro se mistura. Se a água tem cheiro, o cheiro fica. Se a água tem dureza alta, o cálcio em excesso bloqueia compostos importantes do grão.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">98%</div><div class="stat-label">do café é água</div></div>
    <div class="stat-card"><div class="stat-number">150 mg/L</div><div class="stat-label">TDS ideal segundo a SCA para café especial</div></div>
    <div class="stat-card"><div class="stat-number">pH 7</div><div class="stat-label">a 7,5: faixa neutra a levemente alcalina recomendada</div></div>
  </div>

  <h2 id="cloro">O cloro é inimigo do café</h2>
  <p>O cloro tem cheiro. O cloro tem gosto. Em pequenas concentrações, ele já é capaz de mascarar os aromas mais delicados de um café especial — aromas florais, notas de frutas vermelhas, doçura caramelizada. Pior: o cloro reage com compostos fenólicos do café e pode produzir gosto metálico ou medicinal.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-torneira-detalhe.jpg" alt="Detalhe da torneira do Purificador Acqualive servindo água sem cloro, ideal para preparar café especial" class="article-img" loading="lazy" width="800" height="1200">

  <p>Filtrar a água antes de usar no café é o passo zero. Sem isso, qualquer outro esforço fica comprometido.</p>

  <h2 id="mineralizacao">A mineralização certa para extração</h2>
  <p>Água destilada é péssima para café. Sem minerais, a extração fica desequilibrada e o resultado é uma bebida sem corpo, plana, sem doçura. Por outro lado, água muito dura (excesso de cálcio) também trava a extração.</p>

  <p>A SCA (Specialty Coffee Association) recomenda algo em torno de <strong>150 mg/L de sólidos dissolvidos totais (TDS)</strong>, com presença equilibrada de cálcio e magnésio. O magnésio em particular é o herói: ele se liga aos compostos aromáticos do café e potencializa o sabor.</p>

  <div class="info-box">
    <h4>Por que magnésio importa</h4>
    <p>Estudos sensoriais mostram que águas com magnésio extraem mais doçura e mais aroma do café do que águas só com cálcio. É por isso que cafeterias premium investem pesado em filtros mineralizadores.</p>
  </div>

  <h2 id="ph">pH e doçura: a relação invisível</h2>
  <p>Café tem acidez natural — boa acidez, aliás, é qualidade. Mas se a água também é ácida, o resultado fica desequilibrado, agressivo. Água com pH neutro a levemente alcalino preserva a acidez bonita do grão e realça doçura. <a href="https://blog.acqualive.com.br/agua-alcalina-anti-inflamatoria/" target="_blank">Beber água alcalina diariamente</a> tem benefícios para a saúde, e usar essa mesma água no café tem benefício para o paladar.</p>

  <h2 id="barista">O que baristas profissionais fazem</h2>
  <p>Pergunte a qualquer barista premiado: ele tem um sistema de filtragem de qualidade na cafeteria. Não é frescura. É técnica. Cafés que ganham prêmios mundiais usam, em média, água com perfil mineral altamente controlado.</p>

  <p>Você não precisa montar laboratório em casa. Precisa <strong>de um bom purificador na sua cozinha</strong>.</p>

  <div class="mid-cta">
    <p>Tire o cloro, mantenha os minerais. O café (e seu paladar) agradece.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="solucao">Como ter água de barista em casa</h2>
  <p>O <strong>Purificador Acqualive</strong> entrega exatamente o que o café (e a sua saúde) pedem:</p>

  <ul class="check-list">
    <li>Sem cloro nem trihalometanos.</li>
    <li>Sem microplásticos nem sedimentos.</li>
    <li>Mineralização natural com magnésio biodisponível.</li>
    <li>pH levemente alcalino, equilibrado para extração.</li>
    <li>Sem precisar de eletricidade, garrafão ou cartucho elétrico.</li>
  </ul>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-cozinha-classica.png" alt="Purificador Acqualive Terracota em cozinha clássica de madeira, ideal para café e gastronomia" class="article-img" loading="lazy" width="1080" height="1350">

  <p>Mude a água. Você vai sentir na primeira xícara.</p>

  <div class="cta-section">
    <h2>O ingrediente secreto <span>do seu café</span></h2>
    <p>Comece sua manhã com a água que faz justiça ao grão. Filtrada, mineralizada, sem cloro, alcalina.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 11 — Água anti-inflamatória
// ============================================================
const article11 = {
  title: "Água anti-inflamatória: o copo que desliga a inflamação silenciosa do seu corpo",
  slug: "agua-anti-inflamatoria",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Água Anti-Inflamatória: O Estudo Que Mudou Tudo | Acqualive</title>
<meta name="description" content="Entenda de forma simples como a água que você bebe pode estar inflamando ou desinflamando o seu corpo, e o estudo brasileiro que comprovou o efeito anti-inflamatório da água alcalina ionizada da Acqualive.">
<meta name="keywords" content="água anti-inflamatória, água alcalina, água ionizada, inflamação crônica, gastrite, Acqualive, Dra Juliana Chaves, PRAL, pH da água, saúde">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/agua-anti-inflamatoria/">
<meta property="og:title" content="Água Anti-Inflamatória: O Copo Que Desliga a Inflamação Silenciosa">
<meta property="og:description" content="Estudo brasileiro mostra como a água alcalina ionizada da Acqualive reduz a inflamação no corpo. Entenda em linguagem simples.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-anti-inflamatoria.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Água anti-inflamatória: o copo que desliga a inflamação silenciosa do seu corpo","description":"Guia para leigos sobre como a água alcalina ionizada combate a inflamação crônica, com base em estudo brasileiro liderado pela Dra. Juliana Chaves.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-04-28","dateModified":"2026-04-28","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-anti-inflamatoria.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"O que é inflamação crônica e por que ela é perigosa?","acceptedAnswer":{"@type":"Answer","text":"A inflamação crônica é uma resposta do sistema imune que não desliga, como um fogo baixo aceso dentro do corpo. Ela é silenciosa, muitas vezes não dá sintomas claros, mas está por trás de doenças como gastrite, diabetes, hipertensão, obesidade, doenças do coração, artrite, envelhecimento precoce e até alguns tipos de câncer."}},
{"@type":"Question","name":"A água pode ser anti-inflamatória?","acceptedAnswer":{"@type":"Answer","text":"Sim. Um estudo brasileiro liderado pela Dra. Juliana Chaves analisou 28 pacientes com gastrite que passaram a beber água alcalina ionizada da Acqualive por 4 meses. Os exames de endoscopia mostraram melhora significativa da inflamação na mucosa do estômago (p=0,024), comprovando o efeito anti-inflamatório dessa água."}},
{"@type":"Question","name":"Qual a diferença entre água comum, água mineral e água alcalina ionizada?","acceptedAnswer":{"@type":"Answer","text":"A água da torneira costuma ter pH levemente ácido e cloro. A água mineral em garrafa tem composição variável e gera plástico. A água alcalina ionizada da Acqualive sai filtrada, com pH próximo de 9, rica em hidrogênio molecular e magnésio, com efeito antioxidante e anti-inflamatório comprovado em estudo brasileiro."}},
{"@type":"Question","name":"Qual a relação entre PRAL, água e inflamação?","acceptedAnswer":{"@type":"Answer","text":"PRAL é a Carga Ácida Potencial Renal. Cada bebida ou alimento gera um efeito ácido ou alcalino no corpo. Refrigerantes e água ácida favorecem a inflamação. A água alcalina ionizada tem PRAL negativo, equilibrando o organismo e reduzindo o ambiente inflamatório."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">SAÚDE • HIDRATAÇÃO</span>
    <h1>Água <span>anti-inflamatória</span>: o copo que desliga a inflamação silenciosa</h1>
    <p class="header-desc">Existe um fogo baixo aceso dentro de muita gente. E a água certa, todos os dias, pode ser um dos extintores mais simples e poderosos que existem.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>28 abr 2026</span><span>•</span><span>9 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-anti-inflamatoria.jpg" alt="Copo alto de água alcalina ionizada cristalina sobre bancada de mármore com limão, hortelã e gengibre, simbolizando água anti-inflamatória" width="860" height="495" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Você sabia que existe um tipo de doença que pode estar acontecendo dentro do seu corpo agora, sem dor, sem sintoma claro, e ainda assim envelhecendo seus órgãos todo dia? Os médicos chamam de <strong>inflamação crônica</strong>. Os cientistas chamam de "fogo baixo". E uma das formas mais simples de combater esse fogo está em uma coisa que você já faz várias vezes por dia: <strong>beber água</strong>. A questão é: qual água?</p>

  <div class="quote">"Mudar a água que entra no corpo todo dia é, talvez, a intervenção mais barata, mais constante e mais subestimada contra a inflamação crônica." — adaptado de pesquisas publicadas em periódicos internacionais</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#fogo">O que é inflamação, explicado para criança</a></li>
      <li><a href="#agua-comum">Por que a água comum pode estar inflamando você</a></li>
      <li><a href="#estudo">O estudo brasileiro que comprovou: água pode ser anti-inflamatória</a></li>
      <li><a href="#como-age">Como a água alcalina ionizada age no corpo</a></li>
      <li><a href="#pral">PRAL: o segredo do equilíbrio ácido-alcalino</a></li>
      <li><a href="#rotina">Como usar a água como remédio diário</a></li>
      <li><a href="#solucao">Como começar hoje na sua casa</a></li>
    </ol>
  </nav>

  <h2 id="fogo">O que é inflamação, explicado para criança</h2>
  <p>Imagine que você bate o joelho. Em poucos minutos, o lugar fica vermelho, quente e dolorido. Isso é o seu corpo trabalhando para curar. É a <strong>inflamação aguda</strong>. Ela é boa, é necessária, e logo passa.</p>

  <p>Agora imagine que esse "vermelhinho" não desliga nunca. Fica baixinho, sem dor, escondido dentro do corpo, todos os dias, durante anos. É a <strong>inflamação crônica</strong>. Ela não dá sintoma na hora, mas vai estragando órgão por órgão, devagarinho.</p>

  <div class="info-box">
    <h4>Por que se preocupar</h4>
    <p>A ciência hoje entende que essa inflamação silenciosa está por trás de gastrite, diabetes, pressão alta, obesidade, dores nas articulações, problemas no coração, envelhecimento precoce e até alguns tipos de câncer. É como uma fagulha que vira incêndio com o tempo.</p>
  </div>

  <h2 id="agua-comum">Por que a água comum pode estar inflamando você</h2>
  <p>A maior parte das pessoas no Brasil bebe um destes três tipos de água. Veja o que cada um realmente entrega para o seu corpo:</p>

  <ul class="check-list">
    <li><strong>Água da torneira:</strong> costuma ser ácida, levar cloro e trihalometanos (subprodutos do cloro), e às vezes microplásticos. O cloro irrita a mucosa do estômago e do intestino.</li>
    <li><strong>Água mineral em garrafa:</strong> composição muito variável, quase sempre ácida ou neutra, e ainda traz microplásticos vindos do PET. Cada garrafa pode liberar centenas de milhares de partículas.</li>
    <li><strong>Refrigerantes e sucos de caixinha:</strong> muito açúcar, ácidos artificiais, pH baixo. Tudo que o corpo inflamado não precisa.</li>
  </ul>

  <p>Quando o corpo recebe líquidos ácidos o tempo todo, ele precisa "trabalhar dobrado" para neutralizar, tirando minerais dos ossos, sobrecarregando rins e mantendo o ambiente interno levemente ácido. Esse ambiente é o terreno favorito da inflamação crônica.</p>

  <h2 id="estudo">O estudo brasileiro que comprovou: água pode ser anti-inflamatória</h2>
  <p>Aqui está o ponto que pouca gente sabe: a <strong>água que você bebe também desinflama</strong>. E não é achismo.</p>

  <p>A médica pesquisadora <strong>Dra. Juliana Chaves</strong>, junto com pesquisadores da Universidade Federal do Pará e da Marinha do Brasil, conduziu um estudo com 28 pacientes com gastrite. O grupo passou a beber <strong>água alcalina ionizada da Acqualive</strong> durante cerca de 4 meses, sem mudar mais nada na rotina. Antes e depois, todos passaram por endoscopia.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">28</div><div class="stat-label">pacientes com gastrite acompanhados pelo estudo</div></div>
    <div class="stat-card"><div class="stat-number">4 meses</div><div class="stat-label">bebendo água alcalina ionizada da Acqualive</div></div>
    <div class="stat-card"><div class="stat-number">p=0,024</div><div class="stat-label">melhora estatisticamente significativa da inflamação na mucosa</div></div>
  </div>

  <p>Resultado: a inflamação na mucosa do estômago diminuiu de forma significativa. E os pesquisadores foram além: viram sinais de que esse efeito anti-inflamatório passa do estômago e ajuda o corpo inteiro a equilibrar marcadores ligados à inflamação crônica.</p>

  <div class="quote">Em outras palavras: a água certa, todos os dias, pode funcionar como um "extintor natural" do fogo silencioso que envelhece o corpo.</div>

  <h2 id="como-age">Como a água alcalina ionizada age no corpo</h2>
  <p>A água alcalina ionizada da Acqualive não é apenas água com pH alto. Ela combina três efeitos que trabalham juntos:</p>

  <div class="benefit-grid">
    <div class="benefit-card"><div class="benefit-icon">1</div><h4>pH próximo de 9</h4><p>Ajuda a neutralizar a acidez gerada pela alimentação moderna e pelo estresse.</p></div>
    <div class="benefit-card"><div class="benefit-icon">2</div><h4>Hidrogênio molecular</h4><p>Antioxidante natural, varre os radicais livres mais agressivos para as células.</p></div>
    <div class="benefit-card"><div class="benefit-icon">3</div><h4>Magnésio biodisponível</h4><p>Mineral essencial para mais de 300 reações no corpo, incluindo o controle da inflamação.</p></div>
    <div class="benefit-card"><div class="benefit-icon">4</div><h4>Microagrupamento</h4><p>Moléculas em clusters menores, que hidratam a célula com mais facilidade.</p></div>
    <div class="benefit-card"><div class="benefit-icon">5</div><h4>Sem cloro e sem trihalometanos</h4><p>Filtragem multinível elimina os irritantes mais comuns da água tratada.</p></div>
    <div class="benefit-card"><div class="benefit-icon">6</div><h4>Sem microplásticos</h4><p>Você sai do PET descartável e ganha água pura, direto da torneira.</p></div>
  </div>

  <h2 id="pral">PRAL: o segredo do equilíbrio ácido-alcalino</h2>
  <p>PRAL parece nome difícil, mas a ideia é fácil. Cada alimento ou bebida que entra na sua boca deixa um "rastro" no corpo: ou ácido, ou alcalino. Quanto mais ácido o seu dia a dia, mais o corpo precisa trabalhar para equilibrar e mais ele inflama.</p>

  <ul class="check-list">
    <li>Refrigerante, fast food, embutidos: rastro muito ácido. Ruim.</li>
    <li>Vegetais, frutas, leguminosas: rastro alcalino. Bom.</li>
    <li>Água alcalina ionizada da Acqualive: rastro alcalino e antioxidante. Ótimo.</li>
  </ul>

  <p>Beber água alcalina ionizada é como colocar um <strong>contrapeso diário</strong> contra os excessos da vida moderna. Não substitui boa comida, mas multiplica o efeito dela.</p>

  <div class="mid-cta">
    <p>Comida boa, água certa. A combinação que muda o corpo de dentro pra fora.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Purificador Acqualive →</a>
  </div>

  <h2 id="rotina">Como usar a água como remédio diário</h2>
  <p>Para a água anti-inflamatória trabalhar a seu favor, ela precisa ser uma rotina, não um evento. Sugestão prática:</p>

  <ul class="check-list">
    <li><strong>Ao acordar:</strong> 1 a 2 copos de água alcalina ionizada em jejum, antes do café.</li>
    <li><strong>Meio da manhã:</strong> mais 1 copo, junto de uma fruta.</li>
    <li><strong>Antes do almoço:</strong> 1 copo, 15 minutos antes de comer.</li>
    <li><strong>Tarde:</strong> 2 a 3 copos espaçados, no lugar de refrigerante ou suco industrializado.</li>
    <li><strong>Antes do jantar:</strong> mais 1 copo.</li>
    <li><strong>Ao longo do dia:</strong> meta de 2 a 2,5 litros de água alcalina ionizada.</li>
  </ul>

  <p>É a mesma água para o chá, o café, a sopa, o suco natural, a mamadeira, o copo do seu filho. Tudo que entra em casa passa a ter um pH amigo do corpo.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-natureza.jpg" alt="Purificador Acqualive em cozinha clara, fonte de água alcalina ionizada anti-inflamatória para a família" class="article-img" loading="lazy" width="1200" height="800">

  <h2 id="solucao">Como começar hoje na sua casa</h2>
  <p>Você não precisa virar a sua vida do avesso. Comece com 3 movimentos simples:</p>

  <ul class="check-list">
    <li><strong>Tire um vilão líquido por semana:</strong> um refrigerante a menos, uma garrafa PET a menos.</li>
    <li><strong>Coloque a água certa em todos os copos da casa:</strong> seu, do seu parceiro, do seu filho, dos seus pais.</li>
    <li><strong>Troque a fonte de água da sua casa</strong> por água alcalina ionizada de verdade. Essa mudança entra em 100% das suas refeições, do seu chá, do seu café, da água do seu filho.</li>
  </ul>

  <p>É a coisa mais simples do mundo: beber melhor. O corpo agradece e os exames também.</p>

  <div class="cta-section">
    <h2>Apague o fogo silencioso <span>com a água certa</span></h2>
    <p>O mesmo Purificador Acqualive usado no estudo da Dra. Juliana Chaves pode estar na sua cozinha, entregando água alcalina ionizada todos os dias para a sua família.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Quero água anti-inflamatória em casa →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/agua-alcalina-anti-inflamatoria/" target="_blank">Água alcalina anti-inflamatória: o estudo completo da Dra. Juliana Chaves</a></li>
      <li><a href="https://blog.acqualive.com.br/qual-o-melhor-filtro-de-agua/" target="_blank">Qual o melhor filtro de água para a sua casa</a></li>
      <li><a href="https://blog.acqualive.com.br/microplasticos-no-cerebro/" target="_blank">Microplásticos no cérebro: o que ninguém te contou</a></li>
    </ul>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 12 — Hidratação materna (Dia das Mães)
// ============================================================
const article12 = {
  title: "Hidratação materna: o guia completo de água para mães e filhos (Dia das Mães 2026)",
  slug: "hidratacao-materna-maes-e-filhos",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hidratação Materna: Guia Completo de Água Para Mães e Filhos | Acqualive</title>
<meta name="description" content="No Dia das Mães, o presente que mais importa: saúde. Veja o guia completo de hidratação para gestantes, mães que amamentam, crianças e a rotina de toda a família.">
<meta name="keywords" content="hidratação materna, água para gestante, água para criança, hidratação infantil, dia das mães, água alcalina amamentação, quanto de água beber, Acqualive">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/hidratacao-materna-maes-e-filhos/">
<meta property="og:title" content="Hidratação Materna: Guia Completo Para Mães e Filhos">
<meta property="og:description" content="O presente mais importante deste Dia das Mães: a água certa para a saúde de toda a família.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/hidratacao-maternal.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Hidratação materna: o guia completo de água para mães e filhos","description":"Guia prático de hidratação para gestantes, mães que amamentam e crianças, com foco na qualidade da água consumida pela família.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-04-28","dateModified":"2026-04-28","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/hidratacao-maternal.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Quanta água uma gestante deve beber por dia?","acceptedAnswer":{"@type":"Answer","text":"Recomenda-se entre 2,5 e 3 litros de água por dia durante a gestação, distribuídos ao longo do dia. A demanda aumenta porque o corpo está produzindo líquido amniótico, expandindo o volume sanguíneo e formando o bebê. Beber em pequenos goles e priorizar água filtrada de qualidade é o ideal."}},
{"@type":"Question","name":"E durante a amamentação, quanto líquido a mãe precisa?","acceptedAnswer":{"@type":"Answer","text":"Mães que amamentam precisam de aproximadamente 3 a 3,5 litros de água por dia, já que o leite materno é cerca de 87% água. Uma boa dica é beber um copo de água sempre antes e depois de amamentar."}},
{"@type":"Question","name":"Quanta água uma criança deve beber?","acceptedAnswer":{"@type":"Answer","text":"Crianças de 1 a 3 anos: cerca de 1,3 litro/dia. De 4 a 8 anos: cerca de 1,7 litro/dia. De 9 a 13 anos: 2,1 a 2,4 litros/dia. Esses valores incluem a água presente em frutas, sopas e outras fontes. A qualidade da água oferecida é tão importante quanto a quantidade."}},
{"@type":"Question","name":"Posso oferecer água alcalina ionizada para meu filho?","acceptedAnswer":{"@type":"Answer","text":"Sim. A água alcalina ionizada da Acqualive é segura para toda a família, incluindo crianças. Ela é simplesmente água filtrada, com pH levemente alcalino e mineralizada com magnésio, exatamente como acontece em fontes naturais do mundo."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">DIA DAS MÃES • SAÚDE FAMILIAR</span>
    <h1>Hidratação <span>materna</span>: o guia completo de água para mães e filhos</h1>
    <p class="header-desc">No mês das mães, o presente que ninguém embrulha mas todo mundo sente: a água certa, todos os dias, para a família toda.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>28 abr 2026</span><span>•</span><span>10 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/hidratacao-maternal.jpg" alt="Mãe e filho sorrindo em uma cozinha clara, brindando com copos de água, representando o cuidado familiar com a hidratação" width="860" height="495" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Tem uma cena que se repete em quase toda casa: a mãe lembra de oferecer água para o filho, oferece para o marido, oferece para o cachorro, e esquece de beber a dela. O Dia das Mães é uma boa data para inverter essa lógica. <strong>A saúde da família começa pela hidratação dela.</strong></p>

  <p>Este guia foi escrito pensando na mãe gestante, na mãe que amamenta, na mãe de bebê, na mãe de criança e na mãe que cuida de todo mundo ao mesmo tempo. Em linguagem simples, com números reais e dicas práticas para colocar em prática hoje.</p>

  <div class="quote">"A primeira regra de uma família saudável é uma só: água boa, sempre disponível, para todo mundo." — pediatras citados pela Sociedade Brasileira de Pediatria</div>

  <nav class="toc">
    <div class="toc-title">Neste guia</div>
    <ol>
      <li><a href="#porque">Por que a hidratação da mãe importa tanto</a></li>
      <li><a href="#gestante">Na gestação: água para dois</a></li>
      <li><a href="#amamentacao">Amamentando: 87% de leite materno é água</a></li>
      <li><a href="#bebe">Hidratação do bebê: o que oferecer e quando</a></li>
      <li><a href="#crianca">Crianças e adolescentes: quanto, quando e como</a></li>
      <li><a href="#qualidade">Qualidade da água: o detalhe que muda tudo</a></li>
      <li><a href="#rotina">Rotina prática para a família toda</a></li>
      <li><a href="#presente">O presente de Dia das Mães que dura para sempre</a></li>
    </ol>
  </nav>

  <h2 id="porque">Por que a hidratação da mãe importa tanto</h2>
  <p>O corpo humano é, em média, 60% água. No bebê recém-nascido, esse número chega a 75%. Toda função importante do corpo (digestão, circulação, regulação da temperatura, produção de leite, produção de líquido amniótico) depende de água em quantidade e qualidade adequadas.</p>

  <p>Quando a mãe se hidrata mal, todo mundo sente: cai a energia, vem dor de cabeça, a pele resseca, o intestino fica preso, o leite materno reduz, e o cuidado com os filhos fica mais pesado. Quando ela bebe bem, ela rende mais, dorme melhor, sente menos cansaço e ainda passa esse hábito para os filhos.</p>

  <div class="info-box">
    <h4>O cuidado começa em quem cuida</h4>
    <p>Cuidar da mãe não é luxo. É a base. A criança aprende observando: se vê a mãe bebendo água várias vezes ao dia, ela própria vai pedir.</p>
  </div>

  <h2 id="gestante">Na gestação: água para dois</h2>
  <p>Durante os 9 meses, o corpo da mulher trabalha 24 horas por dia para criar uma vida nova. Esse trabalho consome muita água:</p>

  <ul class="check-list">
    <li>Formação do <strong>líquido amniótico</strong> que protege o bebê.</li>
    <li>Aumento de quase 50% no volume de <strong>sangue circulante</strong>.</li>
    <li>Crescimento da placenta e dos tecidos do bebê.</li>
    <li>Eliminação de toxinas pelos rins, agora trabalhando por dois.</li>
  </ul>

  <p>Recomendação geral: <strong>2,5 a 3 litros de água por dia</strong> durante a gestação, distribuídos ao longo do dia em pequenos goles. Uma boa hidratação reduz inchaço, cãibra, prisão de ventre, infecção urinária e até o risco de parto prematuro.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">2,5 a 3L</div><div class="stat-label">de água por dia recomendados na gestação</div></div>
    <div class="stat-card"><div class="stat-number">+50%</div><div class="stat-label">é o aumento do volume de sangue da gestante</div></div>
    <div class="stat-card"><div class="stat-number">87%</div><div class="stat-label">do leite materno é água</div></div>
  </div>

  <h2 id="amamentacao">Amamentando: 87% de leite materno é água</h2>
  <p>Sabe aquele leite materno que alimenta, hidrata e protege o bebê? Cerca de <strong>87% dele é água</strong>. Por isso, a mãe que amamenta precisa repor todo dia.</p>

  <p>Recomendação prática:</p>
  <ul class="check-list">
    <li><strong>3 a 3,5 litros de água por dia</strong> durante a amamentação.</li>
    <li>Um copo de água sempre <strong>antes</strong> e outro <strong>depois</strong> de amamentar.</li>
    <li>Manter sempre uma garrafa por perto: na cama, na cadeira de amamentação, no carro.</li>
    <li>Evitar refrigerantes e excesso de cafeína, que desidratam.</li>
  </ul>

  <div class="mid-cta">
    <p>Mãe bem hidratada, leite mais abundante. A diferença começa no copo.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Purificador Acqualive →</a>
  </div>

  <h2 id="bebe">Hidratação do bebê: o que oferecer e quando</h2>
  <p>Importante: bebês com menos de 6 meses, em aleitamento materno exclusivo, <strong>não precisam de água extra</strong>. O leite materno é alimento e hidratação ao mesmo tempo. Em climas muito quentes ou doenças com febre, o pediatra orienta caso a caso.</p>

  <p>A partir dos 6 meses, com a introdução alimentar, a água entra de vez na rotina. Comece oferecendo em copo de transição, sempre filtrada de qualidade, em pequenas quantidades várias vezes ao dia. Nada de suco industrializado.</p>

  <h2 id="crianca">Crianças e adolescentes: quanto, quando e como</h2>
  <p>Crianças não pedem água com a mesma frequência que precisam. Muitas só percebem que estão com sede quando já começaram a desidratar. Cabe ao adulto oferecer, lembrar, deixar disponível.</p>

  <table style="width:100%; border-collapse:collapse; margin:24px 0; font-size:15px;">
    <thead>
      <tr style="background:#eff6ff;">
        <th style="padding:12px; text-align:left; color:#1e3a8a; border-bottom:2px solid #bfdbfe;">Faixa etária</th>
        <th style="padding:12px; text-align:left; color:#1e3a8a; border-bottom:2px solid #bfdbfe;">Água por dia (referência)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">1 a 3 anos</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">cerca de 1,3 litro</td></tr>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">4 a 8 anos</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">cerca de 1,7 litro</td></tr>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">9 a 13 anos</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">2,1 a 2,4 litros</td></tr>
      <tr><td style="padding:10px;">14 a 18 anos</td><td style="padding:10px;">2,3 a 3,3 litros</td></tr>
    </tbody>
  </table>

  <p>Esses valores incluem a água presente nas frutas, sopas e demais alimentos. Mas a base segue sendo o copo d'água puro, várias vezes ao dia.</p>

  <p>Dicas para fazer a criança beber mais água:</p>
  <ul class="check-list">
    <li>Garrafinha personalizada que ela escolhe e leva para a escola.</li>
    <li>Copo sempre cheio na mesa durante as refeições.</li>
    <li>Frutas com alto teor de água: melancia, melão, laranja, pepino.</li>
    <li>Lembretes lúdicos: "vamos beber juntos?" funciona melhor que ordem.</li>
    <li>Ter um <strong>purificador acessível na altura dela</strong>, com torneira fácil de usar.</li>
  </ul>

  <h2 id="qualidade">Qualidade da água: o detalhe que muda tudo</h2>
  <p>De nada adianta lembrar de beber, se a água oferecida não é boa. E essa é a parte que muita mãe ignora porque parece detalhe técnico, mas é onde mora o cuidado de verdade.</p>

  <p>A água da torneira, mesmo tratada, costuma carregar <strong>cloro, trihalometanos, sedimentos das tubulações</strong> e, em algumas cidades, agrotóxicos. A água engarrafada pode chegar com <a href="https://blog.acqualive.com.br/microplasticos-no-cerebro/" target="_blank">centenas de milhares de partículas de microplástico por litro</a>, segundo estudo da Universidade de Columbia.</p>

  <div class="danger-box">
    <h4>O que toda mãe precisa saber</h4>
    <p>O corpo do bebê e da criança é mais sensível a contaminantes do que o do adulto. Cloro em excesso, microplásticos e metais pesados afetam mais quem está em fase de crescimento. Filtrar de verdade é proteção real.</p>
  </div>

  <p>Por isso, a recomendação é simples: <strong>tire o galão e a torneira pura da rotina e instale um purificador de qualidade na sua cozinha</strong>. A água ideal para a família é:</p>

  <ul class="check-list">
    <li>Sem cloro, sem trihalometanos, sem agrotóxicos.</li>
    <li>Sem microplásticos.</li>
    <li>Mineralizada com magnésio e outros minerais essenciais.</li>
    <li>Levemente alcalina, equilibrando a acidez da alimentação moderna.</li>
    <li>Disponível 24 horas por dia, na altura certa para todo mundo.</li>
  </ul>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-natureza.jpg" alt="Purificador Acqualive em uma cozinha luminosa, fonte de água segura para toda a família" class="article-img" loading="lazy" width="1200" height="800">

  <h2 id="rotina">Rotina prática para a família toda</h2>
  <p>Uma rotina de hidratação familiar simples e que funciona:</p>

  <ul class="check-list">
    <li><strong>Ao acordar:</strong> todo mundo bebe um copo de água antes de qualquer coisa. Inclusive a mãe.</li>
    <li><strong>Antes das refeições:</strong> meio copo de água, para preparar o corpo.</li>
    <li><strong>Durante o dia:</strong> garrafa por perto, sempre. Para mãe, pai e crianças.</li>
    <li><strong>Antes do banho do bebê:</strong> oferecer água, especialmente em dia quente.</li>
    <li><strong>Antes e depois de amamentar:</strong> mãe sempre bebe.</li>
    <li><strong>Antes de dormir:</strong> um último copo, sem exagero, para a noite toda.</li>
  </ul>

  <h2 id="presente">O presente de Dia das Mães que dura para sempre</h2>
  <p>Flores murcham. Bombons acabam. Roupas envelhecem. <strong>Saúde, não.</strong> Um purificador na cozinha é, hoje, um dos presentes mais inteligentes que existem para uma mãe. Porque ela cuida da família, mas também é cuidada todo dia, em cada copo de água que ela bebe, em cada xícara de chá, em cada mamadeira preparada para o bebê e em cada garrafinha que vai para a escola junto com a criança.</p>

  <p>É um presente que <strong>volta para você como pai, como filho, como marido, como avô</strong>. Porque uma mãe bem hidratada cuida melhor, sorri mais, dorme melhor e vive mais.</p>

  <div class="cta-section">
    <h2>Este Dia das Mães, presenteie <span>com saúde</span></h2>
    <p>Leve para a cozinha da sua mãe (ou da sua família) o Purificador Acqualive. Água alcalina ionizada, sem cloro, sem microplásticos, com magnésio. Para a mãe, para o filho, para todo dia.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" target="_blank">Água anti-inflamatória: o copo que desliga a inflamação silenciosa</a></li>
      <li><a href="https://blog.acqualive.com.br/microplasticos-no-cerebro/" target="_blank">Microplásticos no cérebro: o que ninguém te contou</a></li>
      <li><a href="https://blog.acqualive.com.br/qual-o-melhor-filtro-de-agua/" target="_blank">Qual o melhor filtro de água para a sua casa</a></li>
    </ul>
  </div>
</main>`
  )
};

export const EXTRA_ARTICLES = [article6, article7, article8, article9, article10, article11, article12];
