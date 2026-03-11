import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '../Header'
import { siteConfig } from '@/config/site'

// Mock next/navigation
const mockUsePathname = vi.fn(() => '/')
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}))

// Mock ThemeToggle component
vi.mock('@/components/ui/ThemeToggle', () => ({
  ThemeToggle: () => <button data-testid="theme-toggle">Theme Toggle</button>,
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the site name/logo', () => {
    render(<Header />)
    expect(screen.getByText(siteConfig.author.name)).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    siteConfig.navigation.forEach((item) => {
      const links = screen.getAllByText(item.name)
      expect(links.length).toBeGreaterThan(0)
    })
  })

  it('renders ThemeToggle component', () => {
    render(<Header />)
    const themeToggles = screen.getAllByTestId('theme-toggle')
    expect(themeToggles.length).toBeGreaterThan(0)
  })

  it('highlights active page', () => {
    mockUsePathname.mockReturnValue('/about')
    
    render(<Header />)
    const aboutLinks = screen.getAllByText('About')
    const activeLink = aboutLinks.find((link) =>
      link.className.includes('text-primary-600')
    )
    expect(activeLink).toBeDefined()
  })

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Header />)
    
    const menuButton = screen.getByLabelText('Open menu')
    expect(menuButton).toBeInTheDocument()
    
    fireEvent.click(menuButton)
    
    const closeButton = screen.getByLabelText('Close menu')
    expect(closeButton).toBeInTheDocument()
  })

  it('closes mobile menu when a navigation link is clicked', () => {
    render(<Header />)
    
    // Open mobile menu
    const menuButton = screen.getByLabelText('Open menu')
    fireEvent.click(menuButton)
    
    // Click a navigation link in mobile menu
    const mobileLinks = screen.getAllByText('About')
    const mobileLink = mobileLinks[mobileLinks.length - 1] // Get the mobile menu link
    fireEvent.click(mobileLink)
    
    // Menu should be closed
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('has proper ARIA attributes for accessibility', () => {
    render(<Header />)
    
    const menuButton = screen.getByLabelText('Open menu')
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveAttribute('type', 'button')
    
    fireEvent.click(menuButton)
    
    const closeButton = screen.getByLabelText('Close menu')
    expect(closeButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('applies sticky positioning classes', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header?.className).toContain('sticky')
    expect(header?.className).toContain('top-0')
  })

  it('has proper focus styles for keyboard navigation', () => {
    render(<Header />)
    const logoLink = screen.getByText(siteConfig.author.name)
    expect(logoLink.className).toContain('focus:outline-none')
    expect(logoLink.className).toContain('focus:ring-2')
  })

  it('renders skip-to-content link for accessibility', () => {
    render(<Header />)
    const skipLink = screen.getByText('Skip to main content')
    expect(skipLink).toBeInTheDocument()
    expect(skipLink).toHaveAttribute('href', '#main-content')
    expect(skipLink.className).toContain('sr-only')
  })
})
