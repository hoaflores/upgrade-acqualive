import { useState } from "react";
import { Copy, Check, Eye, Code, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ARTICLES = [
  {
    title: "Qual é o melhor filtro de água?",
    slug: "qual-melhor-filtro-de-agua",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Qual é o melhor filtro de água? Guia Completo 2025</title>
<meta name="description" content="Descubra qual é o melhor filtro de água para sua casa. Comparamos filtros de barro, purificadores comuns, filtros de osmose reversa e filtros de água alcalina ionizada.">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #ffffff;
    color: #1a1a2e;
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
  }

  .article-header {
    background: linear-gradient(135deg, #0a1628 0%, #162544 50%, #0d3b66 100%);
    padding: 80px 24px 100px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .article-header::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at 30% 80%, rgba(59,130,246,0.15) 0%, transparent 60%),
                radial-gradient(ellipse at 70% 20%, rgba(6,182,212,0.1) 0%, transparent 50%);
  }

  .header-content { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }

  .badge {
    display: inline-block;
    background: rgba(59,130,246,0.2);
    border: 1px solid rgba(59,130,246,0.3);
    color: #93c5fd;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 6px 20px;
    border-radius: 100px;
    margin-bottom: 28px;
  }

  .article-header h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 800;
    color: #ffffff;
    line-height: 1.15;
    margin-bottom: 20px;
  }

  .article-header h1 span { color: #60a5fa; }

  .article-header .subtitle {
    font-size: 18px;
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .article-header .meta {
    margin-top: 28px;
    font-size: 13px;
    color: #64748b;
  }
  .article-header .meta span { color: #93c5fd; font-weight: 600; }

  .article-body {
    max-width: 760px;
    margin: -40px auto 0;
    padding: 0 24px 80px;
    position: relative;
    z-index: 2;
  }

  .content-card {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 40px rgba(0,0,0,0.08);
    padding: 48px clamp(24px, 5vw, 56px);
  }

  /* Table of Contents */
  .toc {
    background: linear-gradient(135deg, #f0f9ff, #eff6ff);
    border: 1px solid #bfdbfe;
    border-radius: 16px;
    padding: 28px 32px;
    margin-bottom: 40px;
  }
  .toc h3 {
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #1e40af;
    margin-bottom: 16px;
  }
  .toc ol { padding-left: 20px; }
  .toc li {
    font-size: 14px;
    color: #3b82f6;
    padding: 4px 0;
    cursor: pointer;
  }
  .toc li:hover { color: #1d4ed8; text-decoration: underline; }

  h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(24px, 3.5vw, 32px);
    font-weight: 800;
    color: #0f172a;
    margin: 48px 0 20px;
    line-height: 1.3;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #1e293b;
    margin: 32px 0 12px;
  }

  p { margin-bottom: 18px; font-size: 16.5px; color: #374151; }

  .lead { font-size: 18px; color: #475569; line-height: 1.9; }

  .highlight-box {
    background: linear-gradient(135deg, #0a1628, #162544);
    border-radius: 16px;
    padding: 32px;
    margin: 36px 0;
    color: #e2e8f0;
  }
  .highlight-box h3 { color: #60a5fa; margin-top: 0; }
  .highlight-box p { color: #cbd5e1; }
  .highlight-box strong { color: #ffffff; }

  .info-box {
    background: #fffbeb;
    border-left: 4px solid #f59e0b;
    border-radius: 0 12px 12px 0;
    padding: 20px 24px;
    margin: 28px 0;
  }
  .info-box p { color: #92400e; margin: 0; font-size: 15px; }

  .comparison-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 32px 0;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 20px rgba(0,0,0,0.06);
  }
  .comparison-table thead th {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: #ffffff;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 16px 14px;
    text-align: center;
  }
  .comparison-table thead th:first-child { text-align: left; }
  .comparison-table thead th.winner {
    background: linear-gradient(135deg, #1e40af, #3b82f6);
  }
  .comparison-table tbody td {
    padding: 14px;
    font-size: 14px;
    border-bottom: 1px solid #f1f5f9;
    text-align: center;
    color: #475569;
  }
  .comparison-table tbody td:first-child {
    text-align: left;
    font-weight: 500;
    color: #1e293b;
  }
  .comparison-table tbody tr:last-child td { border-bottom: none; }
  .comparison-table tbody tr:hover { background: #f8fafc; }
  .check { color: #22c55e; font-weight: 700; font-size: 18px; }
  .cross { color: #ef4444; font-weight: 700; font-size: 18px; }
  .partial { color: #f59e0b; font-weight: 700; font-size: 14px; }

  .benefit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin: 28px 0;
  }
  .benefit-card {
    background: linear-gradient(135deg, #f0f9ff, #ffffff);
    border: 1px solid #dbeafe;
    border-radius: 14px;
    padding: 24px 20px;
    text-align: center;
  }
  .benefit-card .icon { font-size: 32px; margin-bottom: 10px; }
  .benefit-card h4 { font-size: 14px; font-weight: 700; color: #1e40af; margin-bottom: 6px; }
  .benefit-card p { font-size: 13px; color: #64748b; margin: 0; line-height: 1.5; }

  /* CTA Section */
  .cta-section {
    background: linear-gradient(135deg, #0a1628 0%, #162544 50%, #0d3b66 100%);
    border-radius: 20px;
    padding: 48px 36px;
    text-align: center;
    margin: 48px 0 24px;
    position: relative;
    overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute;
    top: -50%; right: -30%;
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%);
    border-radius: 50%;
  }
  .cta-section h2 {
    font-family: 'Playfair Display', Georgia, serif;
    color: #ffffff;
    margin: 0 0 12px;
    font-size: 28px;
    position: relative;
  }
  .cta-section h2 span { color: #60a5fa; }
  .cta-section p {
    color: #94a3b8;
    font-size: 16px;
    margin-bottom: 28px;
    position: relative;
  }
  .cta-button {
    display: inline-block;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    padding: 16px 40px;
    border-radius: 12px;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative;
    box-shadow: 0 4px 20px rgba(59,130,246,0.4);
  }
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(59,130,246,0.5);
  }

  .mid-cta {
    background: linear-gradient(135deg, #eff6ff, #dbeafe);
    border: 1px solid #bfdbfe;
    border-radius: 16px;
    padding: 28px 32px;
    margin: 36px 0;
    text-align: center;
  }
  .mid-cta p { color: #1e40af; font-weight: 600; margin-bottom: 16px; font-size: 16px; }
  .mid-cta a {
    display: inline-block;
    background: #2563eb;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 28px;
    border-radius: 10px;
    text-decoration: none;
  }

  ul.check-list {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }
  ul.check-list li {
    padding: 8px 0 8px 32px;
    position: relative;
    font-size: 15.5px;
    color: #374151;
  }
  ul.check-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #22c55e;
    font-weight: 700;
    font-size: 16px;
  }

  blockquote {
    border-left: 4px solid #3b82f6;
    background: #f8fafc;
    padding: 20px 24px;
    margin: 28px 0;
    border-radius: 0 12px 12px 0;
    font-style: italic;
    color: #475569;
  }

  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, #cbd5e1, transparent);
    margin: 48px 0;
  }

  .footer-article {
    text-align: center;
    padding: 40px 24px;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
  }
  .footer-article img { height: 32px; margin-bottom: 12px; }
  .footer-article p { font-size: 13px; color: #94a3b8; }

  .numbered-section {
    counter-reset: section-counter;
  }
  .numbered-section h2::before {
    counter-increment: section-counter;
  }

  @media (max-width: 640px) {
    .article-header { padding: 48px 20px 72px; }
    .content-card { padding: 28px 20px; }
    .cta-section { padding: 32px 20px; }
    .comparison-table { font-size: 12px; }
    .comparison-table thead th, .comparison-table tbody td { padding: 10px 6px; }
  }
</style>
</head>
<body>

<!-- HEADER -->
<header class="article-header">
  <div class="header-content">
    <div class="badge">Guia Completo 2025</div>
    <h1>Qual é o melhor <span>filtro de água</span>?</h1>
    <p class="subtitle">Analisamos todos os tipos de filtros e purificadores do mercado para você tomar a melhor decisão para a saúde da sua família.</p>
    <p class="meta">Por <span>Equipe Acqualive</span> · Atualizado em Março 2025 · Leitura: 12 min</p>
  </div>
</header>

<!-- ARTICLE BODY -->
<main class="article-body">
  <div class="content-card">

    <!-- TABLE OF CONTENTS -->
    <nav class="toc">
      <h3>📑 Índice do Artigo</h3>
      <ol>
        <li>Introdução: Por que a escolha do filtro importa tanto?</li>
        <li>Os tipos de filtros de água disponíveis</li>
        <li>Filtro de barro: tradição com limitações</li>
        <li>Filtros de torneira e chuveiro</li>
        <li>Purificadores convencionais</li>
        <li>Osmose reversa: pureza extrema, mas a que custo?</li>
        <li>Filtro de água alcalina ionizada: a evolução</li>
        <li>Comparativo completo entre todos os tipos</li>
        <li>5 critérios essenciais para escolher o melhor filtro</li>
        <li>Por que a Acqualive é a melhor escolha</li>
      </ol>
    </nav>

    <!-- INTRODUCTION -->
    <h2>Por que a escolha do filtro de água importa tanto?</h2>
    
    <p class="lead">Você sabia que a água da torneira, mesmo tratada, pode conter cloro, agrotóxicos, metais pesados e microplásticos? A escolha do filtro certo não é apenas uma questão de sabor — é uma <strong>decisão de saúde</strong> para toda a sua família.</p>

    <p>Com centenas de marcas e modelos no mercado, é fácil cair no erro de achar que todos os filtros são iguais. A verdade é que existe uma diferença enorme entre simplesmente filtrar impurezas e realmente <strong>transformar a água</strong> em algo que beneficia seu organismo.</p>

    <p>Neste guia completo, vamos analisar cada tipo de filtro disponível no Brasil, seus prós e contras, e mostrar — com base em critérios técnicos e científicos — qual é a melhor opção para quem busca saúde, praticidade e economia.</p>

    <div class="info-box">
      <p>💡 <strong>Dica importante:</strong> Antes de comprar qualquer filtro, verifique se ele possui certificação do INMETRO. Sem esse selo, não há garantia de que o produto realmente faz o que promete.</p>
    </div>

    <div class="divider"></div>

    <!-- TYPES OF FILTERS -->
    <h2>Os tipos de filtros de água disponíveis no mercado</h2>

    <p>Para entender qual é o melhor filtro, precisamos conhecer as opções. Cada tecnologia tem suas vantagens e limitações. Vamos analisar cada uma:</p>

    <!-- FILTRO DE BARRO -->
    <h3>1. Filtro de Barro — A tradição brasileira</h3>
    
    <p>O filtro de barro é um ícone da cultura brasileira. Presente em milhões de lares, ele utiliza uma vela cerâmica (elemento filtrante) para reter partículas e algumas bactérias. A argila natural mantém a água fresca, dispensando energia elétrica.</p>

    <p><strong>Prós:</strong></p>
    <ul class="check-list">
      <li>Tradição e cultura brasileira</li>
      <li>Baixo custo de aquisição</li>
      <li>Mantém a água fresca naturalmente</li>
      <li>Não usa energia elétrica</li>
    </ul>

    <p><strong>Limitações:</strong></p>
    <p>Apesar do charme, o filtro de barro <strong>não remove cloro, agrotóxicos, metais pesados e vírus</strong>. A vela cerâmica tem uma capacidade de filtração limitada e precisa de manutenção constante para evitar proliferação de microrganismos. Além disso, não adiciona nenhum benefício à água — apenas remove algumas impurezas maiores.</p>

    <!-- FILTRO DE TORNEIRA -->
    <h3>2. Filtros de Torneira e Chuveiro</h3>
    
    <p>São filtros compactos acoplados diretamente na saída de água. Usam carvão ativado para reduzir o cloro e melhorar o sabor. São práticos, mas têm vida útil curta e eficiência limitada.</p>

    <p>Esses filtros são uma solução básica, ideal para quem quer apenas remover o gosto de cloro. Porém, <strong>não eliminam bactérias, vírus ou contaminantes químicos mais pesados</strong>.</p>

    <!-- PURIFICADORES CONVENCIONAIS -->
    <h3>3. Purificadores Convencionais</h3>
    
    <p>Os purificadores de bancada ou parede são os mais populares no Brasil. Utilizam uma combinação de elementos filtrantes (carvão ativado, membrana microfiltrante) para reter partículas, reduzir cloro e, em alguns modelos, eliminar bactérias.</p>

    <p>Muitos possuem certificação do INMETRO e são eficientes na <strong>filtragem básica</strong>. Porém, a maioria se limita a isso: filtrar. Não alcalinizam, não adicionam minerais e não possuem poder antioxidante.</p>

    <blockquote>
      "A principal função de um purificador é filtrar a água, mas os melhores aparelhos fazem disso um começo e não um fim." — Blog Acqualive
    </blockquote>

    <!-- OSMOSE REVERSA -->
    <h3>4. Osmose Reversa — Pureza extrema, mas a que custo?</h3>
    
    <p>Os sistemas de osmose reversa são os mais potentes em termos de filtração pura. Removem até 99% dos contaminantes, incluindo sais minerais, flúor e praticamente tudo que estiver dissolvido na água.</p>

    <p>O problema? A osmose reversa remove <strong>tudo</strong> — inclusive os minerais essenciais como cálcio, magnésio e potássio que seu corpo precisa. O resultado é uma água extremamente pura, porém <strong>"morta"</strong>, sem os nutrientes que a tornam benéfica para a saúde. Além disso, desperdiça até 3 litros de água para cada 1 litro filtrado.</p>

    <div class="info-box">
      <p>⚠️ <strong>Atenção:</strong> Água sem minerais pode, ao longo do tempo, contribuir para a desmineralização do organismo. A OMS reconhece que a água desmineralizada não é ideal para consumo prolongado.</p>
    </div>

    <div class="divider"></div>

    <!-- FILTRO ALCALINO IONIZADO -->
    <h2>Filtro de Água Alcalina Ionizada — A evolução definitiva</h2>

    <p class="lead">Aqui está onde a tecnologia se encontra com a saúde. O filtro de água alcalina ionizada não apenas filtra — ele <strong>transforma</strong> a água, elevando-a a um nível completamente novo.</p>

    <p>Diferente de todos os outros tipos, o purificador alcalino ionizado realiza múltiplas funções simultaneamente:</p>

    <div class="benefit-grid">
      <div class="benefit-card">
        <div class="icon">🛡️</div>
        <h4>Purificação Total</h4>
        <p>Remove cloro, agrotóxicos, metais pesados, vírus e bactérias</p>
      </div>
      <div class="benefit-card">
        <div class="icon">⚗️</div>
        <h4>pH Alcalino</h4>
        <p>Eleva o pH da água para faixa alcalina, equilibrando o organismo</p>
      </div>
      <div class="benefit-card">
        <div class="icon">💎</div>
        <h4>Rica em Minerais</h4>
        <p>Preserva e enriquece com magnésio, cálcio e potássio</p>
      </div>
      <div class="benefit-card">
        <div class="icon">⚡</div>
        <h4>Antioxidante</h4>
        <p>Combate radicais livres, retardando o envelhecimento celular</p>
      </div>
      <div class="benefit-card">
        <div class="icon">💧</div>
        <h4>Hidratação Superior</h4>
        <p>Maior capacidade de absorção celular que a água comum</p>
      </div>
      <div class="benefit-card">
        <div class="icon">🔬</div>
        <h4>PRAL Negativo</h4>
        <p>Poder alcalinizante real, mantendo o efeito mesmo após ingestão</p>
      </div>
    </div>

    <div class="highlight-box">
      <h3>O que é PRAL Negativo?</h3>
      <p>PRAL (Potential Renal Acid Load) é um índice científico que mede se um alimento ou bebida tem efeito ácido ou alcalino <strong>real</strong> no organismo. Não basta a água ter pH alto — ela precisa ter <strong>poder alcalinizante</strong>, ou seja, manter-se alcalina mesmo depois de ingerida.</p>
      <p>Muitas marcas prometem "água alcalina", mas se não há PRAL negativo comprovado, a promessa é vazia. Água alcalina sem poder alcalinizante é basicamente <strong>cobrar mais caro por um produto incompleto</strong>.</p>
    </div>

    <div class="mid-cta">
      <p>🔍 Quer entender por que médicos e especialistas recomendam água alcalina ionizada?</p>
      <a href="https://www.acqualive.com.br/pages/porque-acqualive" target="_blank">Descubra a Ciência por Trás</a>
    </div>

    <div class="divider"></div>

    <!-- COMPARISON TABLE -->
    <h2>Comparativo Completo: Todos os Tipos de Filtro</h2>

    <p>Agora que você conhece cada tecnologia, vamos colocá-las lado a lado para facilitar sua decisão:</p>

    <table class="comparison-table">
      <thead>
        <tr>
          <th>Critério</th>
          <th>Barro</th>
          <th>Torneira</th>
          <th>Convencional</th>
          <th>Osmose Reversa</th>
          <th class="winner">Alcalino Ionizado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Certificação INMETRO</td>
          <td><span class="partial">Alguns</span></td>
          <td><span class="partial">Alguns</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>Remove cloro</td>
          <td><span class="cross">✗</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>Elimina bactérias e vírus</td>
          <td><span class="partial">Parcial</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="partial">Alguns</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>Remove agrotóxicos</td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="partial">Alguns</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>Preserva minerais</td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>Água alcalina</td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>PRAL negativo</td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>Poder antioxidante</td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>Rica em magnésio</td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>Hidratação superior</td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="check">✓</span></td>
        </tr>
      </tbody>
    </table>

    <p>Como o comparativo deixa claro: enquanto outros filtros resolvem <em>parte</em> do problema, o filtro de água alcalina ionizada é o único que <strong>resolve tudo e vai além</strong>, adicionando benefícios reais para a saúde.</p>

    <div class="divider"></div>

    <!-- 5 CRITERIA -->
    <h2>5 Critérios Essenciais para Escolher o Melhor Filtro</h2>

    <p>Para não comprar "gato por lebre", avalie qualquer filtro com estes 5 critérios:</p>

    <h3>1. Certificação INMETRO</h3>
    <p>O INMETRO é o órgão federal que atesta qualidade e segurança dos produtos. Se o filtro não possui esse selo, <strong>cancele a compra imediatamente</strong>. Nenhum filtro sem essa certificação garante a pureza que você precisa.</p>

    <h3>2. Eficiência nos 3 testes básicos</h3>
    <p>Mesmo com selo INMETRO, purificadores têm capacidades diferentes. Confira a eficácia em:</p>
    <ul class="check-list">
      <li><strong>Retenção de Partículas</strong> — Quanto menor a partícula filtrada, melhor</li>
      <li><strong>Redução de Cloro Livre</strong> — Mínimo de 75% de remoção</li>
      <li><strong>Eficiência Bacteriológica</strong> — Capacidade de eliminar bactérias</li>
    </ul>

    <h3>3. O que faz além de filtrar?</h3>
    <p>Os melhores purificadores vão muito além da filtração. Verifique se o aparelho alcaliniza a água, adiciona minerais, torna a água antioxidante e aumenta o potencial de hidratação.</p>

    <h3>4. Capacidade de alcalinizar</h3>
    <p>Nosso corpo mantém um equilíbrio sanguíneo de pH levemente alcalino. Uma dieta muito ácida faz o organismo retirar minerais dos ossos para compensar. Beber água alcalina é fundamental para a saúde, especialmente a saúde óssea.</p>

    <h3>5. Mais que alcalina: Alcalinizante!</h3>
    <p>Este é o critério que separa os bons dos excelentes. Não basta pH alto — a água precisa ter <strong>PRAL negativo</strong>, ou seja, poder alcalinizante real. Sem isso, é apenas marketing.</p>

    <div class="divider"></div>

    <!-- ACQUALIVE -->
    <h2>Por que a Acqualive é a melhor escolha em filtros de água alcalina ionizada</h2>

    <p class="lead">Com mais de 15 anos de mercado e <strong>mais de 150 mil famílias atendidas</strong>, a Acqualive se consolidou como referência absoluta em purificação e tratamento de água no Brasil.</p>

    <p>Os purificadores Acqualive foram desenvolvidos com a mais alta tecnologia em transformação de água — um sistema que replica, quase à perfeição, o caminho natural que a água percorre na natureza. Isso significa que, independente de onde você mora, você terá acesso a uma água perfeitamente natural, como se fosse retirada de uma fonte intocada.</p>

    <div class="highlight-box">
      <h3>O que a Acqualive entrega que ninguém mais entrega:</h3>
      <p>✅ <strong>Pureza certificada pelo INMETRO</strong> — Elimina cloro, agrotóxicos, vírus e bactérias<br>
      ✅ <strong>pH alcalino comprovado</strong> — Equilibra o organismo e fortalece a saúde<br>
      ✅ <strong>PRAL negativo</strong> — Poder alcalinizante real, não apenas pH alto<br>
      ✅ <strong>Rica em magnésio</strong> — Mineral essencial para mais de 300 funções do corpo<br>
      ✅ <strong>Poder antioxidante</strong> — Combate radicais livres e retarda o envelhecimento<br>
      ✅ <strong>Hidratação funcional</strong> — Muito mais eficaz que a água comum<br>
      ✅ <strong>Médicos e atletas recomendam</strong> — Benefícios comprovados pela ciência<br>
      ✅ <strong>Tecnologia TriWay exclusiva</strong> — Sistema patenteado de purificação</p>
    </div>

    <blockquote>
      "Purificadores comuns prometem. Acqualive entrega." — A Acqualive garante o melhor copo de água do mundo, e isso vai transformar a saúde da sua família.
    </blockquote>

    <h3>E a água engarrafada? Também não é solução.</h3>
    <p>As águas engarrafadas parecem saudáveis, mas possuem problemas sérios: contaminação por microplásticos, armazenamento inadequado, procedência duvidosa e custo elevado. Você já parou para pensar no quanto é complicado carregar galões de 20 litros?</p>

    <p>Com a Acqualive, você tem acesso à água perfeita <strong>24 horas por dia</strong>, direto na sua cozinha, por um custo até <strong>66% menor</strong> que a água engarrafada.</p>

    <!-- FINAL CTA -->
    <div class="cta-section">
      <h2>Pare de procurar.<br><span>Escolha Acqualive.</span></h2>
      <p>Junte-se às mais de 150 mil famílias que já transformaram sua saúde com a melhor água do mundo.</p>
      <a href="https://www.acqualive.com.br/collections/purificadores" target="_blank" class="cta-button">QUERO MEU ACQUALIVE AGORA →</a>
    </div>

    <p style="text-align:center;font-size:14px;color:#94a3b8;margin-top:24px;">Dúvidas? <a href="https://www.acqualive.com.br/pages/porque-acqualive" target="_blank" style="color:#3b82f6;">Descubra por que a Acqualive é diferente →</a></p>

  </div>
</main>

<!-- FOOTER -->
<footer class="footer-article">
  <p>© 2025 Acqualive. Todos os direitos reservados.</p>
  <p style="margin-top:8px;">Conteúdo educativo. Fontes: Blog Acqualive, INMETRO, OMS.</p>
</footer>

</body>
</html>`,
  },
];

const BlogTemplates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const article = ARTICLES[currentIndex];

  const copyHtml = () => {
    navigator.clipboard.writeText(article.html);
    setCopied(true);
    toast.success("HTML copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  const copyTitle = () => {
    navigator.clipboard.writeText(article.title);
    toast.success("Título copiado!");
  };

  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-[#161b26] border-b border-[#1c2333] px-4 py-3">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-sm font-bold text-[#3b82f6]">Blog {currentIndex + 1}/{ARTICLES.length}</h1>
            <span className="text-sm text-gray-400 truncate max-w-[200px]">{article.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {ARTICLES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-8 h-8 rounded-md text-xs font-bold transition-colors ${
                  i === currentIndex
                    ? "bg-[#3b82f6] text-white"
                    : "bg-[#1c2333] text-gray-400 hover:bg-[#2a3142]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <Button
              size="sm"
              variant="outline"
              onClick={() => setCurrentIndex(Math.min(ARTICLES.length - 1, currentIndex + 1))}
              disabled={currentIndex === ARTICLES.length - 1}
              className="border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="w-px h-6 bg-[#1c2333] mx-1" />

            <Button
              size="sm"
              variant={viewMode === "preview" ? "default" : "outline"}
              onClick={() => setViewMode("preview")}
              className={viewMode === "preview" ? "bg-[#3b82f6] hover:bg-[#2563eb]" : "border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"}
            >
              <Eye className="h-4 w-4 mr-1" /> Preview
            </Button>
            <Button
              size="sm"
              variant={viewMode === "code" ? "default" : "outline"}
              onClick={() => setViewMode("code")}
              className={viewMode === "code" ? "bg-[#3b82f6] hover:bg-[#2563eb]" : "border-[#1c2333] bg-transparent text-gray-300 hover:bg-[#1c2333]"}
            >
              <Code className="h-4 w-4 mr-1" /> HTML
            </Button>

            <div className="w-px h-6 bg-[#1c2333] mx-1" />

            <Button size="sm" onClick={copyHtml} className="bg-[#3b82f6] hover:bg-[#2563eb]">
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? "Copiado!" : "Copiar HTML"}
            </Button>
          </div>
        </div>
      </div>

      {/* Title line */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3 bg-[#161b26] rounded-lg px-4 py-3 border border-[#1c2333]">
          <span className="text-xs text-gray-500 uppercase font-bold shrink-0">Título:</span>
          <span className="text-sm text-gray-200 flex-1">{article.title}</span>
          <button onClick={copyTitle} className="text-xs text-[#3b82f6] hover:underline shrink-0">Copiar</button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        {viewMode === "preview" ? (
          <div className="rounded-lg overflow-hidden bg-white">
            <iframe
              srcDoc={article.html}
              title={`Blog ${currentIndex + 1}`}
              className="w-full border-0"
              style={{ minHeight: "2400px" }}
            />
          </div>
        ) : (
          <pre className="bg-[#161b26] rounded-lg p-6 overflow-x-auto text-xs text-gray-300 border border-[#1c2333]" style={{ maxHeight: "80vh" }}>
            {article.html}
          </pre>
        )}
      </div>
    </div>
  );
};

export default BlogTemplates;
