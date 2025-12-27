import React from 'react';

const Solution = () => {
  const styles = {
    section: "relative py-32 bg-[#FAF9F6] overflow-hidden", // Elegant off-white/cream
    container: "container mx-auto px-6 relative z-10",
    
    // Grid Layout
    grid: "grid lg:grid-cols-12 gap-6 auto-rows-[240px]",
    
    // Bento Box Styles
    card: "relative overflow-hidden rounded-[2rem] p-10 border border-brand-900/5 transition-all duration-700 hover:shadow-2xl hover:border-brand-500/20 group",
    
    // Typography
    label: "text-brand-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block",
    heading: "text-5xl md:text-6xl font-bold text-brand-900 tracking-tighter mb-20",
    cardTitle: "text-2xl font-bold text-brand-900 mb-2",
    cardDesc: "text-brand-800/60 text-sm leading-relaxed max-w-[250px]"
  };

  return (
    <section id="solution" className={styles.section}>
      {/* Decorative Gradient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#10b98108_0%,_transparent_70%)] z-0" />

      <div className={styles.container}>
        <div className="max-w-4xl">
          <span className={styles.label}> The Framework </span>
          <h2 className={styles.heading}>
            From Founder-Led <br />
            <span className="text-brand-500 italic font-light">to System-Driven.</span>
          </h2>
        </div>

        {/* BENTO GRID START */}
        <div className={styles.grid}>
          
          {/* 1. BIG FEATURE (6-column) */}
          <div className={`${styles.card} lg:col-span-7 lg:row-span-2 bg-white flex flex-col justify-between`}>
             <div className="z-10">
                <h3 className="text-3xl font-bold text-brand-900 mb-4">The Architecture Program</h3>
                <p className="text-brand-800/60 max-w-sm">A 6-month intensive rebuild of your business operations. We install the systems so you can step into the visionary role full-time.</p>
             </div>
             <div className="relative mt-8 h-48 bg-brand-50 rounded-2xl border border-brand-100 overflow-hidden group-hover:bg-brand-100/50 transition-colors">
                {/* Abstract "System" graphic using Tailwind lines */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4">
                   {[40, 60, 80, 50].map((h, i) => (
                      <div key={i} className={`w-8 bg-brand-500/20 rounded-t-lg group-hover:bg-brand-500/40 transition-all duration-700`} style={{ height: `${h}%` }}></div>
                   ))}
                </div>
             </div>
          </div>

          {/* 2. MID FEATURE (5-column) */}
          <div className={`${styles.card} lg:col-span-5 lg:row-span-1 bg-brand-900 text-white`}>
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-50 mb-2">Private Advisory</h3>
                <p className="text-brand-100/50 text-sm">Direct 1:1 access for strategic decision-making and rapid scaling.</p>
             </div>
             {/* Glowing indicator */}
             <div className="absolute top-6 right-6 w-3 h-3 bg-brand-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
          </div>

          {/* 3. SMALL FEATURE (5-column) */}
          <div className={`${styles.card} lg:col-span-5 lg:row-span-1 bg-white`}>
             <h3 className={styles.cardTitle}>Fractional COO</h3>
             <p className={styles.cardDesc}>We don't just advise; we embed into your team to manage the transition.</p>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
             </div>
          </div>

          {/* 4. WIDE FEATURE (12-column) */}
          <div className={`${styles.card} lg:col-span-12 lg:row-span-1 bg-gradient-to-r from-brand-500 to-brand-600 flex items-center justify-between`}>
             <div className="text-[#022c22]">
                <h3 className="text-2xl font-bold">The Strategic Audit</h3>
                <p className="font-medium opacity-80">Not ready for a full rebuild? Get the roadmap first.</p>
             </div>
             <button className="bg-[#022c22] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#022c22] transition-all">
                Download Free Roadmap
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;