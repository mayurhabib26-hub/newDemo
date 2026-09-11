import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyContent';
import { PageRoute } from '../types';

interface ClosingCtaAndFooterProps {
  onNavigate: (route: PageRoute) => void;
  onRequestQuote: () => void;
  onReplayIntro?: () => void;
}

export const ClosingCtaAndFooter: React.FC<ClosingCtaAndFooterProps> = ({ onNavigate, onRequestQuote, onReplayIntro }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <>
      {/* Closing CTA Banner */}
      <section className="relative bg-[#0B0B0C] text-white py-24 lg:py-32 overflow-hidden border-t border-white/10">
        {/* Subtle background ambient flare */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141416] to-[#0B0B0C]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C7A35B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A35B]/10 border border-[#C7A35B]/30 text-[#E2C889] text-xs uppercase tracking-widest font-medium">
            Begin Your Project
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-[1.1]">
            Let’s create a space
            <br />
            <span className="italic font-light text-[#E2C889]">you’ll love.</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            From initial concept to final walkthrough, Master Property Care delivers exceptional finishes, clear pricing, and reliable communication across the Greater Toronto Area.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#C7A35B] to-[#E2C889] hover:from-[#E2C889] hover:to-[#C7A35B] shadow-xl transition-all duration-300"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2 text-[#C7A35B]" />
              <span>{COMPANY_DETAILS.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Fine Gold Divider */}
      <div className="gold-divider" />

      {/* Footer */}
      <footer className="bg-[#0B0B0C] text-gray-400 py-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            {/* Col 1: Brand & Verified Logo */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-black border border-[#C7A35B]/40 flex items-center justify-center">
                  <img
                    src="/images/MPC_logo.jpeg"
                    alt="Master Property Care Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-white font-serif text-lg font-medium tracking-wide">
                    Master Property Care
                  </div>
                  <div className="text-[11px] text-[#C7A35B] uppercase tracking-widest font-mono">
                    Master Property Care Inc.
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed max-w-sm font-light">
                Professional residential and commercial renovations, framing, drywall, custom flooring, architectural metal roofing, and 24/7 property care serving the Greater Toronto Area.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={COMPANY_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#E2C889] border border-white/10 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#E2C889] border border-white/10 transition-colors"
                  aria-label="Email Enquiry"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="space-y-3">
              <div className="text-white font-medium uppercase tracking-wider text-[11px]">
                Navigation
              </div>
              <ul className="space-y-2">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors"
                  >
                    Renovation Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('work')}
                    className="hover:text-white transition-colors"
                  >
                    Selected Work
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('about')}
                    className="hover:text-white transition-colors"
                  >
                    About & Standards
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="hover:text-white transition-colors"
                  >
                    Request a Quote
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Verified GTA Service Regions */}
            <div className="space-y-3">
              <div className="text-white font-medium uppercase tracking-wider text-[11px]">
                Service Areas (GTA)
              </div>
              <ul className="space-y-1.5 text-gray-400">
                {COMPANY_DETAILS.primaryCities.map((city) => (
                  <li key={city} className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#C7A35B]" />
                    <span>{city}, ON</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Verified Contact Channels */}
            <div className="space-y-3">
              <div className="text-white font-medium uppercase tracking-wider text-[11px]">
                Direct Contact
              </div>
              <div className="space-y-2.5">
                <div>
                  <div className="text-[11px] text-gray-500">Phone (24/7 Available):</div>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="text-white hover:text-[#E2C889] font-medium transition-colors"
                  >
                    {COMPANY_DETAILS.displayPhone}
                  </a>
                </div>

                <div>
                  <div className="text-[11px] text-gray-500">Official Email:</div>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-white hover:text-[#E2C889] transition-colors"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>

                <div>
                  <div className="text-[11px] text-gray-500">Safety & Compliance:</div>
                  <div className="text-gray-300 flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C7A35B]" />
                    <span>WSIB Compliant & Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div>
              &copy; {new Date().getFullYear()} {COMPANY_DETAILS.legalName}. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              {onReplayIntro && (
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="hover:text-[#E2C889] text-gray-400 transition-colors"
                >
                  Replay Intro
                </button>
              )}
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(true)}
                className="hover:text-gray-300 transition-colors"
              >
                Privacy Policy & Terms
              </button>
              <span>Ontario, Canada</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-lg w-full bg-[#18181b] border border-[#C7A35B]/30 rounded-2xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Close Privacy Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-serif text-[#E2C889] mb-4">
              Privacy Policy & Client Notice
            </h3>

            <div className="space-y-4 text-xs text-gray-300 leading-relaxed font-light">
              <p>
                <strong>Master Property Care Inc.</strong> respects your personal privacy. When you request a quote or contact us, your name, telephone number, email address, and property details are collected solely to evaluate project scope and communicate estimates.
              </p>
              <p>
                We never sell, rent, or distribute client contact details to third-party advertisers. All on-site assessments and documentation follow industry privacy standards.
              </p>
              <p>
                For questions regarding your data or to update your request, contact us directly at <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-[#E2C889] underline">{COMPANY_DETAILS.email}</a> or call <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-[#E2C889] underline">{COMPANY_DETAILS.displayPhone}</a>.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#C7A35B] text-black text-xs font-semibold"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
