import React from 'react';
import { Phone, Mail, MapPin, ChevronUp, Globe, Share2, MessageSquare, Shield } from 'lucide-react';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateApply?: () => void;
  onNavigateContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome, onNavigateApply, onNavigateContact }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="contact" className="bg-[#123328] text-white pt-8 pb-4 relative border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Widget Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-6 border-b border-slate-800">
          
          {/* Column 1: About */}
          <div className="space-y-3">
            <div className="flex items-center">
              <button onClick={onNavigateHome} className="flex items-center text-left cursor-pointer">
                <img
                  src="/images/logo-vc.png"
                  alt="Varahi Communications Logo"
                  className="h-10 sm:h-11 w-auto object-contain bg-white p-2 rounded-xl border border-[#c5a059]/40 shadow-lg max-w-[220px]"
                />
              </button>
            </div>
            <p className="text-slate-100 text-sm leading-relaxed font-['Jost'] font-normal">
              Providing pre-approved, hassle-free loan solutions to customers. Fulfilling your personal, home, business, and vehicle financing goals with 100% commitment.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c5a059] text-white hover:text-[#123328] flex items-center justify-center transition-colors btn-glow">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c5a059] text-white hover:text-[#123328] flex items-center justify-center transition-colors btn-glow">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c5a059] text-white hover:text-[#123328] flex items-center justify-center transition-colors btn-glow">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c5a059] text-white hover:text-[#123328] flex items-center justify-center transition-colors btn-glow">
                <Shield className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-extrabold text-white font-['Barlow'] border-l-4 border-[#c5a059] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm font-medium text-slate-100 font-['Jost']">
              <li><button onClick={onNavigateHome} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left">Home</button></li>
              <li><a href="#about" onClick={onNavigateHome} className="hover:text-[#c5a059] transition-colors">About Us</a></li>
              <li><button onClick={onNavigateApply} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left">Apply Online</button></li>
              <li><button onClick={onNavigateContact} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left">Contact Us</button></li>
              <li><a href="#services" onClick={onNavigateHome} className="hover:text-[#c5a059] transition-colors">All Services</a></li>
              <li><a href="#testimonials" onClick={onNavigateHome} className="hover:text-[#c5a059] transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-extrabold text-white font-['Barlow'] border-l-4 border-[#c5a059] pl-3">
              Loan Services
            </h3>
            <ul className="space-y-2 text-sm font-medium text-slate-100 font-['Jost']">
              <li><button onClick={onNavigateApply} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left">Personal Loan</button></li>
              <li><button onClick={onNavigateApply} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left">Home Loan</button></li>
              <li><button onClick={onNavigateApply} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left">Business Loan</button></li>
              <li><button onClick={onNavigateApply} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left">Vehicle Loan</button></li>
              <li><button onClick={onNavigateApply} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left">Education Loan</button></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="space-y-3">
            <h3 className="text-lg font-extrabold text-white font-['Barlow'] border-l-4 border-[#c5a059] pl-3">
              Get in Touch
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-100 font-['Jost']">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href="tel:18004567890" className="hover:text-[#c5a059] transition-colors font-bold">(1800)-456-7890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href="mailto:info@varahi.com" className="hover:text-[#c5a059] transition-colors">info@varahi.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
                <span>121 Tailstoi Town, Financial District, LA 522364</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar (Reduced Gap) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-slate-300 gap-2 font-['Jost']">
          <p>Copyright © Varahi Communications 2026. All rights reserved.</p>
          <p>Created with React & Tailwind CSS v4</p>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#c5a059] hover:bg-[#123328] text-[#123328] hover:text-white border border-white/20 flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </footer>
  );
};
