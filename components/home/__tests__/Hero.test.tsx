import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'

describe('Hero', () => {
  it('renders the greeting', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /hey, i'm pratham/i })).toBeInTheDocument()
  })

  it('displays the positioning statement', () => {
    render(<Hero />)
    expect(screen.getByText(/data analyst \| sql • power bi • analytics/i)).toBeInTheDocument()
  })

  it('displays the introduction paragraphs', () => {
    render(<Hero />)
    
    // Check for key phrases from each paragraph
    expect(screen.getByText(/final-year electronics engineering student/i)).toBeInTheDocument()
    expect(screen.getByText(/analyzing credit risk/i)).toBeInTheDocument()
    expect(screen.getByText(/this site is where i share/i)).toBeInTheDocument()
  })

  it('renders as a section element', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('contains conversational first-person content', () => {
    render(<Hero />)
    
    // Verify conversational tone with first-person pronouns
    const content = screen.getByText(/i'm a final-year/i)
    expect(content).toBeInTheDocument()
    expect(content.textContent).toMatch(/I'm|I love|I work/)
  })
})
