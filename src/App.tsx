import { useState, useEffect } from "react";
import { PageLoader } from "./PageLoader";
import { Particles } from "./Particles";

// Navigation
import { Navbar } from "./components/Navigation/Navbar";
import { Footer } from "./components/Navigation/Footer";

// Common
import { CustomCursor } from "./components/Common/CustomCursor";

// Sections
import { Hero } from "./components/Sections/Hero";
import { Work } from "./components/Sections/Work";
import { PersonalProjects } from "./components/Sections/PersonalProjects";
import { GraphicDesign } from "./components/Sections/GraphicDesign";
import { CareerAndSkills } from "./components/Sections/CareerAndSkills";
import { DesignEngineering } from "./components/Sections/DesignEngineering";
import { Education } from "./components/Sections/Education";
import { Awards } from "./components/Sections/Awards";
import { Contact } from "./components/Sections/Contact";

import Lenis from 'lenis';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
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
    <div className="font-sans selection:bg-accent/30 selection:text-accent bg-ink text-white scroll-smooth relative">
      <Particles />
      <PageLoader isLoading={isLoading} />
      <CustomCursor />

      {/* Global Noise Overlay */}
      <div className="fixed inset-0 noise pointer-events-none z-[999]" />

      <Navbar />

      <main>
        <Hero />
        <Work />
        <CareerAndSkills />
        {/* <PersonalProjects /> */}
        <GraphicDesign />
        <DesignEngineering />
        <Education />
        <Awards />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
