import React, { useEffect, useRef } from 'react';

interface UnicornEffectProps {
  projectId?: string;
  className?: string;
}

/**
 * Unicorn Studio Atmospheric Background Effect
 * 
 * Provides an isolated decorative gold-light accent.
 * When a verified Unicorn Studio Project ID is supplied, it loads the official Unicorn Studio embed script.
 * When not supplied, it renders an ambient luxury gold-light canvas with soft radial caustics and subtle shimmer.
 */
export const UnicornEffect: React.FC<UnicornEffectProps> = ({ projectId, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // If a valid Unicorn Studio Project ID is provided, dynamically load their client SDK
    if (projectId && typeof window !== 'undefined') {
      const scriptId = 'unicorn-studio-sdk';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://cdn.unicorn.studio/v1.3.2/unicornStudio.umd.js';
        script.async = true;
        document.body.appendChild(script);
      }
      return;
    }

    // High-performance static/subtle animated fallback for ambient gold lighting
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Soft ambient gold caustic glow
      const cx = width * 0.75 + Math.sin(time * 0.001) * 30;
      const cy = height * 0.35 + Math.cos(time * 0.0012) * 20;

      const gradient = ctx.createRadialGradient(cx, cy, 10, cx, cy, width * 0.6);
      gradient.addColorStop(0, 'rgba(199, 163, 91, 0.12)');
      gradient.addColorStop(0.5, 'rgba(199, 163, 91, 0.03)');
      gradient.addColorStop(1, 'rgba(11, 11, 12, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Secondary soft gold fill in bottom left
      const cx2 = width * 0.2 + Math.cos(time * 0.0008) * 20;
      const cy2 = height * 0.85;
      const gradient2 = ctx.createRadialGradient(cx2, cy2, 5, cx2, cy2, width * 0.4);
      gradient2.addColorStop(0, 'rgba(226, 200, 137, 0.08)');
      gradient2.addColorStop(1, 'rgba(11, 11, 12, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        time += 16;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [projectId]);

  if (projectId) {
    return (
      <div 
        data-us-project={projectId} 
        className={`absolute inset-0 pointer-events-none opacity-40 mix-blend-screen ${className}`} 
        aria-hidden="true" 
      />
    );
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80" />
    </div>
  );
};
