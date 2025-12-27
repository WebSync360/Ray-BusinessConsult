import React from 'react';

const Footer = () => {
  const styles = {
    footer: "relative bg-[#011a14] pt-32 pb-12 overflow-hidden",
    container: "container mx-auto px-6 relative z-10",
    bigText: "text-[12vw] font-black text-white/[0.03] absolute bottom-[-10%] left-0 leading-none pointer-events-none select-none",
    ctaHeading: "text-4xl md:text-6xl font-bold text-white tracking-tighter mb-12 max-w-2xl",
    columnTitle: "text-brand-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-8",
    link: "text-brand-100/40 hover:text-brand-400 transition-all duration-300 cursor-pointer block text-lg font-light",
    bottomBar: "pt-12 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.3em] uppercase text-brand-100/20"
  };

  return (
    <footer className={styles.footer}>
      {/* 1. THE GIANT BACKGROUND MARK */}
      <span className={styles.bigText}>MONTGOMERY</span>

      <div className={styles.container}>
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT: THE BIG PITCH */}
          <div className="lg:col-span-7">
            <h2 className={styles.ctaHeading}>
              Ready to engineer your <br />
              <span className="text-brand-500 italic">next evolution?</span>
            </h2>
            <div className="flex items-center space-x-8">
               <button className="group flex items-center space-x-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-brand-500 transition-all duration-500">
                  <span className="text-white group-hover:text-[#011a14] font-bold">Start the Application</span>
               </button>
               <p className="text-brand-100/30 text-xs max-w-[150px] leading-relaxed">
                 Limited to 5 high-impact founders per quarter.
               </p>
            </div>
          </div>

          {/* RIGHT: THE NAVIGATION GRID */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12">
            <div>
              <h4 className={styles.columnTitle}>Sitemap</h4>
              <nav className="space-y-4">
                <span className={styles.link}>Expertise</span>
                <span className={styles.link}>Methodology</span>
                <span className={styles.link}>Case Studies</span>
                <span className={styles.link}>Vault</span>
              </nav>
            </div>
            <div>
              <h4 className={styles.columnTitle}>Connect</h4>
              <nav className="space-y-4">
                <span className={styles.link}>LinkedIn</span>
                <span className={styles.link}>Instagram</span>
                <span className={styles.link}>Twitter</span>
                <span className={styles.link}>Substack</span>
              </nav>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA */}
        <div className={styles.bottomBar}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p>© 2025 Visionary Group</p>
            <div className="flex space-x-6">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 group cursor-pointer">
             <div className="w-2 h-2 rounded-full bg-brand-500"></div>
             <span className="group-hover:text-white transition-colors">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;