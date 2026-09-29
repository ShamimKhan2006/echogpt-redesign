'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
 * FadeIn Component - Smooth fade-in & slide-up/down/left/right scroll reveal
 */
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.55,
  direction = 'up',
  distance = 24,
  className = '',
  once = true,
  ...props
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Framer-style smooth cubic bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerContainer - Container for staggered child reveals
 */
export const StaggerContainer = ({
  children,
  delayChildren = 0.05,
  staggerChildren = 0.08,
  className = '',
  once = true,
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerItem - Item inside a StaggerContainer
 */
export const StaggerItem = ({
  children,
  direction = 'up',
  distance = 20,
  duration = 0.5,
  className = '',
  ...props
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directions[direction], scale: 0.98 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Floating - Continuous gentle floating animation (ambient)
 */
export const Floating = ({
  children,
  duration = 4,
  yOffset = 8,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollProgressBar - Sleek gradient progress indicator at the top of the viewport
 */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 z-[100] origin-left pointer-events-none shadow-[0_0_8px_rgba(168,85,247,0.6)]"
      style={{ scaleX }}
    />
  );
};

/**
 * MotionButton - Interactive button with smooth hover scale and active spring
 */
export const MotionButton = ({
  children,
  className = '',
  whileHover = { scale: 1.025 },
  whileTap = { scale: 0.975 },
  ...props
}) => {
  return (
    <motion.button
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};
