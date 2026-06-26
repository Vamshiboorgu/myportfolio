import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      // 100px offset to account for the floating navbar
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "WORK", href: "#work" },
    { name: "EXPERTISE", href: "#expertise" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
      {/* Floating Island Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full border flex justify-between items-center relative overflow-hidden ${
          isScrolled 
            ? "w-[85%] md:w-max max-w-3xl bg-ink/70 border-white/10 backdrop-blur-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] py-2 px-4 md:gap-12" 
            : "w-full max-w-7xl bg-white/[0.02] border-white/5 backdrop-blur-xl py-4 px-6 md:px-10 md:gap-24"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />
        
        <motion.a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group relative z-10"
          aria-label="Vamshi Boorgu - Home"
        >
          {/* Split-block VB monogram */}
          <div className="flex items-stretch h-9 overflow-hidden group-hover:shadow-[0_0_20px_rgba(0,229,153,0.3)] transition-shadow duration-500">
            <div className="bg-accent flex items-center justify-center px-2.5">
              <span className="text-black font-display font-black text-sm leading-none tracking-tight">V</span>
            </div>
            <div className="border border-white/20 border-l-0 flex items-center justify-center px-2.5 bg-white/5">
              <span className="text-white font-display font-black text-sm leading-none tracking-tight">B</span>
            </div>
          </div>
          {/* Wordmark */}
          <div className="hidden sm:flex flex-col leading-none gap-0.5">
            <span className="text-[11px] font-display font-bold tracking-[0.28em] text-white uppercase">Vamshi</span>
            <span className="text-[9px] font-mono tracking-[0.35em] text-accent/60 uppercase">Boorgu</span>
          </div>
        </motion.a>

        {/* Desktop Nav (Magnetic Pill) */}
        <div 
          className="hidden md:flex items-center relative z-10 p-1 bg-white/5 border border-white/10 rounded-full shadow-inner"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              onMouseEnter={() => setHoveredIndex(i)}
              className="relative px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors group z-20"
            >
              {hoveredIndex === i && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 relative z-10 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-black/98 backdrop-blur-3xl border border-white/10 p-8 rounded-3xl pointer-events-auto md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-base font-bold uppercase tracking-[0.3em] text-white/70 hover:text-accent transition-colors w-full text-center py-4 border-b border-white/5 last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
