import { useCallback, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Badge } from "./ui/badge";

const FRAME_COUNT = 120;
// 3 × 100vh: sticky viewport fills 1 screen, user scrolls 2 screens through the animation.
const SCROLL_MULTIPLIER = 3;

function getFrameSrc(index) {
  const num = String(index + 1).padStart(3, "0");
  return `/Sequence/ezgif-frame-${num}.jpg`;
}

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
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Text drifts up and fades in the first 25% of scroll
  const textY = useTransform(scrollYProgress, [0, 0.25], ["0px", "-80px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 0.6, 0]);

  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d");
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // Keep canvas pixel dimensions in sync with the window
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  // Preload all frames
  useEffect(() => {
    const images = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = getFrameSrc(i);
      return img;
    });
    imagesRef.current = images;

    if (images[0].complete) {
      drawFrame(0);
    } else {
      images[0].onload = () => drawFrame(0);
    }
  }, [drawFrame]);

  // Drive frame by scroll progress
  useEffect(() => {
    return scrollYProgress.on("change", (progress) => {
      const clamped = Math.min(1, Math.max(0, progress));
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(clamped * FRAME_COUNT)
      );

      if (frameIndex === currentFrameRef.current) return;
      currentFrameRef.current = frameIndex;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawFrame(frameIndex);
        rafRef.current = null;
      });
    });
  }, [scrollYProgress, drawFrame]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      style={{ height: `${SCROLL_MULTIPLIER * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Canvas — scroll-driven frame sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
          aria-hidden="true"
        />

        {/* Atmospheric overlays */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(1000px_circle_at_50%_20%,rgba(43,157,238,0.28),transparent_55%)]" />
        <div className="absolute inset-0 z-[1] bg-black/18" />

        {/* Bottom fade to page background */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-56 bg-gradient-to-b from-transparent via-[#F6F7F8]/60 to-[#F6F7F8]" />

        {/* Hero content with parallax */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center px-8 pt-[140px] text-center lg:px-16"
        >
          {/* Badge */}
          <div className="liquid-glass flex flex-nowrap items-center gap-2 rounded-full px-1 py-1">
            <Badge variant="solid" className="px-3 py-1 text-[11px] font-semibold">
              Meivo PDV
            </Badge>
            <span className="max-w-[240px] truncate pr-3 text-xs font-medium text-white/85 sm:max-w-none">
              PWA mobile-first para vendas em formaturas.
            </span>
          </div>

          {/* Headline */}
          <motion.h1
            className="mt-9 max-w-3xl text-4xl font-heading font-bold leading-[0.97] tracking-[-2px] text-white sm:text-6xl md:text-7xl lg:text-[5rem]"
            initial={{ filter: "blur(12px)", opacity: 0, y: 16 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          >
            Organize, Cresça,{" "}
            <span className="font-extrabold">Voe.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 max-w-xl text-sm font-medium leading-relaxed text-white/80 md:text-[0.9375rem]"
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
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <a
              href="#contato"
              aria-label="Ir para contato"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#2B9DEE] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 ease-out hover:shadow-[0_0_36px_rgba(43,157,238,0.6)]"
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
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white/90 transition-all duration-300 ease-out hover:border-white/45 hover:text-white"
            >
              <span className="pointer-events-none absolute inset-0 translate-y-full rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative">Vamos conversar</span>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
