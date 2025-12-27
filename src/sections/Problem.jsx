import React from 'react';

const Problem = () => {
  const styles = {
    section: "relative py-24 bg-[#eef7f4] overflow-hidden", // Custom minty light green
    container: "container mx-auto px-6 relative z-10",
    headerArea: "max-w-3xl mb-20",
    
    // The "Pain Card" Grid
    grid: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    card: "group relative bg-white/40 backdrop-blur-md border border-white/60 p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-brand-900 hover:-translate-y-2",
    
    // Typography
    label: "text-brand-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block",
    heading: "text-5xl font-bold text-brand-900 tracking-tighter leading-none",
    cardTitle: "text-2xl font-bold text-brand-900 mb-4 group-hover:text-brand-50 transition-colors",
    cardText: "text-brand-800/60 leading-relaxed group-hover:text-brand-100/70 transition-colors",
  };

  const painPoints = [
    {
      symptom: "Revenue Stagnation",
      rootCause: "You’ve hit the 'Founder's Ceiling'. Every new dollar requires an extra hour of your personal time. It’s not a growth problem; it’s an architecture problem."
    },
    {
      symptom: "Operational Fog",
      rootCause: "Decision fatigue is real. You're spending 80% of your day answering team questions and 20% actually leading. The business owns you."
    },
    {
      symptom: "The Invisible Leak",
      rootCause: "Your systems are manual and fragile. While you sleep, opportunities are slipping through the cracks because your 'process' lives in your head."
    }
  ];

  return (
    <section id="problem" className={styles.section}>
      {/* Aesthetic Grain/Noise Overlay for a "Premium Paper" feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.label}>The Diagnostic</span>
          <h2 className={styles.heading}>
            Growth shouldn't <br />
            <span className="text-brand-500 italic font-light">cost you your life.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {painPoints.map((point, index) => (
            <div key={index} className={styles.card}>
              {/* Animated Icon/Number */}
              <div className="w-12 h-12 rounded-full border border-brand-200 flex items-center justify-center mb-8 group-hover:border-brand-500 transition-colors">
                <span className="text-brand-600 font-mono text-sm group-hover:text-brand-500">0{index + 1}</span>
              </div>

              <h3 className={styles.cardTitle}>{point.symptom}</h3>
              <p className={styles.cardText}>{point.rootCause}</p>
              
              {/* Pro "Hidden" Element: Shows on hover */}
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-px w-full bg-brand-500/30 mb-4"></div>
                <span className="text-brand-500 text-xs font-bold uppercase tracking-widest italic">Common but fatal.</span>
              </div>
            </div>
          ))}
        </div>

        {/* The "Pro" Interactive Footer of the section */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-brand-200 pt-12">
          <p className="text-brand-900/40 text-sm font-medium mb-6 md:mb-0">
            Recognize these patterns? You aren't alone. <br /> Most 7-figure founders are one system away from freedom.
          </p>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-[#eef7f4] bg-brand-200 overflow-hidden">
                 <img src={`https://i.pravatar.cc/150?u=pain${i}`} alt="Founder" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-[#eef7f4] bg-brand-900 flex items-center justify-center text-[10px] text-white font-bold">
              +100
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;