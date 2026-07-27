import { motion } from "motion/react";
import { SplitTextReveal } from "../animations/SplitTextReveal";

interface SectionHeaderProps {
  technical?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  technical,
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeaderProps) => {
  const alignmentClass = align === "center" ? "text-center" : "text-left";
  const flexAlignment = align === "center" ? "items-center" : "items-start";

  return (
    <div className={`${alignmentClass} ${className} flex flex-col ${flexAlignment}`}>
      {technical && (
        <motion.div
          initial={{ opacity: 0, x: align === "center" ? 0 : -20, y: align === "center" ? 15 : 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-technical text-accent mb-6 flex items-center gap-2"
        >
          <span className="w-6 h-px bg-accent inline-block" />
          <span>/ {technical}</span>
        </motion.div>
      )}
      <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter uppercase leading-[0.9]">
        <SplitTextReveal text={title} />
        {subtitle && (
          <>
            <br />
            <span className="text-white/20">
              <SplitTextReveal text={`${subtitle}.`} delay={0.15} />
            </span>
          </>
        )}
      </h3>
    </div>
  );
};
