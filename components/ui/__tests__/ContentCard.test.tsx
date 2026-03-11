import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContentCard } from '../ContentCard'

describe('ContentCard', () => {
  it('renders blog card with all props', () => {
    render(
      <ContentCard
        title="Test Blog Post"
        description="This is a test description"
        date="2024-01-15"
        tags={['SQL', 'Data Analysis']}
        href="/blog/test-post"
        readingTime={5}
        type="blog"
      />
    )

    expect(screen.getByText('Test Blog Post')).toBeInTheDocument()
    expect(screen.getByText('This is a test description')).toBeInTheDocument()
    expect(screen.getByText('Jan 15, 2024')).toBeInTheDocument()
    expect(screen.getByText('5 min read')).toBeInTheDocument()
    expect(screen.getByText('SQL')).toBeInTheDocument()
    expect(screen.getByText('Data Analysis')).toBeInTheDocument()
  })

  it('renders project card with tools', () => {
    render(
      <ContentCard
        title="Test Project"
        description="A test project description"
        date="2024-02-20"
        tags={['Power BI', 'Python']}
        href="/projects/test-project"
        type="project"
      />
    )

    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project description')).toBeInTheDocument()
    expect(screen.getByText('Power BI')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('renders changelog card without href', () => {
    render(
      <ContentCard
        title="New Feature Added"
        description="Added dark mode support"
        date="2024-03-10"
        type="changelog"
      />
    )

    expect(screen.getByText('New Feature Added')).toBeInTheDocument()
    expect(screen.getByText('Added dark mode support')).toBeInTheDocument()
    expect(screen.getByText('Mar 10, 2024')).toBeInTheDocument()
  })

  it('renders without optional props', () => {
    render(
      <ContentCard
        title="Minimal Card"
        description="Just title and description"
        type="blog"
      />
    )

    expect(screen.getByText('Minimal Card')).toBeInTheDocument()
    expect(screen.getByText('Just title and description')).toBeInTheDocument()
  })

  it('does not show reading time for non-blog types', () => {
    render(
      <ContentCard
        title="Project Card"
        description="Project description"
        readingTime={5}
        type="project"
      />
    )

    expect(screen.queryByText('5 min read')).not.toBeInTheDocument()
  })

  it('renders with image', () => {
    render(
      <ContentCard
        title="Card with Image"
        description="Has an image"
        image="/test-image.jpg"
        type="blog"
      />
    )

    const image = screen.getByAltText('Card with Image')
    expect(image).toBeInTheDocument()
  })

  it('creates accessible link when href is provided', () => {
    render(
      <ContentCard
        title="Linked Card"
        description="This card is linked"
        href="/test-link"
        type="blog"
      />
    )

    const link = screen.getByRole('link', { name: /read more about linked card/i })
    expect(link).toHaveAttribute('href', '/test-link')
  })

  it('does not create link when href is not provided', () => {
    render(
      <ContentCard
        title="Non-linked Card"
        description="This card is not linked"
        type="changelog"
      />
    )

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('formats date correctly', () => {
    render(
      <ContentCard
        title="Date Test"
        description="Testing date format"
        date="2024-12-25"
        type="blog"
      />
    )

    expect(screen.getByText('Dec 25, 2024')).toBeInTheDocument()
  })

  it('applies correct tag variant for blog type', () => {
    render(
      <ContentCard
        title="Blog Card"
        description="Blog description"
        tags={['Test Tag']}
        type="blog"
      />
    )

    const tag = screen.getByText('Test Tag')
    expect(tag).toHaveClass('bg-blue-100')
  })

  it('applies correct tag variant for project type', () => {
    render(
      <ContentCard
        title="Project Card"
        description="Project description"
        tags={['Test Tool']}
        type="project"
      />
    )

    const tag = screen.getByText('Test Tool')
    expect(tag).toHaveClass('bg-purple-100')
  })

  it('truncates long descriptions with line-clamp', () => {
    render(
      <ContentCard
        title="Long Description"
        description="This is a very long description that should be truncated after three lines to maintain consistent card heights across the grid layout"
        type="blog"
      />
    )

    const description = screen.getByText(/This is a very long description/)
    expect(description).toHaveClass('line-clamp-3')
  })

  it('truncates long titles with line-clamp', () => {
    render(
      <ContentCard
        title="This is a very long title that should be truncated after two lines"
        description="Description"
        type="blog"
      />
    )

    const title = screen.getByText(/This is a very long title/)
    expect(title).toHaveClass('line-clamp-2')
  })
})
