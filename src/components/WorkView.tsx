import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Check, SlidersHorizontal } from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyContent';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ProjectItem } from '../types';

interface WorkViewProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuote: () => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onSelectProject, onRequestQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Kitchen Renovation', 'Bathroom Renovation', 'Framing & Drywall', 'Roofing & Exterior', 'Custom Flooring'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const featuredBeforeAfterProject = PROJECTS_DATA[0];

  return (
    <div className="bg-[#0B0B0C] text-white pt-10 pb-24">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C7A35B]/10 border border-[#C7A35B]/30 text-[#E2C889] text-xs uppercase tracking-widest font-medium">
          Verified GTA Projects
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-white leading-tight">
          Our Work.
          <br />
          <span className="italic font-light text-[#E2C889]">Precision in every detail.</span>
        </h1>
        <p className="text-gray-300 text-base max-w-2xl mx-auto font-light leading-relaxed">
          Explore genuine residential and commercial transformations executed by Master Property Care Inc. across Toronto, Mississauga, Oakville, Vaughan, and Brampton.
        </p>
      </div>

      {/* Featured Transformation Slider */}
      {featuredBeforeAfterProject.beforeAfter && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#141416] border border-[#C7A35B]/40 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <BeforeAfterSlider
                  beforeImage={featuredBeforeAfterProject.beforeAfter.beforeImage}
                  afterImage={featuredBeforeAfterProject.beforeAfter.afterImage}
                  beforeLabel={featuredBeforeAfterProject.beforeAfter.beforeLabel}
                  afterLabel={featuredBeforeAfterProject.beforeAfter.afterLabel}
                  title="Transformation Showcase"
                />
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded bg-[#C7A35B]/20 text-[#E2C889] font-medium uppercase tracking-wider">
                    {featuredBeforeAfterProject.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-[#C7A35B]" />
                    {featuredBeforeAfterProject.location}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  {featuredBeforeAfterProject.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {featuredBeforeAfterProject.description}
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-gray-300 leading-relaxed">
                  <span className="text-[#C7A35B] font-medium block uppercase tracking-wider mb-1">
                    Scope of Work:
                  </span>
                  {featuredBeforeAfterProject.scope}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectProject(featuredBeforeAfterProject)}
                    className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest font-semibold text-black bg-[#C7A35B] hover:bg-[#E2C889] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Inspect Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Request Similar Build &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

      {/* Asymmetric Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#141416] border border-white/10 hover:border-[#C7A35B]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1f1f22]">
                <img
                  src={project.primaryImage}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[#E2C889] text-[11px] font-medium">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-gray-300">
                    <MapPin className="w-3.5 h-3.5 text-[#C7A35B]" />
                    {project.location}
                  </span>
                  <span className="p-1.5 rounded-full bg-[#C7A35B] text-black opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-[#E2C889] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed mb-4">
                  {project.scope}
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] text-gray-400">
                  {project.features.slice(0, 2).map((feat, fIdx) => (
                    <span key={fIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
