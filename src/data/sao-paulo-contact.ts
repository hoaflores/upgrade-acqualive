// Preserved migration channels. Ownership and local legal details require confirmation.
export const saoPauloContact = {
  whatsapp: "5511989712793",
  telephone: "551129358900",
  telephoneLabel: "(11) 2935-8900",
  address: "Alameda Lorena, 1338 - Jardim Paulista, São Paulo",
  cnpj: "20.310.584/0001-09",
};

export const saoPauloWhatsAppUrl = (product?: string) => {
  const message = product
    ? `Olá! Vim pela página da Acqualive São Paulo e gostaria de conhecer ${product}.`
    : "Olá! Vim pela página da Acqualive São Paulo e gostaria de conhecer os produtos.";
  return `https://wa.me/${saoPauloContact.whatsapp}?text=${encodeURIComponent(message)}`;
};