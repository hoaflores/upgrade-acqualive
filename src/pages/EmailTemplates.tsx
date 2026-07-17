import { useState } from "react";
import { Copy, Check, Eye, Code, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EMAILS = [
  {
    day: "Segunda-feira",
    subject: "A história por trás da água que você bebe todos os dias",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Newsletter Acqualive</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a2332 100%);padding:27px 34px 20px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="140" style="display:block;margin:0 auto;">
</td></tr>

<!-- Hero Image -->
<tr><td style="padding:0;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/KNbHZLJGeBdnHFPM.webp" alt="Equipe Acqualive" width="600" style="display:block;width:100%;height:auto;">
</td></tr>

<!-- Orange Accent Line -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:4px;background:linear-gradient(90deg,#f97316,#fbbf24,#f97316);"></td></tr></table></td></tr>

<!-- Main Content -->
<tr><td style="padding:40px 40px 24px;">
<h1 style="margin:0 0 24px;font-size:26px;line-height:1.4;color:#ffffff;font-weight:700;">A hist&oacute;ria por tr&aacute;s da &aacute;gua que voc&ecirc; bebe todos os dias</h1>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">Ol&aacute;!</p>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">Voc&ecirc; j&aacute; sabe a diferen&ccedil;a que a &aacute;gua Acqualive faz no dia a dia. O sabor muda, a disposi&ccedil;&atilde;o melhora, a fam&iacute;lia inteira sente. Mas talvez voc&ecirc; nunca tenha ouvido como tudo come&ccedil;ou.</p>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">Nasceu de uma inquieta&ccedil;&atilde;o: a gente cuida tanto do que come, mas quase ningu&eacute;m pergunta <strong style="color:#ffffff;">ser&aacute; que a &aacute;gua que eu bebo est&aacute; cuidando de mim?</strong></p>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">Foi essa pergunta que deu origem &agrave; Acqualive. Pessoas que acreditavam que a &aacute;gua podia ser mais do que "sem gosto e sem cheiro". Que podia nutrir o corpo e transformar a sa&uacute;de de fam&iacute;lias inteiras.</p>
</td></tr>

<!-- Highlight Quote -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td style="width:4px;background-color:#f97316;border-radius:2px;"></td>
<td style="padding:20px 24px;">
<p style="margin:0;font-size:18px;line-height:1.6;color:#ffffff;font-style:italic;">"Nosso prop&oacute;sito &eacute; simples: transformar a &aacute;gua para cuidar da vida."</p>
</td>
</tr>
</table>
</td></tr>

<!-- Growth Story -->
<tr><td style="padding:0 40px 24px;">
<h2 style="margin:0 0 16px;font-size:20px;color:#ffffff;font-weight:700;">Do primeiro purificador &agrave; presen&ccedil;a nacional</h2>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">Nos primeiros anos, a Acqualive funcionava de forma artesanal. Time enxuto, produto excelente e muita conversa. O crescimento veio do boca a boca: clientes satisfeitos que indicavam para amigos e vizinhos.</p>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">Quando a demanda cresceu, a escolha n&atilde;o foi vender em varejo. Foi convidar quem j&aacute; acreditava no produto a levar essa transforma&ccedil;&atilde;o para outras cidades. Assim nasceu o modelo de franquia.</p>
</td></tr>

<!-- Technology Section -->
<tr><td style="padding:0 40px 24px;">
<h2 style="margin:0 0 16px;font-size:20px;color:#ffffff;font-weight:700;">N&atilde;o &eacute; s&oacute; filtrar. &Eacute; transformar.</h2>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">Nossos purificadores entregam tr&ecirc;s coisas que nenhum filtro convencional oferece junto:</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
<tr><td style="padding:16px 0;border-bottom:1px solid #1e293b;">
<p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#f97316;">Purifica&ccedil;&atilde;o profunda</p>
<p style="margin:0;font-size:14px;line-height:1.7;color:#94a3b8;">Remove cloro, metais pesados e mais de 80 contaminantes.</p>
</td></tr>
<tr><td style="padding:16px 0;border-bottom:1px solid #1e293b;">
<p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#f97316;">Alcaliniza&ccedil;&atilde;o natural</p>
<p style="margin:0;font-size:14px;line-height:1.7;color:#94a3b8;">Eleva o pH para a faixa alcalina (8.5 a 9.5), equilibrando a acidez do organismo.</p>
</td></tr>
<tr><td style="padding:16px 0;">
<p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#f97316;">Ioniza&ccedil;&atilde;o molecular</p>
<p style="margin:0;font-size:14px;line-height:1.7;color:#94a3b8;">Reestrutura a &aacute;gua em microclusters para hidratar de forma mais eficiente.</p>
</td></tr>
</table>
</td></tr>

<!-- Numbers Section -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;overflow:hidden;">
<tr>
<td width="33%" style="padding:24px 12px;text-align:center;">
<p style="margin:0;font-size:28px;font-weight:800;color:#f97316;">15+</p>
<p style="margin:4px 0 0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">anos de<br>mercado</p>
</td>
<td width="33%" style="padding:24px 12px;text-align:center;border-left:1px solid #334155;border-right:1px solid #334155;">
<p style="margin:0;font-size:28px;font-weight:800;color:#f97316;">200k+</p>
<p style="margin:4px 0 0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">fam&iacute;lias<br>atendidas</p>
</td>
<td width="33%" style="padding:24px 12px;text-align:center;">
<p style="margin:0;font-size:28px;font-weight:800;color:#f97316;">3x</p>
<p style="margin:4px 0 0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">selo great<br>place to work</p>
</td>
</tr>
</table>
</td></tr>

<!-- Did you know section -->
<tr><td style="padding:0 40px 24px;">
<h2 style="margin:0 0 16px;font-size:20px;color:#ffffff;font-weight:700;">Voc&ecirc; sabia?</h2>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">A Acqualive est&aacute; presente em todos os 27 estados. Muitos franqueados come&ccedil;aram como voc&ecirc;: clientes que sentiram a diferen&ccedil;a e pensaram <strong style="color:#ffffff;">"e se eu pudesse levar isso para mais gente?"</strong></p>

<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">N&atilde;o &eacute; sobre vender um produto. &Eacute; sobre compartilhar algo que voc&ecirc; j&aacute; sabe que funciona.</p>
</td></tr>

<!-- Soft CTA -->
<tr><td style="padding:0 40px 36px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;">
<tr><td style="padding:28px 24px;text-align:center;">
<p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:#d1d5db;">Se voc&ecirc; j&aacute; pensou em empreender com algo que acredita de verdade, talvez valha a pena conhecer.</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background:linear-gradient(135deg,#f97316,#ea580c);border-radius:10px;padding:2px;">
<a href="https://franquias.acqualive.com.br/solo" target="_blank" style="display:block;padding:14px 32px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;">Conhecer o modelo de franquia</a>
</td></tr>
</table>
<p style="margin:14px 0 0;font-size:12px;color:#64748b;">Sem compromisso. &Eacute; s&oacute; para saber mais.</p>
</td></tr>
</table>
</td></tr>

<!-- Closing -->
<tr><td style="padding:0 40px 32px;">
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">Nos pr&oacute;ximos dias, compartilho mais sobre sa&uacute;de, &aacute;gua e oportunidades. Fique &agrave; vontade para responder.</p>

<p style="margin:0;font-size:16px;line-height:1.8;color:#d1d5db;">Um abra&ccedil;o,<br><strong style="color:#ffffff;">Equipe Acqualive</strong></p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;background:linear-gradient(180deg,#0a0e14,#060810);text-align:center;border-top:1px solid #1c2333;">
<p style="margin:0;font-size:12px;color:#4b5563;">&copy; 2025 Acqualive. Todos os direitos reservados.</p>
<p style="margin:8px 0 0;font-size:11px;color:#374151;">Voc&ecirc; recebeu este email porque &eacute; cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  {
    day: "Quarta-feira",
    subject: "O mercado de saúde cresce 16,5% ao ano. Você vai ficar de fora?",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Franquia Solo - Oportunidade</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a2332 100%);padding:32px 40px 24px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="160" style="display:block;margin:0 auto;">
</td></tr>

<!-- Green Growth Banner -->
<tr><td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#065f46,#047857);">
<tr><td style="padding:20px 40px;text-align:center;">
<p style="margin:0;font-size:13px;font-weight:700;color:#a7f3d0;text-transform:uppercase;letter-spacing:2px;">Dados Oficiais ABF 2024</p>
<p style="margin:8px 0 0;font-size:20px;font-weight:800;color:#ffffff;">O mercado não para de crescer</p>
</td></tr>
</table>
</td></tr>

<!-- Content -->
<tr><td style="padding:40px 40px 16px;">
<h1 style="margin:0 0 20px;font-size:28px;line-height:1.3;color:#ffffff;text-align:center;">Os números não mentem:<br><span style="color:#f97316;">este mercado só cresce.</span></h1>

<!-- Divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:0 0 24px;text-align:center;"><table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td style="width:40px;height:2px;background-color:#f97316;"></td><td style="width:12px;"></td><td style="width:8px;height:8px;border-radius:50%;background-color:#f97316;"></td><td style="width:12px;"></td><td style="width:40px;height:2px;background-color:#f97316;"></td></tr></table></td></tr></table>

<p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#d1d5db;">Na segunda, te contei sobre a Franquia Solo. Hoje quero te mostrar <strong style="color:#ffffff;">por que este é o momento certo</strong> para começar.</p>
</td></tr>

<!-- Big Market Stats -->
<tr><td style="padding:0 40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;overflow:hidden;">
<tr>
<td width="50%" style="padding:28px 20px;text-align:center;border-right:1px solid #334155;">
<p style="margin:0;font-size:48px;font-weight:800;color:#22c55e;">16,5%</p>
<p style="margin:8px 0 0;font-size:13px;color:#94a3b8;line-height:1.4;">Crescimento do setor<br>Saúde e Bem-Estar</p>
</td>
<td width="50%" style="padding:28px 20px;text-align:center;">
<p style="margin:0;font-size:48px;font-weight:800;color:#22c55e;">R$64,8</p>
<p style="margin:8px 0 0;font-size:13px;color:#94a3b8;line-height:1.4;">Bilhões em faturamento<br>Setor de Franquias</p>
</td>
</tr>
</table>
</td></tr>

<tr><td style="padding:0 40px 24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="48%" style="text-align:center;padding:20px;background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;">
<p style="margin:0;font-size:36px;font-weight:800;color:#22c55e;">200k+</p>
<p style="margin:4px 0 0;font-size:12px;color:#94a3b8;">Franquias Ativas<br>Setor Saúde</p>
</td>
<td width="4%"></td>
<td width="48%" style="text-align:center;padding:20px;background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;">
<p style="margin:0;font-size:36px;font-weight:800;color:#22c55e;">10,4%</p>
<p style="margin:4px 0 0;font-size:12px;color:#94a3b8;">Crescimento Anual<br>Projeção até 2034</p>
</td>
</tr>
</table>
</td></tr>

<!-- Returns Table -->
<tr><td style="padding:0 40px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;overflow:hidden;">
<tr><td style="padding:24px 24px 16px;text-align:center;border-bottom:1px solid #334155;">
<h2 style="margin:0;font-size:20px;color:#ffffff;">Seus ganhos como Franqueado Solo</h2>
</td></tr>
<tr><td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td style="padding:16px 24px;border-bottom:1px solid #1e293b;"><p style="margin:0;font-size:14px;color:#94a3b8;">Payback médio</p></td>
<td style="padding:16px 24px;border-bottom:1px solid #1e293b;text-align:right;"><p style="margin:0;font-size:17px;font-weight:700;color:#f97316;">6 a 18 meses</p></td>
</tr>
<tr>
<td style="padding:16px 24px;border-bottom:1px solid #1e293b;"><p style="margin:0;font-size:14px;color:#94a3b8;">Lucratividade</p></td>
<td style="padding:16px 24px;border-bottom:1px solid #1e293b;text-align:right;"><p style="margin:0;font-size:17px;font-weight:700;color:#f97316;">18% a 25%</p></td>
</tr>
<tr>
<td style="padding:16px 24px;border-bottom:1px solid #1e293b;"><p style="margin:0;font-size:14px;color:#94a3b8;">Renda por cliente/ano</p></td>
<td style="padding:16px 24px;border-bottom:1px solid #1e293b;text-align:right;"><p style="margin:0;font-size:17px;font-weight:700;color:#f97316;">R$ 850</p></td>
</tr>
<tr>
<td style="padding:16px 24px;"><p style="margin:0;font-size:14px;color:#94a3b8;">Investimento</p></td>
<td style="padding:16px 24px;text-align:right;"><p style="margin:0;font-size:17px;font-weight:700;color:#f97316;">A partir de R$ 30k</p></td>
</tr>
</table>
</td></tr>
</table>
</td></tr>

<!-- Highlight -->
<tr><td style="padding:0 40px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:2px solid #f97316;border-radius:12px;overflow:hidden;">
<tr><td style="background:linear-gradient(135deg,#431407,#0d1117);padding:28px;text-align:center;">
<p style="margin:0;font-size:20px;color:#ffffff;line-height:1.5;"><strong>100% do valor investido</strong> é convertido em produtos.</p>
<p style="margin:8px 0 0;font-size:18px;color:#f97316;font-weight:700;">Sem taxa de franquia!</p>
</td></tr>
</table>
</td></tr>

<!-- CTA -->
<tr><td style="padding:0 40px 16px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background:linear-gradient(135deg,#f97316,#ea580c);border-radius:10px;padding:2px;">
<a href="https://franquias.acqualive.com.br/solo" target="_blank" style="display:block;padding:16px 44px;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;">QUERO SABER MAIS SOBRE A FRANQUIA</a>
</td></tr>
</table>
</td></tr>
<tr><td style="padding:0 40px 40px;text-align:center;">
<p style="margin:0;font-size:13px;color:#64748b;">Amanhã vou te apresentar histórias de quem já está lucrando.</p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;background:linear-gradient(180deg,#0a0e14,#060810);text-align:center;border-top:1px solid #1c2333;">
<p style="margin:0;font-size:11px;color:#475569;">Fonte: Associação Brasileira de Franchising (ABF), Relatório 2024</p>
<p style="margin:8px 0 0;font-size:12px;color:#4b5563;">© 2025 Acqualive. Todos os direitos reservados.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  {
    day: "Quinta-feira",
    subject: "\"Em 2 anos recuperei todo o investimento\", Roberto, Franqueado Solo",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Franquia Solo - Depoimentos</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a2332 100%);padding:32px 40px 24px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="160" style="display:block;margin:0 auto;">
</td></tr>

<!-- Video Thumbnail with Play Button -->
<tr><td style="padding:0;text-align:center;background-color:#0d1117;">
<a href="https://www.youtube.com/watch?v=hjFlK337Cjc" target="_blank" style="display:block;text-decoration:none;">
<img src="https://upgrade-acqualive.lovable.app/images/video-thumb-solo.png?v=3" alt="Assista ao depoimento" width="600" style="display:block;width:100%;height:auto;border:0;">
</a>
</td></tr>

<!-- Orange Accent -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:4px;background:linear-gradient(90deg,#f97316,#fbbf24,#f97316);"></td></tr></table></td></tr>

<!-- Content -->
<tr><td style="padding:40px 40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="text-align:center;padding-bottom:16px;">
<p style="margin:0;display:inline-block;padding:6px 20px;background-color:#f97316;color:#ffffff;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;border-radius:20px;">Histórias de Sucesso</p>
</td></tr>
</table>
<h1 style="margin:0 0 20px;font-size:28px;line-height:1.3;color:#ffffff;text-align:center;">Quem já faz parte<br><span style="color:#f97316;">recomenda.</span></h1>

<!-- Divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:0 0 24px;text-align:center;"><table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td style="width:40px;height:2px;background-color:#f97316;"></td><td style="width:12px;"></td><td style="width:8px;height:8px;border-radius:50%;background-color:#f97316;"></td><td style="width:12px;"></td><td style="width:40px;height:2px;background-color:#f97316;"></td></tr></table></td></tr></table>

<p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#d1d5db;text-align:center;">Hoje quero que você conheça pessoas reais que deram o passo e <strong style="color:#ffffff;">transformaram suas vidas com a Franquia Solo</strong>.</p>
</td></tr>

<!-- Testimonial 1 -->
<tr><td style="padding:0 40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;overflow:hidden;">
<tr><td style="padding:4px 24px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:3px;background:linear-gradient(90deg,#f97316,#fbbf24);border-radius:0 0 4px 4px;"></td></tr></table></td></tr>
<tr><td style="padding:20px 24px 24px;">
<p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#e2e8f0;font-style:italic;">Saí do mundo corporativo e hoje tenho minha própria franquia Acqualive. Em 2 anos, já recuperei todo o investimento e construí uma renda passiva que me dá liberdade.</p>
<table role="presentation" cellpadding="0" cellspacing="0">
<tr>
<td style="width:48px;height:48px;background:linear-gradient(135deg,#f97316,#ea580c);border-radius:50%;text-align:center;vertical-align:middle;"><p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">RF</p></td>
<td style="padding-left:14px;">
<p style="margin:0;font-size:15px;font-weight:700;color:#ffffff;">Roberto Fernandes</p>
<p style="margin:2px 0 0;font-size:13px;color:#f97316;">Franqueado há 3 anos</p>
</td>
</tr>
</table>
</td></tr>
</table>
</td></tr>

<!-- Testimonial 2 -->
<tr><td style="padding:0 40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;overflow:hidden;">
<tr><td style="padding:4px 24px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:3px;background:linear-gradient(90deg,#f97316,#fbbf24);border-radius:0 0 4px 4px;"></td></tr></table></td></tr>
<tr><td style="padding:20px 24px 24px;">
<p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#e2e8f0;font-style:italic;">A Acqualive transformou minha forma de me hidratar. A água alcalina é fundamental para minha performance e recuperação. Recomendo para todos que buscam qualidade de vida.</p>
<table role="presentation" cellpadding="0" cellspacing="0">
<tr>
<td style="width:48px;height:48px;background:linear-gradient(135deg,#f97316,#ea580c);border-radius:50%;text-align:center;vertical-align:middle;"><p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">LM</p></td>
<td style="padding-left:14px;">
<p style="margin:0;font-size:15px;font-weight:700;color:#ffffff;">Lyoto Machida</p>
<p style="margin:2px 0 0;font-size:13px;color:#f97316;">Campeão UFC</p>
</td>
</tr>
</table>
</td></tr>
</table>
</td></tr>

<!-- How it works -->
<tr><td style="padding:16px 40px 8px;text-align:center;">
<h2 style="margin:0 0 20px;font-size:22px;color:#ffffff;">Como funciona a Franquia Solo?</h2>
</td></tr>

<tr><td style="padding:0 40px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="48%" style="padding:20px 16px;background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;text-align:center;vertical-align:top;">
<p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#ffffff;">Enxoval de Produtos</p>
<p style="margin:0;font-size:12px;line-height:1.5;color:#94a3b8;">Seu investimento volta em purificadores para vender e lucrar.</p>
</td>
<td width="4%"></td>
<td width="48%" style="padding:20px 16px;background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;text-align:center;vertical-align:top;">
<p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#ffffff;">Uso da Marca</p>
<p style="margin:0;font-size:12px;line-height:1.5;color:#94a3b8;">Utilize a força da Acqualive para fechar negócios.</p>
</td>
</tr>
</table>
</td></tr>
<tr><td style="padding:0 40px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="48%" style="padding:20px 16px;background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;text-align:center;vertical-align:top;">
<p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#ffffff;">Tabela Exclusiva</p>
<p style="margin:0;font-size:12px;line-height:1.5;color:#94a3b8;">Margens agressivas para retorno rápido.</p>
</td>
<td width="4%"></td>
<td width="48%" style="padding:20px 16px;background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;text-align:center;vertical-align:top;">
<p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#ffffff;">Modelo Escalável</p>
<p style="margin:0;font-size:12px;line-height:1.5;color:#94a3b8;">Comece sozinho e monte sua equipe quando quiser.</p>
</td>
</tr>
</table>
</td></tr>

<!-- CTA -->
<tr><td style="padding:0 40px 16px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background:linear-gradient(135deg,#f97316,#ea580c);border-radius:10px;padding:2px;">
<a href="https://franquias.acqualive.com.br/solo" target="_blank" style="display:block;padding:16px 44px;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;">QUERO SER UM FRANQUEADO</a>
</td></tr>
</table>
</td></tr>
<tr><td style="padding:0 40px 40px;text-align:center;">
<p style="margin:0;font-size:13px;color:#64748b;">No sábado, uma surpresa especial para você. Fique atento!</p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;background:linear-gradient(180deg,#0a0e14,#060810);text-align:center;border-top:1px solid #1c2333;">
<p style="margin:0;font-size:12px;color:#4b5563;">© 2025 Acqualive. Todos os direitos reservados.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  {
    day: "Sábado",
    subject: "Oferta exclusiva: Franquia Solo SEM taxa de franquia, só até esta semana",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Franquia Solo - Oferta Exclusiva</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a2332 100%);padding:32px 40px 24px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="160" style="display:block;margin:0 auto;">
</td></tr>

<!-- Urgency Banner -->
<tr><td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#f97316,#dc2626);">
<tr><td style="padding:20px;text-align:center;">
<p style="margin:0;font-size:16px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:1.5px;">Campanha por tempo limitado</p>
<p style="margin:6px 0 0;font-size:13px;color:#fef3c7;">Últimas vagas disponíveis para sua região</p>
</td></tr>
</table>
</td></tr>

<!-- Hero Product Image -->
<tr><td style="padding:0;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/XwFuetyxeUpzCqxU.png" alt="Acqualive - Transformar a água para cuidar da vida" width="600" style="display:block;width:100%;height:auto;">
</td></tr>

<!-- Content -->
<tr><td style="padding:40px 40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="text-align:center;padding-bottom:16px;">
<p style="margin:0;display:inline-block;padding:6px 20px;background:linear-gradient(135deg,#f97316,#ea580c);color:#ffffff;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;border-radius:20px;">Oferta Exclusiva</p>
</td></tr>
</table>
<h1 style="margin:0 0 20px;font-size:28px;line-height:1.3;color:#ffffff;text-align:center;">Esta semana, sua chance de empreender <span style="color:#f97316;">sem taxa de franquia.</span></h1>

<!-- Divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:0 0 24px;text-align:center;"><table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td style="width:40px;height:2px;background-color:#f97316;"></td><td style="width:12px;"></td><td style="width:8px;height:8px;border-radius:50%;background-color:#f97316;"></td><td style="width:12px;"></td><td style="width:40px;height:2px;background-color:#f97316;"></td></tr></table></td></tr></table>

<p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#d1d5db;">Ao longo desta semana, você viu:</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
<tr><td style="padding:8px 0;font-size:15px;color:#e2e8f0;">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td style="width:28px;height:28px;background-color:#065f46;border-radius:50%;text-align:center;vertical-align:middle;"><p style="margin:0;font-size:14px;color:#ffffff;">&#10003;</p></td>
<td style="padding-left:12px;font-size:15px;color:#e2e8f0;">Como a Franquia Solo funciona sem loja física</td>
</tr></table>
</td></tr>
<tr><td style="padding:8px 0;font-size:15px;color:#e2e8f0;">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td style="width:28px;height:28px;background-color:#065f46;border-radius:50%;text-align:center;vertical-align:middle;"><p style="margin:0;font-size:14px;color:#ffffff;">&#10003;</p></td>
<td style="padding-left:12px;font-size:15px;color:#e2e8f0;">O mercado crescendo 16,5% ao ano</td>
</tr></table>
</td></tr>
<tr><td style="padding:8px 0;font-size:15px;color:#e2e8f0;">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td style="width:28px;height:28px;background-color:#065f46;border-radius:50%;text-align:center;vertical-align:middle;"><p style="margin:0;font-size:14px;color:#ffffff;">&#10003;</p></td>
<td style="padding-left:12px;font-size:15px;color:#e2e8f0;">Franqueados recuperando investimento em até 18 meses</td>
</tr></table>
</td></tr>
</table>
<p style="margin:0 0 24px;font-size:18px;line-height:1.6;color:#ffffff;text-align:center;"><strong>Agora, a melhor parte:</strong></p>
</td></tr>

<!-- Offer Box -->
<tr><td style="padding:0 40px 24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:2px solid #f97316;border-radius:16px;overflow:hidden;">
<!-- Orange top bar -->
<tr><td style="background:linear-gradient(135deg,#f97316,#ea580c);padding:16px;text-align:center;">
<p style="margin:0;font-size:14px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:1px;">Franquia Solo Acqualive</p>
</td></tr>
<tr><td style="background:linear-gradient(180deg,#1e293b,#0f172a);padding:32px;text-align:center;">
<p style="margin:0 0 4px;font-size:16px;color:#94a3b8;">A partir de</p>
<p style="margin:0 0 24px;font-size:48px;font-weight:800;color:#ffffff;">R$ 30 mil</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
<tr><td style="padding:8px 0;font-size:15px;color:#e2e8f0;">&#10003; <strong>100% do investimento</strong> convertido em produtos</td></tr>
<tr><td style="padding:8px 0;font-size:15px;color:#e2e8f0;">&#10003; <strong>Sem loja física</strong>, trabalhe de qualquer lugar</td></tr>
<tr><td style="padding:8px 0;font-size:15px;color:#e2e8f0;">&#10003; <strong>Treinamento completo</strong> e suporte contínuo</td></tr>
<tr><td style="padding:8px 0;font-size:15px;color:#e2e8f0;">&#10003; <strong>Material de marketing</strong> profissional</td></tr>
<tr><td style="padding:8px 0;font-size:15px;color:#e2e8f0;">&#10003; <strong>Mentoria</strong> com franqueados de sucesso</td></tr>
</table>

<!-- Stats mini -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="32%" style="text-align:center;padding:16px 4px;background-color:#0d1117;border-radius:8px;">
<p style="margin:0;font-size:20px;font-weight:800;color:#f97316;">6-18</p>
<p style="margin:2px 0 0;font-size:10px;color:#94a3b8;text-transform:uppercase;">meses payback</p>
</td>
<td width="2%"></td>
<td width="32%" style="text-align:center;padding:16px 4px;background-color:#0d1117;border-radius:8px;">
<p style="margin:0;font-size:20px;font-weight:800;color:#f97316;">18-25%</p>
<p style="margin:2px 0 0;font-size:10px;color:#94a3b8;text-transform:uppercase;">lucratividade</p>
</td>
<td width="2%"></td>
<td width="32%" style="text-align:center;padding:16px 4px;background-color:#0d1117;border-radius:8px;">
<p style="margin:0;font-size:20px;font-weight:800;color:#f97316;">R$850</p>
<p style="margin:2px 0 0;font-size:10px;color:#94a3b8;text-transform:uppercase;">renda/cliente/ano</p>
</td>
</tr>
</table>
</td></tr>
</table>
</td></tr>

<!-- Final CTA -->
<tr><td style="padding:0 40px 16px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background:linear-gradient(135deg,#f97316,#ea580c);border-radius:12px;padding:2px;">
<a href="https://franquias.acqualive.com.br/solo" target="_blank" style="display:block;padding:20px 48px;color:#ffffff;text-decoration:none;font-size:18px;font-weight:700;letter-spacing:0.5px;">QUERO GARANTIR MINHA VAGA</a>
</td></tr>
</table>
</td></tr>
<tr><td style="padding:8px 40px 16px;text-align:center;">
<p style="margin:0;font-size:13px;color:#ef4444;font-weight:600;">Últimas vagas disponíveis para sua região</p>
</td></tr>
<tr><td style="padding:0 40px 40px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background-color:#25d366;border-radius:10px;">
<a href="https://wa.me/554391280555?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Franquia%20Solo%20Acqualive" target="_blank" style="display:block;padding:14px 32px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;">Ou fale direto no WhatsApp</a>
</td></tr>
</table>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;background:linear-gradient(180deg,#0a0e14,#060810);text-align:center;border-top:1px solid #1c2333;">
<p style="margin:0;font-size:12px;color:#4b5563;">© 2025 Acqualive. Todos os direitos reservados.</p>
<p style="margin:8px 0 0;font-size:11px;color:#374151;">Você recebeu este email porque é cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  // ════════════════════════════════════════════════════════════
  // EMAIL 5 — Programa de Indicação (Identidade /indicado-acqualive)
  // ════════════════════════════════════════════════════════════
  {
    day: "Indicação 1 — A descoberta",
    subject: "Você descobriu algo bom demais para guardar só para você",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acqualive — Programa de Indicação</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f4f8;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f4f8;">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(13,42,90,0.08);">

<!-- Top accent bar -->
<tr><td style="height:6px;background:linear-gradient(90deg,#103a73 0%,#1f63b3 50%,#f47b25 100%);"></td></tr>

<!-- Header -->
<tr><td style="background:#ffffff;padding:28px 36px 8px;text-align:left;">
<img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/logo-acqualive-azul.png" alt="Acqualive" width="150" style="display:block;">
</td></tr>

<!-- Eyebrow -->
<tr><td style="padding:18px 36px 0;">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td style="background:#eaf2fb;border-radius:999px;padding:8px 16px;">
<span style="font-size:12px;font-weight:700;color:#103a73;letter-spacing:1px;text-transform:uppercase;">Programa de Indicação</span>
</td></tr></table>
</td></tr>

<!-- Headline -->
<tr><td style="padding:18px 36px 6px;">
<h1 style="margin:0;font-size:30px;line-height:1.2;color:#0e2a52;font-weight:800;">A melhor água do Brasil <span style="color:#f47b25;">já está na sua casa.</span></h1>
<p style="margin:14px 0 0;font-size:16px;color:#345a8a;line-height:1.6;">Imagina o quanto a vida de quem você ama pode mudar quando eles experimentarem o mesmo.</p>
</td></tr>

<!-- Hero image -->
<tr><td style="padding:24px 36px 0;">
<img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/indica-family-dinner.jpg" alt="Família reunida à mesa com água Acqualive" width="528" style="display:block;width:100%;height:auto;border-radius:12px;">
</td></tr>

<!-- Body -->
<tr><td style="padding:28px 36px 0;">
<p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#2c3e60;">Olá!</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#2c3e60;">Você já sente todos os dias o que a Acqualive faz por dentro: mais disposição, hidratação de verdade e uma água que tem <strong style="color:#0e2a52;">sabor de cuidado</strong>.</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#2c3e60;">Agora pensa nas pessoas que estão na sua mesa de domingo, no grupo da família, na corrente de mensagens do trabalho. Quantas delas ainda bebem água de garrafão, da torneira, ou de filtro comum?</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#2c3e60;">Criamos uma página especial para que você possa, em um clique, mostrar a elas <strong style="color:#0e2a52;">a mesma transformação que você já vive</strong>.</p>
</td></tr>

<!-- Highlight box -->
<tr><td style="padding:8px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7faff;border:1px solid #d9e6f5;border-left:4px solid #f47b25;border-radius:10px;">
<tr><td style="padding:20px 22px;">
<p style="margin:0 0 6px;font-size:13px;color:#f47b25;font-weight:800;letter-spacing:1px;text-transform:uppercase;">Como funciona</p>
<p style="margin:0;font-size:16px;line-height:1.65;color:#0e2a52;">A cada amigo, familiar ou colega que adquirir um Acqualive através da sua indicação, <strong>você ganha 1 Kit de Refis completo</strong>. Indique 2 compradores por ano e <strong>nunca mais pague pela troca dos seus refis</strong>.</p>
</td></tr></table>
</td></tr>

<!-- CTA -->
<tr><td style="padding:30px 36px 6px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background:linear-gradient(135deg,#f47b25,#e8651b);border-radius:10px;">
<a href="https://paginas.acqualive.com.br/indicado-acqualive" target="_blank" style="display:block;padding:16px 36px;color:#ffffff;text-decoration:none;font-size:15px;font-weight:800;letter-spacing:0.4px;">QUERO INDICAR AGORA</a>
</td></tr></table>
</td></tr>

<!-- COMO ENVIAR (destaque) -->
<tr><td style="padding:26px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff8f1;border:2px dashed #f47b25;border-radius:14px;">
<tr><td style="padding:22px 24px;">
<p style="margin:0 0 14px;font-size:13px;color:#e8651b;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;text-align:center;">📲 Como enviar em 10 segundos</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #f0d8c2;border-radius:10px;margin:0 0 14px;">
<tr><td style="padding:14px 16px;text-align:center;">
<p style="margin:0 0 4px;font-size:11px;color:#a8896a;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Seu link de indicação</p>
<p style="margin:0;font-size:16px;color:#0e2a52;font-weight:800;font-family:Consolas,monospace;word-break:break-all;">paginas.acqualive.com.br/indicado-acqualive</p>
</td></tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="padding:6px 0;"><p style="margin:0;font-size:14px;line-height:1.6;color:#2c3e60;"><strong style="color:#f47b25;">1.</strong> Toque no botão laranja acima e abra a página.</p></td></tr>
<tr><td style="padding:6px 0;"><p style="margin:0;font-size:14px;line-height:1.6;color:#2c3e60;"><strong style="color:#f47b25;">2.</strong> Copie o endereço da barra do navegador (ou o link em destaque acima).</p></td></tr>
<tr><td style="padding:6px 0;"><p style="margin:0;font-size:14px;line-height:1.6;color:#2c3e60;"><strong style="color:#f47b25;">3.</strong> Cole no WhatsApp da família, dos amigos ou no seu story. Pronto!</p></td></tr>
</table>
</td></tr></table>
</td></tr>

<!-- MODELO DE MENSAGEM PRONTA -->
<tr><td style="padding:18px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e8f5ec;border:2px solid #25D366;border-radius:14px;">
<tr><td style="padding:22px 24px;">
<p style="margin:0 0 6px;font-size:13px;color:#128C4A;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;text-align:center;">💬 Mensagem pronta para o WhatsApp</p>
<p style="margin:0 0 14px;font-size:13px;color:#2c5e3f;text-align:center;">Copie, troque [SEU NOME] pelo seu nome e envie:</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #c8e6d0;border-radius:10px;">
<tr><td style="padding:18px 18px;">
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;">Oi! 👋</p>
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;">Aqui em casa a gente trocou a água comum por uma água alcalina que filtra de verdade — sem garrafão, sem peso, sem aquele gosto estranho. Diferença absurda na qualidade do dia a dia.</p>
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;">É o Acqualive. Achei que você ia gostar de conhecer:</p>
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;font-weight:700;">👉 paginas.acqualive.com.br/indicado-acqualive</p>
<p style="margin:0;font-size:15px;line-height:1.7;color:#0e2a52;">Qualquer dúvida pode me chamar. Abraço,<br>[SEU NOME]</p>
</td></tr></table>
</td></tr></table>
</td></tr>
<tr><td style="padding:24px 36px 32px;">
<p style="margin:0;font-size:14px;line-height:1.7;color:#5a6f8f;text-align:center;font-style:italic;">Dica: comece pelo grupo da família. É lá que estão as pessoas que mais merecem essa água.</p>
</td></tr>

<!-- Signature -->
<tr><td style="padding:0 36px 36px;">
<p style="margin:0;font-size:15px;line-height:1.7;color:#2c3e60;">Com carinho,<br><strong style="color:#0e2a52;">Equipe Acqualive</strong></p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:22px 36px;background:#f7faff;text-align:center;border-top:1px solid #e2ecf7;">
<p style="margin:0;font-size:12px;color:#7a8aa2;">© 2026 Acqualive. Todos os direitos reservados.</p>
<p style="margin:6px 0 0;font-size:11px;color:#9aa9c0;">Você recebeu este email porque é cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  // ════════════════════════════════════════════════════════════
  // EMAIL 6 — A conta que faz sentido (foco no benefício refis grátis)
  // ════════════════════════════════════════════════════════════
  {
    day: "Indicação 2 — A conta",
    subject: "2 indicações por ano = refis grátis para sempre. A conta fecha.",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acqualive — Refis grátis para sempre</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f4f8;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f4f8;">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(13,42,90,0.08);">

<tr><td style="height:6px;background:linear-gradient(90deg,#103a73 0%,#1f63b3 50%,#f47b25 100%);"></td></tr>

<!-- Header -->
<tr><td style="background:#ffffff;padding:28px 36px 8px;text-align:left;">
<img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/logo-acqualive-azul.png" alt="Acqualive" width="150" style="display:block;">
</td></tr>

<!-- Eyebrow -->
<tr><td style="padding:18px 36px 0;">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td style="background:#fff1e6;border-radius:999px;padding:8px 16px;">
<span style="font-size:12px;font-weight:700;color:#c95a14;letter-spacing:1px;text-transform:uppercase;">Refis grátis para sempre</span>
</td></tr></table>
</td></tr>

<!-- Headline -->
<tr><td style="padding:18px 36px 0;">
<h1 style="margin:0;font-size:30px;line-height:1.2;color:#0e2a52;font-weight:800;">A conta mais bonita que você vai fazer este ano.</h1>
<p style="margin:14px 0 0;font-size:16px;color:#345a8a;line-height:1.6;">Duas pessoas. Um ano. Refis grátis para sempre. Pode parecer um exagero, mas é exatamente assim que funciona.</p>
</td></tr>

<!-- Math card -->
<tr><td style="padding:28px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0e2a52,#1f63b3);border-radius:14px;">
<tr><td style="padding:30px 26px;text-align:center;">
<p style="margin:0;font-size:13px;color:#a9c8ee;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Sua matemática</p>
<p style="margin:14px 0 6px;font-size:46px;color:#ffffff;font-weight:800;line-height:1;">2 indicações</p>
<p style="margin:0;font-size:18px;color:#ffd6b3;">no ano</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:20px auto;"><tr><td style="width:60px;height:2px;background:#f47b25;"></td></tr></table>
<p style="margin:0;font-size:22px;color:#ffffff;font-weight:700;line-height:1.4;">= refis grátis<br><span style="color:#ffd6b3;">para sempre</span></p>
</td></tr></table>
</td></tr>

<!-- Comparison table -->
<tr><td style="padding:28px 36px 0;">
<h2 style="margin:0 0 16px;font-size:20px;color:#0e2a52;font-weight:700;">O que você economiza</h2>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2ecf7;border-radius:10px;overflow:hidden;">
<tr style="background:#f7faff;">
<td style="padding:14px 18px;font-size:13px;color:#5a6f8f;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Item</td>
<td style="padding:14px 18px;font-size:13px;color:#5a6f8f;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;text-align:right;">Antes</td>
<td style="padding:14px 18px;font-size:13px;color:#5a6f8f;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;text-align:right;">Com indicação</td>
</tr>
<tr><td style="padding:16px 18px;font-size:14px;color:#2c3e60;border-top:1px solid #e2ecf7;">Kit de refis (anual)</td>
<td style="padding:16px 18px;font-size:14px;color:#2c3e60;border-top:1px solid #e2ecf7;text-align:right;">Custo padrão</td>
<td style="padding:16px 18px;font-size:14px;color:#0e2a52;font-weight:800;border-top:1px solid #e2ecf7;text-align:right;">R$ 0,00</td>
</tr>
<tr><td style="padding:16px 18px;font-size:14px;color:#2c3e60;border-top:1px solid #e2ecf7;">Manutenção da água pura</td>
<td style="padding:16px 18px;font-size:14px;color:#2c3e60;border-top:1px solid #e2ecf7;text-align:right;">Mensal</td>
<td style="padding:16px 18px;font-size:14px;color:#0e2a52;font-weight:800;border-top:1px solid #e2ecf7;text-align:right;">Garantida</td>
</tr>
<tr><td style="padding:16px 18px;font-size:14px;color:#2c3e60;border-top:1px solid #e2ecf7;">Pessoas que você cuida</td>
<td style="padding:16px 18px;font-size:14px;color:#2c3e60;border-top:1px solid #e2ecf7;text-align:right;">A sua família</td>
<td style="padding:16px 18px;font-size:14px;color:#0e2a52;font-weight:800;border-top:1px solid #e2ecf7;text-align:right;">+ 2 famílias</td>
</tr>
</table>
</td></tr>

<!-- Honest line -->
<tr><td style="padding:24px 36px 0;">
<p style="margin:0;font-size:16px;line-height:1.75;color:#2c3e60;">Não é sorteio. Não é promoção temporária. Não tem letrinha miúda. <strong style="color:#0e2a52;">É um agradecimento permanente</strong> de quem cuida de você há tanto tempo.</p>
</td></tr>

<!-- CTA -->
<tr><td style="padding:30px 36px 6px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background:linear-gradient(135deg,#f47b25,#e8651b);border-radius:10px;">
<a href="https://paginas.acqualive.com.br/indicado-acqualive" target="_blank" style="display:block;padding:16px 36px;color:#ffffff;text-decoration:none;font-size:15px;font-weight:800;letter-spacing:0.4px;">PEGAR MEU LINK DE INDICAÇÃO</a>
</td></tr></table>
</td></tr>

<!-- COMO ENVIAR (destaque) -->
<tr><td style="padding:26px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff8f1;border:2px dashed #f47b25;border-radius:14px;">
<tr><td style="padding:22px 24px;">
<p style="margin:0 0 14px;font-size:13px;color:#e8651b;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;text-align:center;">📲 Copie e envie em 10 segundos</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #f0d8c2;border-radius:10px;margin:0 0 14px;">
<tr><td style="padding:14px 16px;text-align:center;">
<p style="margin:0 0 4px;font-size:11px;color:#a8896a;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Seu link para compartilhar</p>
<p style="margin:0;font-size:16px;color:#0e2a52;font-weight:800;font-family:Consolas,monospace;word-break:break-all;">paginas.acqualive.com.br/indicado-acqualive</p>
</td></tr></table>
<p style="margin:0;font-size:14px;line-height:1.6;color:#2c3e60;text-align:center;"><strong style="color:#f47b25;">É só copiar este link e colar no WhatsApp</strong> — quem clicar já cai direto na página com toda a explicação e o desconto especial pronto.</p>
</td></tr></table>
</td></tr>

<!-- MODELO DE MENSAGEM PRONTA -->
<tr><td style="padding:18px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e8f5ec;border:2px solid #25D366;border-radius:14px;">
<tr><td style="padding:22px 24px;">
<p style="margin:0 0 6px;font-size:13px;color:#128C4A;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;text-align:center;">💬 Mensagem pronta para o WhatsApp</p>
<p style="margin:0 0 14px;font-size:13px;color:#2c5e3f;text-align:center;">Copie, troque [SEU NOME] pelo seu nome e envie:</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #c8e6d0;border-radius:10px;">
<tr><td style="padding:18px 18px;">
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;">Oi! 😊</p>
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;">Vou te contar uma coisa boa: a Acqualive tem um programa onde, a cada amigo que eu indico e que adquire o filtro, eu ganho um kit de refis grátis. Indicando 2 pessoas no ano, <strong>nunca mais pago refil</strong>.</p>
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;">E o melhor: você ainda recebe uma condição especial. Sai ganhando dos dois lados.</p>
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;">Lembrei de você na hora. Dá uma olhada:</p>
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;font-weight:700;">👉 paginas.acqualive.com.br/indicado-acqualive</p>
<p style="margin:0;font-size:15px;line-height:1.7;color:#0e2a52;">Se quiser conversar antes, me chama por aqui.<br>[SEU NOME]</p>
</td></tr></table>
</td></tr></table>
</td></tr>
<tr><td style="padding:30px 36px 0;">
<h2 style="margin:0 0 14px;font-size:18px;color:#0e2a52;font-weight:700;">3 jeitos simples de indicar hoje</h2>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="padding:12px 0;border-bottom:1px solid #eaf0f8;">
<p style="margin:0;font-size:15px;color:#2c3e60;"><strong style="color:#f47b25;">1.</strong> Mande no grupo da família com a frase: <em>"Olha o que mudou aqui em casa"</em>.</p>
</td></tr>
<tr><td style="padding:12px 0;border-bottom:1px solid #eaf0f8;">
<p style="margin:0;font-size:15px;color:#2c3e60;"><strong style="color:#f47b25;">2.</strong> Envie para aquele amigo que vive falando de saúde.</p>
</td></tr>
<tr><td style="padding:12px 0;">
<p style="margin:0;font-size:15px;color:#2c3e60;"><strong style="color:#f47b25;">3.</strong> Compartilhe no story. Quem se interessar vai te chamar.</p>
</td></tr>
</table>
</td></tr>

<!-- Signature -->
<tr><td style="padding:32px 36px 36px;">
<p style="margin:0;font-size:15px;line-height:1.7;color:#2c3e60;">Um abraço,<br><strong style="color:#0e2a52;">Equipe Acqualive</strong></p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:22px 36px;background:#f7faff;text-align:center;border-top:1px solid #e2ecf7;">
<p style="margin:0;font-size:12px;color:#7a8aa2;">© 2026 Acqualive. Todos os direitos reservados.</p>
<p style="margin:6px 0 0;font-size:11px;color:#9aa9c0;">Você recebeu este email porque é cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  // ════════════════════════════════════════════════════════════
  // EMAIL 7 — Convite emocional / urgência leve
  // ════════════════════════════════════════════════════════════
  {
    day: "Indicação 3 — O convite",
    subject: "Quem você indicaria primeiro? (a água deles agradece)",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acqualive — Indique alguém que você ama</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f4f8;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f4f8;">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(13,42,90,0.08);">

<tr><td style="height:6px;background:linear-gradient(90deg,#103a73 0%,#1f63b3 50%,#f47b25 100%);"></td></tr>

<!-- Header -->
<tr><td style="background:#ffffff;padding:28px 36px 8px;text-align:left;">
<img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/logo-acqualive-azul.png" alt="Acqualive" width="150" style="display:block;">
</td></tr>

<!-- Hero image -->
<tr><td style="padding:18px 36px 0;">
<img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/indica-family-dinner.jpg" alt="Família reunida em volta da mesa" width="528" style="display:block;width:100%;height:auto;border-radius:12px;">
</td></tr>

<!-- Headline -->
<tr><td style="padding:28px 36px 0;">
<h1 style="margin:0;font-size:30px;line-height:1.25;color:#0e2a52;font-weight:800;">Pense em uma pessoa.<br><span style="color:#f47b25;">Só uma.</span></h1>
<p style="margin:14px 0 0;font-size:16px;color:#345a8a;line-height:1.65;">Aquela que você sabe que merece beber a melhor água do Brasil. Agora imagine o rosto dela ao receber o seu link.</p>
</td></tr>

<!-- Story body -->
<tr><td style="padding:24px 36px 0;">
<p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#2c3e60;">Pode ser sua mãe, que ainda hidrata o ferro do almoço com água de torneira. Pode ser seu irmão, que gasta uma fortuna em garrafão e nem se dá conta do quanto isso pesa, dentro e fora do bolso. Pode ser aquela amiga que vive postando sobre saúde, mas ainda não conhece a Acqualive.</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#2c3e60;">Indicar não é vender. <strong style="color:#0e2a52;">Indicar é cuidar.</strong> É colocar na mesa de quem você ama o mesmo padrão de água que já entrou na sua.</p>
</td></tr>

<!-- Quote -->
<tr><td style="padding:24px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td style="width:4px;background:#f47b25;border-radius:2px;"></td>
<td style="padding:14px 22px;">
<p style="margin:0;font-size:18px;line-height:1.55;color:#0e2a52;font-style:italic;">"Indiquei minha irmã sem pensar duas vezes. Hoje as duas casas têm Acqualive — e meus refis chegam de graça todo ano."</p>
<p style="margin:10px 0 0;font-size:13px;color:#7a8aa2;">Cliente Acqualive — Programa de Indicação</p>
</td>
</tr>
</table>
</td></tr>

<!-- Recap box -->
<tr><td style="padding:28px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eaf2fb;border-radius:12px;">
<tr><td style="padding:22px 24px;">
<p style="margin:0 0 10px;font-size:13px;color:#103a73;font-weight:800;letter-spacing:1px;text-transform:uppercase;">Lembrete rápido</p>
<p style="margin:0;font-size:15px;line-height:1.7;color:#2c3e60;">Cada indicação que adquirir um Acqualive = <strong style="color:#0e2a52;">1 Kit de Refis grátis</strong> para você. Indicou 2 no ano? <strong style="color:#0e2a52;">Nunca mais paga refil.</strong> Sem limite, sem letrinha miúda, sem prazo de validade.</p>
</td></tr></table>
</td></tr>

<!-- Big CTA -->
<tr><td style="padding:32px 36px 6px;text-align:center;">
<p style="margin:0 0 18px;font-size:17px;color:#0e2a52;font-weight:700;">Pronto para presentear quem você ama?</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background:linear-gradient(135deg,#f47b25,#e8651b);border-radius:10px;">
<a href="https://paginas.acqualive.com.br/indicado-acqualive" target="_blank" style="display:block;padding:18px 40px;color:#ffffff;text-decoration:none;font-size:16px;font-weight:800;letter-spacing:0.5px;">ENVIAR PARA QUEM EU AMO</a>
</td></tr></table>
</td></tr>

<!-- COMO ENVIAR (destaque) -->
<tr><td style="padding:28px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff8f1;border:2px dashed #f47b25;border-radius:14px;">
<tr><td style="padding:24px 24px;">
<p style="margin:0 0 14px;font-size:13px;color:#e8651b;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;text-align:center;">📲 Como mandar agora pelo WhatsApp</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #f0d8c2;border-radius:10px;margin:0 0 16px;">
<tr><td style="padding:16px;text-align:center;">
<p style="margin:0 0 4px;font-size:11px;color:#a8896a;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Seu link de indicação</p>
<p style="margin:0;font-size:16px;color:#0e2a52;font-weight:800;font-family:Consolas,monospace;word-break:break-all;">paginas.acqualive.com.br/indicado-acqualive</p>
</td></tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="padding:6px 0;"><p style="margin:0;font-size:14px;line-height:1.6;color:#2c3e60;"><strong style="color:#f47b25;">1.</strong> Copie o endereço acima (ou abra pelo botão laranja).</p></td></tr>
<tr><td style="padding:6px 0;"><p style="margin:0;font-size:14px;line-height:1.6;color:#2c3e60;"><strong style="color:#f47b25;">2.</strong> Abra a conversa de quem você quer presentear no WhatsApp.</p></td></tr>
<tr><td style="padding:6px 0;"><p style="margin:0;font-size:14px;line-height:1.6;color:#2c3e60;"><strong style="color:#f47b25;">3.</strong> Cole o link, mande junto um <em>"precisa conhecer isso"</em> e pronto.</p></td></tr>
</table>
</td></tr></table>
</td></tr>

<!-- MODELO DE MENSAGEM PRONTA -->
<tr><td style="padding:18px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e8f5ec;border:2px solid #25D366;border-radius:14px;">
<tr><td style="padding:22px 24px;">
<p style="margin:0 0 6px;font-size:13px;color:#128C4A;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;text-align:center;">💬 Mensagem pronta para o WhatsApp</p>
<p style="margin:0 0 14px;font-size:13px;color:#2c5e3f;text-align:center;">Copie, troque [SEU NOME] pelo seu nome e envie para quem você ama:</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #c8e6d0;border-radius:10px;">
<tr><td style="padding:18px 18px;">
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;">Oi, tudo bem? ❤️</p>
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;">Você sabe que eu não fico mandando link de qualquer coisa. Mas esse aqui é diferente — é sobre a água que entra na sua casa todos os dias.</p>
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;">A gente usa o filtro Acqualive aqui em casa e mudou completamente o sabor, a leveza e a confiança no que a família bebe. Queria muito que você experimentasse também.</p>
<p style="margin:0 0 10px;font-size:15px;line-height:1.7;color:#0e2a52;font-weight:700;">👉 paginas.acqualive.com.br/indicado-acqualive</p>
<p style="margin:0;font-size:15px;line-height:1.7;color:#0e2a52;">Dá uma olhada com calma. E se quiser conversar, é só me chamar.<br>Com carinho,<br>[SEU NOME]</p>
</td></tr></table>
</td></tr></table>
</td></tr>
<tr><td style="padding:30px 36px 36px;">
<p style="margin:0;font-size:15px;line-height:1.7;color:#5a6f8f;text-align:center;font-style:italic;">A melhor água do Brasil já é sua. Agora é hora de espalhar.</p>
</td></tr>

<!-- Signature -->
<tr><td style="padding:0 36px 36px;">
<p style="margin:0;font-size:15px;line-height:1.7;color:#2c3e60;">Com gratidão,<br><strong style="color:#0e2a52;">Equipe Acqualive</strong></p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:22px 36px;background:#f7faff;text-align:center;border-top:1px solid #e2ecf7;">
<p style="margin:0;font-size:12px;color:#7a8aa2;">© 2026 Acqualive. Todos os direitos reservados.</p>
<p style="margin:6px 0 0;font-size:11px;color:#9aa9c0;">Você recebeu este email porque é cliente Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  {
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
  },

  // ============================================================
  // NOVOS E-MAILS — Pós-evento Andreia Naves (sans-serif)
  // ============================================================
  {
    day: "Pós-evento Andreia Naves — 01 — Agradecimento",
    subject: "Obrigada pela sua visita ao nosso stand ✿",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Obrigada pela visita — Acqualive</title>
</head>
<body style="margin:0;padding:0;background-color:#eef1f6;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a2440;-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Um pequeno detalhe sobre a água do evento que queremos compartilhar com você.</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef1f6;padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 4px 20px rgba(14,42,82,0.06);">

<!-- MASTHEAD -->
<tr><td style="padding:26px 40px 18px;border-bottom:1px solid #e6ebf3;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="font-size:20px;font-weight:700;letter-spacing:-0.4px;color:#0e2a52;">Acqualive</td>
      <td align="right" style="font-size:11px;letter-spacing:2px;color:#7a8aa2;text-transform:uppercase;">Pós-evento • Saúde da Mulher</td>
    </tr>
  </table>
</td></tr>

<!-- HERO -->
<tr><td style="padding:0;">
  <img src="https://blog.acqualive.com.br/wp-content/uploads/2026/04/a-hidratacao-e-fundamental-para-homens-e-mulheres-acima-dos-40-anos-scaled.jpg" alt="Hidratação, saúde e bem-estar da mulher" width="640" style="display:block;width:100%;height:auto;">
</td></tr>
<tr><td style="padding:36px 40px 8px;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:700;">Obrigada pela sua visita</p>
  <h1 style="margin:0 0 14px;font-size:32px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.7px;">Foi lindo receber você no nosso stand</h1>
  <p style="margin:0;font-size:15px;line-height:1.6;color:#4a5b7a;">Ver tantas mulheres reunidas em torno de saúde, nutrição e bem-estar é sempre inspirador. Obrigada por ter passado no stand da Acqualive e compartilhado um pouco desse momento com a gente.</p>
</td></tr>

<tr><td style="padding:36px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- BLOCO DE REVELAÇÃO -->
<tr><td style="padding:36px 40px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,#0e2a52 0%,#1a3a6b 100%);border-radius:10px;">
    <tr><td style="padding:32px 32px;">
      <p style="margin:0 0 10px;font-size:11px;letter-spacing:3px;color:#f9c74f;text-transform:uppercase;font-weight:700;">Um detalhe do evento</p>
      <h2 style="margin:0 0 14px;font-size:24px;line-height:1.3;color:#ffffff;font-weight:700;letter-spacing:-0.4px;">Você encontrou a Acqualive além do nosso stand.</h2>
      <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#dbe4f2;">Durante o evento, toda a água disponibilizada para hidratação das participantes também era Acqualive.</p>
      <p style="margin:0;font-size:15px;line-height:1.7;color:#dbe4f2;">Ou seja: enquanto você acompanhava conteúdos sobre saúde, nutrição e bem-estar, a qualidade da água que você bebeu também fez parte desse cuidado.</p>
    </td></tr>
  </table>
</td></tr>

<!-- BLOCO EDUCATIVO -->
<tr><td style="padding:40px 40px 0;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:700;">Por que esse cuidado importa?</p>
  <h2 style="margin:0 0 16px;font-size:24px;line-height:1.25;color:#0e2a52;font-weight:700;letter-spacing:-0.4px;">A água participa de quase todos os processos do seu corpo.</h2>
  <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#4a5b7a;">Ela sustenta a vitalidade da pele, o equilíbrio hormonal, a disposição e a beleza que vêm de dentro. Por isso, quando falamos em hidratação, não é só a quantidade que importa — a procedência e a qualidade da água que você bebe todos os dias também fazem diferença.</p>
  <p style="margin:0 0 22px;font-size:15px;line-height:1.7;color:#4a5b7a;">Na Acqualive, acreditamos que cuidar da água é um gesto simples de autocuidado, presente em cada copo que você oferece a si mesma e à sua família.</p>
</td></tr>

<!-- 3 DESTAQUES -->
<tr><td style="padding:0 40px 8px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="32%" valign="top" style="padding:18px 14px;background:#f4f8fd;border-radius:8px;text-align:center;">
        <p style="margin:0 0 6px;font-size:22px;">💧</p>
        <p style="margin:0;font-size:13px;line-height:1.45;color:#0e2a52;font-weight:700;">Beleza e vitalidade que começam pela água</p>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="32%" valign="top" style="padding:18px 14px;background:#f4f8fd;border-radius:8px;text-align:center;">
        <p style="margin:0 0 6px;font-size:22px;">✦</p>
        <p style="margin:0;font-size:13px;line-height:1.45;color:#0e2a52;font-weight:700;">Autocuidado presente em cada detalhe</p>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="32%" valign="top" style="padding:18px 14px;background:#f4f8fd;border-radius:8px;text-align:center;">
        <p style="margin:0 0 6px;font-size:22px;">↻</p>
        <p style="margin:0;font-size:13px;line-height:1.45;color:#0e2a52;font-weight:700;">Um ritual diário para você e sua família</p>
      </td>
    </tr>
  </table>
</td></tr>

<tr><td style="padding:36px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- ENCERRAMENTO -->
<tr><td style="padding:36px 40px 12px;">
  <p style="margin:0 0 22px;font-size:15px;line-height:1.7;color:#4a5b7a;">Esperamos que o evento tenha trazido novos conhecimentos, conexões e inspirações para a sua rotina de saúde e beleza. E que, a partir de agora, você também passe a olhar com mais carinho para algo que acompanha todas essas escolhas: a sua água.</p>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
    <tr><td align="center" style="background:linear-gradient(135deg,#f97316 0%,#f9c74f 100%);border-radius:6px;">
      <a href="[LINK_ACQUALIVE]" target="_blank" style="display:block;padding:16px 36px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.5px;">CONHEÇA A ACQUALIVE</a>
    </td></tr>
  </table>
</td></tr>

<!-- ASSINATURA -->
<tr><td style="padding:32px 40px 40px;text-align:center;">
  <p style="margin:0;font-size:14px;line-height:1.6;color:#7a8aa2;">Com carinho,<br><strong style="color:#0e2a52;">Guto da Acqualive</strong></p>
</td></tr>

<!-- FOOTER -->
<tr><td style="background:#0e2a52;padding:28px 40px;text-align:center;">
  <p style="margin:0 0 6px;font-size:15px;color:#ffffff;font-weight:700;letter-spacing:0.3px;">Acqualive</p>
  <p style="margin:0;font-size:11px;color:rgba(183,197,219,0.65);line-height:1.6;">© 2026 Acqualive. Todos os direitos reservados.<br><a href="#" style="color:rgba(183,197,219,0.8);text-decoration:underline;">Cancelar assinatura</a></p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },

  {
    day: "Pós-evento Andreia Naves — 02 — Hidratação e performance",
    subject: "Toda água hidrata a sua pele e o seu corpo da mesma forma?",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Hidratação e performance — Acqualive</title>
</head>
<body style="margin:0;padding:0;background-color:#eef1f6;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a2440;-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Beleza, disposição e saúde começam pela água que você bebe todos os dias.</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef1f6;padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 4px 20px rgba(14,42,82,0.06);">

<!-- MASTHEAD -->
<tr><td style="padding:26px 40px 18px;border-bottom:1px solid #e6ebf3;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="font-size:20px;font-weight:700;letter-spacing:-0.4px;color:#0e2a52;">Acqualive</td>
      <td align="right" style="font-size:11px;letter-spacing:2px;color:#7a8aa2;text-transform:uppercase;">Ciência, Beleza & Hidratação</td>
    </tr>
  </table>
</td></tr>

<!-- HERO -->
<tr><td style="padding:0;">
  <img src="https://blog.acqualive.com.br/wp-content/uploads/2026/06/woman-holding-stomach-illustration-healthcare-conc-2026-03-17-04-12-16-utc-scaled.jpg" alt="Hidratação, beleza e vitalidade da mulher" width="640" style="display:block;width:100%;height:auto;">
</td></tr>
<tr><td style="padding:36px 40px 8px;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:700;">Hidratação, Beleza & Vitalidade</p>
  <h1 style="margin:0 0 14px;font-size:32px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.7px;">Hidratar-se é muito mais do que simplesmente beber água</h1>
  <p style="margin:0;font-size:15px;line-height:1.65;color:#4a5b7a;">Em um evento dedicado à saúde da mulher, falar sobre hidratação é essencial. Mas existe um ponto que muitas vezes recebe menos atenção do que deveria: a qualidade da água que você consome todos os dias — em casa, no trabalho, na academia, no consultório.</p>
</td></tr>

<tr><td style="padding:36px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- BLOCO COMPARATIVO -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:700;">Comparativo</p>
  <h2 style="margin:0 0 22px;font-size:26px;line-height:1.25;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">Quantidade é fundamental. Qualidade também.</h2>
</td></tr>
<tr><td style="padding:0 40px 20px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="49%" valign="top" style="padding:22px 20px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 10px;font-size:10px;letter-spacing:2px;color:#7a8aa2;text-transform:uppercase;font-weight:700;">Visão limitada</p>
        <ul style="margin:0;padding:0 0 0 18px;font-size:14px;line-height:1.7;color:#4a5b7a;">
          <li>Considerar somente o volume ingerido</li>
          <li>Lembrar da água apenas durante o treino</li>
          <li>Ignorar procedência e características</li>
          <li>Tratar hidratação de forma isolada</li>
        </ul>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="49%" valign="top" style="padding:22px 20px;background:#eaf5ef;border-radius:8px;border:1px solid #cfe6d9;">
        <p style="margin:0 0 10px;font-size:10px;letter-spacing:2px;color:#10b981;text-transform:uppercase;font-weight:700;">Visão mais completa</p>
        <ul style="margin:0;padding:0 0 0 18px;font-size:14px;line-height:1.7;color:#1a2440;">
          <li>Observar quantidade, frequência e contexto</li>
          <li>Distribuir o consumo ao longo do dia</li>
          <li>Considerar as necessidades individuais</li>
          <li>Prestar atenção à qualidade da água</li>
        </ul>
      </td>
    </tr>
  </table>
</td></tr>

<tr><td style="padding:20px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- SAÚDE E PERFORMANCE -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:700;">Saúde, beleza e vitalidade</p>
  <h2 style="margin:0 0 22px;font-size:24px;line-height:1.25;color:#0e2a52;font-weight:700;letter-spacing:-0.4px;">O que a hidratação adequada apoia no corpo da mulher?</h2>
</td></tr>
<tr><td style="padding:0 40px 8px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="49%" valign="top" style="padding:20px 18px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 6px;font-size:14px;color:#0e2a52;font-weight:700;">Pele mais viçosa e hidratada</p>
        <p style="margin:0;font-size:13px;line-height:1.55;color:#4a5b7a;">A beleza da pele começa pela hidratação que vem de dentro.</p>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="49%" valign="top" style="padding:20px 18px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 6px;font-size:14px;color:#0e2a52;font-weight:700;">Mais disposição e energia no dia a dia</p>
        <p style="margin:0;font-size:13px;line-height:1.55;color:#4a5b7a;">A água ajuda a manter o equilíbrio e o bem-estar ao longo do dia.</p>
      </td>
    </tr>
    <tr><td colspan="3" height="10">&nbsp;</td></tr>
    <tr>
      <td width="49%" valign="top" style="padding:20px 18px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 6px;font-size:14px;color:#0e2a52;font-weight:700;">Apoio ao funcionamento do organismo</p>
        <p style="margin:0;font-size:13px;line-height:1.55;color:#4a5b7a;">Participa de reações químicas essenciais em praticamente todos os órgãos.</p>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="49%" valign="top" style="padding:20px 18px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 6px;font-size:14px;color:#0e2a52;font-weight:700;">Recuperação após treinos e rotina intensa</p>
        <p style="margin:0;font-size:13px;line-height:1.55;color:#4a5b7a;">Apoia a recuperação muscular e o equilíbrio depois do esforço.</p>
      </td>
    </tr>
  </table>
</td></tr>
<tr><td style="padding:16px 40px 0;">
  <p style="margin:0;font-size:12px;line-height:1.6;color:#7a8aa2;font-style:italic;">As necessidades de hidratação variam conforme fase da vida, alimentação, clima, rotina e intensidade das atividades. A estratégia deve ser adaptada à realidade de cada mulher, sempre com acompanhamento profissional.</p>
</td></tr>

<tr><td style="padding:36px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- REFLEXÃO -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:700;">Reflexão</p>
  <h2 style="margin:0 0 16px;font-size:24px;line-height:1.3;color:#0e2a52;font-weight:700;letter-spacing:-0.4px;">Se a água participa de tantos processos, por que olhar apenas para a quantidade?</h2>
  <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#4a5b7a;">Escolher uma água de qualidade não substitui uma alimentação equilibrada, acompanhamento profissional ou uma estratégia adequada de hidratação. É parte de um conjunto de cuidados que começa nas escolhas feitas todos os dias.</p>
  <p style="margin:0 0 26px;font-size:15px;line-height:1.7;color:#4a5b7a;">Esse é o olhar que a Acqualive quer levar para mais casas, consultórios e rotinas: água tratada como parte da saúde, e não apenas como algo automático.</p>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
    <tr><td align="center" style="background:linear-gradient(135deg,#f97316 0%,#f9c74f 100%);border-radius:6px;">
      <a href="[LINK_ACQUALIVE]" target="_blank" style="display:block;padding:16px 36px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.5px;">DESCUBRA UMA NOVA FORMA DE CUIDAR DA SUA ÁGUA</a>
    </td></tr>
  </table>
</td></tr>

<!-- ASSINATURA -->
<tr><td style="padding:36px 40px 40px;text-align:center;">
  <p style="margin:0;font-size:14px;line-height:1.6;color:#7a8aa2;">Um abraço,<br><strong style="color:#0e2a52;">Guto da Acqualive</strong></p>
</td></tr>

<!-- FOOTER -->
<tr><td style="background:#0e2a52;padding:28px 40px;text-align:center;">
  <p style="margin:0 0 6px;font-size:15px;color:#ffffff;font-weight:700;letter-spacing:0.3px;">Acqualive</p>
  <p style="margin:0;font-size:11px;color:rgba(183,197,219,0.65);line-height:1.6;">© 2026 Acqualive. Todos os direitos reservados.<br><a href="#" style="color:rgba(183,197,219,0.8);text-decoration:underline;">Cancelar assinatura</a></p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },

  {
    day: "Pós-evento Andreia Naves — 03 — Oferta exclusiva",
    subject: "Uma condição especial para quem esteve com a gente",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Condição exclusiva — Acqualive</title>
</head>
<body style="margin:0;padding:0;background-color:#eef1f6;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a2440;-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">A experiência do evento pode continuar fazendo parte da sua rotina.</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef1f6;padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 4px 20px rgba(14,42,82,0.06);">

<!-- MASTHEAD -->
<tr><td style="padding:26px 40px 18px;border-bottom:1px solid #e6ebf3;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="font-size:20px;font-weight:700;letter-spacing:-0.4px;color:#0e2a52;">Acqualive</td>
      <td align="right" style="font-size:11px;letter-spacing:2px;color:#f97316;text-transform:uppercase;font-weight:700;">Condição exclusiva</td>
    </tr>
  </table>
</td></tr>

<!-- HERO -->
<tr><td style="padding:0;">
  <img src="https://paginas.acqualive.com.br/__l5e/assets-v1/401eb55a-8570-4311-b9a8-ffc20815e730/acqualive-duo-consultorio.png" alt="Purificador Acqualive DUO" width="640" style="display:block;width:100%;height:auto;">
</td></tr>
<tr><td style="padding:36px 40px 8px;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:700;">Para quem esteve com a gente</p>
  <h1 style="margin:0 0 14px;font-size:32px;line-height:1.2;color:#0e2a52;font-weight:700;letter-spacing:-0.7px;">A água que fez parte do evento agora pode fazer parte da sua rotina</h1>
  <p style="margin:0 0 8px;font-size:15px;line-height:1.65;color:#4a5b7a;">Durante o evento, você conheceu mais sobre a Acqualive e experimentou uma água escolhida para acompanhar uma experiência dedicada à saúde e à performance.</p>
  <p style="margin:0;font-size:15px;line-height:1.65;color:#4a5b7a;">Agora, preparamos uma condição exclusiva para você levar esse cuidado para casa.</p>
</td></tr>

<!-- CARD DA OFERTA -->
<tr><td style="padding:32px 40px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f8fd;border-radius:12px;border:1px solid #dbe4f2;">
    <tr><td style="padding:30px 30px;text-align:center;">
      <p style="margin:0 0 14px;">
        <span style="display:inline-block;padding:6px 14px;background:#0e2a52;color:#f9c74f;font-size:10px;letter-spacing:2px;font-weight:700;text-transform:uppercase;border-radius:999px;">Condição exclusiva do evento</span>
      </p>
      <h2 style="margin:0 0 12px;font-size:26px;line-height:1.25;color:#0e2a52;font-weight:700;letter-spacing:-0.5px;">[INSERIR BENEFÍCIO OU OFERTA]</h2>
      <p style="margin:0 0 20px;font-size:14px;line-height:1.65;color:#4a5b7a;">Use o cupom abaixo e aproveite a condição preparada especialmente para quem visitou a Acqualive durante o evento.</p>
      <div style="display:inline-block;padding:16px 28px;background:#ffffff;border:2px dashed #f97316;border-radius:8px;margin:0 0 18px;">
        <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;color:#7a8aa2;text-transform:uppercase;font-weight:700;">Cupom</p>
        <p style="margin:0;font-size:22px;letter-spacing:3px;color:#0e2a52;font-weight:700;">[INSERIR CUPOM]</p>
      </div>
      <p style="margin:0 0 22px;font-size:12px;color:#7a8aa2;letter-spacing:0.5px;">Válido até <strong style="color:#0e2a52;">[INSERIR DATA]</strong>.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
        <tr><td align="center" style="background:linear-gradient(135deg,#f97316 0%,#f9c74f 100%);border-radius:6px;">
          <a href="[INSERIR LINK DA OFERTA]" target="_blank" style="display:block;padding:16px 34px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.5px;">QUERO APROVEITAR A CONDIÇÃO ESPECIAL</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</td></tr>

<!-- BENEFÍCIOS -->
<tr><td style="padding:44px 40px 0;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:700;">Benefícios</p>
  <h2 style="margin:0 0 22px;font-size:24px;line-height:1.25;color:#0e2a52;font-weight:700;letter-spacing:-0.4px;">Um cuidado que continua depois do evento</h2>
</td></tr>
<tr><td style="padding:0 40px 8px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="49%" valign="top" style="padding:18px 16px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 6px;font-size:14px;color:#0e2a52;font-weight:700;">Água de qualidade todos os dias</p>
        <p style="margin:0;font-size:13px;line-height:1.55;color:#4a5b7a;">Disponível na sua cozinha, sempre que precisar.</p>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="49%" valign="top" style="padding:18px 16px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 6px;font-size:14px;color:#0e2a52;font-weight:700;">Mais praticidade para sua rotina</p>
        <p style="margin:0;font-size:13px;line-height:1.55;color:#4a5b7a;">Menos garrafas, menos peso, menos preocupação.</p>
      </td>
    </tr>
    <tr><td colspan="3" height="10">&nbsp;</td></tr>
    <tr>
      <td width="49%" valign="top" style="padding:18px 16px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 6px;font-size:14px;color:#0e2a52;font-weight:700;">Cuidado com a água da sua casa</p>
        <p style="margin:0;font-size:13px;line-height:1.55;color:#4a5b7a;">Atenção à procedência da água que chega até você.</p>
      </td>
      <td width="2%">&nbsp;</td>
      <td width="49%" valign="top" style="padding:18px 16px;background:#f4f8fd;border-radius:8px;">
        <p style="margin:0 0 6px;font-size:14px;color:#0e2a52;font-weight:700;">Tecnologia Acqualive próxima de você</p>
        <p style="margin:0;font-size:13px;line-height:1.55;color:#4a5b7a;">Anos de pesquisa aplicados à sua rotina de saúde.</p>
      </td>
    </tr>
  </table>
</td></tr>

<tr><td style="padding:36px 40px 0;"><div style="height:1px;background:#e6ebf3;"></div></td></tr>

<!-- QUEBRA DE OBJEÇÃO -->
<tr><td style="padding:36px 40px 0;">
  <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#f97316;text-transform:uppercase;font-weight:700;">Fale com o time</p>
  <h2 style="margin:0 0 14px;font-size:22px;line-height:1.3;color:#0e2a52;font-weight:700;letter-spacing:-0.3px;">Ficou com alguma dúvida antes de escolher?</h2>
  <p style="margin:0 0 22px;font-size:15px;line-height:1.7;color:#4a5b7a;">Nosso time pode ajudar você a entender os modelos, características, instalação e qual opção combina melhor com a sua rotina.</p>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
    <tr><td align="center" style="background:#ffffff;border:2px solid #0e2a52;border-radius:6px;">
      <a href="[LINK_WHATSAPP]" target="_blank" style="display:block;padding:14px 32px;color:#0e2a52;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.5px;">FALAR COM UM ESPECIALISTA ACQUALIVE</a>
    </td></tr>
  </table>
</td></tr>

<!-- URGÊNCIA -->
<tr><td style="padding:36px 40px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fff6ec;border-left:3px solid #f97316;border-radius:4px;">
    <tr><td style="padding:18px 22px;">
      <p style="margin:0;font-size:13px;line-height:1.6;color:#7a4a1a;">Esta condição foi criada exclusivamente para os participantes do evento e estará disponível por tempo limitado.</p>
    </td></tr>
  </table>
</td></tr>

<!-- ASSINATURA -->
<tr><td style="padding:36px 40px 40px;text-align:center;">
  <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#7a8aa2;font-style:italic;">Espero continuar fazendo parte das suas escolhas de saúde e bem-estar.</p>
  <p style="margin:0;font-size:14px;line-height:1.6;color:#7a8aa2;">Um abraço,<br><strong style="color:#0e2a52;">Guto da Acqualive</strong></p>
</td></tr>

<!-- FOOTER -->
<tr><td style="background:#0e2a52;padding:28px 40px;text-align:center;">
  <p style="margin:0 0 6px;font-size:15px;color:#ffffff;font-weight:700;letter-spacing:0.3px;">Acqualive</p>
  <p style="margin:0;font-size:11px;color:rgba(183,197,219,0.65);line-height:1.6;">© 2026 Acqualive. Todos os direitos reservados.<br><a href="#" style="color:rgba(183,197,219,0.8);text-decoration:underline;">Cancelar assinatura</a></p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },

];

const EmailTemplates = () => {
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
            <h1 className="text-sm font-bold text-[#f97316]">Email {currentIndex + 1}/{EMAILS.length}</h1>
            <span className="text-sm text-gray-400">{email.day}</span>
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
                    ? "bg-[#f97316] text-white"
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
              className={viewMode === "preview" ? "bg-[#f97316] hover:bg-[#ea580c]" : "border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"}
            >
              <Eye className="h-4 w-4 mr-1" /> Preview
            </Button>
            <Button
              size="sm"
              variant={viewMode === "code" ? "default" : "outline"}
              onClick={() => setViewMode("code")}
              className={viewMode === "code" ? "bg-[#f97316] hover:bg-[#ea580c]" : "border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"}
            >
              <Code className="h-4 w-4 mr-1" /> HTML
            </Button>

            <div className="w-px h-6 bg-[#1c2333] mx-1" />

            <Button size="sm" onClick={copyHtml} className="bg-[#f97316] hover:bg-[#ea580c]">
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? "Copiado!" : "Copiar HTML"}
            </Button>
          </div>
        </div>
      </div>

      {/* Subject line */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3 bg-[#161b26] rounded-lg px-4 py-3 border border-[#1c2333]">
          <span className="text-xs text-gray-500 uppercase font-bold shrink-0">Assunto:</span>
          {viewMode === "code" ? (
            <input
              type="text"
              value={currentSubject}
              onChange={(e) => handleSubjectChange(e.target.value)}
              className="flex-1 bg-[#0d1117] border border-[#1c2333] rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-[#f97316]"
            />
          ) : (
            <span className="text-sm text-gray-200 flex-1">{currentSubject}</span>
          )}
          <button onClick={copySubject} className="text-xs text-[#f97316] hover:underline shrink-0">Copiar</button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        {viewMode === "preview" ? (
          <div className="rounded-lg overflow-hidden">
            <iframe
              srcDoc={currentHtml}
              title={`Email ${currentIndex + 1}`}
              className="w-full border-0"
              style={{ minHeight: "900px" }}
            />
          </div>
        ) : (
          <textarea
            value={currentHtml}
            onChange={(e) => handleHtmlChange(e.target.value)}
            className="w-full bg-[#161b26] rounded-lg p-6 text-xs text-gray-300 border border-[#1c2333] focus:outline-none focus:border-[#f97316] font-mono"
            style={{ minHeight: "80vh" }}
            spellCheck={false}
          />
        )}
      </div>
    </div>
  );
};

export default EmailTemplates;
