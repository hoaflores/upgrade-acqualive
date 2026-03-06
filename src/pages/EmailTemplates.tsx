import { useState } from "react";
import { Copy, Check, Eye, Code, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EMAILS = [
  {
    day: "Segunda-feira",
    subject: "Você já tem o filtro… e se pudesse lucrar com ele?",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Franquia Solo Acqualive</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;overflow:hidden;">

<!-- Header with gradient -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a2332 100%);padding:32px 40px 24px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="160" style="display:block;margin:0 auto;">
</td></tr>

<!-- Hero Image -->
<tr><td style="padding:0;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/KNbHZLJGeBdnHFPM.webp" alt="Franqueada Acqualive" width="600" style="display:block;width:100%;height:auto;">
</td></tr>

<!-- Orange Accent Line -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:4px;background:linear-gradient(90deg,#f97316,#fbbf24,#f97316);"></td></tr></table></td></tr>

<!-- Content -->
<tr><td style="padding:40px 40px 24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="text-align:center;padding-bottom:24px;">
<p style="margin:0;display:inline-block;padding:6px 20px;background-color:#f97316;color:#ffffff;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;border-radius:20px;">Franquia Solo</p>
</td></tr>
</table>
<h1 style="margin:0 0 24px;font-size:30px;line-height:1.3;color:#ffffff;text-align:center;">Você já tem o filtro.<br><span style="color:#f97316;">E se pudesse lucrar com ele?</span></h1>

<!-- Divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:0 0 24px;text-align:center;"><table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td style="width:40px;height:2px;background-color:#f97316;"></td><td style="width:12px;"></td><td style="width:8px;height:8px;border-radius:50%;background-color:#f97316;"></td><td style="width:12px;"></td><td style="width:40px;height:2px;background-color:#f97316;"></td></tr></table></td></tr></table>

<p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#d1d5db;">Olá!</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#d1d5db;">Você já conhece a qualidade da água Acqualive. Sabe a diferença que faz na saúde, no sabor e no dia a dia da sua família.</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#d1d5db;">Agora imagine <strong style="color:#ffffff;">transformar essa experiência em um negócio lucrativo</strong>, sem precisar de loja física, sem funcionários, trabalhando no seu ritmo.</p>
</td></tr>

<!-- Highlight Box -->
<tr><td style="padding:0 40px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;">
<tr><td style="padding:28px;text-align:center;">
<p style="margin:0;font-size:18px;line-height:1.5;color:#ffffff;">Essa é a <strong style="color:#f97316;">Franquia Solo Acqualive</strong>:<br>o modelo perfeito para quem já vive a marca<br>e quer empreender com ela.</p>
</td></tr>
</table>
</td></tr>

<!-- Stats with visual cards -->
<tr><td style="padding:0 40px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="32%" style="text-align:center;padding:24px 8px;background:linear-gradient(180deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;">
<p style="margin:0 0 4px;font-size:32px;font-weight:800;color:#f97316;">15+</p>
<p style="margin:0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">Anos de<br>mercado</p>
</td>
<td width="2%"></td>
<td width="32%" style="text-align:center;padding:24px 8px;background:linear-gradient(180deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;">
<p style="margin:0 0 4px;font-size:32px;font-weight:800;color:#f97316;">200k+</p>
<p style="margin:0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">Clientes<br>satisfeitos</p>
</td>
<td width="2%"></td>
<td width="32%" style="text-align:center;padding:24px 8px;background:linear-gradient(180deg,#1e293b,#0f172a);border-radius:12px;border:1px solid #334155;">
<p style="margin:0 0 4px;font-size:32px;font-weight:800;color:#f97316;">R$30k</p>
<p style="margin:0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">Investimento<br>inicial</p>
</td>
</tr>
</table>
</td></tr>

<!-- CTA -->
<tr><td style="padding:0 40px 16px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background:linear-gradient(135deg,#f97316,#ea580c);border-radius:10px;padding:2px;">
<a href="https://franquias.acqualive.com.br/solo" target="_blank" style="display:block;padding:16px 44px;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;letter-spacing:0.5px;">QUERO CONHECER O MODELO SOLO</a>
</td></tr>
</table>
</td></tr>
<tr><td style="padding:0 40px 40px;text-align:center;">
<p style="margin:0;font-size:13px;color:#64748b;">Nos próximos dias, vou te mostrar os números e depoimentos de quem já faz parte.</p>
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
<div style="position:relative;display:inline-block;width:100%;max-width:600px;">
<img src="${window.location.origin}/images/video-thumb-solo.png" alt="Assista ao depoimento" width="600" style="display:block;width:100%;height:auto;">
<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/120px-YouTube_full-color_icon_%282017%29.svg.png" alt="Play" width="68" style="display:block;">
</div>
</div>
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
];

const EmailTemplates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const email = EMAILS[currentIndex];

  const copyHtml = async () => {
    await navigator.clipboard.writeText(email.html);
    setCopied(true);
    toast.success("HTML copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2000);
  };

  const copySubject = async () => {
    await navigator.clipboard.writeText(email.subject);
    toast.success("Assunto copiado!");
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-[#161b26] border-b border-[#1c2333] px-4 py-3">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-sm font-bold text-[#f97316]">Email {currentIndex + 1}/4</h1>
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
              onClick={() => setCurrentIndex(Math.min(3, currentIndex + 1))}
              disabled={currentIndex === 3}
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
          <span className="text-sm text-gray-200 flex-1">{email.subject}</span>
          <button onClick={copySubject} className="text-xs text-[#f97316] hover:underline shrink-0">Copiar</button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        {viewMode === "preview" ? (
          <div className="rounded-lg overflow-hidden">
            <iframe
              srcDoc={email.html}
              title={`Email ${currentIndex + 1}`}
              className="w-full border-0"
              style={{ minHeight: "900px" }}
            />
          </div>
        ) : (
          <pre className="bg-[#161b26] rounded-lg p-6 overflow-x-auto text-xs text-gray-300 border border-[#1c2333]" style={{ maxHeight: "80vh" }}>
            {email.html}
          </pre>
        )}
      </div>
    </div>
  );
};

export default EmailTemplates;
