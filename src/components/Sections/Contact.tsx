import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../../constants";

export const Contact = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent">LET'S CONNECT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-9xl font-display font-bold tracking-tighter leading-none uppercase mb-12 md:mb-16"
        >
          HAVE A <br />
          <span className="text-white/20">PROJECT?</span>
        </motion.h2>

        <motion.a
          href={`mailto:${PORTFOLIO_DATA.email}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-4xl font-display font-bold border-b-2 border-white/10 pb-4 hover:border-accent hover:text-accent transition-all duration-500"
        >
          {PORTFOLIO_DATA.email}
        </motion.a>

        <div className="mt-20 md:mt-32 flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] font-mono uppercase tracking-widest">
          <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#0A66C2] hover:opacity-100 transition-all">LINKEDIN</a>
          <a href={PORTFOLIO_DATA.socials.dribbble} className="text-white/40 hover:text-[#EA4C89] hover:opacity-100 transition-all">DRIBBBLE</a>
          <a href={PORTFOLIO_DATA.socials.behance} className="text-white/40 hover:text-[#1769ff] hover:opacity-100 transition-all">BEHANCE</a>
        </div>
      </div>
    </section>
  );
};
