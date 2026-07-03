import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Download, Linkedin, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../../constants";
import { GenericMarquee } from "../Reusable/GenericMarquee";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["DASHBOARDS", "DESIGN SYSTEMS", "VOICE UI", "REACT APPS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const expertiseSkills = [
    "UX DESIGN",
    "RESEARCH",
    "USABILITY TESTING",
    "VISUAL DESIGN",
    "PROTOTYPING"
  ];

  const marqueeItems = expertiseSkills.map((skill) => (
    <span key={skill} className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-white/[0.05] hover:text-accent transition-colors duration-500 cursor-default uppercase pr-16 md:pr-24">
      {skill}
    </span>
  ));

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 md:px-6 overflow-hidden bg-ink">

      {/* Background Central Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center">
        <motion.div
          className="w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] bg-accent/5 rounded-full blur-[150px]"
          animate={{
            x: ["-20vw", "20vw", "-10vw", "-20vw"],
            y: ["-10vh", "10vh", "20vh", "-10vh"],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20 flex-1 flex flex-col justify-center mt-12 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">

          {/* Cell 1: Main Title & Bio (Spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 p-8 md:p-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between overflow-hidden relative group transition-colors duration-500 hover:border-white/20 hover:bg-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none opacity-50" />

            <h2 className="text-5xl sm:text-7xl lg:text-[90px] font-display font-bold tracking-tighter uppercase leading-[0.85] text-white relative z-10 mb-12 drop-shadow-2xl">
              {PORTFOLIO_DATA.name.split(' ')[0]} <br />
              <span className="text-white/30">{PORTFOLIO_DATA.name.split(' ')[1]}</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-white/80 font-light max-w-xl relative z-10 leading-relaxed">
              UI/UX Designer & Developer, 4 yrs — I design and build dashboards, design systems, and web apps from Figma to production React.
            </p>
          </motion.div>

          {/* Cell 2: Animated Role & CTAs (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-5 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-center overflow-hidden relative group transition-colors duration-500 hover:border-white/20 hover:bg-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent pointer-events-none opacity-50" />

            <div className="mb-12">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-accent/80 mb-6 block relative z-10">
                I BUILD
              </span>
              <div className="h-16 relative z-10">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, filter: "blur(12px)", y: 15 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, filter: "blur(12px)", y: -15 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute left-0 text-[42px] font-display font-bold tracking-tighter uppercase text-accent drop-shadow-[0_0_15px_rgba(0,229,153,0.5)] whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-4 relative z-10">
              <motion.a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full xl:w-auto inline-flex items-center justify-center px-6 py-4 bg-accent text-black font-mono font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-colors duration-300 rounded-xl hover:shadow-[0_0_30px_rgba(0,229,153,0.4)]"
              >
                LET'S TALK
              </motion.a>
              <motion.a
                href="/VamshiBoorgu.docx"
                download="VamshiBoorgu.docx"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full xl:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 border border-accent/30 text-accent font-mono font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-accent/10 transition-colors duration-300 rounded-xl"
              >
                RESUME
                <Download className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Cell 3: Experience Stat (Spans 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col items-center justify-center backdrop-blur-xl text-center hover:border-white/[0.15] transition-colors duration-500"
          >
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{PORTFOLIO_DATA.experience.split(' ')[0]}+</div>
            <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/50">Years Exp</div>
          </motion.div>

          {/* Cell 4: Location (Spans 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col items-center justify-center backdrop-blur-xl text-center hover:border-white/[0.15] transition-colors duration-500"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-white/70" />
            </div>
            <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/50">{PORTFOLIO_DATA.location.split(',')[0]}</div>
          </motion.div>

          {/* Cell 5: Social (Spans 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col items-center justify-center backdrop-blur-xl text-center hover:border-white/[0.15] transition-colors duration-500 group"
          >
            <motion.a
              href="https://linkedin.com/in/vamshi-boorgu-b37119154"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 w-full h-full justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0A66C2] transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/50 group-hover:text-[#0A66C2] transition-colors duration-300">LINKEDIN</div>
            </motion.a>
          </motion.div>

        </div>
      </div>

      <div className="relative mt-12 overflow-hidden w-full border-t border-white/5 pt-8">
        <GenericMarquee items={marqueeItems} speed={60} />
      </div>

    </section>
  );
};
