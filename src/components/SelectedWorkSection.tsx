import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight, Check, SlidersHorizontal } from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyContent';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ProjectItem } from '../types';

interface SelectedWorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuote: () => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onSelectProject, onRequestQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Kitchen Renovation', 'Bathroom Renovation', 'Framing & Drywall', 'Roofing & Exterior', 'Custom Flooring'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const featuredProject = PROJECTS_DATA[0]; // Custom Open-Concept Kitchen with Before/After

  return (
    <section id="work-section" className="relative bg-[#0B0B0C] text-white py-24 lg:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A35B]/10 border border-[#C7A35B]/30 text-[#E2C889] text-xs uppercase tracking-widest font-medium mb-3">
              Verified Project Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white">
              Selected Work.
              <br />
              <span className="italic font-light text-[#E2C889]">Crafted across the GTA.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm max-w-md leading-relaxed font-light">
            Explore authentic renovations and building envelope projects delivered with architectural care, verified materials, and zero stock substitutions.
          </p>
        </motion.div>

        {/* Featured Project Showcase with Interactive Before / After Comparison */}
        {featuredProject.beforeAfter && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 rounded-2xl bg-[#141416] border border-[#C7A35B]/30 p-6 lg:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Interactive Before/After Component */}
              <div className="lg:col-span-7">
                <BeforeAfterSlider
                  beforeImage={featuredProject.beforeAfter.beforeImage}
                  afterImage={featuredProject.beforeAfter.afterImage}
                  beforeLabel={featuredProject.beforeAfter.beforeLabel}
                  afterLabel={featuredProject.beforeAfter.afterLabel}
                  title="Interactive Transformation Study"
                />
              </div>

              {/* Right Column: Project Context and Verified Specs */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded bg-[#C7A35B]/20 text-[#E2C889] font-medium uppercase tracking-wider">
                    {featuredProject.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-[#C7A35B]" />
                    {featuredProject.location}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  {featuredProject.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {featuredProject.description}
                </p>

                {/* Scope Highlight */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="text-xs uppercase tracking-widest text-[#C7A35B] font-semibold">
                    Scope of Work
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {featuredProject.scope}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-2 text-xs text-gray-300">
                  {featuredProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C7A35B] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest font-semibold text-black bg-[#C7A35B] hover:bg-[#E2C889] transition-colors"
                  >
                    <span>View Project Specs</span>
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
          </motion.div>
        )}

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
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

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const isWide = idx % 3 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-xl overflow-hidden bg-[#141416] border border-white/10 hover:border-[#C7A35B]/50 transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Frame with Subtle Zoom on Hover */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1f1f22]">
                  <img
                    src={project.primaryImage}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
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

                {/* Project Details Footer */}
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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
