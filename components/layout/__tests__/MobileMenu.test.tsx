import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MobileMenu } from '../MobileMenu'

describe('MobileMenu', () => {
  const mockOnClose = vi.fn()
  const mockItems = [
    { name: 'Home', href: '/', isActive: true },
    { name: 'About', href: '/about', isActive: false },
    { name: 'Blog', href: '/blog', isActive: false },
  ]

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  afterEach(() => {
    // Clean up body overflow style
    document.body.style.overflow = ''
  })

  it('renders nothing when isOpen is false', () => {
    const { container } = render(
      <MobileMenu isOpen={false} onClose={mockOnClose} items={mockItems} />
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders menu when isOpen is true', () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile navigation menu')).toBeInTheDocument()
  })

  it('displays all navigation items', () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('highlights active navigation item', () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    const homeLink = screen.getByText('Home').closest('a')
    expect(homeLink).toHaveClass('bg-primary-50', 'text-primary-600')
  })

  it('calls onClose when close button is clicked', () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    const closeButton = screen.getByLabelText('Close menu')
    fireEvent.click(closeButton)
    
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    const backdrop = screen.getByRole('dialog').previousSibling as HTMLElement
    fireEvent.click(backdrop)
    
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when navigation link is clicked', () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    const aboutLink = screen.getByText('About')
    fireEvent.click(aboutLink)
    
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape key is pressed', () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    fireEvent.keyDown(document, { key: 'Escape' })
    
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('prevents body scroll when menu is open', () => {
    const { rerender } = render(
      <MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />
    )
    
    expect(document.body.style.overflow).toBe('hidden')
    
    rerender(<MobileMenu isOpen={false} onClose={mockOnClose} items={mockItems} />)
    
    waitFor(() => {
      expect(document.body.style.overflow).toBe('')
    })
  })

  it('has accessible close button with aria-label', () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    const closeButton = screen.getByLabelText('Close menu')
    expect(closeButton).toHaveAttribute('type', 'button')
  })

  it('has proper ARIA attributes for dialog', () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-label', 'Mobile navigation menu')
  })

  it('renders navigation links with correct hrefs', () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    const homeLink = screen.getByText('Home').closest('a')
    const aboutLink = screen.getByText('About').closest('a')
    const blogLink = screen.getByText('Blog').closest('a')
    
    expect(homeLink).toHaveAttribute('href', '/')
    expect(aboutLink).toHaveAttribute('href', '/about')
    expect(blogLink).toHaveAttribute('href', '/blog')
  })

  it('focuses close button when menu opens', async () => {
    render(<MobileMenu isOpen={true} onClose={mockOnClose} items={mockItems} />)
    
    await waitFor(() => {
      const closeButton = screen.getByLabelText('Close menu')
      expect(document.activeElement).toBe(closeButton)
    })
  })
})
