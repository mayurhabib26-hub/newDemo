import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceSlug?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onRequestQuote }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-3xl w-full bg-[#141416] border border-[#C7A35B]/40 rounded-2xl text-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0B0B0C]">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#C7A35B] font-semibold">
              {service.category}
            </span>
            <h2 className="text-2xl font-serif text-white mt-0.5">
              {service.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Gallery Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {service.galleryImages.slice(0, 4).map((img, idx) => (
              <div key={idx} className="h-28 rounded-lg overflow-hidden bg-[#1f1f22] border border-white/10">
                <img
                  src={img}
                  alt={`${service.title} reference ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#E2C889] mb-2">
              Scope & Craftsmanship
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              {service.fullDescription}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#E2C889] mb-3">
              Included Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A35B] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials & Ideal For */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#C7A35B] font-medium block">
                Approved Materials
              </span>
              <div className="flex flex-wrap gap-1.5">
                {service.materialsUsed.map((mat, idx) => (
                  <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#C7A35B] font-medium block">
                Ideal Application
              </span>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {service.idealFor}
              </p>
            </div>
          </div>

          {/* Emergency Badge */}
          {service.emergencyAvailable && (
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3 text-xs text-emerald-200">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>24/7 Emergency call-out available across the GTA for this category.</span>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0B0B0C] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-[#C7A35B]" />
            <span>WSIB Compliant &bull; Ontario Building Code Certified</span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote(service.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#C7A35B] to-[#E2C889] hover:from-[#E2C889] hover:to-[#C7A35B] transition-colors"
          >
            <span>Request Quote for {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
