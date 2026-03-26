import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../../constants";
import { SectionHeader } from "../Reusable/SectionHeader";
import { GlassCard } from "../Reusable/GlassCard";

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 px-6 grid-lines relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          technical="ACADEMIC_BACKGROUND"
          title="The"
          subtitle="Learning"
          className="mb-16 md:mb-24"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.education.map((edu, i) => (
            <GlassCard key={i} delay={i * 0.1} className="bg-black/40 backdrop-blur-sm">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500">
                    <Sparkles className="w-6 h-6" fill="currentColor" />
                  </div>
                  <span className="text-technical opacity-40">{edu.period}</span>
                </div>

                <h4 className="text-3xl font-display font-bold mb-3 tracking-tight uppercase">{edu.degree}</h4>
                <div className="text-technical text-accent">{edu.institution}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
