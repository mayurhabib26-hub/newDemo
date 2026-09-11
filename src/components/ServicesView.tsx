import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Layers } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyContent';
import { ServiceItem } from '../types';

interface ServicesViewProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuote: (serviceSlug?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onSelectService, onRequestQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Interior Renovation', 'Structural & Finishing', 'Surface Finishes', 'Exterior Envelope', 'Commercial Maintenance'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-[#0B0B0C] text-white pt-10 pb-24">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C7A35B]/10 border border-[#C7A35B]/30 text-[#E2C889] text-xs uppercase tracking-widest font-medium">
          Comprehensive Renovation Capabilities
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-white leading-tight">
          Renovation Services.
          <br />
          <span className="italic font-light text-[#E2C889]">Tailored across Ontario.</span>
        </h1>
        <p className="text-gray-300 text-base max-w-2xl mx-auto font-light leading-relaxed">
          From custom kitchen layouts and spa-inspired ensuite bathrooms to code-compliant structural framing, standing-seam metal roofs, and 24/7 property care.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#C7A35B] text-black font-semibold shadow-md'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#141416] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C7A35B]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-60 w-full overflow-hidden bg-[#1a1a1c]">
                <img
                  src={service.primaryImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />

                <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[#E2C889] text-[11px] font-medium">
                  {service.category}
                </span>

                {service.emergencyAvailable && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 24/7 Available
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-serif text-white group-hover:text-[#E2C889] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#C7A35B] font-semibold block">
                      Core Deliverables:
                    </span>
                    <ul className="space-y-1 text-xs text-gray-400">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A35B] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#E2C889] hover:text-white transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onRequestQuote(service.id)}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Get Estimate &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
