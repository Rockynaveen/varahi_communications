import React, { useState } from 'react';
import { Send, CheckCircle2, Calculator, User, Phone, Mail, MapPin, Briefcase, Sparkles, Building2, Home, Car, UserCheck, GraduationCap, Landmark, ShieldCheck } from 'lucide-react';

export const ApplyLoanForm: React.FC = () => {
  const [loanCategory, setLoanCategory] = useState<string>('Personal Loan');
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [tenureYears, setTenureYears] = useState<number>(3);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [employmentType, setEmploymentType] = useState<string>('Salaried');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  const categories = [
    { name: 'Personal Loan', icon: <UserCheck className="w-5 h-5" /> },
    { name: 'Home Loan', icon: <Home className="w-5 h-5" /> },
    { name: 'Business Loan', icon: <Building2 className="w-5 h-5" /> },
    { name: 'Vehicle Loan', icon: <Car className="w-5 h-5" /> },
    { name: 'Education Loan', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Loan Against Property', icon: <Landmark className="w-5 h-5" /> },
  ];

  return (
    <section id="apply-loan" className="py-10 bg-[#f5f8fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-4 py-2 rounded-full mb-4 border border-[#c5a059]/40">
            <Sparkles className="w-4 h-4 text-[#c5a059]" /> Official Loan Application
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] font-['Barlow'] leading-tight mb-4">
            Apply Online for Instant Loan Approval
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-['Jost']">
            Fill out our 100% paperless loan application form below to get pre-approved within minutes with zero hidden charges.
          </p>
        </div>

        {/* Form Main Container Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-[#c5a059]/30">
          
          {/* Toast feedback */}
          {submitted ? (
            <div className="py-16 text-center space-y-4 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-[#123328] text-[#c5a059] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#123328] font-['Barlow']">
                Application Submitted Successfully!
              </h3>
              <p className="text-slate-600 text-base max-w-lg mx-auto font-['Jost']">
                Thank you, <strong className="text-slate-900">{fullName}</strong>. Your application for <strong className="text-[#c5a059]">₹{loanAmount.toLocaleString('en-IN')} {loanCategory}</strong> has been received. Our loan officer will call you at <strong className="text-slate-900">{phone}</strong> within 30 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Step 1: Category Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#123328] text-[#c5a059] flex items-center justify-center text-xs">1</span>
                  Select Required Loan Category *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => setLoanCategory(cat.name)}
                      className={`flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl font-bold text-xs transition-all duration-300 cursor-pointer border text-center ${
                        loanCategory === cat.name
                          ? 'bg-[#123328] text-[#c5a059] border-[#c5a059] shadow-lg scale-102'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className={`p-2 rounded-xl ${loanCategory === cat.name ? 'bg-[#c5a059] text-[#123328]' : 'bg-white text-slate-800 shadow-xs'}`}>
                        {cat.icon}
                      </div>
                      <span className="leading-snug">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Amount & Tenure Sliders */}
              <div className="bg-[#f5f8fa] p-6 rounded-2xl border border-slate-200 space-y-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#123328] text-[#c5a059] flex items-center justify-center text-xs">2</span>
                  Specify Loan Amount & Repayment Tenure
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Slider 1: Loan Amount */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-[#123328] flex items-center gap-1">
                        <Calculator className="w-4 h-4 text-[#c5a059]" /> Desired Loan Amount
                      </span>
                      <span className="text-xl font-extrabold text-[#c5a059] font-['Barlow']">
                        ₹{loanAmount.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50000}
                      max={5000000}
                      step={25000}
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 font-bold">
                      <span>₹50,000</span>
                      <span>₹25 Lakhs</span>
                      <span>₹50 Lakhs</span>
                    </div>
                  </div>

                  {/* Slider 2: Tenure */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-[#123328]">Loan Tenure</span>
                      <span className="text-xl font-extrabold text-[#c5a059] font-['Barlow']">
                        {tenureYears} Years ({tenureYears * 12} Months)
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={7}
                      step={1}
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                      className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 font-bold">
                      <span>1 Year</span>
                      <span>4 Years</span>
                      <span>7 Years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Applicant Details Grid */}
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">3</span>
                  Enter Your Personal & Employment Details
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#123328]" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#123328] focus:bg-white transition-all shadow-xs"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#123328]" /> Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#123328] focus:bg-white transition-all shadow-xs"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-[#123328]" /> Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#123328] focus:bg-white transition-all shadow-xs"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#123328]" /> City *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Hyderabad, Mumbai"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#123328] focus:bg-white transition-all shadow-xs"
                    />
                  </div>

                  {/* Employment Type */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#123328]" /> Employment Type
                    </label>
                    <select
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-800 outline-none focus:border-[#123328] focus:bg-white transition-all shadow-xs"
                    >
                      <option value="Salaried">Salaried Employee</option>
                      <option value="Self-Employed">Self-Employed Professional</option>
                      <option value="Business Owner">Business Owner / SME</option>
                      <option value="Doctor/CA">Doctor / CA / Lawyer</option>
                    </select>
                  </div>

                  {/* Monthly Income */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] flex items-center gap-1">
                      Net Monthly Income
                    </label>
                    <input
                      type="text"
                      required
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(e.target.value)}
                      placeholder="e.g. ₹50,000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#123328] focus:bg-white transition-all shadow-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  className="w-full bg-[#123328] hover:bg-[#ff6000] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-green-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Submit Official Loan Application <Send className="w-4 h-4 text-white" />
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#123328]" />
                  <span>100% Data Privacy & Security Guaranteed. Zero Hidden Fees.</span>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
