import { PORTFOLIO_DATA } from "../../constants";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-ink">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] font-mono uppercase tracking-widest">
        <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</span>
        <div className="flex flex-wrap gap-4 md:gap-8">
          <span>Designed & Developed with passion</span>
        </div>
      </div>
    </footer>
  );
};
