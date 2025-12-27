import React from 'react';

const About = () => {
  const styles = {
    section: "relative py-24 bg-brand-50 overflow-hidden",
    container: "container mx-auto px-6 relative z-10",
    // Layout Wrappers
    wrapper: "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
    imageSide: "relative w-full lg:w-1/2",
    contentSide: "w-full lg:w-1/2 space-y-8",
    
    // Typography
    label: "text-brand-600 font-bold uppercase tracking-[0.3em] text-xs",
    heading: "text-4xl md:text-5xl font-bold text-brand-900 leading-tight tracking-tighter",
    body: "text-lg text-brand-800/70 leading-relaxed font-light",
    
    // UI Elements
    statBox: "bg-white p-6 rounded-2xl shadow-soft border border-brand-100 flex flex-col items-center justify-center text-center",
  };

  return (
    <section id="about" className={styles.section}>
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 skew-x-12 translate-x-1/2 z-0" />

      <div className={styles.container}>
        <div className={styles.wrapper}>
          
          {/* LEFT: THE VISUAL COMPOSITION */}
          <div className={styles.imageSide}>
            {/* Main Portrait with Offset Frame */}
            <div className="relative z-10 rounded-2xl overflow-hidden border-[12px] border-white shadow-card">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" 
                alt="The Coach" 
                className="w-full aspect-[4/5] object-cover grayscale-0 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Experience Timeline - The "Pro" Touch */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 space-y-4 hidden md:block">
              {[
                { year: '2015', label: 'Wall St. Analyst' },
                { year: '2019', label: 'SaaS Founder' },
                { year: '2024', label: 'Scale Mentor' }
              ].map((milestone, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-soft border border-brand-100 flex items-center gap-4 w-48 transform hover:scale-105 transition-transform cursor-default">
                  <span className="text-brand-500 font-bold text-sm">{milestone.year}</span>
                  <span className="h-px w-4 bg-brand-200" />
                  <span className="text-[10px] uppercase font-bold text-brand-900 tracking-tighter">{milestone.label}</span>
                </div>
              ))}
            </div>

            {/* Decorative Dots */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#10b981_2px,transparent_1px)] [background-size:12px_12px] opacity-30" />
          </div>

          {/* RIGHT: THE STORYTELLING */}
          <div className={styles.contentSide}>
            <div className="space-y-4">
              <p className={styles.label}>The Architect</p>
              <h2 className={styles.heading}>
                I don't teach business. <br />
                <span className="text-brand-500 font-light italic">I design leverage.</span>
              </h2>
            </div>

            <p className={styles.body}>
              After a decade of building and exiting two 7-figure startups, I realized that most founders aren't failing because of a lack of effort, they're failing because of 
              <span className="text-brand-900 font-medium italic"> structural friction.</span>
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className={styles.statBox}>
                <span className="text-3xl font-bold text-brand-900">120+</span>
                <span className="text-[10px] uppercase text-brand-500 font-bold tracking-widest mt-1">Founders Mentored</span>
              </div>
              <div className={styles.statBox}>
                <span className="text-3xl font-bold text-brand-900">$40M</span>
                <span className="text-[10px] uppercase text-brand-500 font-bold tracking-widest mt-1">Revenue Scaled</span>
              </div>
            </div>

            <div className="pt-8">
               <p className="text-brand-900 font-serif text-2xl italic opacity-80">
                 "My mission is to decouple your income from your hours."
               </p>
               <div className="mt-4 flex items-center space-x-4">
                  <div className="h-[1px] w-2 bg-brand-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-brand-900">Sarah Montgomery</span>
                  <div className="h-[1px] w-2 bg-brand-500" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;