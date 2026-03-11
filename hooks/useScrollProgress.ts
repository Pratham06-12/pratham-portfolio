'use client'

import { useEffect, useState } from 'react'

/**
 * Custom hook to track scroll position and calculate reading progress
 * @returns progress percentage (0-100) representing how far the user has scrolled through the page
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      // Calculate how much of the page has been scrolled
      const scrollableHeight = documentHeight - windowHeight
      const scrollPercentage = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0

      setProgress(Math.min(100, Math.max(0, scrollPercentage)))
    }

    // Calculate initial progress
    calculateProgress()

    // Update progress on scroll with passive listener for better performance
    window.addEventListener('scroll', calculateProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', calculateProgress)
    }
  }, [])

  return progress
}
