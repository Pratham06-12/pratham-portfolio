import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogList } from '../BlogList'
import { BlogPost } from '@/types/blog'

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(() => ({
    get: vi.fn(() => null),
  })),
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

const mockPosts: BlogPost[] = [
  {
    slug: 'test-post-1',
    title: 'Test Post 1',
    date: '2024-01-15',
    excerpt: 'This is a test post excerpt',
    tags: ['SQL', 'Data Analysis'],
    readingTime: 5,
    published: true,
  },
  {
    slug: 'test-post-2',
    title: 'Test Post 2',
    date: '2024-01-10',
    excerpt: 'Another test post excerpt',
    tags: ['Power BI', 'Career'],
    readingTime: 8,
    published: true,
  },
]

describe('BlogList', () => {
  it('renders all posts when no tag filter is applied', () => {
    render(<BlogList posts={mockPosts} />)
    
    expect(screen.getByText('Test Post 1')).toBeInTheDocument()
    expect(screen.getByText('Test Post 2')).toBeInTheDocument()
  })

  it('displays "No posts found" when posts array is empty', () => {
    render(<BlogList posts={[]} />)
    
    expect(screen.getByText(/No posts found/i)).toBeInTheDocument()
  })

  it('renders posts in a grid layout', () => {
    const { container } = render(<BlogList posts={mockPosts} />)
    
    const grid = container.querySelector('.grid')
    expect(grid).toBeInTheDocument()
    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3')
  })
})
