import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
}

export const NewsSection: React.FC = () => {
  const newsList: NewsItem[] = [
    {
      id: 1,
      title: 'Top 5 Tips to Improve Your CIBIL & Credit Score Before Applying for a Loan',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/news-1.jpg',
      date: 'July 18, 2026',
      author: 'Varahi Advisory',
      category: 'Credit Score',
      excerpt: 'Learn how maintaining low credit utilization and timely bill payments can lower your loan interest rates.',
    },
    {
      id: 2,
      title: 'How to Choose Between Fixed vs Floating Home Loan Rates in 2026',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/news-2.jpg',
      date: 'July 15, 2026',
      author: 'Financial Team',
      category: 'Home Loans',
      excerpt: 'Understand market interest rate fluctuations to select the ideal home loan option for your budget.',
    },
    {
      id: 3,
      title: 'Complete Checklist of Required Documents for Instant SME Business Loans',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/news-3.jpg',
      date: 'July 10, 2026',
      author: 'Business Desk',
      category: 'Business Loans',
      excerpt: 'Speed up your collateral-free business loan sanction by preparing your GST, ITR, and bank statements in advance.',
    },
  ];

  return (
    <section id="news" className="py-10 bg-[#f5f8fa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-3.5 py-1.5 rounded-md mb-4 border border-[#c5a059]/40">
            Financial Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] font-['Barlow'] leading-tight">
            Latest News & Loan Guides
          </h2>
        </div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {newsList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#c5a059] group card-3d flex flex-col justify-between"
            >
              {/* Image with Tag */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#123328] text-[#c5a059] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-[#c5a059]/40">
                  {item.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta date & author */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-['Jost']">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#c5a059]" /> {item.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#c5a059]" /> {item.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#123328] group-hover:text-[#c5a059] transition-colors font-['Barlow'] leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-6 font-['Jost']">
                    {item.excerpt}
                  </p>
                </div>

                <a
                  href="#news"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123328] group-hover:text-[#c5a059] transition-colors pt-4 border-t border-slate-100"
                >
                  Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
