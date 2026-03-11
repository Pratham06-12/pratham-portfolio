import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Timeline } from '../Timeline'
import type { TimelineEvent } from '@/types/site'

const mockEvents: TimelineEvent[] = [
  {
    id: 'event-1',
    date: '2021-08',
    title: 'Started B.Tech in Electronics Engineering',
    description: 'Began undergraduate studies in Electronics Engineering.',
    type: 'education',
    location: 'Bengaluru, India',
  },
  {
    id: 'event-2',
    date: '2023-06',
    title: 'Systems Engineering Intern',
    description: 'Worked on systems engineering projects.',
    type: 'work',
    location: 'Bengaluru, India',
  },
  {
    id: 'event-3',
    date: '2023-11',
    title: 'Credit Risk Analysis Project',
    description: 'Built comprehensive credit risk analysis system.',
    type: 'project',
  },
]

describe('Timeline', () => {
  it('renders all timeline events', () => {
    render(<Timeline events={mockEvents} />)

    expect(
      screen.getByText('Started B.Tech in Electronics Engineering')
    ).toBeInTheDocument()
    expect(screen.getByText('Systems Engineering Intern')).toBeInTheDocument()
    expect(
      screen.getByText('Credit Risk Analysis Project')
    ).toBeInTheDocument()
  })

  it('displays event descriptions', () => {
    render(<Timeline events={mockEvents} />)

    expect(
      screen.getByText('Began undergraduate studies in Electronics Engineering.')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Worked on systems engineering projects.')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Built comprehensive credit risk analysis system.')
    ).toBeInTheDocument()
  })

  it('displays formatted dates', () => {
    render(<Timeline events={mockEvents} />)

    expect(screen.getByText('August 2021')).toBeInTheDocument()
    expect(screen.getByText('June 2023')).toBeInTheDocument()
    expect(screen.getByText('November 2023')).toBeInTheDocument()
  })

  it('displays locations when provided', () => {
    render(<Timeline events={mockEvents} />)

    const locations = screen.getAllByText('Bengaluru, India')
    expect(locations).toHaveLength(2)
  })

  it('handles events without location', () => {
    render(<Timeline events={mockEvents} />)

    // Third event has no location, should still render
    expect(
      screen.getByText('Credit Risk Analysis Project')
    ).toBeInTheDocument()
  })

  it('renders empty timeline when no events provided', () => {
    const { container } = render(<Timeline events={[]} />)

    // Should render the timeline container but no events
    expect(container.querySelector('.space-y-8')).toBeInTheDocument()
    expect(container.querySelectorAll('[role="time"]')).toHaveLength(0)
  })

  it('applies correct icon colors for different event types', () => {
    const { container } = render(<Timeline events={mockEvents} />)

    // Check for education (blue), work (green), and project (purple) color classes
    const icons = container.querySelectorAll('.rounded-full')
    expect(icons[0]).toHaveClass('bg-blue-500')
    expect(icons[1]).toHaveClass('bg-green-500')
    expect(icons[2]).toHaveClass('bg-purple-500')
  })

  it('renders with proper semantic HTML structure', () => {
    render(<Timeline events={mockEvents} />)

    // Check for time elements
    const timeElements = screen.getAllByRole('time')
    expect(timeElements).toHaveLength(3)

    // Check for headings
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(3)
  })

  it('handles single event', () => {
    const singleEvent: TimelineEvent[] = [mockEvents[0]]
    render(<Timeline events={singleEvent} />)

    expect(
      screen.getByText('Started B.Tech in Electronics Engineering')
    ).toBeInTheDocument()
    expect(screen.getByText('August 2021')).toBeInTheDocument()
  })
})
