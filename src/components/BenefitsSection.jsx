import { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";

const PixIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#pix-clip)">
      <path d="M1.924 13.591C1.50204 13.169 1.26499 12.5967 1.26499 12C1.26499 11.4033 1.50204 10.831 1.924 10.409L3.51499 8.81802C3.93694 8.39606 4.50924 8.15901 5.10598 8.15901C5.70272 8.15901 6.27501 8.39606 6.69697 8.81802L8.28796 10.409C8.70992 10.831 8.94697 11.4033 8.94697 12C8.94697 12.5967 8.70992 13.169 8.28796 13.591L6.69697 15.182C6.27501 15.6039 5.70272 15.841 5.10598 15.841C4.50924 15.841 3.93694 15.6039 3.51499 15.182L1.924 13.591ZM8.81829 20.4853C8.39633 20.0633 8.15928 19.491 8.15928 18.8943C8.15928 18.2976 8.39633 17.7253 8.81829 17.3033L10.4093 15.7123C10.8312 15.2904 11.4035 15.0533 12.0003 15.0533C12.597 15.0533 13.1693 15.2904 13.5913 15.7123L15.1822 17.3033C15.6042 17.7253 15.8413 18.2976 15.8413 18.8943C15.8413 19.491 15.6042 20.0633 15.1822 20.4853L13.5913 22.0763C13.1693 22.4982 12.597 22.7353 12.0003 22.7353C11.4035 22.7353 10.8312 22.4982 10.4093 22.0763L8.81829 20.4853ZM8.81829 6.6967C8.39633 6.27474 8.15928 5.70245 8.15928 5.10571C8.15928 4.50897 8.39633 3.93668 8.81829 3.51472L10.4093 1.92373C10.8312 1.50177 11.4035 1.26472 12.0003 1.26472C12.597 1.26472 13.1693 1.50177 13.5913 1.92373L15.1822 3.51472C15.6042 3.93668 15.8413 4.50897 15.8413 5.10571C15.8413 5.70245 15.6042 6.27474 15.1822 6.6967L13.5913 8.28769C13.1693 8.70965 12.597 8.9467 12.0003 8.9467C11.4035 8.9467 10.8312 8.70965 10.4093 8.28769L8.81829 6.6967ZM15.7126 13.591C15.2906 13.169 15.0536 12.5967 15.0536 12C15.0536 11.4033 15.2906 10.831 15.7126 10.409L17.3036 8.81802C17.7255 8.39606 18.2978 8.15901 18.8946 8.15901C19.4913 8.15901 20.0636 8.39606 20.4856 8.81802L22.0765 10.409C22.4985 10.831 22.7356 11.4033 22.7356 12C22.7356 12.5967 22.4985 13.169 22.0765 13.591L20.4856 15.182C20.0636 15.6039 19.4913 15.841 18.8946 15.841C18.2978 15.841 17.7255 15.6039 17.3036 15.182L15.7126 13.591Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs><clipPath id="pix-clip"><rect width="24" height="24" fill="white"/></clipPath></defs>
  </svg>
);

const benefits = [
  {
    id: "planilhas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
        <line x1="6" y1="12" x2="18" y2="9"/>
      </svg>
    ),
    title: "Sem mais planilhas",
    description: "Chega de Excel quebrado e dados perdidos. Tudo centralizado, em tempo real.",
    accent: "#2B9DEE",
    size: "large",
  },
  {
    id: "toques",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-4 0v5"/>
        <path d="M14 10V4a2 2 0 0 0-4 0v2"/>
        <path d="M10 10.5V6a2 2 0 0 0-4 0v8"/>
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L8 15"/>
      </svg>
    ),
    title: "Vendas em poucos toques",
    description: "Interface otimizada para o balcão. Registre uma venda em menos de 10 segundos.",
    accent: "#1A56FF",
    size: "small",
  },
  {
    id: "offline",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="1" x2="23" y2="23"/>
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
        <path d="M10.71 5.05A16 16 0 0 1 22.56 9"/>
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
    title: "Funciona offline",
    description: "Internet instável? Sem problema. O Meivo vende e sincroniza depois.",
    accent: "#10B981",
    size: "small",
  },
  {
    id: "pix",
    icon: <PixIcon />,
    title: "Pix integrado",
    description: "QR Code gerado na hora, confirmação automática, zero complicação.",
    accent: "#2B9DEE",
    size: "small",
  },
  {
    id: "estoque",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7.5 4.27 9 5.15"/>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
        <path d="m3.3 7 8.7 5 8.7-5"/>
        <path d="M12 22V12"/>
      </svg>
    ),
    title: "Estoque em tempo real",
    description: "Baixa automática a cada venda. Nunca mais vender o que não tem.",
    accent: "#4894FE",
    size: "medium",
  },
  {
    id: "relatorios",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Relatórios claros",
    description: "Veja o que vendeu, quanto entrou e como sua equipe performou.",
    accent: "#1A7BD4",
    size: "medium",
  },
];

function BenefitCard({ benefit, inView }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease" }}
    >
      {/* accent glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[24px]"
        style={{ background: `radial-gradient(circle at 20% 20%, ${benefit.accent}18, transparent 65%)` }}
      />

      <div
        className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl transition-colors duration-200"
        style={{ backgroundColor: `${benefit.accent}15`, color: benefit.accent }}
      >
        {benefit.icon}
      </div>
      <h3 className="text-base font-bold text-foreground">{benefit.title}</h3>
      <p className="mt-2 text-sm font-medium leading-relaxed text-foreground/55">{benefit.description}</p>
    </div>
  );
}

export function BenefitsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="beneficios" ref={ref} className="relative overflow-hidden py-24">
      {/* diagonal background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_80%_10%,rgba(43,157,238,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_5%_80%,rgba(26,86,255,0.09),transparent_55%)]" />
        {/* diagonal stripe */}
        <div
          className="absolute left-0 right-0 top-0 h-full opacity-[0.025]"
          style={{
            background: "repeating-linear-gradient(-60deg, #2B9DEE 0px, #2B9DEE 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-8 lg:px-16">
        <div className="mb-4">
          <Badge>Benefícios</Badge>
        </div>
        <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-lg text-4xl font-heading font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Feito para quem<br />
            <span className="text-[#2B9DEE]">vende de verdade.</span>
          </h2>
          <p className="max-w-xs text-sm font-medium text-foreground/55 lg:text-right">
            Cada detalhe do Meivo foi pensado para microempreendedores que precisam de agilidade, não de burocracia.
          </p>
        </div>

        {/* Asymmetric diagonal grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {/* Large card — spans 5 cols, 2 rows */}
          <div
            className={`lg:col-span-5 lg:row-span-2 transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="group relative h-full min-h-[280px] overflow-hidden rounded-[28px] border border-[#2B9DEE]/20 bg-gradient-to-br from-[#2B9DEE]/10 via-white to-[#1A56FF]/5 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:min-h-0">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(43,157,238,0.18),transparent_60%)]" />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2B9DEE]/15 text-[#2B9DEE]">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="9" y1="15" x2="15" y2="15"/>
                  <line x1="6" y1="12" x2="18" y2="9"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Sem mais planilhas</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/60">
                Chega de Excel quebrado, dados perdidos e dor de cabeça no fechamento. O Meivo centraliza tudo: vendas, estoque e relatórios em tempo real, numa interface que qualquer pessoa aprende em minutos.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Estoque automático", "Histórico completo", "Sem erros manuais"].map((tag) => (
                  <span key={tag} className="rounded-full bg-[#2B9DEE]/10 px-3 py-1 text-xs font-semibold text-[#2B9DEE]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Top-right small cards */}
          {benefits.slice(1, 3).map((b, i) => (
            <div
              key={b.id}
              className={`lg:col-span-4 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <BenefitCard benefit={b} inView={inView} />
            </div>
          ))}

          {/* Pix card — spans 3 cols */}
          <div
            className={`lg:col-span-3 transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "240ms" }}
          >
            <BenefitCard benefit={benefits[3]} inView={inView} />
          </div>

          {/* Video placeholder — wide, diagonal offset */}
          <div
            className={`sm:col-span-2 lg:col-span-7 transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            <div className="relative overflow-hidden rounded-[28px] border border-[#2B9DEE]/15 bg-gradient-to-br from-[#060A12] via-[#0D1B2E] to-[#0A1628] p-8 shadow-sm">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(43,157,238,0.22),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(26,86,255,0.18),transparent_50%)]" />

              <div className="relative flex flex-col items-center justify-center py-8 text-center">
                {/* Placeholder play icon */}
                <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                  <div className="absolute inset-0 animate-ping rounded-full bg-[#2B9DEE]/30" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white/90">Em breve: Meivo em ação</p>
                <p className="mt-2 max-w-xs text-xs font-medium text-white/50">
                  Celular → Maquininha → PDV → Relatório. Tudo em um só sistema.
                </p>
                <div className="mt-5 flex items-center gap-3 text-white/40">
                  <span className="flex items-center gap-1.5 text-xs font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                    PDV Mobile
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="flex items-center gap-1.5 text-xs font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                    Ponto de Venda
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="flex items-center gap-1.5 text-xs font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    Relatórios
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom two cards */}
          {benefits.slice(4, 6).map((b, i) => (
            <div
              key={b.id}
              className={`lg:col-span-4 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(i + 4) * 80}ms` }}
            >
              <BenefitCard benefit={b} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
