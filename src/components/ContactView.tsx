import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { COMPANY_DETAILS, FAQ_DATA } from '../data/companyContent';
import { QuoteEnquirySection } from './QuoteEnquirySection';

export const ContactView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#0B0B0C] text-white pt-10 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C7A35B]/10 border border-[#C7A35B]/30 text-[#E2C889] text-xs uppercase tracking-widest font-medium">
          Direct GTA Contact Channels
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-white leading-tight">
          Connect With Our Team.
        </h1>
        <p className="text-gray-300 text-base max-w-2xl mx-auto font-light leading-relaxed">
          Request a renovation estimate, arrange an on-site property walkthrough, or reach our 24/7 emergency dispatch line for urgent property repairs.
        </p>
      </div>

      {/* Verified Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone */}
          <div className="p-8 rounded-2xl bg-[#141416] border border-white/10 hover:border-[#C7A35B]/50 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#C7A35B]/10 text-[#E2C889] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400">Telephone</span>
              <h3 className="text-xl font-serif text-white mt-1">
                {COMPANY_DETAILS.displayPhone}
              </h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Available 24/7 for emergency repairs and Monday through Saturday for project consultations.
            </p>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="inline-block text-xs uppercase tracking-widest font-semibold text-[#E2C889] hover:underline"
            >
              Call Now &rarr;
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="p-8 rounded-2xl bg-[#141416] border border-white/10 hover:border-[#C7A35B]/50 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#C7A35B]/10 text-[#E2C889] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400">Electronic Mail</span>
              <h3 className="text-xl font-serif text-white mt-1 truncate">
                {COMPANY_DETAILS.email}
              </h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Send architectural blueprints, inspection reports, or project specs for prompt review.
            </p>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="inline-block text-xs uppercase tracking-widest font-semibold text-[#E2C889] hover:underline"
            >
              Send Message &rarr;
            </a>
          </div>

          {/* Card 3: Service Area & Compliance */}
          <div className="p-8 rounded-2xl bg-[#141416] border border-white/10 hover:border-[#C7A35B]/50 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#C7A35B]/10 text-[#E2C889] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400">Service Coverage</span>
              <h3 className="text-xl font-serif text-white mt-1">
                GTA & Ontario
              </h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Toronto, Mississauga, Brampton, Vaughan, Oakville, Markham, Richmond Hill, and surrounding areas.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#E2C889]">
              <ShieldCheck className="w-4 h-4" />
              <span>WSIB Compliant & Fully Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form Section */}
      <div className="mb-20">
        <QuoteEnquirySection />
      </div>

      {/* Interactive GTA Coverage Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#141416] border border-[#C7A35B]/30">
          <div className="max-w-xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#C7A35B] font-semibold">
              Service Area Directory
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1">
              Greater Toronto Area & Surrounding Municipalities
            </h3>
            <p className="text-xs text-gray-400 mt-2 font-light">
              We dispatch project teams across the Golden Horseshoe for both scheduled custom renovations and emergency callouts.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {COMPANY_DETAILS.primaryCities.map((city) => (
              <div key={city} className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#C7A35B] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-200">{city}, ON</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-serif text-white">
            Frequently Asked Questions
          </h3>
          <p className="text-xs text-gray-400 mt-2">
            Answers to common questions regarding our renovation procedures and safety standards.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#141416] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm font-medium text-white hover:text-[#E2C889] transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C7A35B]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-gray-300 leading-relaxed font-light border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
