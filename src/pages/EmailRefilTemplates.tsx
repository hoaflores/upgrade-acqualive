import { useState } from "react";
import { Copy, Check, Eye, Code, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PRODUCT_GRID_HTML = `<!-- Product Grid - 4 items -->
<tr><td style="padding:0 40px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="50%" style="padding:0 6px 12px 0;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;overflow:hidden;">
<tr><td style="padding:16px;text-align:center;">
<img src="https://upgrade-acqualive.lovable.app/images/refil-fresh.png" alt="Refil Acqualive Fresh" width="130" style="display:block;margin:0 auto;max-width:130px;height:auto;">
</td></tr>
<tr><td style="padding:0 16px 6px;text-align:center;">
<p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#ffffff;">Refil Acqualive Fresh</p>
<p style="margin:0;font-size:11px;color:#888888;line-height:1.5;">Para os purificadores Fresh 10L, Fresh e Vittro</p>
</td></tr>
<tr><td style="padding:8px 16px 16px;text-align:center;">
<a href="https://www.acqualive.com.br/collections/refis/products/kit-refil-fresh" target="_blank" style="display:inline-block;background-color:#ffffff;color:#0d1117;font-size:12px;font-weight:700;text-decoration:none;padding:10px 24px;border-radius:6px;text-transform:uppercase;letter-spacing:1px;">Trocar agora</a>
</td></tr>
</table>
</td>
<td width="50%" style="padding:0 0 12px 6px;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;overflow:hidden;">
<tr><td style="padding:16px;text-align:center;">
<img src="https://upgrade-acqualive.lovable.app/images/refil-fresh-nanno.png" alt="Refil Acqualive Fresh Nanno" width="130" style="display:block;margin:0 auto;max-width:130px;height:auto;">
</td></tr>
<tr><td style="padding:0 16px 6px;text-align:center;">
<p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#ffffff;">Refil Acqualive Fresh Nanno</p>
<p style="margin:0;font-size:11px;color:#888888;line-height:1.5;">Para os purificadores Fresh 10L, Fresh e Vittro</p>
</td></tr>
<tr><td style="padding:8px 16px 16px;text-align:center;">
<a href="https://www.acqualive.com.br/collections/refis/products/kit-refil-fresh-nanno" target="_blank" style="display:inline-block;background-color:#ffffff;color:#0d1117;font-size:12px;font-weight:700;text-decoration:none;padding:10px 24px;border-radius:6px;text-transform:uppercase;letter-spacing:1px;">Trocar agora</a>
</td></tr>
</table>
</td>
</tr>
<tr>
<td width="50%" style="padding:0 6px 0 0;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;overflow:hidden;">
<tr><td style="padding:16px;text-align:center;">
<img src="https://upgrade-acqualive.lovable.app/images/refil-fresh-v.png" alt="Refil Acqualive Fresh V" width="130" style="display:block;margin:0 auto;max-width:130px;height:auto;">
</td></tr>
<tr><td style="padding:0 16px 6px;text-align:center;">
<p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#ffffff;">Refil Acqualive Fresh V</p>
<p style="margin:0;font-size:11px;color:#888888;line-height:1.5;">Para os purificadores da Linha V e Terracota</p>
</td></tr>
<tr><td style="padding:8px 16px 16px;text-align:center;">
<a href="https://www.acqualive.com.br/collections/refis/products/kit-refil-fresh-v" target="_blank" style="display:inline-block;background-color:#ffffff;color:#0d1117;font-size:12px;font-weight:700;text-decoration:none;padding:10px 24px;border-radius:6px;text-transform:uppercase;letter-spacing:1px;">Trocar agora</a>
</td></tr>
</table>
</td>
<td width="50%" style="padding:0 0 0 6px;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;overflow:hidden;">
<tr><td style="padding:16px;text-align:center;">
<img src="https://upgrade-acqualive.lovable.app/images/refil-fresh-v-nanno.png" alt="Refil Acqualive Fresh V Nanno" width="130" style="display:block;margin:0 auto;max-width:130px;height:auto;">
</td></tr>
<tr><td style="padding:0 16px 6px;text-align:center;">
<p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#ffffff;">Refil Acqualive Fresh V Nanno</p>
<p style="margin:0;font-size:11px;color:#888888;line-height:1.5;">Para os purificadores da Linha V e Terracota</p>
</td></tr>
<tr><td style="padding:8px 16px 16px;text-align:center;">
<a href="https://www.acqualive.com.br/collections/refis/products/kit-refil-fresh-nanno-v" target="_blank" style="display:inline-block;background-color:#ffffff;color:#0d1117;font-size:12px;font-weight:700;text-decoration:none;padding:10px 24px;border-radius:6px;text-transform:uppercase;letter-spacing:1px;">Trocar agora</a>
</td></tr>
</table>
</td>
</tr>
</table>
</td></tr>`;

const EMAILS = [
  {
    label: "Email 1",
    subject: "Sua água mudou de sabor? Pode ser um sinal.",
    preheader: "O refil do seu purificador pode estar comprometendo a qualidade da sua água.",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Troca de Refil Acqualive</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<span style="display:none;font-size:1px;color:#0d1117;max-height:0;overflow:hidden;">O refil do seu purificador pode estar comprometendo a qualidade da sua &aacute;gua.</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a1a1a 100%);padding:28px 40px 20px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="140" style="display:block;margin:0 auto;">
</td></tr>

<!-- Dark marble accent -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:3px;background:linear-gradient(90deg,#2a2a2a,#555555,#2a2a2a);"></td></tr></table></td></tr>

<!-- Main Content -->
<tr><td style="padding:40px 40px 20px;">
<p style="margin:0 0 6px;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:2px;font-weight:600;">Lembrete importante</p>
<h1 style="margin:0 0 24px;font-size:26px;line-height:1.35;color:#ffffff;font-weight:700;">Sua &aacute;gua mudou de sabor?<br>Pode ser um sinal.</h1>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">Voc&ecirc; escolheu a Acqualive para ter a melhor &aacute;gua poss&iacute;vel em casa. Purificada, alcalina, rica em minerais. Mas essa qualidade depende de um detalhe que muita gente esquece: <strong style="color:#ffffff;">o refil.</strong></p>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">Com o tempo, a capacidade de filtragem diminui. Cloro, res&iacute;duos e contaminantes voltam a passar. A &aacute;gua pode parecer normal, mas j&aacute; n&atilde;o entrega os benef&iacute;cios que voc&ecirc; espera dela.</p>

<p style="margin:0 0 28px;font-size:16px;line-height:1.8;color:#c9c9c9;">Trocar o refil no prazo &eacute; garantir que sua fam&iacute;lia continue protegida.</p>
</td></tr>

<!-- Highlight Box -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td style="width:4px;background-color:#888888;border-radius:2px;"></td>
<td style="padding:18px 24px;background-color:#141414;border-radius:0 8px 8px 0;">
<p style="margin:0;font-size:16px;line-height:1.6;color:#ffffff;font-weight:600;">Vida &uacute;til recomendada: 6 meses ou 1.500 litros.</p>
<p style="margin:6px 0 0;font-size:14px;line-height:1.6;color:#999999;">N&atilde;o espere sentir diferen&ccedil;a no sabor. Quando perceber, o refil j&aacute; perdeu a efic&aacute;cia.</p>
</td>
</tr>
</table>
</td></tr>

<!-- Divider -->
<tr><td style="padding:0 40px 28px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:1px;background-color:#1e1e1e;"></td></tr></table></td></tr>

<!-- Product Selection Title -->
<tr><td style="padding:0 40px 20px;">
<h2 style="margin:0 0 6px;font-size:20px;color:#ffffff;font-weight:700;">Escolha o refil do seu purificador</h2>
<p style="margin:0;font-size:14px;color:#888888;">Clique no modelo correspondente ao seu equipamento.</p>
</td></tr>

${PRODUCT_GRID_HTML}

<!-- Footer -->
<tr><td style="padding:32px 40px;background-color:#0a0a0a;border-top:1px solid #1e1e1e;">
<p style="margin:0 0 8px;font-size:12px;color:#666666;text-align:center;">Acqualive. &Aacute;gua que cuida da vida.</p>
<p style="margin:0;font-size:11px;color:#444444;text-align:center;">Voc&ecirc; recebeu este email porque &eacute; cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  {
    label: "Email 2",
    subject: "Você pagou pela melhor água. Ela ainda está sendo entregue?",
    preheader: "Um refil vencido transforma seu purificador em um filtro comum.",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Troca de Refil Acqualive</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<span style="display:none;font-size:1px;color:#0d1117;max-height:0;overflow:hidden;">Um refil vencido transforma seu purificador em um filtro comum.</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a1a1a 100%);padding:28px 40px 20px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="140" style="display:block;margin:0 auto;">
</td></tr>

<!-- Dark marble accent -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:3px;background:linear-gradient(90deg,#2a2a2a,#555555,#2a2a2a);"></td></tr></table></td></tr>

<!-- Main Content -->
<tr><td style="padding:40px 40px 20px;">
<p style="margin:0 0 6px;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:2px;font-weight:600;">Cuide do seu investimento</p>
<h1 style="margin:0 0 24px;font-size:26px;line-height:1.35;color:#ffffff;font-weight:700;">O que muda quando o refil<br>perde a efic&aacute;cia?</h1>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">Quando voc&ecirc; escolheu a Acqualive, escolheu &aacute;gua alcalina, mineralizada e livre de contaminantes. Tudo isso acontece dentro do refil.</p>

<p style="margin:0 0 28px;font-size:16px;line-height:1.8;color:#c9c9c9;">Mas um refil vencido n&atilde;o consegue mais fazer esse trabalho. O resultado &eacute; uma &aacute;gua que parece limpa, mas j&aacute; n&atilde;o oferece o que voc&ecirc; comprou.</p>
</td></tr>

<!-- Comparison Box -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;overflow:hidden;">
<tr>
<td width="50%" style="padding:20px;border-right:1px solid #222222;vertical-align:top;">
<p style="margin:0 0 12px;font-size:11px;color:#666666;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Refil dentro do prazo</p>
<p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:#c9c9c9;">Remove cloro e res&iacute;duos</p>
<p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:#c9c9c9;">Mant&eacute;m o pH alcalino</p>
<p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:#c9c9c9;">Mineraliza a &aacute;gua</p>
<p style="margin:0;font-size:13px;line-height:1.6;color:#c9c9c9;">Protege contra bact&eacute;rias</p>
</td>
<td width="50%" style="padding:20px;vertical-align:top;">
<p style="margin:0 0 12px;font-size:11px;color:#666666;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Refil vencido</p>
<p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:#888888;">Filtragem comprometida</p>
<p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:#888888;">pH volta ao neutro ou &aacute;cido</p>
<p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:#888888;">Sem mineraliza&ccedil;&atilde;o efetiva</p>
<p style="margin:0;font-size:13px;line-height:1.6;color:#888888;">Risco de prolifera&ccedil;&atilde;o</p>
</td>
</tr>
</table>
</td></tr>

<!-- Closing Text -->
<tr><td style="padding:0 40px 28px;">
<p style="margin:0;font-size:16px;line-height:1.8;color:#c9c9c9;">Manter o refil em dia &eacute; simples e r&aacute;pido. Selecione abaixo o modelo do seu purificador e garanta que sua &aacute;gua continue fazendo a diferen&ccedil;a.</p>
</td></tr>

<!-- Divider -->
<tr><td style="padding:0 40px 28px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:1px;background-color:#1e1e1e;"></td></tr></table></td></tr>

<!-- Product Selection Title -->
<tr><td style="padding:0 40px 20px;">
<h2 style="margin:0 0 6px;font-size:20px;color:#ffffff;font-weight:700;">Escolha o refil do seu purificador</h2>
<p style="margin:0;font-size:14px;color:#888888;">Clique no modelo correspondente ao seu equipamento.</p>
</td></tr>

${PRODUCT_GRID_HTML}

<!-- Footer -->
<tr><td style="padding:32px 40px;background-color:#0a0a0a;border-top:1px solid #1e1e1e;">
<p style="margin:0 0 8px;font-size:12px;color:#666666;text-align:center;">Acqualive. &Aacute;gua que cuida da vida.</p>
<p style="margin:0;font-size:11px;color:#444444;text-align:center;">Voc&ecirc; recebeu este email porque &eacute; cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  {
    label: "Email 3",
    subject: "Faz quanto tempo que você não troca o refil?",
    preheader: "Cada copo de água conta. Garanta que o seu continue sendo o melhor.",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Troca de Refil Acqualive</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<span style="display:none;font-size:1px;color:#0d1117;max-height:0;overflow:hidden;">Cada copo de &aacute;gua conta. Garanta que o seu continue sendo o melhor.</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a1a1a 100%);padding:28px 40px 20px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="140" style="display:block;margin:0 auto;">
</td></tr>

<!-- Dark marble accent -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:3px;background:linear-gradient(90deg,#2a2a2a,#555555,#2a2a2a);"></td></tr></table></td></tr>

<!-- Main Content -->
<tr><td style="padding:40px 40px 20px;">
<p style="margin:0 0 6px;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:2px;font-weight:600;">Sa&uacute;de em primeiro lugar</p>
<h1 style="margin:0 0 24px;font-size:26px;line-height:1.35;color:#ffffff;font-weight:700;">Faz quanto tempo que voc&ecirc;<br>n&atilde;o troca o refil?</h1>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">Essa &eacute; uma pergunta que vale a pena fazer. Porque o refil &eacute; o cora&ccedil;&atilde;o do seu purificador. &Eacute; ele que transforma &aacute;gua comum em &aacute;gua alcalina, mineralizada e segura.</p>

<p style="margin:0 0 28px;font-size:16px;line-height:1.8;color:#c9c9c9;">Se j&aacute; passaram mais de 6 meses desde a &uacute;ltima troca, a recomenda&ccedil;&atilde;o &eacute; simples: troque agora. Leva poucos minutos e faz toda a diferen&ccedil;a para a sa&uacute;de da sua fam&iacute;lia.</p>
</td></tr>

<!-- Benefits reminder -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;overflow:hidden;">
<tr><td style="padding:24px;">
<p style="margin:0 0 16px;font-size:14px;color:#666666;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Com o refil em dia, sua &aacute;gua entrega:</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="50%" style="padding:8px 0;vertical-align:top;">
<p style="margin:0;font-size:14px;color:#c9c9c9;line-height:1.7;">Purifica&ccedil;&atilde;o completa</p>
</td>
<td width="50%" style="padding:8px 0;vertical-align:top;">
<p style="margin:0;font-size:14px;color:#c9c9c9;line-height:1.7;">pH alcalino de 8.5 a 9.5</p>
</td>
</tr>
<tr>
<td width="50%" style="padding:8px 0;vertical-align:top;">
<p style="margin:0;font-size:14px;color:#c9c9c9;line-height:1.7;">Mineraliza&ccedil;&atilde;o essencial</p>
</td>
<td width="50%" style="padding:8px 0;vertical-align:top;">
<p style="margin:0;font-size:14px;color:#c9c9c9;line-height:1.7;">Prote&ccedil;&atilde;o contra contaminantes</p>
</td>
</tr>
</table>
</td></tr>
</table>
</td></tr>

<!-- Closing Text -->
<tr><td style="padding:0 40px 28px;">
<p style="margin:0;font-size:16px;line-height:1.8;color:#c9c9c9;">Selecione abaixo o refil compat&iacute;vel com o seu purificador.</p>
</td></tr>

<!-- Divider -->
<tr><td style="padding:0 40px 28px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:1px;background-color:#1e1e1e;"></td></tr></table></td></tr>

<!-- Product Selection Title -->
<tr><td style="padding:0 40px 20px;">
<h2 style="margin:0 0 6px;font-size:20px;color:#ffffff;font-weight:700;">Escolha o refil do seu purificador</h2>
<p style="margin:0;font-size:14px;color:#888888;">Clique no modelo correspondente ao seu equipamento.</p>
</td></tr>

${PRODUCT_GRID_HTML}

<!-- Footer -->
<tr><td style="padding:32px 40px;background-color:#0a0a0a;border-top:1px solid #1e1e1e;">
<p style="margin:0 0 8px;font-size:12px;color:#666666;text-align:center;">Acqualive. &Aacute;gua que cuida da vida.</p>
<p style="margin:0;font-size:11px;color:#444444;text-align:center;">Voc&ecirc; recebeu este email porque &eacute; cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  {
    label: "Indicação 1",
    subject: "Você sabia que pode nunca mais pagar pelos seus refis?",
    preheader: "Mais de 500 clientes já descobriram como ter água alcalina sem custo. Entenda como.",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acqualive Club</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<span style="display:none;font-size:1px;color:#0d1117;max-height:0;overflow:hidden;">Mais de 500 clientes j&aacute; descobriram como ter &aacute;gua alcalina sem custo. Entenda como.</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a1a1a 100%);padding:28px 40px 20px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="140" style="display:block;margin:0 auto;">
</td></tr>

<!-- Accent line -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:3px;background:linear-gradient(90deg,#2a2a2a,#555555,#2a2a2a);"></td></tr></table></td></tr>

<!-- Hero section with blue gradient -->
<tr><td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0f2847 0%,#1a3a5c 50%,#0f2847 100%);">
<tr><td style="padding:48px 40px 40px;">
<p style="margin:0 0 8px;font-size:12px;color:#e88a3a;text-transform:uppercase;letter-spacing:2.5px;font-weight:700;">Acqualive Club</p>
<h1 style="margin:0 0 20px;font-size:28px;line-height:1.35;color:#ffffff;font-weight:700;">Voc&ecirc; sabia que pode<br><span style="color:#e88a3a;">nunca mais pagar</span><br>pelos seus refis?</h1>
<p style="margin:0;font-size:16px;line-height:1.7;color:#c9d4e0;">Mais de 500 clientes j&aacute; descobriram como manter a &aacute;gua alcalina em casa sem nenhum custo com refis. E a resposta &eacute; mais simples do que parece.</p>
</td></tr>
</table>
</td></tr>

<!-- Main Content -->
<tr><td style="padding:40px 40px 20px;">
<h2 style="margin:0 0 20px;font-size:22px;color:#ffffff;font-weight:700;">Uma conversa honesta sobre economia e sa&uacute;de</h2>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">Quando voc&ecirc; escolheu a Acqualive, fez uma das melhores decis&otilde;es para a sa&uacute;de da sua fam&iacute;lia. Mas sabemos que manter os refis em dia &eacute; um custo recorrente que pesa no or&ccedil;amento.</p>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">Pensando nisso, criamos o <strong style="color:#ffffff;">Acqualive Club</strong>, um programa que transforma suas indica&ccedil;&otilde;es em kits de refis gratuitos. A l&oacute;gica &eacute; direta:</p>
</td></tr>

<!-- How it works - 3 steps -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">

<!-- Step 1 -->
<tr><td style="padding:0 0 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;">
<tr>
<td style="padding:20px;width:60px;vertical-align:top;">
<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:44px;height:44px;background-color:#e88a3a;border-radius:50%;text-align:center;line-height:44px;font-size:18px;font-weight:700;color:#ffffff;">1</td></tr></table>
</td>
<td style="padding:20px 20px 20px 0;vertical-align:top;">
<p style="margin:0 0 4px;font-size:16px;font-weight:700;color:#ffffff;">Voc&ecirc; indica um amigo ou familiar</p>
<p style="margin:0;font-size:14px;color:#999999;line-height:1.6;">Compartilhe com algu&eacute;m que merece beber a melhor &aacute;gua do mundo.</p>
</td>
</tr>
</table>
</td></tr>

<!-- Step 2 -->
<tr><td style="padding:0 0 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;">
<tr>
<td style="padding:20px;width:60px;vertical-align:top;">
<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:44px;height:44px;background-color:#e88a3a;border-radius:50%;text-align:center;line-height:44px;font-size:18px;font-weight:700;color:#ffffff;">2</td></tr></table>
</td>
<td style="padding:20px 20px 20px 0;vertical-align:top;">
<p style="margin:0 0 4px;font-size:16px;font-weight:700;color:#ffffff;">Seu amigo ganha R$ 100 de desconto</p>
<p style="margin:0;font-size:14px;color:#999999;line-height:1.6;">Ele recebe uma condi&ccedil;&atilde;o exclusiva na primeira compra. Um presente de verdade.</p>
</td>
</tr>
</table>
</td></tr>

<!-- Step 3 -->
<tr><td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;">
<tr>
<td style="padding:20px;width:60px;vertical-align:top;">
<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:44px;height:44px;background-color:#e88a3a;border-radius:50%;text-align:center;line-height:44px;font-size:18px;font-weight:700;color:#ffffff;">3</td></tr></table>
</td>
<td style="padding:20px 20px 20px 0;vertical-align:top;">
<p style="margin:0 0 4px;font-size:16px;font-weight:700;color:#ffffff;">Voc&ecirc; recebe 1 Kit de Refis completo</p>
<p style="margin:0;font-size:14px;color:#999999;line-height:1.6;">Assim que a compra for confirmada, o kit &eacute; seu. Sem sorteios, sem limites.</p>
</td>
</tr>
</table>
</td></tr>

</table>
</td></tr>

<!-- Highlight box -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1a3a5c 0%,#0f2847 100%);border-radius:12px;border:1px solid #2a4a6c;">
<tr><td style="padding:28px 24px;text-align:center;">
<p style="margin:0 0 6px;font-size:14px;color:#c9d4e0;font-weight:600;">A matem&aacute;tica &eacute; simples:</p>
<p style="margin:0 0 12px;font-size:24px;color:#e88a3a;font-weight:700;">1 indica&ccedil;&atilde;o por semestre</p>
<p style="margin:0;font-size:16px;color:#ffffff;font-weight:600;">= &aacute;gua alcalina para sempre, sem custo com refis</p>
</td></tr>
</table>
</td></tr>

<!-- Closing -->
<tr><td style="padding:0 40px 32px;">
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">N&atilde;o &eacute; uma promo&ccedil;&atilde;o passageira. &Eacute; um programa permanente criado para reconhecer quem j&aacute; faz parte da comunidade Acqualive.</p>
<p style="margin:0 0 28px;font-size:16px;line-height:1.8;color:#c9c9c9;">Se voc&ecirc; conhece pelo menos uma pessoa que se beneficiaria de uma &aacute;gua melhor, vale a pena entender como funciona.</p>
</td></tr>

<!-- CTA -->
<tr><td style="padding:0 40px 36px;text-align:center;">
<a href="https://www.acqualive.com.br/pages/acqualive-club" target="_blank" style="display:inline-block;background-color:#e88a3a;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:16px 40px;border-radius:8px;text-transform:uppercase;letter-spacing:1px;">Conhecer o Acqualive Club</a>
</td></tr>

<!-- Secondary CTA -->
<tr><td style="padding:0 40px 36px;text-align:center;">
<a href="https://wa.me/555192928468?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Programa%20de%20Indica%C3%A7%C3%A3o%20Acqualive." target="_blank" style="display:inline-block;border:1px solid #555555;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:12px 32px;border-radius:8px;">Falar com um consultor</a>
</td></tr>

<!-- Footer -->
<tr><td style="padding:32px 40px;background-color:#0a0a0a;border-top:1px solid #1e1e1e;">
<p style="margin:0 0 8px;font-size:12px;color:#666666;text-align:center;">Acqualive. &Aacute;gua que cuida da vida.</p>
<p style="margin:0;font-size:11px;color:#444444;text-align:center;">Voc&ecirc; recebeu este email porque &eacute; cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  {
    label: "Indicação 2",
    subject: "O que seus amigos ganham quando você indica a Acqualive",
    preheader: "Indicar não é vender. É compartilhar algo que mudou a sua rotina.",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acqualive Club</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<span style="display:none;font-size:1px;color:#0d1117;max-height:0;overflow:hidden;">Indicar n&atilde;o &eacute; vender. &Eacute; compartilhar algo que mudou a sua rotina.</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a1a1a 100%);padding:28px 40px 20px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="140" style="display:block;margin:0 auto;">
</td></tr>

<!-- Accent line -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:3px;background:linear-gradient(90deg,#2a2a2a,#555555,#2a2a2a);"></td></tr></table></td></tr>

<!-- Hero section -->
<tr><td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0f2847 0%,#1a3a5c 50%,#0f2847 100%);">
<tr><td style="padding:48px 40px 40px;">
<p style="margin:0 0 8px;font-size:12px;color:#e88a3a;text-transform:uppercase;letter-spacing:2.5px;font-weight:700;">Programa de Indica&ccedil;&atilde;o</p>
<h1 style="margin:0 0 20px;font-size:28px;line-height:1.35;color:#ffffff;font-weight:700;">Voc&ecirc; n&atilde;o est&aacute; indicando<br>um filtro. Est&aacute; entregando<br><span style="color:#e88a3a;">longevidade.</span></h1>
<p style="margin:0;font-size:16px;line-height:1.7;color:#c9d4e0;">Quando algu&eacute;m que voc&ecirc; ama come&ccedil;a a beber &aacute;gua alcalina, rica em magn&eacute;sio e com PRAL negativo, os efeitos aparecem no corpo inteiro.</p>
</td></tr>
</table>
</td></tr>

<!-- Main Content -->
<tr><td style="padding:40px 40px 20px;">
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">Voc&ecirc; sente na pr&aacute;tica o que a &aacute;gua alcalina faz. Mais energia, melhor digest&atilde;o, sono mais profundo. E provavelmente j&aacute; ouviu de amigos e familiares: <em style="color:#ffffff;">"Que &aacute;gua diferente &eacute; essa?"</em></p>

<p style="margin:0 0 28px;font-size:16px;line-height:1.8;color:#c9c9c9;">Cada pessoa que voc&ecirc; indica tem a chance de conquistar os mesmos benef&iacute;cios que voc&ecirc; j&aacute; vive no dia a dia.</p>
</td></tr>

<!-- Health benefits grid -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="50%" style="padding:0 6px 12px 0;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;">
<tr><td style="padding:24px;">
<p style="margin:0 0 8px;font-size:28px;line-height:1;">&#x1F9E0;</p>
<p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#ffffff;">Clareza mental</p>
<p style="margin:0;font-size:13px;color:#999999;line-height:1.6;">Hidrata&ccedil;&atilde;o celular que impacta a concentra&ccedil;&atilde;o e o foco.</p>
</td></tr>
</table>
</td>
<td width="50%" style="padding:0 0 12px 6px;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;">
<tr><td style="padding:24px;">
<p style="margin:0 0 8px;font-size:28px;line-height:1;">&#x1F9B4;</p>
<p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#ffffff;">Sa&uacute;de &oacute;ssea</p>
<p style="margin:0;font-size:13px;color:#999999;line-height:1.6;">Magn&eacute;sio e c&aacute;lcio biodispon&iacute;veis para ossos fortes.</p>
</td></tr>
</table>
</td>
</tr>
<tr>
<td width="50%" style="padding:0 6px 0 0;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;">
<tr><td style="padding:24px;">
<p style="margin:0 0 8px;font-size:28px;line-height:1;">&#x1F6E1;</p>
<p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#ffffff;">Imunidade fortalecida</p>
<p style="margin:0;font-size:13px;color:#999999;line-height:1.6;">pH alcalino que contribui para um organismo mais resistente.</p>
</td></tr>
</table>
</td>
<td width="50%" style="padding:0 0 0 6px;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;">
<tr><td style="padding:24px;">
<p style="margin:0 0 8px;font-size:28px;line-height:1;">&#x2764;</p>
<p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#ffffff;">Controle glic&ecirc;mico</p>
<p style="margin:0;font-size:13px;color:#999999;line-height:1.6;">&Aacute;gua com PRAL negativo auxilia no equil&iacute;brio metab&oacute;lico.</p>
</td></tr>
</table>
</td>
</tr>
</table>
</td></tr>

<!-- Quote -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td style="width:4px;background-color:#e88a3a;border-radius:2px;"></td>
<td style="padding:18px 24px;background-color:#141414;border-radius:0 8px 8px 0;">
<p style="margin:0 0 8px;font-size:15px;line-height:1.7;color:#ffffff;font-style:italic;">"Indiquei meus 3 irm&atilde;os e 2 vizinhos. Resultado: j&aacute; garanti &aacute;gua pura para minha casa pelos pr&oacute;ximos anos sem gastar um centavo."</p>
<p style="margin:0;font-size:13px;color:#888888;">Maria S. — Cliente Acqualive</p>
</td>
</tr>
</table>
</td></tr>

<!-- Closing -->
<tr><td style="padding:0 40px 28px;">
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">Ao indicar algu&eacute;m, voc&ecirc; n&atilde;o est&aacute; vendendo nada. Est&aacute; presenteando com a possibilidade de uma vida mais saud&aacute;vel. E de quebra, garante seus refis sem custo.</p>
</td></tr>

<!-- Dual benefit box -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="50%" style="padding:0 6px 0 0;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #e88a3a;text-align:center;">
<tr><td style="padding:24px;">
<p style="margin:0 0 4px;font-size:11px;color:#e88a3a;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Voc&ecirc; ganha</p>
<p style="margin:0 0 4px;font-size:22px;font-weight:700;color:#ffffff;">Kit de Refis</p>
<p style="margin:0 0 8px;font-size:18px;font-weight:700;color:#e88a3a;">GR&Aacute;TIS</p>
<p style="margin:0;font-size:12px;color:#888888;">A cada indica&ccedil;&atilde;o confirmada</p>
</td></tr>
</table>
</td>
<td width="50%" style="padding:0 0 0 6px;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;border:1px solid #222222;text-align:center;">
<tr><td style="padding:24px;">
<p style="margin:0 0 4px;font-size:11px;color:#888888;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Seu amigo ganha</p>
<p style="margin:0 0 4px;font-size:22px;font-weight:700;color:#ffffff;">R$ 100</p>
<p style="margin:0 0 8px;font-size:14px;font-weight:600;color:#c9c9c9;">de desconto</p>
<p style="margin:0;font-size:12px;color:#888888;">Na primeira compra</p>
</td></tr>
</table>
</td>
</tr>
</table>
</td></tr>

<!-- CTA -->
<tr><td style="padding:0 40px 16px;text-align:center;">
<a href="https://www.acqualive.com.br/pages/acqualive-club" target="_blank" style="display:inline-block;background-color:#e88a3a;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:16px 40px;border-radius:8px;text-transform:uppercase;letter-spacing:1px;">Quero indicar e ganhar</a>
</td></tr>

<!-- Secondary CTA -->
<tr><td style="padding:0 40px 36px;text-align:center;">
<a href="https://wa.me/555192928468?text=Ol%C3%A1!%20Quero%20participar%20do%20Programa%20de%20Indica%C3%A7%C3%A3o%20Acqualive." target="_blank" style="display:inline-block;border:1px solid #555555;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:12px 32px;border-radius:8px;">Falar com um consultor</a>
</td></tr>

<!-- Footer -->
<tr><td style="padding:32px 40px;background-color:#0a0a0a;border-top:1px solid #1e1e1e;">
<p style="margin:0 0 8px;font-size:12px;color:#666666;text-align:center;">Acqualive. &Aacute;gua que cuida da vida.</p>
<p style="margin:0;font-size:11px;color:#444444;text-align:center;">Voc&ecirc; recebeu este email porque &eacute; cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  {
    label: "Indicação 3",
    subject: "Suas avaliações valem desconto. E suas indicações valem ainda mais.",
    preheader: "Conheça todas as formas de acumular pontos e economizar no Acqualive Club.",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acqualive Club</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<span style="display:none;font-size:1px;color:#0d1117;max-height:0;overflow:hidden;">Conhe&ccedil;a todas as formas de acumular pontos e economizar no Acqualive Club.</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a1a1a 100%);padding:28px 40px 20px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="140" style="display:block;margin:0 auto;">
</td></tr>

<!-- Accent line -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:3px;background:linear-gradient(90deg,#2a2a2a,#555555,#2a2a2a);"></td></tr></table></td></tr>

<!-- Hero section -->
<tr><td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0f2847 0%,#1a3a5c 50%,#0f2847 100%);">
<tr><td style="padding:48px 40px 40px;">
<p style="margin:0 0 8px;font-size:12px;color:#e88a3a;text-transform:uppercase;letter-spacing:2.5px;font-weight:700;">Acqualive Club</p>
<h1 style="margin:0 0 20px;font-size:28px;line-height:1.35;color:#ffffff;font-weight:700;">Sua opini&atilde;o vale<br><span style="color:#e88a3a;">desconto real.</span></h1>
<p style="margin:0;font-size:16px;line-height:1.7;color:#c9d4e0;">No Acqualive Club, cada intera&ccedil;&atilde;o sua se transforma em pontos que viram dinheiro de verdade na pr&oacute;xima compra.</p>
</td></tr>
</table>
</td></tr>

<!-- Intro -->
<tr><td style="padding:40px 40px 20px;">
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">Al&eacute;m do programa de indica&ccedil;&atilde;o, o Acqualive Club reconhece voc&ecirc; de diversas formas. Avalia&ccedil;&otilde;es, anivers&aacute;rio, compras recorrentes. Tudo gera pontos que podem ser usados como desconto.</p>

<p style="margin:0 0 28px;font-size:16px;line-height:1.8;color:#c9c9c9;">Veja um resumo de como seus pontos crescem sem esfor&ccedil;o:</p>
</td></tr>

<!-- Points table -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;border-radius:12px;overflow:hidden;border:1px solid #222222;">

<!-- Table header -->
<tr>
<td style="padding:14px 20px;border-bottom:1px solid #222222;"><p style="margin:0;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:1px;font-weight:700;">A&ccedil;&atilde;o</p></td>
<td style="padding:14px 20px;border-bottom:1px solid #222222;text-align:center;"><p style="margin:0;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Pontos</p></td>
<td style="padding:14px 20px;border-bottom:1px solid #222222;text-align:right;"><p style="margin:0;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Valor</p></td>
</tr>

<!-- Row: Indicação -->
<tr>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;"><p style="margin:0;font-size:14px;color:#ffffff;font-weight:600;">Indica&ccedil;&atilde;o confirmada</p></td>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;text-align:center;"><p style="margin:0;font-size:14px;color:#e88a3a;font-weight:700;">21.400</p></td>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;text-align:right;"><p style="margin:0;font-size:14px;color:#ffffff;font-weight:700;">Kit de Refis</p></td>
</tr>

<!-- Row: Avaliação completa -->
<tr>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;"><p style="margin:0;font-size:14px;color:#ffffff;">Avalia&ccedil;&atilde;o completa</p><p style="margin:2px 0 0;font-size:11px;color:#888888;">Texto + Foto + V&iacute;deo</p></td>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;text-align:center;"><p style="margin:0;font-size:14px;color:#e88a3a;font-weight:700;">250</p></td>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;text-align:right;"><p style="margin:0;font-size:14px;color:#ffffff;">R$ 5,00</p></td>
</tr>

<!-- Row: Aniversário -->
<tr>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;"><p style="margin:0;font-size:14px;color:#ffffff;">Presente de anivers&aacute;rio</p></td>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;text-align:center;"><p style="margin:0;font-size:14px;color:#e88a3a;font-weight:700;">1.000</p></td>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;text-align:right;"><p style="margin:0;font-size:14px;color:#ffffff;">R$ 20,00</p></td>
</tr>

<!-- Row: Boas-vindas -->
<tr>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;"><p style="margin:0;font-size:14px;color:#ffffff;">Boas-vindas</p></td>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;text-align:center;"><p style="margin:0;font-size:14px;color:#e88a3a;font-weight:700;">500</p></td>
<td style="padding:14px 20px;border-bottom:1px solid #1e1e1e;text-align:right;"><p style="margin:0;font-size:14px;color:#ffffff;">R$ 10,00</p></td>
</tr>

<!-- Row: Compras -->
<tr>
<td style="padding:14px 20px;"><p style="margin:0;font-size:14px;color:#ffffff;">Compras</p></td>
<td style="padding:14px 20px;text-align:center;"><p style="margin:0;font-size:14px;color:#e88a3a;font-weight:700;">1 pt/R$</p></td>
<td style="padding:14px 20px;text-align:right;"><p style="margin:0;font-size:14px;color:#ffffff;">2% cashback</p></td>
</tr>

</table>
</td></tr>

<!-- Highlight -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td style="width:4px;background-color:#e88a3a;border-radius:2px;"></td>
<td style="padding:18px 24px;background-color:#141414;border-radius:0 8px 8px 0;">
<p style="margin:0;font-size:15px;line-height:1.7;color:#ffffff;font-weight:600;">Cada ponto vale R$ 0,02.</p>
<p style="margin:6px 0 0;font-size:14px;line-height:1.6;color:#999999;">Use seus pontos como desconto direto na pr&oacute;xima compra de refis, acess&oacute;rios ou purificadores.</p>
</td>
</tr>
</table>
</td></tr>

<!-- Closing -->
<tr><td style="padding:0 40px 28px;">
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#c9c9c9;">Se voc&ecirc; j&aacute; &eacute; cliente, seus pontos de boas-vindas j&aacute; est&atilde;o dispon&iacute;veis. E se ainda n&atilde;o avaliou seus produtos, esse &eacute; um bom momento para come&ccedil;ar.</p>
<p style="margin:0;font-size:16px;line-height:1.8;color:#c9c9c9;">Acesse o Acqualive Club e veja seu saldo atualizado.</p>
</td></tr>

<!-- CTA -->
<tr><td style="padding:0 40px 16px;text-align:center;">
<a href="https://www.acqualive.com.br/pages/acqualive-club" target="_blank" style="display:inline-block;background-color:#e88a3a;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:16px 40px;border-radius:8px;text-transform:uppercase;letter-spacing:1px;">Acessar o Acqualive Club</a>
</td></tr>

<!-- Secondary CTA -->
<tr><td style="padding:0 40px 36px;text-align:center;">
<a href="https://wa.me/555192928468?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Acqualive%20Club." target="_blank" style="display:inline-block;border:1px solid #555555;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:12px 32px;border-radius:8px;">Falar com um consultor</a>
</td></tr>

<!-- Footer -->
<tr><td style="padding:32px 40px;background-color:#0a0a0a;border-top:1px solid #1e1e1e;">
<p style="margin:0 0 8px;font-size:12px;color:#666666;text-align:center;">Acqualive. &Aacute;gua que cuida da vida.</p>
<p style="margin:0;font-size:11px;color:#444444;text-align:center;">Voc&ecirc; recebeu este email porque &eacute; cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
];

const EmailRefilTemplates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const [editedHtmlByIndex, setEditedHtmlByIndex] = useState<Record<number, string>>({});
  const [editedSubjectByIndex, setEditedSubjectByIndex] = useState<Record<number, string>>({});

  const email = EMAILS[currentIndex];
  const currentHtml = editedHtmlByIndex[currentIndex] ?? email.html;
  const currentSubject = editedSubjectByIndex[currentIndex] ?? email.subject;

  const copyHtml = async () => {
    await navigator.clipboard.writeText(currentHtml);
    setCopied(true);
    toast.success("HTML copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2000);
  };

  const copySubject = async () => {
    await navigator.clipboard.writeText(currentSubject);
    toast.success("Assunto copiado!");
  };

  const handleHtmlChange = (value: string) => {
    setEditedHtmlByIndex((prev) => ({ ...prev, [currentIndex]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setEditedSubjectByIndex((prev) => ({ ...prev, [currentIndex]: value }));
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-[#161b26] border-b border-[#1c2333] px-4 py-3">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-sm font-bold text-[#888888]">{currentIndex + 1}/{EMAILS.length}</h1>
            <span className="text-sm text-gray-400">{email.label}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {EMAILS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-8 h-8 rounded-md text-xs font-bold transition-colors ${
                  i === currentIndex
                    ? "bg-[#555555] text-white"
                    : "bg-[#1c2333] text-gray-400 hover:bg-[#2a3142]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <Button
              size="sm"
              variant="outline"
              onClick={() => setCurrentIndex(Math.min(EMAILS.length - 1, currentIndex + 1))}
              disabled={currentIndex === EMAILS.length - 1}
              className="border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="w-px h-6 bg-[#1c2333] mx-1" />

            <Button
              size="sm"
              variant={viewMode === "preview" ? "default" : "outline"}
              onClick={() => setViewMode("preview")}
              className={viewMode === "preview" ? "bg-[#555555] hover:bg-[#666666]" : "border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"}
            >
              <Eye className="h-4 w-4 mr-1" /> Preview
            </Button>
            <Button
              size="sm"
              variant={viewMode === "code" ? "default" : "outline"}
              onClick={() => setViewMode("code")}
              className={viewMode === "code" ? "bg-[#555555] hover:bg-[#666666]" : "border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"}
            >
              <Code className="h-4 w-4 mr-1" /> HTML
            </Button>

            <div className="w-px h-6 bg-[#1c2333] mx-1" />

            <Button size="sm" onClick={copyHtml} className="bg-[#555555] hover:bg-[#666666]">
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? "Copiado!" : "Copiar HTML"}
            </Button>
          </div>
        </div>
      </div>

      {/* Subject + Preheader */}
      <div className="max-w-5xl mx-auto px-4 py-4 space-y-2">
        <div className="flex items-center gap-3 bg-[#161b26] rounded-lg px-4 py-3 border border-[#1c2333]">
          <span className="text-xs text-gray-500 uppercase font-bold shrink-0">Assunto:</span>
          {viewMode === "code" ? (
            <input
              type="text"
              value={currentSubject}
              onChange={(e) => handleSubjectChange(e.target.value)}
              className="flex-1 bg-[#0d1117] border border-[#1c2333] rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-[#555555]"
            />
          ) : (
            <span className="text-sm text-gray-200 flex-1">{currentSubject}</span>
          )}
          <button onClick={copySubject} className="text-xs text-[#888888] hover:text-white hover:underline shrink-0">Copiar</button>
        </div>
        <div className="flex items-center gap-3 bg-[#161b26] rounded-lg px-4 py-2 border border-[#1c2333]">
          <span className="text-xs text-gray-500 uppercase font-bold shrink-0">Preheader:</span>
          <span className="text-xs text-gray-400 flex-1">{email.preheader}</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        {viewMode === "preview" ? (
          <div className="rounded-lg overflow-hidden">
            <iframe
              srcDoc={currentHtml}
              title={`Email Refil ${currentIndex + 1}`}
              className="w-full border-0"
              style={{ minHeight: "900px" }}
            />
          </div>
        ) : (
          <textarea
            value={currentHtml}
            onChange={(e) => handleHtmlChange(e.target.value)}
            className="w-full bg-[#161b26] rounded-lg p-6 text-xs text-gray-300 border border-[#1c2333] focus:outline-none focus:border-[#555555] font-mono"
            style={{ minHeight: "80vh" }}
            spellCheck={false}
          />
        )}
      </div>
    </div>
  );
};

export default EmailRefilTemplates;
