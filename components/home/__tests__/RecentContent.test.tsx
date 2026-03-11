import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentContent } from '../RecentContent'
import { BlogPost } from '@/types/blog'
import { Project } from '@/types/project'
import { ChangelogEntry } from '@/types/changelog'

// Mock Framer Motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('RecentContent', () => {
  const mockBlogPosts: BlogPost[] = [
    {
      slug: 'post-1',
      title: 'First Blog Post',
      excerpt: 'This is the first post excerpt',
      date: '2024-01-15',
      tags: ['SQL', 'Data Analysis'],
      readingTime: 5,
      published: true,
    },
    {
      slug: 'post-2',
      title: 'Second Blog Post',
      excerpt: 'This is the second post excerpt',
      date: '2024-01-10',
      tags: ['Power BI'],
      readingTime: 8,
      published: true,
    },
    {
      slug: 'post-3',
      title: 'Third Blog Post',
      excerpt: 'This is the third post excerpt',
      date: '2024-01-05',
      tags: ['Career'],
      readingTime: 6,
      published: true,
    },
  ]

  const mockProjects: Project[] = [
    {
      slug: 'project-1',
      title: 'Credit Risk Analysis',
      description: 'Analyzing credit risk using SQL and Power BI',
      tools: ['SQL', 'Power BI'],
      date: '2024-01-20',
      featured: true,
      sections: [],
    },
    {
      slug: 'project-2',
      title: 'E-commerce Sales Analysis',
      description: 'Sales analysis for e-commerce platform',
      tools: ['SQL', 'Excel'],
      date: '2024-01-15',
      featured: true,
      sections: [],
    },
    {
      slug: 'project-3',
      title: 'Systems Performance Analysis',
      description: 'Performance monitoring and optimization',
      tools: ['Python', 'SQL'],
      date: '2024-01-10',
      featured: false,
      sections: [],
    },
  ]

  const mockChangelogEntries: ChangelogEntry[] = [
    {
      id: 'entry-1',
      date: '2024-01-25',
      title: 'Added new blog post',
      description: 'Published article about SQL optimization',
      type: 'content',
    },
    {
      id: 'entry-2',
      date: '2024-01-20',
      title: 'Improved performance',
      description: 'Optimized image loading',
      type: 'improvement',
    },
    {
      id: 'entry-3',
      date: '2024-01-15',
      title: 'New feature',
      description: 'Added dark mode toggle',
      type: 'feature',
    },
  ]

  describe('Blog content type', () => {
    it('renders blog section with correct title', () => {
      render(<RecentContent type="blog" items={mockBlogPosts} />)
      expect(screen.getByText('Recent Posts')).toBeInTheDocument()
    })

    it('displays "View All Posts" link', () => {
      render(<RecentContent type="blog" items={mockBlogPosts} />)
      const link = screen.getByText('View All Posts →')
      expect(link).toBeInTheDocument()
      expect(link.closest('a')).toHaveAttribute('href', '/blog')
    })

    it('displays exactly 3 blog posts', () => {
      render(<RecentContent type="blog" items={mockBlogPosts} />)
      expect(screen.getByText('First Blog Post')).toBeInTheDocument()
      expect(screen.getByText('Second Blog Post')).toBeInTheDocument()
      expect(screen.getByText('Third Blog Post')).toBeInTheDocument()
    })

    it('displays blog post metadata', () => {
      render(<RecentContent type="blog" items={mockBlogPosts} />)
      expect(screen.getByText('This is the first post excerpt')).toBeInTheDocument()
      expect(screen.getByText('5 min read')).toBeInTheDocument()
    })

    it('limits display to 3 items even with more items provided', () => {
      const manyPosts = [
        ...mockBlogPosts,
        {
          slug: 'post-4',
          title: 'Fourth Blog Post',
          excerpt: 'This should not appear',
          date: '2024-01-01',
          tags: [],
          readingTime: 4,
          published: true,
        },
      ]
      render(<RecentContent type="blog" items={manyPosts} />)
      expect(screen.queryByText('Fourth Blog Post')).not.toBeInTheDocument()
    })
  })

  describe('Projects content type', () => {
    it('renders projects section with correct title', () => {
      render(<RecentContent type="projects" items={mockProjects} />)
      expect(screen.getByText('Featured Projects')).toBeInTheDocument()
    })

    it('displays "View All Projects" link', () => {
      render(<RecentContent type="projects" items={mockProjects} />)
      const link = screen.getByText('View All Projects →')
      expect(link).toBeInTheDocument()
      expect(link.closest('a')).toHaveAttribute('href', '/projects')
    })

    it('displays exactly 3 projects', () => {
      render(<RecentContent type="projects" items={mockProjects} />)
      expect(screen.getByText('Credit Risk Analysis')).toBeInTheDocument()
      expect(screen.getByText('E-commerce Sales Analysis')).toBeInTheDocument()
      expect(screen.getByText('Systems Performance Analysis')).toBeInTheDocument()
    })

    it('displays project descriptions and tools', () => {
      render(<RecentContent type="projects" items={mockProjects} />)
      expect(screen.getByText('Analyzing credit risk using SQL and Power BI')).toBeInTheDocument()
    })
  })

  describe('Changelog content type', () => {
    it('renders changelog section with correct title', () => {
      render(<RecentContent type="changelog" items={mockChangelogEntries} />)
      expect(screen.getByText('Recent Updates')).toBeInTheDocument()
    })

    it('displays "View All Updates" link', () => {
      render(<RecentContent type="changelog" items={mockChangelogEntries} />)
      const link = screen.getByText('View All Updates →')
      expect(link).toBeInTheDocument()
      expect(link.closest('a')).toHaveAttribute('href', '/changelog')
    })

    it('displays exactly 3 changelog entries', () => {
      render(<RecentContent type="changelog" items={mockChangelogEntries} />)
      expect(screen.getByText('Added new blog post')).toBeInTheDocument()
      expect(screen.getByText('Improved performance')).toBeInTheDocument()
      expect(screen.getByText('New feature')).toBeInTheDocument()
    })

    it('displays changelog descriptions', () => {
      render(<RecentContent type="changelog" items={mockChangelogEntries} />)
      expect(screen.getByText('Published article about SQL optimization')).toBeInTheDocument()
    })
  })

  describe('Responsive layout', () => {
    it('applies responsive grid classes', () => {
      const { container } = render(<RecentContent type="blog" items={mockBlogPosts} />)
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3')
    })
  })

  describe('Accessibility', () => {
    it('uses semantic heading for section title', () => {
      render(<RecentContent type="blog" items={mockBlogPosts} />)
      const heading = screen.getByText('Recent Posts')
      expect(heading.tagName).toBe('H2')
    })

    it('view all link has proper focus styles', () => {
      render(<RecentContent type="blog" items={mockBlogPosts} />)
      const link = screen.getByText('View All Posts →')
      expect(link).toHaveClass('focus:outline-none', 'focus:ring-2')
    })
  })
})
