import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { AboutSection } from './components/AboutSection';
import { ServicesCarousel } from './components/ServicesCarousel';
import { FeaturesSection } from './components/FeaturesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ProcessSection } from './components/ProcessSection';
import { TeamSection } from './components/TeamSection';
import { InsuranceQuoteForm } from './components/InsuranceQuoteForm';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsSection } from './components/NewsSection';
import { ClientsTrustSection } from './components/ClientsTrustSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ApplyLoanPage } from './pages/ApplyLoanPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollAnimate } from './components/ScrollAnimate';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'apply' | 'contact'>('home');

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToApply = () => {
    setCurrentPage('apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'apply') {
    return <ApplyLoanPage onNavigateHome={navigateToHome} onNavigateApply={navigateToApply} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onNavigateHome={navigateToHome} onNavigateApply={navigateToApply} onNavigateContact={navigateToContact} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-700 antialiased font-['Jost'] selection:bg-[#123328] selection:text-white">
      {/* Header Navigation */}
      <Header onNavigateHome={navigateToHome} onNavigateApply={navigateToApply} onNavigateContact={navigateToContact} currentPage="home" />

      <main>
        {/* Hero Banner Section */}
        <ScrollAnimate animation="fade-up">
          <HeroBanner onNavigateApply={navigateToApply} />
        </ScrollAnimate>

        {/* About Section */}
        <AboutSection onNavigateContact={navigateToContact} />

        {/* Services Carousel Section */}
        <ServicesCarousel onNavigateApply={navigateToApply} />

        {/* Features Section */}
        <ScrollAnimate animation="zoom-in">
          <FeaturesSection />
        </ScrollAnimate>

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Team Section */}
        <ScrollAnimate animation="fade-bottom">
          <TeamSection />
        </ScrollAnimate>

        {/* Smart EMI Loan Calculator Section */}
        <ScrollAnimate animation="fade-up">
          <InsuranceQuoteForm />
        </ScrollAnimate>

        {/* Testimonials Section */}
        <ScrollAnimate animation="zoom-in">
          <TestimonialsSection />
        </ScrollAnimate>

        {/* News Section */}
        <ScrollAnimate animation="fade-left">
          <NewsSection />
        </ScrollAnimate>

        {/* Clients Trust Section */}
        <ScrollAnimate animation="fade-bottom">
          <ClientsTrustSection />
        </ScrollAnimate>

        {/* FAQ Section */}
        <ScrollAnimate animation="fade-right">
          <FaqSection />
        </ScrollAnimate>
      </main>

      {/* Footer Section */}
      <ScrollAnimate animation="fade-in">
        <Footer onNavigateHome={navigateToHome} onNavigateApply={navigateToApply} onNavigateContact={navigateToContact} />
      </ScrollAnimate>
    </div>
  );
};

export default App;
