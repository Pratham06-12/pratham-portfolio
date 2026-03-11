import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import type { Tool } from '@/types/project'

describe('ProjectCard', () => {
  const mockProps = {
    title: 'Credit Risk Analysis',
    description:
      'Built a comprehensive credit risk assessment model using SQL and Power BI to analyze loan default patterns.',
    tools: ['SQL', 'Power BI', 'Excel'] as Tool[],
    slug: 'credit-risk-analysis',
    date: '2024-01-15',
  }

  it('renders project title', () => {
    render(<ProjectCard {...mockProps} />)
    expect(screen.getByText('Credit Risk Analysis')).toBeInTheDocument()
  })

  it('renders project description', () => {
    render(<ProjectCard {...mockProps} />)
    expect(
      screen.getByText(/Built a comprehensive credit risk assessment model/)
    ).toBeInTheDocument()
  })

  it('renders all tool tags', () => {
    render(<ProjectCard {...mockProps} />)
    expect(screen.getByText('SQL')).toBeInTheDocument()
    expect(screen.getByText('Power BI')).toBeInTheDocument()
    expect(screen.getByText('Excel')).toBeInTheDocument()
  })

  it('renders date when provided', () => {
    render(<ProjectCard {...mockProps} />)
    expect(screen.getByText('Jan 2024')).toBeInTheDocument()
  })

  it('does not render date when not provided', () => {
    const { container } = render(
      <ProjectCard {...mockProps} date={undefined} />
    )
    expect(container.querySelector('time')).not.toBeInTheDocument()
  })

  it('links to correct project page', () => {
    render(<ProjectCard {...mockProps} />)
    const link = screen.getByRole('link', {
      name: /View case study for Credit Risk Analysis/i,
    })
    expect(link).toHaveAttribute('href', '/projects/credit-risk-analysis')
  })

  it('has accessible link label', () => {
    render(<ProjectCard {...mockProps} />)
    expect(
      screen.getByLabelText('View case study for Credit Risk Analysis')
    ).toBeInTheDocument()
  })

  it('renders with multiple tools', () => {
    const propsWithManyTools = {
      ...mockProps,
      tools: ['SQL', 'Power BI', 'Python', 'Excel', 'Tableau'] as Tool[],
    }
    render(<ProjectCard {...propsWithManyTools} />)
    expect(screen.getByText('SQL')).toBeInTheDocument()
    expect(screen.getByText('Power BI')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('Excel')).toBeInTheDocument()
    expect(screen.getByText('Tableau')).toBeInTheDocument()
  })

  it('truncates long descriptions', () => {
    const longDescription =
      'This is a very long description that should be truncated after three lines. '.repeat(
        10
      )
    render(<ProjectCard {...mockProps} description={longDescription} />)
    const description = screen.getByText(longDescription)
    expect(description).toHaveClass('line-clamp-3')
  })

  it('truncates long titles', () => {
    const longTitle =
      'This is a very long project title that should be truncated after two lines'
    render(<ProjectCard {...mockProps} title={longTitle} />)
    const title = screen.getByText(longTitle)
    expect(title).toHaveClass('line-clamp-2')
  })
})
