'use client'

import { useState } from 'react'
import { MobileMenu } from './MobileMenu'

/**
 * Example usage of the MobileMenu component
 * 
 * This demonstrates how to integrate the MobileMenu component
 * with a hamburger button and navigation items.
 */
export function MobileMenuExample() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: 'Home', href: '/', isActive: true },
    { name: 'About', href: '/about', isActive: false },
    { name: 'Blog', href: '/blog', isActive: false },
    { name: 'Projects', href: '/projects', isActive: false },
    { name: 'Toolbox', href: '/toolbox', isActive: false },
    { name: 'Changelog', href: '/changelog', isActive: false },
  ]

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:text-slate-300 dark:hover:bg-slate-800"
        aria-label="Open menu"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={navigationItems}
      />
    </div>
  )
}

/**
 * Example with dynamic active state based on current path
 */
export function MobileMenuWithActiveState() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentPath: string = '/blog' // In real usage, get this from usePathname()

  const navigationItems = [
    { name: 'Home', href: '/', isActive: currentPath === '/' },
    { name: 'About', href: '/about', isActive: currentPath.startsWith('/about') },
    { name: 'Blog', href: '/blog', isActive: currentPath.startsWith('/blog') },
    { name: 'Projects', href: '/projects', isActive: currentPath.startsWith('/projects') },
    { name: 'Toolbox', href: '/toolbox', isActive: currentPath.startsWith('/toolbox') },
    { name: 'Changelog', href: '/changelog', isActive: currentPath.startsWith('/changelog') },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(true)}
        className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:text-slate-300 dark:hover:bg-slate-800"
        aria-label="Open menu"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={navigationItems}
      />
    </div>
  )
}
