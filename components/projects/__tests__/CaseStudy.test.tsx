import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudy } from '../CaseStudy'
import type { Project } from '@/types/project'

describe('CaseStudy', () => {
  const mockProject: Project = {
    slug: 'test-project',
    title: 'Test Project',
    description: 'A test project description',
    tools: ['SQL', 'Power BI', 'Python'],
    date: '2024-01-15',
    featured: true,
    sections: [
      { title: 'Problem', content: '<p>Problem description</p>' },
      { title: 'Dataset', content: '<p>Dataset information</p>' },
      { title: 'Approach', content: '<p>Analysis approach</p>' },
      { title: 'Tools', content: '<p>Tools used</p>' },
      { title: 'Insights', content: '<p>Key insights</p>' },
      { title: 'Dashboard', content: '<p>Dashboard explanation</p>' },
      { title: 'Trade-offs', content: '<p>Trade-offs made</p>' },
      { title: 'Improvements', content: '<p>Potential improvements</p>' },
    ],
  }

  it('renders project title and description', () => {
    render(<CaseStudy project={mockProject} />)
    
    expect(screen.getByRole('heading', { name: 'Test Project', level: 1 })).toBeInTheDocument()
    expect(screen.getByText('A test project description')).toBeInTheDocument()
  })

  it('displays tool tags prominently', () => {
    render(<CaseStudy project={mockProject} />)
    
    expect(screen.getByText('SQL')).toBeInTheDocument()
    expect(screen.getByText('Power BI')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('renders all structured sections in correct order', () => {
    render(<CaseStudy project={mockProject} />)
    
    const sections = [
      'Problem',
      'Dataset',
      'Approach',
      'Tools',
      'Insights',
      'Dashboard',
      'Trade-offs',
      'Improvements',
    ]

    sections.forEach((sectionTitle) => {
      expect(screen.getByRole('heading', { name: sectionTitle, level: 2 })).toBeInTheDocument()
    })
  })

  it('displays dashboard image placeholder in Dashboard section', () => {
    render(<CaseStudy project={mockProject} />)
    
    expect(screen.getByText('Dashboard Screenshot')).toBeInTheDocument()
  })

  it('formats date correctly', () => {
    render(<CaseStudy project={mockProject} />)
    
    const timeElement = screen.getByText('January 2024')
    expect(timeElement).toBeInTheDocument()
    expect(timeElement.tagName).toBe('TIME')
  })

  it('skips sections that are not in the project', () => {
    const projectWithMissingSections: Project = {
      ...mockProject,
      sections: [
        { title: 'Problem', content: '<p>Problem description</p>' },
        { title: 'Insights', content: '<p>Key insights</p>' },
      ],
    }

    render(<CaseStudy project={projectWithMissingSections} />)
    
    expect(screen.getByRole('heading', { name: 'Problem', level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Insights', level: 2 })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Dataset', level: 2 })).not.toBeInTheDocument()
  })

  it('renders section content as HTML', () => {
    render(<CaseStudy project={mockProject} />)
    
    expect(screen.getByText('Problem description')).toBeInTheDocument()
    expect(screen.getByText('Dataset information')).toBeInTheDocument()
  })

  it('applies responsive layout classes', () => {
    const { container } = render(<CaseStudy project={mockProject} />)
    
    const article = container.querySelector('article')
    expect(article).toHaveClass('max-w-4xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')
  })

  it('handles project without date', () => {
    const projectWithoutDate: Project = {
      ...mockProject,
      date: '',
    }

    render(<CaseStudy project={projectWithoutDate} />)
    
    expect(screen.queryByRole('time')).not.toBeInTheDocument()
  })

  it('renders MDX content when sections are empty', () => {
    const projectWithContent: Project = {
      ...mockProject,
      sections: [],
      content: '<p>Full MDX content here</p>',
    }

    render(<CaseStudy project={projectWithContent} />)
    
    expect(screen.getByText('Full MDX content here')).toBeInTheDocument()
  })
})
