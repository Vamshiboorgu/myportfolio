import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Download, Linkedin, Sparkles, ChevronDown, MousePointer2 } from "lucide-react";
import Hls from "hls.js";
import { PORTFOLIO_DATA } from "../../constants";
import { GenericMarquee } from "../Reusable/GenericMarquee";

// Ultra-Sleek Glassmorphic Design Pill
const FloatingDesignPill = ({
  label,
  className = "",
  delay = 0,
  showCursor = false,
  tag = "UX/UI"
}: {
  label: string;
  className?: string;
  delay?: number;
  showCursor?: boolean;
  tag?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
    transition={{
      opacity: { duration: 0.6, delay },
      scale: { duration: 0.6, delay },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`absolute z-30 pointer-events-auto px-4 py-2 bg-ink/85 border border-white/20 hover:border-accent/80 rounded-full text-white font-sans text-xs font-medium tracking-wide shadow-[0_12px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(0,229,153,0.12)] backdrop-blur-2xl flex items-center gap-2.5 select-none group hover:shadow-[0_12px_35px_rgba(0,229,153,0.25)] transition-all duration-300 ${className}`}
  >
    {/* Glowing Accent Bullet */}
    <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,153,0.8)] group-hover:scale-125 transition-transform" />

    {/* Label */}
    <span className="text-white/90 group-hover:text-white font-semibold text-xs tracking-tight">{label}</span>

    {/* Subtle Category Pill Tag */}
    {tag && (
      <span className="text-[9px] font-mono uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full ml-1">
        {tag}
      </span>
    )}

    {/* Sleek Figma Cursor Indicator */}
    {showCursor && (
      <motion.div
        animate={{ y: [0, 4, 0], x: [0, 2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-5 -right-3 pointer-events-none flex items-center gap-1 bg-accent text-black font-mono text-[9px] font-bold px-2 py-0.5 rounded-full shadow-[0_4px_12px_rgba(0,229,153,0.5)] border border-black/20"
      >
        <MousePointer2 className="w-3 h-3 fill-black text-black -rotate-12" />
        <span>Vamshi</span>
      </motion.div>
    )}
  </motion.div>
);

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => { });
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
      video.play().catch(() => { });
    }
  }, []);

  const marqueeSkills = [
    "UX DESIGN",
    "USER RESEARCH",
    "PROTOTYPING",
    "DESIGN SYSTEMS",
    "WORDPRESS DEVELOPMENT",
    "VIDEO EDITING",
    "INTERACTION DESIGN",
    "USABILITY TESTING",
  ];

  const marqueeItems = marqueeSkills.map((skill) => (
    <span key={skill} className="text-xl md:text-4xl font-display font-bold tracking-tighter text-white/[0.08] hover:text-accent transition-colors duration-500 cursor-default uppercase pr-12 md:pr-16 flex items-center gap-6">
      <span>{skill}</span>
      <span className="text-accent/30 text-lg">·</span>
    </span>
  ));

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-between pt-28 pb-6 px-4 md:px-8 overflow-hidden bg-ink grid-lines">

      {/* Video Background Layer with Mux HLS Stream */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15 filter brightness-90 contrast-110 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/40 to-ink pointer-events-none" />
      </div>

      {/* Subtle Background Radial Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container — 2 Column Clean & Spacious Layout */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="max-w-7xl mx-auto w-full relative z-20 flex-1 flex flex-col justify-center my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Headline, Copy & CTAs (Spans 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Greeting Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>UX/UI Designer · Hyderabad, IN</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter uppercase leading-[0.95] text-white mb-6"
            >
              VAMSHI BOORGU <br />
              <span className="text-accent drop-shadow-[0_0_30px_rgba(0,229,153,0.35)]">UX/UI DESIGNER</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-white/75 font-light leading-relaxed mb-8 max-w-xl"
            >
              I craft user-centered experiences for dashboards, design systems, and web apps — backed by 3.8 years of turning research into production-ready interfaces.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-4 bg-accent text-black font-mono font-bold uppercase tracking-widest text-xs rounded-2xl shadow-[0_0_25px_rgba(0,229,153,0.35)] hover:bg-white transition-all duration-300"
              >
                LET'S TALK
              </motion.a>
              <motion.a
                href="/VamshiBoorgu.docx"
                download="VamshiBoorgu.docx"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-7 py-4 border border-white/20 text-white font-mono font-bold uppercase tracking-widest text-xs rounded-2xl hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 backdrop-blur-md"
              >
                RESUME
                <Download className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Quick Metrics & Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 w-full max-w-xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">3.8+</span>
                <span className="text-xs font-mono uppercase text-white/50 tracking-wider">Years Exp</span>
              </div>
              <span className="w-px h-6 bg-white/10" />
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">10+</span>
                <span className="text-xs font-mono uppercase text-white/50 tracking-wider">Shipped Projects</span>
              </div>
              <span className="w-px h-6 bg-white/10" />
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono uppercase text-accent hover:underline ml-auto sm:ml-0"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Reference Style Capsule Portrait Container with Floating Figma Selection Pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full max-w-[360px] sm:max-w-[400px] mx-auto lg:ml-auto relative flex justify-center py-6"
          >
            {/* Ultra-Sleek Glassmorphic Floating Pills Around Portrait */}
            <FloatingDesignPill label="Product Design" tag="CORE" className="-top-3 -left-4 sm:-left-8" delay={0.4} />
            <FloatingDesignPill label="User Experience" tag="UI/UX" className="top-16 -right-4 sm:-right-8" delay={0.6} showCursor={true} />
            <FloatingDesignPill label="WordPress & Video" tag="CMS & MEDIA" className="bottom-14 -left-6 sm:-left-10" delay={0.8} />

            {/* Soft Ambient Background Glow */}
            <div className="absolute inset-0 bg-accent/20 rounded-[180px] blur-[60px] pointer-events-none" />

            {/* Outer Stadium Capsule Frame */}
            <div className="relative w-full h-[460px] sm:h-[500px] rounded-[180px] sm:rounded-[200px] bg-gradient-to-b from-accent/20 via-accent/10 to-accent/5 border border-accent/30 shadow-[0_0_50px_rgba(0,229,153,0.18)] p-2 backdrop-blur-md flex items-end justify-center overflow-hidden group">

              {/* Headshot Photo inside capsule */}
              <img
                src="/designer_headshot.jpg"
                alt="Vamshi Boorgu - UX/UI Designer"
                className="w-full h-full object-cover object-center rounded-[172px] sm:rounded-[192px] filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle gradient overlay at bottom of capsule */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent pointer-events-none" />

              {/* Floating Sparkle Stars at Top Right */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-6 z-20 pointer-events-none"
              >
                <Sparkles className="w-8 h-8 text-accent fill-accent drop-shadow-[0_0_15px_rgba(0,229,153,0.9)]" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-col items-center justify-center mt-2 z-20 pointer-events-none"
      >
        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-1">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-accent/60" />
        </motion.div>
      </motion.div>

      {/* Marquee Footer */}
      <div className="relative mt-4 overflow-hidden w-full border-t border-white/5 pt-4 z-20">
        <GenericMarquee items={marqueeItems} speed={60} />
      </div>

    </section>
  );
};
