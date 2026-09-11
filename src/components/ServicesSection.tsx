import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyContent';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onRequestQuote }) => {
  return (
    <section id="services-section" className="relative bg-[#F6F3ED] text-[#202020] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Heading with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A35B]/15 text-[#8c6b24] text-xs uppercase tracking-widest font-semibold">
              Our Renovation Services
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#0B0B0C] leading-[1.12]">
              Thoughtful improvements.
              <br />
              <span className="italic font-light text-[#8c6b24]">Lasting impact.</span>
            </h2>

            <p className="text-[#404040] text-base sm:text-lg leading-relaxed font-light">
              Every property improvement is planned with architectural rigor and executed with uncompromising craftsmanship. From structural framing to luxury finishes, we ensure long-term durability and aesthetic refinement.
            </p>

            {/* Verified Emergency Notice */}
            <div className="p-5 rounded-xl bg-white border border-[#C7A35B]/30 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C7A35B]">
                <ShieldAlert className="w-4 h-4 text-[#C7A35B]" />
                24/7 GTA Emergency Care
              </div>
              <p className="text-xs text-[#555] leading-relaxed">
                Facing sudden leaks or urgent property hazards? Our emergency response crew is available round-the-clock across Toronto, Mississauga, Brampton, and Vaughan.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0B0B0C] hover:text-[#8c6b24] border-b border-[#8c6b24] pb-1 transition-colors"
              >
                Discuss Your Renovation Project
                <ArrowUpRight className="w-4 h-4 text-[#8c6b24]" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Image-led numbered service entries with alternating layouts */}
          <div className="lg:col-span-7 space-y-12">
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-[#e5e0d3] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
                >
                  {/* Service Image Container */}
                  <div className={`relative md:w-5/12 h-64 md:h-auto overflow-hidden bg-[#191919] ${isEven ? 'order-1' : 'order-1 md:order-2'}`}>
                    <img
                      src={service.primaryImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                    <span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded bg-[#0B0B0C]/80 backdrop-blur-md text-[#E2C889] text-xs font-mono font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Details Body */}
                  <div className={`p-6 sm:p-8 md:w-7/12 flex flex-col justify-between ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] uppercase tracking-widest text-[#8c6b24] font-semibold">
                          {service.category}
                        </span>
                        {service.emergencyAvailable && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                            24/7 Available
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-serif text-[#0B0B0C] mb-3 group-hover:text-[#8c6b24] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-[#555] text-sm leading-relaxed mb-5 font-light">
                        {service.shortDescription}
                      </p>

                      {/* Deliverables snippet */}
                      <ul className="space-y-1.5 mb-6 text-xs text-[#444]">
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A35B] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Details Action */}
                    <div className="pt-4 border-t border-[#f0ece1] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onSelectService(service)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0B0C] group-hover:text-[#8c6b24] transition-colors focus:outline-none"
                      >
                        <span>Explore Specifications</span>
                        <ArrowUpRight className="w-4 h-4 text-[#8c6b24]" />
                      </button>

                      <span className="text-xs text-gray-400 font-serif italic">
                        {service.materialsUsed[0]}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
