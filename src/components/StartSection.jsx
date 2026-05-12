import { Badge } from "./ui/badge";

const steps = [
  {
    number: "01",
    title: "Registrar venda",
    description:
      "Selecione os produtos, defina a quantidade e finalize a venda em poucos toques. Sem fricção, sem demora.",
  },
  {
    number: "02",
    title: "Gerar Pix",
    description:
      "Gere um QR Code Pix na hora para o cliente pagar. Confirmação instantânea direto no painel.",
  },
  {
    number: "03",
    title: "Ver relatórios",
    description:
      "Acompanhe vendas, estoque e desempenho em tempo real. Tudo organizado, tudo na palma da mão.",
  },
];

export function StartSection() {
  return (
    <section id="como-funciona" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_8%_20%,rgba(43,157,238,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_circle_at_92%_50%,rgba(26,86,255,0.09),transparent_55%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-8 lg:grid-cols-2 lg:px-16">
        {/* Left column */}
        <div>
          <Badge>Como funciona</Badge>
          <h2 className="mt-5 text-4xl font-heading font-bold leading-[1.02] tracking-tight text-foreground md:text-5xl">
            Do cadastro à venda,{" "}
            <span className="text-[#2B9DEE]">sem atrito.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-foreground/60 md:text-[0.9375rem]">
            O Meivo PDV foi feito para operações rápidas no dia a dia. Você
            configura uma vez e vende com fluidez.
          </p>

          <div className="mt-10 space-y-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group flex items-start gap-5 rounded-2xl border border-black/[0.055] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2B9DEE]/10 text-xs font-extrabold text-[#2B9DEE] transition-colors duration-200 group-hover:bg-[#2B9DEE] group-hover:text-white">
                    {step.number}
                  </div>
                </div>
                <div>
                  <div className="text-[0.9375rem] font-bold text-foreground">
                    {step.title}
                  </div>
                  <div className="mt-1 text-sm font-medium leading-relaxed text-foreground/55">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contato"
              aria-label="Ir para contato"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#2B9DEE] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 ease-out hover:shadow-[0_0_28px_rgba(43,157,238,0.45)]"
            >
              <span className="pointer-events-none absolute inset-0 translate-y-full rounded-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative">Começar agora</span>
              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Right column — mascot card */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(43,157,238,0.18),transparent)] blur-2xl" />
          <div className="overflow-hidden rounded-[32px] border border-black/[0.06] bg-white p-10 shadow-md">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold text-foreground">
                Mascote Meivo
              </div>
              <div className="rounded-full bg-[#2B9DEE]/8 px-3 py-1 text-xs font-semibold text-[#2B9DEE]">
                Leve e confiável
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <img
                src="/brand/mascot/mascote.png"
                alt="Mascote da Meivo"
                className="h-[260px] w-auto select-none sm:h-[340px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
