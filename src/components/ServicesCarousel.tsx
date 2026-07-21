import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, UserCheck, Car, Home, Building2, GraduationCap, Landmark } from 'lucide-react';
import { ScrollAnimate } from './ScrollAnimate';

interface ServiceItem {
  id: number;
  title: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

interface ServicesCarouselProps {
  onNavigateApply?: () => void;
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ onNavigateApply }) => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: 'Personal Loan',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/service-1.jpg',
      icon: <UserCheck className="w-6 h-6 text-[#c5a059] group-hover:text-white transition-colors" />,
      description: 'Quick collateral-free personal loans for weddings, travel & emergency funds.',
      link: '#apply-loan',
    },
    {
      id: 2,
      title: 'Home Loan',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/service-4.jpg',
      icon: <Home className="w-6 h-6 text-[#c5a059] group-hover:text-white transition-colors" />,
      description: 'Attractive interest rates & easy balance transfer for buying your dream house.',
      link: '#apply-loan',
    },
    {
      id: 3,
      title: 'Business Loan',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/service-6.jpg',
      icon: <Building2 className="w-6 h-6 text-[#c5a059] group-hover:text-white transition-colors" />,
      description: 'Working capital & expansion loans tailored for SMEs and entrepreneurs.',
      link: '#apply-loan',
    },
    {
      id: 4,
      title: 'Vehicle Loan',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/service-2.jpg',
      icon: <Car className="w-6 h-6 text-[#c5a059] group-hover:text-white transition-colors" />,
      description: 'Up to 100% on-road funding for new & used cars with instant approval.',
      link: '#apply-loan',
    },
    {
      id: 5,
      title: 'Education Loan',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/service-3.jpg',
      icon: <GraduationCap className="w-6 h-6 text-[#c5a059] group-hover:text-white transition-colors" />,
      description: 'Hassle-free financing for domestic & international higher education studies.',
      link: '#apply-loan',
    },
    {
      id: 6,
      title: 'Loan Against Property',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/service-5.jpg',
      icon: <Landmark className="w-6 h-6 text-[#c5a059] group-hover:text-white transition-colors" />,
      description: 'Unlock maximum value from your residential or commercial property.',
      link: '#apply-loan',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 4 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= services.length - 4 ? 0 : prev + 1));
  };

  return (
    <section id="services" className="py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollAnimate animation="fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-3.5 py-1.5 rounded-md mb-4 border border-[#c5a059]/40">
              Our Loan Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] leading-tight font-['Barlow'] mb-6">
              Tailored Financial Solutions for Every Need
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-['Jost']">
              Whether you're buying a home, funding your education, expanding your business, or managing personal expenses, Varahi Communications brings you pre-approved loan products at competitive interest rates.
            </p>
          </div>
        </ScrollAnimate>

        {/* Carousel Container */}
        <div className="relative mt-12">
          {/* Controls */}
          <div className="flex justify-end gap-3 mb-6">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-slate-100 hover:bg-[#123328] hover:text-white text-slate-900 flex items-center justify-center transition-all shadow-xs cursor-pointer btn-glow"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-slate-100 hover:bg-[#123328] hover:text-white text-slate-900 flex items-center justify-center transition-all shadow-xs cursor-pointer btn-glow"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Cards Grid: Alternating 1st card from Top (fade-bottom), 2nd card from Bottom (fade-up) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {services.slice(currentIndex, currentIndex + 4).map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollAnimate
                  key={service.id}
                  animation={isEven ? 'fade-bottom' : 'fade-up'}
                  delay={idx * 150}
                >
                  <div className="group card-3d bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#c5a059] flex flex-col justify-between h-full">
                    {/* Card Top Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-[#123328] group-hover:bg-[#c5a059] text-white group-hover:text-[#123328] backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-300 border border-[#c5a059]/40 pop-out">
                        {service.icon}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#123328] mb-3 group-hover:text-[#c5a059] transition-colors font-['Barlow']">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={onNavigateApply}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123328] group-hover:text-[#c5a059] transition-colors pt-4 border-t border-slate-100 cursor-pointer w-full text-left btn-glow mt-4"
                      >
                        Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </ScrollAnimate>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
