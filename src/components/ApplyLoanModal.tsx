import React, { useState } from 'react';
import { X, Send, CheckCircle2, Calculator, User, Phone, Mail, MapPin, Briefcase, Sparkles, Building2, Home, Car, UserCheck, GraduationCap, Landmark } from 'lucide-react';

interface ApplyLoanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyLoanModal: React.FC<ApplyLoanModalProps> = ({ isOpen, onClose }) => {
  const [loanCategory, setLoanCategory] = useState<string>('Personal Loan');
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [employmentType, setEmploymentType] = useState<string>('Salaried');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  const categories = [
    { name: 'Personal Loan', icon: <UserCheck className="w-4 h-4" /> },
    { name: 'Home Loan', icon: <Home className="w-4 h-4" /> },
    { name: 'Business Loan', icon: <Building2 className="w-4 h-4" /> },
    { name: 'Vehicle Loan', icon: <Car className="w-4 h-4" /> },
    { name: 'Education Loan', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Loan Against Property', icon: <Landmark className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        
        {/* Top Banner Header */}
        <div className="bg-[#123328] text-white p-6 sm:p-8 relative border-b border-[#c5a059]/40">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-[#c5a059] text-white hover:text-[#123328] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="inline-flex items-center gap-1.5 text-[#c5a059] font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full mb-3 border border-[#c5a059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" /> Instant 2-Minute Application
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Barlow'] text-white">
            Apply for Varahi Loan
          </h2>
          <p className="text-slate-200 text-xs sm:text-sm font-['Jost'] mt-1">
            Get instant pre-approval & paperless disbursal at rates starting from 8.5% p.a.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          
          {/* Toast feedback */}
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#123328] text-[#c5a059] flex items-center justify-center mx-auto shadow-inner animate-bounce border border-[#c5a059]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#123328] font-['Barlow']">
                Application Submitted Successfully!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto font-['Jost']">
                Thank you, <strong className="text-slate-900">{fullName}</strong>. Our loan officer will contact you at <strong className="text-[#c5a059]">{phone}</strong> within 30 minutes to process your ₹{loanAmount.toLocaleString('en-IN')} {loanCategory}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Category Select Buttons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-3">
                  1. Select Loan Category *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => setLoanCategory(cat.name)}
                      className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer border ${
                        loanCategory === cat.name
                          ? 'bg-[#123328] text-[#c5a059] border-[#c5a059] shadow-md'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {cat.icon}
                      <span className="truncate">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan Amount Slider */}
              <div className="bg-[#f5f8fa] p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-[#123328] flex items-center gap-1">
                    <Calculator className="w-4 h-4 text-[#c5a059]" /> Required Loan Amount
                  </span>
                  <span className="text-lg font-extrabold text-[#c5a059] font-['Barlow']">
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
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-bold">
                  <span>₹50,000</span>
                  <span>₹25 Lakhs</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>

              {/* Personal Details 2-Col Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
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

                {/* Mobile Phone */}
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

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5 flex items-center gap-1">
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
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5 flex items-center gap-1">
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
              </div>

              {/* Employment & Monthly Income */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5 flex items-center gap-1">
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

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5 flex items-center gap-1">
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#123328] hover:bg-[#ff6000] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                Submit Application Now <Send className="w-4 h-4 text-white" />
              </button>
              <p className="text-[11px] text-slate-400 text-center font-medium">
                🔒 100% Confidential & Secure. Paperless Disbursal Guarantee.
              </p>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
