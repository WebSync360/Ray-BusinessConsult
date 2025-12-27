import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#022c22]/80 backdrop-blur-lg py-4 shadow-xl' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center font-bold text-[#022c22] text-xl">
            R
          </div>
          <span className="text-white font-bold text-xl tracking-tighter uppercase">MONTGOMERY</span>
        </div>

        {/* NAV LINKS - Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {['Expertise', 'Method', 'Proof', 'Journal'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-brand-100/70 hover:text-brand-500 text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex items-center space-x-6">
          <button className="hidden lg:block text-white font-medium hover:text-brand-500 transition-colors">
            Login
          </button>
          <button className="px-6 py-2.5 bg-brand-500 text-[#022c22] font-bold rounded-full text-sm hover:bg-white transition-all transform hover:scale-105 active:scale-95">
            Start Your Scale
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;