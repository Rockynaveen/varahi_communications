import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: 'What documents are required to apply for a loan?',
      answer:
        'You need basic identity proof (PAN/Aadhaar card), address proof, latest salary slips or IT returns, and bank statements for the last 6 months. Self-employed individuals may need business registration proof.',
    },
    {
      id: 2,
      question: 'How fast will my loan get approved and disbursed?',
      answer:
        'With Varahi Communications, paperless online applications are processed instantly. Once approved, loan funds are disbursed directly to your bank account within 24 to 48 hours.',
    },
    {
      id: 3,
      question: 'Can I pre-pay or pre-close my loan early?',
      answer:
        'Yes! Most of our partner banking products offer zero or minimal pre-closure penalties after completing 6 EMI payments. You can part-pay or foreclose anytime.',
    },
  ];

  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-10 bg-[#f5f8fa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-5 animate-fade-in-left">
            <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-3.5 py-1.5 rounded-md mb-4 border border-[#c5a059]/40 animate-border-glow">
              Our Commitment
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123328] leading-snug font-['Barlow']">
              Our promise of simplifying complex loan terms, transparent interest rates, and instant paperless disbursal.
            </h3>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4 animate-fade-in-right">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-[#c5a059]' : 'border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="flex items-center gap-3 text-lg font-bold text-[#123328] font-['Barlow']">
                      <HelpCircle className="w-5 h-5 text-[#c5a059] shrink-0" />
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#123328] text-[#c5a059]' : 'text-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-fadeIn font-['Jost']">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
