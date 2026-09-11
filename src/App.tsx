import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutTrustSection } from './components/AboutTrustSection';
import { InstagramReelsSection } from './components/InstagramReelsSection';
import { QuoteEnquirySection } from './components/QuoteEnquirySection';
import { ClosingCtaAndFooter } from './components/ClosingCtaAndFooter';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { MobileActionBar } from './components/MobileActionBar';
import { ServicesView } from './components/ServicesView';
import { WorkView } from './components/WorkView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { BrandIntro } from './components/BrandIntro';
import { PageRoute, ServiceItem, ProjectItem } from './types';
import { SERVICES_DATA } from './data/companyContent';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Play intro once per session when opening the website
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return false;
      }
      const params = new URLSearchParams(window.location.search);
      if (params.get('intro') === '0' || params.get('intro') === 'false') {
        return false;
      }
      if (params.get('intro') === '1' || params.get('intro') === 'true') {
        return true;
      }
      const hasSeenIntro = sessionStorage.getItem('mpc_intro_seen');
      if (hasSeenIntro) {
        return false;
      }
      return true;
    } catch {
      return true;
    }
  });

  const [heroReady, setHeroReady] = useState(!showIntro);

  const handleIntroComplete = () => {
    try {
      sessionStorage.setItem('mpc_intro_seen', 'true');
    } catch {
      // Ignore sessionStorage errors
    }
    setShowIntro(false);
    setHeroReady(true);
  };

  const handleReplayIntro = () => {
    setHeroReady(false);
    setShowIntro(true);
  };

  // Sync route with browser hash for bookmarking and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'work', 'about', 'contact'].includes(hash)) {
        setCurrentRoute(hash as PageRoute);
      } else if (hash === 'quote') {
        setCurrentRoute('contact');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : `#${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestQuote = (serviceId?: string) => {
    if (currentRoute === 'home') {
      const quoteEl = document.getElementById('quote-section');
      if (quoteEl) {
        quoteEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigateTo('contact');
      }
    } else {
      navigateTo('contact');
      setTimeout(() => {
        const quoteEl = document.getElementById('quote-section');
        if (quoteEl) {
          quoteEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleExploreWork = () => {
    if (currentRoute === 'home') {
      const workEl = document.getElementById('work-section');
      if (workEl) {
        workEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigateTo('work');
      }
    } else {
      navigateTo('work');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#202020] flex flex-col selection:bg-[#C7A35B] selection:text-black relative">
      {/* Premium Introductory Brand Reveal Overlay */}
      {showIntro && (
        <BrandIntro onComplete={handleIntroComplete} />
      )}

      {/* Universal Responsive Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onRequestQuote={() => handleRequestQuote()}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-1 w-full">
        {currentRoute === 'home' && (
          <>
            {/* Cinematic Hero */}
            <Hero
              readyToAnimate={heroReady}
              onRequestQuote={() => handleRequestQuote()}
              onExploreWork={handleExploreWork}
            />

            {/* Editorial Services Section */}
            <ServicesSection
              onSelectService={(service) => setSelectedService(service)}
              onRequestQuote={() => handleRequestQuote()}
            />

            {/* Selected Work with Before/After Comparison */}
            <SelectedWorkSection
              onSelectProject={(project) => setSelectedProject(project)}
              onRequestQuote={() => handleRequestQuote()}
            />

            {/* Renovation Storytelling: 4-Stage Methodology */}
            <ProcessSection
              onRequestQuote={() => handleRequestQuote()}
            />

            {/* About & Trust Section (Founder, WSIB & Spline Material Study) */}
            <AboutTrustSection
              onRequestQuote={() => handleRequestQuote()}
            />

            {/* Behind the Craft: Verified Instagram Reels */}
            <InstagramReelsSection />

            {/* Interactive Quote Enquiry Section */}
            <QuoteEnquirySection />
          </>
        )}

        {currentRoute === 'services' && (
          <ServicesView
            onSelectService={(service) => setSelectedService(service)}
            onRequestQuote={(serviceId) => handleRequestQuote(serviceId)}
          />
        )}

        {currentRoute === 'work' && (
          <WorkView
            onSelectProject={(project) => setSelectedProject(project)}
            onRequestQuote={() => handleRequestQuote()}
          />
        )}

        {currentRoute === 'about' && (
          <AboutView
            onRequestQuote={() => handleRequestQuote()}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Closing CTA & Comprehensive Verified Footer */}
      <ClosingCtaAndFooter
        onNavigate={navigateTo}
        onRequestQuote={() => handleRequestQuote()}
        onReplayIntro={handleReplayIntro}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceId) => handleRequestQuote(serviceId)}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={() => handleRequestQuote()}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar
        onRequestQuote={() => handleRequestQuote()}
      />
    </div>
  );
}
