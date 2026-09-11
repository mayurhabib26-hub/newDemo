import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, Phone, CheckCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyContent';
import { SplineScene } from './SplineScene';

interface AboutTrustSectionProps {
  onRequestQuote: () => void;
}

export const AboutTrustSection: React.FC<AboutTrustSectionProps> = ({ onRequestQuote }) => {
  return (
    <section id="about-section" className="relative bg-[#0B0B0C] text-white py-24 lg:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left: Founder / Worksite authentic photo with scroll reveal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#C7A35B]/40 shadow-2xl bg-[#141416]">
              <div className="relative">
                <img
                  src={COMPANY_DETAILS.founder.photo}
                  alt={`${COMPANY_DETAILS.founder.name} - Master Property Care Operations`}
                  className="w-full h-[360px] sm:h-[480px] lg:h-[520px] object-cover object-top"
                  loading="lazy"
                />
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
              </div>

              {/* Verified founder card: neatly below photo on mobile to avoid covering face, overlaid on tablet/desktop */}
              <div className="p-5 sm:absolute sm:bottom-6 sm:left-6 sm:right-6 sm:p-4 rounded-b-2xl sm:rounded-xl bg-[#141416] sm:bg-black/80 sm:backdrop-blur-md border-t sm:border border-white/10 text-xs">
                <div className="text-[#E2C889] font-medium text-sm">
                  {COMPANY_DETAILS.founder.name}
                </div>
                <div className="text-gray-400 text-[11px] mb-2">
                  {COMPANY_DETAILS.founder.role}, Master Property Care Inc.
                </div>
                <p className="text-gray-300 italic font-serif leading-relaxed">
                  "{COMPANY_DETAILS.founder.quote}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Verified Company Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A35B]/10 border border-[#C7A35B]/30 text-[#E2C889] text-xs uppercase tracking-widest font-medium">
              Verified Craftsmanship & Ethics
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white leading-[1.12]">
              Rooted in precision.
              <br />
              <span className="italic font-light text-[#E2C889]">Dedicated to your property.</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              Master Property Care Inc. serves homeowners, business owners, and property managers throughout the Greater Toronto Area. We combine hands-on renovation skill with structural discipline—ensuring jobs are completed to Ontario Building Code, cleanly maintained, and delivered with dependable timing.
            </p>

            {/* Core Substantiated Values with staggered reveal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { Icon: CheckCircle, title: 'Transparent Communication', desc: 'Direct contact with project management from the initial walkthrough through final punch-list sign-off.' },
                { Icon: ShieldCheck, title: 'WSIB & Liability Insured', desc: 'Every crew member is WSIB covered, and our company carries comprehensive commercial general liability insurance.' },
                { Icon: Clock, title: '24/7 GTA Availability', desc: 'Emergency crews available around the clock to contain active leaks, secure structures, and handle urgent repairs.' },
                { Icon: Award, title: 'Clean Site Discipline', desc: 'We use dust containment barriers, floor protection, and daily tidy-ups to respect your living or commercial environment.' },
              ].map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 rounded-xl bg-[#141416] border border-white/10 space-y-2"
                >
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <Icon className="w-4 h-4 text-[#C7A35B]" />
                    {title}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">{desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-semibold text-black bg-[#C7A35B] hover:bg-[#E2C889] transition-colors"
              >
                Schedule an Assessment
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C7A35B]" />
                Call {COMPANY_DETAILS.displayPhone}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Supporting Architectural Material Study (Spline component integration) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <SplineScene />
        </motion.div>
      </div>
    </section>
  );
};
