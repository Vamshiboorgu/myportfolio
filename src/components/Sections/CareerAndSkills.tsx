import { motion, animate, useInView, AnimatePresence } from "motion/react";
import { Paintbrush, Code2, RefreshCw, Search, Layout, Palette, Layers, Terminal, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// CountUp number animation component
function CountUpNumber({ end, decimals = 0, suffix = "" }: { end: number; decimals?: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          setValue(latest);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </span>
  );
}

export const CareerAndSkills = () => {
  const [activePhase, setActivePhase] = useState(0);

  const pipelineNodes = [
    { name: "Research", icon: Search, type: "design" },
    { name: "Wireframe", icon: Layout, type: "design" },
    { name: "UI Design", icon: Palette, type: "design" },
    { name: "Prototype", icon: Layers, type: "design" },
    { name: "Develop", icon: Terminal, type: "build" },
    { name: "Ship", icon: Rocket, type: "build" },
  ];

  const uxSkills = [
    "User Research", "Usability Testing", "Information Architecture", 
    "Wireframing", "Prototyping", "User Flows", 
    "Persona Development", "Competitive Analysis", "Interaction Design"
  ];

  const uiSkills = [
    "Visual Design", "Design Systems", "Responsive Design", 
    "Typography", "Component Libraries", "Micro-interactions", 
    "Accessibility (WCAG)", "Handoff Documentation"
  ];

  const devSkills = [
    "React", "Angular", "React Native", 
    "HTML5", "CSS3", "Bootstrap", 
    "JavaScript", "TypeScript"
  ];

  const designTools = ["Figma", "FigJam", "Adobe XD", "Photoshop", "Illustrator", "Miro"];
  const devTools = ["VS Code", "Git", "npm", "Chrome DevTools"];

  const handoffPhases = [
    {
      id: 0,
      title: "Design-led thinking",
      subtitle: "Phase 01 // Research, Discovery & UX Strategy",
      icon: Paintbrush,
      accent: "#4ADE80",
      description: "Every interface starts with user research, not assumptions. I conduct user interviews, map information architecture, and validate wireframes before pixel execution.",
      tools: ["Figma", "FigJam", "Adobe XD", "Photoshop", "Illustrator", "Miro"],
      skills: ["User Research", "Usability Testing", "Wireframing", "Information Architecture", "User Flows"],
    },
    {
      id: 1,
      title: "Production-ready output",
      subtitle: "Phase 02 // Frontend Engineering & Code Architecture",
      icon: Code2,
      accent: "#38BDF8",
      description: "I don't just prototype — I ship real React, Angular, and React Native code. Building modular component libraries with production-grade TypeScript and responsive Tailwind CSS.",
      tools: ["VS Code", "Git", "npm", "Chrome DevTools"],
      skills: ["React", "Angular", "React Native", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Zero handoff friction",
      subtitle: "Phase 03 // Seamless Design-to-Code Execution",
      icon: RefreshCw,
      accent: "#4ADE80",
      description: "No gap between what's designed in Figma and what's deployed in code — because I own both ends of the pipeline with 100% pixel fidelity.",
      tools: ["Figma Tokens", "Design System Specs", "Git Pipelines", "Vercel / Netlify"],
      skills: ["Component Token Syncing", "Zero Fidelity Loss", "Pixel-Perfect Responsive UI", "Rapid Iteration"],
    },
  ];

  return (
    <section id="expertise" className="py-14 sm:py-16 px-6 bg-[#0a0f0d] text-white relative overflow-hidden font-sans border-b border-[#1a2e22]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-[#4ADE80]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">

        {/* ── TOP INTEGRATED HEADER & ROLE & STATS (Compact Grid) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block (7 Cols): About + Intro + Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#111916] border border-[#1a2e22] rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                <span className="font-mono text-[11px] text-[#4ADE80] uppercase tracking-[0.25em] font-bold">
                  ABOUT // DESIGN ENGINEER
                </span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                I design it. Then I build it.
              </h2>

              <p className="text-[#8a9a8f] text-sm sm:text-base leading-relaxed font-normal">
                UX/UI Designer with 3.8 years of experience who doesn't hand off and walk away. I take products from user research through Figma to production-ready code in React and Angular — no translation layer, no fidelity loss.
              </p>
            </div>

            {/* Integrated Role Badge Strip */}
            <div className="pt-4 border-t border-[#1a2e22] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">UX/UI Designer</span>
                <span className="text-[#4ADE80] font-bold">@ iBaseit, Hyderabad</span>
              </div>
              <span className="text-[#8a9a8f] uppercase tracking-wider text-[11px]">Nov 2022 — Present</span>
            </div>
          </motion.div>

          {/* Right Block (5 Cols): 2x2 Compact Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#111916] border border-[#1a2e22] hover:border-[#4ADE80]/40 rounded-2xl p-5 shadow-xs hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-white mb-1">
                <CountUpNumber end={3.8} decimals={1} suffix="+" />
              </div>
              <div className="font-mono text-[10px] text-[#8a9a8f] uppercase tracking-widest font-semibold">
                YEARS EXP
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#111916] border border-[#1a2e22] hover:border-[#4ADE80]/40 rounded-2xl p-5 shadow-xs hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-white mb-1">
                <CountUpNumber end={10} suffix="+" />
              </div>
              <div className="font-mono text-[10px] text-[#8a9a8f] uppercase tracking-widest font-semibold">
                PROJECTS SHIPPED
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111916] border border-[#1a2e22] hover:border-[#4ADE80]/40 rounded-2xl p-5 shadow-xs hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-white mb-1">
                <CountUpNumber end={3} />
              </div>
              <div className="font-mono text-[10px] text-[#8a9a8f] uppercase tracking-widest font-semibold">
                CASE STUDIES
              </div>
            </motion.div>

            {/* Stat 4: Statement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-[#4ADE80] text-[#0a0f0d] rounded-2xl p-5 shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="font-display font-black text-xl sm:text-2xl text-[#0a0f0d] mb-1 leading-tight uppercase">
                Figma → Code
              </div>
              <div className="font-mono text-[10px] text-[#0a0f0d]/80 uppercase tracking-widest font-extrabold">
                FULL PIPELINE
              </div>
            </motion.div>
          </div>

        </div>

        {/* ── COMPACT DESIGN-TO-CODE PIPELINE STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-[#111916] border border-[#1a2e22] rounded-2xl p-5 shadow-md relative overflow-hidden space-y-4"
        >
          {/* Top Label Bar */}
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
            <span className="text-[#4ADE80] font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" /> DESIGN PHASE
            </span>
            <span className="text-[#8a9a8f] font-bold">PIPELINE FLOW</span>
            <span className="text-[#38BDF8] font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" /> BUILD PHASE
            </span>
          </div>

          {/* Connected Flow Line & Nodes */}
          <div className="relative pt-1 pb-1">
            <div className="absolute top-[26px] left-[6%] right-[6%] h-0.5 bg-[#1a2e22] z-0 overflow-hidden">
              <div className="w-20 h-full bg-gradient-to-r from-transparent via-[#4ADE80] to-transparent animate-pipeline-pulse" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 relative z-10">
              {pipelineNodes.map((node, i) => {
                const IconComponent = node.icon;
                const isDesign = node.type === "design";
                return (
                  <div key={node.name} className="flex flex-col items-center text-center space-y-1.5 group">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border backdrop-blur-md transition-all duration-300 group-hover:scale-110 ${
                        isDesign
                          ? "bg-[#111916] border-[#4ADE80]/40 text-[#4ADE80] group-hover:border-[#4ADE80]"
                          : "bg-[#111916] border-[#38BDF8]/40 text-[#38BDF8] group-hover:border-[#38BDF8]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] font-bold text-white tracking-wider">
                      {node.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── BENTO GRID SKILLS (High Density Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Column (7 Cols) — UX PROCESS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#111916] border-y border-r border-[#1a2e22] border-l-[3px] border-l-[#4ADE80] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-y-[#4ADE80]/40 hover:border-r-[#4ADE80]/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#4ADE80] font-bold">
                  UX PROCESS
                </span>
                <span className="w-6 h-px bg-[#1a2e22]" />
              </div>

              <div className="flex flex-wrap gap-2">
                {uxSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono bg-[#0a0f0d] border border-[#1a2e22] text-[#8a9a8f] font-medium rounded-lg hover:border-[#4ADE80] hover:text-[#4ADE80] hover:scale-[1.02] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="font-mono text-[10px] text-[#8a9a8f] uppercase tracking-wider pt-2 border-t border-[#1a2e22]">
              User Research & Information Architecture
            </div>
          </motion.div>

          {/* Right Column Stack (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Top Right — UI DESIGN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#111916] border border-[#1a2e22] hover:border-[#4ADE80]/40 rounded-2xl p-5 shadow-xs hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                  UI DESIGN
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {uiSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[11px] font-mono bg-[#0a0f0d] border border-[#1a2e22] text-[#8a9a8f] font-medium rounded-md hover:border-[#4ADE80] hover:text-[#4ADE80] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Bottom Right — DEVELOPMENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#111916] border-y border-r border-[#1a2e22] border-l-[3px] border-l-[#38BDF8] rounded-2xl p-5 shadow-xs hover:border-y-[#38BDF8]/40 hover:border-r-[#38BDF8]/40 hover:-translate-y-0.5 transition-all duration-300 space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                  DEVELOPMENT
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {devSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[11px] font-mono bg-[#0a0f0d] border border-[#1a2e22] text-[#8a9a8f] font-medium rounded-md hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-[#8a9a8f] text-[11px] font-mono pt-2 border-t border-[#1a2e22]">
                "Figma to production-ready React & Angular applications."
              </p>
            </motion.div>

          </div>

          {/* Full Width Compact Card — TOOLKIT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-12 bg-[#111916] border border-[#1a2e22] rounded-2xl p-4 sm:p-5 shadow-xs"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-white font-bold shrink-0">
                TOOLKIT:
              </span>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-[#8a9a8f]">
                {designTools.map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                    <span className="text-white/90">{t}</span>
                  </div>
                ))}
                <span className="text-[#1a2e22] hidden md:inline">|</span>
                {devTools.map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span className="text-white/90">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── SECTION 6: INTERACTIVE DESIGN-TO-DEV HANDOFF PROCESS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="space-y-4 pt-2"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#4ADE80] uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-ping" />
              INTERACTIVE DESIGN-TO-DEV HANDOFF PROCESS
            </span>
            <span className="font-mono text-[10px] text-[#8a9a8f] uppercase tracking-widest hidden sm:inline">
              Click Heading to Inspect Stage Tools
            </span>
          </div>

          {/* 3 Interactive Process Headings (Tabs) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {handoffPhases.map((phase, idx) => {
              const IconComp = phase.icon;
              const isActive = activePhase === idx;
              return (
                <button
                  key={phase.title}
                  onClick={() => setActivePhase(idx)}
                  className={`text-left rounded-2xl p-5 transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                    isActive
                      ? "bg-[#111916] border-[#4ADE80] shadow-[0_0_25px_rgba(74,222,128,0.15)] -translate-y-1"
                      : "bg-[#111916]/80 border-[#1a2e22] hover:border-[#1a2e22]/80 hover:bg-[#111916]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                        isActive
                          ? "bg-[#4ADE80]/15 border-[#4ADE80] text-[#4ADE80]"
                          : "bg-[#0a0f0d] border-[#1a2e22] text-[#8a9a8f] group-hover:text-white"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>

                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        isActive
                          ? "bg-[#4ADE80] text-[#0a0f0d]"
                          : "bg-[#0a0f0d] text-[#8a9a8f] border border-[#1a2e22]"
                      }`}
                    >
                      STEP 0{idx + 1}
                    </span>
                  </div>

                  <h4 className={`font-display font-bold text-base transition-colors ${isActive ? "text-white" : "text-white/80"}`}>
                    {phase.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Dynamic Active Phase Tools & Skill Inspection Drawer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111916] border border-[#4ADE80]/40 rounded-2xl p-6 shadow-xl space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1a2e22] pb-4">
                <div>
                  <span className="font-mono text-[10px] text-[#4ADE80] uppercase tracking-widest font-bold block mb-1">
                    {handoffPhases[activePhase].subtitle}
                  </span>
                  <h4 className="font-display font-extrabold text-xl text-white">
                    {handoffPhases[activePhase].title}
                  </h4>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#8a9a8f]">
                  <span>Active Workflow State</span>
                  <ArrowRight className="w-4 h-4 text-[#4ADE80]" />
                </div>
              </div>

              <p className="text-white/90 text-sm leading-relaxed font-normal">
                {handoffPhases[activePhase].description}
              </p>

              {/* Tools & Skills Grid for Active Stage */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Active Tools */}
                <div>
                  <span className="font-mono text-[10px] text-[#8a9a8f] uppercase tracking-widest font-bold block mb-2.5">
                    STAGE TOOLS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {handoffPhases[activePhase].tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 font-mono text-xs bg-[#0a0f0d] border border-[#4ADE80]/40 text-[#4ADE80] font-bold rounded-lg shadow-xs flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Active Skills */}
                <div>
                  <span className="font-mono text-[10px] text-[#8a9a8f] uppercase tracking-widest font-bold block mb-2.5">
                    DELIVERABLE SKILLS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {handoffPhases[activePhase].skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 font-mono text-xs bg-[#0a0f0d] border border-[#1a2e22] text-white/90 font-medium rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
};
