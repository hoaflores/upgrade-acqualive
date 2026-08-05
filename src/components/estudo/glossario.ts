/**
 * Glossário do dossiê. Termos técnicos aparecem sublinhados no texto e
 * abrem a definição sem tirar o leitor da leitura.
 */
export const GLOSSÁRIO: Record<string, string> = {
  pepsina:
    "Enzima produzida no estômago para digerir proteínas. Ela só age em ambiente ácido e pode permanecer aderida a tecidos fora do estômago, voltando a ser ativada quando reencontra acidez.",
  microRNAs:
    "Pequenas moléculas que regulam quais genes serão mais ou menos expressos. Funcionam como reguladores de volume da atividade celular, inclusive em processos inflamatórios.",
  microRNA:
    "Pequena molécula que regula a expressão de genes, aumentando ou reduzindo a atividade de determinados processos na célula.",
  mucosa:
    "Camada que reveste internamente o estômago e o protege do próprio ácido gástrico. Quando perde eficiência, instala-se o processo inflamatório.",
  endoscopia:
    "Exame que usa uma câmera flexível para visualizar o interior do estômago e classificar visualmente o grau de inflamação.",
  endoscópicos:
    "Relativo à endoscopia, exame que visualiza o interior do estômago com uma câmera flexível e permite classificar o grau de inflamação.",
  gastrite:
    "Inflamação da mucosa do estômago. Pode ser classificada por endoscopia e análise do tecido em graus como leve, moderada e intensa.",
  anatomopatológica:
    "Análise do tecido em laboratório, sob microscópio, que confirma e detalha o que a imagem do exame sugeriu.",
  ionizada:
    "Água que passa por um processo eletroquímico que altera pH e potencial de oxirredução, e não apenas pela adição de substâncias alcalinizantes.",
  ionização:
    "Processo eletroquímico que separa a água em frações com pH e potencial de oxirredução distintos.",
  "potencial de oxirredução":
    "Medida da tendência da água em doar ou receber elétrons. É um dos parâmetros que diferencia águas com o mesmo pH.",
  "alcalinidade total":
    "Capacidade da água de neutralizar ácidos. Duas águas podem ter o mesmo pH e alcalinidades totais muito diferentes.",
  pH: "Escala de 0 a 14 que mede acidez e alcalinidade. Abaixo de 7 é ácido, 7 é neutro, acima de 7 é alcalino. Cada ponto representa uma variação de dez vezes.",
  "Comitê de Ética":
    "Instância que avalia se uma pesquisa com pessoas respeita segurança, consentimento e integridade dos participantes antes de ela começar.",
};

/** Ordena por tamanho para casar primeiro as expressões compostas. */
export const TERMOS = Object.keys(GLOSSÁRIO).sort((a, b) => b.length - a.length);

const escapar = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const REGEX_TERMOS = new RegExp(`(${TERMOS.map(escapar).join("|")})`, "gi");

export const definiçãoDe = (termo: string) => {
  const chave = TERMOS.find((t) => t.toLowerCase() === termo.toLowerCase());
  return chave ? GLOSSÁRIO[chave] : undefined;
};
