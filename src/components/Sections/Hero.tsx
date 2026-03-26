import { motion, useScroll, useTransform } from "motion/react";
import { Download, Linkedin, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "../../constants";
import { GenericMarquee } from "../Reusable/GenericMarquee";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

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
    <section className="relative min-h-screen flex flex-col justify-between pt-40 pb-16 px-6 overflow-hidden bg-ink">
      {/* Noise Texture Overlay moved to App level or kept here? App level is better for global. */}
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="text-[18vw] font-display font-black tracking-tighter leading-none whitespace-nowrap text-white uppercase"
        >
          {PORTFOLIO_DATA.name.split(' ')[1]}
        </motion.span>
      </div>

      {/* Central Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center">
        <motion.div
          className="w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] bg-accent/10 rounded-full blur-[120px]"
          animate={{
            x: ["-30vw", "30vw", "-10vw", "-30vw"],
            y: ["-20vh", "20vh", "10vh", "-20vh"],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20 flex-1 flex flex-col justify-center px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-accent">UI/UX DEVELOPER & DESIGNER</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tighter leading-[0.9] uppercase mb-8">
              {PORTFOLIO_DATA.name.split(' ')[0]} <br />
              <span className="text-white/20">{PORTFOLIO_DATA.name.split(' ')[1]}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="lg:text-right lg:ml-auto max-w-md flex flex-col items-start lg:items-end"
          >
            <p className="text-sm md:text-base lg:text-lg text-white/50 leading-relaxed font-light mb-8 text-left lg:text-right">
              I use a design thinking approach rooted in user research, rapid prototyping, and testing - helping me uncover insights early and create intuitive, impactful solutions.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-accent text-black font-mono font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-colors duration-300 hover:shadow-[0_0_30px_rgba(0,229,153,0.4)]"
            >
              DOWNLOAD RESUME
              <Download className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Skills Bar */}
      <div className="max-w-7xl mx-auto w-full relative z-20 mt-auto pt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex gap-6 mb-10 px-2"
        >
          <motion.a
            whileHover={{ scale: 1.2, color: "#0A66C2", opacity: 1 }}
            href={PORTFOLIO_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" fill="currentColor" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#fafafa", opacity: 1 }}
            href="#"
            className="transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" fill="currentColor" />
          </motion.a>
        </motion.div>

        <div className="relative border-t border-white/5 pt-10 -mx-6 md:-mx-12">
          <GenericMarquee items={marqueeItems} speed={60} />
        </div>
      </div>

      {/* Background Accents */}
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none"
        animate={{ x: [0, -100, 0], y: [0, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};
