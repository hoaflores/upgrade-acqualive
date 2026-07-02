import { useRef, useState } from "react";
import * as XLSX from "xlsx";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Download, Upload, CheckCircle2, XCircle, FileSpreadsheet } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Linha {
  nome: string;
  cidade: string;
  estado: string;
  whatsapp: string;
  telefone?: string;
  instagram?: string;
  email?: string;
  foto?: string;
  observacoes?: string;
  lat?: string;
  lng?: string;
}

interface Resultado {
  linha: number;
  nome: string;
  status: "ok" | "erro";
  mensagem: string;
}

const HEADERS = ["nome", "cidade", "estado", "whatsapp", "telefone", "instagram", "email", "foto", "observacoes", "lat", "lng"];

async function geocode(cidade: string, estado: string): Promise<{ lat: number; lng: number } | null> {
  const q = encodeURIComponent(`${cidade}, ${estado}, Brasil`);
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br&q=${q}`;
  try {
    const res = await fetch(url, { headers: { "Accept-Language": "pt-BR" } });
    const arr = await res.json();
    if (Array.isArray(arr) && arr[0]?.lat && arr[0]?.lon) {
      return { lat: parseFloat(arr[0].lat), lng: parseFloat(arr[0].lon) };
    }
  } catch {}
  return null;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function ImportarPlanilha({ onDone }: { onDone: () => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [rows, setRows] = useState<Linha[]>([]);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [results, setResults] = useState<Resultado[]>([]);

  const baixarTemplate = () => {
    const ws = XLSX.utils.aoa_to_sheet([
      HEADERS,
      [
        "João da Silva",
        "São Paulo",
        "SP",
        "5511999990001",
        "1133330001",
        "joaosilva",
        "joao@exemplo.com",
        "https://drive.google.com/file/d/EXEMPLO_ID/view",
        "Atende zona sul",
        "",
        "",
      ],
    ]);
    ws["!cols"] = HEADERS.map(() => ({ wch: 22 }));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Franqueados");
    XLSX.writeFile(wb, "template-franqueados.xlsx");
  };

  const carregarArquivo = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: "array" });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: "" });
        const parsed: Linha[] = json.map((r) => ({
          nome: String(r.nome ?? r.Nome ?? "").trim(),
          cidade: String(r.cidade ?? r.Cidade ?? "").trim(),
          estado: String(r.estado ?? r.Estado ?? r.uf ?? r.UF ?? "").trim().toUpperCase().slice(0, 2),
          whatsapp: String(r.whatsapp ?? r.WhatsApp ?? r.Whatsapp ?? "").replace(/\D/g, ""),
          telefone: String(r.telefone ?? r.Telefone ?? "").trim(),
          instagram: String(r.instagram ?? r.Instagram ?? "").replace(/^@/, "").trim(),
          email: String(r.email ?? r.Email ?? r["e-mail"] ?? "").trim(),
          foto: String(r.foto ?? r.Foto ?? r.imagem ?? r.Imagem ?? "").trim(),
          observacoes: String(r.observacoes ?? r["observações"] ?? r.Observacoes ?? "").trim(),
          lat: String(r.lat ?? r.Lat ?? r.latitude ?? "").trim(),
          lng: String(r.lng ?? r.Lng ?? r.longitude ?? "").trim(),
        })).filter((r) => r.nome && r.cidade && r.estado && r.whatsapp);
        setRows(parsed);
        setResults([]);
        toast.success(`${parsed.length} linhas válidas carregadas.`);
      } catch (err) {
        toast.error("Não consegui ler o arquivo. Use .xlsx ou .csv.");
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const importar = async () => {
    if (!rows.length) return;
    setRunning(true);
    setProgress({ done: 0, total: rows.length });
    const out: Resultado[] = [];

    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];
      try {
        // 1) Coordenadas
        let lat = parseFloat(r.lat || "");
        let lng = parseFloat(r.lng || "");
        if (isNaN(lat) || isNaN(lng)) {
          const g = await geocode(r.cidade, r.estado);
          if (!g) throw new Error("cidade não localizada");
          lat = g.lat; lng = g.lng;
          await sleep(1100); // respeitar rate limit do Nominatim
        }

        // 2) Foto (Drive / URL)
        let fotoUrl: string | null = r.foto || null;
        if (fotoUrl && /^https?:\/\//i.test(fotoUrl)) {
          const isDrive = /drive\.google\.com|googleusercontent\.com/i.test(fotoUrl);
          // Sempre baixar via edge function (também resolve CORS/hotlink)
          if (isDrive || /\bdrive\b/i.test(fotoUrl)) {
            const { data, error } = await supabase.functions.invoke("importar-foto", { body: { url: fotoUrl } });
            if (error || !data?.ok) throw new Error("foto: " + (data?.error || error?.message || "falhou"));
            fotoUrl = data.url;
          }
          // URLs comuns: mantém como está
        } else {
          fotoUrl = null;
        }

        // 3) Insert
        const { error: insErr } = await supabase.from("franqueados").insert({
          nome: r.nome,
          cidade: r.cidade,
          estado: r.estado,
          lat, lng,
          whatsapp: r.whatsapp,
          telefone: r.telefone || null,
          instagram: r.instagram || null,
          email: r.email || null,
          foto: fotoUrl,
          observacoes: r.observacoes || null,
          ativo: true,
        });
        if (insErr) throw new Error(insErr.message);

        out.push({ linha: i + 2, nome: r.nome, status: "ok", mensagem: "cadastrado" });
      } catch (e) {
        out.push({ linha: i + 2, nome: r.nome, status: "erro", mensagem: (e as Error).message });
      }
      setProgress({ done: i + 1, total: rows.length });
      setResults([...out]);
    }
    setRunning(false);
    const okCount = out.filter((r) => r.status === "ok").length;
    const errCount = out.length - okCount;
    if (okCount) toast.success(`${okCount} cadastrado(s) com sucesso.`);
    if (errCount) toast.error(`${errCount} com erro. Veja o relatório.`);
    onDone();
  };

  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h3 className="font-semibold flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4" /> Importar planilha
          </h3>
          <p className="text-xs text-muted-foreground mt-1 max-w-2xl">
            Envie um arquivo <strong>.xlsx</strong> ou <strong>.csv</strong>. As coordenadas são preenchidas
            automaticamente pela cidade. Fotos podem vir como URL direta ou <strong>link do Google Drive</strong> (arquivo público).
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={baixarTemplate}>
          <Download className="w-4 h-4 mr-1" /> Baixar modelo
        </Button>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <input
          ref={fileRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) carregarArquivo(f);
            if (fileRef.current) fileRef.current.value = "";
          }}
        />
        <Button variant="outline" onClick={() => fileRef.current?.click()} disabled={running}>
          <Upload className="w-4 h-4 mr-1" /> Escolher planilha
        </Button>
        {rows.length > 0 && (
          <>
            <span className="text-sm text-muted-foreground">{rows.length} linha(s) carregada(s)</span>
            <Button onClick={importar} disabled={running} className="ml-auto">
              {running ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Upload className="w-4 h-4 mr-1" />}
              {running ? `Importando ${progress.done}/${progress.total}…` : "Importar tudo"}
            </Button>
          </>
        )}
      </div>

      {rows.length > 0 && !results.length && (
        <div className="rounded-lg border max-h-72 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Cidade/UF</TableHead>
                <TableHead>WhatsApp</TableHead>
                <TableHead>Foto</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.slice(0, 50).map((r, i) => (
                <TableRow key={i}>
                  <TableCell className="text-xs">{i + 2}</TableCell>
                  <TableCell className="text-sm">{r.nome}</TableCell>
                  <TableCell className="text-xs">{r.cidade} / {r.estado}</TableCell>
                  <TableCell className="text-xs font-mono">{r.whatsapp}</TableCell>
                  <TableCell className="text-xs truncate max-w-[200px]">{r.foto || "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {rows.length > 50 && (
            <div className="text-center text-xs text-muted-foreground py-2 border-t">
              +{rows.length - 50} linha(s) não exibida(s) na prévia
            </div>
          )}
        </div>
      )}

      {results.length > 0 && (
        <div className="rounded-lg border max-h-72 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Mensagem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((r, i) => (
                <TableRow key={i}>
                  <TableCell className="text-xs">{r.linha}</TableCell>
                  <TableCell className="text-sm">{r.nome}</TableCell>
                  <TableCell>
                    {r.status === "ok" ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" /> ok
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-destructive text-xs">
                        <XCircle className="w-3.5 h-3.5" /> erro
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-xs">{r.mensagem}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Card>
  );
}
