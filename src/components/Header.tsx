import React, { useState, useEffect } from 'react';
import { X, Menu, Send } from 'lucide-react';

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigateApply?: () => void;
  onNavigateContact?: () => void;
  currentPage?: 'home' | 'apply' | 'contact';
}

export const Header: React.FC<HeaderProps> = ({ onNavigateHome, onNavigateApply, onNavigateContact, currentPage = 'home' }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    }
  };

  const handleApplyClick = () => {
    if (onNavigateApply) {
      onNavigateApply();
    }
  };

  const handleContactClick = () => {
    if (onNavigateContact) {
      onNavigateContact();
    } else if (onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      {/* Main Sticky Header Container */}
      <header
        className={`sticky top-0 w-full z-50 font-['Barlow'] transition-all duration-300 ${
          isSticky
            ? 'bg-white/95 backdrop-blur-md shadow-md py-1 border-b border-slate-200/80'
            : 'bg-white shadow-xs py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 transition-all duration-300">
            
            {/* Logo Image */}
            <div className="flex-shrink-0 flex items-center py-1">
              <button onClick={handleHomeClick} className="flex items-center text-left cursor-pointer">
                <img
                  src="/images/logo-vc.png"
                  alt="Varahi Communications Logo"
                  className={`w-auto object-contain transition-all duration-300 ${
                    isSticky ? 'h-12 sm:h-14 lg:h-15' : 'h-15 sm:h-17 lg:h-18'
                  }`}
                />
              </button>
            </div>

            {/* Desktop Direct Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5 font-['Barlow']">
              <button
                onClick={handleHomeClick}
                className={`font-bold transition-colors text-sm xl:text-base cursor-pointer whitespace-nowrap tracking-wide ${
                  currentPage === 'home' ? 'text-[#c5a059]' : 'text-[#123328] hover:text-[#c5a059]'
                }`}
              >
                Home
              </button>
              <a href={currentPage === 'home' ? '#about' : '/#about'} onClick={handleHomeClick} className="text-[#123328] font-bold hover:text-[#c5a059] transition-colors text-sm xl:text-base whitespace-nowrap tracking-wide">
                About Us
              </a>
              <a href={currentPage === 'home' ? '#services' : '/#services'} onClick={handleHomeClick} className="text-[#123328] font-bold hover:text-[#c5a059] transition-colors text-sm xl:text-base whitespace-nowrap tracking-wide">
                Services
              </a>
              <button
                onClick={handleApplyClick}
                className={`font-bold transition-colors text-sm xl:text-base cursor-pointer whitespace-nowrap tracking-wide ${
                  currentPage === 'apply' ? 'text-[#c5a059]' : 'text-[#123328] hover:text-[#c5a059]'
                }`}
              >
                Apply Online
              </button>
              <a href={currentPage === 'home' ? '#quote' : '/#quote'} onClick={handleHomeClick} className="text-[#123328] font-bold hover:text-[#c5a059] transition-colors text-sm xl:text-base whitespace-nowrap tracking-wide">
                EMI Calculator
              </a>
              <a href={currentPage === 'home' ? '#faqs' : '/#faqs'} onClick={handleHomeClick} className="text-[#123328] font-bold hover:text-[#c5a059] transition-colors text-sm xl:text-base whitespace-nowrap tracking-wide">
                FAQs
              </a>
              <button
                onClick={handleContactClick}
                className={`font-bold transition-colors text-sm xl:text-base cursor-pointer whitespace-nowrap tracking-wide ${
                  currentPage === 'contact' ? 'text-[#c5a059]' : 'text-[#123328] hover:text-[#c5a059]'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Header Right CTA Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={handleApplyClick}
                className="bg-[#123328] hover:bg-[#c5a059] text-white hover:text-[#123328] border border-[#c5a059]/40 px-4 py-2.5 rounded-xl font-bold text-xs xl:text-sm uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 whitespace-nowrap group btn-glow animate-border-glow font-['Barlow']"
              >
                Apply Loan <Send className="w-3.5 h-3.5 text-[#c5a059] group-hover:text-[#123328] transition-colors" />
              </button>
            </div>

            {/* Mobile Menu Button (Mobile View Only) */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={handleApplyClick}
                className="bg-[#123328] text-white px-3 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider cursor-pointer border border-[#c5a059]/50 font-['Barlow']"
              >
                Apply Loan
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 overflow-y-auto font-['Barlow']">
          <div className="flex items-center justify-between border-b pb-4">
            <button onClick={handleHomeClick} className="flex items-center text-left cursor-pointer">
              <img
                src="/images/logo-vc.png"
                alt="Varahi Communications Logo"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-black cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4 my-6">
            <button onClick={() => { setMobileMenuOpen(false); if (onNavigateHome) onNavigateHome(); }} className="block w-full text-left py-2 text-lg font-bold text-[#123328]">Home</button>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-bold text-gray-800">About Us</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-bold text-gray-800">Services</a>
            <button onClick={() => { setMobileMenuOpen(false); if (onNavigateApply) onNavigateApply(); }} className="block w-full text-left py-2 text-lg font-bold text-gray-800">Apply Online</button>
            <a href="#quote" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-bold text-gray-800">EMI Calculator</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-bold text-gray-800">FAQs</a>
            <button onClick={() => { setMobileMenuOpen(false); handleContactClick(); }} className="block w-full text-left py-2 text-lg font-bold text-gray-800">Contact</button>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <button
              onClick={() => { setMobileMenuOpen(false); if (onNavigateApply) onNavigateApply(); }}
              className="w-full bg-[#123328] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-sm shadow-md"
            >
              Apply Online Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};
