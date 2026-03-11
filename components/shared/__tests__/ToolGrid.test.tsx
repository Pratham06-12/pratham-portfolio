import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ToolGrid } from '../ToolGrid'
import type { ToolCategory } from '@/types/site'

const mockCategories: ToolCategory[] = [
  {
    name: 'Data Tools',
    tools: [
      {
        name: 'Power BI',
        description:
          'Creating interactive dashboards, data modeling, DAX calculations, and visual storytelling for business insights.',
        proficiency: 'proficient',
      },
      {
        name: 'Tableau',
        description:
          'Building visualizations and dashboards for data exploration and presentation.',
        proficiency: 'intermediate',
      },
      {
        name: 'Excel',
        description:
          'Advanced formulas, pivot tables, data cleaning, and analysis for quick insights and reporting.',
        proficiency: 'proficient',
      },
    ],
  },
  {
    name: 'Programming',
    tools: [
      {
        name: 'SQL',
        description:
          'Writing complex queries, joins, subqueries, CTEs, and window functions for data extraction and transformation.',
        proficiency: 'proficient',
      },
      {
        name: 'Python',
        description:
          'Basic data analysis with pandas, data cleaning, and automation scripts. Currently expanding skills.',
        proficiency: 'learning',
      },
    ],
  },
  {
    name: 'Databases',
    tools: [
      {
        name: 'MySQL',
        description:
          'Querying relational databases, understanding schema design, and optimizing query performance.',
        proficiency: 'intermediate',
      },
    ],
  },
]

describe('ToolGrid', () => {
  it('renders all category headings', () => {
    render(<ToolGrid categories={mockCategories} />)

    expect(screen.getByText('Data Tools')).toBeInTheDocument()
    expect(screen.getByText('Programming')).toBeInTheDocument()
    expect(screen.getByText('Databases')).toBeInTheDocument()
  })

  it('renders all tool names', () => {
    render(<ToolGrid categories={mockCategories} />)

    expect(screen.getByText('Power BI')).toBeInTheDocument()
    expect(screen.getByText('Tableau')).toBeInTheDocument()
    expect(screen.getByText('Excel')).toBeInTheDocument()
    expect(screen.getByText('SQL')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('MySQL')).toBeInTheDocument()
  })

  it('displays tool descriptions', () => {
    render(<ToolGrid categories={mockCategories} />)

    expect(
      screen.getByText(/Creating interactive dashboards/)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Building visualizations and dashboards/)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Basic data analysis with pandas/)
    ).toBeInTheDocument()
  })

  it('displays proficiency levels correctly', () => {
    render(<ToolGrid categories={mockCategories} />)

    // Count proficiency badges
    const proficientBadges = screen.getAllByText('Proficient')
    const intermediateBadges = screen.getAllByText('Intermediate')
    const learningBadges = screen.getAllByText('Learning')

    expect(proficientBadges).toHaveLength(3) // Power BI, Excel, SQL
    expect(intermediateBadges).toHaveLength(2) // Tableau, MySQL
    expect(learningBadges).toHaveLength(1) // Python
  })

  it('applies correct proficiency colors', () => {
    const { container } = render(<ToolGrid categories={mockCategories} />)

    // Check for proficiency color classes
    const proficientBadges = container.querySelectorAll('.bg-green-100')
    const intermediateBadges = container.querySelectorAll('.bg-blue-100')
    const learningBadges = container.querySelectorAll('.bg-amber-100')

    expect(proficientBadges.length).toBeGreaterThan(0)
    expect(intermediateBadges.length).toBeGreaterThan(0)
    expect(learningBadges.length).toBeGreaterThan(0)
  })

  it('renders with proper semantic HTML structure', () => {
    render(<ToolGrid categories={mockCategories} />)

    // Check for category headings (h2)
    const categoryHeadings = screen.getAllByRole('heading', { level: 2 })
    expect(categoryHeadings).toHaveLength(3)

    // Check for tool headings (h3)
    const toolHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(toolHeadings).toHaveLength(6)
  })

  it('handles empty categories array', () => {
    const { container } = render(<ToolGrid categories={[]} />)

    // Should render the container but no categories
    expect(container.querySelector('.space-y-12')).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
  })

  it('handles category with no tools', () => {
    const emptyCategory: ToolCategory[] = [
      {
        name: 'Empty Category',
        tools: [],
      },
    ]

    render(<ToolGrid categories={emptyCategory} />)

    expect(screen.getByText('Empty Category')).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument()
  })

  it('handles single category with single tool', () => {
    const singleCategory: ToolCategory[] = [
      {
        name: 'Single Category',
        tools: [
          {
            name: 'Single Tool',
            description: 'A single tool description.',
            proficiency: 'intermediate',
          },
        ],
      },
    ]

    render(<ToolGrid categories={singleCategory} />)

    expect(screen.getByText('Single Category')).toBeInTheDocument()
    expect(screen.getByText('Single Tool')).toBeInTheDocument()
    expect(screen.getByText('A single tool description.')).toBeInTheDocument()
    expect(screen.getByText('Intermediate')).toBeInTheDocument()
  })

  it('includes accessibility labels for proficiency levels', () => {
    render(<ToolGrid categories={mockCategories} />)

    // Check for aria-label on proficiency badges (multiple instances expected)
    const proficientLabels = screen.getAllByLabelText('Proficiency level: Proficient')
    const intermediateLabels = screen.getAllByLabelText('Proficiency level: Intermediate')
    const learningLabels = screen.getAllByLabelText('Proficiency level: Learning')

    expect(proficientLabels).toHaveLength(3) // Power BI, Excel, SQL
    expect(intermediateLabels).toHaveLength(2) // Tableau, MySQL
    expect(learningLabels).toHaveLength(1) // Python
  })

  it('renders tool icon when provided', () => {
    const categoryWithIcon: ToolCategory[] = [
      {
        name: 'Tools with Icons',
        tools: [
          {
            name: 'Tool with Icon',
            description: 'A tool with an icon.',
            proficiency: 'proficient',
            icon: '🔧',
          },
        ],
      },
    ]

    render(<ToolGrid categories={categoryWithIcon} />)

    expect(screen.getByText('🔧')).toBeInTheDocument()
  })

  it('handles tools without icons', () => {
    render(<ToolGrid categories={mockCategories} />)

    // Most tools don't have icons, should still render properly
    expect(screen.getByText('Power BI')).toBeInTheDocument()
    expect(screen.getByText('SQL')).toBeInTheDocument()
  })

  it('groups tools by category correctly', () => {
    const { container } = render(<ToolGrid categories={mockCategories} />)

    // Check that we have 3 sections (one per category)
    const sections = container.querySelectorAll('section')
    expect(sections).toHaveLength(3)
  })

  it('applies responsive grid layout classes', () => {
    const { container } = render(<ToolGrid categories={mockCategories} />)

    // Check for responsive grid classes
    const grids = container.querySelectorAll('.grid')
    expect(grids.length).toBeGreaterThan(0)

    // Check for responsive column classes
    const gridElement = grids[0]
    expect(gridElement).toHaveClass('grid-cols-1')
    expect(gridElement).toHaveClass('md:grid-cols-2')
    expect(gridElement).toHaveClass('lg:grid-cols-3')
  })
})
