import { createClient } from "npm:@supabase/supabase-js@2.45.0";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const MASTER_EMAIL = "flores@acqualivesul.com.br";
const MASTER_PASSWORD = "bra21sil";
const MASTER_NOME = "Flores";
const MASTER_FUNCAO = "Administrador Master";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // 1) Já existe?
    const { data: list, error: listErr } = await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 200,
    });
    if (listErr) throw listErr;
    let existing = list.users.find(
      (u) => u.email?.toLowerCase() === MASTER_EMAIL.toLowerCase(),
    );

    // 2) Cria se não existir
    if (!existing) {
      const { data: created, error: createErr } = await supabase.auth.admin.createUser({
        email: MASTER_EMAIL,
        password: MASTER_PASSWORD,
        email_confirm: true,
        user_metadata: { nome: MASTER_NOME, funcao: MASTER_FUNCAO },
      });
      if (createErr) throw createErr;
      existing = created.user!;
    } else {
      // Garante senha e confirmação
      await supabase.auth.admin.updateUserById(existing.id, {
        password: MASTER_PASSWORD,
        email_confirm: true,
      });
    }

    const uid = existing.id;

    // 3) Upsert profile como master aprovado
    await supabase.from("profiles").upsert(
      {
        id: uid,
        nome: MASTER_NOME,
        funcao: MASTER_FUNCAO,
        email: MASTER_EMAIL,
        aprovado: true,
        is_master: true,
      },
      { onConflict: "id" },
    );

    // 4) Garante role admin
    await supabase
      .from("user_roles")
      .upsert({ user_id: uid, role: "admin" }, { onConflict: "user_id,role" });

    return new Response(
      JSON.stringify({ ok: true, user_id: uid, email: MASTER_EMAIL }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ ok: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
