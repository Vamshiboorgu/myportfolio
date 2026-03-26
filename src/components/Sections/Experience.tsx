import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../../constants";
import { SectionHeader } from "../Reusable/SectionHeader";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 px-6 relative overflow-hidden grid-lines">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          technical="CAREER_PATH"
          title="The"
          subtitle="Journey"
          className="mb-16 md:mb-24"
        />

        <div className="space-y-4">
          {PORTFOLIO_DATA.experience_timeline.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border border-white/5 p-10 md:p-12 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex gap-8 items-center">
                  <div className="text-technical opacity-20 text-2xl font-bold">0{i + 1}</div>
                  <div>
                    <h4 className="text-3xl font-display font-bold mb-2 tracking-tight uppercase">{exp.role}</h4>
                    <div className="text-technical text-accent">{exp.company}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-technical opacity-40 mb-3">{exp.period}</span>
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <p className="mt-10 text-white/60 text-lg leading-relaxed font-light max-w-3xl border-t border-white/5 pt-10">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
