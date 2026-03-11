import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useScrollProgress } from '@/hooks/useScrollProgress'

describe('useScrollProgress', () => {
  // Mock window properties
  const mockScrollY = (value: number) => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value,
    })
  }

  const mockInnerHeight = (value: number) => {
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value,
    })
  }

  const mockScrollHeight = (value: number) => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      configurable: true,
      value,
    })
  }

  beforeEach(() => {
    // Reset mocks before each test
    mockScrollY(0)
    mockInnerHeight(800)
    mockScrollHeight(2000)
  })

  it('should return 0 progress when at the top of the page', () => {
    mockScrollY(0)
    mockInnerHeight(800)
    mockScrollHeight(2000)

    const { result } = renderHook(() => useScrollProgress())

    expect(result.current).toBe(0)
  })

  it('should return 100 progress when at the bottom of the page', () => {
    mockScrollY(1200) // scrollHeight (2000) - innerHeight (800) = 1200
    mockInnerHeight(800)
    mockScrollHeight(2000)

    const { result } = renderHook(() => useScrollProgress())

    expect(result.current).toBe(100)
  })

  it('should return 50 progress when scrolled halfway', () => {
    mockScrollY(600) // Half of scrollable height (1200)
    mockInnerHeight(800)
    mockScrollHeight(2000)

    const { result } = renderHook(() => useScrollProgress())

    expect(result.current).toBe(50)
  })

  it('should update progress when scroll event is triggered', () => {
    mockScrollY(0)
    mockInnerHeight(800)
    mockScrollHeight(2000)

    const { result } = renderHook(() => useScrollProgress())

    expect(result.current).toBe(0)

    // Simulate scrolling
    act(() => {
      mockScrollY(600)
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe(50)
  })

  it('should handle edge case when document height equals window height', () => {
    mockScrollY(0)
    mockInnerHeight(1000)
    mockScrollHeight(1000)

    const { result } = renderHook(() => useScrollProgress())

    expect(result.current).toBe(0)
  })

  it('should clamp progress between 0 and 100', () => {
    mockScrollY(-100) // Negative scroll (shouldn't happen but test clamping)
    mockInnerHeight(800)
    mockScrollHeight(2000)

    const { result } = renderHook(() => useScrollProgress())

    expect(result.current).toBeGreaterThanOrEqual(0)
    expect(result.current).toBeLessThanOrEqual(100)
  })

  it('should clean up event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

    const { unmount } = renderHook(() => useScrollProgress())

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
