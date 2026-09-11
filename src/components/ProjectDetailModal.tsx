import React from 'react';
import { X, MapPin, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProjectItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onRequestQuote }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-[#141416] border border-[#C7A35B]/40 rounded-2xl text-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0B0B0C]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] uppercase tracking-widest text-[#C7A35B] font-semibold">
                {project.category}
              </span>
              <span className="text-white/20">&bull;</span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-[#C7A35B]" />
                {project.location}
              </span>
            </div>
            <h2 className="text-2xl font-serif text-white">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* If before/after exists, render comparison slider */}
          {project.beforeAfter ? (
            <div>
              <BeforeAfterSlider
                beforeImage={project.beforeAfter.beforeImage}
                afterImage={project.beforeAfter.afterImage}
                beforeLabel={project.beforeAfter.beforeLabel}
                afterLabel={project.beforeAfter.afterLabel}
                title="Transformation Comparison"
              />
            </div>
          ) : (
            <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-black border border-white/10">
              <img
                src={project.primaryImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Project Gallery Photos */}
          {project.galleryImages.length > 1 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#E2C889] font-medium mb-3">
                Project Gallery
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.galleryImages.map((img, idx) => (
                  <div key={idx} className="h-28 rounded-lg overflow-hidden bg-[#1f1f22] border border-white/10">
                    <img
                      src={img}
                      alt={`${project.title} angle ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scope & Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#C7A35B] font-semibold">
                Scope of Work
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {project.scope}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#C7A35B] font-semibold">
                Design & Engineering Approach
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {project.description}
              </p>
            </div>
          </div>

          {/* Key Architectural Features */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#E2C889] font-semibold mb-3">
              Key Project Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <Check className="w-4 h-4 text-[#C7A35B] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0B0B0C] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-[#C7A35B]" />
            <span>Master Property Care Verified Portfolio Item</span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#C7A35B] to-[#E2C889] hover:from-[#E2C889] hover:to-[#C7A35B] transition-colors"
          >
            <span>Request Similar Renovation</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
