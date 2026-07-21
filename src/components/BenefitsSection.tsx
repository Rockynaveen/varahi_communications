import React from 'react';
import { CheckCircle2, Award, Smile } from 'lucide-react';
import { ScrollAnimate } from './ScrollAnimate';

export const BenefitsSection: React.FC = () => {
  const benefitsList = [
    'Pre-approved loan offers with zero pre-closure penalty',
    'Competitive interest rates starting from 8.5% p.a.',
    'Up to 100% funding for eligible applicants',
    'Instant digital loan processing & direct bank transfer',
  ];

  return (
    <section id="benefits" className="py-10 bg-[#f5f8fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollAnimate animation="fade-bottom">
              <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-3.5 py-1.5 rounded-md border border-[#c5a059]/40 animate-border-glow">
                Our Key Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] leading-tight font-['Barlow'] mt-4">
                We are committed to providing you the best loan solutions
              </h2>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-in" delay={150}>
              <p className="text-slate-600 text-base leading-relaxed font-['Jost']">
                Varahi Communications simplifies the borrowing process with transparent eligibility criteria, fast digital verification, and flexible EMIs suited to your income profile.
              </p>
            </ScrollAnimate>

            {/* Bulleted Benefits List with Staggered Zoom-In Animations */}
            <div className="space-y-4 pt-2">
              {benefitsList.map((item, idx) => (
                <ScrollAnimate key={idx} animation="zoom-in" delay={idx * 130}>
                  <div className="flex items-center gap-3.5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs hover:border-[#c5a059] transition-all card-3d">
                    <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 pop-out" />
                    <span className="text-[#123328] font-semibold text-sm sm:text-base font-['Jost']">
                      {item}
                    </span>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>

          {/* Right Image Block with Floating Customer Stats */}
          <div className="lg:col-span-6 relative perspective-1000">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image with Zoom-In Entrance */}
              <ScrollAnimate animation="zoom-in" delay={100}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white card-3d-alt">
                  <img
                    src="https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/benefits-1.jpg"
                    alt="Varahi Communications Benefits"
                    className="w-full h-[450px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollAnimate>

              {/* Floating Stat Card 1: 50,000+ Loans Sanctioned (Fades in from Left) */}
              <div className="absolute top-8 right-[-12px] sm:right-[-20px] z-10">
                <ScrollAnimate animation="fade-left" delay={300}>
                  <div className="bg-white rounded-2xl p-5 shadow-2xl border border-[#c5a059]/40 flex items-center gap-4 animate-float-3d">
                    <div className="w-12 h-12 rounded-xl bg-[#123328] text-[#c5a059] flex items-center justify-center shrink-0 shadow-md pop-out">
                      <Smile className="w-6 h-6 animate-spin-3d" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#123328] leading-none font-['Barlow']">
                        50,000<span className="text-[#c5a059]">+</span>
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-1">Loans Sanctioned</p>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>

              {/* Floating Stat Card 2: 100% Approval Assistance (Fades in from Right) */}
              <div className="absolute bottom-6 left-[-12px] sm:left-[-20px] z-10 max-w-xs">
                <ScrollAnimate animation="fade-right" delay={450}>
                  <div className="bg-[#123328] text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-[#c5a059]/50 flex items-center gap-3.5 animate-float-3d-reverse animate-border-glow">
                    <div className="w-10 h-10 rounded-lg bg-[#c5a059] text-[#123328] flex items-center justify-center shrink-0 pop-out">
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      100% Approval Assistance
                    </h4>
                  </div>
                </ScrollAnimate>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
