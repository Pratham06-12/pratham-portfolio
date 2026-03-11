/**
 * Button Component Usage Examples
 * 
 * This file demonstrates the various ways to use the Button component.
 * It's not meant to be imported, but serves as documentation.
 */

import { Button } from './Button'

export function ButtonExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Variants */}
      <section>
        <h2 className="text-xl font-bold mb-4">Variants</h2>
        <div className="flex gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-bold mb-4">Sizes</h2>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Disabled State */}
      <section>
        <h2 className="text-xl font-bold mb-4">Disabled State</h2>
        <div className="flex gap-4">
          <Button disabled variant="primary">
            Disabled Primary
          </Button>
          <Button disabled variant="secondary">
            Disabled Secondary
          </Button>
          <Button disabled variant="outline">
            Disabled Outline
          </Button>
        </div>
      </section>

      {/* Full Width */}
      <section>
        <h2 className="text-xl font-bold mb-4">Full Width</h2>
        <Button fullWidth variant="primary">
          Full Width Button
        </Button>
      </section>

      {/* With Click Handler */}
      <section>
        <h2 className="text-xl font-bold mb-4">Interactive</h2>
        <Button
          variant="primary"
          onClick={() => alert('Button clicked!')}
        >
          Click Me
        </Button>
      </section>

      {/* With ARIA Labels */}
      <section>
        <h2 className="text-xl font-bold mb-4">Accessibility</h2>
        <Button
          variant="primary"
          aria-label="Close dialog"
          aria-describedby="close-description"
        >
          ×
        </Button>
        <p id="close-description" className="text-sm text-slate-600 mt-2">
          This button closes the current dialog
        </p>
      </section>

      {/* Form Buttons */}
      <section>
        <h2 className="text-xl font-bold mb-4">Form Buttons</h2>
        <form className="space-y-4">
          <div className="flex gap-4">
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </div>
        </form>
      </section>
    </div>
  )
}
