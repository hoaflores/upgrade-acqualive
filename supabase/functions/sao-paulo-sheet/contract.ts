export const SPREADSHEET_ID = "1v5jTCzpj6-VTcK9pfpTG29bkK2KGixoS9wZJY_25BuE";
export const CONTACT_HOURS = ["Qualquer horário", "Manhã", "Tarde"] as const;
export const sheetRow = (data: { nome: string; email: string; telefone: string; mensagem: string; horario: string }, date: string) =>
  [date, data.nome, data.email, data.telefone, data.mensagem, data.horario, "/sao-paulo"];