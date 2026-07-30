import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: "words" | "chars";
  once?: boolean;
}

export function SplitTextReveal({
  text,
  className = "",
  delay = 0,
  mode = "words",
  once = true,
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, {
    once,
    amount: 0,
  });

  if (!text) return null;

  if (mode === "chars") {
    const chars = Array.from(text);
    return (
      <span ref={containerRef} className={`inline-block ${className}`}>
        {chars.map((char, i) => (
          <span key={i} className="inline-block overflow-hidden py-0.5">
            <motion.span
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.215, 0.61, 0.355, 1],
                delay: delay + i * 0.025,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  const words = text.split(" ");

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0 py-0.5">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.04,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
