import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT ME", href: "#about" },
    { name: "WORK", href: "#work" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
      {/* Floating Island Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`pointer-events-auto transition-all duration-500 rounded-full border flex justify-between items-center relative overflow-hidden ${
          isScrolled 
            ? "w-[90%] md:w-full max-w-4xl bg-accent/10 border-accent/20 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,229,153,0.15)] py-3 px-6" 
            : "w-full max-w-7xl bg-accent/[0.04] border-accent/10 backdrop-blur-xl py-4 md:py-6 px-4 md:px-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />
        
        <motion.a
          href="#"
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

        {/* Desktop Nav (Pill buttons) */}
        <div className="hidden md:flex items-center gap-2 relative z-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors group"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 rounded-full pointer-events-none" />
              <span className="relative z-10">{link.name}</span>
            </motion.a>
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
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
