import { useState } from "react";

const PIX_RATE = 0.05; // 5%

const PixSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#pix-calc-clip)">
      <path d="M1.924 13.591C1.50204 13.169 1.26499 12.5967 1.26499 12C1.26499 11.4033 1.50204 10.831 1.924 10.409L3.51499 8.81802C3.93694 8.39606 4.50924 8.15901 5.10598 8.15901C5.70272 8.15901 6.27501 8.39606 6.69697 8.81802L8.28796 10.409C8.70992 10.831 8.94697 11.4033 8.94697 12C8.94697 12.5967 8.70992 13.169 8.28796 13.591L6.69697 15.182C6.27501 15.6039 5.70272 15.841 5.10598 15.841C4.50924 15.841 3.93694 15.6039 3.51499 15.182L1.924 13.591ZM8.81829 20.4853C8.39633 20.0633 8.15928 19.491 8.15928 18.8943C8.15928 18.2976 8.39633 17.7253 8.81829 17.3033L10.4093 15.7123C10.8312 15.2904 11.4035 15.0533 12.0003 15.0533C12.597 15.0533 13.1693 15.2904 13.5913 15.7123L15.1822 17.3033C15.6042 17.7253 15.8413 18.2976 15.8413 18.8943C15.8413 19.491 15.6042 20.0633 15.1822 20.4853L13.5913 22.0763C13.1693 22.4982 12.597 22.7353 12.0003 22.7353C11.4035 22.7353 10.8312 22.4982 10.4093 22.0763L8.81829 20.4853ZM8.81829 6.6967C8.39633 6.27474 8.15928 5.70245 8.15928 5.10571C8.15928 4.50897 8.39633 3.93668 8.81829 3.51472L10.4093 1.92373C10.8312 1.50177 11.4035 1.26472 12.0003 1.26472C12.597 1.26472 13.1693 1.50177 13.5913 1.92373L15.1822 3.51472C15.6042 3.93668 15.8413 4.50897 15.8413 5.10571C15.8413 5.70245 15.6042 6.27474 15.1822 6.6967L13.5913 8.28769C13.1693 8.70965 12.597 8.9467 12.0003 8.9467C11.4035 8.9467 10.8312 8.70965 10.4093 8.28769L8.81829 6.6967ZM15.7126 13.591C15.2906 13.169 15.0536 12.5967 15.0536 12C15.0536 11.4033 15.2906 10.831 15.7126 10.409L17.3036 8.81802C17.7255 8.39606 18.2978 8.15901 18.8946 8.15901C19.4913 8.15901 20.0636 8.39606 20.4856 8.81802L22.0765 10.409C22.4985 10.831 22.7356 11.4033 22.7356 12C22.7356 12.5967 22.4985 13.169 22.0765 13.591L20.4856 15.182C20.0636 15.6039 19.4913 15.841 18.8946 15.841C18.2978 15.841 17.7255 15.6039 17.3036 15.182L15.7126 13.591Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs><clipPath id="pix-calc-clip"><rect width="24" height="24" fill="white"/></clipPath></defs>
  </svg>
);

const fmt = (val) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);

function parseCurrency(raw) {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return 0;
  return parseInt(digits, 10) / 100;
}

function formatInput(val) {
  if (!val && val !== 0) return "";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(val);
}

export function TaxCalculator() {
  const [raw, setRaw] = useState("1000");
  const numericVal = parseCurrency(raw);
  const fee = numericVal * PIX_RATE;
  const net = numericVal - fee;

  const handleChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    setRaw(digits);
  };

  const displayValue = formatInput(numericVal);

  return (
    <section id="calculadora" className="relative overflow-hidden py-24">
      {/* Dark teal/navy background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#060D1A]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_15%_50%,rgba(43,157,238,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_circle_at_85%_30%,rgba(26,86,255,0.18),transparent_55%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-8 lg:grid-cols-2 lg:px-16">
        {/* Left: headline */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2B9DEE]" />
            Transparência total
          </div>

          <h2 className="mt-6 text-4xl font-heading font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            Nossos clientes pagam apenas{" "}
            <span className="text-[#2B9DEE]">5%</span>{" "}
            por venda realizada.
          </h2>

          <p className="mt-6 text-sm font-medium leading-relaxed text-white/55 md:text-base">
            Sem mensalidade. Sem taxa de adesão. Sem surpresas. A Meivo só cobra quando você vende — e ainda assim é um dos menores custos do mercado.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Sem mensalidade fixa",
              "Sem taxa de adesão",
              "Pagamento apenas por venda concluída",
              "Relatório completo de repasses",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/70">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#2B9DEE]/20 text-[#2B9DEE]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: calculator card */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[36px] bg-[radial-gradient(closest-side,rgba(43,157,238,0.28),transparent)] blur-2xl" />

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl">
            {/* Pix tab */}
            <div className="flex items-center gap-2 border-b border-black/[0.07] px-6 py-4">
              <div className="flex items-center gap-2 rounded-full bg-[#2B9DEE]/10 px-3 py-1.5 text-xs font-bold text-[#2B9DEE]">
                <PixSVG />
                Pix
              </div>
              <span className="text-xs font-medium text-foreground/35">Única modalidade disponível</span>
            </div>

            <div className="p-6 space-y-1">
              {/* You charged */}
              <div className="rounded-2xl border border-black/[0.07] bg-[#F6F7F8] p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/40">
                  Você cobrou
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-foreground/40">R$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={raw ? formatInput(numericVal).replace("R$\u00a0", "").replace("R$ ", "") : ""}
                    onChange={handleChange}
                    placeholder="0,00"
                    className="w-full bg-transparent text-2xl font-extrabold tracking-tight text-foreground outline-none placeholder:text-foreground/20"
                    aria-label="Valor cobrado"
                  />
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2B9DEE]/10 text-[#2B9DEE]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                </div>
              </div>

              {/* Fee row */}
              <div className="rounded-2xl border border-[#EF4444]/10 bg-[#EF4444]/[0.04] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/40">
                      Meivo cobra
                    </p>
                    <p className="mt-1 text-xs font-medium text-foreground/50">
                      Taxa de 5% por transação
                    </p>
                  </div>
                  <p className="text-lg font-bold text-[#EF4444]">
                    {numericVal > 0 ? `− ${fmt(fee)}` : "−"}
                  </p>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                </div>
              </div>

              {/* You receive */}
              <div className="rounded-2xl border border-[#10B981]/20 bg-[#10B981]/[0.06] p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/40">
                  Você recebe
                </p>
                <p className="text-3xl font-extrabold tracking-tight text-foreground">
                  {numericVal > 0 ? fmt(net) : <span className="text-foreground/25">R$ 0,00</span>}
                </p>
                {numericVal > 0 && (
                  <p className="mt-1 text-xs font-medium text-[#10B981]">
                    95% do valor cobrado
                  </p>
                )}
              </div>

              {/* Footer note */}
              <p className="pt-3 text-center text-[11px] font-medium text-foreground/35">
                Cálculo estimado · Pix instantâneo · Sem mensalidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
