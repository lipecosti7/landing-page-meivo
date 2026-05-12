import { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";

const PixIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#pix-clip)">
      <path d="M1.924 13.591C1.50204 13.169 1.26499 12.5967 1.26499 12C1.26499 11.4033 1.50204 10.831 1.924 10.409L3.51499 8.81802C3.93694 8.39606 4.50924 8.15901 5.10598 8.15901C5.70272 8.15901 6.27501 8.39606 6.69697 8.81802L8.28796 10.409C8.70992 10.831 8.94697 11.4033 8.94697 12C8.94697 12.5967 8.70992 13.169 8.28796 13.591L6.69697 15.182C6.27501 15.6039 5.70272 15.841 5.10598 15.841C4.50924 15.841 3.93694 15.6039 3.51499 15.182L1.924 13.591ZM8.81829 20.4853C8.39633 20.0633 8.15928 19.491 8.15928 18.8943C8.15928 18.2976 8.39633 17.7253 8.81829 17.3033L10.4093 15.7123C10.8312 15.2904 11.4035 15.0533 12.0003 15.0533C12.597 15.0533 13.1693 15.2904 13.5913 15.7123L15.1822 17.3033C15.6042 17.7253 15.8413 18.2976 15.8413 18.8943C15.8413 19.491 15.6042 20.0633 15.1822 20.4853L13.5913 22.0763C13.1693 22.4982 12.597 22.7353 12.0003 22.7353C11.4035 22.7353 10.8312 22.4982 10.4093 22.0763L8.81829 20.4853ZM8.81829 6.6967C8.39633 6.27474 8.15928 5.70245 8.15928 5.10571C8.15928 4.50897 8.39633 3.93668 8.81829 3.51472L10.4093 1.92373C10.8312 1.50177 11.4035 1.26472 12.0003 1.26472C12.597 1.26472 13.1693 1.50177 13.5913 1.92373L15.1822 3.51472C15.6042 3.93668 15.8413 4.50897 15.8413 5.10571C15.8413 5.70245 15.6042 6.27474 15.1822 6.6967L13.5913 8.28769C13.1693 8.70965 12.597 8.9467 12.0003 8.9467C11.4035 8.9467 10.8312 8.70965 10.4093 8.28769L8.81829 6.6967ZM15.7126 13.591C15.2906 13.169 15.0536 12.5967 15.0536 12C15.0536 11.4033 15.2906 10.831 15.7126 10.409L17.3036 8.81802C17.7255 8.39606 18.2978 8.15901 18.8946 8.15901C19.4913 8.15901 20.0636 8.39606 20.4856 8.81802L22.0765 10.409C22.4985 10.831 22.7356 11.4033 22.7356 12C22.7356 12.5967 22.4985 13.169 22.0765 13.591L20.4856 15.182C20.0636 15.6039 19.4913 15.841 18.8946 15.841C18.2978 15.841 17.7255 15.6039 17.3036 15.182L15.7126 13.591Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs><clipPath id="pix-clip"><rect width="24" height="24" fill="white" /></clipPath></defs>
  </svg>
);

const benefits = [
  {
    id: "toques",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-4 0v5" /><path d="M14 10V4a2 2 0 0 0-4 0v2" /><path d="M10 10.5V6a2 2 0 0 0-4 0v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L8 15" />
      </svg>
    ),
    title: "Vendas em poucos toques",
    description: "Interface otimizada para o balcão. Registre uma venda em menos de 10 segundos.",
    accent: "#2B9DEE",
  },
  {
    id: "offline",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="1" x2="23" y2="23" /><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" /><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" /><path d="M10.71 5.05A16 16 0 0 1 22.56 9" /><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
    title: "Funciona offline",
    description: "Internet instável? Sem problema. O Meivo vende e sincroniza depois.",
    accent: "#10B981",
  },
  {
    id: "pix",
    icon: <PixIcon />,
    title: "Pix integrado",
    description: "QR Code gerado na hora, confirmação automática, zero complicação.",
    accent: "#2B9DEE",
  },
  {
    id: "estoque",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
      </svg>
    ),
    title: "Estoque em tempo real",
    description: "Baixa automática a cada venda. Nunca mais vender o que não tem.",
    accent: "#4894FE",
  },
  {
    id: "relatorios",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Relatórios claros",
    description: "Veja o que vendeu, quanto entrou e como sua equipe performou.",
    accent: "#1A7BD4",
  },
];

function BenefitCard({ benefit, delay }) {
  return (
    <div
      className="group relative h-full overflow-hidden rounded-[22px] border border-black/[0.055] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[22px]"
        style={{ background: `radial-gradient(circle at 15% 15%, ${benefit.accent}14, transparent 60%)` }}
      />
      <div
        className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200"
        style={{ backgroundColor: `${benefit.accent}13`, color: benefit.accent }}
      >
        {benefit.icon}
      </div>
      <h3 className="text-[0.9375rem] font-bold text-foreground">{benefit.title}</h3>
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
    <section id="beneficios" ref={ref} className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_80%_10%,rgba(43,157,238,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_5%_80%,rgba(26,86,255,0.07),transparent_55%)]" />

      <div className="mx-auto max-w-6xl px-8 lg:px-16">
        <div className="mb-4">
          <Badge>Benefícios</Badge>
        </div>
        <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-lg text-4xl font-heading font-bold leading-[1.04] tracking-tight text-foreground md:text-5xl">
            Feito para quem{" "}
            <span className="text-[#2B9DEE]">vende de verdade.</span>
          </h2>
          <p className="max-w-xs text-sm font-medium leading-relaxed text-foreground/50 lg:text-right">
            Cada detalhe do Meivo foi pensado para microempreendedores que
            precisam de agilidade, não de burocracia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {/* Large hero card — "Sem mais planilhas" */}
          <div
            className={`lg:col-span-5 lg:row-span-2 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="group relative h-full min-h-[280px] overflow-hidden rounded-[26px] border border-[#2B9DEE]/18 bg-gradient-to-br from-[#2B9DEE]/8 via-white to-[#1A56FF]/4 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:min-h-0">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(43,157,238,0.14),transparent_58%)]" />
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2B9DEE]/12 text-[#2B9DEE]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                  <line x1="6" y1="12" x2="18" y2="9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Sem mais planilhas</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/58">
                Chega de Excel quebrado, dados perdidos e dor de cabeça no
                fechamento. O Meivo centraliza tudo: vendas, estoque e relatórios
                em tempo real.
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
          {benefits.slice(0, 2).map((b, i) => (
            <div
              key={b.id}
              className={`lg:col-span-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <BenefitCard benefit={b} delay={0} />
            </div>
          ))}

          {/* Pix card — spans 3 cols */}
          <div
            className={`lg:col-span-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "240ms" }}
          >
            <BenefitCard benefit={benefits[2]} delay={0} />
          </div>

          {/* Video placeholder */}
          <div
            className={`sm:col-span-2 lg:col-span-7 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "160ms" }}
          >
            <div className="relative overflow-hidden rounded-[26px] border border-white/8 bg-gradient-to-br from-[#070F1E] via-[#0D1B2E] to-[#091525] p-8 shadow-sm">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_65%,rgba(43,157,238,0.18),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(26,86,255,0.14),transparent_50%)]" />
              <div className="relative flex flex-col items-center justify-center py-8 text-center">
                <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/18 bg-white/8 backdrop-blur-sm">
                  <div className="absolute inset-0 animate-ping rounded-full bg-[#2B9DEE]/25" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-white/85">Em breve: Meivo em ação</p>
                <p className="mt-2 max-w-[220px] text-xs font-medium text-white/45">
                  Celular → Maquininha → PDV → Relatório. Tudo em um só sistema.
                </p>
                <div className="mt-5 flex items-center gap-3 text-white/35">
                  {["PDV Mobile", "Ponto de Venda", "Relatórios"].map((label, i) => (
                    <>
                      {i > 0 && <span key={`dot-${i}`} className="text-white/18">·</span>}
                      <span key={label} className="text-xs font-medium">{label}</span>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom two cards */}
          {benefits.slice(3, 5).map((b, i) => (
            <div
              key={b.id}
              className={`lg:col-span-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${(i + 4) * 80}ms` }}
            >
              <BenefitCard benefit={b} delay={0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
