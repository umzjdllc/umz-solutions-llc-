import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesBento } from './components/ServicesBento';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudies } from './components/CaseStudies';
import { CompanyAbout } from './components/CompanyAbout';
import { Testimonials } from './components/Testimonials';
import { ConsultationBooking } from './components/ConsultationBooking';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';

export default function App() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string>('supply-chain-logistics');
  const [consultationNotes, setConsultationNotes] = useState<string>('');

  const scrollToConsultation = (serviceId?: string, notes?: string) => {
    if (serviceId) {
      setSelectedServiceForConsultation(serviceId);
    }
    if (notes) {
      setConsultationNotes(notes);
    }
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyRoiEstimate = (data: { spend: number; savings: number; focus: string }) => {
    const formattedSpend = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(data.spend);
    const formattedSavings = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(data.savings);
    const note = `[ROI Model Projections]\nCurrent Monthly Spend: ${formattedSpend}\nProjected Annual Savings: ${formattedSavings}\nPrimary Focus: ${data.focus}`;
    
    // Map focus to service ID
    let srvId = 'supply-chain-logistics';
    if (data.focus === 'contracts') srvId = 'corporate-operations';
    if (data.focus === 'automation') srvId = 'digital-workflow-automation';
    if (data.focus === 'turnkey') srvId = 'commercial-capital-strategy';

    scrollToConsultation(srvId, note);
  };

  const handleProceedFromProposal = (serviceId: string, notes: string) => {
    scrollToConsultation(serviceId, notes);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Strict Top Bar Contract Navbar */}
      <Navbar
        onOpenConsultation={() => scrollToConsultation()}
        onOpenProposal={() => setIsProposalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="grow">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => scrollToConsultation()}
          onOpenProposal={() => setIsProposalOpen(true)}
        />

        {/* Core Capabilities Bento Grid */}
        <ServicesBento
          onSelectService={(serviceId) => scrollToConsultation(serviceId)}
        />

        {/* Interactive ROI & Financial Calculator */}
        <RoiCalculator
          onApplyEstimate={handleApplyRoiEstimate}
        />

        {/* Case Studies & Verified Evidence */}
        <CaseStudies
          onOpenConsultation={() => scrollToConsultation()}
        />

        {/* Attributable Client Testimonials */}
        <Testimonials />

        {/* Institutional Background & Trust Credentials */}
        <CompanyAbout />

        {/* Consultation Scheduler & RFP Intake Form */}
        <ConsultationBooking
          key={`${selectedServiceForConsultation}-${consultationNotes}`}
          initialServiceId={selectedServiceForConsultation}
          initialNotes={consultationNotes}
        />

        {/* Operational FAQ */}
        <FaqSection />
      </main>

      {/* Compliant Footer */}
      <Footer
        onOpenConsultation={() => scrollToConsultation()}
        onOpenProposal={() => setIsProposalOpen(true)}
      />

      {/* Instant SOW / RFQ Generator Modal */}
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
        onProceedToBooking={handleProceedFromProposal}
      />
    </div>
  );
}
