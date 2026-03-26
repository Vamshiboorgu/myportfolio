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
import { BentoSkills } from "./components/Sections/BentoSkills";
import { DesignEngineering } from "./components/Sections/DesignEngineering";
import { Experience } from "./components/Sections/Experience";
import { Education } from "./components/Sections/Education";
import { Awards } from "./components/Sections/Awards";
import { Contact } from "./components/Sections/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
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
        <BentoSkills />
        <DesignEngineering />
        <Experience />
        <Education />
        <Awards />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
