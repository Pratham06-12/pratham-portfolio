import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '../ThemeToggle'
import { ThemeContext, type ThemeContextType } from '@/hooks/useTheme'

describe('ThemeToggle', () => {
  const mockToggleTheme = vi.fn()
  const mockSetTheme = vi.fn()

  const createMockThemeContext = (theme: 'light' | 'dark'): ThemeContextType => ({
    theme,
    toggleTheme: mockToggleTheme,
    setTheme: mockSetTheme,
  })

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders with light theme icon', () => {
    const mockContext = createMockThemeContext('light')
    
    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle />
      </ThemeContext.Provider>
    )

    const button = screen.getByRole('button', { name: /switch to dark mode/i })
    expect(button).toBeInTheDocument()
  })

  it('renders with dark theme icon', () => {
    const mockContext = createMockThemeContext('dark')
    
    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle />
      </ThemeContext.Provider>
    )

    const button = screen.getByRole('button', { name: /switch to light mode/i })
    expect(button).toBeInTheDocument()
  })

  it('calls toggleTheme when clicked', () => {
    const mockContext = createMockThemeContext('light')
    
    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle />
      </ThemeContext.Provider>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockToggleTheme).toHaveBeenCalledTimes(1)
  })

  it('has correct ARIA label for light theme', () => {
    const mockContext = createMockThemeContext('light')
    
    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle />
      </ThemeContext.Provider>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')
  })

  it('has correct ARIA label for dark theme', () => {
    const mockContext = createMockThemeContext('dark')
    
    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle />
      </ThemeContext.Provider>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode')
  })

  it('applies custom className', () => {
    const mockContext = createMockThemeContext('light')
    
    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle className="custom-class" />
      </ThemeContext.Provider>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('has focus styles for accessibility', () => {
    const mockContext = createMockThemeContext('light')
    
    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle />
      </ThemeContext.Provider>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-primary-500')
  })
})
