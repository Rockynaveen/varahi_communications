import React, { useState } from 'react';
import { Send, CheckCircle2, DollarSign, Calendar, Percent, User, Phone, Briefcase, Sparkles, Building2, Home, Car, UserCheck, ShieldCheck } from 'lucide-react';

export const InsuranceQuoteForm: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'personal' | 'home' | 'business' | 'vehicle'>('personal');
  
  // Slider states
  const [loanAmount, setLoanAmount] = useState<number>(1000000); // 10 Lakhs default
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% p.a.
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 Years (60 months)
  
  // Form fields
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [employmentType, setEmploymentType] = useState<string>('Salaried');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // EMI Calculation Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return isNaN(emi) ? 0 : Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalMonths = tenureYears * 12;
  const totalAmountPayable = monthlyEMI * totalMonths;
  const totalInterestPayable = totalAmountPayable - loanAmount;

  // Percentage shares for visual bar
  const principalPercentage = Math.round((loanAmount / (totalAmountPayable || 1)) * 100);
  const interestPercentage = 100 - principalPercentage;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const categories = [
    { id: 'personal', name: 'Personal Loan', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'home', name: 'Home Loan', icon: <Home className="w-4 h-4" /> },
    { id: 'business', name: 'Business Loan', icon: <Building2 className="w-4 h-4" /> },
    { id: 'vehicle', name: 'Vehicle Loan', icon: <Car className="w-4 h-4" /> },
  ];

  return (
    <section id="quote" className="py-10 bg-[#f5f8fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest bg-white px-4 py-2 rounded-full mb-4 border border-slate-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#123328]" /> Smart EMI Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] font-['Barlow'] leading-tight mb-4">
            Calculate Your EMI & Apply Instantly
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-['Jost']">
            Customize your loan amount, interest rate, and tenure below to check your monthly EMI instantly with 100% paperless approval.
          </p>
        </div>

        {/* Outer Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start perspective-1000">
          
          {/* Left Column: Sliders & Live Visual Breakdown (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-8 card-3d">
            
            {/* Category Pill Tabs */}
            <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-100">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer border ${
                    activeCategory === cat.id
                      ? 'bg-[#123328] text-[#c5a059] border-[#c5a059] shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Sliders Grid */}
            <div className="space-y-6">
              
              {/* Slider 1: Loan Amount */}
              <div className="space-y-3 bg-[#f5f8fa] p-5 rounded-2xl border border-slate-200/60">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-[#123328] flex items-center gap-1.5 font-bold">
                    <DollarSign className="w-4 h-4 text-[#c5a059]" /> Desired Loan Amount
                  </span>
                  <span className="text-2xl font-extrabold text-[#c5a059] font-['Barlow'] tracking-wide">
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
                <div className="flex justify-between text-xs text-slate-500 font-bold">
                  <span>₹50,000</span>
                  <span>₹25 Lakhs</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div className="space-y-3 bg-[#f5f8fa] p-5 rounded-2xl border border-slate-200/60">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-[#123328] flex items-center gap-1.5 font-bold">
                    <Percent className="w-4 h-4 text-[#c5a059]" /> Interest Rate (p.a.)
                  </span>
                  <span className="text-2xl font-extrabold text-[#c5a059] font-['Barlow'] tracking-wide">
                    {interestRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={7.5}
                  max={18.0}
                  step={0.25}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-bold">
                  <span>7.5%</span>
                  <span>12.5%</span>
                  <span>18.0%</span>
                </div>
              </div>

              {/* Slider 3: Tenure */}
              <div className="space-y-3 bg-[#f5f8fa] p-5 rounded-2xl border border-slate-200/60">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-[#123328] flex items-center gap-1.5 font-bold">
                    <Calendar className="w-4 h-4 text-[#c5a059]" /> Loan Tenure
                  </span>
                  <span className="text-2xl font-extrabold text-[#c5a059] font-['Barlow'] tracking-wide">
                    {tenureYears} Years ({totalMonths} Months)
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
                <div className="flex justify-between text-xs text-slate-500 font-bold">
                  <span>1 Year</span>
                  <span>4 Years</span>
                  <span>7 Years</span>
                </div>
              </div>

            </div>

            {/* EMI Visualizer Card with Pie/Bar share */}
            <div className="bg-[#123328] text-white p-6 rounded-2xl shadow-xl relative overflow-hidden border border-[#c5a059]/40">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
                <div>
                  <span className="text-xs text-[#c5a059] font-bold uppercase tracking-wider block mb-1">Calculated Monthly EMI</span>
                  <span className="text-3xl sm:text-4xl font-black text-[#c5a059] font-['Barlow']">
                    ₹{monthlyEMI.toLocaleString('en-IN')}<span className="text-xs text-slate-200 font-normal"> / month</span>
                  </span>
                </div>

                <div className="text-right sm:border-l sm:border-white/15 sm:pl-6">
                  <div className="text-xs text-slate-200 mb-1">Total Interest: <strong className="text-[#c5a059]">₹{totalInterestPayable.toLocaleString('en-IN')}</strong></div>
                  <div className="text-xs text-slate-200">Total Amount: <strong className="text-white">₹{totalAmountPayable.toLocaleString('en-IN')}</strong></div>
                </div>
              </div>

              {/* Progress Bar Visualizer */}
              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-200">Principal: {principalPercentage}%</span>
                  <span className="text-[#c5a059]">Interest: {interestPercentage}%</span>
                </div>
                <div className="w-full h-3 bg-white/15 rounded-full overflow-hidden flex">
                  <div style={{ width: `${principalPercentage}%` }} className="bg-white h-full transition-all duration-300"></div>
                  <div style={{ width: `${interestPercentage}%` }} className="bg-[#c5a059] h-full transition-all duration-300"></div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Instant Application Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white text-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-6">
            <div>
              <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#123328]/10 px-3 py-1 rounded-md mb-2">
                Fast Approval
              </span>
              <h3 className="text-2xl font-extrabold text-[#123328] font-['Barlow']">
                Apply Online Now
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Get pre-approved offer in under 2 minutes
              </p>
            </div>

            {/* Feedback Alert */}
            {submitted && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-sm font-semibold animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Your loan application for ₹{loanAmount.toLocaleString('en-IN')} has been submitted! Our loan officer will call you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5 flex items-center gap-1">
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
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5 flex items-center gap-1">
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

              {/* Employment Type & Monthly Income */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-[#123328]" /> Profession
                  </label>
                  <select
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-800 outline-none focus:border-[#123328] focus:bg-white transition-all shadow-xs"
                  >
                    <option value="Salaried">Salaried</option>
                    <option value="Self-Employed">Self-Employed</option>
                    <option value="Business Owner">Business Owner</option>
                    <option value="Professional">Doctor/CA/Lawyer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5 flex items-center gap-1">
                    Monthly Income
                  </label>
                  <input
                    type="text"
                    required
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    placeholder="e.g. ₹45,000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#123328] focus:bg-white transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full bg-[#123328] hover:bg-[#ff6000] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                Submit Loan Application <Send className="w-4 h-4 text-white" />
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center font-medium mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#123328]" />
                <span>100% Secure & Confidential. Zero Spam Guarantee.</span>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
