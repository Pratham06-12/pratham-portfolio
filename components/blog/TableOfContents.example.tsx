import TableOfContents, { Heading } from './TableOfContents'

export default function TableOfContentsExample() {
  const sampleHeadings: Heading[] = [
    { id: 'introduction', text: 'Introduction', level: 2 },
    { id: 'why-learn-sql', text: 'Why Learn SQL?', level: 2 },
    { id: 'basic-query-structure', text: 'Basic Query Structure', level: 2 },
    { id: 'select-statement', text: 'SELECT Statement', level: 3 },
    { id: 'where-clause', text: 'WHERE Clause', level: 3 },
    { id: 'common-functions', text: 'Common Functions', level: 2 },
    { id: 'aggregate-functions', text: 'Aggregate Functions', level: 3 },
    { id: 'string-functions', text: 'String Functions', level: 3 },
    { id: 'joining-tables', text: 'Joining Tables', level: 2 },
    { id: 'best-practices', text: 'Best Practices', level: 2 },
    { id: 'next-steps', text: 'Next Steps', level: 2 },
    { id: 'conclusion', text: 'Conclusion', level: 2 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Table of Contents Example
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <article className="prose dark:prose-invert max-w-none">
              {sampleHeadings.map((heading) => {
                const HeadingTag = heading.level === 2 ? 'h2' : 'h3'
                return (
                  <div key={heading.id} id={heading.id} className="mb-8">
                    <HeadingTag className="scroll-mt-24">
                      {heading.text}
                    </HeadingTag>
                    <p className="text-gray-600 dark:text-gray-400">
                      This is sample content for the "{heading.text}" section.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </p>
                  </div>
                )
              })}
            </article>
          </div>

          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <TableOfContents headings={sampleHeadings} />
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Features Demonstrated:
          </h2>
          <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-1">
            <li>Sticky positioning on desktop (scroll to see it stick)</li>
            <li>Active section highlighting based on scroll position</li>
            <li>Smooth scroll to section on click</li>
            <li>Indentation for level 3 headings</li>
            <li>Hidden on mobile (resize window to see)</li>
            <li>Dark mode support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
