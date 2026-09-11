import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UnicornEffect } from './UnicornEffect';

interface BrandIntroProps {
  onComplete: () => void;
  logoSrc?: string;
  unicornProjectId?: string;
}

/**
 * Timing constants in milliseconds
 * Sequence planned for 2.0s total, capped at 2.5s maximum safety window.
 */
const TIMINGS = {
  STAGE_1_GLOW: 50,       // Opening warm ambient glow
  STAGE_2_LOGO: 300,      // Logo opacity and subtle scale entrance (300ms - 1000ms)
  STAGE_3_SWEEP: 850,     // Gold light sweep across emblem & line expansion (850ms - 1450ms)
  STAGE_4_EXIT: 1650,     // Settle and upward slide transition (1650ms - 2200ms)
  MAX_SAFETY_CAP: 2500,   // Hard maximum cutoff
};

export const BrandIntro: React.FC<BrandIntroProps> = ({
  onComplete,
  logoSrc = '/images/MPC_logo.jpeg',
  unicornProjectId,
}) => {
  const [phase, setPhase] = useState<'opening' | 'logo' | 'sweep' | 'exit' | 'done'>('opening');
  const [isDismissed, setIsDismissed] = useState(false);
  const hasCompletedRef = useRef(false);

  // Safe dismiss handler that triggers onComplete once and restores scrolling
  const dismissIntro = useCallback(() => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    setIsDismissed(true);

    // Unlock body scrolling
    document.body.style.overflow = '';

    onComplete();
  }, [onComplete]);

  // Main animation timeline orchestration
  useEffect(() => {
    // Check reduced motion preference immediately
    try {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        dismissIntro();
        return;
      }
    } catch {
      // Proceed if matchMedia is unavailable
    }

    // Lock body scroll during intro
    document.body.style.overflow = 'hidden';

    // Keyboard listener for Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismissIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Timed choreography phases
    const t1 = setTimeout(() => setPhase('logo'), TIMINGS.STAGE_2_LOGO);
    const t2 = setTimeout(() => setPhase('sweep'), TIMINGS.STAGE_3_SWEEP);
    const t3 = setTimeout(() => setPhase('exit'), TIMINGS.STAGE_4_EXIT);

    // Hard safety timeout: guaranteed dismiss by MAX_SAFETY_CAP
    const safetyCap = setTimeout(() => {
      dismissIntro();
    }, TIMINGS.MAX_SAFETY_CAP);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(safetyCap);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [dismissIntro]);

  return (
    <AnimatePresence onExitComplete={dismissIntro}>
      {!isDismissed && (
        <motion.aside
          key="brand-intro-overlay"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: phase === 'exit' ? '-100%' : 0,
            opacity: 1,
          }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1], // Architectural luxury easeInOut
            },
          }}
          transition={{
            duration: 0.65,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] bg-[#080808] flex flex-col items-center justify-center select-none overflow-hidden"
          style={{ height: '100dvh' }}
          role="dialog"
          aria-modal="true"
          aria-label="Master Property Care Introduction"
        >
          {/* Accessible announcement for screen readers */}
          <div className="sr-only" role="status" aria-live="polite">
            Master Property Care. Renovation and property enhancement across the Greater Toronto Area.
          </div>


          {/* Background Ambient Gold Light Layer */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {unicornProjectId ? (
              <UnicornEffect projectId={unicornProjectId} className="opacity-30" />
            ) : (
              <div className="relative w-full h-full">
                {/* Central soft warm radial glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: phase === 'exit' ? 0 : 0.6,
                    scale: 1,
                  }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] rounded-full bg-gradient-radial from-[#C7A35B]/15 via-[#C7A35B]/04 to-transparent blur-2xl pointer-events-none"
                />

                {/* Subtle vignette darkening towards edges */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#080808]/50 to-[#080808] pointer-events-none" />
              </div>
            )}
          </div>

          {/* Central Logo & Brand Reveal Anchor */}
          <div className="relative z-10 flex flex-col items-center justify-center max-w-sm px-6 text-center">
            {/* Logo Emblem Container with circular framing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: phase !== 'opening' ? 1 : 0,
                scale: phase !== 'opening' ? 1 : 0.96,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1], // Restrained, no bounce
              }}
              className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden p-1 bg-gradient-to-b from-[#C7A35B]/30 via-black/80 to-[#C7A35B]/10 shadow-[0_0_50px_rgba(199,163,91,0.12)] border border-[#C7A35B]/40"
            >
              {/* Authentic Logo Image */}
              <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center relative">
                <img
                  src={logoSrc}
                  alt="Master Property Care Emblem"
                  className="w-full h-full object-cover transform scale-110"
                  loading="eager"
                  aria-hidden="true"
                />

                {/* Gold Light Sweep Accent Effect (Restrained 800ms - 1400ms) */}
                {phase === 'sweep' && (
                  <motion.div
                    initial={{ x: '-120%', opacity: 0 }}
                    animate={{ x: '160%', opacity: [0, 0.7, 0.8, 0] }}
                    transition={{
                      duration: 0.75,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E2C889]/35 to-transparent skew-x-[-20deg] pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                {/* Subtle dark gradient overlay inside badge for depth */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.85)] pointer-events-none" />
              </div>
            </motion.div>

            {/* Subtitle & Fine Decorative Accent Line */}
            <div className="mt-6 flex flex-col items-center w-full">
              {/* Expanding Fine Gold Line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: phase === 'sweep' || phase === 'exit' ? 1 : 0,
                  opacity: phase === 'sweep' || phase === 'exit' ? 1 : 0,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-24 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#C7A35B] to-transparent origin-center mb-3"
                aria-hidden="true"
              />

              {/* Discreet Architectural Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{
                  opacity: phase === 'sweep' || phase === 'exit' ? 1 : 0,
                  y: phase === 'sweep' || phase === 'exit' ? 0 : 4,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: 'easeOut',
                }}
                className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#E2C889] font-medium font-sans"
              >
                Renovation &amp; Property Care
              </motion.div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
