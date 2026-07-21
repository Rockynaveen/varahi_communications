import React from 'react';
import { ArrowUpRight, Globe, Share2, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      id: 1,
      name: 'Robert Joe',
      role: 'Senior Loan Specialist',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/team-1.jpg',
    },
    {
      id: 2,
      name: 'Albet Hou',
      role: 'Home Loan Consultant',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/team-2.jpg',
    },
    {
      id: 3,
      name: 'Vidut Mok',
      role: 'Business Loan Advisor',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/team-3.jpg',
    },
    {
      id: 4,
      name: 'Marry Jon',
      role: 'Financial & Credit Analyst',
      image: 'https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/team-4.jpg',
    },
  ];

  return (
    <section id="team" className="py-10 bg-[#f5f8fa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Button Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-3.5 py-1.5 rounded-md mb-4 border border-[#c5a059]/40">
              Dedicated Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] leading-tight font-['Barlow'] mb-4">
              Our Loan & Financial Advisors
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-['Jost']">
              Meet our team of experienced banking specialists and loan consultants guiding you to the right financial solutions.
            </p>
          </div>

          <a
            href="#team"
            className="inline-flex items-center justify-center gap-2 bg-[#123328] hover:bg-[#c5a059] text-white hover:text-[#123328] px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md shrink-0 self-start lg:self-auto border border-[#c5a059]/40"
          >
            View All Advisors <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#c5a059] group card-3d flex flex-col justify-between"
            >
              {/* Member Image Container */}
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Social Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-[#123328] hover:bg-[#c5a059] hover:text-[#123328] flex items-center justify-center transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-[#123328] hover:bg-[#c5a059] hover:text-[#123328] flex items-center justify-center transition-colors">
                    <Share2 className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-[#123328] hover:bg-[#c5a059] hover:text-[#123328] flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Lower Content */}
              <div className="p-6 text-center relative">
                {/* Link icon button overlapping */}
                <div className="absolute -top-6 right-6 w-12 h-12 rounded-2xl bg-[#123328] text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-[#123328] flex items-center justify-center shadow-lg group-hover:rotate-45 transition-all duration-300 border border-[#c5a059]/40">
                  <ArrowUpRight className="w-6 h-6" />
                </div>

                <h4 className="text-xl font-bold text-[#123328] group-hover:text-[#c5a059] transition-colors font-['Barlow'] mb-1">
                  {member.name}
                </h4>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
