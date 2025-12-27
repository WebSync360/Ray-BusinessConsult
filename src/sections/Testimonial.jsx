import React from 'react';

const testimonials = [
  {
    name: 'Alexandra P.',
    title: 'Fintech Founder',
    quote: "Working with Visionary took me from burnout to 2X revenue in 9 months. It's not just coaching; it's a complete system overhaul. My best investment, period.",
    image: 'https://i.pravatar.cc/150?u=alexandra'
  },
  {
    name: 'Marcus K.',
    title: 'E-commerce CEO',
    quote: "I thought I understood scaling. Sarah showed me where my 7-figure operations were leaking. We reclaimed 15 hours a week and launched a new product line with zero friction.",
    image: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    name: 'Sophia L.',
    title: 'SaaS Innovator',
    quote: "Decoupling my time from our growth seemed impossible. Visionary installed the frameworks that let my team run the show, freeing me to strategize. Game changer.",
    image: 'https://i.pravatar.cc/150?u=sophia'
  },
  {
    name: 'David R.',
    title: 'Healthcare Tech',
    quote: "The strategic audit was a revelation. We identified bottlenecks I didn't even know existed. Now our expansion is systematic, not chaotic.",
    image: 'https://i.pravatar.cc/150?u=david'
  },
  {
    name: 'Emily B.',
    title: 'Marketing Agency',
    quote: "I was stuck at 7 figures. Visionary helped me build out a fractional leadership team and scale past 8 figures without losing my sanity. Truly invaluable.",
    image: 'https://i.pravatar.cc/150?u=emily'
  },
  {
    name: 'Jason S.',
    title: 'Real Estate Developer',
    quote: "The systems implemented by Visionary have freed up my personal time significantly. I now have the bandwidth to pursue new ventures while my core business thrives.",
    image: 'https://i.pravatar.cc/150?u=jason'
  },
];

const Proof = () => {
  const styles = {
    section: "relative py-28 bg-[#fdfaf8] overflow-hidden", // Slightly warmer off-white
    container: "container mx-auto px-6 relative z-10",
    header: "max-w-4xl mx-auto text-center mb-20",
    label: "text-brand-600 font-bold uppercase tracking-[0.4em] text-xs mb-4 block",
    heading: "text-5xl md:text-6xl font-bold text-brand-900 tracking-tighter leading-none",
    
    // Testimonial Card Styles
    card: "bg-white p-8 rounded-3xl shadow-soft border border-brand-100 flex flex-col h-full transition-all duration-300 hover:shadow-card hover:-translate-y-1",
    quoteText: "text-brand-900/80 text-lg font-light leading-relaxed mb-6 italic",
    clientName: "font-bold text-brand-900 text-base",
    clientTitle: "text-brand-600 text-sm",
  };

  return (
    <section id="proof" className={styles.section}>
      {/* Background Grid Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]"></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>The Evidence</span>
          <h2 className={styles.heading}>
            Results Engineered. <br />
            <span className="text-brand-500 italic font-light">Not Just Promised.</span>
          </h2>
        </div>

        {/* MASONRY GRID - This is where the magic happens */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testi, index) => (
            <div key={index} className="break-inside-avoid-column">
              <div className={styles.card}>
                <p className={styles.quoteText}>"{testi.quote}"</p>
                <div className="flex items-center mt-auto">
                  <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-brand-100" />
                  <div>
                    <p className={styles.clientName}>{testi.name}</p>
                    <p className={styles.clientTitle}>{testi.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for more proof */}
        <div className="mt-20 text-center">
            <button className="inline-flex items-center space-x-3 px-8 py-4 bg-brand-500 text-[#022c22] font-bold rounded-full shadow-lg hover:bg-brand-600 transition-all transform hover:scale-105">
               <span>Explore All Case Studies</span>
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
        </div>

      </div>
    </section>
  );
};

export default Proof;