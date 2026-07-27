import { Navbar } from "../components/Navigation/Navbar";
import { Footer } from "../components/Navigation/Footer";
import { Particles } from "../Particles";
import { Hero } from "../components/Sections/Hero";
import { Work } from "../components/Sections/Work";
import { CareerAndSkills } from "../components/Sections/CareerAndSkills";
import { GraphicDesign } from "../components/Sections/GraphicDesign";
import { DesignEngineering } from "../components/Sections/DesignEngineering";
import { Education } from "../components/Sections/Education";
import { Awards } from "../components/Sections/Awards";
import { Contact } from "../components/Sections/Contact";

export default function Home() {
  return (
    <div className="font-sans selection:bg-accent selection:text-black bg-ink text-white scroll-smooth relative">
      <Particles />
      <Navbar />

      <main id="main">
        <Hero />
        <Work />
        <CareerAndSkills />
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
