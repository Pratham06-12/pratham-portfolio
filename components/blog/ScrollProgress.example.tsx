import ScrollProgress from './ScrollProgress'

export default function ScrollProgressExample() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Scroll Progress Example
        </h1>
        
        <p className="text-gray-700 dark:text-gray-300">
          Scroll down this page to see the progress bar at the top fill up as you read through the content.
          The progress bar shows how far you've scrolled through the page.
        </p>

        {/* Generate long content to enable scrolling */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Section {i + 1}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ))}

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            You've reached the end! The progress bar should now be at 100%.
          </p>
        </div>
      </div>
    </div>
  )
}
