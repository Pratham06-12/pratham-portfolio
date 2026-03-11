/**
 * ThemeToggle Component Examples
 * 
 * This file demonstrates various usage patterns for the ThemeToggle component.
 * The ThemeToggle provides a button to switch between light and dark themes
 * with smooth icon animations.
 */

import { ThemeToggle } from './ThemeToggle'

export function ThemeToggleExamples() {
  return (
    <div className="space-y-8 p-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Default theme toggle button with sun/moon icon animation
        </p>
        <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
          <ThemeToggle />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">With Custom Styling</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Theme toggle with additional custom classes
        </p>
        <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
          <ThemeToggle className="border border-slate-300 dark:border-slate-700" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">In Navigation Bar</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Typical usage in a header navigation
        </p>
        <nav className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg">Portfolio</span>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
              Home
            </a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
              About
            </a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
              Blog
            </a>
          </div>
          <ThemeToggle />
        </nav>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
        <div className="space-y-2 text-slate-600 dark:text-slate-400">
          <p>✓ ARIA label indicates current theme and action</p>
          <p>✓ Keyboard accessible with visible focus ring</p>
          <p>✓ Smooth icon transition animations</p>
          <p>✓ Respects user's theme preference</p>
          <p>✓ Persists theme choice to localStorage</p>
        </div>
      </section>
    </div>
  )
}

export default ThemeToggleExamples
