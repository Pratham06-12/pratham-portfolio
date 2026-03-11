import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('type', 'button')
    })

    it('renders children correctly', () => {
      render(<Button>Test Content</Button>)
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Button className="custom-class">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })
  })

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      render(<Button>Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-primary-500')
    })

    it('renders secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-slate-100')
    })

    it('renders outline variant', () => {
      render(<Button variant="outline">Outline</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border-2')
    })
  })

  describe('Sizes', () => {
    it('renders medium size by default', () => {
      render(<Button>Medium</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-4', 'py-2')
    })

    it('renders small size', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-3', 'py-1.5', 'text-sm')
    })

    it('renders large size', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-6', 'py-3', 'text-lg')
    })
  })

  describe('Full Width', () => {
    it('renders full width when specified', () => {
      render(<Button fullWidth>Full Width</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('w-full')
    })

    it('does not render full width by default', () => {
      render(<Button>Normal Width</Button>)
      const button = screen.getByRole('button')
      expect(button).not.toHaveClass('w-full')
    })
  })

  describe('Disabled State', () => {
    it('renders disabled button', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
    })

    it('does not trigger onClick when disabled', () => {
      const handleClick = vi.fn()
      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>
      )
      const button = screen.getByRole('button')
      fireEvent.click(button)
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Interactions', () => {
    it('handles click events', () => {
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Click me</Button>)
      const button = screen.getByRole('button')
      fireEvent.click(button)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('handles multiple clicks', () => {
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Click me</Button>)
      const button = screen.getByRole('button')
      fireEvent.click(button)
      fireEvent.click(button)
      fireEvent.click(button)
      expect(handleClick).toHaveBeenCalledTimes(3)
    })
  })

  describe('Keyboard Support', () => {
    it('can be focused with keyboard', () => {
      render(<Button>Focusable</Button>)
      const button = screen.getByRole('button')
      button.focus()
      expect(button).toHaveFocus()
    })

    it('is a native button element that supports keyboard activation', () => {
      render(<Button onClick={vi.fn()}>Press Enter or Space</Button>)
      const button = screen.getByRole('button')
      // Native button elements automatically handle Enter and Space key activation
      expect(button.tagName).toBe('BUTTON')
      expect(button).not.toHaveAttribute('role') // Should use native semantics
    })

    it('has visible focus indicator', () => {
      render(<Button>Focus me</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus:ring-2')
    })

    it('maintains focus ring offset for better visibility', () => {
      render(<Button>Focus me</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus:ring-offset-2')
    })
  })

  describe('Accessibility', () => {
    it('has correct button role', () => {
      render(<Button>Accessible</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('supports aria-label', () => {
      render(<Button aria-label="Custom label">Icon</Button>)
      expect(screen.getByLabelText('Custom label')).toBeInTheDocument()
    })

    it('supports aria-describedby', () => {
      render(
        <>
          <Button aria-describedby="description">Button</Button>
          <div id="description">Button description</div>
        </>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-describedby', 'description')
    })

    it('applies focus styles for keyboard navigation', () => {
      render(<Button>Focus Styles</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2')
    })
  })

  describe('Type Attribute', () => {
    it('defaults to button type', () => {
      render(<Button>Default Type</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'button')
    })

    it('supports submit type', () => {
      render(<Button type="submit">Submit</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
    })

    it('supports reset type', () => {
      render(<Button type="reset">Reset</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'reset')
    })
  })

  describe('Ref Forwarding', () => {
    it('forwards ref to button element', () => {
      const ref = { current: null }
      render(<Button ref={ref}>With Ref</Button>)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })
  })

  describe('Hover States', () => {
    it('has hover styles for primary variant', () => {
      render(<Button variant="primary">Hover me</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('hover:bg-primary-600')
    })

    it('has hover styles for secondary variant', () => {
      render(<Button variant="secondary">Hover me</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('hover:bg-slate-200')
    })

    it('has hover styles for outline variant', () => {
      render(<Button variant="outline">Hover me</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('hover:bg-slate-50')
    })
  })

  describe('Focus States', () => {
    it('has focus ring for primary variant', () => {
      render(<Button variant="primary">Focus me</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus:ring-primary-500')
    })

    it('has focus ring for secondary variant', () => {
      render(<Button variant="secondary">Focus me</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus:ring-slate-500')
    })

    it('has focus ring for outline variant', () => {
      render(<Button variant="outline">Focus me</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus:ring-slate-500')
    })
  })
})
