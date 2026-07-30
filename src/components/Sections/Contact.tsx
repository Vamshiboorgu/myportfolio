import { motion } from "motion/react";
import { useState } from "react";
import { PORTFOLIO_DATA } from "../../constants";
import { SplitTextReveal } from "../animations/SplitTextReveal";

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-[45px] px-6 bg-ink relative overflow-hidden">
      {/* Background elements for modern look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-12 h-[1px] bg-accent"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent">LET'S CONNECT</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none uppercase">
            <SplitTextReveal text="Let's create" /> <br />
            <span className="text-white/30 italic">
              <SplitTextReveal text="something great" delay={0.15} />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => handleCopy(PORTFOLIO_DATA.email, 'email')}
            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-full min-h-[160px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div>
              <p className="text-xs text-white/50 mb-2 uppercase tracking-widest font-mono">Email</p>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-3 group-hover:text-accent transition-colors truncate">
                {PORTFOLIO_DATA.email}
              </h3>
            </div>
            <div className="flex items-center text-[10px] md:text-xs font-mono text-accent">
              {copiedEmail ? "COPIED TO CLIPBOARD" : "CLICK TO COPY ↗"}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => handleCopy(PORTFOLIO_DATA.phone, 'phone')}
            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-full min-h-[160px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div>
              <p className="text-xs text-white/50 mb-2 uppercase tracking-widest font-mono">Phone</p>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-3 group-hover:text-accent transition-colors">
                +91 {PORTFOLIO_DATA.phone}
              </h3>
            </div>
            <div className="flex items-center text-[10px] md:text-xs font-mono text-accent">
              {copiedPhone ? "COPIED TO CLIPBOARD" : "CLICK TO COPY ↗"}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between h-full min-h-[160px]"
          >
            <div>
              <p className="text-xs text-white/50 mb-4 uppercase tracking-widest font-mono">Socials</p>
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group py-1 transition-colors"
              >
                <span className="text-lg md:text-xl font-display font-semibold group-hover:text-accent transition-colors">LinkedIn</span>
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent">↗</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between h-full min-h-[160px]"
          >
            <div>
              <p className="text-xs text-white/50 mb-2 uppercase tracking-widest font-mono">Location</p>
              <p className="text-base font-display font-semibold text-white mb-4">{PORTFOLIO_DATA.location}</p>
            </div>

            <div>
              <p className="text-[10px] text-white/50 mb-2 uppercase tracking-widest font-mono">Preferred</p>
              <div className="flex gap-1.5 flex-wrap">
                {["Bangalore", "Chennai", "Mumbai"].map((loc) => (
                  <span key={loc} className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-display text-white/80">
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
