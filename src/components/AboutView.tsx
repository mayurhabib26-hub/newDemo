import React from 'react';
import { ShieldCheck, Clock, Award, Phone, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyContent';
import { SplineScene } from './SplineScene';

interface AboutViewProps {
  onRequestQuote: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onRequestQuote }) => {
  return (
    <div className="bg-[#0B0B0C] text-white pt-10 pb-24">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C7A35B]/10 border border-[#C7A35B]/30 text-[#E2C889] text-xs uppercase tracking-widest font-medium">
          Company Heritage & Craftsmanship
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-white leading-tight">
          About Master Property Care.
        </h1>
        <p className="text-gray-300 text-base max-w-2xl mx-auto font-light leading-relaxed">
          A dedicated general contracting and property enhancement firm based in Ontario, balancing architectural discipline with practical site expertise.
        </p>
      </div>

      {/* Founder & Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Authentic Founder Photo */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#C7A35B]/40 shadow-2xl bg-[#141416]">
              <img
                src={COMPANY_DETAILS.founder.photo}
                alt={`${COMPANY_DETAILS.founder.name} - Master Property Care`}
                className="w-full h-[460px] sm:h-[520px] object-cover object-top"
                loading="lazy"
              />
              <div className="p-6 bg-[#141416] border-t border-white/10 space-y-1">
                <div className="text-[#E2C889] font-medium text-base">
                  {COMPANY_DETAILS.founder.name}
                </div>
                <div className="text-gray-400 text-xs font-mono">
                  {COMPANY_DETAILS.founder.role}, Master Property Care Inc.
                </div>
                <p className="text-gray-300 text-xs italic font-serif pt-2">
                  "{COMPANY_DETAILS.founder.quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A35B]/15 text-[#E2C889] text-xs uppercase tracking-widest font-medium">
              Verified Principles
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
              Honest estimates. Superior materials.
              <br />
              <span className="italic font-light text-[#E2C889]">Uncompromising site respect.</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Master Property Care was built on a simple premise: GTA property owners deserve contractors who communicate proactively, arrive punctually, and execute every stage with meticulous attention to detail.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Whether undertaking complete residential transformations—including high-end kitchens, spa ensuites, and sound-insulated basements—or executing commercial exterior envelopes and architectural standing-seam roofing, we adhere strictly to the Ontario Building Code and WSIB safety standards.
            </p>

            {/* Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#141416] border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#C7A35B]" />
                  <span>WSIB & Liability Insured</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Complete workers' compensation protection and commercial general liability on all sites.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141416] border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <Clock className="w-4 h-4 text-[#C7A35B]" />
                  <span>24/7 GTA Emergency Care</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Active response dispatch for emergency roof tarping, water containment, and secure board-ups.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-semibold text-black bg-[#C7A35B] hover:bg-[#E2C889] transition-colors"
              >
                Schedule Property Consultation
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C7A35B]" />
                Call {COMPANY_DETAILS.displayPhone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spline Material Vignette */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SplineScene />
      </div>

      {/* Verified GTA Service Coverage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#141416] border border-white/10 space-y-6">
          <div className="flex items-center gap-2 text-[#E2C889] text-xs uppercase tracking-widest font-medium">
            <MapPin className="w-4 h-4 text-[#C7A35B]" />
            Ontario Service Coverage
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-white">
            Serving Properties Across the Greater Toronto Area
          </h3>
          <p className="text-xs text-gray-400 max-w-2xl leading-relaxed font-light">
            We operate fully equipped mobile crews with direct access to top Ontario material distributors, ensuring on-schedule delivery and factory-backed warranties.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {COMPANY_DETAILS.primaryCities.map((city) => (
              <div key={city} className="p-3.5 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2.5 text-xs text-gray-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#C7A35B]" />
                <span>{city}, ON</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
