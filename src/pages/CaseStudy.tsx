import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, CheckSquare, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/projectsData';
import { Footer } from '../components/Navigation/Footer';
import { TransitionLink } from '../components/transitions/TransitionLink';
import { useEffect } from 'react';

// Tool icon helper
const getToolIcon = (toolName: string) => {
  const name = toolName.toLowerCase();
  if (name.includes('figma')) {
    return (
      <svg className="w-4 h-4 text-purple-400" viewBox="0 0 38 57" fill="currentColor">
        <path fill="#F24E1E" d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" />
        <path fill="#A259FF" d="M9.5 57A9.5 9.5 0 0 1 0 47.5V38h9.5a9.5 9.5 0 0 1 0 19z" />
        <path fill="#1ABCFE" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v9.5H9.5A9.5 9.5 0 0 1 0 28.5z" />
        <path fill="#0ACF83" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
        <path fill="#FF7262" d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z" />
      </svg>
    );
  }
  if (name.includes('react')) {
    return (
      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.4" />
      </svg>
    );
  }
  return <Sparkles className="w-4 h-4 text-accent" />;
};

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const caseStudy = slug ? CASE_STUDIES[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#070714] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-display font-extrabold text-4xl mb-4 text-white uppercase">Case Study Coming Soon</h1>
        <p className="text-white/60 mb-8 max-w-md">
          This case study is currently being documented. Check back shortly or view other featured projects.
        </p>
        <TransitionLink
          to="/"
          label="HOME"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00E599] text-black font-mono text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-colors shadow-md font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </TransitionLink>
      </div>
    );
  }

  const slugs = Object.keys(CASE_STUDIES);
  const currentIndex = slugs.indexOf(caseStudy.slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextCaseStudy = CASE_STUDIES[nextSlug];

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-zinc-900 font-sans relative selection:bg-[#00E599] selection:text-black"
    >
      {/* ── HIGH-END WHITE THEME HERO BANNER (COMPACT HEIGHT) ── */}
      <div className="relative min-h-[55vh] bg-white text-zinc-900 flex flex-col items-center justify-between pt-16 pb-10 px-6 overflow-hidden border-b border-zinc-200 selection:bg-[#00E599] selection:text-black">

        {/* Ambient Vibrant Colorful Radial Glowing Background Orbs */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/15 via-emerald-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-indigo-500/20 via-purple-400/20 to-emerald-400/25 rounded-full blur-[110px] pointer-events-none" />

        {/* Subtle Grid Dot Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Floating Back Navigation Link */}
        <nav className="fixed top-6 left-6 z-50">
          <TransitionLink
            to="/"
            label="HOME"
            className="bg-white/95 border border-zinc-300 shadow-md rounded-full px-5 py-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-900 hover:text-[#00A86B] hover:border-[#00A86B] transition-all duration-300 backdrop-blur-md font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-[#00A86B]" /> ← Back
          </TransitionLink>
        </nav>

        {/* ── GIANT BANNER NUMBER BLUR RELEASE WATERMARK ── */}
        <motion.div
          initial={{ filter: "blur(28px)", opacity: 0, scale: 1.2 }}
          animate={{ filter: "blur(0px)", opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] sm:text-[24rem] md:text-[30rem] font-display font-black text-zinc-900 pointer-events-none select-none tracking-tighter leading-none z-0"
        >
          0{currentIndex + 1}
        </motion.div>

        {/* Main Banner Title & Badges */}
        <div className="max-w-4xl mx-auto w-full text-center relative z-10 flex flex-col items-center my-auto py-4">

          {/* Eyebrow Header Text */}
          <motion.div
            initial={{ filter: "blur(8px)", opacity: 0, y: 15 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs md:text-xs uppercase tracking-[0.25em] text-zinc-600 mb-4 font-bold max-w-lg"
          >
            {caseStudy.subtitle}
          </motion.div>

          {/* Massive Display Title (Compact Scale) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-4"
          >
            <h1
              className="font-display font-black uppercase tracking-tighter text-zinc-900 drop-shadow-md inline-block"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.2rem)', lineHeight: 0.9 }}
            >
              {caseStudy.title.split(' ')[0]}
            </h1>

            {/* Decorative Vector Cursor Badge */}
            <div className="absolute -top-2 -right-4 md:-right-7 w-7 h-7 md:w-8 md:h-8 bg-emerald-100 border border-emerald-400 rounded-full flex items-center justify-center text-[#00A86B] backdrop-blur-md shadow-md shadow-emerald-500/20 rotate-12">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Centered Pill Badge: Number Blur Release Animation */}
          <motion.div
            initial={{ filter: "blur(14px)", opacity: 0, y: 12, scale: 0.92 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-emerald-50/90 border border-emerald-200 shadow-sm mb-4 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-ping" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#00A86B] font-extrabold">
              PROJECT 0{currentIndex + 1} · UI/UX CASE STUDY
            </span>
          </motion.div>

          {/* Tool Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-center gap-2.5"
          >
            {caseStudy.tools.map((tool) => (
              <div
                key={tool}
                className="w-9 h-9 rounded-xl bg-white border border-zinc-300 flex items-center justify-center text-zinc-900 shadow-sm hover:scale-110 hover:border-indigo-500 transition-all duration-300"
                title={tool}
              >
                {getToolIcon(tool)}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── FLOATING FEATURE PILLS (Compact Positioning) ── */}
        {caseStudy.features && caseStudy.features.length >= 4 && (
          <>
            {/* Floating Badge 1 (Emerald/Mint Tint - Top Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:flex absolute top-20 left-6 lg:left-16 items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/40 shadow-[0_8px_20px_rgba(16,185,129,0.18)] backdrop-blur-xl -rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <CheckSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="font-sans text-[11px] font-bold text-emerald-950">{caseStudy.features[0]}</span>
            </motion.div>

            {/* Floating Badge 2 (Purple Tint - Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden md:flex absolute bottom-12 left-4 lg:left-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-500/15 border border-purple-500/40 shadow-[0_8px_20px_rgba(168,85,247,0.18)] backdrop-blur-xl rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <CheckSquare className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <span className="font-sans text-[11px] font-bold text-purple-950">{caseStudy.features[1]}</span>
            </motion.div>

            {/* Floating Badge 3 (Sapphire Blue Tint - Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="hidden md:flex absolute top-24 right-6 lg:right-16 items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-500/15 border border-blue-500/40 shadow-[0_8px_20px_rgba(59,130,246,0.18)] backdrop-blur-xl rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <CheckSquare className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="font-sans text-[11px] font-bold text-blue-950">{caseStudy.features[2]}</span>
            </motion.div>

            {/* Floating Badge 4 (Amber Tint - Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="hidden md:flex absolute bottom-10 right-4 lg:right-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/15 border border-amber-500/40 shadow-[0_8px_20px_rgba(245,158,11,0.18)] backdrop-blur-xl -rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <CheckSquare className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="font-sans text-[11px] font-bold text-amber-950">{caseStudy.features[3]}</span>
            </motion.div>
          </>
        )}
      </div>

      {/* ── HIGH-END BENTO GRID CASE STUDY DEEP DIVE ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00A86B] font-mono text-[10px] uppercase tracking-widest font-bold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B] animate-pulse" />
              PROJECT_ANALYSIS
            </div>
            <h2 className="font-display font-black uppercase text-3xl sm:text-4xl md:text-5xl text-zinc-900 tracking-tighter">
              Case Study Overview
            </h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest max-w-xs">
            Architectural breakdown, UX decisions, delivered features & key metrics.
          </p>
        </div>

        {/* ── BENTO ROW 1: OVERVIEW & METADATA BENTO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Card 1: Project Overview (8 Cols) - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-white/70 border border-zinc-200/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:border-[#00A86B]/40 hover:shadow-[0_20px_40px_rgba(0,168,107,0.08)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#00A86B] font-bold px-3 py-1 bg-emerald-50/90 border border-emerald-200 rounded-full backdrop-blur-md">
                  01 // OVERVIEW
                </span>
                <span className="w-8 h-px bg-zinc-200" />
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 mb-4 uppercase tracking-tight">
                Project Summary
              </h3>

              <p className="text-zinc-700 text-lg md:text-xl font-normal leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200/80 flex items-center justify-between font-mono text-xs text-zinc-500">
              <span className="uppercase tracking-widest">Focus: Enterprise UI/UX Design</span>
              <span className="text-[#00A86B] font-bold">Verified Production System</span>
            </div>
          </motion.div>

          {/* Card 2: Metadata At-a-Glance Bento Card (4 Cols) - Glassmorphism Dark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 bg-zinc-900/90 text-white rounded-3xl p-8 shadow-2xl border border-zinc-800/80 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00E599]" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-bold">
                METADATA_SPEC
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                  My Role
                </span>
                <span className="font-display font-bold text-base text-white">{caseStudy.role}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                    Duration
                  </span>
                  <span className="font-display font-bold text-sm text-white">{caseStudy.duration}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                    Team
                  </span>
                  <span className="font-display font-bold text-sm text-white">{caseStudy.team}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">
                  Stack & Design Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] px-2.5 py-1 bg-zinc-800/90 border border-zinc-700 text-accent rounded-md font-medium backdrop-blur-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              Status: Shipped & Deployed
            </div>
          </motion.div>

        </div>

        {/* ── BENTO ROW 2: PROBLEM VS SOLUTION SPLIT BENTO (6 Cols + 6 Cols) ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 3: The Challenge (6 Cols) - Glassmorphism Rose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-6 bg-rose-500/[0.05] border border-rose-200/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(244,63,94,0.05)] hover:border-rose-300/90 hover:shadow-[0_15px_35px_rgba(244,63,94,0.08)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="font-mono text-xs uppercase tracking-widest text-rose-700 font-bold px-3 py-1 bg-rose-100/90 rounded-full border border-rose-200/80 backdrop-blur-md">
                  02 // THE_PROBLEM
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 mb-4 uppercase tracking-tight">
                Challenge & Friction
              </h3>

              <p className="text-zinc-700 text-base md:text-lg font-normal leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-200/60 font-mono text-xs text-rose-700 font-semibold">
              Primary Bottleneck: User drop-off & workflow friction
            </div>
          </motion.div>

          {/* Card 4: The UX Solution (6 Cols) - Glassmorphism Emerald */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6 bg-emerald-500/[0.07] border border-emerald-200/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(16,185,129,0.06)] hover:border-emerald-300/90 hover:shadow-[0_15px_35px_rgba(16,185,129,0.09)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A86B]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#00A86B] font-bold px-3 py-1 bg-emerald-100/90 rounded-full border border-emerald-200/80 backdrop-blur-md">
                  03 // THE_SOLUTION
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 mb-4 uppercase tracking-tight">
                Design & Architecture
              </h3>

              <p className="text-zinc-700 text-base md:text-lg font-normal leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-200/60 font-mono text-xs text-[#00A86B] font-semibold">
              Core Outcome: Component-driven UX & intuitive flow
            </div>
          </motion.div>

        </div>

        {/* ── BENTO ROW 3: KEY FEATURES DELIVERED BENTO GRID (Glassmorphism) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="bg-white/70 border border-zinc-200/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#00A86B] font-bold block mb-1">
                04 // DELIVERABLES
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 uppercase tracking-tight">
                Key Features & Artifacts
              </h3>
            </div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              Total Modules: {caseStudy.features.length}
            </span>
          </div>

          {/* 4-Item Feature Bento Cards (Glassmorphic) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudy.features.map((feature, idx) => (
              <div
                key={feature}
                className="bg-white/80 border border-zinc-200/90 backdrop-blur-xl rounded-2xl p-6 shadow-xs hover:border-[#00A86B] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center font-mono text-xs font-bold text-[#00A86B]">
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#00A86B] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="font-display font-bold text-base text-zinc-900 leading-snug">
                    {feature}
                  </h4>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-100 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  Verified Feature
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── BENTO ROW 4: UI GALLERY SHOWCASE BENTO (Glassmorphism) ── */}
        {caseStudy.images && caseStudy.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/70 border border-zinc-200/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-200/80">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-bold block mb-1">
                  05 // INTERFACE_GALLERY
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 uppercase tracking-tight">
                  UI & Design System Preview
                </h3>
              </div>
              <span className="font-mono text-xs text-[#00A86B] font-bold uppercase tracking-widest">
                Figma Specs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl overflow-hidden border border-zinc-200/90 shadow-md group ${idx === 0 ? 'md:col-span-2' : ''
                    }`}
                >
                  <div className="bg-zinc-100 relative overflow-hidden">
                    <img
                      src={img}
                      alt={`${caseStudy.title} UI preview ${idx + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── BENTO ROW 5: RESULTS & KEY TAKEAWAY BENTO (Glassmorphism) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Key Metrics Cards (8 Cols) - Glassmorphism */}
          <div className="lg:col-span-8 bg-white/70 border border-zinc-200/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#00A86B] font-bold block mb-1">
                06 // METRICS & IMPACT
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 uppercase tracking-tight mb-8">
                Measurable Results
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {caseStudy.results.map((res, i) => (
                  <div key={i} className="bg-white/90 rounded-2xl p-6 border border-zinc-200/90 backdrop-blur-xl shadow-xs hover:border-[#00A86B] transition-all duration-300">
                    <span className="font-mono text-[10px] text-[#00A86B] font-bold uppercase tracking-widest block mb-2">
                      KPI METRIC #{i + 1}
                    </span>
                    <p className="text-zinc-900 font-display font-bold text-sm leading-snug">
                      {res}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200/80 font-mono text-xs text-zinc-500 uppercase tracking-widest">
              Impact Verified Across Stakeholders
            </div>
          </div>

          {/* Key Takeaway Box (4 Cols) - Glassmorphism Emerald */}
          <div className="lg:col-span-4 bg-emerald-500/[0.12] border border-emerald-500/30 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_10px_30px_rgba(16,185,129,0.06)] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#00A86B] uppercase tracking-widest font-bold block mb-3">
                Key UX Takeaway
              </span>
              <p className="text-emerald-950 font-sans text-base font-normal italic leading-relaxed">
                "{caseStudy.learnings}"
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-500/20 font-mono text-[10px] text-[#00A86B] uppercase tracking-widest font-bold">
              Design System Retrospective
            </div>
          </div>

        </motion.div>

        {/* Prev / Next project navigation using TransitionLink */}
        <div className="py-12 border-t border-zinc-200 flex justify-between items-center">
          <TransitionLink
            to="/"
            label="HOME"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors font-medium"
          >
            ← Back to Work
          </TransitionLink>

          {nextCaseStudy && (
            <TransitionLink
              to={`/work/${nextCaseStudy.slug}`}
              label={nextCaseStudy.title}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A86B] hover:text-zinc-900 transition-colors font-bold"
            >
              Next: {nextCaseStudy.title} →
            </TransitionLink>
          )}
        </div>
      </div>

      <Footer />
    </motion.article>
  );
}
