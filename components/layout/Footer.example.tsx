/**
 * Footer Component Examples
 * 
 * This file demonstrates the Footer component usage.
 * The Footer is typically used in the root layout and displays:
 * - Contact information (email, phone, location)
 * - Social links (GitHub, LinkedIn)
 * - Copyright notice
 */

import { Footer } from './Footer'

export default function FooterExamples() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-2xl font-bold">Default Footer</h2>
        <p className="mb-4 text-slate-600 dark:text-slate-400">
          The footer component displays contact information, social links, and copyright notice.
          It uses data from the site configuration.
        </p>
        <div className="border border-slate-200 dark:border-slate-800">
          <Footer />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Features</h2>
        <ul className="list-inside list-disc space-y-2 text-slate-600 dark:text-slate-400">
          <li>Responsive grid layout (1 column on mobile, 3 columns on desktop)</li>
          <li>Clickable email link (mailto:)</li>
          <li>Clickable phone link (tel:)</li>
          <li>External social links with proper security attributes (target="_blank" rel="noopener noreferrer")</li>
          <li>Icons for all contact methods and social platforms</li>
          <li>Dynamic copyright year</li>
          <li>Consistent styling with the rest of the site</li>
          <li>Dark mode support</li>
          <li>Accessible with proper focus states</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Usage in Layout</h2>
        <pre className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <code>{`import { Footer } from '@/components/layout/Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}`}</code>
        </pre>
      </section>
    </div>
  )
}
