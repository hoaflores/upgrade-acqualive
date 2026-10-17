import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3";
import { CONTACT_HOURS, SPREADSHEET_ID, sheetRow } from "./contract.ts";

const Body = z.object({
  nome: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  telefone: z.string().trim().min(8).max(25).regex(/^[\d\s()+.-]+$/),
  mensagem: z.string().trim().max(2000).default(""),
  horario: z.enum(CONTACT_HOURS),
  website: z.string().max(0).optional(),
});
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { ...corsHeaders, "Content-Type": "application/json" },
});

// Intentionally public lead collection. No read operation or caller-selected destination.
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Método não permitido" }, 405);
  try {
    const parsed = Body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) return json({ error: "Confira os dados do formulário." }, 400);
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    const sheetKey = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!apiKey || !sheetKey) return json({ error: "Serviço de contato indisponível." }, 503);
    const response = await fetch(
      `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SPREADSHEET_ID}/values/'Página1'!A:G:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
      { method: "POST", headers: {
        Authorization: `Bearer ${apiKey}`, "X-Connection-Api-Key": sheetKey, "Content-Type": "application/json",
      }, body: JSON.stringify({ values: [sheetRow(parsed.data, new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }))] }) },
    );
    if (!response.ok) {
      const details = await response.text();
      console.error("São Paulo sheet failed", response.status, details);
      return json({ error: "Não foi possível registrar seu contato.", status: response.status, details }, response.status);
    }
    return json({ success: true });
  } catch {
    return json({ error: "Não foi possível enviar. Tente novamente." }, 500);
  }
});