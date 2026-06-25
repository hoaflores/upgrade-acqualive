import { useState } from "react";
import { Copy, Check, Eye, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SUBJECT = "A água que sustenta a sua rotina de alta performance";

const HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acqualive x Mãe Nutrida Experience</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0a0a0a;">

<!-- Co-branded header -->
<tr><td style="background-color:#000000;padding:28px 34px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="left" style="vertical-align:middle;">
<img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-logo-white.png" alt="Acqualive" width="130" style="display:block;">
</td>
<td align="right" style="vertical-align:middle;">
<span style="display:inline-block;padding:8px 14px;background-color:#C5F542;color:#0a0a0a;font-size:11px;font-weight:800;letter-spacing:1px;border-radius:999px;text-transform:uppercase;">Mãe Nutrida Experience</span>
</td>
</tr>
</table>
</td></tr>

<!-- Hero -->
<tr><td style="background:radial-gradient(circle at 70% 30%, rgba(197,245,66,0.25) 0%, rgba(0,0,0,0) 60%), #000000;padding:56px 40px 48px;text-align:left;">
<p style="margin:0 0 18px;font-size:12px;font-weight:700;letter-spacing:2px;color:#C5F542;text-transform:uppercase;">Benefício exclusivo</p>
<h1 style="margin:0 0 18px;font-size:34px;line-height:1.15;color:#ffffff;font-weight:800;">A água que sustenta a sua rotina de <span style="color:#C5F542;">alta performance</span>.</h1>
<p style="margin:0;font-size:16px;line-height:1.7;color:#d4d4d4;">Quem lidera pessoas, empresas e famílias sabe que energia, foco e bem-estar não acontecem por acaso. Começam por algo básico que quase ninguém questiona: a qualidade da água que você bebe todos os dias.</p>
</td></tr>

<!-- Neon divider -->
<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:4px;background:linear-gradient(90deg,#C5F542,#9FD729,#C5F542);"></td></tr></table></td></tr>

<!-- Intro Bloco 1 -->
<tr><td style="padding:44px 40px 8px;">
<h2 style="margin:0 0 16px;font-size:22px;line-height:1.35;color:#ffffff;font-weight:700;">A água está em praticamente tudo que acontece no seu corpo.</h2>
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#cfcfcf;">Da clareza mental nas decisões do dia, à recuperação no fim da jornada. Da digestão de cada refeição, ao humor com quem você ama.</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#cfcfcf;">Mesmo assim, a maioria das mulheres de alta performance ainda bebe água com <strong style="color:#ffffff;">cloro, microplásticos e resíduos de tratamento</strong> sem saber. Ou troca por garrafas plásticas, em uma rotina cara, pouco prática e ambientalmente questionável.</p>
</td></tr>

<!-- 3 pilares -->
<tr><td style="padding:24px 40px 8px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #1f1f1f;border-radius:14px;background-color:#0f0f0f;">

<tr><td style="padding:22px 24px;border-bottom:1px solid #1a1a1a;">
<p style="margin:0 0 6px;font-size:13px;font-weight:800;color:#C5F542;letter-spacing:1px;text-transform:uppercase;">01 . Pura</p>
<p style="margin:0;font-size:15px;line-height:1.7;color:#d4d4d4;">Remove cloro, metais pesados, microplásticos e mais de 80 contaminantes da água da torneira.</p>
</td></tr>

<tr><td style="padding:22px 24px;border-bottom:1px solid #1a1a1a;">
<p style="margin:0 0 6px;font-size:13px;font-weight:800;color:#C5F542;letter-spacing:1px;text-transform:uppercase;">02 . Alcalina</p>
<p style="margin:0;font-size:15px;line-height:1.7;color:#d4d4d4;">pH equilibrado, que combina com uma rotina de movimento, alimentação consciente e descanso de qualidade.</p>
</td></tr>

<tr><td style="padding:22px 24px;">
<p style="margin:0 0 6px;font-size:13px;font-weight:800;color:#C5F542;letter-spacing:1px;text-transform:uppercase;">03 . Mineralizada</p>
<p style="margin:0;font-size:15px;line-height:1.7;color:#d4d4d4;">Devolve à água minerais essenciais como magnésio, cálcio e potássio, que sustentam disposição e foco no dia a dia.</p>
</td></tr>

</table>
</td></tr>

<!-- Quote -->
<tr><td style="padding:36px 40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td style="width:4px;background-color:#C5F542;border-radius:2px;"></td>
<td style="padding:6px 24px;">
<p style="margin:0;font-size:18px;line-height:1.6;color:#ffffff;font-style:italic;">"Pequenas escolhas, repetidas todos os dias, constroem como você se sente, se entrega e lidera."</p>
</td>
</tr>
</table>
</td></tr>

<!-- Conexão MN -->
<tr><td style="padding:28px 40px 8px;">
<h2 style="margin:0 0 14px;font-size:22px;line-height:1.35;color:#ffffff;font-weight:700;">Por que isso conversa com a Mãe Nutrida Experience?</h2>
<p style="margin:0 0 16px;font-size:16px;line-height:1.8;color:#cfcfcf;">Porque a proposta é a mesma: cuidar do que é essencial, com critério, ciência e leveza. A Acqualive entra como a base silenciosa da sua rotina, a hidratação que sustenta cada um dos seus outros hábitos de saúde e bem-estar.</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.8;color:#cfcfcf;">Sem galão pesado. Sem garrafa plástica. Sem dúvida sobre o que está dentro do copo.</p>
</td></tr>

<!-- Oferta Card -->
<tr><td style="padding:32px 40px 8px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#C5F542 0%,#9FD729 100%);border-radius:18px;">
<tr><td style="padding:32px 28px;text-align:center;">
<p style="margin:0 0 10px;font-size:12px;font-weight:800;letter-spacing:2px;color:#0a0a0a;text-transform:uppercase;">Cupom exclusivo</p>
<p style="margin:0 0 14px;font-size:36px;font-weight:900;color:#0a0a0a;letter-spacing:3px;">MAENUTRIDA</p>
<p style="margin:0 0 22px;font-size:14px;line-height:1.6;color:#0a0a0a;">Benefício especial para participantes da Mãe Nutrida Experience na linha completa de purificadores Acqualive.</p>
<table role="presentation" cellpadding="0" cellspacing="0" align="center"><tr><td style="background-color:#000000;border-radius:999px;">
<a href="https://www.acqualive.com.br/MAENUTRIDA" target="_blank" style="display:inline-block;padding:16px 34px;font-size:14px;font-weight:800;color:#C5F542;text-decoration:none;letter-spacing:1px;text-transform:uppercase;">Quero meu Acqualive</a>
</td></tr></table>
</td></tr>
</table>
</td></tr>

<!-- Reforço -->
<tr><td style="padding:32px 40px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="50%" style="padding:14px 12px 14px 0;vertical-align:top;">
<p style="margin:0 0 6px;font-size:13px;font-weight:800;color:#C5F542;letter-spacing:1px;text-transform:uppercase;">10x sem juros</p>
<p style="margin:0;font-size:13px;line-height:1.6;color:#a3a3a3;">Para você instalar em casa sem comprometer o caixa do mês.</p>
</td>
<td width="50%" style="padding:14px 0 14px 12px;vertical-align:top;">
<p style="margin:0 0 6px;font-size:13px;font-weight:800;color:#C5F542;letter-spacing:1px;text-transform:uppercase;">Frete grátis</p>
<p style="margin:0;font-size:13px;line-height:1.6;color:#a3a3a3;">Consulte regiões disponíveis no atendimento.</p>
</td>
</tr>
</table>
</td></tr>

<!-- CTA secundário -->
<tr><td style="padding:20px 40px 48px;text-align:center;">
<p style="margin:0 0 18px;font-size:14px;line-height:1.7;color:#9a9a9a;">A escolha pela água certa é discreta. O impacto, não.</p>
<table role="presentation" cellpadding="0" cellspacing="0" align="center"><tr><td style="border:1px solid #C5F542;border-radius:999px;">
<a href="https://www.acqualive.com.br/MAENUTRIDA" target="_blank" style="display:inline-block;padding:14px 28px;font-size:13px;font-weight:700;color:#C5F542;text-decoration:none;letter-spacing:1px;text-transform:uppercase;">Aplicar cupom MAENUTRIDA</a>
</td></tr></table>
</td></tr>

<!-- Footer -->
<tr><td style="background-color:#000000;padding:28px 40px;text-align:center;border-top:1px solid #1a1a1a;">
<img src="https://kvlkcavrxxwxxvijwqhd.supabase.co/storage/v1/object/public/blog-images/acqualive-logo-white.png" alt="Acqualive" width="100" style="display:block;margin:0 auto 16px;">
<p style="margin:0 0 6px;font-size:12px;line-height:1.6;color:#737373;">Acqualive | Água pura, alcalina e mineralizada na sua casa.</p>
<p style="margin:0;font-size:11px;line-height:1.6;color:#525252;">Parceria oficial com Mãe Nutrida Experience.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

const EmailMaeNutrida = () => {
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");
  const [subject, setSubject] = useState(SUBJECT);
  const [html, setHtml] = useState(HTML);
  const [copied, setCopied] = useState(false);

  const copyHtml = async () => {
    await navigator.clipboard.writeText(html);
    setCopied(true);
    toast.success("HTML copiado");
    setTimeout(() => setCopied(false), 2000);
  };

  const copySubject = async () => {
    await navigator.clipboard.writeText(subject);
    toast.success("Assunto copiado");
  };

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div className="border-b border-[#1c2333] bg-[#0d1117] sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-3 flex-wrap">
          <div>
            <h1 className="text-base font-bold text-white">E-mail Mãe Nutrida Experience</h1>
            <p className="text-xs text-gray-500">Cupom MAENUTRIDA · acqualive.com.br/MAENUTRIDA</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={viewMode === "preview" ? "default" : "outline"}
              onClick={() => setViewMode("preview")}
              className={viewMode === "preview" ? "bg-[#C5F542] text-black hover:bg-[#9FD729]" : "border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"}
            >
              <Eye className="h-4 w-4 mr-1" /> Preview
            </Button>
            <Button
              size="sm"
              variant={viewMode === "code" ? "default" : "outline"}
              onClick={() => setViewMode("code")}
              className={viewMode === "code" ? "bg-[#C5F542] text-black hover:bg-[#9FD729]" : "border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"}
            >
              <Code className="h-4 w-4 mr-1" /> HTML
            </Button>
            <Button size="sm" onClick={copyHtml} className="bg-[#C5F542] text-black hover:bg-[#9FD729]">
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? "Copiado" : "Copiar HTML"}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3 bg-[#161b26] rounded-lg px-4 py-3 border border-[#1c2333]">
          <span className="text-xs text-gray-500 uppercase font-bold shrink-0">Assunto:</span>
          {viewMode === "code" ? (
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="flex-1 bg-[#0d1117] border border-[#1c2333] rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-[#C5F542]"
            />
          ) : (
            <span className="text-sm text-gray-200 flex-1">{subject}</span>
          )}
          <button onClick={copySubject} className="text-xs text-[#C5F542] hover:underline shrink-0">Copiar</button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-12">
        {viewMode === "preview" ? (
          <div className="rounded-lg overflow-hidden">
            <iframe srcDoc={html} title="Email Mãe Nutrida" className="w-full border-0" style={{ minHeight: "1200px" }} />
          </div>
        ) : (
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full bg-[#161b26] rounded-lg p-6 text-xs text-gray-300 border border-[#1c2333] focus:outline-none focus:border-[#C5F542] font-mono"
            style={{ minHeight: "80vh" }}
            spellCheck={false}
          />
        )}
      </div>
    </div>
  );
};

export default EmailMaeNutrida;
