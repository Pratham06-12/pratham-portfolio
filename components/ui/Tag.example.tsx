/**
 * Tag Component Usage Examples
 *
 * This file demonstrates the various ways to use the Tag component.
 * It's not meant to be imported, but serves as documentation.
 */

import { Tag } from './Tag'

export function TagExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Variants - Different color schemes for different tag types */}
      <section>
        <h2 className="text-xl font-bold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-2">
          <Tag variant="blog">SQL</Tag>
          <Tag variant="blog">Data Analysis</Tag>
          <Tag variant="blog">Learning</Tag>
          <Tag variant="tool">Power BI</Tag>
          <Tag variant="tool">Python</Tag>
          <Tag variant="tool">Excel</Tag>
          <Tag variant="proficiency">Proficient</Tag>
          <Tag variant="proficiency">Intermediate</Tag>
          <Tag variant="proficiency">Learning</Tag>
          <Tag variant="default">Default</Tag>
        </div>
      </section>

      {/* Sizes - Responsive sizing */}
      <section>
        <h2 className="text-xl font-bold mb-4">Sizes</h2>
        <div className="flex items-center gap-2">
          <Tag size="sm" variant="blog">
            Small
          </Tag>
          <Tag size="md" variant="blog">
            Medium
          </Tag>
          <Tag size="lg" variant="blog">
            Large
          </Tag>
        </div>
      </section>

      {/* Blog Tags */}
      <section>
        <h2 className="text-xl font-bold mb-4">Blog Tags</h2>
        <div className="flex flex-wrap gap-2">
          <Tag variant="blog">SQL</Tag>
          <Tag variant="blog">Power BI</Tag>
          <Tag variant="blog">Data Analysis</Tag>
          <Tag variant="blog">Career</Tag>
          <Tag variant="blog">Learning</Tag>
        </div>
      </section>

      {/* Tool Badges */}
      <section>
        <h2 className="text-xl font-bold mb-4">Tool Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Tag variant="tool">Power BI</Tag>
          <Tag variant="tool">Tableau</Tag>
          <Tag variant="tool">Excel</Tag>
          <Tag variant="tool">SQL</Tag>
          <Tag variant="tool">Python</Tag>
          <Tag variant="tool">MySQL</Tag>
          <Tag variant="tool">PostgreSQL</Tag>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section>
        <h2 className="text-xl font-bold mb-4">Proficiency Levels</h2>
        <div className="flex flex-wrap gap-2">
          <Tag variant="proficiency">Proficient</Tag>
          <Tag variant="proficiency">Intermediate</Tag>
          <Tag variant="proficiency">Learning</Tag>
        </div>
      </section>

      {/* Mixed Sizes and Variants */}
      <section>
        <h2 className="text-xl font-bold mb-4">Mixed Sizes and Variants</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Tag size="sm" variant="blog">
            Small Blog Tag
          </Tag>
          <Tag size="md" variant="tool">
            Medium Tool Badge
          </Tag>
          <Tag size="lg" variant="proficiency">
            Large Proficiency
          </Tag>
        </div>
      </section>

      {/* Responsive Layout Example */}
      <section>
        <h2 className="text-xl font-bold mb-4">Responsive Layout</h2>
        <div className="flex flex-wrap gap-2">
          {['SQL', 'Power BI', 'Data Analysis', 'Career', 'Learning'].map(
            (tag) => (
              <Tag key={tag} variant="blog">
                {tag}
              </Tag>
            )
          )}
        </div>
      </section>

      {/* Custom Styling */}
      <section>
        <h2 className="text-xl font-bold mb-4">Custom Styling</h2>
        <div className="flex flex-wrap gap-2">
          <Tag variant="blog" className="hover:scale-105">
            Hover Effect
          </Tag>
          <Tag variant="tool" className="cursor-pointer">
            Clickable
          </Tag>
          <Tag variant="proficiency" className="shadow-md">
            With Shadow
          </Tag>
        </div>
      </section>

      {/* Dark Mode Preview */}
      <section>
        <h2 className="text-xl font-bold mb-4">Dark Mode Support</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
          All variants support dark mode with appropriate color adjustments
        </p>
        <div className="flex flex-wrap gap-2">
          <Tag variant="blog">Blog Tag</Tag>
          <Tag variant="tool">Tool Badge</Tag>
          <Tag variant="proficiency">Proficiency</Tag>
          <Tag variant="default">Default</Tag>
        </div>
      </section>
    </div>
  )
}
