import { defineMcp } from "@lovable.dev/mcp-js";
import listFranqueadosTool from "./tools/list-franqueados";

export default defineMcp({
  name: "acqualive-mcp",
  title: "Acqualive MCP",
  version: "0.1.0",
  instructions:
    "Ferramentas do site Acqualive. Use `list_franqueados` para consultar especialistas/franqueados ativos, com filtros opcionais por estado (UF) ou cidade.",
  tools: [listFranqueadosTool],
});
