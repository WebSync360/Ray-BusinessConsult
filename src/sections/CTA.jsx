import React from 'react';

const CTA = () => {
  const styles = {
    section: "relative py-32 bg-[#011a14] overflow-hidden", // Deepest brand green
    container: "container mx-auto px-6 relative z-10",
    
    // The "Main Card" - A giant glass container
    mainCard: "relative bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-20 overflow-hidden",
    
    // Typography
    label: "text-brand-500 font-bold uppercase tracking-[0.4em] text-xs mb-6 block",
    heading: "text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-8",
    body: "text-brand-100/60 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed",
    
    // Form/Button area
    inputGroup: "flex flex-col md:flex-row gap-4 max-w-2xl",
    button: "px-10 py-5 bg-brand-500 text-[#011a14] font-bold rounded-2xl hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 group",
  };

  return (
    <section id="cta" className={styles.section}>
      {/* BACKGROUND MAGIC: The "Lens Flare" effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className={styles.container}>
        <div className={styles.mainCard}>
          
          {/* DECORATIVE: Floating background number */}
          <span className="absolute top-10 right-10 text-[10rem] font-black text-white/[0.02] leading-none pointer-events-none uppercase">
            Exit
          </span>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: THE PITCH */}
            <div className="relative z-10">
              <span className={styles.label}>Final Step</span>
              <h2 className={styles.heading}>
                Stop building a job. <br />
                <span className="text-brand-400 italic font-light text-4xl md:text-6xl italic">Start leading a legacy.</span>
              </h2>
              <p className={styles.body}>
                I only take on 2 new mentorship clients per month to ensure 
                bespoke attention. Applications for the next cohort close in 48 hours.
              </p>

              <div className={styles.inputGroup}>
                <button className={styles.button}>
                  <span>Secure Your Application</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </div>
              
              <p className="mt-6 text-[10px] uppercase tracking-widest text-brand-100/30">
                Directly vetted by Sarah. Response within 24 hours.
              </p>
            </div>

            {/* RIGHT: THE "LIVE" TRACKER (Something Pros forget) */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Cohort Status</span>
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-widest">Almost Full</span>
                </div>

                {/* Custom Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-brand-100/50 uppercase tracking-tighter">
                    <span>Availability</span>
                    <span>1 Spot Left</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-gradient-to-r from-brand-600 to-brand-400 animate-pulse"></div>
                  </div>
                </div>

                {/* Trust Badges inside CTA */}
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <p className="text-xl font-bold text-white">12/14</p>
                    <p className="text-[10px] text-brand-100/30 uppercase">Founders In</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <p className="text-xl font-bold text-white">4.9/5</p>
                    <p className="text-[10px] text-brand-100/30 uppercase">Impact Score</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative "Signature" overlay */}
              <div className="absolute -bottom-10 -right-5 opacity-20 pointer-events-none">
                 <span className="text-6xl font-serif italic text-brand-500 font-light">Sarah M.</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;