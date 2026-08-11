import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3';

const SPREADSHEET_ID = '1VKPUkIO1FZqB5a0uVmNw_dTzqtSyw2uGV5ba7Q7YDJo';
const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_sheets/v4';

const BodySchema = z.object({
  sessionId: z.string().trim().min(6).max(80),
  nome: z.string().trim().max(120).optional().nullable(),
  telefone: z.string().trim().max(30).optional().nullable(),
  email: z.string().trim().max(200).optional().nullable(),
  cidade: z.string().trim().max(120).optional().nullable(),
  mensagem: z.string().trim().max(2000).optional().nullable(),
  origem: z.string().trim().max(80).optional().nullable(),
  status: z.string().trim().max(40).optional().nullable(),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const d = parsed.data;

    const lovableKey = Deno.env.get('LOVABLE_API_KEY');
    const sheetsKey = Deno.env.get('GOOGLE_SHEETS_API_KEY');
    if (!lovableKey || !sheetsKey) {
      return new Response(JSON.stringify({ error: 'Google Sheets connection not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const authHeaders = {
      Authorization: `Bearer ${lovableKey}`,
      'X-Connection-Api-Key': sheetsKey,
      'Content-Type': 'application/json',
    };

    const row = [
      new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      d.nome ?? '',
      d.telefone ?? '',
      d.email ?? '',
      d.cidade ?? '',
      d.mensagem ?? '',
      d.origem ?? 'agua-limpa',
      d.sessionId,
      d.status ?? 'parcial',
    ];

    // Procura uma linha existente com o mesmo sessionId (coluna H)
    let existingRow = 0;
    const lookup = await fetch(`${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/H:H`, {
      headers: authHeaders,
    });
    if (lookup.ok) {
      const data = await lookup.json();
      const values: string[][] = data.values ?? [];
      const idx = values.findIndex((r) => (r?.[0] ?? '').trim() === d.sessionId);
      if (idx >= 0) existingRow = idx + 1;
    }

    const url = existingRow
      ? `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/A${existingRow}:I${existingRow}?valueInputOption=USER_ENTERED`
      : `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/A:I:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const res = await fetch(url, {
      method: existingRow ? 'PUT' : 'POST',
      headers: authHeaders,
      body: JSON.stringify({ values: [row] }),
    });

    if (!res.ok) {
      const details = await res.text();
      console.error(`Sheets write failed [${res.status}]: ${details}`);
      return new Response(JSON.stringify({ error: 'Sheets write failed', status: res.status, details }), {
        status: res.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true, updated: Boolean(existingRow) }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('agua-limpa-sheet error:', e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
