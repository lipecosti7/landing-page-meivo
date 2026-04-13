import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const MotionP = motion.p;
const MotionDiv = motion.div;
const MotionH1 = motion.h1;

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[820px] overflow-visible sm:min-h-[920px]">
      <video
        key="/videos/Videos-bg.mp4"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        src="/videos/Videos-bg.mp4"
      />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(1000px_circle_at_50%_20%,rgba(43,157,238,0.35),transparent_55%)]" />
      <div className="absolute inset-0 z-0 bg-black/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-[360px] bg-gradient-to-b from-transparent via-background/75 to-background" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center px-8 pt-[150px] text-center lg:px-16">
        <div className="liquid-glass flex flex-nowrap items-center gap-2 rounded-full px-1 py-1">
          <Badge variant="solid" className="px-3 py-1 text-[11px] font-semibold">
            Meivo PDV
          </Badge>
          <span className="max-w-[240px] truncate pr-3 text-xs font-medium text-white/85 sm:max-w-none">
            PWA mobile-first para vendas em formaturas.
          </span>
        </div>

        <div className="mt-10">
          <MotionH1
            className="max-w-3xl text-4xl font-heading leading-[0.98] tracking-[-1px] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <span className="font-semibold text-white">Organize, Cresça, </span>
            <span className="font-extrabold text-white">Voe.</span>
          </MotionH1>
        </div>

        <MotionP
          className="mt-6 max-w-2xl text-sm font-medium text-white/85 md:text-base"
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          Um PDV pensado para o balcão: poucos toques, estoque organizado e relatórios claros.
          Funciona até com internet instável.
        </MotionP>

        <MotionDiv
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          <Button asChild variant="default" size="lg" className="bg-[#2B9DEE] hover:bg-[#2B9DEE]/90">
            <a href="#contato" aria-label="Ir para contato">
              Pedir demonstração
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="whitespace-nowrap border border-white/30 bg-white/0 text-white/90 hover:bg-white/10 hover:text-white"
          >
            <a href="#como-funciona" aria-label="Ir para como funciona">
              <Play data-icon="inline-start" fill="currentColor" strokeWidth={0} />
              Ver como funciona
            </a>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
