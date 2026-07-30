import { motion } from "motion/react";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";

type CaseStudyModalProps = {
  project: any;
  onClose: () => void;
};

export const CaseStudyModal = ({ project, onClose }: CaseStudyModalProps) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 md:p-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-ink/90 backdrop-blur-md" 
      />
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-ink border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-[1000]"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 left-0 w-full px-6 py-4 border-b border-white/5 flex items-center justify-between bg-ink/80 backdrop-blur-lg z-50">
          <div className="flex items-center gap-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent">Case Study</div>
            <h2 className="text-xl font-display font-bold text-white">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto no-scrollbar flex-1 relative">
          {/* Hero Image */}
          <div className="w-full h-[40vh] sm:h-[50vh] relative border-b border-white/5">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-[10px] sm:text-xs font-mono uppercase tracking-widest border border-white/10 bg-black/50 backdrop-blur-md px-3 py-1.5 text-white/70 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-6">
                {project.title}
              </h1>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-accent hover:text-white transition-colors group">
                View Live Project
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Case Study Details */}
          <div className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16 space-y-16 sm:space-y-24">
            
            {/* Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-4">01 // Overview</h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light">
                  {caseStudy?.overview || project.description}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/5" />

            {/* Problem */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-4">02 // The Problem</h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light">
                  {caseStudy?.problem || "Users faced significant friction using the existing platform due to complex navigation and overwhelming data density."}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">03 // The Solution</h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light mb-10">
                  {caseStudy?.solution || "We simplified the core user flows, introduced a minimalist visual language, and utilized progressive disclosure to reduce cognitive load."}
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                  <h4 className="text-sm font-mono uppercase tracking-widest text-white/60 mb-6">Key Features Delivered</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(caseStudy?.features || ["Intuitive Navigation", "Responsive Design", "Data Visualization", "Accessibility Improvements"]).map((feature: string) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dummy Mockups Grid */}
            {caseStudy?.images && (
              <div className="pt-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-8">UI Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.images.map((img: string, idx: number) => (
                    <div key={idx} className={`rounded-2xl overflow-hidden border border-white/10 ${idx === 0 ? 'md:col-span-2' : ''}`}>
                      <img src={img} alt={`Mockup ${idx + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
