import "../styles/cta-footer.css";

export function CtaFooter() {
  return (
    <section id="contato" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[40px] bg-[#060A12]">
          {/* Animated gradient blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="cta-blob cta-blob-1" />
            <div className="cta-blob cta-blob-2" />
            <div className="cta-blob cta-blob-3" />
            <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_30%_10%,rgba(255,255,255,0.06),transparent_55%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/55" />
          </div>

          <div className="relative grid items-center gap-12 p-10 sm:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:p-16">
            {/* Left: text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur-sm">
                <img src="/brand/logo/meivo-mark-white.svg" alt="Meivo" className="h-4 w-4" />
                Pronto para começar?
              </div>

              <h2 className="mt-8 text-balance text-4xl font-heading font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3rem]">
                Chegou até aqui.<br />
                <span className="text-[#2B9DEE]">Isso já diz tudo.</span>
              </h2>

              <p className="mt-6 text-pretty text-sm font-medium text-white/60 sm:text-base lg:max-w-lg">
                Se você chegou até o fim, é porque sabe que precisa organizar, crescer e voar. Para de pensar — vai lá, cria sua conta e começa a vender do jeito certo agora.
              </p>

              <div className="mt-10 flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <a
                  href="mailto:contato@meivo.com.br"
                  aria-label="Criar conta"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#2B9DEE] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 ease-out hover:shadow-[0_0_40px_rgba(43,157,238,0.6)]"
                >
                  <span className="pointer-events-none absolute inset-0 translate-y-full rounded-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-0" />
                  <span className="relative">Criar conta grátis</span>
                  <span className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#como-funciona"
                  aria-label="Ver como funciona"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 ease-out hover:border-white/30 hover:text-white"
                >
                  <span className="pointer-events-none absolute inset-0 translate-y-full rounded-full bg-white/10 transition-transform duration-300 ease-out group-hover:translate-y-0" />
                  <span className="relative">Ver como funciona</span>
                </a>
              </div>

              {/* Social proof */}
              <p className="mt-8 text-xs font-medium text-white/35">
                Sem cartão de crédito · Sem mensalidade · Cancele quando quiser
              </p>
            </div>

            {/* Right: animated card */}
            <div className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:max-w-none">
              <div className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(closest-side,rgba(43,157,238,0.28),transparent_62%)] blur-2xl" />

              <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
                {/* Animated light sweep */}
                <div className="cta-card-sweep" />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(255,255,255,0.10),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/45" />

                {/* Logo */}
                <div className="absolute left-6 top-6 flex items-center gap-2">
                  <img src="/brand/logo/meivo-mark-white.svg" alt="Meivo" className="h-7 w-7 opacity-90" />
                  <img src="/brand/logo/meivo-wordmark-blue.png" alt="Meivo" className="h-6 brightness-0 invert opacity-95" />
                </div>

                {/* Tagline */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xl font-bold leading-tight text-white">
                    Organize. Cresça. <span className="text-[#2B9DEE]">Voe.</span>
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/50">
                    PDV mobile-first para formaturas
                  </p>
                </div>

                {/* Mascot */}
                <img
                  src="/brand/mascot/mascote.png"
                  alt="Mascote da Meivo"
                  className="absolute -bottom-6 right-[-8px] h-[95%] w-auto select-none drop-shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
                  loading="lazy"
                />

                {/* Bottom glow */}
                <div className="pointer-events-none absolute -bottom-16 left-0 right-0">
                  <div className="mx-auto h-36 w-[110%] rounded-[999px] bg-white/15 blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
