import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { ScrollAnimate } from '../components/ScrollAnimate';

interface ContactPageProps {
  onNavigateHome: () => void;
  onNavigateApply: () => void;
  onNavigateContact?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onNavigateApply,
  onNavigateContact,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Personal Loan');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 antialiased font-['Jost'] selection:bg-[#123328] selection:text-white">
      {/* Header Navigation */}
      <Header
        onNavigateHome={onNavigateHome}
        onNavigateApply={onNavigateApply}
        onNavigateContact={onNavigateContact}
        currentPage="contact"
      />

      <main>
        {/* Page Hero Header */}
        <section className="relative bg-[#123328] text-white py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://wp1.themevibrant.com/newwp/mexlife/wp-content/uploads/2024/06/banner-3.jpg"
              alt="Contact Varahi Communications"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123328] via-[#123328]/95 to-[#0a1f18]/90"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/10 text-[#c5a059] px-4 py-1.5 rounded-full border border-white/20 mb-6 backdrop-blur-md">
              <span className="cursor-pointer hover:text-white transition-colors" onClick={onNavigateHome}>
                Home
              </span>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Barlow'] text-white tracking-tight mb-4 gold-shimmer">
              Get in Touch With Our Loan Experts
            </h1>
            <p className="text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-['Jost']">
              Have questions about your loan application, interest rates, or eligibility? Our dedicated financial advisors are ready to assist you.
            </p>
          </div>
        </section>

        {/* Contact Info Cards Grid */}
        <section className="py-12 bg-[#f5f8fa] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Phone Support */}
              <ScrollAnimate animation="fade-up" delay={0}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#c5a059] transition-all card-3d flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#123328] text-[#c5a059] flex items-center justify-center mb-4 border border-[#c5a059]/40 pop-out">
                    <Phone className="w-6 h-6 animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123328] mb-1 font-['Barlow']">Toll-Free Helpline</h3>
                  <p className="text-xs text-slate-500 mb-3">Speak directly with an advisor</p>
                  <a
                    href="tel:18004567890"
                    className="text-base font-extrabold text-[#c5a059] hover:text-[#123328] transition-colors font-['Barlow']"
                  >
                    1800-456-7890
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="text-xs font-semibold text-slate-600 hover:text-[#c5a059] transition-colors mt-1"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </ScrollAnimate>

              {/* Card 2: Email Support */}
              <ScrollAnimate animation="fade-up" delay={150}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#c5a059] transition-all card-3d flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#123328] text-[#c5a059] flex items-center justify-center mb-4 border border-[#c5a059]/40 pop-out">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123328] mb-1 font-['Barlow']">Email Assistance</h3>
                  <p className="text-xs text-slate-500 mb-3">24/7 Dedicated Support</p>
                  <a
                    href="mailto:info@varahi.com"
                    className="text-base font-extrabold text-[#c5a059] hover:text-[#123328] transition-colors font-['Barlow']"
                  >
                    info@varahi.com
                  </a>
                  <a
                    href="mailto:loans@varahi.com"
                    className="text-xs font-semibold text-slate-600 hover:text-[#c5a059] transition-colors mt-1"
                  >
                    loans@varahi.com
                  </a>
                </div>
              </ScrollAnimate>

              {/* Card 3: Branch Office Location */}
              <ScrollAnimate animation="fade-up" delay={300}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#c5a059] transition-all card-3d flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#123328] text-[#c5a059] flex items-center justify-center mb-4 border border-[#c5a059]/40 pop-out">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123328] mb-1 font-['Barlow']">Head Office Location</h3>
                  <p className="text-xs text-slate-500 mb-2">Corporate Headquarters</p>
                  <p className="text-xs font-semibold text-slate-700 leading-snug">
                    121 Tailstoi Town, Financial District, LA 522364
                  </p>
                </div>
              </ScrollAnimate>

              {/* Card 4: Working Hours */}
              <ScrollAnimate animation="fade-up" delay={450}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#c5a059] transition-all card-3d flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#123328] text-[#c5a059] flex items-center justify-center mb-4 border border-[#c5a059]/40 pop-out">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123328] mb-1 font-['Barlow']">Working Hours</h3>
                  <p className="text-xs text-slate-500 mb-2">Customer Desk Timings</p>
                  <p className="text-xs font-bold text-[#123328]">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1">Sunday: Closed</p>
                </div>
              </ScrollAnimate>

            </div>
          </div>
        </section>

        {/* Main Section: Form & Map Location */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Interactive Inquiry Form (7 Cols) */}
              <div className="lg:col-span-7 bg-[#f5f8fa] p-8 sm:p-10 rounded-3xl border border-slate-200/80">
                <ScrollAnimate animation="fade-left">
                  <span className="inline-block text-[#123328] font-bold text-xs uppercase tracking-widest bg-[#c5a059]/20 px-3.5 py-1.5 rounded-md mb-4 border border-[#c5a059]/40">
                    Send Us a Message
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#123328] font-['Barlow'] leading-tight mb-4">
                    Have a Query? Request a Callback
                  </h2>
                  <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                    Fill out the form below and one of our certified loan specialists will reach out to you within 30 minutes.
                  </p>

                  {submitted ? (
                    <div className="bg-[#123328] text-white p-8 rounded-2xl border border-[#c5a059] text-center space-y-4 animate-zoom-in">
                      <div className="w-16 h-16 rounded-full bg-[#c5a059] text-[#123328] mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold font-['Barlow'] text-white">Thank You, {fullName}!</h3>
                      <p className="text-sm text-slate-200">
                        Your inquiry has been successfully received. A loan advisor will call you at <strong>{phone}</strong> shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#c5a059] transition-all"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="10-digit mobile number"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#c5a059] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#c5a059] transition-all"
                          />
                        </div>

                        {/* Service Type */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5">
                            Loan Service Interested In
                          </label>
                          <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-800 outline-none focus:border-[#c5a059] transition-all"
                          >
                            <option value="Personal Loan">Personal Loan</option>
                            <option value="Home Loan">Home Loan</option>
                            <option value="Business Loan">Business Loan</option>
                            <option value="Vehicle Loan">Vehicle Loan</option>
                            <option value="Education Loan">Education Loan</option>
                            <option value="Loan Against Property">Loan Against Property</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#123328] mb-1.5">
                          Your Message / Specific Loan Requirements
                        </label>
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your loan amount, city, or preferred bank..."
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#c5a059] transition-all"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-[#123328] hover:bg-[#c5a059] text-white hover:text-[#123328] border border-[#c5a059]/40 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer btn-glow animate-border-glow"
                      >
                        Submit Request <Send className="w-4 h-4 text-[#c5a059] group-hover:text-[#123328]" />
                      </button>
                    </form>
                  )}
                </ScrollAnimate>
              </div>

              {/* Right Column: Office Location & Directions (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                <ScrollAnimate animation="fade-right" delay={150}>
                  <div className="bg-[#123328] text-white p-8 rounded-3xl border border-[#c5a059]/40 space-y-6 animate-border-glow">
                    <span className="inline-block text-[#c5a059] font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-md border border-white/20">
                      Visit Our Office
                    </span>
                    
                    <h3 className="text-2xl font-extrabold font-['Barlow'] text-white">
                      Varahi Communications Head Office
                    </h3>

                    <div className="space-y-4 text-sm text-slate-200">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#c5a059] shrink-0 mt-1" />
                        <span>121 Tailstoi Town, Financial District, LA 522364</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#c5a059] shrink-0" />
                        <span>Toll-Free: 1800-456-7890</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#c5a059] shrink-0" />
                        <span>info@varahi.com</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/20 flex flex-col gap-3">
                      <button
                        onClick={onNavigateApply}
                        className="w-full bg-[#c5a059] hover:bg-white text-[#123328] font-bold py-3.5 px-6 rounded-xl uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 cursor-pointer btn-glow"
                      >
                        Apply Loan Online <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollAnimate>

                {/* Assurance Card */}
                <ScrollAnimate animation="zoom-in" delay={300}>
                  <div className="bg-[#f5f8fa] p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#123328] text-[#c5a059] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#123328] text-sm font-['Barlow']">100% Privacy Protected</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Your personal data is encrypted & never shared with third parties.</p>
                    </div>
                  </div>
                </ScrollAnimate>

              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer onNavigateHome={onNavigateHome} onNavigateApply={onNavigateApply} onNavigateContact={onNavigateContact} />
    </div>
  );
};
