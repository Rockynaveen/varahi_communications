import React from 'react';
import { Zap, Percent, ShieldCheck, CalendarClock, UserCheck } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#c5a059] group-hover:text-white transition-colors" />,
      title: 'Instant Loan Disbursal',
      desc: 'Get loan approval and funds credited directly to your account within 24-48 hours.',
    },
    {
      icon: <Percent className="w-6 h-6 text-[#c5a059] group-hover:text-white transition-colors" />,
      title: 'Lowest Interest Rates',
      desc: 'Benefit from competitive interest rates starting from 8.5% p.a. with top partner banks.',
    },
    {
      icon: <CalendarClock className="w-6 h-6 text-[#c5a059] group-hover:text-white transition-colors" />,
      title: 'Flexible EMI Tenure',
      desc: 'Customizable repayment schedules ranging from 12 to 84 months matching your budget.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#c5a059] group-hover:text-white transition-colors" />,
      title: 'Minimal Documentation',
      desc: 'Hassle-free digital verification process requiring minimal paperwork.',
    },
  ];

  return (
    <section id="features" className="py-10 bg-[#f5f8fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & 4 Feature Cards */}
          <div className="lg:col-span-7">
            <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-3.5 py-1.5 rounded-md mb-4 border border-[#c5a059]/40">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] leading-tight font-['Barlow'] mb-6">
              Competitive Rates & Transparent Loan Terms
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-['Jost'] mb-10 max-w-2xl">
              Varahi Communications is dedicated to making loans accessible, transparent, and hassle-free. We partner with India's leading banks and financial institutions to secure your loan at zero hidden fees.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 perspective-1000">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 p-6 rounded-2xl hover:border-[#c5a059] group card-3d"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#123328] text-[#c5a059] flex items-center justify-center mb-4 group-hover:bg-[#c5a059] group-hover:text-[#123328] transition-all duration-300 pop-out">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#123328] mb-2 font-['Barlow'] group-hover:text-[#c5a059] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-['Jost']">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Advisor Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative max-w-md w-full">
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white card-3d-alt">
                <img
                  src="https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/women-1.png"
                  alt="Loan Advisor"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white text-[#123328] p-4 rounded-2xl flex items-center gap-4 animate-float-3d border border-[#c5a059]/40">
                <div className="w-12 h-12 rounded-xl bg-[#123328] text-[#c5a059] flex items-center justify-center shrink-0 shadow-md pop-out">
                  <UserCheck className="w-6 h-6 animate-spin-3d" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base leading-tight">Personalized Loan Advisory</h4>
                  <p className="text-xs text-slate-500 font-medium">Free 1-on-1 Consultation</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
