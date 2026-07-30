import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../../constants";
import { SectionHeader } from "../Reusable/SectionHeader";
import { CaseStudyModal } from "./CaseStudyModal";

export const PersonalProjects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const personalProjects = PORTFOLIO_DATA.personalProjects;

  if (!personalProjects || personalProjects.length === 0) return null;

  return (
    <section id="personal-projects" className="py-20 md:py-32 relative grid-lines">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <SectionHeader 
            technical="SIDE_QUESTS" 
            title="Personal" 
            subtitle="Projects" 
            align="left"
            className="mb-0"
          />
          <p className="max-w-sm text-white/60 text-base leading-relaxed font-light">
            Conceptual case studies and personal explorations focused on solving unique UX challenges outside of my professional tenure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {personalProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col relative"
            >
              <div className="w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden relative mb-8 border border-white/10">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Hover overlay badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="bg-ink/90 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-white">View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-widest border border-white/10 bg-white/5 px-2 py-1 text-white/60 group-hover:text-accent group-hover:border-accent/30 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-display font-bold mb-3 uppercase tracking-tighter group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-light line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
