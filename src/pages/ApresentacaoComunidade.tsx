import { useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import iconAcqualive from "@/assets/icon-acqualive.png";

/* ──────────────────────────── Slide data ──────────────────────────── */

const slides = [
  // Slide 1 — Capa
  {
    tag: "Visão Geral",
    title: "Ecossistema VIP Acqualive: Lealdade e Expansão",
    content: (
      <div className="space-y-8 max-w-2xl mx-auto">
        <p className="text-lg leading-relaxed opacity-80">
          Transformar a base de clientes em uma{" "}
          <span className="text-[hsl(var(--vip-gold))] font-semibold">
            comunidade exclusiva no WhatsApp
          </span>
          , onde o acesso é o prêmio pela geração de prova social.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap text-sm font-semibold tracking-wide">
          {["Review / Vídeo", "Comunidade VIP", "Indicações", "Recorrência"].map(
            (step, i, arr) => (
              <span key={step} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-lg border border-[hsl(var(--vip-gold)/0.3)] bg-[hsl(var(--vip-gold)/0.08)] text-[hsl(var(--vip-gold))]">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[hsl(var(--vip-gold)/0.4)]">→</span>
                )}
              </span>
            )
          )}
        </div>
      </div>
    ),
  },

  // Slide 2 — Escada de Benefícios
  {
    tag: "Gamificação",
    title: "A Escada de Benefícios",
    content: (
      <div className="space-y-5 max-w-2xl mx-auto">
        {[
          {
            action: "Review no Site",
            reward: "Convite para Comunidade VIP",
            emoji: "⭐",
          },
          {
            action: "Desafio de 1 Minuto (Vídeo)",
            reward: "50% de Desconto no Kit de Refis",
            emoji: "🎬",
          },
          {
            action: "Indicação Convertida",
            reward: "Kit de Refis Grátis",
            emoji: "🎁",
          },
        ].map((row) => (
          <div
            key={row.action}
            className="flex items-center gap-5 rounded-xl border border-[hsl(var(--vip-gold)/0.15)] bg-[hsl(var(--vip-surface))] p-5"
          >
            <span className="text-3xl flex-shrink-0">{row.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-primary-foreground text-sm sm:text-base">
                {row.action}
              </p>
              <p className="text-[hsl(var(--vip-gold))] text-sm mt-1">
                → {row.reward}
              </p>
            </div>
          </div>
        ))}
      </div>
    ),
  },

  // Slide 3 — Mecanismo da Comunidade
  {
    tag: "Comunidade",
    title: "O Mecanismo da Comunidade VIP",
    content: (
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-center opacity-80 mb-8">
          Grupo de WhatsApp silenciado{" "}
          <span className="text-[hsl(var(--vip-gold))]">(canal de transmissão)</span>
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              emoji: "⏰",
              label: "Antecipação de promoções",
              desc: "24h a 48h antes do público geral",
            },
            {
              emoji: "⚡",
              label: "Cupons relâmpago",
              desc: "Conteúdos educativos semanais",
            },
            {
              emoji: "🤝",
              label: "Parceiros exclusivos",
              desc: "Vantagens e acesso prioritário",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[hsl(var(--vip-gold)/0.12)] bg-[hsl(var(--vip-surface))] p-5 text-center"
            >
              <span className="text-2xl block mb-3">{item.emoji}</span>
              <p className="font-semibold text-primary-foreground text-sm mb-1">
                {item.label}
              </p>
              <p className="text-xs opacity-60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // Slide 4 — Calendário Quinzenal
  {
    tag: "Conteúdo",
    title: "Calendário Quinzenal de Conteúdo",
    content: (
      <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border border-[hsl(var(--vip-gold)/0.15)] bg-[hsl(var(--vip-surface))] p-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-[hsl(var(--vip-gold))] block mb-3">
            SEMANA 1 — AUTORIDADE
          </span>
          <ul className="space-y-3 text-sm opacity-80">
            <li>📋 Pílulas de saúde</li>
            <li>🏭 Bastidores da fábrica</li>
            <li>❓ Caixinha de perguntas</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[hsl(var(--vip-gold)/0.15)] bg-[hsl(var(--vip-surface))] p-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-[hsl(var(--vip-gold))] block mb-3">
            SEMANA 2 — EXPERIÊNCIA
          </span>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              🎙️ <strong>Live VIP</strong> — Terça, 19h
            </li>
            <li>📝 Resumo dos pontos-chave</li>
            <li>🎟️ Cupom bônus de 24h</li>
          </ul>
        </div>
      </div>
    ),
  },

  // Slide 5 — Jornada 6 meses
  {
    tag: "Automação",
    title: "A Jornada de 6 Meses",
    content: (
      <div className="max-w-3xl mx-auto">
        <p className="text-center opacity-60 text-sm mb-8">
          Régua de nutrição pós-venda para garantir uso e troca do refil
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              month: "Mês 1",
              label: "Instalação e Hábito",
              desc: "Boas-vindas, guia de instalação e pesquisa NPS.",
            },
            {
              month: "Mês 2",
              label: "Prova Social",
              desc: "Gatilho do 'Desafio de 1 Minuto' (50% de desconto).",
            },
            {
              month: "Mês 3",
              label: "Engajamento",
              desc: "Ativação da conta de indicação e Vouchers de Saúde.",
            },
            {
              month: "Mês 4–5",
              label: "Consciência",
              desc: "Sustentabilidade e preparação técnica para a troca.",
            },
            {
              month: "Mês 6",
              label: "Fechamento",
              desc: "Ciclo de urgência e venda/entrega do refil grátis.",
            },
          ].map((m) => (
            <div
              key={m.month}
              className="rounded-xl border border-[hsl(var(--vip-gold)/0.12)] bg-[hsl(var(--vip-surface))] p-5"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-[hsl(var(--vip-gold))] block mb-2">
                {m.month}
              </span>
              <p className="font-semibold text-primary-foreground text-sm mb-1">
                {m.label}
              </p>
              <p className="text-xs opacity-60 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // Slide 6 — Landing Page e Captação
  {
    tag: "Funil",
    title: "Landing Page e Captação",
    content: (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <p className="text-lg font-semibold text-[hsl(var(--vip-gold))] italic mb-2">
            "Sua opinião é o seu passaporte para o Ecossistema VIP."
          </p>
          <p className="text-sm opacity-60">Headline de desejo da LP</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-xl border border-[hsl(var(--vip-gold)/0.15)] bg-[hsl(var(--vip-surface))] p-6 text-center">
            <span className="text-3xl block mb-3">⭐</span>
            <p className="font-semibold text-primary-foreground mb-1">Porta 1 — Review</p>
            <p className="text-sm opacity-60">Acesso à comunidade</p>
          </div>
          <div className="rounded-xl border border-[hsl(var(--vip-gold)/0.15)] bg-[hsl(var(--vip-surface))] p-6 text-center">
            <span className="text-3xl block mb-3">🎬</span>
            <p className="font-semibold text-primary-foreground mb-1">Porta 2 — Vídeo</p>
            <p className="text-sm opacity-60">
              Acesso VIP + 50% de Desconto{" "}
              <span className="text-[hsl(var(--vip-gold))]">(1 por CPF)</span>
            </p>
          </div>
        </div>
        <p className="text-center text-sm opacity-60">
          + FAQ Estratégico para quebra de objeções sobre funcionamento e recompensas
        </p>
      </div>
    ),
  },

  // Slide 7 — If/Then
  {
    tag: "Automação",
    title: 'Lógica "If / Then"',
    content: (
      <div className="max-w-2xl mx-auto space-y-5">
        <p className="text-center opacity-60 text-sm mb-6">
          Ações automáticas baseadas no comportamento do cliente
        </p>
        {[
          {
            condition: "Não abriu e-mails",
            action:
              "Disparo de WhatsApp do Gustavo para resgate",
            emoji: "📩",
          },
          {
            condition: "Clicou em indicar",
            action:
              "Foco total em suporte à venda e dicas de abordagem",
            emoji: "🎯",
          },
          {
            condition: "Comprou antecipado",
            action:
              "Interrompe cobranças e reinicia o ciclo de 6 meses",
            emoji: "🔄",
          },
        ].map((row) => (
          <div
            key={row.condition}
            className="flex items-center gap-5 rounded-xl border border-[hsl(var(--vip-gold)/0.15)] bg-[hsl(var(--vip-surface))] p-5"
          >
            <span className="text-2xl flex-shrink-0">{row.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold tracking-wide text-[hsl(var(--vip-gold))] mb-1">
                IF: {row.condition}
              </p>
              <p className="text-sm opacity-80">THEN: {row.action}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },

  // Slide 8 — Próximos Passos
  {
    tag: "Implementação",
    title: "Próximos Passos",
    content: (
      <div className="max-w-2xl mx-auto space-y-5">
        {[
          {
            number: "01",
            text: "Disparo da campanha de lançamento da Comunidade para a base atual.",
          },
          {
            number: "02",
            text: "Ativação da Landing Page de captação de Reviews/Vídeos.",
          },
          {
            number: "03",
            text: "Configuração da automação de 180 dias para novos compradores.",
          },
        ].map((step) => (
          <div
            key={step.number}
            className="flex items-center gap-5 rounded-xl border border-[hsl(var(--vip-gold)/0.15)] bg-[hsl(var(--vip-surface))] p-6"
          >
            <span className="text-2xl font-display font-bold text-[hsl(var(--vip-gold))]">
              {step.number}
            </span>
            <p className="text-sm sm:text-base opacity-80">{step.text}</p>
          </div>
        ))}
        <p className="text-center text-[hsl(var(--vip-gold))] font-semibold text-lg mt-8">
          O que você gostaria que eu detalhasse mais para enriquecer esse PPT?
        </p>
      </div>
    ),
  },
];

/* ──────────────────────────── Component ──────────────────────────── */

const ApresentacaoComunidade = () => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => Math.max(0, c - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => Math.min(slides.length - 1, c + 1)),
    []
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <>
      <Helmet>
        <title>Apresentação — Projeto Ecossistema VIP Acqualive</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-[hsl(var(--vip-bg))] text-[hsl(var(--vip-text))] min-h-screen flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--vip-gold)/0.1)]">
          <div className="flex items-center gap-3">
            <img src={iconAcqualive} alt="Acqualive" className="h-8 w-auto opacity-70" />
            <span className="hidden sm:inline text-xs tracking-widest uppercase opacity-40 font-semibold">
              Apresentação Interna
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs opacity-50">
            <Presentation className="w-4 h-4" />
            <span>
              {current + 1} / {slides.length}
            </span>
          </div>
        </header>

        {/* Slide area */}
        <div className="flex-1 flex items-center justify-center px-6 py-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl mx-auto text-center"
            >
              <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(var(--vip-gold))] mb-4">
                {slide.tag}
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-10 leading-tight">
                {slide.title}
              </h1>
              {slide.content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <footer className="flex items-center justify-between px-6 py-4 border-t border-[hsl(var(--vip-gold)/0.1)]">
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex items-center gap-2 text-sm font-semibold text-[hsl(var(--vip-text-muted))] hover:text-primary-foreground disabled:opacity-20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          {/* Progress dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-[hsl(var(--vip-gold))] w-6"
                    : "bg-[hsl(var(--vip-text-muted)/0.3)] hover:bg-[hsl(var(--vip-text-muted)/0.5)]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="flex items-center gap-2 text-sm font-semibold text-[hsl(var(--vip-text-muted))] hover:text-primary-foreground disabled:opacity-20 transition-colors"
          >
            <span className="hidden sm:inline">Próximo</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </footer>
      </div>
    </>
  );
};

export default ApresentacaoComunidade;
