import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from '../Footer'
import { siteConfig } from '@/config/site'

describe('Footer', () => {
  it('renders contact information with clickable links', () => {
    render(<Footer />)

    // Check email link
    const emailLink = screen.getByRole('link', { name: new RegExp(siteConfig.author.email) })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', `mailto:${siteConfig.author.email}`)

    // Check phone link
    const phoneLink = screen.getByRole('link', { name: new RegExp(siteConfig.author.phone) })
    expect(phoneLink).toBeInTheDocument()
    expect(phoneLink).toHaveAttribute('href', `tel:${siteConfig.author.phone}`)

    // Check location (not a link)
    expect(screen.getByText(siteConfig.author.location)).toBeInTheDocument()
  })

  it('renders social links with correct attributes', () => {
    render(<Footer />)

    // Check GitHub link
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', siteConfig.author.github)
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Check LinkedIn link
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', siteConfig.author.linkedin)
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('displays copyright notice with current year', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    const copyrightText = `© ${currentYear} ${siteConfig.author.name}. All rights reserved.`
    
    expect(screen.getByText(copyrightText)).toBeInTheDocument()
  })

  it('displays author title and description', () => {
    render(<Footer />)

    expect(screen.getByText(siteConfig.author.title)).toBeInTheDocument()
    expect(screen.getByText(/showcasing data analysis projects/i)).toBeInTheDocument()
  })

  it('has proper section headings', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /connect/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
  })

  it('renders all contact icons', () => {
    const { container } = render(<Footer />)

    // Check for SVG icons (email, phone, location, github, linkedin)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(5)
  })
})
