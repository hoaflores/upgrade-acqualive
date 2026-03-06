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
<body style="margin:0;padding:0;background-color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
<tr><td align="center" style="padding:20px 0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;border-radius:12px;overflow:hidden;">

<!-- Header -->
<tr><td style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #1c2333;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="180" style="display:block;margin:0 auto;">
</td></tr>

<!-- Hero -->
<tr><td style="padding:40px 40px 24px;">
<p style="margin:0 0 8px;font-size:13px;color:#f97316;text-transform:uppercase;letter-spacing:2px;font-weight:700;">Franquia Solo</p>
<h1 style="margin:0 0 20px;font-size:28px;line-height:1.3;color:#ffffff;">Você já tem o filtro.<br><span style="color:#f97316;">E se pudesse lucrar com ele?</span></h1>
<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#9ca3af;">Olá,</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#9ca3af;">Você já conhece a qualidade da água Acqualive. Sabe a diferença que faz na saúde, no sabor e no dia a dia da sua família.</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#9ca3af;">Agora imagine <strong style="color:#ffffff;">transformar essa experiência em um negócio lucrativo</strong> — sem precisar de loja física, sem funcionários, trabalhando no seu ritmo.</p>
<p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#9ca3af;">Essa é a <strong style="color:#ffffff;">Franquia Solo Acqualive</strong>: o modelo perfeito para quem já vive a marca e quer empreender com ela.</p>
</td></tr>

<!-- Stats -->
<tr><td style="padding:0 40px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="33%" style="text-align:center;padding:20px 8px;background-color:#161b26;border-radius:8px;">
<p style="margin:0;font-size:28px;font-weight:800;color:#f97316;">15+</p>
<p style="margin:4px 0 0;font-size:12px;color:#6b7280;">Anos de mercado</p>
</td>
<td width="8"></td>
<td width="33%" style="text-align:center;padding:20px 8px;background-color:#161b26;border-radius:8px;">
<p style="margin:0;font-size:28px;font-weight:800;color:#f97316;">200k+</p>
<p style="margin:4px 0 0;font-size:12px;color:#6b7280;">Clientes satisfeitos</p>
</td>
<td width="8"></td>
<td width="33%" style="text-align:center;padding:20px 8px;background-color:#161b26;border-radius:8px;">
<p style="margin:0;font-size:28px;font-weight:800;color:#f97316;">R$30k</p>
<p style="margin:4px 0 0;font-size:12px;color:#6b7280;">Investimento inicial</p>
</td>
</tr>
</table>
</td></tr>

<!-- CTA -->
<tr><td style="padding:0 40px 40px;text-align:center;">
<a href="https://franquias.acqualive.com.br/solo" target="_blank" style="display:inline-block;padding:16px 40px;background-color:#f97316;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;border-radius:8px;letter-spacing:0.5px;">QUERO CONHECER O MODELO SOLO →</a>
<p style="margin:16px 0 0;font-size:13px;color:#6b7280;">Nos próximos dias, vou te mostrar os números e depoimentos de quem já faz parte.</p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;background-color:#0a0e14;text-align:center;border-top:1px solid #1c2333;">
<p style="margin:0;font-size:12px;color:#4b5563;">© 2025 Acqualive. Todos os direitos reservados.</p>
<p style="margin:8px 0 0;font-size:12px;color:#4b5563;">Você recebeu este email porque é cliente Acqualive.</p>
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
<body style="margin:0;padding:0;background-color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
<tr><td align="center" style="padding:20px 0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;border-radius:12px;overflow:hidden;">

<!-- Header -->
<tr><td style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #1c2333;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="180" style="display:block;margin:0 auto;">
</td></tr>

<!-- Hero -->
<tr><td style="padding:40px 40px 16px;">
<p style="margin:0 0 8px;font-size:13px;color:#f97316;text-transform:uppercase;letter-spacing:2px;font-weight:700;">Dados Oficiais ABF 2024</p>
<h1 style="margin:0 0 20px;font-size:28px;line-height:1.3;color:#ffffff;">Os números não mentem:<br><span style="color:#f97316;">este mercado só cresce.</span></h1>
<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#9ca3af;">Na segunda, te contei sobre a Franquia Solo. Hoje quero te mostrar <strong style="color:#ffffff;">por que este é o momento certo</strong> para começar.</p>
</td></tr>

<!-- Market Data -->
<tr><td style="padding:0 40px 24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="48%" style="padding:24px;background-color:#161b26;border-radius:8px;border-left:4px solid #f97316;">
<p style="margin:0;font-size:36px;font-weight:800;color:#f97316;">16,5%</p>
<p style="margin:4px 0 0;font-size:14px;color:#9ca3af;">Crescimento do setor de<br>Saúde e Bem-Estar em 2024</p>
</td>
<td width="4%"></td>
<td width="48%" style="padding:24px;background-color:#161b26;border-radius:8px;border-left:4px solid #f97316;">
<p style="margin:0;font-size:36px;font-weight:800;color:#f97316;">R$64,8</p>
<p style="margin:4px 0 0;font-size:14px;color:#9ca3af;">Bilhões em faturamento<br>no setor de Franquias</p>
</td>
</tr>
</table>
</td></tr>

<!-- Returns -->
<tr><td style="padding:0 40px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#161b26;border-radius:8px;overflow:hidden;">
<tr><td style="padding:28px 24px;">
<h2 style="margin:0 0 20px;font-size:20px;color:#ffffff;text-align:center;">💰 Seus ganhos como Franqueado Solo</h2>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td style="padding:12px 0;border-bottom:1px solid #1c2333;">
<p style="margin:0;font-size:14px;color:#6b7280;">Payback médio</p>
</td>
<td style="padding:12px 0;border-bottom:1px solid #1c2333;text-align:right;">
<p style="margin:0;font-size:16px;font-weight:700;color:#f97316;">6 a 18 meses</p>
</td>
</tr>
<tr>
<td style="padding:12px 0;border-bottom:1px solid #1c2333;">
<p style="margin:0;font-size:14px;color:#6b7280;">Lucratividade</p>
</td>
<td style="padding:12px 0;border-bottom:1px solid #1c2333;text-align:right;">
<p style="margin:0;font-size:16px;font-weight:700;color:#f97316;">18% a 25%</p>
</td>
</tr>
<tr>
<td style="padding:12px 0;border-bottom:1px solid #1c2333;">
<p style="margin:0;font-size:14px;color:#6b7280;">Renda por cliente/ano</p>
</td>
<td style="padding:12px 0;border-bottom:1px solid #1c2333;text-align:right;">
<p style="margin:0;font-size:16px;font-weight:700;color:#f97316;">R$ 850</p>
</td>
</tr>
<tr>
<td style="padding:12px 0;">
<p style="margin:0;font-size:14px;color:#6b7280;">Investimento</p>
</td>
<td style="padding:12px 0;text-align:right;">
<p style="margin:0;font-size:16px;font-weight:700;color:#f97316;">A partir de R$ 30k</p>
</td>
</tr>
</table>
</td></tr>
</table>
</td></tr>

<!-- Highlight -->
<tr><td style="padding:0 40px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1a2332,#0d1117);border:1px solid #f97316;border-radius:8px;">
<tr><td style="padding:24px;text-align:center;">
<p style="margin:0;font-size:18px;color:#ffffff;line-height:1.5;"><strong>100% do valor investido</strong> é convertido em produtos.<br><span style="color:#f97316;font-weight:700;">Sem taxa de franquia!</span></p>
</td></tr>
</table>
</td></tr>

<!-- CTA -->
<tr><td style="padding:0 40px 40px;text-align:center;">
<a href="https://franquias.acqualive.com.br/solo" target="_blank" style="display:inline-block;padding:16px 40px;background-color:#f97316;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;border-radius:8px;">QUERO SABER MAIS SOBRE A FRANQUIA →</a>
<p style="margin:16px 0 0;font-size:13px;color:#6b7280;">Amanhã vou te apresentar histórias de quem já está lucrando.</p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;background-color:#0a0e14;text-align:center;border-top:1px solid #1c2333;">
<p style="margin:0;font-size:11px;color:#4b5563;">Fonte: Associação Brasileira de Franchising (ABF) - Relatório 2024</p>
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
    subject: "\"Em 2 anos recuperei todo o investimento\" — Roberto, Franqueado Solo",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Franquia Solo - Depoimentos</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
<tr><td align="center" style="padding:20px 0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;border-radius:12px;overflow:hidden;">

<!-- Header -->
<tr><td style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #1c2333;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="180" style="display:block;margin:0 auto;">
</td></tr>

<!-- Hero -->
<tr><td style="padding:40px 40px 16px;">
<p style="margin:0 0 8px;font-size:13px;color:#f97316;text-transform:uppercase;letter-spacing:2px;font-weight:700;">Histórias de Sucesso</p>
<h1 style="margin:0 0 20px;font-size:28px;line-height:1.3;color:#ffffff;">Quem já faz parte<br><span style="color:#f97316;">recomenda.</span></h1>
<p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#9ca3af;">Hoje quero que você conheça pessoas reais que deram o passo e <strong style="color:#ffffff;">transformaram suas vidas com a Franquia Solo</strong>.</p>
</td></tr>

<!-- Testimonial 1 -->
<tr><td style="padding:0 40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#161b26;border-radius:8px;border-left:4px solid #f97316;">
<tr><td style="padding:24px;">
<p style="margin:0 0 12px;font-size:24px;">⭐⭐⭐⭐⭐</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#d1d5db;font-style:italic;">"Saí do mundo corporativo e hoje tenho minha própria franquia Acqualive. Em 2 anos, já recuperei todo o investimento e construí uma renda passiva que me dá liberdade."</p>
<p style="margin:0;font-size:14px;font-weight:700;color:#ffffff;">Roberto Fernandes</p>
<p style="margin:2px 0 0;font-size:13px;color:#f97316;">Franqueado há 3 anos</p>
</td></tr>
</table>
</td></tr>

<!-- Testimonial 2 -->
<tr><td style="padding:0 40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#161b26;border-radius:8px;border-left:4px solid #f97316;">
<tr><td style="padding:24px;">
<p style="margin:0 0 12px;font-size:24px;">⭐⭐⭐⭐⭐</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#d1d5db;font-style:italic;">"A Acqualive transformou minha forma de me hidratar. A água alcalina é fundamental para minha performance e recuperação. Recomendo para todos que buscam qualidade de vida."</p>
<p style="margin:0;font-size:14px;font-weight:700;color:#ffffff;">Lyoto Machida</p>
<p style="margin:2px 0 0;font-size:13px;color:#f97316;">Campeão UFC</p>
</td></tr>
</table>
</td></tr>

<!-- How it works -->
<tr><td style="padding:16px 40px 32px;">
<h2 style="margin:0 0 20px;font-size:22px;color:#ffffff;text-align:center;">Como funciona a Franquia Solo?</h2>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td style="padding:16px;background-color:#161b26;border-radius:8px;vertical-align:top;" width="48%">
<p style="margin:0 0 8px;font-size:28px;">📦</p>
<p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#ffffff;">Enxoval de Produtos</p>
<p style="margin:0;font-size:13px;line-height:1.5;color:#6b7280;">Seu investimento volta em purificadores para vender e lucrar.</p>
</td>
<td width="4%"></td>
<td style="padding:16px;background-color:#161b26;border-radius:8px;vertical-align:top;" width="48%">
<p style="margin:0 0 8px;font-size:28px;">🏷️</p>
<p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#ffffff;">Direito de Uso da Marca</p>
<p style="margin:0;font-size:13px;line-height:1.5;color:#6b7280;">Utilize a força da Acqualive para fechar negócios.</p>
</td>
</tr>
<tr><td colspan="3" style="height:12px;"></td></tr>
<tr>
<td style="padding:16px;background-color:#161b26;border-radius:8px;vertical-align:top;" width="48%">
<p style="margin:0 0 8px;font-size:28px;">📊</p>
<p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#ffffff;">Tabela Comercial Exclusiva</p>
<p style="margin:0;font-size:13px;line-height:1.5;color:#6b7280;">Margens agressivas para recuperar o investimento rápido.</p>
</td>
<td width="4%"></td>
<td style="padding:16px;background-color:#161b26;border-radius:8px;vertical-align:top;" width="48%">
<p style="margin:0 0 8px;font-size:28px;">🚀</p>
<p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#ffffff;">Modelo Escalável</p>
<p style="margin:0;font-size:13px;line-height:1.5;color:#6b7280;">Comece sozinho e monte sua equipe quando quiser.</p>
</td>
</tr>
</table>
</td></tr>

<!-- CTA -->
<tr><td style="padding:0 40px 40px;text-align:center;">
<a href="https://franquias.acqualive.com.br/solo" target="_blank" style="display:inline-block;padding:16px 40px;background-color:#f97316;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;border-radius:8px;">QUERO SER UM FRANQUEADO →</a>
<p style="margin:16px 0 0;font-size:13px;color:#6b7280;">No sábado, uma surpresa especial para você. Fique atento!</p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;background-color:#0a0e14;text-align:center;border-top:1px solid #1c2333;">
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
    subject: "⚡ Oferta exclusiva: Franquia Solo SEM taxa de franquia — só até esta semana",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Franquia Solo - Oferta Exclusiva</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
<tr><td align="center" style="padding:20px 0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;border-radius:12px;overflow:hidden;">

<!-- Header -->
<tr><td style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #1c2333;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="180" style="display:block;margin:0 auto;">
</td></tr>

<!-- Urgency Banner -->
<tr><td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#f97316,#ea580c);">
<tr><td style="padding:16px;text-align:center;">
<p style="margin:0;font-size:14px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:1px;">⚡ Campanha por tempo limitado ⚡</p>
</td></tr>
</table>
</td></tr>

<!-- Hero -->
<tr><td style="padding:40px 40px 16px;">
<p style="margin:0 0 8px;font-size:13px;color:#f97316;text-transform:uppercase;letter-spacing:2px;font-weight:700;">Oferta Exclusiva</p>
<h1 style="margin:0 0 20px;font-size:28px;line-height:1.3;color:#ffffff;">Esta semana, sua chance de empreender <span style="color:#f97316;">sem taxa de franquia.</span></h1>
<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#9ca3af;">Ao longo desta semana, você viu:</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
<tr><td style="padding:4px 0;font-size:15px;color:#d1d5db;">✅ Como a Franquia Solo funciona sem loja física</td></tr>
<tr><td style="padding:4px 0;font-size:15px;color:#d1d5db;">✅ O mercado crescendo 16,5% ao ano</td></tr>
<tr><td style="padding:4px 0;font-size:15px;color:#d1d5db;">✅ Franqueados recuperando investimento em até 18 meses</td></tr>
</table>
<p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#9ca3af;">Agora, <strong style="color:#ffffff;">a melhor parte</strong>:</p>
</td></tr>

<!-- Offer Box -->
<tr><td style="padding:0 40px 24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#161b26;border:2px solid #f97316;border-radius:12px;overflow:hidden;">
<tr><td style="padding:32px;text-align:center;">
<p style="margin:0 0 4px;font-size:13px;color:#6b7280;text-transform:uppercase;">Franquia Solo Acqualive</p>
<p style="margin:0 0 16px;font-size:14px;color:#f97316;font-weight:600;">OFERTA EXCLUSIVA</p>
<p style="margin:0 0 4px;font-size:16px;color:#9ca3af;">A partir de</p>
<p style="margin:0 0 20px;font-size:42px;font-weight:800;color:#ffffff;">R$ 30 mil</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 20px;">
<tr><td style="padding:6px 0;font-size:14px;color:#d1d5db;">✓ <strong>100% do investimento</strong> convertido em produtos</td></tr>
<tr><td style="padding:6px 0;font-size:14px;color:#d1d5db;">✓ <strong>Sem loja física</strong> — trabalhe de qualquer lugar</td></tr>
<tr><td style="padding:6px 0;font-size:14px;color:#d1d5db;">✓ <strong>Treinamento completo</strong> e suporte contínuo</td></tr>
<tr><td style="padding:6px 0;font-size:14px;color:#d1d5db;">✓ <strong>Material de marketing</strong> profissional</td></tr>
<tr><td style="padding:6px 0;font-size:14px;color:#d1d5db;">✓ <strong>Mentoria</strong> com franqueados de sucesso</td></tr>
</table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
<tr>
<td width="33%" style="text-align:center;padding:12px 4px;background-color:#0d1117;border-radius:6px;">
<p style="margin:0;font-size:16px;font-weight:700;color:#f97316;">6-18 meses</p>
<p style="margin:2px 0 0;font-size:11px;color:#6b7280;">Payback</p>
</td>
<td width="2%"></td>
<td width="33%" style="text-align:center;padding:12px 4px;background-color:#0d1117;border-radius:6px;">
<p style="margin:0;font-size:16px;font-weight:700;color:#f97316;">18-25%</p>
<p style="margin:2px 0 0;font-size:11px;color:#6b7280;">Lucratividade</p>
</td>
<td width="2%"></td>
<td width="33%" style="text-align:center;padding:12px 4px;background-color:#0d1117;border-radius:6px;">
<p style="margin:0;font-size:16px;font-weight:700;color:#f97316;">R$850</p>
<p style="margin:2px 0 0;font-size:11px;color:#6b7280;">Renda/cliente/ano</p>
</td>
</tr>
</table>
</td></tr>
</table>
</td></tr>

<!-- Final CTA -->
<tr><td style="padding:0 40px 16px;text-align:center;">
<a href="https://franquias.acqualive.com.br/solo" target="_blank" style="display:inline-block;padding:18px 48px;background-color:#f97316;color:#ffffff;text-decoration:none;font-size:18px;font-weight:700;border-radius:8px;letter-spacing:0.5px;">QUERO GARANTIR MINHA VAGA →</a>
</td></tr>
<tr><td style="padding:0 40px 12px;text-align:center;">
<p style="margin:0;font-size:13px;color:#6b7280;">Últimas vagas disponíveis para sua região</p>
</td></tr>
<tr><td style="padding:0 40px 40px;text-align:center;">
<a href="https://wa.me/554391280555?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Franquia%20Solo%20Acqualive" target="_blank" style="display:inline-block;padding:14px 32px;background-color:#25d366;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;border-radius:8px;">💬 Ou fale direto no WhatsApp</a>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;background-color:#0a0e14;text-align:center;border-top:1px solid #1c2333;">
<p style="margin:0;font-size:12px;color:#4b5563;">© 2025 Acqualive. Todos os direitos reservados.</p>
<p style="margin:8px 0 0;font-size:12px;color:#4b5563;">Você recebeu este email porque é cliente Acqualive.</p>
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
            <span className="text-sm text-gray-400">— {email.day}</span>
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
          <div className="bg-white rounded-lg overflow-hidden">
            <iframe
              srcDoc={email.html}
              title={`Email ${currentIndex + 1}`}
              className="w-full border-0"
              style={{ minHeight: "800px" }}
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
