import { motion } from "motion/react";
import { Badge } from "./ui/badge";

const ArrowCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className="size-5 flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#060D1A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_65%_at_50%_0%,rgba(43,157,238,0.30),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_88%_88%,rgba(26,86,255,0.18),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_8%_65%,rgba(43,157,238,0.09),transparent_60%)]" />

      {/* ── Cloud layer ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-cloud hero-cloud-1" />
        <div className="hero-cloud hero-cloud-2" />
        <div className="hero-cloud hero-cloud-3" />
        <div className="hero-cloud hero-cloud-4" />
        <div className="hero-cloud hero-cloud-5" />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-8 py-32 text-center lg:px-16 lg:py-44">

        {/* Badge */}
        <motion.div
          className="liquid-glass flex flex-nowrap items-center gap-2 rounded-full px-1 py-1"
          initial={{ filter: "blur(12px)", opacity: 0, y: 14 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <Badge variant="solid" className="px-3 py-1 text-[11px] font-semibold">
            Meivo PDV
          </Badge>
          <span className="max-w-[240px] truncate pr-3 text-xs font-medium text-white/80 sm:max-w-none">
            PWA mobile-first para vendas em formaturas.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-9 max-w-3xl text-[2.8rem] font-heading font-bold leading-[0.96] tracking-[-2px] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          initial={{ filter: "blur(12px)", opacity: 0, y: 16 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: "easeOut" }}
        >
          Organize,{" "}
          <span className="relative inline-block">
            Cresça,
            <span className="pointer-events-none absolute -inset-x-2 bottom-1 -z-10 h-[0.18em] rounded-full bg-[#2B9DEE]/30 blur-sm" />
          </span>{" "}
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Voe.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-7 max-w-xl text-sm font-medium leading-relaxed text-white/65 md:text-[0.9375rem]"
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          Um PDV pensado para o balcão: poucos toques, estoque organizado e
          relatórios claros. Funciona até com internet instável.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78, ease: "easeOut" }}
        >
          <a
            href="#contato"
            aria-label="Ir para contato"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#2B9DEE] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_0_0_rgba(43,157,238,0)] transition-all duration-300 ease-out hover:shadow-[0_0_36px_rgba(43,157,238,0.55)]"
          >
            <span className="pointer-events-none absolute inset-0 translate-y-full rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:translate-y-0" />
            <span className="relative">Começar agora</span>
            <span className="relative">
              <ArrowCircleIcon />
            </span>
          </a>

          <a
            href="#como-funciona"
            aria-label="Ir para como funciona"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 ease-out hover:border-white/40 hover:text-white"
          >
            <span className="pointer-events-none absolute inset-0 translate-y-full rounded-full bg-white/8 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:translate-y-0" />
            <span className="relative">Vamos conversar</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          aria-hidden="true"
        >
          <div className="hero-scroll-indicator" />
        </motion.div>
      </div>

      {/* ── Bottom fade to page background ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-b from-transparent to-[#F6F7F8]" />
    </section>
  );
}
