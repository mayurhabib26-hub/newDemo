import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STAGES } from '../data/companyContent';

interface ProcessSectionProps {
  onRequestQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onRequestQuote }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section className="relative bg-[#F6F3ED] text-[#202020] py-24 lg:py-32 border-t border-[#e8e4d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A35B]/15 text-[#8c6b24] text-xs uppercase tracking-widest font-semibold mb-3">
            Our Renovation Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0B0B0C] leading-[1.15]">
            From your first idea
            <br />
            <span className="italic font-light text-[#8c6b24]">to the final detail.</span>
          </h2>
          <p className="text-[#444] text-base leading-relaxed mt-4 font-light">
            Renovations succeed on planning, clear communication, and site respect. Here is how Master Property Care manages your project from consultation to final handover.
          </p>
        </div>

        {/* Desktop Sticky Image + Stage Walkthrough */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Sticky Image on Desktop) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C7A35B]/30 h-[480px] bg-[#191919]">
              {PROCESS_STAGES.map((stage, idx) => (
                <img
                  key={stage.step}
                  src={stage.image}
                  alt={stage.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    activeStepIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                  loading="lazy"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-xs uppercase tracking-widest text-[#E2C889] font-mono">
                  Stage {PROCESS_STAGES[activeStepIndex].step} of 04
                </span>
                <h4 className="text-xl font-serif text-white mt-1">
                  {PROCESS_STAGES[activeStepIndex].subtitle}
                </h4>
              </div>
            </div>
          </div>

          {/* Right Column: Steps Sequence (Interactive on Desktop, Vertical on Mobile) */}
          <div className="lg:col-span-7 space-y-8">
            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-white border-[#C7A35B] shadow-lg'
                      : 'bg-white/60 hover:bg-white border-[#e6e2d6] shadow-sm'
                  }`}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-semibold transition-colors ${
                          isActive
                            ? 'bg-[#0B0B0C] text-[#E2C889]'
                            : 'bg-[#e8e4d8] text-[#555]'
                        }`}
                      >
                        {stage.step}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif text-[#0B0B0C]">
                          {stage.title}
                        </h3>
                        <span className="text-xs uppercase tracking-wider text-[#8c6b24] font-medium">
                          {stage.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Preview Image */}
                  <div className="lg:hidden h-48 w-full rounded-xl overflow-hidden my-4 border border-[#e8e4d8]">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-[#555] text-sm leading-relaxed mb-5 font-light">
                    {stage.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 text-xs text-[#333]">
                    {stage.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C7A35B] flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Quick Consultation CTA */}
            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Ready to begin stage 01 with our team?
              </span>
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#0B0B0C] hover:text-[#8c6b24] transition-colors"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#8c6b24]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
