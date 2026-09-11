import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Initial Framing / Demo',
  afterLabel = 'Completed Transformation',
  title,
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      setSliderPosition(0);
    } else if (e.key === 'End') {
      setSliderPosition(100);
    }
  };

  return (
    <div className={`relative flex flex-col ${className}`}>
      {title && (
        <div className="flex items-center justify-between mb-3 text-xs tracking-wider uppercase text-gray-400">
          <span className="text-[#C7A35B] font-medium">{title}</span>
          <span className="flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Drag or use arrow keys
          </span>
        </div>
      )}

      <div
        ref={containerRef}
        className="relative w-full h-[360px] sm:h-[450px] lg:h-[520px] rounded-xl overflow-hidden cursor-ew-resize select-none border border-[#C7A35B]/30 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#C7A35B]"
        tabIndex={0}
        role="slider"
        aria-label="Before and after transformation slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
        onMouseDown={(e) => {
          setIsDragging(true);
          updatePosition(e.clientX);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      >
        {/* AFTER Image (Full background layer) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-[#0B0B0C]/80 backdrop-blur-md border border-[#C7A35B]/40 text-[#E2C889] text-xs font-medium tracking-wide">
          {afterLabel}
        </div>

        {/* BEFORE Image (Clipped layer) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#0B0B0C]/80 backdrop-blur-md border border-white/20 text-gray-200 text-xs font-medium tracking-wide">
            {beforeLabel}
          </div>
        </div>

        {/* Divider Bar */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-[#C7A35B] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Grab Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0B0B0C] border-2 border-[#C7A35B] shadow-xl flex items-center justify-center text-[#E2C889] pointer-events-auto">
            <div className="flex items-center gap-0.5">
              <div className="w-0.5 h-3 bg-[#C7A35B] rounded" />
              <div className="w-0.5 h-3 bg-[#E2C889] rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
