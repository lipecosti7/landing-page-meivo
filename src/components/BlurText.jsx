import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../lib/utils";

const MotionSpan = motion.span;

const directions = {
  bottom: { from: 50, mid: -5 },
  top: { from: -50, mid: 5 },
};

export function BlurText({
  text,
  className,
  splitBy = "words",
  direction = "bottom",
  delay = 0.2,
  startDelay = 0,
  as: Tag = "span",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const tokens = useMemo(() => {
    if (!text) return [];
    if (splitBy === "letters") return text.split("");
    return text.split(" ");
  }, [text, splitBy]);

  const motionSettings = directions[direction] ?? directions.bottom;
  const Component = Tag;

  return (
    <Component ref={ref} className={cn("inline-block", className)}>
      {tokens.map((token, index) => (
        <MotionSpan
          key={`${token}-${index}`}
          className="inline-block"
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: motionSettings.from,
          }}
          animate={
            isVisible
              ? {
                  filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                  opacity: [0, 0.5, 1],
                  y: [motionSettings.from, motionSettings.mid, 0],
                }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: startDelay + index * delay,
            times: [0, 0.5, 1],
          }}
        >
          {token}
          {splitBy === "words" && index < tokens.length - 1 ? " " : ""}
        </MotionSpan>
      ))}
    </Component>
  );
}
