import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Shield } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyContent';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#0e0e10] border-b border-white/5 py-1.5 px-4 text-xs text-gray-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-300 font-medium">
              24/7 Emergency Repairs & Service Across the GTA
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#C7A35B]" />
              WSIB Compliant & Fully Insured
            </span>
            <span className="text-white/20">|</span>
            <a 
              href={`tel:${COMPANY_DETAILS.phone}`} 
              className="text-[#E2C889] hover:text-white transition-colors font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {COMPANY_DETAILS.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0C]/95 backdrop-blur-md border-b border-[#C7A35B]/20 py-3 shadow-xl'
            : 'bg-[#0B0B0C]/80 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area: preserving natural proportions on dark background */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus:ring-1 focus:ring-[#C7A35B] rounded-lg p-1"
              aria-label="Master Property Care Homepage"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-black border border-[#C7A35B]/40 flex-shrink-0 flex items-center justify-center shadow-md">
                <img
                  src="/images/MPC_logo.jpeg"
                  alt="Master Property Care Logo"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wide text-white font-medium group-hover:text-[#E2C889] transition-colors">
                  Master Property Care
                </span>
                <span className="text-[10px] tracking-widest text-[#C7A35B] uppercase font-sans font-medium">
                  Renovations &bull; GTA
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className={`transition-colors py-1 ${
                  currentRoute === 'home'
                    ? 'text-[#E2C889] border-b-2 border-[#C7A35B]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('services')}
                className={`transition-colors py-1 ${
                  currentRoute === 'services' || currentRoute === 'service-detail'
                    ? 'text-[#E2C889] border-b-2 border-[#C7A35B]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('work')}
                className={`transition-colors py-1 ${
                  currentRoute === 'work' || currentRoute === 'project-detail'
                    ? 'text-[#E2C889] border-b-2 border-[#C7A35B]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Our Work
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className={`transition-colors py-1 ${
                  currentRoute === 'about'
                    ? 'text-[#E2C889] border-b-2 border-[#C7A35B]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className={`transition-colors py-1 ${
                  currentRoute === 'contact'
                    ? 'text-[#E2C889] border-b-2 border-[#C7A35B]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-[#E2C889] transition-colors"
                title="Call Master Property Care"
              >
                <Phone className="w-3.5 h-3.5 text-[#C7A35B]" />
                <span>{COMPANY_DETAILS.displayPhone}</span>
              </a>

              <button
                type="button"
                onClick={onRequestQuote}
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#C7A35B] to-[#E2C889] hover:from-[#E2C889] hover:to-[#C7A35B] shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C7A35B] focus:ring-offset-2 focus:ring-offset-black"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="p-2 rounded-lg bg-white/5 text-[#E2C889] border border-white/10"
                aria-label="Call Master Property Care"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 text-gray-200 hover:text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C7A35B]"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Accessible Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0B0C] border-b border-[#C7A35B]/30 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-2">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentRoute === 'home'
                    ? 'bg-[#C7A35B]/20 text-[#E2C889]'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('services')}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentRoute === 'services'
                    ? 'bg-[#C7A35B]/20 text-[#E2C889]'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('work')}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentRoute === 'work'
                    ? 'bg-[#C7A35B]/20 text-[#E2C889]'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                Our Work
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentRoute === 'about'
                    ? 'bg-[#C7A35B]/20 text-[#E2C889]'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentRoute === 'contact'
                    ? 'bg-[#C7A35B]/20 text-[#E2C889]'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                Contact & Quote
              </button>
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white"
              >
                <Phone className="w-4 h-4 text-[#C7A35B]" />
                Call {COMPANY_DETAILS.displayPhone}
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3 rounded-lg text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#C7A35B] to-[#E2C889] text-center"
              >
                Request a Free Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
