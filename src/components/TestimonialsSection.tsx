import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award, Building, Home, User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  title: string;
  comment: string;
  loanType: string;
  loanAmount: string;
  icon: React.ReactNode;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Anand Sharma',
      role: 'Small Business Owner',
      location: 'Hyderabad, Telangana',
      avatar: '/images/testimonial-1.jpg',
      rating: 5,
      title: 'Fastest Business Loan Disbursal Experience!',
      comment:
        'Varahi Communications helped me secure a working capital loan of ₹25 Lakhs for my expanding retail store within 24 hours. The paperless documentation and transparent terms were beyond my expectations.',
      loanType: 'Business Loan',
      loanAmount: '₹25,000,000 Sanctioned',
      icon: <Building className="w-5 h-5 text-slate-900 group-hover:text-white" />,
    },
    {
      id: 2,
      name: 'Priya Sundaram',
      role: 'Senior Software Engineer',
      location: 'Bengaluru, Karnataka',
      avatar: '/images/testimonial-2.jpg',
      rating: 5,
      title: 'Seamless Dream Home Financing',
      comment:
        'Getting my home loan approved through Varahi Communications was completely stress-free. Their loan advisor guided me through the entire bank verification process at the lowest interest rate!',
      loanType: 'Home Loan',
      loanAmount: '₹75,000,000 Sanctioned',
      icon: <Home className="w-5 h-5 text-slate-900 group-hover:text-white" />,
    },
    {
      id: 3,
      name: 'Rajesh Verma',
      role: 'Management Consultant',
      location: 'Mumbai, Maharashtra',
      avatar: '/images/testimonial-3.jpg',
      rating: 5,
      title: 'Urgent Emergency Fund Disbursed in 12 Hours',
      comment:
        'I needed urgent personal funds for medical expenses and Varahi Communications processed my application in just 12 hours. Zero pre-closure penalty and 100% transparent terms.',
      loanType: 'Personal Loan',
      loanAmount: '₹5,000,000 Sanctioned',
      icon: <User className="w-5 h-5 text-slate-900 group-hover:text-white" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-10 bg-[#f5f8fa] relative overflow-hidden">
      {/* Subtle Background Accent Circle */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#123328]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Spotlight Header & Controls (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-3.5 py-1.5 rounded-md mb-4 border border-[#c5a059]/40">
                Borrower Success Stories
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] font-['Barlow'] leading-tight mb-4">
                What Our Happy Clients Say About Us
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-['Jost']">
                Discover why over 50,000 borrowers trust Varahi Communications for instant loan approvals, paperless processing, and lowest EMI interest rates.
              </p>
            </div>

            {/* Overall Rating Box */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#123328] text-[#c5a059] flex items-center justify-center text-2xl font-black font-['Barlow'] shrink-0 border border-[#c5a059]/40">
                4.9
              </div>
              <div>
                <div className="flex gap-1 text-[#c5a059] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                  ))}
                </div>
                <h4 className="text-sm font-bold text-[#123328] font-['Jost']">Highest Customer Trust Rating</h4>
                <p className="text-xs text-slate-500 font-medium">Based on 2,500+ verified customer reviews</p>
              </div>
            </div>

            {/* Slide Navigation Controls & Indicators */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-2xl bg-white text-[#123328] hover:bg-[#c5a059] hover:text-[#123328] transition-all duration-300 flex items-center justify-center shadow-md border border-slate-200 cursor-pointer"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-2xl bg-white text-[#123328] hover:bg-[#c5a059] hover:text-[#123328] transition-all duration-300 flex items-center justify-center shadow-md border border-slate-200 cursor-pointer"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Page Pill Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-[#c5a059]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Spotlight Testimonial Card (7 Cols) */}
          <div className="lg:col-span-7 perspective-1000">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 relative group hover:border-[#c5a059] card-3d">
              
              {/* Top Watermark Quote Icon */}
              <div className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-[#123328] text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-[#123328] flex items-center justify-center transition-all duration-300 shadow-xs border border-[#c5a059]/40 pop-out">
                <Quote className="w-7 h-7 transition-colors duration-300" />
              </div>

              {/* Category & Verified Disbursal Pill */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-[#123328] font-bold text-xs group-hover:bg-[#c5a059] group-hover:text-[#123328] transition-all duration-300 border border-slate-200 group-hover:border-[#c5a059]">
                  {current.icon}
                  {current.loanType}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#123328] bg-[#c5a059]/20 px-3 py-1 rounded-full border border-[#c5a059]/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> {current.loanAmount}
                </span>
              </div>

              {/* Rating */}
              <div className="flex gap-1 text-[#c5a059] mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c5a059]" />
                ))}
              </div>

              {/* Review Headline & Quote Text */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#123328] group-hover:text-[#c5a059] transition-colors font-['Barlow'] leading-snug mb-4">
                "{current.title}"
              </h3>
              <p className="text-slate-700 text-base sm:text-lg italic leading-relaxed font-['Jost'] mb-8">
                "{current.comment}"
              </p>

              {/* Borrower Profile Block */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#123328] text-white flex items-center justify-center shadow-xs">
                      <Award className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#123328] font-['Barlow'] leading-tight">
                      {current.name}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 font-['Jost']">
                      {current.role} • {current.location}
                    </p>
                  </div>
                </div>

                {/* Borrower Thumbnails Selector */}
                <div className="hidden sm:flex items-center gap-2">
                  {testimonials.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                        currentIndex === idx
                          ? 'border-[#123328] scale-110 shadow-md ring-2 ring-[#123328]/30'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
