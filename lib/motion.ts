/**
 * Motion configuration utilities for Framer Motion
 * Provides prefers-reduced-motion support and reusable animation variants
 */

import { Variants, Transition } from 'framer-motion'

/**
 * Check if user prefers reduced motion
 * This respects the user's system preference for accessibility
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  // Check if matchMedia is available (not available in some test environments)
  if (typeof window.matchMedia !== 'function') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get transition with reduced motion support
 * Returns instant transition if user prefers reduced motion
 */
export function getTransition(transition: Transition): Transition {
  if (prefersReducedMotion()) {
    return { duration: 0 }
  }
  return transition
}

/**
 * Page transition variants for route changes
 */
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
}

/**
 * Fade in animation variant
 */
export const fadeInVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

/**
 * Slide up animation variant
 */
export const slideUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

/**
 * Scale animation variant for hover effects
 */
export const scaleVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
  },
  tap: {
    scale: 0.98,
  },
}

/**
 * Stagger children animation
 */
export const staggerContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

/**
 * Default transition for smooth animations
 */
export const defaultTransition: Transition = {
  duration: 0.3,
  ease: 'easeOut',
}

/**
 * Spring transition for bouncy effects
 */
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}
