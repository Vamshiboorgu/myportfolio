import { motion, AnimatePresence } from "motion/react";

const pulse = "animate-pulse rounded-sm";

const Skeleton = () => (
  <div className="fixed inset-0 z-[9999] bg-ink flex flex-col overflow-hidden">

    {/* ── Navbar ── */}
    <div className="flex justify-between items-center px-6 py-8">
      {/* VB Logo + wordmark */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 border border-accent/30 ${pulse}`} />
        <div className="hidden sm:flex flex-col gap-1.5">
          <div className={`w-20 h-2.5 bg-white/10 ${pulse}`} />
          <div className={`w-14 h-2 bg-accent/15 ${pulse}`} />
        </div>
      </div>
      {/* Nav links */}
      <div className="hidden md:flex items-center gap-12">
        <div className={`w-20 h-2 bg-white/10 ${pulse}`} />
        <div className={`w-12 h-2 bg-white/10 ${pulse}`} />
        <div className={`w-20 h-2 bg-white/10 ${pulse}`} />
      </div>
      {/* Mobile hamburger */}
      <div className={`md:hidden w-6 h-5 bg-white/10 ${pulse}`} />
    </div>

    {/* ── Hero ── */}
    <div className="flex-1 max-w-7xl mx-auto w-full px-6 flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left: badge + name */}
        <div className="flex flex-col">
          {/* Badge */}
          <div className={`w-52 h-2.5 bg-accent/20 mb-6 ${pulse}`} />
          {/* Big name line 1 */}
          <div className={`w-[85%] h-16 sm:h-20 md:h-24 lg:h-28 bg-white/8 mb-3 ${pulse}`} />
          {/* Big name line 2 — ghosted */}
          <div className={`w-[65%] h-16 sm:h-20 md:h-24 lg:h-28 bg-white/[0.03] ${pulse}`} />
        </div>

        {/* Right: bio text */}
        <div className="lg:ml-auto max-w-md w-full flex flex-col gap-3">
          <div className={`w-full h-2.5 bg-white/8 ${pulse}`} />
          <div className={`w-full h-2.5 bg-white/8 ${pulse}`} />
          <div className={`w-4/5 h-2.5 bg-white/8 ${pulse}`} />
          <div className={`w-3/5 h-2.5 bg-white/[0.05] ${pulse}`} />
        </div>
      </div>

      {/* Bottom social icons + marquee bar */}
      <div className="mt-16 md:mt-20 pt-10 border-t border-white/5">
        {/* Socials */}
        <div className="flex gap-6 mb-10">
          <div className={`w-5 h-5 bg-white/10 rounded-full ${pulse}`} />
          <div className={`w-5 h-5 bg-white/10 rounded-full ${pulse}`} />
        </div>
        {/* Marquee placeholder */}
        <div className="flex gap-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-8 md:h-14 bg-white/[0.04] ${pulse}`}
              style={{ width: `${[160, 120, 180, 140][i]}px` }} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const PageLoader = ({ isLoading }: { isLoading: boolean }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <Skeleton />
      </motion.div>
    )}
  </AnimatePresence>
);

