import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const navItems = ["Início", "Como funciona", "Benefícios", "Calculadora", "Contato"];
const navLinks = {
  "Início": "#inicio",
  "Como funciona": "#como-funciona",
  "Benefícios": "#beneficios",
  "Calculadora": "#calculadora",
  "Contato": "#contato",
};

export function Navbar() {
  const [isOverHero, setIsOverHero] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#inicio");
    if (!hero) return undefined;

    const DARK_CUTOFF = 0.82;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = hero.getBoundingClientRect();
      const y = window.scrollY;

      setScrolled(y > 60);

      if (rect.bottom <= 0) {
        setIsOverHero(false);
        return;
      }
      if (rect.top >= 0) {
        setIsOverHero(true);
        return;
      }
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      setIsOverHero(progress < DARK_CUTOFF);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onHashChange = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [menuOpen]);

  const demoButtonClassName = isOverHero
    ? "bg-white text-[#052E52] hover:bg-white/90"
    : "bg-[#2B9DEE] text-white hover:bg-[#2B9DEE]/90";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-[#052E52] via-[#052E52]/85 to-transparent transition-opacity duration-300 ease-out ${
          isOverHero ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/0 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)] transition-opacity duration-300 ease-out ${
          isOverHero ? "opacity-0" : "opacity-100"
        }`}
      />

      <div
        className={`relative px-4 sm:px-6 lg:px-12 transition-all duration-300 ease-out ${
          scrolled ? "py-2 sm:py-2.5" : "py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center">
          <a href="#inicio" className="flex items-center gap-3">
            <div
              className={`relative transition-all duration-300 ease-out ${
                scrolled ? "h-8 w-8" : "h-10 w-10"
              }`}
            >
              <img
                src="/brand/logo/meivo-mark-white.svg"
                alt="Meivo"
                className={`absolute inset-0 h-full w-full transition-opacity duration-300 ease-out ${
                  isOverHero ? "opacity-100" : "opacity-0"
                }`}
              />
              <img
                src="/brand/logo/meivo-mark-blue.svg"
                alt="Meivo"
                className={`absolute inset-0 h-full w-full transition-opacity duration-300 ease-out ${
                  isOverHero ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>

            <div
              className={`relative hidden md:block transition-all duration-300 ease-out ${
                scrolled ? "h-6" : "h-7"
              }`}
            >
              <img
                src="/brand/logo/meivo-wordmark-blue.png"
                alt="Meivo"
                className={`h-full transition-opacity duration-300 ease-out ${
                  isOverHero ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src="/brand/logo/meivo-wordmark-blue.png"
                alt="Meivo"
                className={`absolute inset-0 h-full brightness-0 invert transition-opacity duration-300 ease-out ${
                  isOverHero ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </a>

          <div className="hidden items-center justify-center md:flex md:justify-self-center">
            <nav
              className={
                isOverHero
                  ? "liquid-glass flex items-center gap-1 rounded-full bg-white/5 px-1.5 py-1 text-white transition-[background-color,border-color,box-shadow,color] duration-300 ease-out"
                  : "flex items-center gap-1 rounded-full border border-black/10 bg-white px-1.5 py-1 text-foreground shadow-sm transition-[background-color,border-color,box-shadow,color] duration-300 ease-out"
              }
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={navLinks[item]}
                  className={
                    isOverHero
                      ? "px-3 py-2 text-sm font-medium text-white/90 transition-colors duration-300 ease-out hover:text-white"
                      : "px-3 py-2 text-sm font-medium text-foreground/75 transition-colors duration-300 ease-out hover:text-foreground"
                  }
                >
                  {item}
                </a>
              ))}
              <Button asChild variant="default" size="sm" className={demoButtonClassName}>
                <a href="#contato" aria-label="Ir para contato">
                  Começar agora
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
            </nav>
          </div>

          <div className="flex items-center justify-end gap-2 md:hidden">
            <Button asChild variant="default" size="sm" className={demoButtonClassName}>
              <a href="#contato" aria-label="Ir para contato">
                Começar
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className={
                isOverHero
                  ? "liquid-glass flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors duration-300 ease-out"
                  : "flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-foreground shadow-sm transition-colors duration-300 ease-out"
              }
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <button
          type="button"
          aria-label="Fechar menu"
          className={`fixed inset-0 z-50 transition-opacity duration-200 ease-out ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        </button>

        <div
          className={`fixed left-3 right-3 top-[68px] z-[60] origin-top rounded-3xl transition-all duration-200 ease-out ${
            menuOpen ? "translate-y-0 scale-100 opacity-100" : "-translate-y-2 scale-[0.98] opacity-0"
          } ${isOverHero ? "liquid-glass-strong bg-white/10" : "bg-white"}`}
        >
          <div className={`rounded-3xl border p-3 shadow-lg ${isOverHero ? "border-white/15" : "border-black/10"}`}>
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={navLinks[item]}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isOverHero
                      ? "text-white/90 hover:bg-white/10 hover:text-white"
                      : "text-foreground/80 hover:bg-black/[0.03] hover:text-foreground"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-2">
              <Button asChild variant="default" size="lg" className={`w-full ${demoButtonClassName}`}>
                <a href="#contato" onClick={() => setMenuOpen(false)} aria-label="Ir para contato">
                  Começar agora
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
