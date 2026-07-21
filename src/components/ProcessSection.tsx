import React from 'react';
import { Laptop, FileCheck, CheckCircle2, Landmark, ArrowRight, Zap } from 'lucide-react';
import { ScrollAnimate } from './ScrollAnimate';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      id: '01',
      icon: <Laptop className="w-6 h-6" />,
      title: 'Apply Online',
      subtitle: 'Instant Digital Form',
      desc: 'Fill out our simple online loan application form with basic personal and financial details in under 2 minutes.',
    },
    {
      id: '02',
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Verify Documents',
      subtitle: 'Paperless KYC Upload',
      desc: 'Upload your identity proof, salary slips, and bank statements digitally for 100% paperless verification.',
    },
    {
      id: '03',
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Verification & Loan Approval',
      subtitle: 'Fast Credit Evaluation',
      desc: 'Our credit committee conducts rapid automated verification and issues your official loan sanction letter.',
    },
    {
      id: '04',
      icon: <Landmark className="w-6 h-6" />,
      title: 'Money Disbursal',
      subtitle: 'Instant Direct Credit',
      desc: 'Loan amount is transferred directly into your bank account within 24 hours with zero hidden deductions.',
    },
  ];

  return (
    <section id="process" className="py-10 bg-[#f5f8fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollAnimate animation="fade-bottom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-4 py-2 rounded-full mb-4 border border-[#c5a059]/40 animate-border-glow">
              <Zap className="w-4 h-4 text-[#c5a059]" /> 4-Step Loan Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] font-['Barlow'] leading-tight mb-4">
              How Our Instant Loan Process Works
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-['Jost']">
              From online submission to money landing in your bank account, experience our seamless, transparent 4-step borrowing process.
            </p>
          </div>
        </ScrollAnimate>

        {/* 4 Connected Pipeline Step Cards with Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative perspective-1000">
          
          {/* Decorative Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-slate-300 -translate-y-8 z-0 pointer-events-none"></div>

          {steps.map((step, idx) => (
            <ScrollAnimate key={step.id} animation="fade-up" delay={idx * 200}>
              <div
                className="relative z-10 bg-white p-7 rounded-3xl border border-slate-200 hover:border-[#c5a059] group card-3d flex flex-col justify-between h-full"
              >
                {/* Top Header Row with Icon & Step Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Badge: Default Dark Emerald, Hover Gold */}
                    <div className="w-14 h-14 rounded-2xl bg-[#123328] text-[#c5a059] flex items-center justify-center shadow-xs group-hover:bg-[#c5a059] group-hover:text-[#123328] transition-all duration-300 pop-out">
                      {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, {
                        className: 'w-6 h-6 text-[#c5a059] group-hover:text-[#123328] transition-colors duration-300',
                      })}
                    </div>

                    {/* Large Watermark Step Number */}
                    <span className="text-3xl font-extrabold text-slate-300 font-['Barlow'] group-hover:text-[#c5a059] transition-colors duration-300">
                      {step.id}
                    </span>
                  </div>

                  {/* Subtitle Badge */}
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#123328] bg-slate-100 px-2.5 py-1 rounded-md mb-3 border border-slate-200 group-hover:bg-[#c5a059] group-hover:text-[#123328] group-hover:border-[#c5a059] transition-all duration-300">
                    {step.subtitle}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-[#123328] mb-3 font-['Barlow'] leading-snug group-hover:text-[#c5a059] transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-['Jost']">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Arrow Indicator */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#c5a059] transition-colors duration-300">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </ScrollAnimate>
          ))}

        </div>

      </div>
    </section>
  );
};
