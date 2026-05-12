import { useEffect, useRef, useState } from "react";

const stats = [
  {
    prefix: "",
    target: 50,
    suffix: "%",
    label: "Menos tempo por venda",
    tooltip:
      "Vendas registradas em menos de 10 segundos com o PDV otimizado da Meivo. Testado no balcão, aprovado por quem vende.",
    color: "#2B9DEE",
  },
  {
    prefix: "+",
    target: 3,
    suffix: "x",
    label: "Pedidos por hora",
    tooltip:
      "Equipes relatam triplicar a capacidade de atendimento durante o evento, comparado a métodos manuais.",
    color: "#1A56FF",
  },
  {
    prefix: "R$",
    target: 0,
    suffix: "",
    label: "Mensalidade",
    tooltip:
      "Zero mensalidade. Você paga apenas 5% por venda concluída. Se não vender, não paga nada. Simples assim.",
    color: "#10B981",
  },
  {
    prefix: "",
    target: 100,
    suffix: "%",
    label: "Funciona offline",
    tooltip:
      "Seu PDV opera mesmo sem internet e sincroniza automaticamente quando a conexão voltar. Nunca pare de vender.",
    color: "#4894FE",
  },
];

function useCountUp(target, active, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (target === 0) {
      setCount(0);
      return;
    }
    let start = null;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return count;
}

function StatCard({ stat, active, index }) {
  const count = useCountUp(stat.target, active, 1000 + index * 150);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="group relative cursor-default"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      tabIndex={0}
      role="button"
      aria-label={`${stat.label}: ${stat.prefix}${stat.target}${stat.suffix}. ${stat.tooltip}`}
    >
      {/* Tooltip */}
      <div
        className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-56 -translate-x-1/2 rounded-2xl border border-black/[0.07] bg-white p-4 shadow-xl transition-all duration-200 ${
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        <p className="text-xs font-medium leading-relaxed text-foreground/65">
          {stat.tooltip}
        </p>
        <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-br-sm border-b border-r border-black/[0.07] bg-white" />
      </div>

      {/* Card */}
      <div className="relative overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-lg">
        {/* accent glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 20% 80%, ${stat.color}10, transparent 60%)`,
          }}
        />

        {/* info icon */}
        <div className="absolute right-4 top-4 text-foreground/20 transition-colors duration-200 group-hover:text-foreground/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>

        {/* colored accent bar */}
        <div
          className="mb-5 h-[3px] w-8 rounded-full transition-all duration-300 group-hover:w-12"
          style={{ backgroundColor: stat.color }}
        />

        <div
          className="text-4xl font-heading font-extrabold tracking-[-1.5px] transition-colors duration-300 md:text-5xl"
          style={{ color: active ? stat.color : "#CBD5E1" }}
        >
          {stat.prefix}
          {count}
          {stat.suffix}
        </div>

        <div className="mt-2 text-sm font-semibold text-foreground/55">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_30%_30%,rgba(43,157,238,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_75%_70%,rgba(26,86,255,0.08),transparent_55%)]" />

      <div className="mx-auto max-w-5xl px-8 lg:px-16">
        <div className="mb-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2B9DEE]/18 bg-[#2B9DEE]/5 px-4 py-1.5 text-xs font-semibold text-[#2B9DEE]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
            Números que importam
          </span>
        </div>

        <h2 className="mb-3 text-center text-3xl font-heading font-bold tracking-tight text-foreground md:text-4xl">
          Meivo transforma o seu evento
          <br />
          em dados concretos.
        </h2>
        <p className="mx-auto mb-12 max-w-md text-center text-sm font-medium text-foreground/50">
          Passe o mouse sobre cada número para entender o impacto real no seu
          dia a dia.
        </p>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-black/[0.06] bg-white px-6 py-4 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-3 text-xs font-medium text-foreground/45 sm:flex-row">
            <span>
              Dados baseados em uso real por comissões de formatura 2024–2025.
            </span>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              <span className="font-semibold text-[#10B981]">
                Resultados verificados
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
