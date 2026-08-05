import React, { useState } from 'react';
import { Send, CheckCircle2, DollarSign, Calendar, Percent, User, Phone, Briefcase, Sparkles, Building2, Home, Car, UserCheck, ShieldCheck } from 'lucide-react';

interface LoanPreset {
  id: 'personal' | 'home' | 'business' | 'vehicle';
  name: string;
  icon: React.ReactNode;
  defaultAmount: number;
  minAmount: number;
  maxAmount: number;
  stepAmount: number;
  amountLabels: [string, string, string];
  defaultRate: number;
  minRate: number;
  maxRate: number;
  stepRate: number;
  rateLabels: [string, string, string];
  defaultTenure: number;
  minTenure: number;
  maxTenure: number;
  stepTenure: number;
  tenureLabels: [string, string, string];
}

const LOAN_PRESETS: Record<'personal' | 'home' | 'business' | 'vehicle', LoanPreset> = {
  personal: {
    id: 'personal',
    name: 'Personal Loan',
    icon: <UserCheck className="w-4 h-4" />,
    defaultAmount: 500000,
    minAmount: 50000,
    maxAmount: 2500000,
    stepAmount: 25000,
    amountLabels: ['₹50,000', '₹12.5 Lakhs', '₹25 Lakhs'],
    defaultRate: 10.5,
    minRate: 9.5,
    maxRate: 18.0,
    stepRate: 0.25,
    rateLabels: ['9.5%', '13.5%', '18.0%'],
    defaultTenure: 3,
    minTenure: 1,
    maxTenure: 5,
    stepTenure: 1,
    tenureLabels: ['1 Year', '3 Years', '5 Years'],
  },
  home: {
    id: 'home',
    name: 'Home Loan',
    icon: <Home className="w-4 h-4" />,
    defaultAmount: 3500000,
    minAmount: 500000,
    maxAmount: 10000000,
    stepAmount: 100000,
    amountLabels: ['₹5 Lakhs', '₹50 Lakhs', '₹1 Crore'],
    defaultRate: 8.5,
    minRate: 8.0,
    maxRate: 12.0,
    stepRate: 0.1,
    rateLabels: ['8.0%', '10.0%', '12.0%'],
    defaultTenure: 20,
    minTenure: 5,
    maxTenure: 30,
    stepTenure: 1,
    tenureLabels: ['5 Years', '15 Years', '30 Years'],
  },
  business: {
    id: 'business',
    name: 'Business Loan',
    icon: <Building2 className="w-4 h-4" />,
    defaultAmount: 2000000,
    minAmount: 100000,
    maxAmount: 5000000,
    stepAmount: 50000,
    amountLabels: ['₹1 Lakh', '₹25 Lakhs', '₹50 Lakhs'],
    defaultRate: 12.0,
    minRate: 11.0,
    maxRate: 20.0,
    stepRate: 0.25,
    rateLabels: ['11.0%', '15.5%', '20.0%'],
    defaultTenure: 5,
    minTenure: 1,
    maxTenure: 7,
    stepTenure: 1,
    tenureLabels: ['1 Year', '4 Years', '7 Years'],
  },
  vehicle: {
    id: 'vehicle',
    name: 'Vehicle Loan',
    icon: <Car className="w-4 h-4" />,
    defaultAmount: 800000,
    minAmount: 100000,
    maxAmount: 2500000,
    stepAmount: 25000,
    amountLabels: ['₹1 Lakh', '₹12.5 Lakhs', '₹25 Lakhs'],
    defaultRate: 9.0,
    minRate: 8.5,
    maxRate: 14.0,
    stepRate: 0.25,
    rateLabels: ['8.5%', '11.0%', '14.0%'],
    defaultTenure: 5,
    minTenure: 1,
    maxTenure: 7,
    stepTenure: 1,
    tenureLabels: ['1 Year', '4 Years', '7 Years'],
  },
};

export const InsuranceQuoteForm: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'personal' | 'home' | 'business' | 'vehicle'>('personal');
  
  const currentPreset = LOAN_PRESETS[activeCategory];

  // Slider states initialized to default preset values
  const [loanAmount, setLoanAmount] = useState<number>(LOAN_PRESETS.personal.defaultAmount);
  const [interestRate, setInterestRate] = useState<number>(LOAN_PRESETS.personal.defaultRate);
  const [tenureYears, setTenureYears] = useState<number>(LOAN_PRESETS.personal.defaultTenure);
  
  // Form fields
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [employmentType, setEmploymentType] = useState<string>('Salaried');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCategorySelect = (catId: 'personal' | 'home' | 'business' | 'vehicle') => {
    setActiveCategory(catId);
    const preset = LOAN_PRESETS[catId];
    setLoanAmount(preset.defaultAmount);
    setInterestRate(preset.defaultRate);
    setTenureYears(preset.defaultTenure);
  };

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

  const categories = Object.values(LOAN_PRESETS);

  return (
    <section id="quote" className="py-10 bg-[#f5f8fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest bg-white px-4 py-2 rounded-full mb-4 border border-slate-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#123328]" /> Smart EMI Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123328] font-['Barlow'] leading-tight mb-4">
            Calculate Your EMI & Apply Instantly
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-['Jost']">
            Select your loan type, customize parameters below, and apply instantly with 100% paperless approval.
          </p>
        </div>

        {/* Outer Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders & Live Visual Breakdown (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-8 shadow-sm">
            
            {/* Category Pill Tabs */}
            <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-100">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySelect(cat.id as any)}
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
                    <DollarSign className="w-4 h-4 text-[#c5a059]" /> Desired {currentPreset.name} Amount
                  </span>
                  <span className="text-2xl font-extrabold text-[#c5a059] font-['Barlow'] tracking-wide">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min={currentPreset.minAmount}
                  max={currentPreset.maxAmount}
                  step={currentPreset.stepAmount}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-bold">
                  <span>{currentPreset.amountLabels[0]}</span>
                  <span>{currentPreset.amountLabels[1]}</span>
                  <span>{currentPreset.amountLabels[2]}</span>
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
                  min={currentPreset.minRate}
                  max={currentPreset.maxRate}
                  step={currentPreset.stepRate}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-bold">
                  <span>{currentPreset.rateLabels[0]}</span>
                  <span>{currentPreset.rateLabels[1]}</span>
                  <span>{currentPreset.rateLabels[2]}</span>
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
                  min={currentPreset.minTenure}
                  max={currentPreset.maxTenure}
                  step={currentPreset.stepTenure}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-bold">
                  <span>{currentPreset.tenureLabels[0]}</span>
                  <span>{currentPreset.tenureLabels[1]}</span>
                  <span>{currentPreset.tenureLabels[2]}</span>
                </div>
              </div>

            </div>

            {/* EMI Visualizer Card */}
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

          {/* Right Column: Unified Single Application Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white text-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-6">
            <div>
              <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#123328]/10 px-3 py-1 rounded-md mb-2">
                Fast Approval
              </span>
              <h3 className="text-2xl font-extrabold text-[#123328] font-['Barlow']">
                Apply for {currentPreset.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Get pre-approved offer in under 2 minutes for ₹{loanAmount.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Feedback Alert */}
            {submitted && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Your application for {currentPreset.name} (₹{loanAmount.toLocaleString('en-IN')}) has been submitted! Our loan officer will call you shortly.</span>
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
                className="w-full bg-[#123328] hover:bg-[#c5a059] text-white hover:text-[#123328] py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                Submit {currentPreset.name} Application <Send className="w-4 h-4" />
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
