// Newsletter "Acqualive News" — template isolado para migracao/uso em projeto proprio.
// Estrutura identica aos demais templates de email do projeto.

export interface EmailTemplate {
  day: string;
  subject: string;
  html: string;
}

export const acqualiveNews: EmailTemplate = {
    day: "Acqualive News — Revista Digital",
    subject: "Acqualive News: água, ciência e leituras selecionadas",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Acqualive News</title>
</head>
<body style="margin:0;padding:0;background-color:#eef1f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a2440;-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Uma curadoria sobre água, ciência e saúde — direto da redação Acqualive.</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef1f6;padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 4px 20px rgba(14,42,82,0.06);">

<!-- ============ MASTHEAD ============ -->
<tr><td style="padding:28px 40px 20px;border-bottom:1px solid #e6ebf3;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:700;letter-spacing:-0.5px;color:#0e2a52;">Acqualive <span style="color:#f97316;">News</span></td>
      <td align="right" style="font-size:11px;letter-spacing:2px;color:#7a8aa2;text-transform:uppercase;">Revista Digital</td>
    </tr>
  </table>
</td></tr>

<!-- ============ CAPA ============ -->
<tr><td style="padding:0;">
  <img src="https://blog.acqualive.com.br/wp-content/uploads/2020/05/Family-Quarentine.png" alt="Capa da edição" width="640" style="display:block;width:100%;height:auto;">
</td></tr>
<tr><td style="padding:36px 40px 8px;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Capa da Edição</p>
  <h1 style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:34px;line-height:1.15;color:#0e2a52;font-weight:700;letter-spacing:-0.8px;">A água que desinflama: o que a ciência brasileira descobriu.</h1>
  <p style="margin:0;font-size:15px;line-height:1.5;color:#4a5b7a;">Ciência, rotina e pequenos gestos que mudam a forma como cuidamos da saúde através da água.</p>
</td></tr>

<!-- ============ EDITORIAL ============ -->
<tr><td style="padding:44px 40px 12px;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Editorial</p>
  <p style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:20px;line-height:1.55;color:#1a2440;font-style:italic;">"A água é o que mais entra no corpo. Ainda assim, é sobre o que menos pensamos."</p>
  <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4a5b7a;">Esta edição reúne leituras que ajudam a olhar para a água com outros olhos: estudos recentes, conversas de cozinha, hidratação em cada fase da vida e um novo capítulo que a Acqualive começa a escrever. Uma curadoria para ler com calma, no seu tempo.</p>
  <p style="margin:0;font-size:14px;color:#7a8aa2;letter-spacing:0.5px;">— Redação Acqualive</p>
</td></tr>

<tr><td style="padding:36px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ MATÉRIA EM DESTAQUE (Artigo real 1) ============ -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Matéria em destaque &nbsp;•&nbsp; Ciência</p>
  <h2 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">Água Anti-Inflamatória: o estudo que mudou tudo</h2>
</td></tr>
<tr><td style="padding:0 40px 20px;">
  <img src="https://paginas.acqualive.com.br/__l5e/assets-v1/92f534b8-533d-498b-b212-d714d3f64c5b/maos-copo-agua.jpg" alt="Água anti-inflamatória" width="560" style="display:block;width:100%;height:auto;border-radius:6px;">
</td></tr>
<tr><td style="padding:0 40px;">
  <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#4a5b7a;">A relação entre inflamação crônica e qualidade da água ganhou novos contornos com uma pesquisa brasileira recente. Entenda, de forma simples, como a água que você bebe pode estar inflamando ou desinflamando o seu corpo, e o que o estudo revelou sobre a água alcalina ionizada.</p>
  <a href="https://blog.acqualive.com.br/agua-anti-inflamatoria/" style="font-size:14px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo completo no blog →</a>
</td></tr>

<tr><td style="padding:44px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ REPORTAGEM PRINCIPAL ============ -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Reportagem &nbsp;•&nbsp; 6 min de leitura</p>
  <h2 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">A água que chega à sua casa é realmente a água que você imagina?</h2>
</td></tr>
<tr><td style="padding:0 40px;">
  <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#4a5b7a;">O tratamento nas cidades brasileiras cumpre padrões básicos de potabilidade, mas o caminho entre a estação e a torneira é longo. Tubulações antigas, caixas d'água mal higienizadas e resíduos do próprio processo fazem com que o líquido que chega à cozinha nem sempre esteja no estado ideal para consumo diário.</p>
  <p style="margin:0;font-size:15px;line-height:1.7;color:#4a5b7a;">Compreender essa cadeia é o primeiro passo para tomar decisões melhores — não por medo, mas por consciência.</p>
</td></tr>

<!-- ============ VOCÊ SABIA (curiosidade) ============ -->
<tr><td style="padding:32px 40px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f8fd;border-radius:8px;">
    <tr><td style="padding:24px 26px;">
      <p style="margin:0 0 8px;font-size:11px;letter-spacing:3px;color:#10b981;text-transform:uppercase;font-weight:700;">Você sabia?</p>
      <p style="margin:0;font-size:15px;line-height:1.65;color:#1a2440;">Mais de 60% dos brasileiros consome menos magnésio do que precisa. Sono, energia, humor e coração dependem desse mineral esquecido — e a água mineralizada é uma das formas mais silenciosas de repor.</p>
    </td></tr>
  </table>
</td></tr>

<!-- ============ LEITURA RELACIONADA (card horizontal, artigo real 2) ============ -->
<tr><td style="padding:28px 40px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e6ebf3;border-radius:8px;">
    <tr>
      <td width="38%" valign="top" style="padding:0;">
        <img src="https://blog.acqualive.com.br/wp-content/uploads/2025/08/poderes-do-magnesio.jpg" alt="Magnésio" width="220" style="display:block;width:100%;height:auto;border-radius:8px 0 0 8px;">
      </td>
      <td width="62%" valign="top" style="padding:20px 22px;">
        <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#7a8aa2;text-transform:uppercase;font-weight:700;">Leitura relacionada</p>
        <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:17px;line-height:1.3;color:#0e2a52;font-weight:700;">Magnésio: o mineral esquecido que sustenta sua energia</h3>
        <p style="margin:0 0 10px;font-size:13px;line-height:1.55;color:#4a5b7a;">Benefícios reais para sono, humor, ossos e coração — e a forma mais simples de repor.</p>
        <a href="https://blog.acqualive.com.br/magnesio-beneficios-saude/" style="font-size:13px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo →</a>
      </td>
    </tr>
  </table>
</td></tr>

<tr><td style="padding:44px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ CUIDE DO SEU ACQUALIVE — TROCA DE REFIS ============ -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#10b981;text-transform:uppercase;font-weight:600;">Cuide do seu Acqualive &nbsp;•&nbsp; Troca de refis</p>
  <h2 style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.25;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">A água boa depende de um gesto simples: trocar o refil na hora certa.</h2>
</td></tr>
<tr><td style="padding:0 40px 20px;">
  <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4a5b7a;">Os refis são o coração do purificador. Com o tempo, retêm cloro, metais, microplásticos e sedimentos que estavam na sua água — e é justamente por isso que precisam ser renovados. Um refil vencido deixa de proteger e pode devolver ao copo aquilo que deveria estar filtrando.</p>
  <p style="margin:0 0 22px;font-size:15px;line-height:1.7;color:#4a5b7a;">A recomendação da engenharia Acqualive é trocar a cada <strong style="color:#0e2a52;">6 meses</strong>, ou antes se você percebeu mudança no sabor, no fluxo ou no cheiro da água. É o cuidado silencioso que mantém sua família bebendo água de verdade, todos os dias.</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f8fd;border-radius:8px;margin:0 0 22px;">
    <tr><td style="padding:22px 24px;">
      <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;color:#7a8aa2;text-transform:uppercase;font-weight:700;">Sinais de que é hora de trocar</p>
      <p style="margin:0;font-size:14px;line-height:1.7;color:#1a2440;">Fluxo mais lento • sabor ou odor diferente • mais de 6 meses desde a última troca • uso intenso pela família toda.</p>
    </td></tr>
  </table>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
    <tr><td align="center" style="background:linear-gradient(135deg,#f97316 0%,#f9c74f 100%);border-radius:6px;">
      <a href="https://acqualive.com.br/refis" target="_blank" style="display:block;padding:16px 36px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.5px;">QUERO TROCAR MEUS REFIS</a>
    </td></tr>
  </table>
</td></tr>

<tr><td style="padding:44px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ DESTAQUE DA EDIÇÃO — DUO (editorial, não anúncio) ============ -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Novo Capítulo &nbsp;•&nbsp; Bastidores</p>
  <h2 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">Nasce o Acqualive DUO: duas experiências, uma cozinha.</h2>
</td></tr>
<tr><td style="padding:0 40px 20px;">
  <img src="https://paginas.acqualive.com.br/__l5e/assets-v1/401eb55a-8570-4311-b9a8-ffc20815e730/acqualive-duo-consultorio.png" alt="Acqualive DUO em ambiente de consultório" width="560" style="display:block;width:100%;height:auto;border-radius:6px;">
</td></tr>
<tr><td style="padding:0 40px;">
  <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#4a5b7a;">O DUO nasceu de uma observação simples: quem busca água alcalina para a saúde e bem-estar quer também o conforto da água fresquinha no dia a dia. Reunir as duas experiências em um único equipamento foi um exercício de engenharia, mas antes de tudo de escuta — anos ouvindo o que a cozinha brasileira pede.</p>
  <p style="margin:0 0 22px;font-size:15px;line-height:1.7;color:#4a5b7a;">Mais do que um lançamento, é o começo de um novo capítulo na forma como pensamos hidratação em casa.</p>
  <a href="https://www.acqualive.com.br/collections/all/products/purificador-de-agua-alcalina-acqualive-duo-natural-e-gelada" style="font-size:14px;color:#f97316;text-decoration:none;font-weight:600;">Conhecer o DUO →</a>
</td></tr>

<!-- ============ DICA RÁPIDA ============ -->
<tr><td style="padding:36px 40px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,#0e2a52 0%,#1a3a6b 100%);border-radius:10px;">
    <tr><td style="padding:26px 30px;">
      <p style="margin:0 0 10px;font-size:11px;letter-spacing:3px;color:#f9c74f;text-transform:uppercase;font-weight:700;">Dica da redação</p>
      <h3 style="margin:0 0 10px;font-family:Georgia,serif;font-size:20px;color:#ffffff;font-weight:700;letter-spacing:-0.3px;">Água alcalina em casa, em menos de 1 minuto.</h3>
      <p style="margin:0 0 14px;font-size:14px;line-height:1.65;color:#b7c5db;">Três formas de fazer água alcalina no dia a dia — com bicarbonato, com limão e com filtro ionizador. Cada uma com suas vantagens e limites.</p>
      <a href="https://blog.acqualive.com.br/como-fazer-agua-alcalina-em-casa/" style="font-size:13px;color:#f9c74f;text-decoration:none;font-weight:600;">Ler no blog →</a>
    </td></tr>
  </table>
</td></tr>

<!-- ============ BASTIDORES ============ -->
<tr><td style="padding:44px 40px 0;">
  <p style="margin:0 0 8px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Por dentro da Acqualive</p>
  <h2 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#0e2a52;font-weight:700;letter-spacing:-0.3px;">Onde tecnologia encontra propósito</h2>
</td></tr>
<tr><td style="padding:0 40px;">
  <p style="margin:0;font-size:15px;line-height:1.7;color:#4a5b7a;">Cada produto Acqualive nasce da mesma pergunta: como levar água de verdade para dentro das casas brasileiras? A resposta envolve pesquisa contínua, ensaios laboratoriais, materiais de grau alimentício e uma cadeia produtiva que respeita o tempo das coisas bem-feitas.</p>
</td></tr>

<tr><td style="padding:44px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ CONTINUE EXPLORANDO (3 artigos reais) ============ -->
<tr><td style="padding:36px 40px 20px;">
  <p style="margin:0 0 8px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Continue explorando</p>
  <h2 style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#0e2a52;font-weight:700;letter-spacing:-0.3px;">Mais leituras da redação</h2>
</td></tr>

<!-- Artigo card horizontal 1 -->
<tr><td style="padding:0 40px 18px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="40%" valign="top"><img src="https://blog.acqualive.com.br/wp-content/uploads/2026/04/90-da-xicara-de-cafe-e-composto-por-agua-a-agua-muda-o-gosto-do-cafe-scaled.jpg" alt="Café e água" width="220" style="display:block;width:100%;height:auto;border-radius:6px;"></td>
      <td width="4%">&nbsp;</td>
      <td width="56%" valign="top">
        <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#10b981;text-transform:uppercase;font-weight:700;">Cozinha &nbsp;•&nbsp; 4 min</p>
        <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;line-height:1.3;color:#0e2a52;font-weight:700;">O café perfeito começa na água</h3>
        <p style="margin:0 0 10px;font-size:13px;line-height:1.55;color:#4a5b7a;">98% da xícara é água. Descubra por que ela define sabor, aroma e corpo — e qual filtro baristas premiados usam.</p>
        <a href="https://blog.acqualive.com.br/cafe-perfeito-comeca-na-agua/" style="font-size:13px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo →</a>
      </td>
    </tr>
  </table>
</td></tr>

<!-- Artigo card vertical destaque -->
<tr><td style="padding:0 40px 18px;">
  <img src="https://blog.acqualive.com.br/wp-content/uploads/2026/06/woman-holding-stomach-illustration-healthcare-conc-2026-03-17-04-12-16-utc-scaled.jpg" alt="Água alcalina e refluxo" width="560" style="display:block;width:100%;height:auto;border-radius:6px;">
  <p style="margin:14px 0 6px;font-size:10px;letter-spacing:2px;color:#10b981;text-transform:uppercase;font-weight:700;">Destaque da semana &nbsp;•&nbsp; Saúde</p>
  <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:20px;line-height:1.3;color:#0e2a52;font-weight:700;">Água alcalina ajuda em refluxo, azia e gastrite? O que diz a ciência</h3>
  <p style="margin:0 0 10px;font-size:14px;line-height:1.6;color:#4a5b7a;">Estudos mostram que água com pH alcalino pode desativar a pepsina, enzima envolvida no refluxo. Entenda o que já se sabe.</p>
  <a href="https://blog.acqualive.com.br/agua-alcalina-refluxo-azia-gastrite/" style="font-size:14px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo →</a>
</td></tr>

<!-- Artigo card horizontal 3 -->
<tr><td style="padding:0 40px 18px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="40%" valign="top"><img src="https://blog.acqualive.com.br/wp-content/uploads/2025/08/Proteger_criancas_saude_Acqualive_metais_pesados_600x600.jpg" alt="Hidratação materna" width="220" style="display:block;width:100%;height:auto;border-radius:6px;"></td>
      <td width="4%">&nbsp;</td>
      <td width="56%" valign="top">
        <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#10b981;text-transform:uppercase;font-weight:700;">Família &nbsp;•&nbsp; 5 min</p>
        <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;line-height:1.3;color:#0e2a52;font-weight:700;">Hidratação materna: guia completo para mães e filhos</h3>
        <p style="margin:0 0 10px;font-size:13px;line-height:1.55;color:#4a5b7a;">Gestantes, mães que amamentam, crianças e a rotina de toda a família — o que a água certa muda.</p>
        <a href="https://blog.acqualive.com.br/hidratacao-materna-maes-e-filhos/" style="font-size:13px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo →</a>
      </td>
    </tr>
  </table>
</td></tr>

<!-- Artigo card horizontal 4 -->
<tr><td style="padding:0 40px 18px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="40%" valign="top"><img src="https://blog.acqualive.com.br/wp-content/uploads/2026/04/a-hidratacao-e-fundamental-para-homens-e-mulheres-acima-dos-40-anos-scaled.jpg" alt="Hidratação após 40" width="220" style="display:block;width:100%;height:auto;border-radius:6px;"></td>
      <td width="4%">&nbsp;</td>
      <td width="56%" valign="top">
        <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#10b981;text-transform:uppercase;font-weight:700;">Longevidade &nbsp;•&nbsp; 6 min</p>
        <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;line-height:1.3;color:#0e2a52;font-weight:700;">Hidratação após os 40 e menopausa: a água certa muda tudo</h3>
        <p style="margin:0 0 10px;font-size:13px;line-height:1.55;color:#4a5b7a;">Microplásticos, corpo em transição e o papel da qualidade da água nessa nova fase.</p>
        <a href="https://blog.acqualive.com.br/hidratacao-apos-40-menopausa/" style="font-size:13px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo →</a>
      </td>
    </tr>
  </table>
</td></tr>



<!-- ============ OPORTUNIDADE DE NEGÓCIO ============ -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Oportunidade &nbsp;•&nbsp; Franquia Acqualive</p>
  <h2 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">Transforme a saúde das pessoas. Construa seu futuro.</h2>
</td></tr>
<tr><td style="padding:0 40px 22px;">
  <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4a5b7a;">Há 16 anos a Acqualive é líder em água funcional de alta performance no Brasil, com mais de 200 mil clientes ativos e cobertura nacional. Levar essa transformação para novas cidades passou a ser possível através de um modelo de franquia enxuto, com investimento acessível e vagas limitadas por região.</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 22px;">
    <tr>
      <td width="33%" valign="top" style="padding:16px 12px;background:#f4f8fd;border-radius:8px;text-align:center;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;color:#0e2a52;font-weight:700;">R$ 30 a 60 mil</p>
        <p style="margin:0;font-size:12px;color:#7a8aa2;letter-spacing:0.5px;">Investimento inicial</p>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="33%" valign="top" style="padding:16px 12px;background:#f4f8fd;border-radius:8px;text-align:center;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;color:#0e2a52;font-weight:700;">Risco zero</p>
        <p style="margin:0;font-size:12px;color:#7a8aa2;letter-spacing:0.5px;">do investimento inicial</p>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="30%" valign="top" style="padding:16px 12px;background:#f4f8fd;border-radius:8px;text-align:center;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;color:#0e2a52;font-weight:700;">Vagas</p>
        <p style="margin:0;font-size:12px;color:#7a8aa2;letter-spacing:0.5px;">limitadas por cidade</p>
      </td>
    </tr>
  </table>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
    <tr><td align="center" style="background:linear-gradient(135deg,#f97316 0%,#f9c74f 100%);border-radius:6px;">
      <a href="https://franquias.acqualive.com.br/" target="_blank" style="display:block;padding:16px 36px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.5px;">QUERO RECEBER O PLANO DE NEGÓCIO</a>
    </td></tr>
  </table>
</td></tr>

<tr><td style="padding:32px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ ENCERRAMENTO ============ -->
<tr><td style="padding:44px 40px 40px;">
  <div style="text-align:center;">
    <p style="margin:0 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.5;color:#1a2440;font-style:italic;">"Esperamos que esta edição tenha aberto novas perguntas sobre a água que faz parte da sua rotina."</p>
    <p style="margin:0;font-size:13px;color:#7a8aa2;letter-spacing:0.5px;">Até a próxima edição. — Redação Acqualive News</p>
  </div>
</td></tr>

<!-- ============ FOOTER ============ -->
<tr><td style="background:#0e2a52;padding:32px 40px;text-align:center;">
  <p style="margin:0 0 8px;font-family:Georgia,serif;font-size:16px;color:#ffffff;font-weight:700;letter-spacing:0.3px;">Acqualive <span style="color:#f97316;">News</span></p>
  <p style="margin:0 0 16px;font-size:12px;color:#b7c5db;">Uma publicação para clientes e amigos da Acqualive.</p>
  <p style="margin:0;font-size:11px;color:rgba(183,197,219,0.6);line-height:1.6;">© 2026 Acqualive. Todos os direitos reservados.<br>Você recebeu esta edição porque faz parte da comunidade Acqualive.<br><a href="#" style="color:rgba(183,197,219,0.8);text-decoration:underline;">Preferências de e-mail</a> &nbsp;•&nbsp; <a href="#" style="color:rgba(183,197,219,0.8);text-decoration:underline;">Cancelar assinatura</a></p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
};

export default acqualiveNews;
