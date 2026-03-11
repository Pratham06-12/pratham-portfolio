import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import ScrollProgress from '../ScrollProgress'

describe('ScrollProgress', () => {
  beforeEach(() => {
    // Mock window dimensions
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 1000,
    })

    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      configurable: true,
      value: 3000,
    })

    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders progress bar with correct ARIA attributes', () => {
    render(<ScrollProgress />)

    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toBeInTheDocument()
    expect(progressBar).toHaveAttribute('aria-label', 'Reading progress')
    expect(progressBar).toHaveAttribute('aria-valuemin', '0')
    expect(progressBar).toHaveAttribute('aria-valuemax', '100')
  })

  it('applies fixed positioning and z-index classes', () => {
    render(<ScrollProgress />)

    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50')
  })

  it('applies custom className when provided', () => {
    render(<ScrollProgress className="custom-class" />)

    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toHaveClass('custom-class')
  })

  it('initializes with 0% progress at top of page', () => {
    render(<ScrollProgress />)

    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toHaveAttribute('aria-valuenow', '0')
  })

  it('has smooth transition animation on progress bar', () => {
    render(<ScrollProgress />)

    const progressBar = screen.getByRole('progressbar')
    const progressFill = progressBar.querySelector('div')

    expect(progressFill).toHaveClass('transition-all', 'duration-150', 'ease-out')
  })

  it('uses appropriate colors for light and dark themes', () => {
    render(<ScrollProgress />)

    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toHaveClass('bg-gray-200', 'dark:bg-gray-800')

    const progressFill = progressBar.querySelector('div')
    expect(progressFill).toHaveClass('bg-blue-600', 'dark:bg-blue-400')
  })
})
