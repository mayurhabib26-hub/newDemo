import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyContent';
import { UnicornEffect } from './UnicornEffect';

interface HeroProps {
  onRequestQuote: () => void;
  onExploreWork: () => void;
  readyToAnimate?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onExploreWork, readyToAnimate = true }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-[#0B0B0C] overflow-hidden">
      {/* Background Image Layer with authentic Master Property Care interior image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/kitchen1.jpg"
          alt="Architectural Master Kitchen Renovation by Master Property Care"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />

        {/* Cinematic Dual Dark Gradient Overlays for Guaranteed Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-[#0B0B0C]/70 z-10" />

        {/* Ambient subtle gold lighting effect via isolated UnicornEffect */}
        <UnicornEffect className="z-10 opacity-70" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Verified Service Area & Credentials Pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={readyToAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191919]/80 backdrop-blur-md border border-[#C7A35B]/40 text-[#E2C889] text-xs uppercase tracking-widest font-medium mb-6 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C7A35B]" />
            <span>Serving Toronto, Mississauga, Brampton, Vaughan & the GTA</span>
          </motion.div>

          {/* Cinematic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={readyToAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-white leading-[1.08] mb-6 font-normal"
          >
            Exceptional spaces.
            <br />
            <span className="italic text-[#E2C889] font-light">Expertly transformed.</span>
          </motion.h1>

          {/* Supporting verified copy */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={readyToAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-8"
          >
            Bring your renovation vision to life with <strong className="text-white font-medium">Master Property Care</strong>. 
            From bespoke kitchens and spa ensuites to structural framing, luxury flooring, and 24/7 emergency response across Ontario.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={readyToAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              type="button"
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#C7A35B] to-[#E2C889] hover:from-[#E2C889] hover:to-[#C7A35B] shadow-xl hover:shadow-[#C7A35B]/20 transition-all duration-300 group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onExploreWork}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#C7A35B]/50 backdrop-blur-md transition-all duration-300"
            >
              <span>Explore Our Work</span>
            </button>
          </motion.div>

          {/* Trust Highlights Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={readyToAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-gray-300"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C7A35B] flex-shrink-0" />
              <span>WSIB Compliant & Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C7A35B] flex-shrink-0" />
              <span>24/7 Emergency Repairs</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <span className="w-2 h-2 rounded-full bg-[#C7A35B] flex-shrink-0" />
              <span>Residential & Commercial Care</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Discreet Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-gray-400 text-[11px] uppercase tracking-widest pointer-events-none">
        <span className="opacity-70">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-[#C7A35B] animate-bounce" />
      </div>
    </section>
  );
};
