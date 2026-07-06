import { createClient } from "@supabase/supabase-js";
import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "list_franqueados",
  title: "Listar franqueados Acqualive",
  description:
    "Lista franqueados/especialistas Acqualive ativos. Opcionalmente filtre por estado (UF) ou cidade.",
  inputSchema: {
    estado: z.string().length(2).optional().describe("UF, ex: SP, RJ"),
    cidade: z.string().optional().describe("Nome da cidade (busca parcial)"),
    limit: z.number().int().min(1).max(200).optional().describe("Máximo de resultados (padrão 50)"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ estado, cidade, limit }) => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY;
    if (!url || !key) {
      return {
        content: [{ type: "text", text: "Backend não configurado." }],
        isError: true,
      };
    }
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    let query = supabase
      .from("franqueados")
      .select("nome,cidade,estado,whatsapp,telefone,email,instagram,horario_atendimento")
      .eq("ativo", true)
      .order("estado")
      .order("cidade")
      .limit(limit ?? 50);
    if (estado) query = query.eq("estado", estado.toUpperCase());
    if (cidade) query = query.ilike("cidade", `%${cidade}%`);

    const { data, error } = await query;
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(data ?? [], null, 2) }],
      structuredContent: { franqueados: data ?? [] },
    };
  },
});
