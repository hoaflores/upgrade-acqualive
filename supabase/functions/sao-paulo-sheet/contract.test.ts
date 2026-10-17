import { test, expect } from "bun:test";
import { SPREADSHEET_ID, sheetRow } from "./contract";

test("São Paulo leads use the requested spreadsheet, not the DUO spreadsheet", () => {
  expect(SPREADSHEET_ID).toBe("1v5jTCzpj6-VTcK9pfpTG29bkK2KGixoS9wZJY_25BuE");
});
test("contact preference and message are included in the lead row", () => {
  expect(sheetRow({ nome: "Teste", email: "teste@example.com", telefone: "11999999999", mensagem: "Solicito contato", horario: "Tarde" }, "17/10/2026")).toEqual([
    "17/10/2026", "Teste", "teste@example.com", "11999999999", "Solicito contato", "Tarde", "/sao-paulo",
  ]);
});