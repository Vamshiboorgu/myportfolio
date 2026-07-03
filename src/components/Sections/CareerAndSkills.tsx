import { motion } from "motion/react";
import { Layout, Zap, Sparkles, Briefcase, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../../constants";
import { GlassCard } from "../Reusable/GlassCard";

export const CareerAndSkills = () => {
  return (
    <section id="expertise" className="py-[60px] px-6 relative overflow-hidden bg-ink">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">



        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-[60px]">

          {/* Left Column: Career History & Stats */}
          <div className="lg:w-1/2 flex flex-col gap-12">
            {/* Career History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-md"
            >
              <div className="flex items-center gap-4 mb-8 px-2">
                <Briefcase className="w-5 h-5 text-accent" />
                <h4 className="text-lg font-display font-bold uppercase tracking-widest text-white/80">Career History</h4>
              </div>

              <div className="flex flex-col gap-6 px-2">
                {PORTFOLIO_DATA.experience_timeline.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l border-white/10 pb-4 last:pb-0 group hover:border-white/30 transition-colors duration-500">
                    <div className="absolute top-1.5 -left-[5px] w-2.5 h-2.5 rounded-full bg-accent" />
                    <div className="mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1.5 block">{exp.period}</span>
                      <h5 className="text-3xl font-display font-black text-white tracking-tighter uppercase leading-[1.1] mb-1">{exp.role}</h5>
                      <div className="text-xs font-bold font-mono uppercase tracking-widest text-white/40">{exp.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-12 border-t border-white/5 pt-6"
            >
              <div className="group cursor-default">
                <div className="text-5xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {PORTFOLIO_DATA.experience.split(' ')[0]}
                </div>
                <div className="text-[10px] font-mono mt-3 uppercase tracking-[0.2em] text-white/50 group-hover:text-accent transition-colors">YEARS_EXP</div>
              </div>
              <div className="group cursor-default">
                <div className="text-5xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
                  99%
                </div>
                <div className="text-[10px] font-mono mt-3 uppercase tracking-[0.2em] text-white/50 group-hover:text-accent transition-colors">PRECISION</div>
              </div>
              <div className="group cursor-default">
                <div className="text-5xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
                  24/7
                </div>
                <div className="text-[10px] font-mono mt-3 uppercase tracking-[0.2em] text-white/50 group-hover:text-accent transition-colors">DEDICATION</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-white/60 font-light leading-relaxed"
            >
              {PORTFOLIO_DATA.bio}
            </motion.p>
          </div>
        </div>

        {/* Skills Arsenal Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">

          {/* UX Design Card */}
          <GlassCard delay={0.2} className="h-full">
            <div className="flex items-center gap-4 mb-8 px-2">
              <Layout className="w-5 h-5 text-accent" />
              <h4 className="text-lg font-display font-bold uppercase tracking-widest text-white/80">UX Design</h4>
            </div>
            <div className="flex flex-wrap gap-2 px-2">
              {PORTFOLIO_DATA.skills.design.map(skill => (
                <span key={skill} className="px-4 py-2 text-xs md:text-sm font-mono bg-white/[0.03] border border-white/[0.05] text-white/50 hover:border-accent/30 hover:bg-accent/10 hover:text-accent transition-all uppercase tracking-tighter rounded-xl">
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Engineering Card */}
          <GlassCard delay={0.3} className="h-full">
            <div className="flex items-center gap-4 mb-8 px-2">
              <Zap className="w-5 h-5 text-accent" />
              <h4 className="text-lg font-display font-bold uppercase tracking-widest text-white/80">Engineering</h4>
            </div>
            <div className="flex flex-wrap gap-2 px-2">
              {PORTFOLIO_DATA.skills.technical.map(skill => (
                <span key={skill} className="px-4 py-2 text-xs md:text-sm font-mono bg-white/[0.03] border border-white/[0.05] text-white/50 hover:border-accent/30 hover:bg-accent/10 hover:text-accent transition-all uppercase tracking-tighter rounded-xl">
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Core Tools Card */}
          <GlassCard delay={0.4} className="h-full">
            <div className="flex items-center gap-4 mb-8 px-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <h4 className="text-lg font-display font-bold uppercase tracking-widest text-white/80 shrink-0">Core Arsenal</h4>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-4 px-2">
              {PORTFOLIO_DATA.skills.tools.map(tool => (
                <span key={tool} className="text-sm md:text-base font-mono text-white/40 hover:text-white transition-colors cursor-default border-b border-white/5 hover:border-white/30 pb-1">
                  {tool}
                </span>
              ))}
            </div>
          </GlassCard>

        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12"
        >
          <div className="flex items-center gap-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">AVAILABLE_FOR_NEW_PROJECTS_2026</span>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 text-white hover:text-accent transition-colors group"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
