'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'

interface ScrollProgressProps {
  className?: string
}

export default function ScrollProgress({ className = '' }: ScrollProgressProps) {
  const progress = useScrollProgress()

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50 ${className}`}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
