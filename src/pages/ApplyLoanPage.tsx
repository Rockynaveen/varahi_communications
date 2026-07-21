import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ApplyLoanForm } from '../components/ApplyLoanForm';
import { CheckCircle2, ShieldCheck, Clock, Award, ArrowLeft } from 'lucide-react';

interface ApplyLoanPageProps {
  onNavigateHome: () => void;
  onNavigateApply: () => void;
}

export const ApplyLoanPage: React.FC<ApplyLoanPageProps> = ({ onNavigateHome, onNavigateApply }) => {
  return (
    <div className="min-h-screen bg-white text-slate-700 antialiased font-['Jost'] selection:bg-[#123328] selection:text-white">
      {/* Header Navigation */}
      <Header onNavigateHome={onNavigateHome} onNavigateApply={onNavigateApply} currentPage="apply" />

      {/* Hero Breadcrumb Section */}
      <section className="bg-[#123328] text-white py-10 relative overflow-hidden border-b border-[#c5a059]/30">
        {/* Background Subtle Accent Pattern */}
        <div className="absolute inset-0 bg-radial from-[#c5a059]/10 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c5a059] hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Homepage
          </button>

          <div className="max-w-3xl">
            <span className="inline-block text-[#c5a059] font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-md mb-4 border border-[#c5a059]/40">
              Official Application Portal
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Barlow'] leading-tight mb-4">
              Apply Online for Fast Loan Disbursal
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-['Jost']">
              Complete your digital loan application in under 2 minutes. Experience 100% paperless KYC verification, lowest EMI interest rates, and direct bank account disbursal.
            </p>
          </div>

          {/* Quick Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/15 text-xs font-semibold text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>Zero Pre-closure Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>Approval in 30 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>100% Paperless KYC</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>Top Partner Banks</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Application Form Component */}
      <main>
        <ApplyLoanForm />
      </main>

      {/* Footer Section */}
      <Footer onNavigateHome={onNavigateHome} onNavigateApply={onNavigateApply} />
    </div>
  );
};
