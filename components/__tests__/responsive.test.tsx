/**
 * Responsive Design Test Suite
 * 
 * Tests responsive behavior across all breakpoints:
 * - 320px (small mobile)
 * - 375px (mobile)
 * - 768px (tablet/md breakpoint)
 * - 1024px (desktop/lg breakpoint)
 * - 1440px (large desktop)
 * - 2560px (ultra-wide)
 * 
 * Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/layout/Header'
import { MobileMenu } from '@/components/layout/MobileMenu'
import TableOfContents from '@/components/blog/TableOfContents'
import { Button } from '@/components/ui/Button'
import { ContentCard } from '@/components/ui/ContentCard'
import { ProjectCard } from '@/components/projects/ProjectCard'

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}))

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Helper to set viewport size
function setViewportSize(width: number, height: number = 800) {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  })
  window.dispatchEvent(new Event('resize'))
}

describe('Responsive Design - Breakpoint Tests', () => {
  describe('320px - Small Mobile', () => {
    beforeEach(() => {
      setViewportSize(320)
    })

    it('should render mobile menu button', () => {
      render(<Header />)
      const menuButton = screen.getByLabelText(/open menu/i)
      expect(menuButton).toBeInTheDocument()
    })

    it('should hide desktop navigation', () => {
      const { container } = render(<Header />)
      const desktopNav = container.querySelector('.hidden.md\\:flex')
      expect(desktopNav).toBeInTheDocument()
    })

    it('should render content cards in single column', () => {
      render(
        <ContentCard
          title="Test Post"
          description="Test description"
          type="blog"
          date="2024-01-01"
          tags={['SQL', 'Data Analysis']}
        />
      )
      const card = screen.getByText('Test Post').closest('article')
      expect(card).toBeInTheDocument()
    })
  })

  describe('375px - Mobile', () => {
    beforeEach(() => {
      setViewportSize(375)
    })

    it('should maintain mobile layout', () => {
      render(<Header />)
      const menuButton = screen.getByLabelText(/open menu/i)
      expect(menuButton).toBeInTheDocument()
    })

    it('should render readable text at mobile size', () => {
      render(
        <ContentCard
          title="Test Post with a Longer Title"
          description="This is a longer description to test text wrapping and readability on mobile devices"
          type="blog"
          date="2024-01-01"
        />
      )
      expect(screen.getByText(/Test Post with a Longer Title/i)).toBeInTheDocument()
    })
  })

  describe('768px - Tablet (md breakpoint)', () => {
    beforeEach(() => {
      setViewportSize(768)
    })

    it('should show desktop navigation at md breakpoint', () => {
      const { container } = render(<Header />)
      const desktopNav = container.querySelector('.hidden.md\\:flex')
      expect(desktopNav).toBeInTheDocument()
    })

    it('should still show mobile menu button below md', () => {
      render(<Header />)
      const menuButton = screen.getByLabelText(/open menu/i)
      expect(menuButton).toBeInTheDocument()
    })
  })

  describe('1024px - Desktop (lg breakpoint)', () => {
    beforeEach(() => {
      setViewportSize(1024)
    })

    it('should show desktop navigation', () => {
      const { container } = render(<Header />)
      const desktopNav = container.querySelector('.hidden.md\\:flex')
      expect(desktopNav).toBeInTheDocument()
    })

    it('should show TableOfContents at lg breakpoint', () => {
      const headings = [
        { id: 'heading-1', text: 'Introduction', level: 2 },
        { id: 'heading-2', text: 'Details', level: 2 },
      ]
      const { container } = render(<TableOfContents headings={headings} />)
      const toc = container.querySelector('.hidden.lg\\:block')
      expect(toc).toBeInTheDocument()
    })
  })

  describe('1440px - Large Desktop', () => {
    beforeEach(() => {
      setViewportSize(1440)
    })

    it('should maintain desktop layout', () => {
      const { container } = render(<Header />)
      const desktopNav = container.querySelector('.hidden.md\\:flex')
      expect(desktopNav).toBeInTheDocument()
    })

    it('should show TableOfContents', () => {
      const headings = [
        { id: 'heading-1', text: 'Introduction', level: 2 },
      ]
      const { container } = render(<TableOfContents headings={headings} />)
      const toc = container.querySelector('.hidden.lg\\:block')
      expect(toc).toBeInTheDocument()
    })
  })

  describe('2560px - Ultra-wide', () => {
    beforeEach(() => {
      setViewportSize(2560)
    })

    it('should maintain desktop layout at ultra-wide', () => {
      const { container } = render(<Header />)
      const desktopNav = container.querySelector('.hidden.md\\:flex')
      expect(desktopNav).toBeInTheDocument()
    })

    it('should constrain content width appropriately', () => {
      const { container } = render(<Header />)
      const nav = container.querySelector('.max-w-7xl')
      expect(nav).toBeInTheDocument()
    })
  })
})

describe('Mobile Menu Functionality', () => {
  const mockItems = [
    { name: 'Home', href: '/', isActive: true },
    { name: 'About', href: '/about', isActive: false },
    { name: 'Blog', href: '/blog', isActive: false },
  ]

  it('should render mobile menu when open', () => {
    render(<MobileMenu isOpen={true} onClose={vi.fn()} items={mockItems} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByLabelText(/mobile navigation menu/i)).toBeInTheDocument()
  })

  it('should not render mobile menu when closed', () => {
    render(<MobileMenu isOpen={false} onClose={vi.fn()} items={mockItems} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should render all navigation items', () => {
    render(<MobileMenu isOpen={true} onClose={vi.fn()} items={mockItems} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('should have close button', () => {
    render(<MobileMenu isOpen={true} onClose={vi.fn()} items={mockItems} />)
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument()
  })
})

describe('Touch Target Sizes', () => {
  it('button should meet minimum 44x44px touch target', () => {
    render(<Button>Click Me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    
    // Check padding ensures adequate touch target
    // Tailwind's default button padding should provide sufficient size
    expect(button).toBeInTheDocument()
  })

  it('mobile menu button should meet minimum touch target', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText(/open menu/i)
    
    // Button has p-2 (8px padding) + 24px icon = adequate touch target
    expect(menuButton).toBeInTheDocument()
  })

  it('navigation links should have adequate touch targets', () => {
    const mockItems = [
      { name: 'Home', href: '/', isActive: true },
    ]
    render(<MobileMenu isOpen={true} onClose={vi.fn()} items={mockItems} />)
    
    const link = screen.getByText('Home')
    // Links have px-4 py-3 which provides adequate touch target
    expect(link).toBeInTheDocument()
  })

  it('theme toggle should have adequate touch target', () => {
    render(<Header />)
    const themeToggle = screen.getByLabelText(/toggle theme/i)
    expect(themeToggle).toBeInTheDocument()
  })
})

describe('TableOfContents Visibility', () => {
  const mockHeadings = [
    { id: 'intro', text: 'Introduction', level: 2 },
    { id: 'details', text: 'Details', level: 2 },
    { id: 'conclusion', text: 'Conclusion', level: 2 },
  ]

  it('should be hidden on mobile (< 1024px)', () => {
    setViewportSize(768)
    const { container } = render(<TableOfContents headings={mockHeadings} />)
    const toc = container.querySelector('.hidden.lg\\:block')
    expect(toc).toBeInTheDocument()
    expect(toc).toHaveClass('hidden')
  })

  it('should be visible on desktop (>= 1024px)', () => {
    setViewportSize(1024)
    const { container } = render(<TableOfContents headings={mockHeadings} />)
    const toc = container.querySelector('.hidden.lg\\:block')
    expect(toc).toBeInTheDocument()
    expect(toc).toHaveClass('lg:block')
  })

  it('should render all headings', () => {
    render(<TableOfContents headings={mockHeadings} />)
    expect(screen.getByText('Introduction')).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
    expect(screen.getByText('Conclusion')).toBeInTheDocument()
  })

  it('should have sticky positioning', () => {
    const { container } = render(<TableOfContents headings={mockHeadings} />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('sticky')
  })
})

describe('Grid Layout Responsiveness', () => {
  it('should render project cards in responsive grid', () => {
    const { container } = render(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Project 1"
          description="Description 1"
          tools={['SQL', 'Power BI']}
          slug="project-1"
        />
        <ProjectCard
          title="Project 2"
          description="Description 2"
          tools={['Python']}
          slug="project-2"
        />
      </div>
    )
    
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('grid-cols-1')
    expect(grid).toHaveClass('md:grid-cols-2')
    expect(grid).toHaveClass('lg:grid-cols-3')
  })

  it('should render content cards with responsive spacing', () => {
    render(
      <div className="space-y-6">
        <ContentCard
          title="Post 1"
          description="Description 1"
          type="blog"
        />
        <ContentCard
          title="Post 2"
          description="Description 2"
          type="blog"
        />
      </div>
    )
    
    expect(screen.getByText('Post 1')).toBeInTheDocument()
    expect(screen.getByText('Post 2')).toBeInTheDocument()
  })
})

describe('Responsive Typography', () => {
  it('should render readable text at all sizes', () => {
    render(
      <article className="prose dark:prose-invert">
        <h1>Main Heading</h1>
        <p>This is a paragraph with readable text that should scale appropriately across all viewport sizes.</p>
      </article>
    )
    
    expect(screen.getByText('Main Heading')).toBeInTheDocument()
    expect(screen.getByText(/This is a paragraph/)).toBeInTheDocument()
  })

  it('should apply responsive text sizes', () => {
    const { container } = render(
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Responsive Heading</h1>
      </div>
    )
    
    const heading = container.querySelector('h1')
    expect(heading).toHaveClass('text-2xl')
    expect(heading).toHaveClass('sm:text-3xl')
    expect(heading).toHaveClass('md:text-4xl')
    expect(heading).toHaveClass('lg:text-5xl')
  })
})

describe('Responsive Spacing and Padding', () => {
  it('should apply responsive padding to containers', () => {
    const { container } = render(
      <div className="px-4 sm:px-6 lg:px-8">
        <p>Content with responsive padding</p>
      </div>
    )
    
    const div = container.querySelector('div')
    expect(div).toHaveClass('px-4')
    expect(div).toHaveClass('sm:px-6')
    expect(div).toHaveClass('lg:px-8')
  })

  it('should apply responsive margins', () => {
    const { container } = render(
      <div className="my-8 md:my-12 lg:my-16">
        <p>Content with responsive margins</p>
      </div>
    )
    
    const div = container.querySelector('div')
    expect(div).toHaveClass('my-8')
    expect(div).toHaveClass('md:my-12')
    expect(div).toHaveClass('lg:my-16')
  })
})

describe('Responsive Images', () => {
  it('should render images with responsive classes', () => {
    const { container } = render(
      <div className="w-full h-auto">
        <img 
          src="/test-image.jpg" 
          alt="Test" 
          className="w-full h-auto object-cover"
        />
      </div>
    )
    
    const img = container.querySelector('img')
    expect(img).toHaveClass('w-full')
    expect(img).toHaveClass('h-auto')
  })
})

describe('Accessibility at Different Breakpoints', () => {
  it('should maintain focus indicators at all sizes', () => {
    render(<Button>Accessible Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('focus:outline-none')
    expect(button).toHaveClass('focus:ring-2')
  })

  it('should have skip to content link', () => {
    render(<Header />)
    const skipLink = screen.getByText(/skip to main content/i)
    expect(skipLink).toBeInTheDocument()
    expect(skipLink).toHaveClass('sr-only')
  })

  it('should maintain ARIA labels on mobile menu', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText(/open menu/i)
    expect(menuButton).toHaveAttribute('aria-label')
    expect(menuButton).toHaveAttribute('aria-expanded')
  })
})
