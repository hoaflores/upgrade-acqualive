import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  useEffect(() => {
    window.location.href = "https://paginas.acqualive.com.br/upgrade";
  }, []);

  return (
    <>
      <Helmet>
        <title>Acqualive | Purificadores e Ionizadores de Água Alcalina</title>
        <meta
          name="description"
          content="Água alcalina, mineralizada e livre de cloro direto na sua torneira. Conheça os purificadores Acqualive, o programa de indicação e o Portal Científico."
        />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center p-8 text-center">
        <div>
          <h1 className="text-2xl font-bold">
            Acqualive: purificadores e ionizadores de água alcalina
          </h1>
          <p className="mt-3 text-muted-foreground">
            Redirecionando para a página de upgrade da Linha V...
          </p>
          <a className="mt-4 inline-block underline" href="/upgrade">
            Ir para o upgrade Acqualive
          </a>
        </div>
      </main>
    </>
  );
};

export default Index;
