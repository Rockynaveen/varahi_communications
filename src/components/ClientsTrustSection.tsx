import React from 'react';

export const ClientsTrustSection: React.FC = () => {
  const partners = [
    { id: 1, name: 'HDFC Bank', logo: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/clients-6.png' },
    { id: 2, name: 'ICICI Bank', logo: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/clients-7.png' },
    { id: 3, name: 'State Bank of India', logo: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/clients-8.png' },
    { id: 4, name: 'Axis Bank', logo: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/clients-9.png' },
    { id: 5, name: 'Kotak Mahindra', logo: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/clients-1.png' },
    { id: 6, name: 'Bajaj Finserv', logo: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/clients-2.png' },
    { id: 7, name: 'Tata Capital', logo: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/clients-3.png' },
    { id: 8, name: 'IDFC First Bank', logo: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/clients-4.png' },
    { id: 9, name: 'L&T Finance', logo: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/clients-5.png' },
  ];

  // Duplicate list to create a seamless infinite loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="py-10 bg-[#f5f8fa] border-t border-b border-slate-200 text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-4 z-10 bg-[#f5f8fa] py-2">
            <h4 className="text-xl sm:text-2xl font-bold text-[#123328] font-['Barlow'] leading-tight">
              Partnered with top banks <br className="hidden sm:inline" /> & financial institutions
            </h4>
          </div>

          {/* Right Continuous Marquee Logobar */}
          <div className="lg:col-span-8 overflow-hidden relative">
            {/* Fade Gradients at Edges */}
            <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#f5f8fa] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#f5f8fa] to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
              {marqueeList.map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="bg-white border border-slate-200 px-6 py-4 rounded-xl flex items-center justify-center hover:border-[#c5a059] transition-all duration-300 group shrink-0 w-36 sm:w-44 h-20"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    title={client.name}
                    className="h-10 sm:h-12 w-auto max-w-[120px] object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
