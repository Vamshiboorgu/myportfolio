import { motion } from "motion/react";
import { useState } from "react";
import { PORTFOLIO_DATA } from "../../constants";

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
    <section id="contact" className="py-32 px-6 bg-ink relative overflow-hidden">
      {/* Background elements for modern look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-accent"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent">LET'S CONNECT</span>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-none uppercase">
            Let's create <br />
            <span className="text-white/30 italic">something great</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-20">
          {/* Left Column: Contact Cards */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => handleCopy(PORTFOLIO_DATA.email, 'email')}
              className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-sm text-white/50 mb-2 uppercase tracking-widest font-mono">Email</p>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 group-hover:text-accent transition-colors truncate">
                {PORTFOLIO_DATA.email}
              </h3>
              <div className="flex items-center text-sm font-mono text-accent">
                {copiedEmail ? "COPIED TO CLIPBOARD" : "CLICK TO COPY ↗"}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onClick={() => handleCopy(PORTFOLIO_DATA.phone, 'phone')}
              className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-sm text-white/50 mb-2 uppercase tracking-widest font-mono">Phone</p>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 group-hover:text-accent transition-colors">
                +91 {PORTFOLIO_DATA.phone}
              </h3>
              <div className="flex items-center text-sm font-mono text-accent">
                {copiedPhone ? "COPIED TO CLIPBOARD" : "CLICK TO COPY ↗"}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Socials & Location */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 flex-1 flex flex-col justify-center"
            >
              <p className="text-sm text-white/50 mb-6 uppercase tracking-widest font-mono">Socials</p>
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group py-2 transition-colors"
              >
                <span className="text-2xl md:text-3xl font-display font-semibold group-hover:text-accent transition-colors">LinkedIn</span>
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent">↗</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 flex-1 flex flex-col justify-center"
            >
              <p className="text-sm text-white/50 mb-2 uppercase tracking-widest font-mono">Location</p>
              <p className="text-xl md:text-2xl font-display font-semibold text-white mb-6">{PORTFOLIO_DATA.location}</p>

              <p className="text-sm text-white/50 mb-3 uppercase tracking-widest font-mono">Preferred Locations</p>
              <div className="flex gap-2 flex-wrap">
                {["Bangalore", "Chennai", "Mumbai"].map((loc) => (
                  <span key={loc} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-display text-white/80">
                    {loc}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
