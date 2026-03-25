import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Layout,
  Menu,
  X,
  Sparkles,
  Command,
  Zap,
  Globe,
  ArrowRight,
  Trophy
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "./constants";
import { PageLoader } from "./PageLoader";
import { Particles } from "./Particles";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT ME", href: "#about" },
    { name: "WORK", href: "#work" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-xl py-4" : "bg-transparent py-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group"
          aria-label="Vamshi Boorgu - Home"
        >
          {/* Split-block VB monogram */}
          <div className="flex items-stretch h-9 overflow-hidden group-hover:shadow-[0_0_20px_rgba(0,174,239,0.25)] transition-shadow duration-500">
            <div className="bg-accent flex items-center justify-center px-2.5">
              <span className="text-black font-display font-black text-sm leading-none tracking-tight">V</span>
            </div>
            <div className="border border-white/20 border-l-0 flex items-center justify-center px-2.5 bg-white/5">
              <span className="text-white font-display font-black text-sm leading-none tracking-tight">B</span>
            </div>
          </div>
          {/* Wordmark */}
          <div className="hidden sm:flex flex-col leading-none gap-0.5">
            <span className="text-[11px] font-display font-bold tracking-[0.28em] text-white uppercase">Vamshi</span>
            <span className="text-[9px] font-mono tracking-[0.35em] text-accent/60 uppercase">Boorgu</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 md:hidden"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-[0.3em] text-white/70 hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const expertiseSkills = [
    "UX DESIGN",
    "RESEARCH",
    "USABILITY TESTING",
    "VISUAL DESIGN",
    "PROTOTYPING"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-40 pb-16 px-6 overflow-hidden bg-ink">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise z-50 pointer-events-none" />

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

      {/* Central Ambient Glow (Roaming Animation) */}
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
          {/* Left Content */}
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

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="lg:text-right lg:ml-auto max-w-md"
          >
            <p className="text-sm md:text-base lg:text-lg text-white/50 leading-relaxed font-light">
              I use a design thinking approach rooted in user research, rapid prototyping, and testing - helping me uncover insights early and create intuitive, impactful solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Skills Bar */}
      <div className="max-w-7xl mx-auto w-full relative z-20 mt-auto pt-12">
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex gap-6 mb-10 px-2"
        >
          <motion.a
            whileHover={{ scale: 1.2, color: "#00AEEF", opacity: 1 }}
            href={PORTFOLIO_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#00AEEF", opacity: 1 }}
            href="#"
            className="transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Scrolling Skills Marquee */}
        <div className="relative overflow-hidden border-t border-white/5 pt-10 -mx-6 md:-mx-12 w-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex"
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-16 md:gap-24 whitespace-nowrap pr-16 md:pr-24"
            >
              {[...expertiseSkills, ...expertiseSkills, ...expertiseSkills, ...expertiseSkills, ...expertiseSkills, ...expertiseSkills].map((skill, i) => (
                <span
                  key={i}
                  className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-white/[0.05] hover:text-accent transition-colors duration-500 cursor-default uppercase"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Gradient Fades for Marquee */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* Background Accents (Roaming) */}
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none"
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none"
        animate={{
          x: [0, 80, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-20 border-y border-white/10 overflow-hidden bg-white/2 relative w-screen -mx-6 sm:-mx-8">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="text-6xl md:text-8xl font-display font-black text-white/10 uppercase tracking-tighter">
              User Experience
            </span>
            <Sparkles className="w-12 h-12 text-accent/30 shrink-0" />
            <span className="text-6xl md:text-8xl font-display font-black text-white/10 uppercase tracking-tighter">
              Product Design
            </span>
            <Zap className="w-12 h-12 text-accent/30 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Work = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY: _scrollY } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const currentCompanyProjects = PORTFOLIO_DATA.projects;

  return (
    <section id="work" ref={targetRef} className="relative h-[400vh] grid-lines">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 mb-12 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/10 pb-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-technical text-accent mb-6"
              >
                / SELECTED_ARCHIVES
              </motion.div>
              <h2 className="text-5xl sm:text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.9] uppercase">
                Selected <br />
                <span className="text-white/20">Artifacts.</span>
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-white/60 text-base leading-relaxed font-light mb-8">
                A curated selection of digital products developed during my tenure at IBaseIT, blending aesthetic precision with functional depth.
              </p>
              <div className="flex items-center gap-4 text-technical opacity-40">
                <div className="w-12 h-px bg-accent" />
                <span>TOTAL_COUNT: {currentCompanyProjects.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="flex items-center px-6">
          <motion.div
            style={{ x }}
            className="flex gap-8"
          >
            {currentCompanyProjects.map((project, i) => (
              <div
                key={project.id}
                className="min-w-[280px] sm:min-w-[350px] md:min-w-[550px] flex-shrink-0"
              >
                <div className="border border-white/[0.08] p-10 md:p-14 h-full bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,174,239,0.15)] hover:border-white/[0.15] hover:from-white/[0.05] transition-all duration-500 flex flex-col justify-between group/card relative overflow-hidden">
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover/card:bg-accent/20 group-hover/card:scale-150 transition-all duration-700" />

                  {/* Bottom Glow Focus Line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 origin-left" />

                  <div className="relative z-10">
                    <div className="text-accent text-[10px] font-mono uppercase tracking-widest mb-8 flex items-center gap-4 group-hover/card:text-white transition-colors duration-500">
                      <span className="w-8 h-px bg-accent/50 group-hover/card:w-16 group-hover/card:bg-white/80 transition-all duration-500" />
                      PROJECT {(i + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-8 uppercase tracking-tighter leading-none text-white drop-shadow-sm group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-white/50 transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white/40 line-clamp-2 font-light leading-relaxed max-w-md group-hover/card:text-white/70 transition-colors duration-500">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-16 flex items-end justify-between relative z-10">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono uppercase tracking-widest border border-white/10 bg-white/5 px-3 py-1 opacity-50 group-hover/card:opacity-100 group-hover/card:border-white/20 group-hover/card:bg-white/10 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:bg-white group-hover/card:text-black group-hover/card:border-white transition-all duration-500 shrink-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="max-w-7xl mx-auto w-full px-6 mt-12 md:mt-20">
          <div className="flex items-center justify-between opacity-20">
            <div className="flex items-center gap-4">
              <div className="w-24 h-px bg-white" />
              <span className="text-[10px] font-mono uppercase tracking-widest">Scroll down to explore artifacts</span>
            </div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-accent origin-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; const BentoSkills = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 grid-lines relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Main Bio Card */}
          <div className="md:col-span-4 md:row-span-2 border border-white/[0.08] p-10 md:p-14 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,174,239,0.1)] hover:border-white/[0.15] hover:from-white/[0.05] transition-all duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

            <div className="relative z-10">
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
            </div>

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
          </div>

          {/* Experience Card */}
          <div className="md:col-span-2 border border-white/[0.08] p-10 flex flex-col justify-center items-center text-center group bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-md hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_20px_40px_-20px_rgba(0,174,239,0.1)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            <div className="absolute top-6 left-6 text-[10px] font-mono tracking-widest text-white/30 group-hover:text-accent transition-colors">EXPERIENCE</div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="text-8xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 group-hover:from-accent group-hover:to-accent/40 mb-4 group-hover:scale-110 transition-all duration-500 drop-shadow-lg">
                {PORTFOLIO_DATA.experience.split(' ')[0]}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">Years of Experience</div>
            </div>
          </div>

          {/* Location Card */}
          <div className="md:col-span-2 border border-white/[0.08] p-10 flex flex-col justify-center items-center text-center group bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-md hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_20px_40px_-20px_rgba(0,174,239,0.1)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            <div className="absolute top-6 left-6 text-[10px] font-mono tracking-widest text-white/30 group-hover:text-accent transition-colors">LOCATION</div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-white/5 group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Globe className="w-8 h-8 text-accent group-hover:text-black relative z-10 transition-colors duration-500" fill="currentColor" />
              </div>
              <div className="text-3xl font-display font-bold mb-3 uppercase tracking-tight text-white group-hover:text-accent transition-colors">{PORTFOLIO_DATA.location.split(',')[0]}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">Based In</div>
            </div>
          </div>

          {/* Skills Section - Redesigned for better visibility */}
          <div className="md:col-span-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Design Tools Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border border-white/[0.08] p-10 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-md hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_20px_40px_-20px_rgba(0,174,239,0.1)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/15 group-hover:scale-150 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <Layout className="w-5 h-5 text-accent group-hover:text-black relative z-10 transition-colors duration-500" fill="currentColor" />
                    </div>
                    <h4 className="text-xl font-display font-bold uppercase tracking-tight group-hover:text-accent transition-colors duration-500">Design Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {PORTFOLIO_DATA.skills.design.map(skill => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-black/50 border border-white/5 text-[11px] font-mono uppercase tracking-widest text-white/60 group-hover:border-white/20 group-hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Technical Stack Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group border border-white/[0.08] p-10 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-md hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_20px_40px_-20px_rgba(0,174,239,0.1)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/15 group-hover:scale-150 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <Zap className="w-5 h-5 text-accent group-hover:text-black relative z-10 transition-colors duration-500" fill="currentColor" />
                    </div>
                    <h4 className="text-xl font-display font-bold uppercase tracking-tight group-hover:text-accent transition-colors duration-500">Technical Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {PORTFOLIO_DATA.skills.technical.map(skill => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-black/50 border border-white/5 text-[11px] font-mono uppercase tracking-widest text-white/60 group-hover:border-white/20 group-hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Design Arsenal Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group border border-white/[0.08] p-10 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-md hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_20px_40px_-20px_rgba(0,174,239,0.1)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/15 group-hover:scale-150 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <Sparkles className="w-5 h-5 text-accent group-hover:text-black relative z-10 transition-colors duration-500" fill="currentColor" />
                    </div>
                    <h4 className="text-xl font-display font-bold uppercase tracking-tight group-hover:text-accent transition-colors duration-500">Design Arsenal</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {PORTFOLIO_DATA.skills.tools.map(tool => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-black/50 border border-white/5 text-[11px] font-mono uppercase tracking-widest text-white/60 group-hover:border-white/20 group-hover:text-white transition-all cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 px-6 relative overflow-hidden grid-lines">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="text-technical text-accent mb-6">/ CAREER_PATH</div>
          <h3 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9]">The <br /><span className="text-white/20">Journey.</span></h3>
        </div>

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
              <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />

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
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
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

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 px-6 grid-lines relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="text-technical text-accent mb-6">/ ACADEMIC_BACKGROUND</div>
          <h3 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9]">The <br /><span className="text-white/20">Learning.</span></h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border border-white/10 p-12 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden bg-black/40 backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Awards = () => {
  return (
    <section id="awards" className="py-20 md:py-32 px-6 relative overflow-hidden grid-lines">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="text-technical text-accent mb-6">/ RECOGNITION</div>
          <h3 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9]">The <br /><span className="text-white/20">Awards.</span></h3>
        </div>

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

const Contact = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent">LET'S CONNECT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-9xl font-display font-bold tracking-tighter leading-none uppercase mb-12 md:mb-16"
        >
          HAVE A <br />
          <span className="text-white/20">PROJECT?</span>
        </motion.h2>

        <motion.a
          href={`mailto:${PORTFOLIO_DATA.email}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-4xl font-display font-bold border-b-2 border-white/10 pb-4 hover:border-accent transition-all duration-500"
        >
          {PORTFOLIO_DATA.email}
        </motion.a>

        <div className="mt-20 md:mt-32 flex flex-wrap justify-center gap-6 md:gap-12 opacity-40 text-[10px] font-mono uppercase tracking-widest">
          <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LINKEDIN</a>
          <a href={PORTFOLIO_DATA.socials.dribbble} className="hover:text-accent transition-colors">DRIBBBLE</a>
          <a href={PORTFOLIO_DATA.socials.behance} className="hover:text-accent transition-colors">BEHANCE</a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-ink">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] font-mono uppercase tracking-widest">
        <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</span>
        <div className="flex flex-wrap gap-4 md:gap-8">
          <span>Designed & Developed with passion</span>
        </div>
      </div>
    </footer>
  );
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full pointer-events-none z-0 blur-[120px]"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicked ? 0.8 : (isHovering ? 3 : 1),
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClicked ? 1.2 : (isHovering ? 1.8 : 1),
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 250, mass: 0.8 }}
      />
    </>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Let the browser paint at least one frame, then fade loader out
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans selection:bg-accent/30 selection:text-accent bg-ink text-white scroll-smooth relative">
      <Particles />
      <PageLoader isLoading={isLoading} />
      <CustomCursor />
      <div className="noise" />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <BentoSkills />
        <Experience />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
