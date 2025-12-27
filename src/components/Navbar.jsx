import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // The "Switch" for the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#about' },
    { name: 'Method', href: '#solution' },
    { name: 'Proof', href: '#proof' },
    { name: 'Journal', href: '#cta' },
  ];

  const styles = {
    nav: `fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled || isMenuOpen ? 'bg-[#022c22]/90 backdrop-blur-xl py-4' : 'bg-transparent py-6'
    }`,
    mobileMenu: `fixed inset-0 bg-[#022c22] z-[90] flex flex-col items-center justify-center transition-all duration-700 lg:hidden ${
      isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
    }`,
    link: "text-brand-100/70 hover:text-brand-500 text-sm font-medium transition-colors tracking-widest uppercase",
    mobileLink: "text-3xl font-bold text-white hover:text-brand-500 transition-colors tracking-tighter"
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center space-x-2 relative z-[110]">
            <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center font-bold text-[#022c22] text-xl">V</div>
            <span className="text-white font-bold text-xl tracking-tighter uppercase">Visionary</span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={styles.link}>{link.name}</a>
            ))}
            <button className="px-6 py-2 bg-brand-500 text-[#022c22] font-bold rounded-full text-xs hover:bg-white transition-all">
              Apply Now
            </button>
          </div>

          {/* HAMBURGER BUTTON (Mobile Only) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={styles.mobileMenu}>
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
              className={styles.mobileLink}
            >
              {link.name}
            </a>
          ))}
          <button className="mt-8 px-10 py-4 bg-brand-500 text-[#022c22] font-bold rounded-full text-lg">
            Start Your Scale
          </button>
        </div>
        
        {/* Background Decorative Text */}
        <div className="absolute bottom-10 text-white/5 font-black text-6xl select-none">MENU</div>
      </div>
    </>
  );
};

export default Navbar;