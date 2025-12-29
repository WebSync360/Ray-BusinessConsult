const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#022c22] py-20 rounded-b-3xl">
      {/* 1. THE ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orb */}
        <div className="absolute -top-[10%] -right-[10%] w-[700px] h-[700px] rounded-full bg-brand-700/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#022c22] to-transparent"></div>
        
        {/* Subtle SVG Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT: The "Authority" Message (Column 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/10 p-1 pr-4 rounded-full">
              <span className="bg-brand-500 text-[#022c22] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Elite
              </span>
              <span className="text-brand-100 text-sm font-medium tracking-wide">
                Bespoke Mentorship for 7-Figure Founders
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
              Master the <br />
              <span className="italic font-light text-brand-300">Art of Scale.</span>
            </h1>

            <p className="text-xl text-brand-100/70 max-w-xl leading-relaxed font-light">
              We don't just "grow" businesses. We engineer systems that allow you to lead with 
              <span className="text-white font-normal"> absolute clarity </span> 
              while your revenue compounds in the background.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <button className="relative group overflow-hidden px-10 py-5 bg-brand-500 rounded-full transition-all duration-500">
                <span className="relative z-10 text-[#022c22] font-bold text-lg">Apply for Mentorship</span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              
              <button className="flex items-center space-x-4 text-white group">
                <span className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-500">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
                <span className="font-semibold tracking-wide">Watch the Method</span>
              </button>
            </div>

            {/* Premium Partners */}
            <div className="pt-12 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-400 mb-6 font-semibold">Trusting the Process</p>
              <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {/* Replace with actual partner logos */}
                <span className="text-2xl font-bold text-white italic">FORBES</span>
                <span className="text-2xl font-bold text-white italic">INC.</span>
                <span className="text-2xl font-bold text-white italic">TECHCRUNCH</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: The "Visual Power" (Column 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* The Main Portrait with a custom Mask */}
              <div className="relative z-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Elite Business Coach" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Aesthetic Stats (The "Aha" elements) */}
              <div className="absolute -top-10 -left-10 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl animate-float">
                <p className="text-4xl font-light text-white">$250M+</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">Client Capital Raised</p>
              </div>

              <div className="absolute -bottom-8 -right-8 z-30 bg-brand-500 p-8 rounded-2xl shadow-2xl">
                <div className="flex flex-col space-y-1">
                  <span className="text-3xl font-bold text-[#022c22]">01/05</span>
                  <span className="text-[10px] uppercase tracking-tighter text-[#022c22]/70 font-bold">Limited Slots Remaining.....</span>
                </div>
              </div>

              {/* Decorative Geometric Shape */}
              <div className="absolute top-1/2 -right-4 w-24 h-24 border-2 border-brand-500/30 rounded-full animate-spin-slow z-10"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;