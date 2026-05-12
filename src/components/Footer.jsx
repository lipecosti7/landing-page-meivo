const linkGroups = [
  {
    title: "Links",
    links: [
      { label: "Home", href: "#inicio" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Benefícios", href: "#beneficios" },
      { label: "Calculadora", href: "#calculadora" },
      { label: "Criar Conta", href: "mailto:contato@meivo.com.br" },
      { label: "Login", href: "mailto:contato@meivo.com.br" },
    ],
  },
  {
    title: "Outros Recursos",
    links: [
      { label: "Termos de Uso", href: "#termos" },
      { label: "Política de Privacidade", href: "#privacidade" },
      { label: "Instagram", href: "https://instagram.com/meivo.app" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#F6F7F8]">
      <div className="mx-auto max-w-6xl px-8 py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <a href="#inicio" className="inline-block">
              <img
                src="/brand/logo/meivo-wordmark-blue.png"
                alt="Meivo"
                className="h-7"
              />
            </a>
            <p className="mt-5 max-w-xs text-sm font-medium leading-relaxed text-foreground/45">
              PDV mobile-first para comissões de formatura. Organize, cresça e
              voe.
            </p>
            <div className="mt-7">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-foreground/30">
                Contato
              </p>
              <a
                href="mailto:contato@meivo.com.br"
                className="text-sm font-semibold text-foreground/75 transition-colors duration-200 hover:text-[#2B9DEE]"
              >
                contato@meivo.com.br
              </a>
            </div>
          </div>

          {/* Link columns */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-widest text-foreground/30">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-foreground/55 transition-colors duration-200 hover:text-[#2B9DEE]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-black/[0.055]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-8 py-5 text-xs font-medium text-foreground/30 md:flex-row lg:px-16">
          <span>© 2026 Meivo. Todos os direitos reservados.</span>
          <span>Designed by Lunis</span>
        </div>
      </div>
    </footer>
  );
}
