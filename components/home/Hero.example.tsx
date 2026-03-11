import { Hero } from './Hero'

/**
 * Hero Component Example
 * 
 * The Hero component displays a conversational first-person introduction
 * on the home page with Pratham's positioning statement and a friendly greeting.
 * 
 * Features:
 * - Conversational first-person introduction
 * - Positioning statement: "Data Analyst | SQL • Power BI • Analytics"
 * - Subtle entrance animations using Framer Motion
 * - Responsive typography and spacing
 * - Dark mode support
 */

export default function HeroExample() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Hero />
    </div>
  )
}
