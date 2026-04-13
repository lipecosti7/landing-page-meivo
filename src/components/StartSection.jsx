import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const steps = [
  {
    title: "Instale como PWA",
    description: "Abra no celular e instale. Mobile-first, do jeito certo para o balcão.",
  },
  {
    title: "Cadastre produtos e estoque",
    description: "Organize categorias, quantidades e histórico sem planilhas.",
  },
  {
    title: "Venda e sincronize",
    description: "Funciona com internet instável e sincroniza quando a conexão voltar.",
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
            O Meivo PDV foi feito para operações rápidas no dia a dia. Você configura uma
            vez e vende com fluidez.
          </p>

          <div className="mt-10 space-y-4">
            {steps.map((step) => (
              <div key={step.title} className="liquid-glass rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="liquid-glass-strong mt-0.5 flex size-9 items-center justify-center rounded-full text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-foreground">
                      {step.title}
                    </div>
                    <div className="mt-1 text-sm font-medium text-foreground/60">
                      {step.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild variant="default" size="lg">
              <a href="#contato" aria-label="Ir para contato">
                Pedir demonstração
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
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
