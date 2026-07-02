import type { CidadeAtendimento } from "@/types/mapa";

/**
 * Base de especialistas Acqualive por cidade.
 * Estrutura preparada para centenas de registros e integração futura com CMS/API/Supabase.
 * Adicionar novos: basta appendar objetos seguindo o mesmo schema.
 */
export const cidadesAtendimento: CidadeAtendimento[] = [
  {
    id: "sao-paulo-sp",
    cidade: "São Paulo",
    estado: "SP",
    lat: -23.5505,
    lng: -46.6333,
    especialistas: [
      {
        id: "sp-01",
        nome: "Ana Ribeiro",
        whatsapp: "5511999990001",
        instagram: "acqualive.sp",
        email: "sp@acqualive.com.br",
      },
      {
        id: "sp-02",
        nome: "Marcelo Duarte",
        whatsapp: "5511999990002",
      },
    ],
  },
  {
    id: "rio-de-janeiro-rj",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    lat: -22.9068,
    lng: -43.1729,
    especialistas: [
      {
        id: "rj-01",
        nome: "Camila Souza",
        whatsapp: "5521999990001",
        instagram: "acqualive.rj",
      },
    ],
  },
  {
    id: "belo-horizonte-mg",
    cidade: "Belo Horizonte",
    estado: "MG",
    lat: -19.9167,
    lng: -43.9345,
    especialistas: [
      { id: "bh-01", nome: "Rafael Andrade", whatsapp: "5531999990001" },
    ],
  },
  {
    id: "curitiba-pr",
    cidade: "Curitiba",
    estado: "PR",
    lat: -25.4284,
    lng: -49.2733,
    especialistas: [
      { id: "cwb-01", nome: "Juliana Prado", whatsapp: "5541999990001", instagram: "acqualive.cwb" },
    ],
  },
  {
    id: "porto-alegre-rs",
    cidade: "Porto Alegre",
    estado: "RS",
    lat: -30.0346,
    lng: -51.2177,
    especialistas: [
      { id: "poa-01", nome: "Eduardo Lima", whatsapp: "555192928468" },
    ],
  },
  {
    id: "florianopolis-sc",
    cidade: "Florianópolis",
    estado: "SC",
    lat: -27.5954,
    lng: -48.548,
    especialistas: [
      { id: "fln-01", nome: "Bianca Cordeiro", whatsapp: "5548999990001" },
    ],
  },
  {
    id: "brasilia-df",
    cidade: "Brasília",
    estado: "DF",
    lat: -15.7942,
    lng: -47.8822,
    especialistas: [
      { id: "bsb-01", nome: "Rodrigo Vale", whatsapp: "5561999990001" },
    ],
  },
  {
    id: "salvador-ba",
    cidade: "Salvador",
    estado: "BA",
    lat: -12.9714,
    lng: -38.5014,
    especialistas: [
      { id: "ssa-01", nome: "Luciana Matos", whatsapp: "5571999990001" },
    ],
  },
  {
    id: "recife-pe",
    cidade: "Recife",
    estado: "PE",
    lat: -8.0476,
    lng: -34.877,
    especialistas: [
      { id: "rec-01", nome: "Pedro Farias", whatsapp: "5581999990001" },
    ],
  },
  {
    id: "fortaleza-ce",
    cidade: "Fortaleza",
    estado: "CE",
    lat: -3.7319,
    lng: -38.5267,
    especialistas: [
      { id: "for-01", nome: "Mariana Teles", whatsapp: "5585999990001" },
    ],
  },
  {
    id: "manaus-am",
    cidade: "Manaus",
    estado: "AM",
    lat: -3.119,
    lng: -60.0217,
    especialistas: [
      { id: "mao-01", nome: "Thiago Nogueira", whatsapp: "5592999990001" },
    ],
  },
  {
    id: "belem-pa",
    cidade: "Belém",
    estado: "PA",
    lat: -1.4558,
    lng: -48.5039,
    especialistas: [
      { id: "bel-01", nome: "Sofia Almeida", whatsapp: "5591999990001" },
      { id: "bel-02", nome: "Gustavo Rocha", whatsapp: "5591999990002" },
      { id: "bel-03", nome: "Renata Pires", whatsapp: "5591999990003" },
    ],
  },
  {
    id: "goiania-go",
    cidade: "Goiânia",
    estado: "GO",
    lat: -16.6869,
    lng: -49.2648,
    especialistas: [
      { id: "goi-01", nome: "Felipe Carvalho", whatsapp: "5562999990001" },
    ],
  },
  {
    id: "campinas-sp",
    cidade: "Campinas",
    estado: "SP",
    lat: -22.9099,
    lng: -47.0626,
    especialistas: [
      { id: "cps-01", nome: "Isabela Freitas", whatsapp: "5519999990001" },
    ],
  },
  {
    id: "vitoria-es",
    cidade: "Vitória",
    estado: "ES",
    lat: -20.3155,
    lng: -40.3128,
    especialistas: [
      { id: "vix-01", nome: "Bruno Machado", whatsapp: "5527999990001" },
    ],
  },
];
