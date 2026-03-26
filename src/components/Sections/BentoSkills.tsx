import { motion } from "motion/react";
import { Command, Layout, Zap, Sparkles, Globe } from "lucide-react";
import { PORTFOLIO_DATA } from "../../constants";
import { GlassCard } from "../Reusable/GlassCard";

export const BentoSkills = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 grid-lines relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Main Bio Card */}
          <div className="md:col-span-4 md:row-span-2">
            <GlassCard className="p-10 md:p-14" delay={0}>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors duration-500">
                  <Command className="w-5 h-5 text-accent" fill="currentColor" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-50 text-white group-hover:text-accent transition-colors duration-500">/ ABOUT_ME</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 leading-[0.9] uppercase text-white drop-shadow-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-500">
                Designing with <br /> <span className="text-white/20 group-hover:text-accent/60 transition-colors duration-500">Purpose</span> <br /> & Precision.
              </h3>
              <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl group-hover:text-white/80 transition-colors duration-500">
                {PORTFOLIO_DATA.bio}
              </p>

              <div className="mt-16 flex flex-wrap gap-8 md:gap-16 relative z-10 pt-12">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/10 to-transparent" />
                <div className="flex flex-col gap-3 group/stat cursor-default">
                  <span className="text-[10px] font-mono tracking-widest text-white/40 group-hover/stat:text-accent transition-colors">PRECISION</span>
                  <div className="text-5xl font-display font-bold text-white group-hover/stat:text-transparent group-hover/stat:bg-clip-text group-hover/stat:bg-gradient-to-r group-hover/stat:from-accent group-hover/stat:to-white transition-all duration-300">99%</div>
                </div>
                <div className="flex flex-col gap-3 group/stat cursor-default">
                  <span className="text-[10px] font-mono tracking-widest text-white/40 group-hover/stat:text-accent transition-colors">DEDICATION</span>
                  <div className="text-5xl font-display font-bold text-white group-hover/stat:text-transparent group-hover/stat:bg-clip-text group-hover/stat:bg-gradient-to-r group-hover/stat:from-accent group-hover/stat:to-white transition-all duration-300">24/7</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Experience Card */}
          <div className="md:col-span-2">
            <GlassCard className="p-10 flex flex-col justify-center items-center text-center h-full" delay={0.1}>
              <div className="absolute top-6 left-6 text-[10px] font-mono tracking-widest text-white/30 group-hover:text-accent transition-colors">EXPERIENCE</div>
              <div className="text-8xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 group-hover:from-accent group-hover:to-accent/40 mb-4 group-hover:scale-110 transition-all duration-500 drop-shadow-lg">
                {PORTFOLIO_DATA.experience.split(' ')[0]}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">Years of Experience</div>
            </GlassCard>
          </div>

          {/* Location Card */}
          <div className="md:col-span-2">
            <GlassCard className="p-10 flex flex-col justify-center items-center text-center h-full" delay={0.2}>
              <div className="absolute top-6 left-6 text-[10px] font-mono tracking-widest text-white/30 group-hover:text-accent transition-colors">LOCATION</div>
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-white/5 group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Globe className="w-8 h-8 text-accent group-hover:text-black relative z-10 transition-colors duration-500" fill="currentColor" />
              </div>
              <div className="text-3xl font-display font-bold mb-3 uppercase tracking-tight text-white group-hover:text-accent transition-colors">{PORTFOLIO_DATA.location.split(',')[0]}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">Based In</div>
            </GlassCard>
          </div>

          {/* Skills Section */}
          <div className="md:col-span-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Design Tools", icon: Layout, skills: PORTFOLIO_DATA.skills.design, delay: 0 },
                { title: "Technical Stack", icon: Zap, skills: PORTFOLIO_DATA.skills.technical, delay: 0.1 },
                { title: "Design Arsenal", icon: Sparkles, skills: PORTFOLIO_DATA.skills.tools, delay: 0.2 }
              ].map((group) => (
                <GlassCard key={group.title} className="p-10" delay={group.delay}>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <group.icon className="w-5 h-5 text-accent group-hover:text-black relative z-10 transition-colors duration-500" fill="currentColor" />
                    </div>
                    <h4 className="text-xl font-display font-bold uppercase tracking-tight group-hover:text-accent transition-colors duration-500">{group.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-black/50 border border-white/5 text-[11px] font-mono uppercase tracking-widest text-white/60 group-hover:border-white/20 group-hover:text-accent transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
