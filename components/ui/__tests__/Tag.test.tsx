import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tag } from '../Tag'

describe('Tag Component', () => {
  describe('Basic Rendering', () => {
    it('renders children correctly', () => {
      render(<Tag>Test Tag</Tag>)
      expect(screen.getByText('Test Tag')).toBeInTheDocument()
    })

    it('renders as a span element', () => {
      const { container } = render(<Tag>Test</Tag>)
      expect(container.querySelector('span')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('applies blog variant styles', () => {
      const { container } = render(<Tag variant="blog">Blog Tag</Tag>)
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('bg-blue-100', 'text-blue-700')
    })

    it('applies tool variant styles', () => {
      const { container } = render(<Tag variant="tool">Tool Tag</Tag>)
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('bg-purple-100', 'text-purple-700')
    })

    it('applies proficiency variant styles', () => {
      const { container } = render(
        <Tag variant="proficiency">Proficiency Tag</Tag>
      )
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('bg-green-100', 'text-green-700')
    })

    it('applies default variant styles when no variant specified', () => {
      const { container } = render(<Tag>Default Tag</Tag>)
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('bg-slate-100', 'text-slate-700')
    })
  })

  describe('Sizes', () => {
    it('applies small size styles', () => {
      const { container } = render(<Tag size="sm">Small</Tag>)
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('px-2', 'py-0.5', 'text-xs')
    })

    it('applies medium size styles by default', () => {
      const { container } = render(<Tag>Medium</Tag>)
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('px-2.5', 'py-1', 'text-sm')
    })

    it('applies large size styles', () => {
      const { container } = render(<Tag size="lg">Large</Tag>)
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('px-3', 'py-1.5', 'text-base')
    })
  })

  describe('Custom Styling', () => {
    it('accepts custom className', () => {
      const { container } = render(
        <Tag className="custom-class">Custom</Tag>
      )
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('custom-class')
    })

    it('preserves base styles with custom className', () => {
      const { container } = render(
        <Tag className="custom-class">Custom</Tag>
      )
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('inline-flex', 'items-center', 'custom-class')
    })
  })

  describe('HTML Attributes', () => {
    it('accepts and applies HTML span attributes', () => {
      render(
        <Tag data-testid="test-tag" aria-label="Test Label">
          Test
        </Tag>
      )
      const tag = screen.getByTestId('test-tag')
      expect(tag).toHaveAttribute('aria-label', 'Test Label')
    })

    it('accepts onClick handler', () => {
      let clicked = false
      render(<Tag onClick={() => (clicked = true)}>Clickable</Tag>)
      const tag = screen.getByText('Clickable')
      tag.click()
      expect(clicked).toBe(true)
    })
  })

  describe('Combination of Props', () => {
    it('combines variant and size correctly', () => {
      const { container } = render(
        <Tag variant="blog" size="lg">
          Large Blog Tag
        </Tag>
      )
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('bg-blue-100', 'text-blue-700')
      expect(tag).toHaveClass('px-3', 'py-1.5', 'text-base')
    })

    it('combines all props correctly', () => {
      const { container } = render(
        <Tag
          variant="tool"
          size="sm"
          className="hover:scale-105"
          data-testid="combo-tag"
        >
          Combo Tag
        </Tag>
      )
      const tag = container.querySelector('span')
      expect(tag).toHaveClass('bg-purple-100', 'text-purple-700')
      expect(tag).toHaveClass('px-2', 'py-0.5', 'text-xs')
      expect(tag).toHaveClass('hover:scale-105')
      expect(tag).toHaveAttribute('data-testid', 'combo-tag')
    })
  })

  describe('Edge Cases', () => {
    it('renders with empty string children', () => {
      const { container } = render(<Tag>{''}</Tag>)
      expect(container.querySelector('span')).toBeInTheDocument()
    })

    it('renders with numeric children', () => {
      render(<Tag>{123}</Tag>)
      expect(screen.getByText('123')).toBeInTheDocument()
    })

    it('renders with multiple children', () => {
      render(
        <Tag>
          <span>Part 1</span>
          <span>Part 2</span>
        </Tag>
      )
      expect(screen.getByText('Part 1')).toBeInTheDocument()
      expect(screen.getByText('Part 2')).toBeInTheDocument()
    })
  })
})
