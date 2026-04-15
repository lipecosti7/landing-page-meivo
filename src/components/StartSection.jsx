import { Badge } from "./ui/badge";

const steps = [
  {
    number: "01",
    title: "Registrar venda",
    description: "Selecione os produtos, defina a quantidade e finalize a venda em poucos toques. Sem fricção, sem demora.",
  },
  {
    number: "02",
    title: "Gerar Pix",
    description: "Gere um QR Code Pix na hora para o cliente pagar. Confirmação instantânea direto no painel.",
  },
  {
    number: "03",
    title: "Ver relatórios",
    description: "Acompanhe vendas, estoque e desempenho em tempo real. Tudo organizado, tudo na palma da mão.",
  },
];

export function StartSection() {
  return (
    <section id="como-funciona" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_10%_20%,rgba(43,157,238,0.18),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_90%_40%,rgba(26,86,255,0.12),transparent_55%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-8 lg:grid-cols-2 lg:px-16">
        <div>
          <Badge>Como funciona</Badge>
          <h2 className="mt-4 text-4xl font-heading leading-[1] tracking-tight text-foreground md:text-5xl">
            Do cadastro à venda, sem atrito.
          </h2>
          <p className="mt-5 max-w-xl text-sm font-medium text-foreground/65 md:text-base">
            O Meivo PDV foi feito para operações rápidas no dia a dia. Você configura uma vez e vende com fluidez.
          </p>

          <div className="mt-10 space-y-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group liquid-glass rounded-2xl p-5 transition-shadow duration-200 hover:shadow-md"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2B9DEE]/10 text-xs font-extrabold text-[#2B9DEE] transition-colors duration-200 group-hover:bg-[#2B9DEE] group-hover:text-white">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-semibold text-foreground">{step.title}</div>
                    <div className="mt-1 text-sm font-medium text-foreground/60">{step.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contato"
              aria-label="Ir para contato"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#2B9DEE] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-out hover:bg-[#2B9DEE]/90 hover:shadow-[0_0_28px_rgba(43,157,238,0.45)]"
            >
              Começar agora
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(closest-side,rgba(43,157,238,0.22),transparent)] blur-2xl" />
          <div className="liquid-glass overflow-hidden rounded-[32px] p-10">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-foreground">Mascote Meivo</div>
              <div className="text-xs font-medium text-foreground/50">Leve e confiável</div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <img
                src="/brand/mascot/mascote.png"
                alt="Mascote da Meivo"
                className="h-[260px] w-auto select-none sm:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
