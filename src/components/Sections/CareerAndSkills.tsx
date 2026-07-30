import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Layout, Palette, Code2, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "../Reusable/SectionHeader";

export const CareerAndSkills = () => {
  const [activeTab, setActiveTab] = useState<"ux" | "ui" | "dev" | "media">("ux");

  const skillCategories = {
    ux: {
      label: "UX Strategy & Research",
      tag: "USER-CENTERED",
      description: "Rooted in user research and structural clarity before pixel execution.",
      skills: [
        "User Research & Interviews",
        "Usability Testing & Audit",
        "Information Architecture",
        "Wireframing & Prototyping",
        "User Journey Mapping",
        "Competitive Analysis",
      ],
      tools: ["Figma", "FigJam", "Miro", "Adobe XD"],
    },
    ui: {
      label: "UI & Design Systems",
      tag: "VISUAL PRECISION",
      description: "Crafting scalable design systems, responsive components, and micro-interactions.",
      skills: [
        "Visual & Interface Design",
        "Design System Tokenization",
        "Responsive Grid Layouts",
        "Component Libraries",
        "Micro-Interactions & Motion",
        "Accessibility (WCAG 2.1)",
      ],
      tools: ["Figma", "Photoshop", "Illustrator", "Tokens Studio"],
    },
    dev: {
      label: "Frontend Engineering",
      tag: "PRODUCTION-READY",
      description: "Translating Figma designs into pixel-perfect React & Angular code with zero fidelity loss.",
      skills: [
        "React & TypeScript",
        "Angular & RxJS",
        "Tailwind CSS & Utility Frameworks",
        "HTML5 / Modern CSS Architecture",
        "Component State Management",
        "Git & CI/CD Deployment",
      ],
      tools: ["VS Code", "Git", "npm", "Chrome DevTools"],
    },
    media: {
      label: "WordPress & Video Editing",
      tag: "CMS & MULTIMEDIA",
      description: "Building custom responsive WordPress websites and producing high-impact video content.",
      skills: [
        "WordPress Site Design & CMS",
        "Video Editing & Motion Graphics",
        "Promo & Product Showcase Videos",
        "Elementor & Gutenberg Builder",
        "Post-Production & Color Grading",
        "Visual Storytelling & Motion Design",
      ],
      tools: ["WordPress", "Filmora", "Canva", "Elementor"],
    },
  };

  const workflowSteps = [
    {
      num: "01",
      title: "Discover & Map",
      desc: "User interviews, persona building, and information architecture.",
      icon: Search,
    },
    {
      num: "02",
      title: "Wireframe & Test",
      desc: "Low-fidelity layouts and rapid prototype validation.",
      icon: Layout,
    },
    {
      num: "03",
      title: "UI & System Design",
      desc: "Hi-fi interface design, color/type tokens, and reusable components.",
      icon: Palette,
    },
    {
      num: "04",
      title: "Build & Deploy",
      desc: "Production-ready React & Angular implementation with 100% pixel fidelity.",
      icon: Code2,
    },
  ];

  return (
    <section id="expertise" className="py-20 md:py-32 relative bg-ink grid-lines border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <SectionHeader
              technical="CAREER_AND_EXPERTISE"
              title="Design &"
              subtitle="Engineering"
              align="left"
              className="mb-0"
            />
          </div>
          <div className="max-w-xs">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white/60 text-xs sm:text-sm leading-relaxed font-light mb-4"
            >
              UX/UI Designer with 3.8+ years of hands-on experience bridging the gap between Figma design systems and production frontend code.
            </motion.p>
            <div className="flex items-center gap-3 text-technical text-xs opacity-60">
              <div className="w-10 h-px bg-accent" />
              <span>FULL PIPELINE OWNERSHIP</span>
            </div>
          </div>
        </div>

        {/* Top 2-Column Clean Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Column: About & Philosophy (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#111114] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl flex flex-col justify-between space-y-8 backdrop-blur-2xl"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>DESIGN ENGINEER PHILOSOPHY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                I design it in Figma. <br />
                <span className="text-accent">Then I engineer it in code.</span>
              </h3>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
                I don't just hand off Figma mockups and walk away. I take products from initial user research, wireframes, and design systems directly into production-ready React and Angular code — ensuring 100% pixel fidelity with zero translation loss.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">3.8+</div>
                <div className="text-[10px] sm:text-xs font-mono text-white/50 uppercase tracking-wider mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">10+</div>
                <div className="text-[10px] sm:text-xs font-mono text-white/50 uppercase tracking-wider mt-1">Projects Shipped</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-accent">100%</div>
                <div className="text-[10px] sm:text-xs font-mono text-white/50 uppercase tracking-wider mt-1">Fidelity Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tabbed Skill Inspection Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-[#111114] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 backdrop-blur-2xl"
          >
            {/* Category Selector Tabs */}
            <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-white/5 border border-white/10 rounded-2xl">
              {(["ux", "ui", "dev", "media"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`py-2 px-3 rounded-xl font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap text-center ${activeTab === key
                      ? "bg-accent text-ink shadow-md"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {key === "ux" ? "UX Strategy" : key === "ui" ? "UI Systems" : key === "dev" ? "Frontend" : "WordPress & Video"}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-lg font-display font-bold text-white">
                      {skillCategories[activeTab].label}
                    </h4>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full font-bold">
                      {skillCategories[activeTab].tag}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 font-light">
                    {skillCategories[activeTab].description}
                  </p>
                </div>

                {/* Skill List */}
                <div className="space-y-2">
                  {skillCategories[activeTab].skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 text-xs text-white/80 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Tools Strip */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold">
                      Primary Tools & Stack:
                    </span>
                    {activeTab === "media" && (
                      <span className="text-[9px] font-mono uppercase tracking-wider text-accent font-bold bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                        Featured Stack
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skillCategories[activeTab].tools.map((tool) => {
                      const isSpecialTool = ["wordpress", "filmora", "canva", "effects", "elementor"].some(t => tool.toLowerCase().includes(t));
                      return (
                        <span
                          key={tool}
                          className={`px-2.5 py-1 text-[10px] sm:text-xs font-mono rounded-lg font-medium transition-all duration-300 ${isSpecialTool
                              ? "bg-accent/20 border border-accent/50 text-accent font-bold shadow-[0_0_10px_rgba(0,229,153,0.15)]"
                              : "bg-white/5 border border-white/10 text-white/80"
                            }`}
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Bottom Horizontal Pipeline Flow (Sleek & Clean) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#111114] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-2xl space-y-6"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>End-to-End Design-to-Dev Pipeline</span>
            </span>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest hidden sm:inline">
              Figma → Production Code
            </span>
          </div>

          {/* 4 Clean Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {workflowSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white/5 border border-white/10 hover:border-accent/40 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black font-display text-accent opacity-80 group-hover:opacity-100">
                        {step.num}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-accent group-hover:border-accent/30 transition-all">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <h5 className="font-display font-bold text-base text-white">
                      {step.title}
                    </h5>
                    <p className="text-xs text-white/60 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:flex items-center gap-1 text-white/20 pt-4 mt-2 font-mono text-[10px]">
                      <span>Next step</span>
                      <ArrowRight className="w-3 h-3 text-accent/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
