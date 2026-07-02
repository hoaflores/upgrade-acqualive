export interface Especialista {
  id: string;
  nome: string;
  foto?: string;
  telefone?: string;
  whatsapp: string; // E.164 sem "+" ex: 5511999999999
  instagram?: string;
  email?: string;
  observacoes?: string;
  horario_atendimento?: string;
}

export interface CidadeAtendimento {
  id: string;
  cidade: string;
  estado: string; // sigla UF
  lat: number;
  lng: number;
  especialistas: Especialista[];
}
