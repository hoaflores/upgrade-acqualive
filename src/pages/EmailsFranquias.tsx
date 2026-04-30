import { useState } from "react";
import { Copy, Check, Eye, Code, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EMAILS = [
  {
    day: "E-mail 1 — Convite Feira da Franquia POA",
    subject: "🎟️ Cortesia LIMITADA: conheça a Acqualive na maior feira de franquias do Sul",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acqualive Franquias — Feira da Franquia Porto Alegre</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;">

<!-- Header / Logo -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a2332 100%);padding:28px 34px 22px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="150" style="display:block;margin:0 auto;">
<p style="margin:14px 0 0;font-size:11px;letter-spacing:3px;color:#f97316;font-weight:700;">FRANQUIA SOLO • EXPANSÃO 2026</p>
</td></tr>

<!-- Hero Image -->
<tr><td style="padding:0;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/KNbHZLJGeBdnHFPM.webp" alt="Franqueada Acqualive em estande de feira de franquias" width="600" style="display:block;width:100%;height:auto;">
</td></tr>

<!-- Orange / Turquoise Accent Line -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:4px;background:linear-gradient(90deg,#f97316 0%,#fbbf24 50%,#22d3ee 100%);"></td></tr></table></td></tr>

<!-- Main Title -->
<tr><td style="padding:42px 40px 18px;">
<p style="margin:0 0 14px;font-size:12px;letter-spacing:2px;color:#22d3ee;font-weight:700;">VAGAS LIMITADAS</p>
<h1 style="margin:0 0 18px;font-size:30px;line-height:1.25;color:#ffffff;font-weight:800;">Quer abrir uma franquia no <span style="color:#f97316;">mercado que mais cresce</span> no Brasil?</h1>
<p style="margin:0;font-size:16px;line-height:1.75;color:#d1d5db;">A Acqualive vai estar em um dos <strong style="color:#ffffff;">maiores eventos de franquias do país</strong> — e você pode participar com a gente.</p>
</td></tr>

<!-- Body Copy -->
<tr><td style="padding:0 40px 24px;">
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">Nos próximos dias, vamos revelar como você pode entrar para um setor em plena expansão, com um produto premium e <strong style="color:#ffffff;">alto potencial de recorrência</strong>.</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">E tem mais.</p>
</td></tr>

<!-- Cortesia Highlight Box -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1a2332 0%,#14202e 100%);border:2px solid #f97316;border-radius:14px;">
<tr><td style="padding:28px 26px;text-align:center;">
<p style="margin:0 0 8px;font-size:32px;line-height:1;">🎟️</p>
<p style="margin:0 0 10px;font-size:18px;color:#f97316;font-weight:800;letter-spacing:0.5px;">CORTESIAS EXCLUSIVAS</p>
<p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#e5e7eb;">Conseguimos algumas <strong style="color:#ffffff;">cortesias exclusivas</strong> para o evento em <strong style="color:#22d3ee;">Porto Alegre</strong>.</p>
<p style="margin:0;font-size:13px;color:#fbbf24;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Atenção: são limitadas</p>
</td></tr>
</table>
</td></tr>

<!-- Quem é para -->
<tr><td style="padding:0 40px 12px;">
<h2 style="margin:0 0 18px;font-size:20px;color:#ffffff;font-weight:700;">Essa é a sua oportunidade se você quer:</h2>
</td></tr>

<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="padding:14px 0;border-bottom:1px solid #1e293b;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td width="32" valign="top" style="font-size:18px;color:#22d3ee;font-weight:900;">✔</td>
<td style="font-size:15px;line-height:1.7;color:#e5e7eb;">Ter um <strong style="color:#ffffff;">negócio próprio</strong></td>
</tr></table>
</td></tr>
<tr><td style="padding:14px 0;border-bottom:1px solid #1e293b;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td width="32" valign="top" style="font-size:18px;color:#22d3ee;font-weight:900;">✔</td>
<td style="font-size:15px;line-height:1.7;color:#e5e7eb;">Entrar em um mercado em <strong style="color:#ffffff;">crescimento</strong> (saúde e qualidade de vida)</td>
</tr></table>
</td></tr>
<tr><td style="padding:14px 0;border-bottom:1px solid #1e293b;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td width="32" valign="top" style="font-size:18px;color:#22d3ee;font-weight:900;">✔</td>
<td style="font-size:15px;line-height:1.7;color:#e5e7eb;">Conhecer de perto o <strong style="color:#ffffff;">modelo Acqualive</strong></td>
</tr></table>
</td></tr>
<tr><td style="padding:14px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td width="32" valign="top" style="font-size:18px;color:#22d3ee;font-weight:900;">✔</td>
<td style="font-size:15px;line-height:1.7;color:#e5e7eb;">Participar da <strong style="color:#ffffff;">Feira da Franquia</strong></td>
</tr></table>
</td></tr>
</table>
</td></tr>

<!-- Event Info Card -->
<tr><td style="padding:0 40px 30px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a1420;border:1px solid #1e293b;border-radius:12px;">
<tr><td style="padding:24px 26px;">
<p style="margin:0 0 16px;font-size:11px;letter-spacing:2px;color:#22d3ee;font-weight:700;">📍 ONDE & QUANDO</p>
<p style="margin:0 0 8px;font-size:18px;color:#ffffff;font-weight:800;">Feira da Franquia • Porto Alegre</p>
<p style="margin:0 0 6px;font-size:15px;color:#d1d5db;line-height:1.6;"><strong style="color:#f97316;">24 a 26 de abril</strong> &nbsp;•&nbsp; das 14h às 20h</p>
<p style="margin:0;font-size:15px;color:#d1d5db;line-height:1.6;">Barra Shopping Sul — Porto Alegre/RS</p>
</td></tr>
</table>
</td></tr>

<!-- Primary CTA -->
<tr><td style="padding:0 40px 24px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background:linear-gradient(135deg,#f97316 0%,#fb923c 100%);border-radius:12px;box-shadow:0 8px 24px rgba(249,115,22,0.4);">
<a href="https://wa.me/5551999038975?text=Ol%C3%A1%21%20Vi%20o%20e-mail%20da%20Acqualive%20e%20quero%20garantir%20minha%20cortesia%20para%20a%20Feira%20da%20Franquia%20em%20Porto%20Alegre%20%2824%20a%2026%2F4%29.%20Pode%20me%20enviar%20o%20convite%3F" target="_blank" style="display:inline-block;padding:20px 38px;font-size:16px;font-weight:800;color:#ffffff;text-decoration:none;letter-spacing:0.5px;text-transform:uppercase;">🎟️ Garantir minha cortesia →</a>
</td></tr>
</table>
<p style="margin:14px 0 0;font-size:12px;color:#94a3b8;">Clique e garanta sua cortesia antes que acabe.</p>
</td></tr>

<!-- Divider -->
<tr><td style="padding:8px 40px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:1px;background:#1e293b;"></td></tr></table></td></tr>

<!-- Secondary CTA: conhecer modelo -->
<tr><td style="padding:30px 40px 24px;">
<h2 style="margin:0 0 12px;font-size:20px;color:#ffffff;font-weight:700;text-align:center;">Não vai conseguir ir até Porto Alegre?</h2>
<p style="margin:0 0 22px;font-size:15px;line-height:1.75;color:#d1d5db;text-align:center;">Conheça o modelo de negócios Acqualive online — investimento a partir de <strong style="color:#22d3ee;">R$ 33.000</strong>, 100% convertido em produtos.</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="border:2px solid #22d3ee;border-radius:12px;">
<a href="https://franquias.acqualive.com.br" target="_blank" style="display:inline-block;padding:16px 32px;font-size:14px;font-weight:700;color:#22d3ee;text-decoration:none;letter-spacing:0.5px;text-transform:uppercase;">Conhecer o modelo Acqualive</a>
</td></tr>
</table>
</td></tr>

<!-- Stats Strip -->
<tr><td style="padding:24px 40px 36px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0a1420 0%,#101a28 100%);border-radius:12px;">
<tr>
<td width="33%" style="padding:22px 10px;text-align:center;border-right:1px solid #1e293b;">
<p style="margin:0 0 4px;font-size:24px;color:#f97316;font-weight:800;">15+</p>
<p style="margin:0;font-size:11px;color:#94a3b8;line-height:1.4;">Anos de mercado</p>
</td>
<td width="33%" style="padding:22px 10px;text-align:center;border-right:1px solid #1e293b;">
<p style="margin:0 0 4px;font-size:24px;color:#22d3ee;font-weight:800;">200k+</p>
<p style="margin:0;font-size:11px;color:#94a3b8;line-height:1.4;">Clientes satisfeitos</p>
</td>
<td width="34%" style="padding:22px 10px;text-align:center;">
<p style="margin:0 0 4px;font-size:24px;color:#fbbf24;font-weight:800;">16,5%</p>
<p style="margin:0;font-size:11px;color:#94a3b8;line-height:1.4;">Crescimento do setor (ABF)</p>
</td>
</tr>
</table>
</td></tr>

<!-- Signature -->
<tr><td style="padding:0 40px 30px;">
<p style="margin:0;font-size:15px;line-height:1.7;color:#d1d5db;">Te esperamos por lá,<br><strong style="color:#ffffff;">Equipe Acqualive Franquias</strong></p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;background:#0a1420;text-align:center;border-top:1px solid #1e293b;">
<p style="margin:0 0 6px;font-size:12px;color:#94a3b8;">© 2026 Acqualive — Líder em Filtros de Água Alcalina no Brasil</p>
<p style="margin:0;font-size:11px;color:#64748b;">Você recebeu este e-mail por demonstrar interesse no modelo de franquia Acqualive.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
  {
    day: "E-mail 2 — Retomada pós Feira da Franquia POA",
    subject: "Foi muito bom te conhecer na Feira da Franquia 💬 vamos conversar?",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acqualive Franquias — Retomada pós Feira</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0d1117;">

<!-- Header / Logo -->
<tr><td style="background:linear-gradient(135deg,#0d1117 0%,#1a2332 100%);padding:28px 34px 22px;text-align:center;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/noYGaqqpOTGvWHLS.png" alt="Acqualive" width="150" style="display:block;margin:0 auto;">
<p style="margin:14px 0 0;font-size:11px;letter-spacing:3px;color:#f97316;font-weight:700;">FRANQUIA SOLO • EXPANSÃO 2026</p>
</td></tr>

<!-- Hero Image -->
<tr><td style="padding:0;">
<img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663153389074/KNbHZLJGeBdnHFPM.webp" alt="Equipe Acqualive na Feira da Franquia" width="600" style="display:block;width:100%;height:auto;">
</td></tr>

<!-- Accent Line -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:4px;background:linear-gradient(90deg,#f97316 0%,#fbbf24 50%,#22d3ee 100%);"></td></tr></table></td></tr>

<!-- Main Title -->
<tr><td style="padding:42px 40px 18px;">
<p style="margin:0 0 14px;font-size:12px;letter-spacing:2px;color:#22d3ee;font-weight:700;">RETOMANDO O CONTATO</p>
<h1 style="margin:0 0 18px;font-size:30px;line-height:1.25;color:#ffffff;font-weight:800;">Foi muito bom <span style="color:#f97316;">te conhecer</span> na Feira da Franquia!</h1>
<p style="margin:0;font-size:16px;line-height:1.75;color:#d1d5db;">Olá! Aqui é a equipe de Expansão da <strong style="color:#ffffff;">Acqualive</strong>. Você passou pelo nosso estande na <strong style="color:#ffffff;">Feira da Franquia em Porto Alegre</strong> e deixou seu contato para conversarmos com mais calma sobre o nosso modelo de negócio.</p>
</td></tr>

<!-- Body Copy -->
<tr><td style="padding:0 40px 24px;">
<p style="margin:18px 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">Estamos retomando essa conversa porque acreditamos que faz sentido te enviar, com carinho, mais detalhes do que apresentamos por lá — e entender se a Acqualive pode ser o próximo passo do seu projeto de vida e de negócio.</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#d1d5db;">A ideia é simples: você nos conta um pouco do seu momento, a gente te mostra como o modelo funciona na prática, e juntos avaliamos se faz sentido avançarmos.</p>
</td></tr>

<!-- Highlight Box -->
<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1a2332 0%,#14202e 100%);border:2px solid #f97316;border-radius:14px;">
<tr><td style="padding:28px 26px;text-align:center;">
<p style="margin:0 0 8px;font-size:32px;line-height:1;">💬</p>
<p style="margin:0 0 10px;font-size:18px;color:#f97316;font-weight:800;letter-spacing:0.5px;">CONVERSA SEM COMPROMISSO</p>
<p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#e5e7eb;">Uma conversa rápida, <strong style="color:#ffffff;">por WhatsApp ou videochamada</strong>, para entender seu momento e te apresentar o modelo Acqualive em detalhes.</p>
<p style="margin:0;font-size:13px;color:#fbbf24;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Você escolhe o melhor horário</p>
</td></tr>
</table>
</td></tr>

<!-- O que vamos te mostrar -->
<tr><td style="padding:0 40px 12px;">
<h2 style="margin:0 0 18px;font-size:20px;color:#ffffff;font-weight:700;">Nessa conversa, vamos te mostrar:</h2>
</td></tr>

<tr><td style="padding:0 40px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="padding:14px 0;border-bottom:1px solid #1e293b;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td width="32" valign="top" style="font-size:18px;color:#22d3ee;font-weight:900;">✔</td>
<td style="font-size:15px;line-height:1.7;color:#e5e7eb;">Como funciona o <strong style="color:#ffffff;">modelo de Franquia Solo</strong> da Acqualive</td>
</tr></table>
</td></tr>
<tr><td style="padding:14px 0;border-bottom:1px solid #1e293b;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td width="32" valign="top" style="font-size:18px;color:#22d3ee;font-weight:900;">✔</td>
<td style="font-size:15px;line-height:1.7;color:#e5e7eb;">Investimento, <strong style="color:#ffffff;">retorno previsto</strong> e como a recorrência acontece</td>
</tr></table>
</td></tr>
<tr><td style="padding:14px 0;border-bottom:1px solid #1e293b;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td width="32" valign="top" style="font-size:18px;color:#22d3ee;font-weight:900;">✔</td>
<td style="font-size:15px;line-height:1.7;color:#e5e7eb;">O <strong style="color:#ffffff;">suporte completo</strong> que você recebe da nossa equipe</td>
</tr></table>
</td></tr>
<tr><td style="padding:14px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td width="32" valign="top" style="font-size:18px;color:#22d3ee;font-weight:900;">✔</td>
<td style="font-size:15px;line-height:1.7;color:#e5e7eb;">Histórias reais de quem <strong style="color:#ffffff;">já é franqueado</strong> e está crescendo com a gente</td>
</tr></table>
</td></tr>
</table>
</td></tr>

<!-- Primary CTA -->
<tr><td style="padding:8px 40px 24px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="background:linear-gradient(135deg,#f97316 0%,#fb923c 100%);border-radius:12px;box-shadow:0 8px 24px rgba(249,115,22,0.4);">
<a href="https://wa.me/5551999038975?text=Ol%C3%A1%21%20Estive%20no%20estande%20da%20Acqualive%20na%20Feira%20da%20Franquia%20em%20Porto%20Alegre%20e%20gostaria%20de%20retomar%20a%20conversa%20sobre%20a%20franquia." target="_blank" style="display:inline-block;padding:20px 38px;font-size:16px;font-weight:800;color:#ffffff;text-decoration:none;letter-spacing:0.5px;text-transform:uppercase;">💬 Quero retomar a conversa →</a>
</td></tr>
</table>
<p style="margin:14px 0 0;font-size:12px;color:#94a3b8;">Atendimento direto pelo WhatsApp com nosso time de Expansão.</p>
</td></tr>

<!-- Divider -->
<tr><td style="padding:8px 40px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:1px;background:#1e293b;"></td></tr></table></td></tr>

<!-- Secondary CTA -->
<tr><td style="padding:30px 40px 24px;">
<h2 style="margin:0 0 12px;font-size:20px;color:#ffffff;font-weight:700;text-align:center;">Prefere conhecer o modelo antes?</h2>
<p style="margin:0 0 22px;font-size:15px;line-height:1.75;color:#d1d5db;text-align:center;">Sem problema. Você pode acessar a apresentação completa, com investimento, suporte e projeções, no nosso site oficial de franquias.</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
<tr><td style="border:2px solid #22d3ee;border-radius:12px;">
<a href="https://franquias.acqualive.com.br" target="_blank" style="display:inline-block;padding:16px 32px;font-size:14px;font-weight:700;color:#22d3ee;text-decoration:none;letter-spacing:0.5px;text-transform:uppercase;">Conhecer o modelo Acqualive</a>
</td></tr>
</table>
</td></tr>

<!-- Stats Strip -->
<tr><td style="padding:24px 40px 36px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0a1420 0%,#101a28 100%);border-radius:12px;">
<tr>
<td width="33%" style="padding:22px 10px;text-align:center;border-right:1px solid #1e293b;">
<p style="margin:0 0 4px;font-size:24px;color:#f97316;font-weight:800;">15+</p>
<p style="margin:0;font-size:11px;color:#94a3b8;line-height:1.4;">Anos de mercado</p>
</td>
<td width="33%" style="padding:22px 10px;text-align:center;border-right:1px solid #1e293b;">
<p style="margin:0 0 4px;font-size:24px;color:#22d3ee;font-weight:800;">200k+</p>
<p style="margin:0;font-size:11px;color:#94a3b8;line-height:1.4;">Clientes satisfeitos</p>
</td>
<td width="34%" style="padding:22px 10px;text-align:center;">
<p style="margin:0 0 4px;font-size:24px;color:#fbbf24;font-weight:800;">16,5%</p>
<p style="margin:0;font-size:11px;color:#94a3b8;line-height:1.4;">Crescimento do setor (ABF)</p>
</td>
</tr>
</table>
</td></tr>

<!-- Signature -->
<tr><td style="padding:0 40px 30px;">
<p style="margin:0;font-size:15px;line-height:1.7;color:#d1d5db;">Ficamos no aguardo do seu retorno,<br><strong style="color:#ffffff;">Equipe Acqualive Franquias</strong><br><span style="color:#94a3b8;font-size:13px;">Time de Expansão</span></p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;background:#0a1420;text-align:center;border-top:1px solid #1e293b;">
<p style="margin:0 0 6px;font-size:12px;color:#94a3b8;">© 2026 Acqualive — Líder em Filtros de Água Alcalina no Brasil</p>
<p style="margin:0;font-size:11px;color:#64748b;">Você recebeu este e-mail por ter deixado seu contato no estande da Acqualive na Feira da Franquia.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  },
];

const EmailsFranquias = () => {
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
            <h1 className="text-sm font-bold text-[#f97316]">Franquias {currentIndex + 1}/{EMAILS.length}</h1>
            <span className="text-sm text-gray-400 hidden sm:inline">{email.day}</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
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
              style={{ minHeight: "1100px" }}
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

export default EmailsFranquias;
