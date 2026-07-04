import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Image as ImageIcon } from "lucide-react";
import { PORTFOLIO_DATA } from "../../constants";
import { SectionHeader } from "../Reusable/SectionHeader";
import { ImageGalleryModal } from "../Reusable/ImageGalleryModal";

export const Awards = () => {
  const [selectedAward, setSelectedAward] = useState<any>(null);

  return (
    <section id="awards" className="py-[45px] md:py-32 px-6 relative overflow-hidden grid-lines">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          technical="RECOGNITION"
          title="The"
          subtitle="Awards"
          className="mb-16 md:mb-24"
        />

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
              <div className="w-full max-w-[320px] aspect-[4/3] md:w-24 md:h-24 md:aspect-square border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-700 shrink-0 overflow-hidden relative">
                {(award as any).images && (award as any).images.length > 0 ? (
                  <img
                    src={(award as any).images[0]}
                    alt={award.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 absolute inset-0"
                  />
                ) : (
                  <Trophy className="w-12 h-12" fill="currentColor" />
                )}
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
                {(award as any).images && (award as any).images.length > 0 && (
                  <button
                    onClick={() => setSelectedAward(award)}
                    className="mt-6 flex items-center gap-2 text-sm font-mono tracking-wider text-white/50 hover:text-accent transition-colors uppercase mx-auto md:mx-0"
                  >
                    <ImageIcon className="w-4 h-4" />
                    View Images ({(award as any).images.length})
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedAward && (
          <ImageGalleryModal
            images={selectedAward.images}
            title={selectedAward.title}
            onClose={() => setSelectedAward(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
