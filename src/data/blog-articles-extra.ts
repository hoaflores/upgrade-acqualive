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

const IFRAME_BRIDGE_SCRIPT = `<script>
(function(){
  function postHeight(){
    try {
      var h = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      window.parent.postMessage({ type: 'blog-iframe-height', height: h }, '*');
    } catch(e){}
  }
  function scrollParentTo(top){
    try { window.parent.postMessage({ type: 'blog-iframe-scroll', top: top }, '*'); } catch(e){}
  }
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    var rect = el.getBoundingClientRect();
    var topInDoc = rect.top + (window.pageYOffset || document.documentElement.scrollTop);
    scrollParentTo(topInDoc);
    if (history && history.replaceState) { history.replaceState(null, '', '#' + id); }
  }, false);
  window.addEventListener('load', postHeight);
  setTimeout(postHeight, 300);
  setTimeout(postHeight, 1200);
  setTimeout(postHeight, 2500);
  if (window.ResizeObserver) { new ResizeObserver(postHeight).observe(document.body); }
})();
</script>`;

const wrap = (head: string, body: string) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
${head}
<style>${SHARED_CSS}</style>
</head>
<body>
${body}
${IFRAME_BRIDGE_SCRIPT}
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

// ============================================================
// ARTIGO 13 — Hidratação no inverno
// ============================================================
const article13 = {
  title: "Hidratação no inverno: por que beber água no frio é tão importante quanto no verão",
  slug: "hidratacao-no-inverno",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hidratação no Inverno: Por Que Beber Água no Frio é Essencial | Acqualive</title>
<meta name="description" content="No inverno a sede some, mas a desidratação não. Entenda por que o corpo perde mais água no frio, os sinais silenciosos da desidratação e como manter a hidratação com água alcalina mineralizada.">
<meta name="keywords" content="hidratação no inverno, beber água no frio, desidratação inverno, água alcalina inverno, hidratação pele inverno, ar seco hidratação, Acqualive">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/hidratacao-no-inverno/">
<meta property="og:title" content="Hidratação no Inverno: o cuidado que ninguém comenta">
<meta property="og:description" content="No frio a sede diminui, mas o corpo continua perdendo água. Saiba como se manter hidratado de verdade no inverno.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/hidratacao-inverno.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Hidratação no inverno: por que beber água no frio é tão importante quanto no verão","description":"Por que o corpo se desidrata mais no inverno e como manter a hidratação com água alcalina ionizada.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-05-31","dateModified":"2026-05-31","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/hidratacao-inverno.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Por que sentimos menos sede no inverno?","acceptedAnswer":{"@type":"Answer","text":"No frio, o organismo concentra o sangue para preservar a temperatura central e os mecanismos de sede ficam menos sensíveis. Por isso a vontade de beber água diminui, mesmo quando o corpo continua perdendo líquido pela respiração, urina e pele ressecada."}},
{"@type":"Question","name":"Quanta água beber por dia no inverno?","acceptedAnswer":{"@type":"Answer","text":"A recomendação segue sendo cerca de 35 ml por quilo de peso corporal. Para uma pessoa de 70 kg, isso equivale a aproximadamente 2,5 litros por dia. Sopas, chás sem açúcar e frutas ajudam a complementar."}},
{"@type":"Question","name":"Água gelada ou morna no inverno?","acceptedAnswer":{"@type":"Answer","text":"Água em temperatura ambiente ou levemente morna é melhor absorvida no inverno e é mais convidativa. O importante é manter a regularidade ao longo do dia, sem esperar pela sede."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">SAÚDE E BEM-ESTAR</span>
    <h1>Hidratação no <span>inverno</span>: por que beber água no frio é tão importante quanto no verão</h1>
    <p class="header-desc">No frio a sede some, mas o corpo continua perdendo água o tempo todo. Veja como manter a hidratação sem precisar sentir vontade.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>31 mai 2026</span><span>•</span><span>7 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/hidratacao-inverno.jpg" alt="Mão segurando um copo de água alcalina ao lado de uma janela em manhã de inverno com xícara de chá" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Calor pede água gelada. Inverno pede cobertor, chá e sopa. Só que o corpo continua suando, respirando e urinando todos os dias, faça frio ou calor. A diferença é que, no inverno, a <strong>sede vira um mecanismo silencioso</strong>, e a desidratação passa despercebida até bater de frente com a pele, a disposição e a imunidade.</p>

  <div class="quote">"A desidratação leve no inverno é uma das principais causas de queda de energia, dor de cabeça e baixa imunidade nesta época do ano."</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#sede">Por que a sede diminui no inverno</a></li>
      <li><a href="#perdas">Por onde a água vai embora no frio</a></li>
      <li><a href="#sinais">Os sinais silenciosos da desidratação</a></li>
      <li><a href="#quanto">Quanto beber e como facilitar</a></li>
      <li><a href="#qualidade">A qualidade da água faz diferença</a></li>
    </ol>
  </nav>

  <h2 id="sede">Por que a sede diminui no inverno</h2>
  <p>No frio, o organismo prioriza manter a temperatura central. O sangue se concentra nos órgãos internos e os receptores de sede ficam menos ativos. Resultado: você passa horas sem lembrar de beber água, mesmo perdendo líquido o tempo todo.</p>

  <h2 id="perdas">Por onde a água vai embora no frio</h2>
  <ul class="check-list">
    <li><strong>Respiração:</strong> o ar seco do inverno faz você perder mais água a cada vez que respira. Aquela "fumaça" branca ao expirar é água do seu corpo.</li>
    <li><strong>Pele:</strong> a baixa umidade puxa hidratação da pele, deixando-a áspera, ressecada e mais propensa a coceira.</li>
    <li><strong>Aquecedores e ar condicionado quente:</strong> reduzem ainda mais a umidade do ambiente.</li>
    <li><strong>Bebidas diuréticas:</strong> café, chá preto e bebidas alcoólicas aumentam a perda de líquido pela urina.</li>
  </ul>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">2 a 4%</div><div class="stat-label">de desidratação já compromete a memória, o humor e a concentração</div></div>
    <div class="stat-card"><div class="stat-number">35 ml</div><div class="stat-label">por quilo de peso, é a referência diária para adultos</div></div>
    <div class="stat-card"><div class="stat-number">3x</div><div class="stat-label">mais perda de água pela respiração em ambientes muito secos</div></div>
  </div>

  <h2 id="sinais">Os sinais silenciosos da desidratação no inverno</h2>
  <p>Eles não vêm como sede. Eles vêm como:</p>
  <ul class="check-list">
    <li>Pele puxando, lábios rachados, cabelo opaco.</li>
    <li>Cansaço logo no meio da tarde, mesmo dormindo bem.</li>
    <li>Dor de cabeça leve e recorrente.</li>
    <li>Boca seca ao acordar.</li>
    <li>Urina mais escura e em menor quantidade.</li>
    <li>Constipação e digestão lenta.</li>
    <li>Mais resfriados, gripes e crises de sinusite.</li>
  </ul>

  <div class="info-box">
    <h4>Imunidade e hidratação</h4>
    <p>As mucosas da boca, nariz e garganta são a primeira barreira contra vírus respiratórios. Bem hidratadas, elas funcionam. Ressecadas, viram porta de entrada.</p>
  </div>

  <div class="mid-cta">
    <p>Hidratação é cuidado contínuo, independente da estação.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Purificador Acqualive →</a>
  </div>

  <h2 id="quanto">Quanto beber e como facilitar</h2>
  <p>A referência segue sendo simples: aproximadamente <strong>35 ml de água por quilo de peso corporal</strong>. Para uma pessoa de 70 kg, são cerca de 2,5 litros por dia. No inverno, vale dividir esse volume em pequenas doses ao longo do dia, em formatos que combinam com o frio:</p>

  <ul class="check-list">
    <li>Garrafa térmica ao lado, com água em temperatura ambiente.</li>
    <li>Chás sem açúcar (camomila, hortelã, gengibre) contam como hidratação.</li>
    <li>Sopas, caldos e cremes naturais aumentam a ingestão de líquidos.</li>
    <li>Frutas com alto teor de água: laranja, mexerica, kiwi, pera, abacaxi.</li>
    <li>Um copo de água logo ao acordar, antes do café.</li>
    <li>Um copo de água quinze minutos antes de cada refeição.</li>
  </ul>

  <h2 id="qualidade">A qualidade da água faz diferença</h2>
  <p>De pouco adianta beber bastante se a água estiver cheia de cloro, microplásticos e contaminantes. <a href="https://blog.acqualive.com.br/agua-da-torneira-segura-brasil/" target="_blank">A água da torneira no Brasil</a> raramente chega pronta para o consumo ideal, e a água engarrafada carrega o problema dos microplásticos.</p>

  <p>O <strong>Purificador Acqualive</strong> entrega, todos os dias, água alcalina ionizada, mineralizada com magnésio e cálcio, sem cloro, sem microplásticos e fresquinha. É a água que o seu corpo precisa, em qualquer estação do ano, com hidratação celular mais profunda e absorção facilitada.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-natureza.jpg" alt="Purificador Acqualive em cozinha aconchegante, fonte constante de água alcalina no inverno" class="article-img" loading="lazy" width="1200" height="800">

  <div class="cta-section">
    <h2>Hidrate-se de verdade <span>o ano inteiro</span></h2>
    <p>Tenha água alcalina, mineralizada e segura para você e sua família. Em até 10x sem juros e frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" target="_blank">Água anti-inflamatória: o copo que desliga a inflamação silenciosa</a></li>
      <li><a href="https://blog.acqualive.com.br/cloro-pele-cabelo/" target="_blank">Por que sua pele e cabelo estão ressecados</a></li>
    </ul>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 14 — Magnésio e benefícios para a saúde
// ============================================================
const article14 = {
  title: "Magnésio: o mineral esquecido que sustenta sua energia, seu sono e o seu coração",
  slug: "magnesio-beneficios-saude",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Magnésio: Benefícios para Saúde, Sono, Energia e Coração | Acqualive</title>
<meta name="description" content="Mais de 60% dos brasileiros consome menos magnésio do que precisa. Veja os benefícios reais desse mineral para sono, energia, humor, ossos e coração, e a forma mais simples de repor com água alcalina mineralizada.">
<meta name="keywords" content="magnésio benefícios, deficiência de magnésio, magnésio sono, magnésio coração, água com magnésio, magnésio na água, água alcalina magnésio, Acqualive">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/magnesio-beneficios-saude/">
<meta property="og:title" content="Magnésio: o mineral esquecido que muda sua saúde">
<meta property="og:description" content="Benefícios reais do magnésio, sintomas de deficiência e como reverter com hidratação inteligente.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/magnesio-saude.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Magnésio: o mineral esquecido que sustenta energia, sono e coração","description":"Tudo sobre magnésio: funções no corpo, sintomas de deficiência, fontes alimentares e como repor pela água.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-05-31","dateModified":"2026-05-31","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/magnesio-saude.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Para que serve o magnésio?","acceptedAnswer":{"@type":"Answer","text":"O magnésio participa de mais de 300 reações enzimáticas no corpo. Atua na produção de energia, contração muscular, ritmo cardíaco, equilíbrio do sistema nervoso, sono profundo, fortalecimento ósseo e regulação da pressão arterial."}},
{"@type":"Question","name":"Quais os sintomas da falta de magnésio?","acceptedAnswer":{"@type":"Answer","text":"Câimbras frequentes, fadiga, insônia, ansiedade, dor de cabeça, palpitações, contrações musculares involuntárias, constipação e pressão alta de difícil controle podem indicar deficiência de magnésio."}},
{"@type":"Question","name":"Qual a melhor forma de repor magnésio?","acceptedAnswer":{"@type":"Answer","text":"A combinação ideal é alimentação rica em vegetais verde-escuros, oleaginosas, sementes e leguminosas, somada a uma boa hidratação com água que contenha magnésio de forma natural, como a água alcalina ionizada produzida pelo Acqualive."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">SAÚDE E BEM-ESTAR</span>
    <h1><span>Magnésio</span>: o mineral esquecido que sustenta sua energia, seu sono e o seu coração</h1>
    <p class="header-desc">Participa de mais de 300 reações no corpo, e ainda assim a maioria das pessoas vive em déficit. Entenda por quê e como reverter.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>31 mai 2026</span><span>•</span><span>9 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/magnesio-saude.jpg" alt="Tábua de madeira com alimentos ricos em magnésio: folhas verdes, amêndoas, sementes, abacate, banana, cacau e copo de água" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Você dorme mal, acorda cansada, sente câimbras na panturrilha durante a noite, está mais ansiosa do que de costume e suas pálpebras tremem do nada. É fácil culpar o estresse, o trabalho, a vida moderna. Mas, em muitos desses casos, há um mineral por trás de quase tudo: o <strong>magnésio</strong>.</p>

  <div class="quote">"O magnésio é o coadjuvante mais importante da bioquímica humana. Quando ele falta, tudo desafina."</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#oqueé">O que é e por que ele é tão importante</a></li>
      <li><a href="#funcoes">As principais funções no corpo</a></li>
      <li><a href="#deficit">Sinais de deficiência</a></li>
      <li><a href="#fontes">Onde encontrar magnésio na alimentação</a></li>
      <li><a href="#agua">Magnésio também vem da água</a></li>
      <li><a href="#acqualive">Como o Acqualive entra nessa conta</a></li>
    </ol>
  </nav>

  <h2 id="oqueé">O que é e por que ele é tão importante</h2>
  <p>O magnésio é o quarto mineral mais abundante no corpo humano. Está em todas as células, mas em maior concentração nos ossos, músculos, cérebro e coração. Participa de mais de <strong>300 reações enzimáticas</strong>: da produção de energia (ATP) à síntese de proteínas, passando pelo controle do açúcar no sangue, da pressão arterial e da atividade neural.</p>

  <p>O problema é que a alimentação moderna, baseada em ultraprocessados e em solos cada vez mais pobres, entrega muito menos magnésio do que entregava há cinquenta anos.</p>

  <h2 id="funcoes">As principais funções no corpo</h2>

  <ul class="check-list">
    <li><strong>Energia:</strong> sem magnésio, o corpo não produz ATP. Cansaço crônico tem aí uma das suas raízes.</li>
    <li><strong>Sono:</strong> regula a melatonina e o GABA, neurotransmissor que acalma o sistema nervoso. Ajuda a dormir profundamente.</li>
    <li><strong>Coração:</strong> mantém o ritmo cardíaco regular e relaxa os vasos sanguíneos, ajudando a controlar a pressão.</li>
    <li><strong>Músculos:</strong> previne câimbras, contraturas e tremores involuntários.</li>
    <li><strong>Ossos:</strong> cerca de 60% do magnésio do corpo está nos ossos. Sem ele, o cálcio também não se fixa direito.</li>
    <li><strong>Humor e ansiedade:</strong> estudos associam baixos níveis de magnésio à ansiedade, irritabilidade e episódios depressivos.</li>
    <li><strong>Digestão:</strong> contribui para o trânsito intestinal e ajuda a evitar constipação.</li>
  </ul>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">+300</div><div class="stat-label">reações enzimáticas dependem de magnésio</div></div>
    <div class="stat-card"><div class="stat-number">60%</div><div class="stat-label">dos brasileiros consomem menos magnésio do que o recomendado</div></div>
    <div class="stat-card"><div class="stat-number">320 mg</div><div class="stat-label">é a ingestão diária recomendada para mulheres adultas</div></div>
  </div>

  <h2 id="deficit">Sinais de deficiência</h2>
  <p>A deficiência de magnésio é silenciosa, mas dá sinais. Os mais comuns:</p>
  <ul class="check-list">
    <li>Câimbras à noite, principalmente em panturrilhas e pés.</li>
    <li>Tremor involuntário das pálpebras.</li>
    <li>Insônia e sono fragmentado.</li>
    <li>Cansaço sem motivo aparente.</li>
    <li>Ansiedade, irritabilidade, sensibilidade ao estresse.</li>
    <li>Dor de cabeça frequente e enxaquecas.</li>
    <li>Palpitações e arritmias leves.</li>
    <li>Constipação e digestão difícil.</li>
  </ul>

  <div class="danger-box">
    <h4>Atenção</h4>
    <p>Câimbras recorrentes e palpitações merecem investigação. Magnésio é parte importante da história, mas o diagnóstico precisa de avaliação médica.</p>
  </div>

  <h2 id="fontes">Onde encontrar magnésio na alimentação</h2>
  <p>Boas fontes de magnésio incluem:</p>
  <ul class="check-list">
    <li>Folhas verde-escuras: espinafre, couve, rúcula.</li>
    <li>Sementes de abóbora, girassol e linhaça.</li>
    <li>Oleaginosas: amêndoas, castanha-do-pará, castanha de caju.</li>
    <li>Leguminosas: feijão preto, lentilha, grão-de-bico.</li>
    <li>Abacate e banana.</li>
    <li>Cacau puro e chocolate amargo acima de 70%.</li>
    <li>Cereais integrais: aveia, arroz integral, quinoa.</li>
  </ul>

  <div class="mid-cta">
    <p>Repor magnésio começa na água que você bebe todos os dias.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="agua">Magnésio também vem da água</h2>
  <p>Pouca gente lembra, mas a <strong>água mineralizada é uma das fontes mais consistentes</strong> de magnésio biodisponível no dia a dia. Diferente do suplemento, ela entra naturalmente, em pequenas doses, várias vezes ao dia, do jeito que o corpo melhor absorve.</p>

  <p>O ponto é que a água da torneira praticamente não tem magnésio, e a maioria das águas engarrafadas tem teores baixos. Para realmente repor pela hidratação, é preciso uma água com magnésio na composição.</p>

  <h2 id="acqualive">Como o Acqualive entra nessa conta</h2>
  <p>O <strong>Purificador Acqualive</strong> usa cartucho ionizador com magnésio natural. A água passa pelo sistema, é filtrada de cloro e contaminantes, alcalinizada, e ganha minerais essenciais, inclusive o magnésio, em quantidade real e biodisponível.</p>

  <p>É hidratação que vira nutrição. Sem cápsula, sem pó, sem suplemento. Só o copo de água que você já bebe todos os dias, agora trabalhando a favor da sua saúde de verdade.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-moderna.png" alt="Purificador Acqualive em cozinha moderna, entregando água alcalina mineralizada com magnésio" class="article-img" loading="lazy" width="1080" height="1350">

  <div class="info-box">
    <h4>Por que combinar comida e água</h4>
    <p>Magnésio dos alimentos depende de boa digestão para ser absorvido. O magnésio da água alcalina é biodisponível e entra ao longo do dia inteiro, em doses pequenas e constantes.</p>
  </div>

  <div class="cta-section">
    <h2>Sua hidratação pode <span>nutrir</span></h2>
    <p>Tenha o Purificador Acqualive em casa e dê ao seu corpo magnésio biodisponível em cada copo. Em até 10x sem juros e frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" target="_blank">Água anti-inflamatória: o copo que desliga a inflamação silenciosa</a></li>
      <li><a href="https://blog.acqualive.com.br/qual-o-melhor-filtro-de-agua/" target="_blank">Qual o melhor filtro de água para a sua casa</a></li>
    </ul>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 15 — Blue Zones
// ============================================================
const article15 = {
  title: "Blue Zones: o segredo da água dos lugares onde as pessoas vivem mais de 100 anos",
  slug: "blue-zones-agua-longevidade",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blue Zones: A Água dos Lugares Onde Se Vive Mais de 100 Anos | Acqualive</title>
<meta name="description" content="Sardenha, Okinawa, Ikaria, Nicoya e Loma Linda concentram os centenários mais saudáveis do planeta. Descubra o que há em comum na água que bebem e como ter essa mesma água em casa com o Purificador Acqualive.">
<meta name="keywords" content="blue zones, zonas azuis, água longevidade, Okinawa água, Sardenha água, Ikaria centenários, água alcalina longevidade, Acqualive">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/blue-zones-agua-longevidade/">
<meta property="og:title" content="Blue Zones: o segredo da água dos centenários">
<meta property="og:description" content="O que a água de Okinawa, Sardenha, Ikaria, Nicoya e Loma Linda tem em comum, e como ter algo parecido em casa.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/blue-zones.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Blue Zones: o segredo da água dos lugares onde as pessoas vivem mais de 100 anos","description":"As cinco Blue Zones do mundo, o perfil da água que consomem e como replicar isso em casa.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-05-31","dateModified":"2026-05-31","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/blue-zones.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"O que são as Blue Zones?","acceptedAnswer":{"@type":"Answer","text":"Blue Zones, ou Zonas Azuis, são cinco regiões do planeta com concentração extraordinária de pessoas que vivem além dos 100 anos com saúde: Sardenha (Itália), Okinawa (Japão), Ikaria (Grécia), Nicoya (Costa Rica) e Loma Linda (Califórnia, EUA). O conceito foi mapeado pelo pesquisador Dan Buettner."}},
{"@type":"Question","name":"Como é a água das Blue Zones?","acceptedAnswer":{"@type":"Answer","text":"É uma água naturalmente alcalina, rica em minerais como magnésio, cálcio e bicarbonato, vinda de fontes vulcânicas, montanhas ou aquíferos profundos. Tem pH levemente acima do neutro e poder antioxidante natural."}},
{"@type":"Question","name":"Dá para ter essa mesma água em casa?","acceptedAnswer":{"@type":"Answer","text":"Sim. O Purificador Acqualive utiliza um cartucho ionizador que reproduz o efeito das fontes alcalinas naturais. A água sai filtrada, alcalinizada, mineralizada com magnésio e com características semelhantes às águas consumidas nas Blue Zones."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">LONGEVIDADE</span>
    <h1><span>Blue Zones</span>: o segredo da água dos lugares onde as pessoas vivem mais de 100 anos</h1>
    <p class="header-desc">Cinco regiões do mundo concentram os centenários mais saudáveis do planeta. E a água que eles bebem segue um padrão muito claro.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>31 mai 2026</span><span>•</span><span>10 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/blue-zones.jpg" alt="Casal de idosos caminhando em olival ao pôr do sol perto do mar, paisagem mediterrânea inspirada nas Blue Zones" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Em algumas regiões do planeta, viver até os 100 anos não é exceção. É padrão. Pessoas trabalham na horta aos 95, sobem morro aos 102 e mantêm clareza mental até o último dia. O pesquisador Dan Buettner mapeou esses lugares e chamou-os de <strong>Blue Zones</strong>, ou Zonas Azuis. São cinco: Sardenha (Itália), Okinawa (Japão), Ikaria (Grécia), Nicoya (Costa Rica) e Loma Linda (Califórnia).</p>

  <p>Muita gente fala dos hábitos: alimentação à base de plantas, vida ativa, comunidade, propósito. Quase ninguém fala do que está dentro do copo deles, todos os dias, várias vezes por dia. <strong>A água.</strong></p>

  <div class="quote">"As Blue Zones têm em comum uma água naturalmente alcalina, rica em minerais e com poder antioxidante. Essa não é uma coincidência geográfica."</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#oqsao">O que são as Blue Zones</a></li>
      <li><a href="#cinco">As cinco regiões e suas águas</a></li>
      <li><a href="#padrao">O padrão escondido no copo deles</a></li>
      <li><a href="#brasil">E a nossa água no Brasil?</a></li>
      <li><a href="#acqualive">Como ter água de Blue Zone em casa</a></li>
    </ol>
  </nav>

  <h2 id="oqsao">O que são as Blue Zones</h2>
  <p>O conceito nasceu de uma investigação demográfica e ganhou o mundo com a série Blue Zones, da Netflix, e o trabalho da National Geographic. São regiões onde o número de centenários por habitante é desproporcionalmente alto e a qualidade de vida na velhice é notável.</p>

  <h2 id="cinco">As cinco regiões e suas águas</h2>

  <h3>Sardenha, Itália</h3>
  <p>Pequenos vilarejos nas montanhas, água que desce de fontes calcárias ricas em magnésio e cálcio. Vinho Cannonau e dieta mediterrânea complementam.</p>

  <h3>Okinawa, Japão</h3>
  <p>Água vinda de aquíferos coralíneos, naturalmente alcalina, rica em minerais e com poder antioxidante. Os okinawanos a chamam de "água que carrega vida".</p>

  <h3>Ikaria, Grécia</h3>
  <p>Ilha grega famosa pelos termais. A água ali é mineralizada por rochas vulcânicas, alcalina e bebida em abundância ao longo do dia.</p>

  <h3>Nicoya, Costa Rica</h3>
  <p>Aquíferos profundos atravessam rochas vulcânicas e calcárias, gerando uma água naturalmente alcalina, com cálcio e magnésio em alta concentração.</p>

  <h3>Loma Linda, Califórnia</h3>
  <p>Comunidade adventista com hábitos de vida muito conscientes. A água consumida é, em grande parte, filtrada e mineralizada, frequentemente alcalinizada de forma natural ou tecnológica.</p>

  <h2 id="padrao">O padrão escondido no copo deles</h2>
  <p>Apesar de virem de continentes diferentes, as águas das Blue Zones têm assinatura parecida:</p>

  <ul class="check-list">
    <li><strong>pH levemente alcalino</strong>, geralmente entre 8 e 9.</li>
    <li><strong>Ricas em magnésio, cálcio e bicarbonatos.</strong></li>
    <li><strong>Baixo teor de contaminantes</strong>, sem cloro adicionado e sem microplásticos.</li>
    <li><strong>Poder antioxidante natural</strong>, devido ao tipo de mineralização.</li>
    <li><strong>Consumo abundante</strong>, em pequenas doses, várias vezes ao dia.</li>
  </ul>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">5</div><div class="stat-label">regiões do mundo classificadas como Blue Zones</div></div>
    <div class="stat-card"><div class="stat-number">100+</div><div class="stat-label">anos de expectativa em algumas comunidades</div></div>
    <div class="stat-card"><div class="stat-number">pH 8-9</div><div class="stat-label">média da água naturalmente consumida nessas regiões</div></div>
  </div>

  <h2 id="brasil">E a nossa água no Brasil?</h2>
  <p>A água da torneira brasileira é tratada com cloro, costuma ter pH levemente ácido e baixo teor de magnésio. A engarrafada carrega o problema dos <a href="https://blog.acqualive.com.br/microplasticos-no-cerebro/" target="_blank">microplásticos</a>. Estamos longe, em condição natural, do padrão das Blue Zones.</p>

  <p>A boa notícia é que dá para reproduzir esse padrão em casa.</p>

  <div class="mid-cta">
    <p>A mesma assinatura das águas mais saudáveis do mundo, na torneira da sua cozinha.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="acqualive">Como ter água de Blue Zone em casa</h2>
  <p>O <strong>Purificador Acqualive</strong> foi desenvolvido justamente com essa lógica: replicar, em casa, o tipo de água que os povos mais longevos do mundo bebem todos os dias.</p>

  <p>O processo é simples. A água comum entra pelo filtro, passa por etapas que removem cloro, sedimentos e partículas indesejadas, e em seguida atravessa o cartucho ionizador com magnésio. Sai alcalina, mineralizada, com pH próximo a 9 e poder antioxidante real (ORP reduzido). É a evolução do filtro de barro tradicional, sem perder a essência da água fresquinha.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/terracota-cozinha-classica.png" alt="Purificador Acqualive Terracota em cozinha clássica, oferecendo água alcalina inspirada nas Blue Zones" class="article-img" loading="lazy" width="1080" height="1350">

  <div class="info-box">
    <h4>Hidratação como hábito de longevidade</h4>
    <p>A diferença das Blue Zones não está em um único ato heroico, mas na soma de pequenos gestos diários. A água é um deles, talvez o mais constante. Mudar a sua água é uma das decisões mais simples para começar a se aproximar desse padrão de vida.</p>
  </div>

  <div class="cta-section">
    <h2>Beba a mesma água <span>dos centenários</span></h2>
    <p>Tenha em casa a versão moderna das águas das Blue Zones, com o Purificador Acqualive. Em até 10x sem juros e frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" target="_blank">Água anti-inflamatória: o copo que desliga a inflamação silenciosa</a></li>
      <li><a href="https://blog.acqualive.com.br/magnesio-beneficios-saude/" target="_blank">Magnésio: o mineral esquecido que sustenta sua saúde</a></li>
    </ul>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 16 — Hidratação no pé na jaca da Copa do Mundo
// ============================================================
const article16 = {
  title: "Pé na jaca nos jogos do Brasil? Como a hidratação ajuda a equilibrar a Copa do Mundo",
  slug: "hidratacao-copa-do-mundo-brasil",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hidratação Para Equilibrar o Pé na Jaca da Copa do Mundo | Acqualive</title>
<meta name="description" content="Cerveja, fritura e churrasco nos jogos do Brasil são quase tradição. Veja como a hidratação inteligente com água alcalina ajuda a equilibrar a acidez, a ressaca e a inflamação dos dias de Copa do Mundo.">
<meta name="keywords" content="hidratação copa do mundo, ressaca cerveja, equilíbrio ácido base, água alcalina ressaca, jogos do Brasil saúde, pé na jaca, Acqualive">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/hidratacao-copa-do-mundo-brasil/">
<meta property="og:title" content="Pé na jaca nos jogos do Brasil? A hidratação salva.">
<meta property="og:description" content="Como equilibrar a comilança, a cerveja e a fritura dos jogos da Copa com hidratação alcalina inteligente.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/copa-do-mundo-hidratacao.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Pé na jaca nos jogos do Brasil? Como a hidratação ajuda a equilibrar a Copa do Mundo","description":"Estratégias práticas de hidratação para equilibrar a ingestão de álcool, frituras e doces nos dias de jogos do Brasil.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-05-31","dateModified":"2026-05-31","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/copa-do-mundo-hidratacao.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Por que a cerveja causa tanta ressaca?","acceptedAnswer":{"@type":"Answer","text":"O álcool é diurético, faz o corpo eliminar mais água e minerais do que ingere, e gera subprodutos inflamatórios. O resultado é desidratação, dor de cabeça, cansaço e enjoo no dia seguinte."}},
{"@type":"Question","name":"Água alcalina ajuda na ressaca?","acceptedAnswer":{"@type":"Answer","text":"Sim. A água alcalina mineralizada ajuda a repor magnésio e outros minerais perdidos com o álcool, neutraliza parte da acidez metabólica gerada pela cerveja, frituras e doces, e acelera a reidratação celular."}},
{"@type":"Question","name":"Quanto beber antes, durante e depois do jogo?","acceptedAnswer":{"@type":"Answer","text":"O ideal é um copo de água ao acordar, mais um copo antes do jogo, alternar água com cada cerveja ou refrigerante durante o jogo e beber pelo menos dois copos antes de dormir. No dia seguinte, retomar a meta de 35 ml por quilo de peso."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">SAÚDE E BEM-ESTAR</span>
    <h1>Pé na jaca nos <span>jogos do Brasil</span>? Como a hidratação equilibra a sua Copa do Mundo</h1>
    <p class="header-desc">Churrasco, cerveja e fritura fazem parte da festa. Mas o corpo cobra a conta. Veja como atravessar a Copa do Mundo com saúde, sem virar o esportista chato do grupo.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>31 mai 2026</span><span>•</span><span>8 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/copa-do-mundo-hidratacao.jpg" alt="Amigos com camisa da seleção brasileira assistindo jogo, mesa com petiscos, cerveja e uma jarra grande de água com limão" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Dia de jogo do Brasil na Copa do Mundo tem cara, cheiro e cardápio próprios. Camisa amarela, churrasco no fogo, cerveja gelada, coxinha, batata frita, refrigerante, vinho, doce no fim. Acontece em casa, no bar, no escritório que liberou para assistir. E acontece em série: dia sim, dia não, durante semanas.</p>

  <p>O corpo aguenta um dia. Aguenta dois. Aguenta a Copa inteira? Só se você ajudar. E a ajuda mais barata, mais simples e mais efetiva tem um nome: <strong>água, na hora certa e na qualidade certa</strong>.</p>

  <div class="quote">"A maior parte da ressaca não é o álcool em si. É a desidratação e a perda de minerais que ele provoca."</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#corpo">O que acontece com o corpo no dia de jogo</a></li>
      <li><a href="#agua-vs">Água x cerveja x refrigerante</a></li>
      <li><a href="#estrategia">Estratégia de hidratação para o jogo</a></li>
      <li><a href="#dia-seguinte">Recuperação no dia seguinte</a></li>
      <li><a href="#acqualive">Onde o Acqualive entra</a></li>
    </ol>
  </nav>

  <h2 id="corpo">O que acontece com o corpo no dia de jogo</h2>
  <p>Cerveja é diurética: faz você urinar mais do que bebe. Fritura é acidificante e inflamatória. Sal em excesso retém líquido e sobrecarrega rins. Açúcar do refrigerante e do doce desestabiliza a glicemia. Soma tudo e o resultado é <strong>desidratação, perda de minerais, inflamação sistêmica</strong> e aquele "dia seguinte" arrasado, sem disposição para nada.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">3 a 4x</div><div class="stat-label">mais perda de água pela urina ao beber cerveja em relação à água</div></div>
    <div class="stat-card"><div class="stat-number">35 ml</div><div class="stat-label">por quilo de peso, a meta diária de hidratação</div></div>
    <div class="stat-card"><div class="stat-number">1:1</div><div class="stat-label">razão ideal entre copos de cerveja e copos de água no dia do jogo</div></div>
  </div>

  <h2 id="agua-vs">Água x cerveja x refrigerante</h2>
  <p>Cerveja, refrigerante e isotônico hidratam menos do que parecem. <strong>Água ainda é a melhor bebida do planeta</strong>, e é onde você ganha ou perde a batalha contra a ressaca. Se a água também repõe magnésio, melhor ainda.</p>

  <h2 id="estrategia">Estratégia de hidratação para o jogo</h2>

  <h3>Antes do jogo</h3>
  <ul class="check-list">
    <li>Acorde e beba um copo cheio de água alcalina.</li>
    <li>Almoce normalmente, com bastante salada e frutas com água (melancia, abacaxi, laranja).</li>
    <li>Trinta minutos antes da partida, beba mais um copo de água.</li>
  </ul>

  <h3>Durante o jogo</h3>
  <ul class="check-list">
    <li>Para cada cerveja ou refrigerante, beba um copo de água ao lado.</li>
    <li>Tenha uma jarra de água com fatias de limão e gelo na mesa. Convida o grupo todo a beber.</li>
    <li>Modere fritura e doce. Eles puxam mais água ainda.</li>
  </ul>

  <h3>Depois do jogo</h3>
  <ul class="check-list">
    <li>Antes de dormir, dois copos cheios de água alcalina, devagar.</li>
    <li>Evite dormir desidratado. É o que separa um dia seguinte ruim de um dia seguinte funcional.</li>
  </ul>

  <div class="mid-cta">
    <p>O segredo do dia seguinte tranquilo está no que você bebe junto com a cerveja.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="dia-seguinte">Recuperação no dia seguinte</h2>
  <ul class="check-list">
    <li>Comece o dia com um copo grande de água alcalina e o suco de meio limão.</li>
    <li>Café da manhã com fruta, ovo e algo integral. Evite repetir a gordura da noite anterior.</li>
    <li>Continue bebendo água ao longo da manhã.</li>
    <li>Caminhada leve de 20 a 30 minutos ajuda a destravar a circulação.</li>
    <li>Almoço leve, com folhas verdes (magnésio) e proteína magra.</li>
  </ul>

  <div class="info-box">
    <h4>Por que a água alcalina ajuda</h4>
    <p>A acidez gerada por álcool, fritura e açúcar puxa minerais do corpo para ser neutralizada. Uma água levemente alcalina e mineralizada ajuda nesse equilíbrio, devolve magnésio e cálcio perdidos e acelera a reidratação celular.</p>
  </div>

  <h2 id="acqualive">Onde o Acqualive entra</h2>
  <p>O <strong>Purificador Acqualive</strong> entrega água alcalina ionizada, com magnésio biodisponível, sem cloro e sem microplásticos. É a água ideal para começar o dia, para abastecer a jarra do dia de jogo e para fechar a noite antes de dormir.</p>

  <p>Você não precisa virar atleta na Copa. Só precisa hidratar direito enquanto torce.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-natureza.jpg" alt="Purificador Acqualive em cozinha com plantas, água alcalina para acompanhar os jogos da Copa do Mundo" class="article-img" loading="lazy" width="1200" height="800">

  <div class="cta-section">
    <h2>Atravesse a Copa <span>sem se entregar</span></h2>
    <p>Tenha água alcalina mineralizada todos os dias, com o Purificador Acqualive. Em até 10x sem juros e frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" target="_blank">Água anti-inflamatória: o copo que desliga a inflamação silenciosa</a></li>
      <li><a href="https://blog.acqualive.com.br/magnesio-beneficios-saude/" target="_blank">Magnésio: o mineral esquecido que sustenta sua saúde</a></li>
    </ul>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 17 — Como fazer água alcalina em casa
// ============================================================
const article17 = {
  title: "Como fazer água alcalina em casa em menos de 1 minuto (e qual receita realmente funciona)",
  slug: "como-fazer-agua-alcalina-em-casa",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Como Fazer Água Alcalina em Casa em 30 Segundos | Acqualive</title>
<meta name="description" content="Aprenda 3 formas de fazer água alcalina em casa: com bicarbonato, com limão e com filtro ionizador. Veja as vantagens, limites de cada receita e qual delas entrega a água perfeita de verdade.">
<meta name="keywords" content="como fazer água alcalina em casa, água alcalina caseira, água com bicarbonato, água com limão, filtro ionizador, água alcalina ionizada, Acqualive, purificador de água alcalina">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/como-fazer-agua-alcalina-em-casa/">
<meta property="og:title" content="Como fazer água alcalina em casa em menos de 1 minuto">
<meta property="og:description" content="Três receitas de água alcalina caseira: vantagens, limites e qual realmente funciona para o dia a dia.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-alcalina-em-casa.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Como fazer água alcalina em casa em menos de 1 minuto","description":"As três principais formas de fazer água alcalina em casa: bicarbonato, limão e filtro ionizador. Comparativo completo.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-05-31","dateModified":"2026-05-31","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-alcalina-em-casa.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Dá para fazer água alcalina em casa?","acceptedAnswer":{"@type":"Answer","text":"Sim. As três formas mais comuns são: adicionar bicarbonato de sódio à água, espremer meio limão em um copo de água morna ou utilizar um filtro ionizador. Cada opção tem vantagens e limites diferentes."}},
{"@type":"Question","name":"Água com bicarbonato pode ser bebida todos os dias?","acceptedAnswer":{"@type":"Answer","text":"Não em grande quantidade. Para alcançar a hidratação diária ideal, seria necessário consumir cerca de 11 g de bicarbonato por dia, muito acima do recomendado. É uma alternativa pontual, não rotina."}},
{"@type":"Question","name":"Qual a melhor forma de ter água alcalina em casa?","acceptedAnswer":{"@type":"Answer","text":"O filtro ionizador, como o Purificador Acqualive, é a única forma que entrega água alcalina ionizada, filtrada, mineralizada com magnésio e com poder antioxidante real, sem dose extra de sódio e sem depender de limões frescos."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">ÁGUA ALCALINA</span>
    <h1>Como fazer <span>água alcalina em casa</span> em menos de 1 minuto</h1>
    <p class="header-desc">Três receitas, vantagens reais, limites honestos. E uma única opção que entrega a água perfeita de verdade, todos os dias.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>31 mai 2026</span><span>•</span><span>8 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-alcalina-em-casa.jpg" alt="Bancada de cozinha clara com três copos de água: um com bicarbonato, outro com limão e o terceiro saindo do Purificador Acqualive" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Você já deve ter ouvido que a água alcalina é a melhor versão de água para o seu corpo. E é. O mais incrível é que dá para fazer água alcalina em casa, em menos de um minuto. O ponto é que, das três receitas mais populares, apenas uma realmente entrega o que se espera de uma água perfeita no dia a dia.</p>

  <p>Antes das receitas, vale lembrar o básico que muita gente esquece: <strong>a hidratação correta é a base de tudo</strong>. O corpo humano é cerca de 70% água. Manter esse volume com qualidade é o que sustenta o funcionamento de órgãos, pele, cérebro e energia.</p>

  <div class="quote">"Sede não é sinal de hidratação saudável. É sinal de desidratação avançada. Beba antes de sentir."</div>

  <p>A referência geral é beber <strong>1 litro de água a cada 18 kg de peso corporal</strong>. Para boa parte dos adultos, isso fica entre 3 e 4 litros por dia, somando água, frutas, sopas e chás.</p>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#importancia">Por que apostar em água alcalina</a></li>
      <li><a href="#bicarbonato">Receita 1: água com bicarbonato</a></li>
      <li><a href="#limao">Receita 2: água com limão</a></li>
      <li><a href="#ionizador">Receita 3: filtros ionizadores</a></li>
      <li><a href="#comparativo">Comparativo rápido das três opções</a></li>
      <li><a href="#acqualive">O Purificador Acqualive na prática</a></li>
    </ol>
  </nav>

  <h2 id="importancia">Por que apostar em água alcalina</h2>
  <p>A alimentação moderna é ácida: ultraprocessados, frituras, açúcar, café, álcool, refrigerantes. O corpo gasta energia e minerais para manter o pH sanguíneo em equilíbrio. Uma <strong>água levemente alcalina, mineralizada e com poder antioxidante</strong> ajuda nessa conta, devolve magnésio e cálcio, e melhora a hidratação celular.</p>

  <h2 id="bicarbonato">Receita 1: água com bicarbonato de sódio</h2>
  <p>A forma mais conhecida. O bicarbonato é um mineral alcalino que sobe o pH da água rapidamente.</p>

  <div class="info-box">
    <h4>Como fazer</h4>
    <p>Adicione cerca de 600 mg de bicarbonato de sódio em 200 ml de água, mexa bem e consuma.</p>
  </div>

  <p>Funciona? Sim. Para uma situação pontual, é prático. Mas há um problema sério: se você for tentar fazer disso sua hidratação diária, vai consumir cerca de <strong>11 g de bicarbonato por dia</strong>. É muito sódio, muito acima do recomendado.</p>

  <p>Outro limite: a água com bicarbonato não recebe magnésio, cálcio nem potássio. Fica apenas alcalinizada por excesso de um único mineral, e não equilibrada.</p>

  <div class="danger-box">
    <h4>Atenção</h4>
    <p>Hipertensos, pessoas com restrição de sódio e quem tem doença renal devem evitar a água com bicarbonato como rotina. Use, no máximo, como solução pontual.</p>
  </div>

  <h2 id="limao">Receita 2: água com limão</h2>
  <p>O limão é ácido ao toque, mas torna-se alcalino ao ser metabolizado pelo corpo. É rico em minerais saudáveis, ajuda a combater o envelhecimento e é delicioso.</p>

  <div class="info-box">
    <h4>Como fazer</h4>
    <p>Aqueça levemente um copo de água, esprema meio limão fresco, misture e beba pela manhã, em jejum. Não use suco pronto e não adoce.</p>
  </div>

  <p>É uma ótima prática diária e bem mais saudável que o bicarbonato. Mas tem dois limites:</p>

  <ul class="check-list">
    <li><strong>Depende da água que você usa.</strong> Se a água de base estiver cheia de cloro, contaminantes e for ácida, o limão sozinho não corrige isso por completo.</li>
    <li><strong>Não é uma solução completa.</strong> Não entrega todos os atributos de uma água verdadeiramente perfeita: pH alcalino estável, poder alcalinizante (PRAL negativo), poder antioxidante (ORP reduzido), riqueza em minerais, pureza e leveza.</li>
  </ul>

  <p>Então, beba água com limão pela manhã. Mas, para a hidratação do dia inteiro, vá para a receita 3.</p>

  <div class="mid-cta">
    <p>Receitas caseiras ajudam pontualmente. Para o dia a dia, o filtro ionizador resolve.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="ionizador">Receita 3: filtros ionizadores</h2>
  <p>É, de longe, a forma mais completa de ter água alcalina em casa. Os filtros ionizadores fazem três coisas ao mesmo tempo: <strong>retiram o que é ruim</strong> (cloro, sedimentos, metais pesados, contaminantes), <strong>mantêm o que é bom</strong> e <strong>adicionam o que falta</strong> (magnésio, cálcio, potássio).</p>

  <p>O resultado é uma água:</p>
  <ul class="check-list">
    <li>Filtrada, sem cloro, sem trihalometanos, sem microplásticos.</li>
    <li>Alcalina, com pH próximo a 9.</li>
    <li>Ionizada, com poder antioxidante real (ORP reduzido).</li>
    <li>Mineralizada com magnésio biodisponível.</li>
    <li>Pronta para beber, fresquinha, a qualquer hora.</li>
  </ul>

  <p>É exatamente o tipo de água que se encontra nas <a href="https://blog.acqualive.com.br/blue-zones-agua-longevidade/" target="_blank">Blue Zones</a>, os lugares no mundo onde as pessoas vivem mais de 100 anos com saúde.</p>

  <h2 id="comparativo">Comparativo rápido das três opções</h2>

  <table style="width:100%; border-collapse:collapse; margin:24px 0; font-size:15px;">
    <thead>
      <tr style="background:#eff6ff;">
        <th style="padding:12px; text-align:left; color:#1e3a8a; border-bottom:2px solid #bfdbfe;">Critério</th>
        <th style="padding:12px; text-align:left; color:#1e3a8a; border-bottom:2px solid #bfdbfe;">Bicarbonato</th>
        <th style="padding:12px; text-align:left; color:#1e3a8a; border-bottom:2px solid #bfdbfe;">Limão</th>
        <th style="padding:12px; text-align:left; color:#1e3a8a; border-bottom:2px solid #bfdbfe;">Ionizador</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Alcaliniza</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Sim</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Sim</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Sim</td></tr>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Filtra contaminantes</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Não</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Não</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Sim</td></tr>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Adiciona magnésio</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Não</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Pouco</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Sim</td></tr>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Poder antioxidante</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Não</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Parcial</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Sim</td></tr>
      <tr><td style="padding:10px;">Indicado para o dia a dia</td><td style="padding:10px;">Não</td><td style="padding:10px;">Como complemento</td><td style="padding:10px;">Sim</td></tr>
    </tbody>
  </table>

  <h2 id="acqualive">O Purificador Acqualive na prática</h2>
  <p>O <strong>Purificador Acqualive</strong> é um filtro ionizador por gravidade, simples e prático. Você coloca a água comum, que sai da sua torneira, e em pouquíssimo tempo a ciência acontece: a água com cloro e ácida se transforma na água mais perfeita que você poderia imaginar, com magnésio biodisponível e poder antioxidante real.</p>

  <p>Sem eletricidade. Sem químicos. Sem garrafa plástica. Sem dose extra de sódio. É a evolução natural do filtro de barro, sem perder a essência da água fresquinha.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-moderna.png" alt="Purificador Acqualive transparente em cozinha contemporânea, fonte de água alcalina ionizada em casa" class="article-img" loading="lazy" width="1080" height="1350">

  <div class="info-box">
    <h4>Para quem é</h4>
    <p>Para quem quer parar de comprar galão, parar de beber cloro, repor magnésio todos os dias e ter, em casa, a mesma assinatura de água que se encontra nas regiões mais longevas do mundo.</p>
  </div>

  <div class="cta-section">
    <h2>Tenha água alcalina <span>de verdade</span> todos os dias</h2>
    <p>Pare de improvisar com bicarbonato e dependa menos do limão. Tenha um Purificador Acqualive em casa. Em até 10x sem juros e frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/blue-zones-agua-longevidade/" target="_blank">Blue Zones: a água dos lugares onde se vive mais de 100 anos</a></li>
      <li><a href="https://blog.acqualive.com.br/magnesio-beneficios-saude/" target="_blank">Magnésio: o mineral esquecido que sustenta sua saúde</a></li>
      <li><a href="https://blog.acqualive.com.br/qual-o-melhor-filtro-de-agua/" target="_blank">Qual o melhor filtro de água para a sua casa</a></li>
    </ul>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 18 — Água alcalina, refluxo e azia
// ============================================================
const article18 = {
  title: "Água alcalina ajuda em refluxo, azia e gastrite? O que diz a ciência (e o que a Acqualive faz)",
  slug: "agua-alcalina-refluxo-azia-gastrite",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Água Alcalina para Refluxo e Azia: Funciona? | Acqualive</title>
<meta name="description" content="Estudos mostram que água com pH alcalino pode desativar a pepsina, enzima do refluxo. Entenda o que a ciência diz sobre água alcalina, azia e gastrite, e como ter essa água em casa.">
<meta name="keywords" content="água alcalina refluxo, água alcalina azia, água alcalina gastrite, pepsina, pH da água, refluxo gastroesofágico, Acqualive, purificador alcalino">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/agua-alcalina-refluxo-azia-gastrite/">
<meta property="og:title" content="Água alcalina ajuda em refluxo e azia? O que diz a ciência">
<meta property="og:description" content="Pesquisa publicada nos Annals of Otology mostrou que água com pH 8.8 desativa a pepsina. Entenda a conexão com refluxo e azia.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-alcalina-refluxo.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Água alcalina ajuda em refluxo, azia e gastrite? O que diz a ciência","description":"Estudos sobre o efeito da água alcalina na pepsina, no refluxo e na azia, e como ter essa água em casa com o Purificador Acqualive.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-06-14","dateModified":"2026-06-14","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-alcalina-refluxo.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Água alcalina ajuda na azia e no refluxo?","acceptedAnswer":{"@type":"Answer","text":"Sim. Estudo publicado nos Annals of Otology, Rhinology and Laryngology (Koufman, 2012) mostrou que água com pH 8.8 desativa de forma irreversível a pepsina, principal enzima envolvida na irritação do refluxo, e ainda neutraliza a acidez gástrica de forma mais eficaz que água comum."},"name":"Água alcalina ajuda na azia e no refluxo?"},
{"@type":"Question","name":"Água alcalina pode substituir o remédio para refluxo?","acceptedAnswer":{"@type":"Answer","text":"Não. A água alcalina é um apoio diário ao tratamento e ao alívio dos sintomas, mas não substitui orientação médica, exames e medicamentos prescritos. Quem tem refluxo crônico deve manter o acompanhamento."}},
{"@type":"Question","name":"Qual o pH ideal da água para quem tem gastrite?","acceptedAnswer":{"@type":"Answer","text":"Para apoio diário em casos de azia e refluxo, faixas entre pH 8,5 e 9,5 são as mais estudadas. Acima disso, sem orientação profissional, não há benefício adicional comprovado."}},
{"@type":"Question","name":"O Acqualive entrega água nesse pH?","acceptedAnswer":{"@type":"Answer","text":"Sim. O Purificador Acqualive entrega água filtrada, mineralizada com magnésio e com pH próximo a 9, dentro da faixa estudada para apoio em azia e refluxo, sem necessidade de aditivos, eletricidade ou bombas."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">SAÚDE DIGESTIVA</span>
    <h1>Água alcalina ajuda em <span>refluxo, azia e gastrite</span>? O que diz a ciência</h1>
    <p class="header-desc">Pesquisas mostram que a água com pH alcalino pode desativar a pepsina e neutralizar a acidez. Entenda o que isso significa na prática.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>14 jun 2026</span><span>•</span><span>9 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-alcalina-refluxo.jpg" alt="Pessoa com a mão no peito sentindo azia e dois copos de água alcalina sobre a bancada de uma cozinha branca" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Quem convive com refluxo, azia ou gastrite conhece o roteiro: queimação subindo pelo esôfago, gosto ácido na boca, noite mal dormida. A medicina trata o problema com remédios específicos, mudanças de hábito e acompanhamento. Mas existe uma pergunta que aparece em quase todo consultório: <strong>a água que eu bebo influencia?</strong></p>

  <p>A resposta curta é: sim, e bastante. A água alcalina entrou no radar da gastroenterologia depois de um estudo robusto publicado nos <a href="https://pubmed.ncbi.nlm.nih.gov/22844861/" target="_blank" rel="noopener">Annals of Otology, Rhinology and Laryngology em 2012</a>, conduzido pela Dra. Jamie Koufman, uma das maiores autoridades mundiais em refluxo laringofaríngeo.</p>

  <div class="quote">"Água com pH 8.8 desativa a pepsina humana de forma irreversível e oferece uma capacidade de neutralização ácida superior à da maioria dos antiácidos convencionais." — Koufman & Johnston, 2012</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#pepsina">Pepsina: a enzima que ninguém te contou</a></li>
      <li><a href="#estudo">O estudo de 2012 que mudou a conversa</a></li>
      <li><a href="#sintomas">Quais sintomas podem melhorar</a></li>
      <li><a href="#nao-substitui">O que a água alcalina não faz</a></li>
      <li><a href="#dia-a-dia">Como usar no dia a dia</a></li>
      <li><a href="#acqualive">Por que o Acqualive cabe nessa rotina</a></li>
    </ol>
  </nav>

  <h2 id="pepsina">Pepsina: a enzima que ninguém te contou</h2>
  <p>O grande vilão do refluxo não é só o ácido do estômago. É a <strong>pepsina</strong>, uma enzima digestiva que sobe junto com o conteúdo gástrico e gruda nos tecidos do esôfago, da garganta e até das vias aéreas. Mesmo depois que o ácido baixa, a pepsina continua ali, e basta qualquer alimento ácido para reativá-la e causar nova irritação.</p>

  <p>Por isso muita gente toma omeprazol, melhora um pouco e depois piora de novo. O remédio reduz o ácido, mas não desativa a pepsina já depositada.</p>

  <h2 id="estudo">O estudo de 2012 que mudou a conversa</h2>
  <p>Koufman e Johnston testaram diferentes tipos de água em ambiente laboratorial. Água comum (pH 6,7) praticamente não teve efeito sobre a pepsina. Já a água alcalina ionizada com <strong>pH 8.8 desativou a enzima de forma irreversível</strong> e mostrou poder tampão muito maior, ou seja, neutralizou o ácido por mais tempo.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">pH 8.8</div><div class="stat-label">faixa estudada que desativou a pepsina</div></div>
    <div class="stat-card"><div class="stat-number">100%</div><div class="stat-label">de desativação irreversível da enzima no estudo</div></div>
    <div class="stat-card"><div class="stat-number">> antiácidos</div><div class="stat-label">capacidade de neutralização superior à média dos antiácidos comuns</div></div>
  </div>

  <p>O resultado abriu espaço para uma recomendação prática que muitos médicos integrativos e gastroenterologistas usam hoje: para quem tem refluxo laringofaríngeo (LPR), tossir crônico, rouquidão matinal ou pigarro, beber água alcalina nas refeições e ao longo do dia é uma medida coadjuvante simples e barata.</p>

  <h2 id="sintomas">Quais sintomas podem melhorar</h2>
  <p>Não é mágica, mas o conjunto de evidências e relatos clínicos aponta para alívio em:</p>

  <ul class="check-list">
    <li><strong>Azia frequente</strong> após refeições.</li>
    <li><strong>Refluxo silencioso</strong> (LPR), com pigarro, tosse seca e rouquidão pela manhã.</li>
    <li><strong>Gastrite leve a moderada</strong>, especialmente associada à alimentação ácida e ultraprocessada.</li>
    <li><strong>Sensação de queimação</strong> e gosto amargo na boca.</li>
    <li><strong>Desconforto digestivo</strong> em dias de excesso de café, álcool ou refrigerante.</li>
  </ul>

  <div class="mid-cta">
    <p>Apoiar a digestão começa pelo copo certo, todos os dias.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="nao-substitui">O que a água alcalina não faz</h2>
  <p>Para que não reste dúvida: água alcalina <strong>não cura</strong> refluxo, não substitui medicamento prescrito e não é tratamento isolado para esôfago de Barrett, úlceras graves ou Helicobacter pylori. O que ela faz é entrar como apoio diário, dentro de uma rotina que inclui:</p>

  <ul class="check-list">
    <li>Acompanhamento com gastroenterologista quando os sintomas são frequentes.</li>
    <li>Redução de gatilhos: frituras, álcool, café em excesso, refrigerantes, alimentos muito ácidos à noite.</li>
    <li>Jantar leve, pelo menos 2 horas antes de deitar.</li>
    <li>Manejo de estresse, sono e peso corporal.</li>
  </ul>

  <div class="danger-box">
    <h4>Atenção</h4>
    <p>Quem usa medicação contínua para refluxo, tem insuficiência renal grave ou está sob restrição médica de líquidos deve conversar com o profissional de saúde antes de mudar a fonte principal de hidratação.</p>
  </div>

  <h2 id="dia-a-dia">Como usar no dia a dia</h2>
  <p>O protocolo simples que mais funciona na prática clínica:</p>

  <ul class="check-list">
    <li>1 copo de água alcalina ao acordar, em jejum.</li>
    <li>1 copo 20 minutos antes de cada refeição principal.</li>
    <li>Pequenos goles ao longo do dia, evitando grandes volumes durante a refeição.</li>
    <li>1 copo cerca de 1 hora antes de dormir, se não houver restrição.</li>
  </ul>

  <p>É um hábito de baixo custo e alto impacto. O ponto crítico é ter essa água sempre disponível, fresquinha, em casa. É aí que entra o ponto seguinte.</p>

  <h2 id="acqualive">Por que o Acqualive cabe nessa rotina</h2>
  <p>O <strong>Purificador Acqualive</strong> é um filtro ionizador por gravidade que entrega água filtrada, mineralizada com magnésio e com <strong>pH próximo a 9</strong>, dentro da faixa estudada para apoio em refluxo e azia. Sem eletricidade, sem bomba, sem garrafa plástica, sem dose extra de sódio (diferente do truque do bicarbonato).</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-moderna.png" alt="Purificador Acqualive transparente em cozinha contemporânea, fonte diária de água alcalina para quem tem refluxo e azia" class="article-img" loading="lazy" width="1080" height="1350">

  <div class="info-box">
    <h4>Para quem é</h4>
    <p>Quem convive com azia frequente, refluxo silencioso, gastrite leve ou simplesmente quer apoiar a digestão e a saúde gástrica com a água que já bebe todos os dias.</p>
  </div>

  <div class="cta-section">
    <h2>Comece pelo <span>copo certo</span>, hoje</h2>
    <p>Tenha água alcalina, filtrada e mineralizada em casa, todos os dias. Em até 10x sem juros e frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" target="_blank">Água anti-inflamatória: desligando a inflamação silenciosa</a></li>
      <li><a href="https://blog.acqualive.com.br/como-fazer-agua-alcalina-em-casa/" target="_blank">Como fazer água alcalina em casa em menos de 1 minuto</a></li>
      <li><a href="https://blog.acqualive.com.br/magnesio-beneficios-saude/" target="_blank">Magnésio: o mineral esquecido</a></li>
    </ul>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 19 — Água hidrogenada / hidrogênio molecular
// ============================================================
const article19 = {
  title: "Água hidrogenada: o que é hidrogênio molecular na água e por que a ciência está de olho",
  slug: "agua-hidrogenada-hidrogenio-molecular",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Água Hidrogenada: O Que Diz a Ciência Sobre o Hidrogênio Molecular | Acqualive</title>
<meta name="description" content="Água hidrogenada virou febre, mas pouca gente entende o que é. Conheça o hidrogênio molecular (H2), o estudo da Nature Medicine, os benefícios estudados e como a ionização da água entrega esse efeito em casa.">
<meta name="keywords" content="água hidrogenada, hidrogênio molecular, H2, água ionizada, ORP, antioxidante seletivo, água alcalina ionizada, Acqualive">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/agua-hidrogenada-hidrogenio-molecular/">
<meta property="og:title" content="Água hidrogenada: o que é e por que a ciência está de olho">
<meta property="og:description" content="O hidrogênio molecular se mostrou um antioxidante seletivo em estudos. Entenda como a água ionizada entrega esse efeito.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-hidrogenada.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Água hidrogenada: o que é hidrogênio molecular na água e por que a ciência está de olho","description":"Guia honesto sobre água hidrogenada, hidrogênio molecular, ORP e ionização. O que a ciência mostra, o que ainda é marketing e como ter esse tipo de água em casa.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-06-14","dateModified":"2026-06-14","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-hidrogenada.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"O que é água hidrogenada?","acceptedAnswer":{"@type":"Answer","text":"Água hidrogenada é a água enriquecida com hidrogênio molecular (H2) dissolvido. Esse hidrogênio é uma molécula muito pequena, capaz de atravessar membranas celulares e atuar como antioxidante seletivo, neutralizando os radicais livres mais agressivos sem afetar os benéficos."}},
{"@type":"Question","name":"Água hidrogenada é a mesma coisa que água alcalina?","acceptedAnswer":{"@type":"Answer","text":"Não. Toda água alcalina ionizada tende a ter alguma carga de hidrogênio molecular, mas nem toda água alcalina é hidrogenada. A diferença real está na ionização: é o processo que reduz o ORP (potencial de oxirredução) e gera o H2 dissolvido."}},
{"@type":"Question","name":"Quais os benefícios estudados da água hidrogenada?","acceptedAnswer":{"@type":"Answer","text":"Estudos publicados na Nature Medicine e em revisões posteriores apontam efeitos antioxidantes, anti-inflamatórios, neuroprotetores e melhora da recuperação após exercício físico. As evidências são promissoras, mas ainda em fase de consolidação clínica."}},
{"@type":"Question","name":"O Acqualive produz água hidrogenada?","acceptedAnswer":{"@type":"Answer","text":"O Purificador Acqualive entrega água alcalina ionizada por gravidade, com ORP reduzido e propriedades antioxidantes em níveis adequados para consumo diário. Não é um gerador médico de H2 industrial, mas reproduz a química que se encontra nas águas naturais mais longevas do mundo."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">CIÊNCIA DA ÁGUA</span>
    <h1>Água <span>hidrogenada</span>: o que é hidrogênio molecular na água e por que a ciência está de olho</h1>
    <p class="header-desc">Um guia honesto sobre H2, ionização, ORP e o que separa marketing barato da ciência publicada nas melhores revistas do mundo.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>14 jun 2026</span><span>•</span><span>10 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-hidrogenada.jpg" alt="Copo de cristal com água ionizada e microbolhas de hidrogênio molecular brilhando em luz azul, em fundo escuro elegante" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>A cada poucos meses surge uma "nova água" no mercado de bem-estar. Quase todas somem rápido. Uma, em particular, está sobrevivendo bem ao escrutínio científico: a <strong>água hidrogenada</strong>, ou seja, água enriquecida com hidrogênio molecular (H2) dissolvido.</p>

  <p>O ponto de virada foi em 2007, quando a revista <a href="https://www.nature.com/articles/nm1577" target="_blank" rel="noopener">Nature Medicine publicou o estudo de Ohsawa et al.</a> mostrando que o hidrogênio molecular atua como um antioxidante seletivo: ele neutraliza os radicais livres mais tóxicos do corpo (como o radical hidroxila) sem mexer nos radicais que o organismo precisa para sinalização celular saudável.</p>

  <div class="quote">"Hidrogênio atua como antioxidante terapêutico ao reduzir seletivamente radicais de oxigênio citotóxicos." — Ohsawa I. et al., Nature Medicine, 2007</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#o-que-e">Afinal, o que é água hidrogenada</a></li>
      <li><a href="#diferenca">Hidrogenada x alcalina x ionizada</a></li>
      <li><a href="#estudos">O que os estudos mostram</a></li>
      <li><a href="#orp">ORP: o número que mede o poder antioxidante</a></li>
      <li><a href="#cuidado">O que é ciência e o que é marketing</a></li>
      <li><a href="#acqualive">Como o Acqualive entrega isso em casa</a></li>
    </ol>
  </nav>

  <h2 id="o-que-e">Afinal, o que é água hidrogenada</h2>
  <p>Água hidrogenada é a H2O comum com moléculas de hidrogênio molecular (H2) dissolvidas. O H2 é o menor elemento da tabela periódica, o que lhe dá uma vantagem rara: <strong>ele atravessa membranas celulares e até a barreira hematoencefálica</strong> sem precisar de transportador.</p>

  <p>Em termos práticos, é uma água que parece igual a qualquer outra, sem gosto, sem cheiro, mas que carrega uma carga extra capaz de chegar a tecidos onde antioxidantes comuns têm dificuldade.</p>

  <h2 id="diferenca">Hidrogenada x alcalina x ionizada: pare de confundir</h2>
  <p>É aqui que muita gente se perde. Os três termos andam juntos, mas significam coisas diferentes:</p>

  <table style="width:100%; border-collapse:collapse; margin:24px 0; font-size:15px;">
    <thead>
      <tr style="background:#eff6ff;">
        <th style="padding:12px; text-align:left; color:#1e3a8a; border-bottom:2px solid #bfdbfe;">Tipo</th>
        <th style="padding:12px; text-align:left; color:#1e3a8a; border-bottom:2px solid #bfdbfe;">O que é</th>
        <th style="padding:12px; text-align:left; color:#1e3a8a; border-bottom:2px solid #bfdbfe;">Efeito principal</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;"><strong>Alcalina</strong></td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Água com pH acima de 7,5</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Apoia o equilíbrio ácido-base</td></tr>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;"><strong>Ionizada</strong></td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Água que passou por processo de ionização, alterando carga elétrica e ORP</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Reduz o potencial de oxirredução, ganha caráter antioxidante</td></tr>
      <tr><td style="padding:10px;"><strong>Hidrogenada</strong></td><td style="padding:10px;">Água com H2 molecular dissolvido</td><td style="padding:10px;">Antioxidante seletivo, anti-inflamatório</td></tr>
    </tbody>
  </table>

  <p>A boa notícia: <strong>uma água alcalina bem ionizada já carrega, naturalmente, alguma carga de hidrogênio molecular</strong>. É o caso da água que sai de um bom filtro ionizador por gravidade.</p>

  <h2 id="estudos">O que os estudos mostram</h2>
  <p>Desde 2007, mais de mil artigos foram publicados sobre o H2 em modelos animais e humanos. As revisões mais recentes, como a <a href="https://www.periodicojs.com.br/index.php/hs/article/download/2428/2373/6764" target="_blank" rel="noopener">revisão brasileira de 2025 sobre H2 e doenças neurodegenerativas</a>, apontam efeitos consistentes em quatro grandes frentes:</p>

  <ul class="check-list">
    <li><strong>Estresse oxidativo:</strong> redução de marcadores de oxidação em sangue e tecidos.</li>
    <li><strong>Inflamação crônica:</strong> queda de citocinas inflamatórias.</li>
    <li><strong>Performance e recuperação:</strong> menos fadiga e melhor lactato sanguíneo após exercício.</li>
    <li><strong>Saúde metabólica:</strong> melhora em marcadores de síndrome metabólica e perfil lipídico.</li>
  </ul>

  <p>Não é "remédio para tudo". É um adjuvante interessante, com perfil de segurança excelente e mecanismo plausível.</p>

  <div class="mid-cta">
    <p>Hidrogênio molecular não é mágica. É química. E você pode ter em casa, todos os dias.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="orp">ORP: o número que mede o poder antioxidante da sua água</h2>
  <p>ORP é a sigla para <strong>Oxidation Reduction Potential</strong>, ou potencial de oxirredução. Em palavras simples: quanto mais negativo o ORP, mais antioxidante é a água.</p>

  <ul class="check-list">
    <li>Água da torneira: ORP positivo, costuma ficar entre +200 e +500 mV. Oxida o corpo.</li>
    <li>Água engarrafada comum: também positiva, próxima da torneira.</li>
    <li>Água alcalina ionizada de qualidade: ORP negativo, geralmente entre -100 e -400 mV. Antioxidante.</li>
  </ul>

  <p>É o mesmo princípio que faz frutas, vegetais frescos e chás verdes serem antioxidantes: ORP baixo. A diferença é que com a água você consome 2 a 3 litros todos os dias.</p>

  <h2 id="cuidado">O que é ciência e o que é marketing</h2>
  <p>É preciso ser justo. Nem tudo o que se vende como "água hidrogenada milagrosa" tem base. Alguns alertas honestos:</p>

  <ul class="check-list">
    <li>Pastilhas baratas de mercado livre podem gerar H2, mas em concentrações irregulares e às vezes com resíduos.</li>
    <li>Garrafas plásticas e fechadas por muito tempo perdem H2, ele escapa pelas paredes.</li>
    <li>Não existe "cura para câncer" com água hidrogenada, e qualquer site que prometa isso está mentindo.</li>
    <li>O efeito real é cumulativo, depende de consumo diário e consistente, não de uma dose milagrosa.</li>
  </ul>

  <div class="danger-box">
    <h4>Atenção</h4>
    <p>Pessoas com doenças graves devem manter acompanhamento médico. Água hidrogenada é apoio, não tratamento isolado.</p>
  </div>

  <h2 id="acqualive">Como o Acqualive entrega isso em casa</h2>
  <p>O <strong>Purificador Acqualive</strong> é um filtro ionizador por gravidade. Filtra a água, mineraliza com magnésio, deixa o pH em torno de 9 e reduz o ORP, entregando uma água com <strong>caráter antioxidante real</strong> e propriedades próximas às águas naturais mais longevas do mundo.</p>

  <p>Sem eletricidade, sem bomba, sem pastilha química e sem garrafa plástica. Você abre o equipamento, coloca a água da sua torneira, e a química acontece em pouquíssimo tempo.</p>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-cozinha-natureza.jpg" alt="Purificador Acqualive transparente em cozinha aberta, fonte diária de água ionizada e antioxidante" class="article-img" loading="lazy" width="1200" height="800">

  <div class="info-box">
    <h4>Para quem é</h4>
    <p>Para quem quer somar um hábito antioxidante diário sem virar fanático por suplementos, e para quem entendeu que a água que se bebe todos os dias é a base da saúde, não um detalhe.</p>
  </div>

  <div class="cta-section">
    <h2>Sua água pode ser um <span>antioxidante diário</span></h2>
    <p>Substitua a água oxidante por uma água alcalina, ionizada e fresquinha. Em até 10x sem juros e frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/blue-zones-agua-longevidade/" target="_blank">Blue Zones: a água dos lugares onde se vive mais de 100 anos</a></li>
      <li><a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" target="_blank">Água anti-inflamatória: o copo que desliga a inflamação silenciosa</a></li>
      <li><a href="https://blog.acqualive.com.br/como-fazer-agua-alcalina-em-casa/" target="_blank">Como fazer água alcalina em casa em menos de 1 minuto</a></li>
    </ul>
  </div>
</main>`
  )
};

// ============================================================
// ARTIGO 20 — Água alcalina e esporte / performance
// ============================================================
const article20 = {
  title: "Água alcalina para treino: o que muda na performance, na recuperação e na hidratação esportiva",
  slug: "agua-alcalina-treino-performance-esportiva",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Água Alcalina para Treino: Performance e Recuperação | Acqualive</title>
<meta name="description" content="Água alcalina pode melhorar a hidratação, o equilíbrio ácido-base e a recuperação muscular. Veja os estudos sobre desempenho esportivo e como aplicar no seu treino.">
<meta name="keywords" content="água alcalina treino, água alcalina esporte, hidratação esportiva, recuperação muscular, performance, lactato, Acqualive, água ionizada para corrida">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/agua-alcalina-treino-performance-esportiva/">
<meta property="og:title" content="Água alcalina para treino: o que muda na performance e na recuperação">
<meta property="og:description" content="Estudos mostram melhora na hidratação, no pH urinário e na recuperação com água alcalina. Entenda como aplicar no treino.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-alcalina-esporte.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Água alcalina para treino: o que muda na performance, na recuperação e na hidratação esportiva","description":"Guia completo sobre água alcalina e exercício físico: hidratação, equilíbrio ácido-base, recuperação muscular e os principais estudos publicados.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-06-14","dateModified":"2026-06-14","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-alcalina-esporte.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Água alcalina melhora o desempenho esportivo?","acceptedAnswer":{"@type":"Answer","text":"Estudos como o de Heil (Journal of the International Society of Sports Nutrition, 2010) mostraram que o consumo regular de água alcalina por atletas melhorou o estado de hidratação e o equilíbrio ácido-base após o exercício, em comparação com água comum."}},
{"@type":"Question","name":"Quando devo beber água alcalina, antes, durante ou depois do treino?","acceptedAnswer":{"@type":"Answer","text":"O ideal é nas três fases. Beber para chegar bem hidratado, manter o consumo em pequenos goles durante o esforço e usá-la na reposição pós-treino, quando o corpo precisa equilibrar lactato, reidratar e repor minerais."}},
{"@type":"Question","name":"Água alcalina ajuda na recuperação muscular?","acceptedAnswer":{"@type":"Answer","text":"Sim, indiretamente. Ela apoia o equilíbrio ácido-base, reduz o estresse oxidativo, repõe magnésio (essencial para a função muscular) e melhora a reidratação celular, contribuindo para menos fadiga acumulada."}},
{"@type":"Question","name":"Atleta amador também se beneficia?","acceptedAnswer":{"@type":"Answer","text":"Sim. Os efeitos sobre hidratação, recuperação e disposição valem para qualquer pessoa fisicamente ativa, não apenas atletas de elite. Quem treina 3 a 5 vezes por semana costuma sentir a diferença em semanas."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">PERFORMANCE</span>
    <h1>Água alcalina para <span>treino</span>: o que muda na performance, na recuperação e na hidratação esportiva</h1>
    <p class="header-desc">Por que cada vez mais atletas e treinadores trocaram a garrafa plástica comum por água alcalina mineralizada.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>14 jun 2026</span><span>•</span><span>9 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-alcalina-esporte.jpg" alt="Atleta mulher bebendo água em copo de vidro após treino ao ar livre, no fim da tarde, com céu azul" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Quem treina sério aprende cedo que a hidratação é o detalhe que separa um treino bom de um treino quebrado. O que pouca gente repara é que <strong>nem toda água hidrata igual</strong>. A qualidade da água que entra, o pH, os minerais e a capacidade de chegar dentro da célula influenciam tudo: performance, recuperação, fadiga, cãibra, sono pós-treino.</p>

  <p>Não é teoria. O estudo de <a href="https://jissn.biomedcentral.com/articles/10.1186/1550-2783-7-29" target="_blank" rel="noopener">Heil, publicado no Journal of the International Society of Sports Nutrition em 2010</a>, mostrou que atletas que consumiram água alcalina por algumas semanas apresentaram <strong>melhor estado de hidratação</strong> e <strong>equilíbrio ácido-base mais favorável</strong> em comparação com quem bebeu água mineral comum.</p>

  <div class="quote">"O consumo regular de água alcalina mineralizada melhorou marcadores de hidratação e o equilíbrio ácido-base após o exercício, sem efeitos adversos." — Heil DP, JISSN, 2010</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#acido-base">Treino acidifica, água alcalina equilibra</a></li>
      <li><a href="#hidratacao">Hidratação celular: por que a água certa hidrata mais</a></li>
      <li><a href="#magnesio">Magnésio: o mineral que segura o seu treino</a></li>
      <li><a href="#recuperacao">Recuperação: lactato, sono e dor muscular</a></li>
      <li><a href="#protocolo">Protocolo prático: antes, durante e depois</a></li>
      <li><a href="#acqualive">Por que muitos atletas escolhem o Acqualive</a></li>
    </ol>
  </nav>

  <h2 id="acido-base">Treino acidifica, água alcalina equilibra</h2>
  <p>Exercício intenso gera ácido lático, eleva CO2 e empurra o corpo para um estado temporariamente mais ácido. O organismo lida com isso usando minerais alcalinos (magnésio, cálcio, potássio, bicarbonato).</p>

  <p>Se a sua hidratação base é uma água com pH baixo, pobre em minerais, o corpo gasta mais para reequilibrar. Uma água levemente alcalina e mineralizada chega já contribuindo para esse equilíbrio, em vez de cobrar.</p>

  <h2 id="hidratacao">Hidratação celular: por que a água certa hidrata mais</h2>
  <p>Hidratar não é encher o estômago de água. É fazer a água chegar dentro da célula. Para isso, ela precisa ter as características certas: tensão superficial reduzida, minerais biodisponíveis e pH amigável.</p>

  <p>A água alcalina ionizada tende a formar <strong>clusters moleculares menores</strong>, o que facilita o transporte celular. Atletas relatam, com consistência, a sensação de "estar hidratado mais rápido" e de não ter aquele estômago pesado de muita água gelada parada.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">+2%</div><div class="stat-label">de desidratação já reduz a performance esportiva</div></div>
    <div class="stat-card"><div class="stat-number">300+ mg</div><div class="stat-label">de magnésio são necessários por dia para quem treina</div></div>
    <div class="stat-card"><div class="stat-number">pH ~9</div><div class="stat-label">faixa estudada para apoio no equilíbrio ácido-base esportivo</div></div>
  </div>

  <h2 id="magnesio">Magnésio: o mineral que segura o seu treino</h2>
  <p>Magnésio participa de mais de 300 reações enzimáticas, é essencial para contração muscular, produção de ATP, sono profundo e regulação do sistema nervoso. Quem treina e bebe pouco magnésio é exatamente quem mais sofre com cãibra, sono ruim, fadiga acumulada e baixa recuperação.</p>

  <p>Uma água alcalina <a href="https://blog.acqualive.com.br/magnesio-beneficios-saude/" target="_blank">mineralizada com magnésio biodisponível</a> entrega esse mineral todos os dias, em pequenas doses constantes, exatamente do jeito que o corpo absorve melhor.</p>

  <div class="mid-cta">
    <p>Seu treino merece mais do que água de garrafa esquentada.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="recuperacao">Recuperação: lactato, sono e dor muscular</h2>
  <p>Recuperar bem é tão importante quanto treinar bem. Três frentes em que a água alcalina entra:</p>

  <ul class="check-list">
    <li><strong>Lactato:</strong> estudos como o de <a href="https://pubmed.ncbi.nlm.nih.gov/27773592/" target="_blank" rel="noopener">Chycki et al.</a> mostraram que água alcalina favoreceu o manejo do lactato em atletas após esforço de alta intensidade.</li>
    <li><strong>Estresse oxidativo:</strong> uma água ionizada com ORP reduzido ajuda a neutralizar radicais livres extras gerados pelo treino.</li>
    <li><strong>Sono e sistema nervoso:</strong> magnésio biodisponível favorece o sono profundo, fase em que o músculo realmente se recupera.</li>
  </ul>

  <h2 id="protocolo">Protocolo prático: antes, durante e depois</h2>
  <p>Não precisa virar ciência de foguete. Funciona assim:</p>

  <ul class="check-list">
    <li><strong>Antes (1 a 2 horas):</strong> 500 ml de água alcalina, sem pressa, para chegar bem hidratado.</li>
    <li><strong>Durante:</strong> pequenos goles a cada 15 minutos, especialmente em treinos longos ou em calor.</li>
    <li><strong>Depois (primeira hora):</strong> 500 a 800 ml em pequenos volumes, repondo líquidos, minerais e equilíbrio ácido-base.</li>
    <li><strong>Ao longo do dia:</strong> manter o consumo regular, distribuído. A hidratação é diária, não pontual.</li>
  </ul>

  <div class="danger-box">
    <h4>Atenção</h4>
    <p>Atletas com restrição renal grave, condições cardíacas específicas ou em uso de medicamentos contínuos devem alinhar a estratégia de hidratação com seu médico e nutricionista esportivo.</p>
  </div>

  <h2 id="acqualive">Por que muitos atletas escolhem o Acqualive</h2>
  <p>O <strong>Purificador Acqualive</strong> resolve três problemas de uma vez para quem treina:</p>

  <ul class="check-list">
    <li><strong>Acaba com a garrafa plástica</strong> esquentando no carro, fonte conhecida de microplásticos.</li>
    <li><strong>Entrega magnésio biodisponível</strong> e pH alcalino todos os dias, em casa.</li>
    <li><strong>Não exige eletricidade nem manutenção complexa.</strong> Coloca a água, ela sai pronta.</li>
  </ul>

  <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-torneira-detalhe.jpg" alt="Detalhe da torneira do Purificador Acqualive servindo água alcalina ionizada para garrafa esportiva" class="article-img" loading="lazy" width="1200" height="800">

  <div class="info-box">
    <h4>Para quem é</h4>
    <p>Para quem corre, pedala, treina força, faz crossfit, luta, dança ou simplesmente se movimenta sério. A diferença aparece em semanas: menos fadiga, melhor recuperação, mais constância nos treinos.</p>
  </div>

  <div class="cta-section">
    <h2>Trate sua água como parte do <span>seu treino</span></h2>
    <p>Pare de comprar garrafa, pare de beber cloro, comece a repor magnésio todos os dias. Em até 10x sem juros e frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Conhecer o Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/magnesio-beneficios-saude/" target="_blank">Magnésio: o mineral esquecido que sustenta sua saúde</a></li>
      <li><a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" target="_blank">Água anti-inflamatória: desligando a inflamação silenciosa</a></li>
      <li><a href="https://blog.acqualive.com.br/agua-hidrogenada-hidrogenio-molecular/" target="_blank">Água hidrogenada: o que diz a ciência sobre o H2</a></li>
    </ul>
  </div>
</main>`
  )
};


// ============================================================
// ARTIGO 21 (card 22) — Anvisa interdita agua mineral por coliformes
// ============================================================
const article21 = {
  title: "Anvisa interdita água mineral por coliformes: o que isso revela sobre a água que você compra engarrafada",
  slug: "anvisa-interdita-agua-mineral-coliformes",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Anvisa Interdita Água Mineral por Coliformes: O Que Isso Significa | Acqualive</title>
<meta name="description" content="A Anvisa interditou uma marca de água mineral após detectar coliformes totais. Entenda o que são coliformes, por que água engarrafada não é sinônimo de pureza e como garantir água segura em casa.">
<meta name="keywords" content="anvisa agua mineral, coliformes na agua, agua mineral contaminada, agua engarrafada segura, purificador de agua, agua alcalina, Acqualive, qualidade da agua">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/anvisa-interdita-agua-mineral-coliformes/">
<meta property="og:title" content="Anvisa interdita água mineral por coliformes: o que isso revela sobre a água engarrafada">
<meta property="og:description" content="Lacre, rótulo e marca conhecida não são garantia de pureza. Entenda o caso, o risco dos coliformes e o que fazer para ter água segura todos os dias.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-mineral-contaminada.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Anvisa interdita água mineral por coliformes: o que isso revela sobre a água que você compra engarrafada","description":"Análise do caso de interdição de água mineral pela Anvisa em setembro de 2026, o que são coliformes totais e como garantir água segura em casa.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-09-04","dateModified":"2026-09-04","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-mineral-contaminada.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"O que são coliformes totais na água?","acceptedAnswer":{"@type":"Answer","text":"Coliformes totais são um grupo de bactérias usado como indicador de qualidade da água. A presença delas não significa necessariamente doença imediata, mas indica falha de higiene, de envase ou de proteção da fonte, e sinaliza que outros micro-organismos podem ter entrado no produto."}},
{"@type":"Question","name":"Água mineral engarrafada é sempre segura?","acceptedAnswer":{"@type":"Answer","text":"Não. A água mineral passa por controle sanitário, mas depende de fonte protegida, higiene da linha de envase, transporte e armazenamento corretos. Interdições cautelares da Anvisa mostram que falhas acontecem, e o consumidor só descobre depois que o produto já foi vendido."}},
{"@type":"Question","name":"Como saber se a água que eu bebo está contaminada?","acceptedAnswer":{"@type":"Answer","text":"A contaminação microbiológica não muda cor, cheiro nem sabor na maioria dos casos. Por isso o controle depende de laudo laboratorial. Em casa, a proteção prática é usar um purificador com elemento filtrante certificado e trocar o refil no prazo indicado pelo fabricante."}},
{"@type":"Question","name":"Purificador de água resolve o problema de bactérias?","acceptedAnswer":{"@type":"Answer","text":"Um purificador com elemento filtrante certificado retém partículas, cloro e contaminantes e reduz a carga bacteriana da água tratada que chega pela rede. O ponto central é manter a manutenção em dia, porque um refil vencido deixa de proteger."}},
{"@type":"Question","name":"O que fazer se eu comprei um lote interditado?","acceptedAnswer":{"@type":"Answer","text":"Não consuma o produto, guarde a embalagem com o número do lote, procure o ponto de venda para troca ou reembolso e registre a ocorrência na vigilância sanitária local."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">QUALIDADE DA ÁGUA</span>
    <h1>Anvisa interdita água mineral por <span>coliformes</span>: o que isso revela sobre a água que você compra engarrafada</h1>
    <p class="header-desc">O lacre estava fechado. O rótulo estava certo. E mesmo assim o laudo apontou bactérias indicadoras de contaminação.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>04 set 2026</span><span>•</span><span>8 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/agua-mineral-contaminada.jpg" alt="Prateleira de supermercado com garrafas plásticas de água mineral lacradas em destaque sob luz azulada" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Em 2 de setembro de 2026, a Anvisa determinou a <strong>interdição cautelar</strong> de uma marca de água mineral sem gás depois que um laudo do Laboratório Central de Saúde Pública Noel Nutels detectou <strong>coliformes totais</strong> em uma amostra de 250 ml. O produto não pode ser consumido nem comercializado até que a segurança seja comprovada por novos testes. A informação foi publicada no Diário Oficial da União e divulgada pela <a href="https://agenciabrasil.ebc.com.br/saude/noticia/2026-09/anvisa-interdita-agua-mineral-da-marca-vitoriosa-por-conter-coliformes" target="_blank" rel="noopener">Agência Brasil</a>.</p>

  <p>O caso virou notícia rapidamente, e por um motivo simples: ele quebra uma crença que quase todo brasileiro carrega. A de que <strong>água engarrafada é, por definição, água segura</strong>.</p>

  <div class="quote">A contaminação microbiológica não muda cor, não muda cheiro e quase nunca muda sabor. Quem bebe não percebe nada.</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#coliformes">O que são coliformes totais e por que eles importam</a></li>
      <li><a href="#lacre">Por que o lacre não é garantia de pureza</a></li>
      <li><a href="#plastico">O outro problema da garrafa: plástico e microplásticos</a></li>
      <li><a href="#galao">E o galão de 20 litros?</a></li>
      <li><a href="#o-que-fazer">O que fazer agora, na prática</a></li>
      <li><a href="#acqualive">A alternativa: sua própria fonte em casa</a></li>
    </ol>
  </nav>

  <h2 id="coliformes">O que são coliformes totais e por que eles importam</h2>
  <p>Coliformes totais são um grupo de bactérias usado no mundo inteiro como <strong>indicador de qualidade</strong>. Elas não são, necessariamente, causadoras diretas de doença. O papel delas é outro, e é justamente por isso que assustam: elas funcionam como um alarme.</p>

  <p>Se coliformes chegaram dentro de uma garrafa lacrada, significa que existe uma porta aberta em algum ponto do processo. Pode ser a proteção da fonte, o sistema de envase, a higienização das linhas, a manipulação. E, se essa porta está aberta para coliformes, ela está aberta para outros micro-organismos que não são apenas indicadores.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">250 ml</div><div class="stat-label">volume da amostra em que os coliformes foram detectados</div></div>
    <div class="stat-card"><div class="stat-number">0</div><div class="stat-label">é o limite legal de coliformes totais para água mineral envasada</div></div>
    <div class="stat-card"><div class="stat-number">Zero sinal</div><div class="stat-label">de cor, cheiro ou gosto na maioria das contaminações microbiológicas</div></div>
  </div>

  <h2 id="lacre">Por que o lacre não é garantia de pureza</h2>
  <p>A água mineral brasileira é regulada e fiscalizada, e a maioria das marcas cumpre o protocolo. O ponto não é acusar o setor. O ponto é entender a <strong>cadeia de risco</strong>, porque ela é longa:</p>

  <ul class="check-list">
    <li><strong>Fonte:</strong> precisa estar protegida de infiltrações e do entorno.</li>
    <li><strong>Envase:</strong> linhas, bicos e tampas precisam de higienização rigorosa e constante.</li>
    <li><strong>Transporte:</strong> caminhão quente, sol direto e empilhamento inadequado afetam o produto.</li>
    <li><strong>Ponto de venda:</strong> garrafa exposta ao calor por semanas muda a química do plástico.</li>
    <li><strong>Sua casa:</strong> a garrafa aberta na geladeira vira um novo ambiente para micro-organismos.</li>
  </ul>

  <p>Cada elo desses é um lugar onde algo pode dar errado. E o consumidor só fica sabendo quando a interdição sai no Diário Oficial, o que costuma acontecer depois que o produto já foi vendido e consumido.</p>

  <div class="mid-cta">
    <p>Água segura não deveria depender de sorte no supermercado.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="plastico">O outro problema da garrafa: plástico e microplásticos</h2>
  <p>Mesmo quando o laudo microbiológico está perfeito, a garrafa plástica traz uma segunda questão. Estudos publicados nos últimos anos identificaram <strong>centenas de milhares de partículas de nanoplástico por litro</strong> em água engarrafada, e a exposição ao calor durante o transporte e a estocagem tende a aumentar essa liberação.</p>

  <p>Já escrevemos sobre isso em detalhe no artigo <a href="https://blog.acqualive.com.br/agua-que-voce-bebe-tem-microplasticos/" target="_blank">A água que você bebe tem microplásticos?</a>. O resumo é direto: a garrafa resolve um problema de logística e cria outro de saúde e bem-estar a longo prazo.</p>

  <h2 id="galao">E o galão de 20 litros?</h2>
  <p>O galão retornável tem um agravante que quase ninguém considera: ele é <strong>reutilizado dezenas de vezes</strong>. A higienização entre um uso e outro é responsabilidade do envasador, e a qualidade dela varia muito. Some a isso o bico do bebedouro, que raramente é sanitizado em casa, e você tem um ponto de contato exposto ao ar o dia inteiro.</p>

  <p>Sem contar o peso, o preço acumulado ao longo dos anos e o fato de que a água acaba justamente quando ninguém está em casa para trocar.</p>

  <h2 id="o-que-fazer">O que fazer agora, na prática</h2>
  <ol>
    <li><strong>Confira o lote:</strong> se você comprou água mineral recentemente, verifique marca e lote antes de consumir.</li>
    <li><strong>Não descarte a embalagem</strong> de um produto suspeito. Ela é a prova para troca e para a vigilância sanitária.</li>
    <li><strong>Evite deixar garrafa plástica no sol</strong> ou no porta-malas do carro.</li>
    <li><strong>Nunca reutilize</strong> garrafa descartável para beber água ao longo da semana.</li>
    <li><strong>Assuma o controle da sua fonte:</strong> um purificador em casa tira a sua água da cadeia de risco do produto industrializado.</li>
  </ol>

  <h2 id="acqualive">A alternativa: sua própria fonte em casa</h2>
  <p>A lição de fundo desse episódio é que <strong>terceirizar a sua água é terceirizar o seu controle</strong>. Quando a água nasce na sua torneira, passa por um elemento filtrante certificado e sai pronta para beber, você elimina de uma vez o transporte, a estocagem, o plástico e a fila de intermediários.</p>

  <p>É exatamente isso que a Acqualive faz. Nossos purificadores retêm cloro, sedimentos e contaminantes, e ainda devolvem à água o que a rede tirou dela: <strong>alcalinidade, minerais biodisponíveis como o magnésio e ação antioxidante</strong>. Água fresquinha, todos os dias, sem galão, sem garrafa e sem depender de um laudo que você nunca vai ler.</p>

  <p>Se você quer entender a diferença entre um Purificador Comum e a tecnologia de ionização, comece pelo nosso guia <a href="https://blog.acqualive.com.br/qual-melhor-filtro-de-agua/" target="_blank">Qual é o melhor filtro de água?</a>.</p>

  <div class="cta-section">
    <h2>Pare de comprar água. Comece a <span>produzir a sua</span></h2>
    <p>Purificadores Acqualive com água alcalina, mineralizada e livre de cloro. Em até 10x sem juros e com frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Ver os purificadores Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/agua-da-torneira-segura-brasil/" target="_blank">A água da torneira é segura no Brasil?</a></li>
      <li><a href="https://blog.acqualive.com.br/agua-que-voce-bebe-tem-microplasticos/" target="_blank">A água que você bebe tem microplásticos?</a></li>
      <li><a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" target="_blank">Água anti-inflamatória: o copo que desliga a inflamação silenciosa</a></li>
    </ul>
  </div>
</main>`
  )
};

const article22 = {
  title: "Brasil perde quase 40% da água tratada no caminho até a torneira: o que isso muda na água que chega em casa",
  slug: "perdas-de-agua-tratada-brasil-qualidade",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Perdas de Água Tratada no Brasil: O Que Isso Faz Com a Sua Torneira | Acqualive</title>
<meta name="description" content="Quase 40% da água tratada se perde antes de chegar às casas brasileiras. Entenda como vazamentos e rede antiga afetam a qualidade da água que sai da sua torneira e o que fazer dentro de casa.">
<meta name="keywords" content="perdas de agua brasil, agua tratada, rede de distribuicao, qualidade da agua da torneira, crise hidrica, purificador de agua, agua alcalina, Acqualive">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/perdas-de-agua-tratada-brasil-qualidade/">
<meta property="og:title" content="Brasil perde quase 40% da água tratada no caminho até a torneira">
<meta property="og:description" content="Vazamentos, rede antiga e pressão irregular não desperdiçam apenas água. Eles mudam a qualidade do que chega no seu copo.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/perdas-agua-brasil.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"Brasil perde quase 40% da água tratada no caminho até a torneira","description":"Como as perdas na distribuição e a idade da rede afetam a qualidade da água que chega nas casas brasileiras, e o que fazer no ponto de consumo.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-09-04","dateModified":"2026-09-04","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/perdas-agua-brasil.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"O que são perdas de água na distribuição?","acceptedAnswer":{"@type":"Answer","text":"São os volumes de água já tratada que não chegam ao consumidor. Incluem perdas físicas, como vazamentos e rompimentos na rede, e perdas aparentes, como ligações irregulares e erros de medição. No Brasil, esse índice fica próximo de 40% do volume produzido."}},
{"@type":"Question","name":"Vazamento na rede afeta a qualidade da água?","acceptedAnswer":{"@type":"Answer","text":"Sim. Um ponto de vazamento é também um ponto de fragilidade. Quando a pressão da rede cai, por manutenção ou intermitência no abastecimento, pode ocorrer entrada de material externo pelo mesmo ponto por onde a água escapava, o que compromete a qualidade no trecho final da distribuição."}},
{"@type":"Question","name":"Por que a água chega com cheiro de cloro ou barrenta às vezes?","acceptedAnswer":{"@type":"Answer","text":"O cloro é adicionado no tratamento e precisa permanecer na rede até o consumo, por isso o cheiro. Já a água barrenta costuma aparecer depois de manutenções, quando o sedimento acumulado nas tubulações antigas se solta com a variação de pressão."}},
{"@type":"Question","name":"A caixa d'água da minha casa influencia?","acceptedAnswer":{"@type":"Answer","text":"Muito. A caixa é o último reservatório antes da torneira e deve ser tampada, vedada e limpa a cada seis meses. Uma caixa mal vedada anula boa parte do trabalho feito na estação de tratamento."}},
{"@type":"Question","name":"Um purificador resolve o problema da rede?","acceptedAnswer":{"@type":"Answer","text":"O purificador não conserta a rede pública, mas atua no ponto de consumo, que é o único trecho sob o seu controle. Ele retém sedimentos, reduz cloro e melhora sabor e odor, e no caso do Acqualive ainda entrega água alcalina e mineralizada."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">SANEAMENTO E QUALIDADE</span>
    <h1>Brasil perde quase <span>40% da água tratada</span> no caminho até a torneira</h1>
    <p class="header-desc">O desperdício é o número que aparece na manchete. O que quase ninguém conta é o efeito disso na qualidade da água que chega no seu copo.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>04 set 2026</span><span>•</span><span>7 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/perdas-agua-brasil.jpg" alt="Vista aérea de uma estação de tratamento de água com tubulações e reservatórios circulares no fim da tarde" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>O Instituto Trata Brasil divulgou em 2026 um levantamento que continua incomodando: perto de <strong>40% de toda a água tratada no país se perde antes de chegar às casas</strong>. É água que passou por captação, tratamento, cloração e bombeamento, custou energia e dinheiro, e simplesmente escapa no caminho. Segundo o instituto, reduzir essas perdas poderia abastecer <a href="https://tratabrasil.org.br/reduzir-perdas-de-agua-no-brasil-poderia-abastecer-populacao-maior-que-um-dos-paises-sede-da-copa-do-mundo-2026/" target="_blank" rel="noopener">quase 48 milhões de brasileiros por ano</a>.</p>

  <p>No começo de setembro, o tema voltou ao noticiário por um contraste quase irônico: um estudo apontou que <strong>Manaus, na região mais rica em água doce do planeta, corre risco crítico de escassez até 2040</strong>. Não falta água na natureza. Falta água que chegue bem no fim da linha.</p>

  <div class="quote">Perda de água não é só uma conta de desperdício. É um mapa de todos os pontos frágeis entre a estação de tratamento e a sua cozinha.</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#o-que-e">O que exatamente se perde no caminho</a></li>
      <li><a href="#qualidade">Por que isso afeta a qualidade, e não só o volume</a></li>
      <li><a href="#sinais">Os sinais que você já percebeu na sua torneira</a></li>
      <li><a href="#caixa">O último trecho é o seu: caixa d água e encanamento</a></li>
      <li><a href="#o-que-fazer">O que dá para fazer dentro de casa</a></li>
      <li><a href="#acqualive">Tratar de novo, no ponto de consumo</a></li>
    </ol>
  </nav>

  <h2 id="o-que-e">O que exatamente se perde no caminho</h2>
  <p>As perdas se dividem em dois grupos. As <strong>perdas físicas</strong> são as visíveis e as invisíveis: rompimentos, vazamentos em juntas, tubulações com décadas de uso, reservatórios com extravasamento. As <strong>perdas aparentes</strong> envolvem ligações irregulares e hidrômetros descalibrados, ou seja, água que chega mas não é medida.</p>

  <p>O primeiro grupo é o que interessa para quem se preocupa com saúde. Cada vazamento é um furo, e um furo funciona nos dois sentidos.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">40%</div><div class="stat-label">da água tratada se perde antes do consumo no Brasil</div></div>
    <div class="stat-card"><div class="stat-number">48 mi</div><div class="stat-label">de pessoas poderiam ser abastecidas por ano se essas perdas caíssem</div></div>
    <div class="stat-card"><div class="stat-number">2040</div><div class="stat-label">horizonte de risco hídrico crítico apontado para Manaus</div></div>
  </div>

  <h2 id="qualidade">Por que isso afeta a qualidade, e não só o volume</h2>
  <p>A rede de distribuição trabalha pressurizada justamente para que nada de fora entre nela. Quando a pressão cai, e ela cai em manutenções, em rodízios de abastecimento e em picos de consumo, o cenário se inverte por alguns instantes.</p>

  <ul class="check-list">
    <li><strong>Refluxo em pontos de vazamento:</strong> com pressão baixa, o mesmo furo por onde a água saía pode aspirar água do solo ao redor.</li>
    <li><strong>Sedimento em suspensão:</strong> tubulações antigas acumulam depósito, e a variação brusca de pressão solta esse material de uma vez.</li>
    <li><strong>Consumo de cloro residual:</strong> quanto mais longo e comprometido o trecho, mais cloro se gasta pelo caminho, deixando o fim da rede menos protegido.</li>
    <li><strong>Intermitência:</strong> cada retomada de abastecimento empurra o que estava parado na tubulação direto para as casas.</li>
  </ul>

  <p>Nada disso significa que a água tratada brasileira seja ruim. Significa que a qualidade medida na saída da estação não é necessariamente a qualidade que chega na sua torneira.</p>

  <div class="mid-cta">
    <p>Você não controla a rede da cidade. Controla o último metro antes do seu copo.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="sinais">Os sinais que você já percebeu na sua torneira</h2>
  <p>Se você mora em cidade grande, provavelmente já viu pelo menos um destes episódios: água esbranquiçada logo depois de uma obra na rua, cheiro forte de cloro em determinados dias, gosto metálico no fim da tarde, resíduo escuro no filtro da torneira em pouco tempo de uso.</p>

  <p>São pistas de que o percurso teve interferência. E é por isso que <strong>tratar a água de novo, no ponto de consumo, deixou de ser exagero</strong>.</p>

  <h2 id="caixa">O último trecho é o seu: caixa d água e encanamento</h2>
  <p>Existe um pedaço da rede que não é da concessionária: o que começa no cavalete e termina na sua torneira. Nesse trecho, a caixa d água é o ponto mais sensível.</p>

  <ul class="check-list">
    <li>Tampa vedada, sem frestas para insetos, poeira e luz.</li>
    <li>Limpeza a cada seis meses, com registro da data.</li>
    <li>Extravasor com tela, para impedir entrada de animais.</li>
    <li>Atenção redobrada em prédios com reservatório inferior e superior.</li>
  </ul>

  <h2 id="o-que-fazer">O que dá para fazer dentro de casa</h2>
  <ol>
    <li><strong>Depois de manutenção na rua,</strong> deixe a água correr alguns minutos antes de usar para beber ou cozinhar.</li>
    <li><strong>Mantenha a caixa d água no calendário,</strong> como você faz com a revisão do carro.</li>
    <li><strong>Não estique o prazo do refil.</strong> Elemento filtrante saturado deixa de proteger e passa a acumular.</li>
    <li><strong>Prefira tratamento no ponto de uso,</strong> ou seja, o mais perto possível de onde a água é consumida.</li>
    <li><strong>Evite estocar em galão exposto ao sol,</strong> que é trocar um problema por outro.</li>
  </ol>

  <h2 id="acqualive">Tratar de novo, no ponto de consumo</h2>
  <p>A conta de 40% é um problema de infraestrutura, e a solução dele leva décadas e bilhões. A sua decisão é bem mais simples e imediata: garantir que, seja qual for o estado da rede lá fora, a água que entra no seu copo passe por um último tratamento aqui dentro.</p>

  <p>É exatamente isso que um purificador Acqualive faz. Ele retém sedimentos e partículas, elimina o cloro que sobrou do caminho, corrige sabor e odor, e ainda entrega água <strong>alcalina, mineralizada e antioxidante</strong>, direto na torneira, fresquinha e sem galão.</p>

  <div class="cta-section">
    <h2>A rede é da cidade. A água do seu copo <span>é sua</span></h2>
    <p>Purificadores Acqualive com água alcalina, mineralizada e livre de cloro. Em até 10x sem juros e com frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Ver os purificadores Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/anvisa-interdita-agua-mineral-coliformes/" target="_blank">Anvisa interdita água mineral por coliformes</a></li>
      <li><a href="https://blog.acqualive.com.br/agua-da-torneira-segura-brasil/" target="_blank">A água da torneira é segura no Brasil?</a></li>
      <li><a href="https://blog.acqualive.com.br/agua-que-voce-bebe-tem-microplasticos/" target="_blank">A água que você bebe tem microplásticos?</a></li>
    </ul>
  </div>
</main>`
  )
};

const article23 = {
  title: "240 mil partículas de plástico por litro: o que a ciência de 2026 já sabe sobre microplásticos no corpo humano",
  slug: "microplasticos-corpo-humano-2026",
  html: wrap(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Microplásticos no Corpo Humano: O Que a Ciência de 2026 Já Sabe | Acqualive</title>
<meta name="description" content="Estudos de 2026 revisam os efeitos dos microplásticos no corpo humano, de cognição a coração e microbiota. Entenda as evidências, o que ainda falta provar e como reduzir sua exposição pela água.">
<meta name="keywords" content="microplasticos no corpo humano, nanoplasticos, agua engarrafada plastico, microplasticos saude, purificador de agua, agua alcalina, Acqualive">
<meta name="robots" content="index, follow">
<meta name="author" content="Acqualive">
<link rel="canonical" href="https://blog.acqualive.com.br/microplasticos-corpo-humano-2026/">
<meta property="og:title" content="240 mil partículas de plástico por litro: o que a ciência já sabe sobre microplásticos no corpo">
<meta property="og:description" content="Revisões publicadas em 2026 investigam efeitos em cognição, coração e microbiota. O que é evidência, o que é hipótese e o que dá para fazer hoje.">
<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/microplasticos-corpo.jpg">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"240 mil partículas de plástico por litro: o que a ciência de 2026 já sabe sobre microplásticos no corpo humano","description":"Panorama das evidências científicas de 2026 sobre microplásticos e nanoplásticos na saúde humana e como reduzir a exposição pela água.","author":{"@type":"Organization","name":"Acqualive"},"publisher":{"@type":"Organization","name":"Acqualive"},"datePublished":"2026-09-04","dateModified":"2026-09-04","mainEntityOfPage":{"@type":"WebPage"},"image":"https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/microplasticos-corpo.jpg"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Quantos microplásticos existem na água engarrafada?","acceptedAnswer":{"@type":"Answer","text":"Um estudo amplamente divulgado identificou cerca de 240 mil partículas plásticas por litro em água engarrafada, sendo a maior parte nanoplásticos, pequenos demais para serem vistos e detectados por métodos convencionais."}},
{"@type":"Question","name":"Microplásticos fazem mal à saúde?","acceptedAnswer":{"@type":"Answer","text":"As revisões publicadas em 2026 apontam associações com inflamação, estresse oxidativo e alterações na microbiota intestinal, além de linhas de investigação sobre efeitos cardiovasculares e cognitivos. A ciência ainda não estabeleceu limites seguros de exposição para humanos, por isso a recomendação prática é reduzir a exposição evitável."}},
{"@type":"Question","name":"Ferver a água elimina microplásticos?","acceptedAnswer":{"@type":"Answer","text":"Ferver ajuda no aspecto microbiológico e pode fazer parte das partículas se agregarem a minerais e sedimentarem, mas não é um método confiável de remoção. A retenção depende de elemento filtrante adequado."}},
{"@type":"Question","name":"Como reduzir a exposição a microplásticos no dia a dia?","acceptedAnswer":{"@type":"Answer","text":"Trocar garrafas e galões plásticos por água filtrada no ponto de consumo, usar copos e garrafas de vidro ou inox, não esquentar comida em recipiente plástico e evitar deixar plástico exposto ao calor e ao sol."}},
{"@type":"Question","name":"Um purificador retém microplásticos?","acceptedAnswer":{"@type":"Answer","text":"Elementos filtrantes certificados retêm partículas na faixa dos microplásticos e reduzem a carga de sedimentos e cloro. O ponto crítico é respeitar o prazo de troca do refil, porque um elemento saturado perde eficiência."}}
]}
</script>`,
    `<header class="article-header">
  <div class="header-inner">
    <span class="badge">CIÊNCIA DA ÁGUA</span>
    <h1><span>240 mil partículas</span> de plástico por litro: o que a ciência de 2026 já sabe sobre microplásticos no corpo</h1>
    <p class="header-desc">A maior parte delas é invisível. E a discussão científica deste ano deixou de ser se estamos expostos, e passou a ser o quanto isso pesa.</p>
    <div class="header-meta">
      <span>Acqualive</span><span>•</span><span>04 set 2026</span><span>•</span><span>9 min de leitura</span>
    </div>
  </div>
  <div class="hero-img-wrap">
    <img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/microplasticos-corpo.jpg" alt="Copo de água transparente sobre bancada com partículas minúsculas suspensas iluminadas por luz azul" width="1280" height="800" loading="eager">
  </div>
</header>

<main class="article-body">
  <p>Em 2024, um estudo pioneiro usando microscopia de espalhamento Raman estimulado encontrou, em média, <strong>cerca de 240 mil partículas plásticas por litro de água engarrafada</strong>. O número chocou por dois motivos: era muito maior do que se imaginava e, principalmente, porque <strong>cerca de 90% dessas partículas eram nanoplásticos</strong>, pequenos o bastante para atravessar barreiras biológicas.</p>

  <p>De lá para cá, o assunto saiu do laboratório e virou pauta de saúde pública. Em 2026, revisões sistemáticas publicadas em periódicos brasileiros e portugueses reuniram uma década de estudos para responder à pergunta que interessa: <strong>o que essas partículas fazem dentro de nós?</strong></p>

  <div class="quote">A pergunta deixou de ser se você está exposto. Passou a ser quanto dessa exposição é evitável.</div>

  <nav class="toc">
    <div class="toc-title">Neste artigo</div>
    <ol>
      <li><a href="#numero">De onde vem o número de 240 mil</a></li>
      <li><a href="#evidencias">O que as revisões de 2026 encontraram</a></li>
      <li><a href="#hipotese">O que ainda é hipótese, e por que isso importa</a></li>
      <li><a href="#brasil">Microplástico não está só na garrafa</a></li>
      <li><a href="#reduzir">Como reduzir a exposição de verdade</a></li>
      <li><a href="#acqualive">Água filtrada no ponto de consumo</a></li>
    </ol>
  </nav>

  <h2 id="numero">De onde vem o número de 240 mil</h2>
  <p>Métodos tradicionais só enxergavam partículas acima de um determinado tamanho. Quando a técnica melhorou, apareceu o que estava escondido: a fração nanométrica, invisível para os métodos antigos. Foi por isso que a contagem saltou de centenas para centenas de milhares por litro.</p>

  <p>A origem é conhecida: a própria embalagem, a tampa, o processo de envase e, sobretudo, o <strong>calor</strong>. Garrafa dentro de caminhão fechado, estoque em galpão quente, garrafa esquecida no carro. Cada ciclo térmico acelera a liberação.</p>

  <div class="stat-grid">
    <div class="stat-card"><div class="stat-number">240 mil</div><div class="stat-label">partículas plásticas por litro em água engarrafada, em média</div></div>
    <div class="stat-card"><div class="stat-number">90%</div><div class="stat-label">delas são nanoplásticos, invisíveis aos métodos convencionais</div></div>
    <div class="stat-card"><div class="stat-number">2015 a 2026</div><div class="stat-label">período coberto por revisões sistemáticas publicadas neste ano</div></div>
  </div>

  <h2 id="evidencias">O que as revisões de 2026 encontraram</h2>
  <p>As revisões publicadas neste ano convergem em alguns pontos, que aparecem repetidamente nos estudos experimentais e nos trabalhos com amostras humanas:</p>

  <ul class="check-list">
    <li><strong>Inflamação e estresse oxidativo:</strong> a presença de partículas estranhas ativa resposta inflamatória local e aumenta a produção de radicais livres.</li>
    <li><strong>Microbiota intestinal:</strong> alterações na composição bacteriana do intestino, com reflexo em permeabilidade e resposta imune.</li>
    <li><strong>Sistema cardiovascular:</strong> partículas já foram identificadas em tecido humano, incluindo placas arteriais, o que abriu uma frente inteira de investigação.</li>
    <li><strong>Sistema nervoso:</strong> estudos em modelos animais indicam passagem de nanopartículas e efeitos sobre comportamento e cognição, área ainda em construção.</li>
    <li><strong>Distribuição ampla:</strong> os trabalhos brasileiros também detectam microplásticos em reservatórios de abastecimento público e até em águas subterrâneas.</li>
  </ul>

  <div class="mid-cta">
    <p>A exposição pelo ar e pelos alimentos é difícil de controlar. A da água, não.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener">Conhecer o Acqualive →</a>
  </div>

  <h2 id="hipotese">O que ainda é hipótese, e por que isso importa</h2>
  <p>Ser honesto com a ciência é parte do trabalho. A Organização Mundial da Saúde e as próprias revisões de 2026 são claras: <strong>ainda não existe um limite de exposição seguro estabelecido para humanos</strong>, e boa parte dos efeitos descritos vem de estudos em células e animais, com doses que nem sempre representam a exposição real do dia a dia.</p>

  <p>Isso não é motivo para relaxar, é motivo para agir com bom senso. Quando uma exposição é <strong>evitável, barata de evitar e sem contrapartida negativa</strong>, a decisão racional é reduzi-la enquanto a ciência amadurece.</p>

  <h2 id="brasil">Microplástico não está só na garrafa</h2>
  <p>Um levantamento publicado em 2026 encontrou microplásticos na água e no sedimento de um reservatório de abastecimento público no interior de São Paulo. Outro trabalho investigou a ocorrência em águas subterrâneas ligadas ao Sistema Aquífero Guarani.</p>

  <p>Ou seja, o problema não se resolve trocando de marca de garrafa. Ele se resolve mudando o <strong>ponto</strong> em que a água é tratada: o mais perto possível de você.</p>

  <h2 id="reduzir">Como reduzir a exposição de verdade</h2>
  <ol>
    <li><strong>Saia do plástico descartável na água de beber.</strong> É a maior fonte evitável e a mais fácil de trocar.</li>
    <li><strong>Use vidro ou inox</strong> na garrafa que você carrega e nos copos de casa.</li>
    <li><strong>Nunca esquente comida em recipiente plástico</strong> e evite lavar plástico em água muito quente.</li>
    <li><strong>Tire o plástico do sol.</strong> Calor é o gatilho que mais acelera a liberação de partículas.</li>
    <li><strong>Filtre no ponto de consumo</strong> e troque o refil no prazo, sem esticar.</li>
  </ol>

  <h2 id="acqualive">Água filtrada no ponto de consumo</h2>
  <p>Um purificador Acqualive instalado na sua cozinha remove sedimentos e partículas, elimina o cloro e entrega água <strong>alcalina, mineralizada e antioxidante</strong> na hora do consumo. Sem garrafa, sem galão, sem semanas de estoque no calor.</p>

  <p>É a maneira mais direta de tirar da rotina a fonte de microplásticos que está inteiramente sob o seu controle, e ainda melhorar a qualidade da água em outros aspectos ao mesmo tempo.</p>

  <div class="cta-section">
    <h2>Menos plástico no copo. <span>Mais água de verdade</span></h2>
    <p>Purificadores Acqualive com água alcalina, mineralizada e livre de cloro. Em até 10x sem juros e com frete grátis. Consulte regiões disponíveis.</p>
    <a href="https://acqualive.com.br" target="_blank" rel="noopener" class="cta-button">Ver os purificadores Acqualive →</a>
  </div>

  <div class="related-links">
    <h4>Continue lendo</h4>
    <ul>
      <li><a href="https://blog.acqualive.com.br/agua-que-voce-bebe-tem-microplasticos/" target="_blank">A água que você bebe tem microplásticos?</a></li>
      <li><a href="https://blog.acqualive.com.br/anvisa-interdita-agua-mineral-coliformes/" target="_blank">Anvisa interdita água mineral por coliformes</a></li>
      <li><a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" target="_blank">Água anti-inflamatória: o copo que desliga a inflamação silenciosa</a></li>
    </ul>
  </div>
</main>`
  )
};

export const EXTRA_ARTICLES = [article6, article7, article8, article9, article10, article11, article12, article13, article14, article15, article16, article17, article18, article19, article20, article21, article22, article23];
