import React from 'react';
import { PhoneCall, BadgePercent, ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  onNavigateApply?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigateApply }) => {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] min-h-[500px] sm:min-h-[560px] flex items-center bg-[#0f172a] overflow-hidden text-white">
      {/* Background Image with Crisp Contrast & Natural Color Balance */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/banner-3.jpg"
          alt="Loan Application Banner"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Dark Gradient Overlay for High Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40"></div>
      </div>

      {/* Decorative Floating SVG elements */}
      <div className="absolute right-10 top-1/4 hidden xl:block w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
        <div className="max-w-2xl space-y-4 sm:space-y-6">

          {/* 1. Subtitle Badge with Fade-Up from Bottom */}
          <div className="animate-fade-in-up">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#123328]/90 text-white border border-[#c5a059]/60 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg animate-float-3d animate-border-glow"
            >
              <BadgePercent className="w-4 h-4 text-[#c5a059] animate-spin-3d" />
              <span style={{ color: '#ffffff' }}>Instant Loans Starting @ <strong className="text-[#c5a059]">8.5% p.a.</strong></span>
            </div>
          </div>

          {/* 2. Main Headline with Staggered Fade-Up from Bottom */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <h1 
              style={{ color: '#ffffff' }} 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-['Barlow'] drop-shadow-md gold-shimmer"
            >
              Instant Loans for All Your Financial Needs
            </h1>
          </div>

          {/* 3. Subtitle Description with Staggered Fade-Up from Bottom */}
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <h2 
              style={{ color: '#ffffff' }} 
              className="text-lg sm:text-xl lg:text-2xl font-medium text-white font-['Jost'] drop-shadow-xs leading-relaxed"
            >
              Quick approval, minimal documentation & flexible repayment EMI options
            </h2>
          </div>

          {/* 4. Action Buttons with Staggered Fade-Up from Bottom */}
          <div className="animate-fade-in-up pt-1 sm:pt-2" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              {/* CTA Button in Gold Accent & Emerald */}
              <button
                type="button"
                onClick={onNavigateApply}
                style={{ color: '#123328' }}
                className="inline-flex items-center justify-center gap-3 bg-[#c5a059] hover:bg-white text-[#123328] border border-[#c5a059] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-xl cursor-pointer group btn-glow animate-pulse-glow"
              >
                Apply For Loan Now <ArrowRight className="w-4 h-4 text-[#123328] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Direct Hotline Box with Gold Icon */}
              <div className="flex items-center gap-4 bg-[#123328]/80 border border-[#c5a059]/50 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg animate-border-glow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c5a059] flex items-center justify-center text-[#123328] shrink-0 shadow-md">
                  <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-[#123328] animate-bounce" />
                </div>
                <div>
                  <p style={{ color: '#ffffff' }} className="text-xs text-white font-semibold">Check Eligibility Today</p>
                  <a
                    href="tel:18004567890"
                    className="text-base sm:text-lg font-bold text-[#c5a059] hover:text-white transition-colors tracking-wide"
                  >
                    1800-456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
