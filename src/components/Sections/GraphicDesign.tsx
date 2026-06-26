import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../../constants";
import { SectionHeader } from "../Reusable/SectionHeader";

export const GraphicDesign = () => {
  const graphicDesigns = PORTFOLIO_DATA.graphicDesigns;

  if (!graphicDesigns || graphicDesigns.length === 0) return null;

  return (
    <section id="graphic-design" className="py-20 md:py-32 relative border-t border-white/5 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <SectionHeader 
            technical="VISUAL_IDENTITY" 
            title="Graphic" 
            subtitle="Design" 
            align="left"
            className="mb-0"
          />
          <p className="max-w-sm text-white/60 text-base leading-relaxed font-light">
            A showcase of my raw visual design skills, including logo marks, brand identities, and layout compositions.
          </p>
        </div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {graphicDesigns.map((design, i) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.8, ease: "easeOut" }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img 
                src={design.image} 
                alt={design.title} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {design.title}
                  </h3>
                  <div className="w-8 h-px bg-accent mt-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
