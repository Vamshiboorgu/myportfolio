import { motion } from "motion/react";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  key?: React.Key;
  className?: string;
  glowColor?: string;
  delay?: number;
  hoverAction?: "float" | "none";
  showGlow?: boolean;
  showLine?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  glowColor = "bg-accent",
  delay = 0,
  hoverAction = "float",
  showGlow = true,
  showLine = true
}) => {
  const hoverTranslate = hoverAction === "float" ? "hover:-translate-y-2" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`border border-white/5 p-10 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-md ${hoverTranslate} hover:border-white/[0.15] hover:from-white/[0.05] transition-all duration-500 group relative overflow-hidden ${className}`}
    >
      {showGlow && (
        <div className={`absolute top-0 right-0 w-48 h-48 ${glowColor}/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-all duration-700`} />
      )}
      
      {showLine && (
        <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
};
