/**
 * ContentCard Component Examples
 * 
 * This file demonstrates various use cases for the ContentCard component.
 * The ContentCard is a versatile component used throughout the portfolio
 * to display blog posts, projects, and changelog entries.
 */

import { ContentCard } from './ContentCard'

export function ContentCardExamples() {
  return (
    <div className="space-y-12 p-8">
      {/* Blog Post Card Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Blog Post Card</h2>
        <div className="max-w-sm">
          <ContentCard
            title="SQL Query Optimization Tips for Data Analysts"
            description="Learn practical techniques to optimize your SQL queries and improve database performance. Covers indexing, query planning, and common pitfalls."
            date="2024-01-15"
            tags={['SQL', 'Data Analysis', 'Performance']}
            href="/blog/sql-optimization-tips"
            readingTime={8}
            type="blog"
          />
        </div>
      </section>

      {/* Project Card Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Project Card</h2>
        <div className="max-w-sm">
          <ContentCard
            title="Credit Risk Analysis Dashboard"
            description="Built a comprehensive Power BI dashboard to analyze credit risk patterns across 10,000+ loan applications. Identified key risk factors and improved approval accuracy by 15%."
            date="2023-11-20"
            tags={['Power BI', 'SQL', 'Risk Analysis']}
            href="/projects/credit-risk-analysis"
            type="project"
          />
        </div>
      </section>

      {/* Project Card with Image Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Project Card with Image</h2>
        <div className="max-w-sm">
          <ContentCard
            title="E-commerce Sales Analysis"
            description="Analyzed sales data from an e-commerce platform to identify trends, customer segments, and revenue opportunities."
            date="2023-09-15"
            tags={['Power BI', 'Excel', 'Sales']}
            href="/projects/ecommerce-sales"
            image="/images/projects/ecommerce-dashboard.jpg"
            type="project"
          />
        </div>
      </section>

      {/* Changelog Entry Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Changelog Entry</h2>
        <div className="max-w-sm">
          <ContentCard
            title="Added Dark Mode Support"
            description="Implemented a complete dark mode theme with smooth transitions and localStorage persistence. All components now support both light and dark themes with proper contrast ratios."
            date="2024-03-10"
            type="changelog"
          />
        </div>
      </section>

      {/* Grid Layout Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Grid Layout (3 columns)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard
            title="Getting Started with Power BI"
            description="A beginner's guide to creating your first Power BI dashboard."
            date="2024-02-01"
            tags={['Power BI', 'Learning']}
            href="/blog/power-bi-getting-started"
            readingTime={6}
            type="blog"
          />
          <ContentCard
            title="Data Cleaning Best Practices"
            description="Essential techniques for cleaning and preparing data for analysis."
            date="2024-01-28"
            tags={['Data Analysis', 'SQL']}
            href="/blog/data-cleaning"
            readingTime={10}
            type="blog"
          />
          <ContentCard
            title="Career Transition: VLSI to Data Analytics"
            description="My journey from Electronics Engineering to Data Analytics and lessons learned along the way."
            date="2024-01-20"
            tags={['Career', 'Learning']}
            href="/blog/career-transition"
            readingTime={12}
            type="blog"
          />
        </div>
      </section>

      {/* Minimal Card Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Minimal Card (No Optional Props)</h2>
        <div className="max-w-sm">
          <ContentCard
            title="Simple Card Title"
            description="This card only has the required props: title, description, and type."
            type="blog"
          />
        </div>
      </section>

      {/* Mixed Content Types Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Mixed Content Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContentCard
            title="Latest Blog Post"
            description="Check out my latest thoughts on data analysis."
            date="2024-03-15"
            tags={['Data Analysis']}
            href="/blog/latest"
            readingTime={5}
            type="blog"
          />
          <ContentCard
            title="Featured Project"
            description="My most recent data analysis project."
            date="2024-03-10"
            tags={['Power BI', 'SQL']}
            href="/projects/featured"
            type="project"
          />
          <ContentCard
            title="Recent Update"
            description="Added new features to the portfolio."
            date="2024-03-12"
            type="changelog"
          />
        </div>
      </section>
    </div>
  )
}

/**
 * Usage Notes:
 * 
 * 1. Blog Cards:
 *    - Always include readingTime for blog posts
 *    - Use 'blog' variant tags (blue color scheme)
 *    - Include href to link to the full post
 * 
 * 2. Project Cards:
 *    - Use 'tool' variant tags (purple color scheme)
 *    - Optionally include image for visual appeal
 *    - Include href to link to the case study
 * 
 * 3. Changelog Cards:
 *    - Typically don't include href (not clickable)
 *    - Use 'default' variant tags if tags are needed
 *    - Keep descriptions concise
 * 
 * 4. Accessibility:
 *    - Cards with href automatically get accessible link wrapping
 *    - Focus states are handled automatically
 *    - Screen readers get descriptive aria-labels
 * 
 * 5. Responsive Design:
 *    - Cards adapt to container width
 *    - Use grid layouts for multiple cards
 *    - Images are optimized with Next.js Image component
 * 
 * 6. Animations:
 *    - Hover animations are built-in with Framer Motion
 *    - Respects prefers-reduced-motion user preference
 *    - Smooth transitions for all interactive states
 */
