'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { pageVariants, defaultTransition, prefersReducedMotion } from '@/lib/motion'

interface PageTransitionProps {
  children: React.ReactNode
}

/**
 * PageTransition component wraps page content with smooth transitions
 * Respects prefers-reduced-motion user preference
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const shouldReduceMotion = prefersReducedMotion()

  // If user prefers reduced motion, skip animations
  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={defaultTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
