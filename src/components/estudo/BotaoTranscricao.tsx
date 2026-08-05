import { FileText } from "lucide-react";
import { ESTUDO_PUBMED, URL_ESTUDO, VIDEO_URL } from "@/components/estudo/links";

/** Versão em texto do capítulo em vídeo, para leitura, acessibilidade e estudo offline. */
const TRANSCRIÇÃO = `ÁGUA FUNCIONAL: O ESTUDO DA DRA. JULIANA CHAVES
Versão em texto do capítulo em vídeo do Dossiê Científico Acqualive

Vídeo: ${VIDEO_URL}
Dossiê completo: ${URL_ESTUDO}
Artigo indexado no PubMed: ${ESTUDO_PUBMED}

---

1. A PERGUNTA QUE DEU ORIGEM À PESQUISA

A água é o item mais consumido pelo ser humano ao longo da vida e, mesmo assim,
raramente é tratada como variável em estudos de saúde. A pesquisa desenvolvida na
Universidade Federal do Pará partiu de uma pergunta simples: se a água que bebemos
todos os dias mudar de característica, alguma coisa muda no organismo?

2. O QUE É ÁGUA ALCALINA IONIZADA, OU ÁGUA FUNCIONAL

Água alcalina ionizada é a água que passa por filtração e ionização, resultando em
pH acima da neutralidade, presença de minerais como magnésio, cálcio, sódio e
potássio e alteração do potencial de oxirredução. Chamamos essa água de água
funcional porque ela não é apenas potável: suas características são medidas,
documentadas e reproduzíveis. Duas águas podem ter o mesmo pH e composições
completamente diferentes, por isso a padronização importa.

3. COMO O ESTUDO FOI CONDUZIDO

Participantes com diagnóstico de gastrite passaram a consumir, em casa, água
alcalina ionizada com pH mantido entre 8,5 e 10, por aproximadamente quatro meses.
Foram registrados pH, alcalinidade total, potencial de oxirredução, condutividade
elétrica e minerais. O acompanhamento incluiu avaliação clínica, exames endoscópicos
antes e depois da intervenção, análise anatomopatológica da mucosa gástrica e estudo
da expressão de microRNAs relacionados a processos inflamatórios. O projeto foi
aprovado por Comitê de Ética em Pesquisa.

4. POR QUE O pH IMPORTA

A pepsina é a enzima que digere proteínas dentro do estômago. Em ambiente muito
ácido, ela trabalha em atividade máxima, exatamente como deveria. Estudos
experimentais observam que, acima de pH 8,0, a pepsina perde atividade. Foi nessa
faixa que a água do protocolo foi mantida. Isso ajuda a entender por que a
característica da água, e não apenas o volume ingerido, entrou na conversa
científica sobre saúde digestiva.

5. O QUE OS RESULTADOS MOSTRARAM

O estudo observou melhora em sintomas relatados pelos participantes, mudanças
verificadas nos exames endoscópicos e alterações na expressão de microRNAs ligados a
processos inflamatórios. Trata-se de um estudo com número limitado de participantes,
o que significa que os achados abrem caminho para novas pesquisas, e não encerram o
assunto.

6. O QUE ISSO NÃO SIGNIFICA

Água não é medicamento. Nada aqui substitui avaliação, diagnóstico ou tratamento
realizado por profissional de saúde. O que a pesquisa sustenta é que a qualidade da
água merece ser considerada como parte dos hábitos que influenciam a saúde, do mesmo
modo que já consideramos alimentação, sono e atividade física.

7. O PAPEL DA ACQUALIVE

A Acqualive participou da pesquisa disponibilizando a tecnologia de filtração e
ionização utilizada. O conhecimento produzido é resultado do rigor científico
aplicado pela pesquisadora e pela Universidade Federal do Pará em todas as etapas.
Quando falamos em água Acqualive, falamos dessa água funcional: filtrada,
mineralizada e com características documentadas.

---

Conteúdo de caráter informativo e educativo.
Versão em texto elaborada pela equipe Acqualive a partir do conteúdo do vídeo e do
dossiê científico. Distribuição livre para uso em aulas, palestras e atendimentos.
`;

const BotaoTranscricao = () => {
  const baixar = () => {
    const blob = new Blob([TRANSCRIÇÃO], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Transcricao-video-Agua-Funcional-Acqualive.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      type="button"
      onClick={baixar}
      className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-blue))] px-5 py-3 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:-translate-y-0.5 hover:bg-white"
    >
      <FileText className="h-4 w-4" aria-hidden />
      Baixar a transcrição do vídeo
    </button>
  );
};

export default BotaoTranscricao;
