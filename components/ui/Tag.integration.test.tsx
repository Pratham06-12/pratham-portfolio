/**
 * Integration test to verify Tag component works with real use cases
 */
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tag } from './Tag'

describe('Tag Integration Tests', () => {
  it('renders blog tags as they would appear in a blog post', () => {
    const tags = ['SQL', 'Data Analysis', 'Learning']
    
    render(
      <div>
        {tags.map((tag) => (
          <Tag key={tag} variant="blog" size="sm">
            {tag}
          </Tag>
        ))}
      </div>
    )

    expect(screen.getByText('SQL')).toBeInTheDocument()
    expect(screen.getByText('Data Analysis')).toBeInTheDocument()
    expect(screen.getByText('Learning')).toBeInTheDocument()
  })

  it('renders tool badges as they would appear in a project card', () => {
    const tools = ['Power BI', 'SQL', 'Python']
    
    render(
      <div>
        {tools.map((tool) => (
          <Tag key={tool} variant="tool" size="md">
            {tool}
          </Tag>
        ))}
      </div>
    )

    expect(screen.getByText('Power BI')).toBeInTheDocument()
    expect(screen.getByText('SQL')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('renders proficiency levels as they would appear in toolbox', () => {
    render(
      <div>
        <Tag variant="proficiency" size="sm">
          Proficient
        </Tag>
        <Tag variant="proficiency" size="sm">
          Intermediate
        </Tag>
        <Tag variant="proficiency" size="sm">
          Learning
        </Tag>
      </div>
    )

    expect(screen.getByText('Proficient')).toBeInTheDocument()
    expect(screen.getByText('Intermediate')).toBeInTheDocument()
    expect(screen.getByText('Learning')).toBeInTheDocument()
  })

  it('supports responsive sizing for different screen contexts', () => {
    const { container } = render(
      <div>
        <Tag size="sm" variant="blog">
          Mobile
        </Tag>
        <Tag size="md" variant="blog">
          Tablet
        </Tag>
        <Tag size="lg" variant="blog">
          Desktop
        </Tag>
      </div>
    )

    const tags = container.querySelectorAll('span')
    expect(tags[0]).toHaveClass('text-xs')
    expect(tags[1]).toHaveClass('text-sm')
    expect(tags[2]).toHaveClass('text-base')
  })

  it('maintains accessibility with proper semantic HTML', () => {
    render(
      <Tag variant="blog" aria-label="SQL programming language tag">
        SQL
      </Tag>
    )

    const tag = screen.getByText('SQL')
    expect(tag.tagName).toBe('SPAN')
    expect(tag).toHaveAttribute('aria-label', 'SQL programming language tag')
  })
})
