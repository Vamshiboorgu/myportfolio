import { motion } from "motion/react";
import { Command, Layout, Zap, Sparkles, Globe, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../../constants";
import { GlassCard } from "../Reusable/GlassCard";

export const BentoSkills = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 relative overflow-hidden bg-ink">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-32">
          {/* Large Title Section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-technical text-accent mb-8"
            >
              / PURPOSE_DRIVEN_DESIGN
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-7xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.85] text-white"
            >
              Designing <br />
              with <span className="text-accent underline decoration-white/10 underline-offset-8">Purpose</span> <br />
              & <span className="text-white/20">Precision.</span>
            </motion.h2>
          </div>

          {/* Bio Description */}
          <div className="lg:w-1/2 lg:pt-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-12"
            >
              {PORTFOLIO_DATA.bio}
            </motion.p>
            
            <div className="flex flex-wrap gap-12 border-t border-white/5 pt-12">
              <div className="group cursor-default">
                <div className="text-5xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {PORTFOLIO_DATA.experience.split(' ')[0]}
                </div>
                <div className="text-technical mt-2 opacity-40 group-hover:opacity-100 transition-opacity">YEARS_EXP</div>
              </div>
              <div className="group cursor-default">
                <div className="text-5xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
                  99%
                </div>
                <div className="text-technical mt-2 opacity-40 group-hover:opacity-100 transition-opacity">PRECISION</div>
              </div>
              <div className="group cursor-default">
                <div className="text-5xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
                  24/7
                </div>
                <div className="text-technical mt-2 opacity-40 group-hover:opacity-100 transition-opacity">DEDICATION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Unified Bento Grid using Reusable GlassCards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
          {/* Location Card - Span 4 */}
          <div className="md:col-span-4 h-full">
            <GlassCard delay={0.1} className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-start mb-20 px-2">
                <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <Globe className="w-5 h-5 text-accent group-hover:text-black transition-colors" />
                </div>
                <span className="text-technical opacity-20 group-hover:opacity-100 transition-opacity">HYD_IN</span>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-4 text-white group-hover:text-accent transition-colors">Global <br />Mindset.</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-[200px] group-hover:text-white/60">Operating from Hyderabad, delivering impact worldwide.</p>
              </div>
            </GlassCard>
          </div>

          {/* Design Card - Span 4 */}
          <div className="md:col-span-4 h-full">
            <GlassCard delay={0.2} className="h-full">
              <div className="flex items-center gap-4 mb-10 px-2">
                <Layout className="w-5 h-5 text-accent" />
                <h4 className="text-lg font-display font-bold uppercase tracking-widest text-white/80">UX Design</h4>
              </div>
              <div className="flex flex-wrap gap-2 px-2">
                {PORTFOLIO_DATA.skills.design.slice(0, 7).map(skill => (
                  <span key={skill} className="px-3 py-1 text-[10px] font-mono border border-white/5 text-white/30 group-hover:border-accent/20 group-hover:text-accent/60 transition-all uppercase tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Engineering Card - Span 4 */}
          <div className="md:col-span-4 h-full">
            <GlassCard delay={0.3} className="h-full">
              <div className="flex items-center gap-4 mb-10 px-2">
                <Zap className="w-5 h-5 text-accent" />
                <h4 className="text-lg font-display font-bold uppercase tracking-widest text-white/80">Engineering</h4>
              </div>
              <div className="flex flex-wrap gap-2 px-2">
                {PORTFOLIO_DATA.skills.technical.map(skill => (
                  <span key={skill} className="px-3 py-1 text-[10px] font-mono border border-white/5 text-white/30 group-hover:border-accent/20 group-hover:text-accent/60 transition-all uppercase tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Core Arsenal / Tools - Span 12 */}
          <div className="md:col-span-12">
            <GlassCard delay={0.4} className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex items-center gap-4 px-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <h4 className="text-lg font-display font-bold uppercase tracking-widest text-white/80 shrink-0">Core Arsenal</h4>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center md:justify-end flex-1">
                {PORTFOLIO_DATA.skills.tools.map(tool => (
                  <span key={tool} className="text-xs font-mono text-white/30 hover:text-white transition-colors cursor-default border-b border-white/5 pb-1">
                    {tool}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* CTA Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12"
        >
          <div className="flex items-center gap-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-technical text-white/40 tracking-widest">AVAILABLE_FOR_NEW_PROJECTS_2026</span>
          </div>
          <motion.a 
            href="#contact"
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 text-white hover:text-accent transition-colors group"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Read Full Story</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
