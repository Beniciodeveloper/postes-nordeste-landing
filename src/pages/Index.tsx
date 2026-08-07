import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import IsoQualitySection from '@/components/IsoQualitySection';
import FinancingMarket from '@/components/FinancingMarket';
import Clients from '@/components/Clients';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import WebmailModal from '@/components/WebmailModal';

const Index: React.FC = () => {
  const [webmailModalOpen, setWebmailModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-postes-red selection:text-white">
      {/* Navigation Header */}
      <Header onOpenWebmail={() => setWebmailModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Products />
        <IsoQualitySection />
        <FinancingMarket />
        <Clients />
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer onOpenWebmail={() => setWebmailModalOpen(true)} />

      {/* LGPD Cookie Consent Banner */}
      <CookieBanner />

      {/* Webmail Redirection Modal */}
      <WebmailModal 
        isOpen={webmailModalOpen} 
        onClose={() => setWebmailModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
