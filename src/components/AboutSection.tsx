import React from 'react';
import { ShieldCheck, Percent, Headset, Landmark } from 'lucide-react';
import { ScrollAnimate } from './ScrollAnimate';

interface AboutSectionProps {
  onNavigateContact?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateContact }) => {
  return (
    <section id="about" className="py-10 bg-[#f5f8fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Block (Fades in from Left) */}
          <div className="lg:col-span-6 relative">
            <ScrollAnimate animation="fade-left">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white card-3d-alt">
                  <img
                    src="https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/about-4.jpg"
                    alt="Varahi Communications Loan Solutions"
                    className="w-full h-[480px] lg:h-[540px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Badge 1: Instant Loan Approval */}
                <div className="absolute top-8 left-[-16px] sm:left-[-24px] bg-white rounded-2xl p-4 shadow-xl border border-[#c5a059]/30 flex items-center gap-3.5 animate-float-3d z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#123328] text-[#c5a059] flex items-center justify-center pop-out">
                    <Landmark className="w-6 h-6 animate-spin-3d" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#123328] text-base leading-snug">Loan Solutions</h5>
                    <p className="text-xs text-slate-500 font-medium">Quick Disbursal Guarantee</p>
                  </div>
                </div>

                {/* Floating Badge 2: Years of Experience */}
                <div className="absolute bottom-6 right-4 sm:right-[-16px] bg-[#123328] text-white rounded-2xl p-5 shadow-2xl flex items-center gap-4 z-10 border border-[#c5a059]/50 animate-float-3d-reverse animate-border-glow">
                  <div className="text-3xl font-extrabold text-[#c5a059] font-['Barlow']">25+</div>
                  <div className="border-l border-white/20 pl-4">
                    <h4 className="text-sm font-bold capitalize text-white">Years of Trust</h4>
                    <p className="text-xs text-slate-200">In Banking & Loan Advisory</p>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Right Column: Content (Fades in from Right) */}
          <div className="lg:col-span-6">
            <ScrollAnimate animation="fade-right" delay={150}>
              <div className="space-y-6">
                {/* Sub-heading Badge */}
                <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-3.5 py-1.5 rounded-md border border-[#c5a059]/40">
                  About Varahi Communications
                </span>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] leading-[1.2] font-['Barlow']">
                  We’re a Trusted & Certified Financial Loan Advisory
                </h2>

                {/* Description Paragraphs */}
                <div className="space-y-4 text-slate-600 text-base leading-relaxed font-['Jost']">
                  <p>
                    At Varahi Communications, we empower individuals and businesses with fast, flexible, and affordable loan solutions. Whether you need a Personal Loan, Home Loan, Business Loan, or Vehicle Loan, our advisory team helps you secure the best interest rates from top banks and financial institutions.
                  </p>
                  <p>
                    We streamline the entire loan journey — from instant eligibility checks and paperless digital applications to fast approval and hassle-free bank account credit.
                  </p>
                </div>

                {/* Grid of Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs hover:border-[#c5a059] transition-colors card-3d">
                    <div className="w-12 h-12 rounded-lg bg-[#123328] text-[#c5a059] flex items-center justify-center shrink-0 pop-out">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#123328] text-sm leading-tight">100% Transparent Rates</h4>
                      <p className="text-xs text-slate-500 mt-1">Zero Hidden Fees</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs hover:border-[#c5a059] transition-colors card-3d">
                    <div className="w-12 h-12 rounded-lg bg-[#123328] text-[#c5a059] flex items-center justify-center shrink-0 pop-out">
                      <Percent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#123328] text-sm leading-tight">Lowest Interest Rates</h4>
                      <p className="text-xs text-slate-500 mt-1">Starting from 8.5% p.a.</p>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-200" />

                {/* Support Contact Box */}
                <div className="flex items-center justify-between bg-[#123328] text-white p-5 rounded-2xl shadow-lg border border-[#c5a059]/40 animate-border-glow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#c5a059] text-[#123328] flex items-center justify-center shrink-0 shadow-md">
                      <Headset className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-200 font-medium uppercase tracking-wider block">Need Loan Assistance?</span>
                      <a
                        href="tel:+1800123456789"
                        className="text-lg font-bold text-[#c5a059] hover:text-white transition-colors tracking-wide font-['Barlow']"
                      >
                        +1800(123)456789
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onNavigateContact}
                    className="hidden sm:inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[#123328] bg-[#c5a059] hover:bg-white px-4 py-2.5 rounded-lg transition-all btn-glow cursor-pointer"
                  >
                    Contact Us
                  </button>
                </div>

              </div>
            </ScrollAnimate>
          </div>

        </div>
      </div>
    </section>
  );
};
