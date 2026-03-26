import { motion } from "motion/react";
import { Layout, Code, Zap } from "lucide-react";
import { SectionHeader } from "../Reusable/SectionHeader";
import { GlassCard } from "../Reusable/GlassCard";

const features = [
  {
    id: "01",
    title: "Systematic Design",
    desc: "Creating scalable, component-based architectures in Figma that naturally mirror modern frontend code structures.",
    icon: <Layout className="w-8 h-8 text-accent" />
  },
  {
    id: "02",
    title: "Pixel-Perfect Code",
    desc: "Engineering high-fidelity prototypes into fully responsive, interactive interfaces using React, Angular, and Tailwind CSS.",
    icon: <Code className="w-8 h-8 text-accent" />
  },
  {
    id: "03",
    title: "Zero Friction",
    desc: "Bridging the gap between design and development, ensuring the final shipped product looks and feels exactly as intended.",
    icon: <Zap className="w-8 h-8 text-accent" />
  }
];

export const DesignEngineering = () => {
  return (
    <section id="engineering" className="py-20 md:py-32 px-6 grid-lines relative overflow-hidden bg-white/[0.01]">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          technical="DESIGN_ENGINEERING"
          title="The"
          subtitle="Hybrid Advantage"
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {features.map((feature, i) => (
            <GlassCard key={i} delay={i * 0.1} showGlow={false} showLine={true} className="p-10 bg-black/40 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500 rounded-2xl bg-white/5">
                  {feature.icon}
                </div>
                <div className="text-technical text-white/20 text-2xl group-hover:text-accent/40 transition-colors duration-500">{feature.id}</div>
              </div>
              <h4 className="text-2xl font-display font-bold uppercase tracking-tight mb-4 group-hover:text-accent transition-colors duration-500">{feature.title}</h4>
              <p className="text-white/50 text-base leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">{feature.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
