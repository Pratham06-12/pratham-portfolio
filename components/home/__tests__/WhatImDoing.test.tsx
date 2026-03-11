import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WhatImDoing } from '../WhatImDoing'

describe('WhatImDoing', () => {
  it('renders the section heading', () => {
    render(<WhatImDoing />)
    expect(
      screen.getByRole('heading', { name: /what i'm doing now/i, level: 2 })
    ).toBeInTheDocument()
  })

  it('renders the section description', () => {
    render(<WhatImDoing />)
    expect(
      screen.getByText(/here's what's keeping me busy these days/i)
    ).toBeInTheDocument()
  })

  it('displays exactly 3 activities', () => {
    render(<WhatImDoing />)
    const activityTitles = [
      'Building Data Projects',
      'Learning SQL & Power BI',
      'Transitioning to Analytics',
    ]

    activityTitles.forEach((title) => {
      expect(screen.getByRole('heading', { name: title, level: 3 })).toBeInTheDocument()
    })
  })

  it('displays activity descriptions', () => {
    render(<WhatImDoing />)
    expect(
      screen.getByText(/working on real-world analytics projects/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/deepening my skills in sql query optimization/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/making the shift from electronics engineering/i)
    ).toBeInTheDocument()
  })

  it('uses a responsive grid layout', () => {
    const { container } = render(<WhatImDoing />)
    const grid = container.querySelector('.grid')
    expect(grid).toBeInTheDocument()
    expect(grid).toHaveClass('sm:grid-cols-2')
    expect(grid).toHaveClass('lg:grid-cols-3')
  })

  it('renders as a section element', () => {
    const { container } = render(<WhatImDoing />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })
})
