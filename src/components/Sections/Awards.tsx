import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import { PORTFOLIO_DATA } from "../../constants";
import { SectionHeader } from "../Reusable/SectionHeader";

export const Awards = () => {
  return (
    <section id="awards" className="py-20 md:py-32 px-6 relative overflow-hidden grid-lines">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          technical="RECOGNITION" 
          title="The" 
          subtitle="Awards" 
          className="mb-16 md:mb-24"
        />

        <div className="relative space-y-8">
          {PORTFOLIO_DATA.awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky border border-white/10 p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 group hover:bg-white/[0.02] transition-all bg-black/80 backdrop-blur-3xl shadow-2xl"
              style={{
                top: `calc(120px + ${i * 40}px)`,
                zIndex: i + 1
              }}
            >
              <div className="w-24 h-24 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-700 shrink-0">
                <Trophy className="w-12 h-12" fill="currentColor" />
              </div>
              <div className="text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <h4 className="text-4xl font-display font-bold tracking-tight uppercase">{award.title}</h4>
                  <span className="text-technical text-accent">
                    {award.date}
                  </span>
                </div>
                <p className="text-white/60 text-xl font-light leading-relaxed max-w-2xl border-t border-white/5 pt-6">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
