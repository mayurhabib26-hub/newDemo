import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
}

/**
 * Reusable scroll-reveal wrapper using Framer Motion's whileInView.
 * Wraps any content with a smooth fade + slide-in animation triggered when entering the viewport.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 36,
  duration = 0.65,
  once = true,
}) => {
  const axisMap = {
    up:    { y: distance,  x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { y: 0, x: distance  },
    right: { y: 0, x: -distance },
    none:  { y: 0, x: 0         },
  };

  const { x, y } = axisMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
