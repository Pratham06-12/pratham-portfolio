/**
 * Header Component Examples
 * 
 * The Header component provides the main navigation for the portfolio website.
 * It includes:
 * - Sticky positioning at the top of the page
 * - Desktop horizontal navigation
 * - Mobile hamburger menu
 * - Theme toggle integration
 * - Active page highlighting
 * - Full keyboard navigation support
 */

import { Header } from './Header'

// Example 1: Basic usage in a layout
export function BasicHeaderExample() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Page Content</h1>
        <p className="mt-4">
          The header will stick to the top as you scroll down the page.
        </p>
      </main>
    </div>
  )
}

// Example 2: With long content to demonstrate sticky behavior
export function StickyHeaderExample() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Scroll Down to See Sticky Header</h1>
        <div className="mt-8 space-y-4">
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i} className="text-slate-600 dark:text-slate-300">
              This is paragraph {i + 1}. The header will remain visible as you
              scroll through this content.
            </p>
          ))}
        </div>
      </main>
    </div>
  )
}

// Example 3: Demonstrating responsive behavior
export function ResponsiveHeaderExample() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Responsive Navigation</h1>
        <div className="mt-4 space-y-4">
          <p className="text-slate-600 dark:text-slate-300">
            On desktop (md breakpoint and above), the navigation links are
            displayed horizontally in the header.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            On mobile, a hamburger menu button appears. Click it to open a
            slide-down menu with all navigation links.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            The theme toggle is always visible on both desktop and mobile.
          </p>
        </div>
      </main>
    </div>
  )
}

// Example 4: Keyboard navigation demonstration
export function KeyboardNavigationExample() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Keyboard Navigation</h1>
        <div className="mt-4 space-y-4">
          <p className="text-slate-600 dark:text-slate-300">
            Try navigating with your keyboard:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-slate-600 dark:text-slate-300">
            <li>Press Tab to move through navigation links</li>
            <li>Press Enter or Space to activate links and buttons</li>
            <li>All interactive elements have visible focus indicators</li>
            <li>The mobile menu button is keyboard accessible</li>
            <li>The theme toggle can be activated with keyboard</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

// Example 5: Active page highlighting
export function ActivePageExample() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Active Page Highlighting</h1>
        <div className="mt-4 space-y-4">
          <p className="text-slate-600 dark:text-slate-300">
            The current page is highlighted in the navigation with a primary
            color (blue).
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            Navigate to different pages to see the active link change:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-slate-600 dark:text-slate-300">
            <li>Home page: "/" - Home link is highlighted</li>
            <li>About page: "/about" - About link is highlighted</li>
            <li>Blog pages: "/blog/*" - Blog link is highlighted</li>
            <li>Project pages: "/projects/*" - Projects link is highlighted</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
