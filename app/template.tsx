'use client'

import { PageTransition } from '@/components/providers/PageTransition'

/**
 * Template component wraps all pages with transition animations
 * This is a Next.js App Router feature that re-renders on navigation
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}
