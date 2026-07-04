import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "../../constants";
import { SectionHeader } from "../Reusable/SectionHeader";

export const GraphicDesign = () => {
  const graphicDesignGroups = PORTFOLIO_DATA.graphicDesignGroups;
  const [activeTab, setActiveTab] = useState(graphicDesignGroups?.[0]?.groupName || "");
  const [selectedImage, setSelectedImage] = useState<{ id: number; title: string; image: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [activeTab]);

  if (!graphicDesignGroups || graphicDesignGroups.length === 0) return null;

  const activeGroup = graphicDesignGroups.find(g => g.groupName === activeTab) || graphicDesignGroups[0];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? scrollRef.current.clientWidth : 400;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="graphic-design" className="py-20 md:py-32 relative border-t border-white/5 bg-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <SectionHeader
            technical="VISUAL_IDENTITY"
            title="Graphic & Logo"
            subtitle="Design"
            align="left"
            className="mb-0"
          />
          <p className="max-w-sm text-white/60 text-base leading-relaxed font-light">
            A showcase of my raw visual design skills, organized by theme and project, including logo marks, brand identities, and layout compositions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12 items-center justify-center md:justify-start">
          {graphicDesignGroups.map((group) => (
            <button
              key={group.groupName}
              onClick={() => setActiveTab(group.groupName)}
              className={`px-5 py-2.5 rounded-full text-sm font-display tracking-widest uppercase transition-all duration-300 border ${activeTab === group.groupName
                ? "bg-white text-ink border-white"
                : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                }`}
            >
              {group.groupName}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-end mb-4 pr-2">
          <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest font-display flex items-center gap-2">
            <span>Swipe to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </p>
        </div>

        {/* Tab Content */}
        <div className="min-h-[50vh] relative group/gallery">
          {/* Gradient Right Edge Fade */}
          <div className="absolute right-0 top-0 bottom-6 w-16 md:w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 p-3 bg-white text-ink rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-xl hidden md:flex items-center justify-center ${!canScrollLeft ? 'invisible' : ''}`}
            disabled={!canScrollLeft}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 p-3 bg-white text-ink rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-xl hidden md:flex items-center justify-center ${!canScrollRight ? 'invisible' : ''}`}
            disabled={!canScrollRight}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.groupName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Horizontal Scroll Gallery */}
              <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* CSS to hide scrollbar for webkit */}
                <style>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {activeGroup.designs.map((design, i) => (
                  <motion.div
                    key={design.id}
                    onClick={() => setSelectedImage(design)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (i % 5) * 0.05, duration: 0.5, ease: "easeOut" }}
                    className="flex-none w-[80vw] sm:w-[320px] md:w-[400px] snap-center group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer"
                  >
                    <div className="aspect-[4/3] w-full relative">
                      <img
                        src={design.image}
                        alt={design.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        loading="lazy"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                          <h4 className="text-base md:text-lg font-display font-bold uppercase tracking-widest text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            {design.title}
                          </h4>
                          <div className="w-8 h-px bg-accent mt-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 delay-100" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-[1010]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-[80vw] max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="text-white font-display tracking-widest uppercase text-sm">{selectedImage.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
