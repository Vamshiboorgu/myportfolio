import { motion } from "motion/react";

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
  align = "center"
}: SectionHeaderProps) => {
  const alignmentClass = align === "center" ? "text-center" : "text-left";
  const flexAlignment = align === "center" ? "items-center" : "items-start";

  return (
    <div className={`${alignmentClass} ${className} flex flex-col ${flexAlignment}`}>
      {technical && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-technical text-accent mb-6"
        >
          / {technical}
        </motion.div>
      )}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9]"
      >
        {title} {subtitle && <br />}
        {subtitle && <span className="text-white/20">{subtitle}.</span>}
      </motion.h3>
    </div>
  );
};
