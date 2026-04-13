import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export function CtaFooter() {
  return (
    <section id="contato" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[40px] bg-[#060A12]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#2B9DEE]/35 blur-3xl" />
            <div className="absolute -right-64 -top-52 h-[720px] w-[720px] rounded-full bg-[#1A56FF]/25 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_30%_10%,rgba(255,255,255,0.08),transparent_55%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/55" />
          </div>

          <div className="relative grid items-center gap-12 p-10 sm:p-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:p-16">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85">
                <img src="/brand/logo/meivo-mark-white.svg" alt="Meivo" className="h-4 w-4" />
                Pronto para começar?
              </div>

              <h2 className="mt-8 text-balance text-4xl font-heading leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Pronto para vender mais rápido?
              </h2>

              <p className="mt-6 mx-auto max-w-2xl text-pretty text-sm font-medium text-white/70 sm:text-base lg:mx-0">
                Conte seu cenário (quantidade de produtos, equipe e fluxo de venda). A gente te
                mostra o Meivo PDV em poucos minutos.
              </p>

              <div className="mt-10 flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-[#2B9DEE] hover:bg-[#2B9DEE]/90">
                  <a href="mailto:contato@meivo.com.br" aria-label="Enviar e-mail para contato">
                    Pedir demonstração
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="border border-white/15 bg-white/0 text-white/85 hover:bg-white/10 hover:text-white"
                >
                  <a href="#recursos" aria-label="Ver recursos">
                    Ver recursos
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(closest-side,rgba(43,157,238,0.22),transparent_62%)] blur-2xl" />

              <div className="relative aspect-[6/5] overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(255,255,255,0.10),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/35" />

                <div className="absolute left-6 top-6 flex items-center gap-2">
                  <img
                    src="/brand/logo/meivo-mark-white.svg"
                    alt="Meivo"
                    className="h-7 w-7 opacity-90"
                  />
                  <img
                    src="/brand/logo/meivo-wordmark-blue.png"
                    alt="Meivo"
                    className="h-6 brightness-0 invert opacity-95"
                  />
                </div>

                <img
                  src="/brand/mascot/mascote.png"
                  alt="Mascote da Meivo"
                  className="absolute -bottom-10 right-[-10px] h-[110%] w-auto select-none drop-shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
                  loading="lazy"
                />

                <div className="pointer-events-none absolute -bottom-24 left-0 right-0">
                  <div className="mx-auto h-44 w-[120%] rounded-[999px] bg-white/18 blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-foreground/50 md:flex-row">
          <span>© 2026 Meivo. Todos os direitos reservados.</span>
          <div className="flex items-center gap-6">
            <a href="#privacy">Privacidade</a>
            <a href="#terms">Termos</a>
            <a href="#inicio">Topo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
