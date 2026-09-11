import React, { useState } from 'react';
import { Instagram, Play, ExternalLink, X } from 'lucide-react';
import { INSTAGRAM_REELS, COMPANY_DETAILS } from '../data/companyContent';

export const InstagramReelsSection: React.FC = () => {
  const [activeReel, setActiveReel] = useState<typeof INSTAGRAM_REELS[0] | null>(null);

  return (
    <section className="relative bg-[#111113] text-white py-20 lg:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A35B]/10 border border-[#C7A35B]/30 text-[#E2C889] text-xs uppercase tracking-widest font-medium mb-3">
              <Instagram className="w-3.5 h-3.5 text-[#C7A35B]" />
              Work In Progress
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Behind the craft.
              <br />
              <span className="italic font-light text-[#E2C889]">Real projects unfolding.</span>
            </h2>
          </div>

          <a
            href={COMPANY_DETAILS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C7A35B]/40 hover:border-[#C7A35B] bg-white/5 hover:bg-white/10 text-xs text-[#E2C889] tracking-wider uppercase font-medium transition-all"
          >
            <span>Follow {COMPANY_DETAILS.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="group cursor-pointer relative rounded-xl overflow-hidden bg-[#18181b] border border-white/10 hover:border-[#C7A35B]/50 transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[9/14] w-full overflow-hidden bg-black">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0B0B0C]/80 backdrop-blur-md border border-[#C7A35B]/50 flex items-center justify-center text-[#E2C889] group-hover:scale-110 group-hover:bg-[#C7A35B] group-hover:text-black transition-all">
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </div>

                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] text-gray-300">
                  Verified Reel
                </div>
              </div>

              {/* Reel Info */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <h4 className="text-sm font-medium text-white group-hover:text-[#E2C889] transition-colors line-clamp-1 mb-1">
                  {reel.title}
                </h4>
                <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed">
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video / Reel Preview Modal */}
        {activeReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative max-w-lg w-full bg-[#18181b] border border-[#C7A35B]/30 rounded-2xl overflow-hidden shadow-2xl p-6">
              <button
                type="button"
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[9/12] w-full rounded-xl overflow-hidden mb-5 bg-black">
                <img
                  src={activeReel.thumbnail}
                  alt={activeReel.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <a
                    href={activeReel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#C7A35B] hover:bg-[#E2C889] text-black text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors shadow-xl"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Watch Full Reel on Instagram</span>
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-serif text-white mb-2">
                {activeReel.title}
              </h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                {activeReel.caption}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-white/10">
                <span>Verified Account: {COMPANY_DETAILS.instagramHandle}</span>
                <a
                  href={COMPANY_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E2C889] hover:underline flex items-center gap-1"
                >
                  View Profile &rarr;
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
