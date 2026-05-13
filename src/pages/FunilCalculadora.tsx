import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const LP_URL = "https://paginas.acqualive.com.br/calculadora-acqualive";
const PORQUE_URL = "https://www.acqualive.com.br/pages/porque-acqualive";

function CopyBlock({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative group">
      {label && <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">{label}</div>}
      <pre className="whitespace-pre-wrap text-sm bg-muted/50 border rounded-lg p-4 pr-12 font-sans leading-relaxed">{text}</pre>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2 opacity-70 hover:opacity-100"
        onClick={() => {
          navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </Button>
    </div>
  );
}

function CopyAllButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      size="sm"
      variant="outline"
      className="mb-4"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
    >
      {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
      {copied ? "Copiado!" : "Copiar tudo desta aba"}
    </Button>
  );
}

function joinBlocks(blocks: { titulo?: string; texto: string }[]) {
  return blocks.map((b) => (b.titulo ? `=== ${b.titulo} ===\n\n${b.texto}` : b.texto)).join("\n\n\n");
}

const stories = [
  {
    titulo: "Story 1 — Pergunta direta",
    texto: `Você sabe quantos litros de água VOCÊ precisa beber por dia?

A maioria das pessoas chuta "2 litros" e erra feio.

A quantidade ideal depende do seu peso, do clima e da sua rotina.

→ Arrasta pra cima e descobre a sua em 1 minuto.

BÔNUS: ao calcular, você ganha um livro digital gratuito com dicas e receitas para beber mais água sem sofrer.`,
    cta: "Calcular minha água ideal",
  },
  {
    titulo: "Story 2 — Curiosidade",
    texto: `Beber água demais também faz mal. 💧

E beber de menos te deixa cansada, com dor de cabeça e pele opaca.

Existe um número certo pra cada corpo.

→ Descobre o seu agora (é grátis e leva 1 min).

E ainda ganha um livro digital de presente com dicas para beber mais água no dia a dia.`,
    cta: "Quero saber minha quantidade",
  },
  {
    titulo: "Story 3 — Identificação",
    texto: `Sintomas de quem bebe pouca água:

• Cansaço sem motivo
• Dor de cabeça frequente
• Pele ressecada
• Constipação
• Dificuldade de concentração

Se você marcou 2+, faz a calculadora →

De presente, você recebe um livro digital com receitas e truques para se hidratar melhor.`,
    cta: "Ver minha meta de hidratação",
  },
  {
    titulo: "Story 4 — Prova social",
    texto: `Mais de [X] pessoas já descobriram a quantidade ideal de água com a nossa calculadora.

E o melhor: leva menos de 1 minuto.

Bora descobrir a sua? →

Quem calcula recebe ainda um livro digital gratuito com dicas e receitas de hidratação.`,
    cta: "Calcular agora",
  },
  {
    titulo: "Story 5 — Urgência leve",
    texto: `Hoje é o dia.

Para de chutar quanto você "deveria" beber e descobre o número exato pra você.

Calculadora gratuita, leva 1 minuto. E ainda vem um livro digital de presente.

→ Arrasta pra cima.`,
    cta: "Acessar calculadora",
  },
];

const cards = [
  {
    titulo: "Card 1 — Pergunta + benefício",
    texto: `QUANTOS LITROS DE ÁGUA VOCÊ PRECISA?

Descubra em 1 minuto a quantidade ideal de água para o SEU corpo, considerando peso, rotina e clima.

✓ Gratuito
✓ Leva 1 minuto
✓ Resultado personalizado
✓ BÔNUS: livro digital gratuito de hidratação

Toque para calcular →`,
  },
  {
    titulo: "Card 2 — Dor + solução",
    texto: `Cansada de chutar "2 litros por dia"?

A quantidade ideal de água é diferente para cada pessoa.

Nossa calculadora considera seu peso, idade, atividade física e clima para te dar o número exato.

E ainda te enviamos um livro digital gratuito com receitas e dicas para chegar nessa meta sem sofrer.

Calcule a sua →`,
  },
  {
    titulo: "Card 3 — Saúde",
    texto: `HIDRATAÇÃO CERTA = MAIS ENERGIA, FOCO E SAÚDE

Beber a quantidade certa de água melhora pele, digestão, disposição e até o humor.

Descubra a sua quantidade ideal agora.

(É grátis, leva 1 minuto e você ainda ganha um livro digital com dicas e receitas de hidratação)`,
  },
];

const reels = [
  {
    titulo: "Reel 1 — Mito dos 2 litros",
    texto: `Gancho: "2 litros de água por dia é mentira."

Desenvolvimento: A recomendação dos 2 litros é uma média genérica. Uma pessoa de 50kg sedentária e uma de 90kg que treina todo dia NÃO precisam da mesma quantidade.

A fórmula correta considera: peso, sexo, idade, atividade física, clima e até consumo de café.

CTA: Coloquei uma calculadora gratuita no link da bio. Em 1 minuto você descobre a SUA quantidade ideal e ainda ganha um livro digital de presente com dicas para beber mais água.`,
  },
  {
    titulo: "Reel 2 — Sintomas de desidratação",
    texto: `Gancho: "Se você sente isso, pode estar desidratada."

Lista (com cortes rápidos):
• Cansaço sem motivo
• Dor de cabeça no fim do dia
• Pele opaca
• Boca seca ao acordar
• Urina muito amarela

A maioria das pessoas anda desidratada e não sabe.

CTA: Faz a calculadora no link da bio e descobre quanto VOCÊ precisa beber. De brinde, vai um livro digital com dicas de hidratação.`,
  },
  {
    titulo: "Reel 3 — Antes e depois",
    texto: `Gancho: "O que mudou quando comecei a beber a quantidade CERTA de água."

Lista:
• Acordei mais disposta
• Pele mais hidratada
• Menos vontade de doce
• Digestão regulada
• Cabeça mais leve

E não foram 2 litros aleatórios. Foi a quantidade calculada pro meu corpo.

CTA: Calcula a sua no link da bio. É grátis e ainda vem um livro digital de presente com receitas que me ajudaram.`,
  },
  {
    titulo: "Reel 4 — Erros comuns",
    texto: `Gancho: "3 erros que você comete tentando se hidratar."

1. Achar que café e refrigerante contam como água (não contam, desidratam).
2. Beber tudo de uma vez no fim do dia (o corpo elimina, não absorve).
3. Não saber a quantidade certa pro SEU corpo.

CTA: Resolve o erro 3 agora. Calculadora gratuita no link da bio (e você ainda ganha um livro digital com dicas de hidratação).`,
  },
  {
    titulo: "Reel 5 — Para quem treina",
    texto: `Gancho: "Se você treina e bebe só 2 litros de água, tá errado."

Quem se exercita perde mais água por suor e respiração. A necessidade pode subir 25% ou mais.

Não tomar a quantidade certa = menos performance, mais cansaço, mais risco de lesão.

CTA: Calculadora gratuita no link da bio. Considera seu treino, te dá o número exato e ainda manda um livro digital de presente com dicas de hidratação.`,
  },
];

const manychatFlow = {
  gatilho: `Palavra-chave: "calculadora" (e variações: CALCULADORA, Calculadora, calc)`,
  msg1: `Oi! Que bom que você quer descobrir a quantidade certa de água pra você 💧

A maioria das pessoas chuta "2 litros" e erra. A quantidade ideal depende do SEU peso, rotina e clima.

E tem um BÔNUS: quem usa a calculadora ganha um livro digital gratuito com receitas e dicas para beber mais água sem sofrer.

Posso te mandar o link? (leva 1 minuto)`,
  botoes1: `[Sim, quero o link] → vai para Mensagem 2
[Me conta mais antes] → vai para Mensagem 2B`,
  msg2: `Perfeito! Aqui está 👇

🔗 ${LP_URL}

É só preencher os dados (peso, idade, rotina) e em 1 minuto você recebe a quantidade ideal de água pra você.

Ah, e fica de olho no e-mail: vou te mandar também um livro digital gratuito com dicas e receitas pra beber mais água sem sofrer.

Me conta depois quanto deu? Fico curiosa 💙`,
  msg2b: `Claro!

A calculadora foi feita por especialistas em hidratação. Ela considera:

✓ Seu peso
✓ Sua idade e sexo
✓ Quanto você se exercita
✓ O clima onde você vive
✓ Consumo de café/álcool

E te dá o número EXATO de água pro seu corpo. É grátis e leva 1 minuto.

Posso mandar o link?

[Pode mandar] → Mensagem 2`,
  followup: `Follow-up (24h depois, se não clicou):

Oi! Passando pra lembrar que a calculadora de hidratação tá te esperando 💧

Leva 1 minuto e o resultado pode te surpreender.

🔗 ${LP_URL}`,
};

const emailD0 = {
  assunto: "Seu resultado tá pronto — agora vem a parte importante",
  corpo: `Oi, [NOME]!

Você acabou de descobrir a quantidade ideal de água pro seu corpo. Parabéns por dar esse passo 💙

Agora vem a pergunta que importa: COMO chegar nessa quantidade todo dia?

Pra muita gente, beber a quantidade ideal de água parece impossível. Esquece, perde a conta, não sente sede, não gosta do gosto da água…

Por isso preparei um presente pra você:

📘 E-BOOK GRATUITO: "Como beber mais água sem sofrer"

Dentro você vai encontrar:
✓ 7 truques pra lembrar de beber água ao longo do dia
✓ 10 receitas de águas saborizadas (zero açúcar)
✓ Sinais que mostram se você está bem hidratada
✓ O que NÃO conta como hidratação (vai te surpreender)
✓ Como criar o hábito em 21 dias

👉 [BAIXAR E-BOOK GRATUITO]

É grátis, é nosso presente.

Bora beber água do jeito certo?

Equipe Acqualive`,
};

const whatsappD0 = `Oi, [NOME]! 💙

Você acabou de descobrir a sua quantidade ideal de água. Parabéns!

Agora a parte importante: COMO beber tudo isso todo dia?

Preparei um presente pra te ajudar 👇

📘 E-book GRATUITO "Como beber mais água sem sofrer"
✓ 7 truques pra lembrar
✓ 10 receitas de água saborizada
✓ Como criar o hábito em 21 dias

Quer? Te mando agora 😊`;

const emailD1 = {
  assunto: "Não adianta beber 3 litros de água ruim",
  corpo: `Oi, [NOME].

Vou ser direta com você.

Não adianta NADA descobrir a quantidade ideal de água, comprar squeeze bonita, marcar alarme no celular… se a água que você bebe não for boa.

A maioria da água que chega na sua casa pode conter:

⚠️ Cloro (usado pra "tratar", mas faz mal em excesso)
⚠️ Microplásticos (já comprovados em estudos recentes)
⚠️ Resíduos de metais pesados
⚠️ Subprodutos da cloração
⚠️ Sabor e odor desagradáveis

E isso vale tanto pra água da torneira quanto pra muita água engarrafada.

Você está hidratando o corpo… ou contaminando ele?

O QUE É UMA ÁGUA BOA?

Uma água realmente boa é:

✓ Livre de cloro e contaminantes
✓ Com pH equilibrado (levemente alcalina)
✓ Com minerais preservados
✓ Leve, com sabor neutro
✓ Que você sente vontade de beber

É esse tipo de água que faz diferença na sua saúde, na sua pele, na sua disposição.

A Acqualive entrega exatamente isso, todos os dias, na sua casa.

👉 [CONHEÇA A ACQUALIVE]
${PORQUE_URL}

Beba água. Mas beba água BOA.

Equipe Acqualive`,
};

const whatsappD1 = `Oi, [NOME]. Posso ser direta? 💧

Não adianta beber 3 litros de água por dia se a água não é boa.

A maioria da água (torneira E engarrafada) pode ter:
⚠️ Cloro
⚠️ Microplásticos
⚠️ Metais pesados

Você tá hidratando ou contaminando o corpo?

Veja o que é uma água realmente boa 👇
${PORQUE_URL}`;

const emailD2 = {
  assunto: "Seu cupom de R$100 chegou (válido por 48h)",
  corpo: `Oi, [NOME]!

Você fez a calculadora, descobriu a quantidade ideal de água, viu por que a qualidade da água importa…

Agora chegou a hora de tomar a decisão.

E pra te ajudar, separei um presente:

🎁 CUPOM DE R$100 DE DESCONTO

Use na sua Acqualive e tenha em casa a melhor água que existe — pura, leve e na quantidade certa pra você.

CUPOM: HIDRATA100
(válido por 48h)

👉 [USAR MEU CUPOM AGORA]

Ou, se preferir, fala direto com um especialista. Ele tira todas as dúvidas e te ajuda a escolher o modelo ideal pra sua casa.

👉 [FALAR COM ESPECIALISTA NO WHATSAPP]

Sua saúde começa com a água que você bebe.

Bora dar esse passo?

Equipe Acqualive`,
};

const whatsappD2 = `Oi, [NOME]! 🎁

Seu presente chegou: R$100 de desconto na sua Acqualive.

CUPOM: HIDRATA100
(válido por 48h)

A melhor água, na quantidade certa, todos os dias na sua casa.

👉 Usar cupom: [LINK]
👉 Falar com especialista: [LINK]

Bora? 💙`;

const allStories = joinBlocks(stories.map((s) => ({ titulo: `${s.titulo} | CTA: ${s.cta}`, texto: s.texto })));
const allCards = joinBlocks(cards);
const allReels = joinBlocks(reels);
const allManychat = joinBlocks([
  { titulo: "Gatilho", texto: manychatFlow.gatilho },
  { titulo: "Mensagem 1 — Boas-vindas", texto: manychatFlow.msg1 },
  { titulo: "Botões da Mensagem 1", texto: manychatFlow.botoes1 },
  { titulo: "Mensagem 2 — Entrega do link", texto: manychatFlow.msg2 },
  { titulo: 'Mensagem 2B — "Me conta mais"', texto: manychatFlow.msg2b },
  { titulo: "Follow-up 24h", texto: manychatFlow.followup },
]);
const allD0 = joinBlocks([
  { titulo: `E-mail | Assunto: ${emailD0.assunto}`, texto: emailD0.corpo },
  { titulo: "Versão WhatsApp", texto: whatsappD0 },
]);
const allD1 = joinBlocks([
  { titulo: `E-mail | Assunto: ${emailD1.assunto}`, texto: emailD1.corpo },
  { titulo: "Versão WhatsApp", texto: whatsappD1 },
]);
const allD2 = joinBlocks([
  { titulo: `E-mail | Assunto: ${emailD2.assunto}`, texto: emailD2.corpo },
  { titulo: "Versão WhatsApp", texto: whatsappD2 },
]);

export default function FunilCalculadora() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Funil Calculadora | Campanha Acqualive</title>
        <meta name="description" content="Campanha completa do funil da Calculadora de Hidratação Acqualive: stories, cards, reels, ManyChat e fluxo de e-mails." />
      </Helmet>

      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Funil Calculadora de Hidratação</h1>
          <p className="text-muted-foreground mt-1">Toda a campanha organizada por canal e etapa.</p>
          <p className="text-sm text-muted-foreground mt-2">
            Landing Page: <a href={LP_URL} target="_blank" rel="noreferrer" className="text-primary underline">{LP_URL}</a>
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="stories" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto gap-1 mb-6">
            <TabsTrigger value="stories">Stories</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="reels">Reels</TabsTrigger>
            <TabsTrigger value="manychat">ManyChat</TabsTrigger>
            <TabsTrigger value="d0">E-mail D+0</TabsTrigger>
            <TabsTrigger value="d1">E-mail D+1</TabsTrigger>
            <TabsTrigger value="d2">E-mail D+2</TabsTrigger>
          </TabsList>

          <TabsContent value="stories" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">5 stories para enviar tráfego à landing page.</div>
            <CopyAllButton text={allStories} />
            {stories.map((s, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{s.titulo}</CardTitle>
                  <CardDescription>CTA sugerido: <strong>{s.cta}</strong></CardDescription>
                </CardHeader>
                <CardContent>
                  <CopyBlock text={s.texto} />
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="cards" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">3 cards de campanha (feed, anúncio ou criativo).</div>
            <CopyAllButton text={allCards} />
            {cards.map((c, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{c.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CopyBlock text={c.texto} />
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="reels" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">5 roteiros de reels (texto direto).</div>
            <CopyAllButton text={allReels} />
            {reels.map((r, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{r.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CopyBlock text={r.texto} />
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="manychat" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">Automação para quem comentar/dm com a palavra "calculadora".</div>
            <CopyAllButton text={allManychat} />
            <Card>
              <CardHeader><CardTitle className="text-lg">Gatilho</CardTitle></CardHeader>
              <CardContent><CopyBlock text={manychatFlow.gatilho} /></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Mensagem 1 — Boas-vindas</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <CopyBlock text={manychatFlow.msg1} label="Texto" />
                <CopyBlock text={manychatFlow.botoes1} label="Botões" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Mensagem 2 — Entrega do link</CardTitle></CardHeader>
              <CardContent><CopyBlock text={manychatFlow.msg2} /></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Mensagem 2B — "Me conta mais"</CardTitle></CardHeader>
              <CardContent><CopyBlock text={manychatFlow.msg2b} /></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Follow-up 24h</CardTitle></CardHeader>
              <CardContent><CopyBlock text={manychatFlow.followup} /></CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="d0" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">Disparado logo após o uso da calculadora. Não mostra o resultado.</div>
            <CopyAllButton text={allD0} />
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">E-mail</CardTitle>
                <CardDescription>Assunto: <strong>{emailD0.assunto}</strong></CardDescription>
              </CardHeader>
              <CardContent><CopyBlock text={emailD0.corpo} /></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Versão WhatsApp</CardTitle></CardHeader>
              <CardContent><CopyBlock text={whatsappD0} /></CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="d1" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">Riscos da água comum + apresentação da Acqualive.</div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">E-mail</CardTitle>
                <CardDescription>Assunto: <strong>{emailD1.assunto}</strong></CardDescription>
              </CardHeader>
              <CardContent><CopyBlock text={emailD1.corpo} /></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Versão WhatsApp</CardTitle></CardHeader>
              <CardContent><CopyBlock text={whatsappD1} /></CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="d2" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">Cupom de R$100 + opção de falar com especialista.</div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">E-mail</CardTitle>
                <CardDescription>Assunto: <strong>{emailD2.assunto}</strong></CardDescription>
              </CardHeader>
              <CardContent><CopyBlock text={emailD2.corpo} /></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Versão WhatsApp</CardTitle></CardHeader>
              <CardContent><CopyBlock text={whatsappD2} /></CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
