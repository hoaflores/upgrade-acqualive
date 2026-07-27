// Newsletter "Acqualive News" — Edicao 02 (Portal Cientifico + DUO).
// Mesma estrutura editorial da edicao 01, com conteudos novos do blog.

import type { EmailTemplate } from "./acqualive-news";

const CDN = "https://paginas.acqualive.com.br/__l5e/assets-v1";
const IMG_CAPA = `${CDN}/900950c4-c89b-40c3-ad5b-65e413c5dd27/news02-capa.jpg`;
const IMG_PORTAL = `${CDN}/92f534b8-533d-498b-b212-d714d3f64c5b/maos-copo-agua.jpg`;
const IMG_DUO = `${CDN}/24dea6fb-b358-4526-b389-feec25aff6f7/Duo_Ambientada_1.png`;
const IMG_DUO_2 = `${CDN}/401eb55a-8570-4311-b9a8-ffc20815e730/acqualive-duo-consultorio.png`;
const LINK_DUO =
  "https://www.acqualive.com.br/collections/all/products/purificador-de-agua-alcalina-acqualive-duo-natural-e-gelada";
const LINK_PORTAL = "https://paginas.acqualive.com.br/portal-cientifico";

export const acqualiveNews02: EmailTemplate = {
  day: "Acqualive News — Edição 02 | Portal Científico",
  subject: "Acqualive News: a ciência da água agora tem endereço",
  html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Acqualive News</title>
</head>
<body style="margin:0;padding:0;background-color:#eef1f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a2440;-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Nasce o Portal Científico Acqualive: estudos, evidências e respostas sobre a água que você bebe.</div>

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
  <img src="${IMG_CAPA}" alt="Capa da edição" width="640" style="display:block;width:100%;height:auto;">
</td></tr>
<tr><td style="padding:36px 40px 8px;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Capa da Edição</p>
  <h1 style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:34px;line-height:1.15;color:#0e2a52;font-weight:700;letter-spacing:-0.8px;">A ciência da água agora tem endereço.</h1>
  <p style="margin:0;font-size:15px;line-height:1.5;color:#4a5b7a;">Estudos, evidências e respostas diretas sobre pH, ORP, PRAL e hidratação, reunidos em um só lugar.</p>
</td></tr>

<!-- ============ EDITORIAL ============ -->
<tr><td style="padding:44px 40px 12px;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Editorial</p>
  <p style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:20px;line-height:1.55;color:#1a2440;font-style:italic;">"Quando o assunto é água, opinião não basta. Evidência sim."</p>
  <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4a5b7a;">Nesta edição a Acqualive apresenta o Portal Científico, uma biblioteca aberta com estudos revisados por pares, resumos em português e ferramentas interativas para entender o que realmente acontece no seu corpo. Junto dele, uma seleção das leituras mais recentes do blog: certificação, custo real, ORP negativo, PRAL e desempenho esportivo.</p>
  <p style="margin:0;font-size:14px;color:#7a8aa2;letter-spacing:0.5px;">— Redação Acqualive</p>
</td></tr>

<tr><td style="padding:36px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ LANÇAMENTO PORTAL CIENTÍFICO ============ -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#10b981;text-transform:uppercase;font-weight:600;">Lançamento &nbsp;•&nbsp; Portal Científico Acqualive</p>
  <h2 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">Tudo o que a ciência já publicou sobre água alcalina, em português.</h2>
</td></tr>
<tr><td style="padding:0 40px 20px;">
  <img src="${IMG_PORTAL}" alt="Portal Científico Acqualive" width="560" style="display:block;width:100%;height:auto;border-radius:6px;">
</td></tr>
<tr><td style="padding:0 40px;">
  <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4a5b7a;">O Portal Científico reúne estudos revisados por pares, documentos de referência e resumos escritos em linguagem clara. Você digita uma pergunta do jeito que ela existe na sua cabeça, e o portal responde com base nas evidências, citando as fontes usadas.</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f8fd;border-radius:8px;margin:0 0 22px;">
    <tr><td style="padding:22px 24px;">
      <p style="margin:0 0 10px;font-size:11px;letter-spacing:2px;color:#7a8aa2;text-transform:uppercase;font-weight:700;">O que você encontra lá dentro</p>
      <p style="margin:0 0 8px;font-size:14px;line-height:1.7;color:#1a2440;"><strong style="color:#0e2a52;">Busca por perguntas</strong> — respostas sintetizadas a partir dos estudos, com as referências à vista.</p>
      <p style="margin:0 0 8px;font-size:14px;line-height:1.7;color:#1a2440;"><strong style="color:#0e2a52;">Escala de pH interativa</strong> — compare café, refrigerante, água da torneira e água alcalina.</p>
      <p style="margin:0 0 8px;font-size:14px;line-height:1.7;color:#1a2440;"><strong style="color:#0e2a52;">Mapa do corpo</strong> — cérebro, coração, estômago e músculos e o papel da água em cada um.</p>
      <p style="margin:0 0 8px;font-size:14px;line-height:1.7;color:#1a2440;"><strong style="color:#0e2a52;">Mito ou evidência</strong> — checagem honesta das frases que circulam por aí.</p>
      <p style="margin:0;font-size:14px;line-height:1.7;color:#1a2440;"><strong style="color:#0e2a52;">Teste rápido</strong> — descubra o seu nível de conhecimento sobre hidratação e concorra a descontos e presentes.</p>
    </td></tr>
  </table>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
    <tr><td align="center" style="background:linear-gradient(135deg,#f97316 0%,#f9c74f 100%);border-radius:6px;">
      <a href="${LINK_PORTAL}" target="_blank" style="display:block;padding:16px 36px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.5px;">EXPLORAR O PORTAL CIENTÍFICO</a>
    </td></tr>
  </table>
</td></tr>

<tr><td style="padding:44px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ MATÉRIA EM DESTAQUE (artigo real 1) ============ -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Matéria em destaque &nbsp;•&nbsp; Ciência</p>
  <h2 style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">Água alcalina é antioxidante? O que significa o ORP negativo</h2>
</td></tr>
<tr><td style="padding:0 40px;">
  <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#4a5b7a;">O ORP mede o potencial de oxidação e redução de um líquido. Quando é negativo, a água tende a doar elétrons em vez de retirá-los. Esse é o ponto técnico por trás da palavra antioxidante, e o artigo explica onde a evidência sustenta a afirmação e onde ela ainda é limitada.</p>
  <a href="https://blog.acqualive.com.br/agua-alcalina-e-antioxidante-o-que-significa-o-orp-negativo/" style="font-size:14px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo completo no blog →</a>
</td></tr>

<!-- ============ VOCÊ SABIA ============ -->
<tr><td style="padding:32px 40px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f8fd;border-radius:8px;">
    <tr><td style="padding:24px 26px;">
      <p style="margin:0 0 8px;font-size:11px;letter-spacing:3px;color:#10b981;text-transform:uppercase;font-weight:700;">Você sabia?</p>
      <p style="margin:0;font-size:15px;line-height:1.65;color:#1a2440;">Cerca de 70% do corpo humano é água. É o único ingrediente que participa de praticamente todas as reações do organismo, e o único que a maioria das pessoas escolhe sem pensar.</p>
    </td></tr>
  </table>
</td></tr>

<!-- ============ LEITURA RELACIONADA (artigo real 2) ============ -->
<tr><td style="padding:28px 40px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e6ebf3;border-radius:8px;">
    <tr>
      <td valign="top" style="padding:20px 22px;">
        <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#7a8aa2;text-transform:uppercase;font-weight:700;">Leitura relacionada &nbsp;•&nbsp; Bioquímica</p>
        <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;line-height:1.3;color:#0e2a52;font-weight:700;">O que é PRAL negativo na água? Entenda de forma simples</h3>
        <p style="margin:0 0 10px;font-size:13px;line-height:1.55;color:#4a5b7a;">PRAL negativo significa efeito alcalinizante no organismo, em vez de acidificante. O artigo traduz o conceito sem jargão.</p>
        <a href="https://blog.acqualive.com.br/o-que-e-pral-negativo-na-agua-entenda-de-forma-simples/" style="font-size:13px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo →</a>
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
  <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4a5b7a;">Os refis são o coração do purificador. Com o tempo, retêm cloro, metais, microplásticos e sedimentos que estavam na sua água, e é justamente por isso que precisam ser renovados. Um refil vencido deixa de proteger e pode devolver ao copo aquilo que deveria estar filtrando.</p>
  <p style="margin:0 0 22px;font-size:15px;line-height:1.7;color:#4a5b7a;">A recomendação da engenharia Acqualive é trocar a cada <strong style="color:#0e2a52;">6 meses</strong>, ou antes se você percebeu mudança no sabor, no fluxo ou no cheiro da água.</p>
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
  <p style="margin:16px 0 0;text-align:center;font-size:13px;line-height:1.6;color:#7a8aa2;">Quer entender o custo real da manutenção? <a href="https://blog.acqualive.com.br/refil-de-purificador-de-agua-alcalina-custo-troca-e-o-que-saber/" style="color:#f97316;text-decoration:none;font-weight:600;">Leia o guia de refis →</a></p>
</td></tr>

<tr><td style="padding:44px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ DESTAQUE COMERCIAL — DUO ============ -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Destaque da edição &nbsp;•&nbsp; Acqualive DUO</p>
  <h2 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">Água alcalina e água gelada, no mesmo aparelho.</h2>
</td></tr>
<tr><td style="padding:0 40px 20px;">
  <img src="${IMG_DUO}" alt="Acqualive DUO na cozinha" width="560" style="display:block;width:100%;height:auto;border-radius:6px;">
</td></tr>
<tr><td style="padding:0 40px 20px;">
  <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4a5b7a;">O DUO é o purificador mais completo da Acqualive. Ele entrega a água alcalina ionizada que você conhece, com pH elevado e ORP negativo, e ainda resolve o pedido mais repetido da cozinha brasileira: água fresquinha na hora, sem garrafa na geladeira.</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 22px;">
    <tr>
      <td width="49%" valign="top" style="padding:16px 16px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:17px;color:#0e2a52;font-weight:700;">Duas temperaturas</p>
        <p style="margin:0;font-size:13px;line-height:1.6;color:#7a8aa2;">Natural e fresquinha, com a mesma qualidade de filtragem.</p>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="49%" valign="top" style="padding:16px 16px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:17px;color:#0e2a52;font-weight:700;">pH alcalino e ORP negativo</p>
        <p style="margin:0;font-size:13px;line-height:1.6;color:#7a8aa2;">A tecnologia que sustenta as evidências do Portal Científico.</p>
      </td>
    </tr>
    <tr><td colspan="3" style="height:12px;line-height:12px;">&nbsp;</td></tr>
    <tr>
      <td width="49%" valign="top" style="padding:16px 16px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:17px;color:#0e2a52;font-weight:700;">Sem galão, sem peso</p>
        <p style="margin:0;font-size:13px;line-height:1.6;color:#7a8aa2;">Direto da sua torneira, todos os dias, para a família toda.</p>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="49%" valign="top" style="padding:16px 16px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:17px;color:#0e2a52;font-weight:700;">10x sem juros</p>
        <p style="margin:0;font-size:13px;line-height:1.6;color:#7a8aa2;">Com frete grátis. Consulte regiões disponíveis.</p>
      </td>
    </tr>
  </table>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
    <tr><td align="center" style="background:linear-gradient(135deg,#f97316 0%,#f9c74f 100%);border-radius:6px;">
      <a href="${LINK_DUO}" target="_blank" style="display:block;padding:16px 36px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.5px;">QUERO O ACQUALIVE DUO</a>
    </td></tr>
  </table>
</td></tr>

<!-- ============ DUO EM DÚVIDAS REAIS ============ -->
<tr><td style="padding:8px 40px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,#0e2a52 0%,#1a3a6b 100%);border-radius:10px;">
    <tr><td style="padding:26px 30px;">
      <p style="margin:0 0 10px;font-size:11px;letter-spacing:3px;color:#f9c74f;text-transform:uppercase;font-weight:700;">Antes de escolher</p>
      <h3 style="margin:0 0 10px;font-family:Georgia,serif;font-size:20px;color:#ffffff;font-weight:700;letter-spacing:-0.3px;">Refrigerado ou natural: qual faz sentido para você?</h3>
      <p style="margin:0 0 14px;font-size:14px;line-height:1.65;color:#b7c5db;">A comparação honesta entre os dois formatos, e por que o DUO resolve a escolha entregando os dois no mesmo equipamento.</p>
      <a href="https://blog.acqualive.com.br/purificador-de-agua-alcalina-refrigerado-ou-natural-qual-escolher/" style="font-size:13px;color:#f9c74f;text-decoration:none;font-weight:600;">Ler a comparação →</a>
    </td></tr>
  </table>
</td></tr>

<tr><td style="padding:44px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ MAIS LEITURAS ============ -->
<tr><td style="padding:36px 40px 22px;">
  <p style="margin:0;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">Mais leituras desta edição</p>
</td></tr>

<tr><td style="padding:0 40px 18px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td valign="top">
        <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#10b981;text-transform:uppercase;font-weight:700;">Investimento &nbsp;•&nbsp; 6 min</p>
        <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;line-height:1.3;color:#0e2a52;font-weight:700;">Quanto custa um Acqualive? Preço, refil e se vale o investimento</h3>
        <p style="margin:0 0 10px;font-size:13px;line-height:1.55;color:#4a5b7a;">O custo por litro, o gasto anual com refis e a comparação com galão e água engarrafada.</p>
        <a href="https://blog.acqualive.com.br/quanto-custa-um-acqualive-preco-refil-e-se-vale-o-investimento/" style="font-size:13px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo →</a>
      </td>
    </tr>
  </table>
</td></tr>

<tr><td style="padding:0 40px 18px;"><div style="height:1px;background:#eef2f8;"></div></td></tr>

<tr><td style="padding:0 40px 18px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td valign="top">
        <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#10b981;text-transform:uppercase;font-weight:700;">Confiança &nbsp;•&nbsp; 4 min</p>
        <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;line-height:1.3;color:#0e2a52;font-weight:700;">Purificador Acqualive tem certificação do Inmetro?</h3>
        <p style="margin:0 0 10px;font-size:13px;line-height:1.55;color:#4a5b7a;">Sim. E o artigo explica o que a classificação de retenção física, química e bacteriológica significa na prática.</p>
        <a href="https://blog.acqualive.com.br/purificador-acqualive-tem-certificacao-do-inmetro/" style="font-size:13px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo →</a>
      </td>
    </tr>
  </table>
</td></tr>

<tr><td style="padding:0 40px 18px;"><div style="height:1px;background:#eef2f8;"></div></td></tr>

<tr><td style="padding:0 40px 18px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td valign="top">
        <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#10b981;text-transform:uppercase;font-weight:700;">Performance &nbsp;•&nbsp; 5 min</p>
        <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;line-height:1.3;color:#0e2a52;font-weight:700;">Água alcalina para atletas: ajuda na hidratação e no desempenho?</h3>
        <p style="margin:0 0 10px;font-size:13px;line-height:1.55;color:#4a5b7a;">O que a literatura mostra sobre reidratação, minerais e recuperação em quem treina forte.</p>
        <a href="https://blog.acqualive.com.br/agua-alcalina-para-atletas-ajuda-na-hidratacao-e-no-desempenho/" style="font-size:13px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo →</a>
      </td>
    </tr>
  </table>
</td></tr>

<tr><td style="padding:0 40px 18px;"><div style="height:1px;background:#eef2f8;"></div></td></tr>

<tr><td style="padding:0 40px 18px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td valign="top">
        <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#10b981;text-transform:uppercase;font-weight:700;">Digestão &nbsp;•&nbsp; 4 min</p>
        <h3 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;line-height:1.3;color:#0e2a52;font-weight:700;">Água alcalina ajuda na azia? O que esperar</h3>
        <p style="margin:0 0 10px;font-size:13px;line-height:1.55;color:#4a5b7a;">Onde está o alívio possível, onde está o limite e por que isso não substitui tratamento médico.</p>
        <a href="https://blog.acqualive.com.br/agua-alcalina-ajuda-na-azia-o-que-esperar/" style="font-size:13px;color:#f97316;text-decoration:none;font-weight:600;">Ler artigo →</a>
      </td>
    </tr>
  </table>
</td></tr>

<tr><td style="padding:26px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ============ DUO EM QUALQUER AMBIENTE ============ -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 14px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:600;">DUO na prática &nbsp;•&nbsp; Casa, clínica e empresa</p>
  <h2 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">O mesmo cuidado, do balcão da cozinha à sala de espera.</h2>
</td></tr>
<tr><td style="padding:0 40px 20px;">
  <img src="${IMG_DUO_2}" alt="Acqualive DUO em ambiente profissional" width="560" style="display:block;width:100%;height:auto;border-radius:6px;">
</td></tr>
<tr><td style="padding:0 40px;">
  <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4a5b7a;">Cada vez mais clínicas, estúdios, restaurantes e escritórios têm trocado o galão pelo DUO. É menos logística, menos plástico e uma percepção imediata de cuidado para quem é recebido.</p>
  <p style="margin:0;font-size:15px;line-height:1.7;color:#4a5b7a;">Se o seu negócio serve água todos os dias, vale simular quanto isso custa hoje. <a href="https://paginas.acqualive.com.br/acqualive-empresas" style="color:#f97316;text-decoration:none;font-weight:600;">Ver a solução para empresas →</a></p>
</td></tr>

<tr><td style="padding:36px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

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
    <p style="margin:0 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.5;color:#1a2440;font-style:italic;">"Quanto mais você entende a água que bebe, mais difícil fica voltar atrás."</p>
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

export default acqualiveNews02;
