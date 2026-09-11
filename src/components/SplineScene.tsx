import React, { useState } from 'react';
import { Box, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface SplineSceneProps {
  sceneUrl?: string;
  className?: string;
}

/**
 * SplineScene - Architectural 3D Vignette & Material Composition
 * 
 * Provides an isolated integration component for Spline.
 * When a verified Spline scene URL is provided (e.g. from an approved workspace export),
 * it renders the 3D scene embed.
 * When unavailable, it provides an architectural material study showcasing
 * the tactile materials Master Property Care crafts: Honed Calacatta, Quarter-Sawn White Oak,
 * Brushed Champagne Brass, and Architectural Standing-Seam Steel.
 */
export const SplineScene: React.FC<SplineSceneProps> = ({ sceneUrl, className = '' }) => {
  const [activeMaterial, setActiveMaterial] = useState<number>(0);

  const materials = [
    {
      name: 'Quarter-Sawn White Oak',
      finish: 'Custom Matte Monocoat',
      application: 'Architectural Millwork & Flooring',
      textureBg: 'bg-[#b89569] bg-opacity-90',
      specs: 'Enduring stability, tight grain, moisture tested'
    },
    {
      name: 'Calacatta Honed Marble',
      finish: 'Low-Sheen Silky Touch',
      application: 'Waterfall Islands & Vanity Tops',
      textureBg: 'bg-[#ecebe6]',
      specs: 'Precision-mitred edges, anti-etch sealant'
    },
    {
      name: 'Architectural Charcoal Steel',
      finish: 'PVDF Kynar 500 Coating',
      application: 'Standing-Seam Metal Roofing',
      textureBg: 'bg-[#202225]',
      specs: 'Concealed fasteners, 50-year structural resistance'
    },
    {
      name: 'Brushed Champagne Brass',
      finish: 'PVD Anti-Fingerprint Finish',
      application: 'Ensuite Fixtures & Custom Pulls',
      textureBg: 'bg-[#c5a666]',
      specs: 'Solid forged brass, thermostatic compatibility'
    }
  ];

  return (
    <div className={`relative overflow-hidden rounded-xl border border-[#C7A35B]/20 bg-[#121214] p-6 lg:p-8 ${className}`}>
      {/* Decorative architectural grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#C7A35B 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Column: Material vignette details */}
        <div className="max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A35B]/10 border border-[#C7A35B]/30 text-[#E2C889] text-xs uppercase tracking-widest font-medium mb-3">
            <Box className="w-3.5 h-3.5" />
            Architectural Material Study
          </div>

          <h3 className="text-2xl lg:text-3xl font-serif text-white mb-2">
            Tactile Craftsmanship.
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            We curate genuine, resilient building materials engineered for Canadian climates and high-end interior longevity.
          </p>

          {/* Interactive Material Selectors */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {materials.map((mat, idx) => (
              <button
                key={mat.name}
                type="button"
                onClick={() => setActiveMaterial(idx)}
                className={`text-left p-2.5 rounded-lg border transition-all text-xs ${
                  activeMaterial === idx
                    ? 'border-[#C7A35B] bg-[#C7A35B]/10 text-white'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="font-medium truncate">{mat.name}</div>
                <div className="text-[11px] text-[#C7A35B]">{mat.application}</div>
              </button>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300">
            <span className="text-[#E2C889] font-medium">Specification: </span>
            {materials[activeMaterial].specs}
          </div>
        </div>

        {/* Right Column: 3D Scene or Visual Vignette Representation */}
        <div className="w-full lg:w-1/2 relative">
          {sceneUrl ? (
            <div className="relative w-full h-80 rounded-lg overflow-hidden bg-black/50 border border-[#C7A35B]/20">
              <iframe
                src={sceneUrl}
                title="Spline 3D Architectural Scene"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#191919] to-[#0d0d0f] flex flex-col justify-between p-6 shadow-2xl">
              {/* Architectural isometric composition cards */}
              <div className="absolute top-0 right-0 w-full h-full pointer-events-none flex items-center justify-center opacity-30">
                <div className="w-64 h-64 border border-[#C7A35B]/30 rotate-12 transform scale-110 rounded-2xl" />
                <div className="absolute w-52 h-52 border border-white/20 -rotate-6 transform rounded-xl" />
              </div>

              <div className="flex justify-between items-start z-10">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Layers className="w-4 h-4 text-[#C7A35B]" />
                  <span>Interactive Vignette Mode</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-gray-300 font-mono">
                  STUDIO ARCHETYPE 01
                </span>
              </div>

              {/* Active Material Display */}
              <div className="z-10 bg-black/60 backdrop-blur-md p-4 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">
                    {materials[activeMaterial].name}
                  </span>
                  <span className="text-[11px] text-[#E2C889]">
                    {materials[activeMaterial].finish}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#C7A35B] to-[#E2C889] transition-all duration-500" 
                    style={{ width: `${(activeMaterial + 1) * 25}%` }}
                  />
                </div>
              </div>

              {/* Verified Craft Guarantee Footer */}
              <div className="flex items-center justify-between text-[11px] text-gray-400 z-10 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C7A35B]" />
                  <span>WSIB & Ontario Building Code Adherence</span>
                </div>
                <span className="text-gray-500">Master Property Care</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
