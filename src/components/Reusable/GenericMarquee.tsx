import { motion } from "motion/react";
import React from "react";

interface MarqueeProps {
  items: React.ReactNode[];
  className?: string;
  speed?: number;
  repeat?: number;
}

export const GenericMarquee = ({
  items,
  className = "",
  speed = 120, // Duration in seconds
  repeat = 10
}: MarqueeProps) => {
  return (
    <div className={`relative overflow-hidden w-screen flex ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex whitespace-nowrap animate-marquee w-max"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...Array(repeat)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, j) => (
              <div key={`${i}-${j}`} className="flex items-center">
                {item}
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Gradient Fades for Marquee */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
    </div>
  );
};
