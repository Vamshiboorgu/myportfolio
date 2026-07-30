import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS_LIST, Project } from "../../data/projectsData";
import { SectionHeader } from "../Reusable/SectionHeader";
import { TransitionLink } from "../transitions/TransitionLink";

const ProjectContent = ({ project, i }: { project: Project; i: number }) => (
  <>
    <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover/card:bg-accent/20 group-hover/card:scale-150 transition-all duration-700 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 origin-left" />

    <div className="relative z-10">
      <div className="text-accent text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-6 sm:mb-8 flex items-center gap-4 group-hover/card:text-white transition-colors duration-500">
        <span className="w-6 sm:w-8 h-px bg-accent/50 group-hover/card:w-16 group-hover/card:bg-white/80 transition-all duration-500" />
        {project.number || `PROJECT ${(i + 1).toString().padStart(2, '0')}`}
      </div>
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 uppercase tracking-tighter leading-tight text-white drop-shadow-sm group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-accent group-hover/card:to-accent/50 transition-all duration-500">
        {project.title}
      </h3>
      <p className="text-sm sm:text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-md group-hover/card:text-white/70 transition-colors duration-500">
        {project.description}
      </p>
    </div>

    <div className="mt-8 sm:mt-16 flex items-end justify-between relative z-10 w-full">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest border border-white/10 bg-white/5 px-2 sm:px-3 py-1 opacity-50 group-hover/card:opacity-100 group-hover/card:border-white/20 group-hover/card:bg-white/10 transition-all duration-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="shrink-0 ml-3">
        {project.caseStudySlug && !project.comingSoon ? (
          <TransitionLink
            to={`/work/${project.caseStudySlug}`}
            label={project.title}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-wider text-accent hover:text-white transition-colors group/cta"
          >
            <span className="hidden sm:inline">View Case Study</span>
            <ArrowUpRight className="w-4 h-4 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5 transition-transform duration-300" />
          </TransitionLink>
        ) : (
          <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-white/30 uppercase border border-white/10 px-2.5 py-1 rounded-full">
            Coming soon
          </span>
        )}
      </div>
    </div>
  </>
);

export const Work = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 24, restDelta: 0.001 });
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section id="work" ref={targetRef} className="relative grid-lines">
      {/* ── DESKTOP LAYOUT (Horizontal Scroll) ── */}
      <div className="hidden lg:block h-[400vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto w-full px-6 mb-16">
            <div className="flex items-end justify-between gap-12 border-b border-white/10 pb-12">
              <div className="max-w-2xl">
                <SectionHeader
                  technical="SELECTED_ARCHIVES"
                  title="Selected"
                  subtitle="Artifacts"
                  align="left"
                />
              </div>
              <div className="max-w-xs">
                <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-white/60 text-base leading-relaxed font-light mb-6">A curated selection of digital products developed during my tenure at IBaseIT, blending aesthetic precision with functional depth.</motion.p>
                <div className="flex items-center gap-4 text-technical opacity-60">
                  <div className="w-12 h-px bg-accent" />
                  <span>TOTAL_COUNT: {PROJECTS_LIST.length}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Horizontal Scroll Track */}
          <div className="flex items-center">
            <motion.div style={{ x, paddingLeft: 'calc((100vw - min(100vw, 80rem)) / 2 + 1.5rem)' }} className="flex gap-8">
              {PROJECTS_LIST.map((project, i) => (
                <div key={project.id} className="min-w-[350px] md:min-w-[450px] flex-shrink-0">
                  <div className="border border-white/10 p-8 sm:p-10 h-full min-h-[320px] md:min-h-[400px] bg-white/5 backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,229,153,0.3)] hover:border-white/20 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between group/card relative overflow-hidden rounded-2xl">
                    <ProjectContent project={project} i={i} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── MOBILE / TABLET LAYOUT ── */}
      <div className="lg:hidden py-[45px] px-4 sm:px-6 flex flex-col relative w-full overflow-visible">
        <div className="mb-16 border-b border-white/10 pb-12">
          <SectionHeader
            technical="SELECTED_ARCHIVES"
            title="Selected"
            subtitle="Artifacts"
            align="left"
          />
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-8 text-white/60 text-sm sm:text-base leading-relaxed font-light">A curated selection of digital products developed during my tenure at IBaseIT, blending aesthetic precision with functional depth.</motion.p>
        </div>

        <div className="flex flex-col relative pb-[20vh] w-full gap-4 sm:gap-6 z-20">
          {PROJECTS_LIST.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="sticky border border-white/10 p-6 sm:p-8 min-h-[30vh] md:min-h-[40vh] flex flex-col justify-between bg-ink/95 backdrop-blur-2xl shadow-2xl group/card overflow-hidden rounded-2xl"
              style={{ top: `calc(${15 + i * 2}vh)` }}
            >
              <ProjectContent project={project} i={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
