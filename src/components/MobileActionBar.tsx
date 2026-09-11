import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyContent';

interface MobileActionBarProps {
  onRequestQuote: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onRequestQuote }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0C]/95 backdrop-blur-md border-t border-[#C7A35B]/30 px-4 py-3 shadow-2xl safe-area-inset-bottom">
      <div className="flex items-center gap-3">
        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_DETAILS.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-semibold tracking-wider transition-colors"
          aria-label={`Call ${COMPANY_DETAILS.displayPhone}`}
        >
          <Phone className="w-4 h-4 text-[#C7A35B]" />
          <span>Call Now</span>
        </a>

        {/* Get a Quote Action */}
        <button
          type="button"
          onClick={onRequestQuote}
          className="flex-[1.4] inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-gradient-to-r from-[#C7A35B] to-[#E2C889] text-black text-xs font-semibold uppercase tracking-wider shadow-lg transition-transform active:scale-95"
        >
          <span>Get a Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
