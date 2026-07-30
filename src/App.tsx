import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { PageLoader } from "./PageLoader";
import { ScrollProgress } from "./components/animations/ScrollProgress";
import { TransitionProvider } from "./components/transitions/TransitionProvider";
import { PageCurtain } from "./components/transitions/PageCurtain";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Lenis from "lenis";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.5,
    } as any);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Stop loader after delay
    const timer = setTimeout(() => setIsLoading(false), 1200);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <TransitionProvider>
        {/* Scroll progress bar */}
        <ScrollProgress />

        {/* Page loading skeleton */}
        <PageLoader isLoading={isLoading} />

        {/* Curtain overlay — always mounted, shows when triggered */}
        <PageCurtain />

        {/* Page routes */}
        <AnimatedRoutes />
      </TransitionProvider>
    </BrowserRouter>
  );
}
