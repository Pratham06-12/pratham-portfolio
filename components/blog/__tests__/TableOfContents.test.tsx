import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TableOfContents, { Heading } from '../TableOfContents'

describe('TableOfContents', () => {
  const mockHeadings: Heading[] = [
    { id: 'introduction', text: 'Introduction', level: 2 },
    { id: 'getting-started', text: 'Getting Started', level: 2 },
    { id: 'installation', text: 'Installation', level: 3 },
    { id: 'configuration', text: 'Configuration', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 2 },
  ]

  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }))

    // Mock scrollTo
    window.scrollTo = vi.fn() as any

    // Mock getElementById
    document.getElementById = vi.fn((id) => {
      return {
        id,
        getBoundingClientRect: () => ({ top: 100 }),
      } as any
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders table of contents with headings', () => {
    render(<TableOfContents headings={mockHeadings} />)

    expect(screen.getByText('On This Page')).toBeInTheDocument()
    expect(screen.getByText('Introduction')).toBeInTheDocument()
    expect(screen.getByText('Getting Started')).toBeInTheDocument()
    expect(screen.getByText('Installation')).toBeInTheDocument()
    expect(screen.getByText('Configuration')).toBeInTheDocument()
    expect(screen.getByText('Conclusion')).toBeInTheDocument()
  })

  it('returns null when no headings provided', () => {
    const { container } = render(<TableOfContents headings={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('applies correct indentation for level 3 headings', () => {
    render(<TableOfContents headings={mockHeadings} />)

    const installationItem = screen.getByText('Installation').closest('li')
    const introductionItem = screen.getByText('Introduction').closest('li')

    expect(installationItem).toHaveClass('pl-4')
    expect(introductionItem).not.toHaveClass('pl-4')
  })

  it('handles click on heading link', () => {
    render(<TableOfContents headings={mockHeadings} />)

    const link = screen.getByText('Introduction')
    fireEvent.click(link)

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    })
  })

  it('has correct accessibility attributes', () => {
    render(<TableOfContents headings={mockHeadings} />)

    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAttribute('aria-label', 'Table of contents')
  })

  it('is hidden on mobile and visible on desktop', () => {
    const { container } = render(<TableOfContents headings={mockHeadings} />)

    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('hidden', 'lg:block')
  })

  it('has sticky positioning', () => {
    const { container } = render(<TableOfContents headings={mockHeadings} />)

    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('sticky', 'top-24')
  })

  it('renders all heading links with correct href', () => {
    render(<TableOfContents headings={mockHeadings} />)

    mockHeadings.forEach((heading) => {
      const link = screen.getByText(heading.text)
      expect(link).toHaveAttribute('href', `#${heading.id}`)
    })
  })
})
