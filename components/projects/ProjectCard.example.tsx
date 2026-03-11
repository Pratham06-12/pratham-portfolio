import { ProjectCard } from './ProjectCard'
import type { Tool } from '@/types/project'

export default function ProjectCardExample() {
  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Project Card Examples
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Showcasing different project card configurations with various tools
            and descriptions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example 1: Credit Risk Analysis */}
          <ProjectCard
            title="Credit Risk Analysis"
            description="Built a comprehensive credit risk assessment model using SQL and Power BI to analyze loan default patterns and identify key risk factors."
            tools={['SQL', 'Power BI', 'Excel'] as Tool[]}
            slug="credit-risk-analysis"
            date="2024-01-15"
          />

          {/* Example 2: E-commerce Sales Analysis */}
          <ProjectCard
            title="E-commerce Sales Analysis"
            description="Analyzed sales trends and customer behavior for an online retail platform, creating interactive dashboards to track KPIs and revenue metrics."
            tools={['SQL', 'Power BI', 'Excel'] as Tool[]}
            slug="ecommerce-sales-analysis"
            date="2023-11-20"
          />

          {/* Example 3: Systems Performance Analysis */}
          <ProjectCard
            title="Systems Performance Analysis"
            description="Monitored and analyzed system performance metrics during internship at Pantech Prolabs, identifying bottlenecks and optimization opportunities."
            tools={['Python', 'SQL'] as Tool[]}
            slug="systems-performance-analysis"
            date="2023-09-10"
          />

          {/* Example 4: All Tools */}
          <ProjectCard
            title="Comprehensive Analytics Project"
            description="A multi-tool project demonstrating proficiency across the entire data analytics stack with various visualization and analysis techniques."
            tools={['SQL', 'Power BI', 'Python', 'Excel', 'Tableau'] as Tool[]}
            slug="comprehensive-analytics"
            date="2024-02-01"
          />

          {/* Example 5: Short Description */}
          <ProjectCard
            title="Quick Analysis"
            description="A focused analysis project with clear insights."
            tools={['SQL', 'Excel'] as Tool[]}
            slug="quick-analysis"
            date="2024-03-05"
          />

          {/* Example 6: No Date */}
          <ProjectCard
            title="Ongoing Research Project"
            description="Currently exploring advanced analytics techniques and building a comprehensive dashboard for business intelligence insights."
            tools={['Power BI', 'Tableau'] as Tool[]}
            slug="ongoing-research"
          />
        </div>

        {/* Single Card Full Width */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Full Width Example
          </h3>
          <div className="max-w-2xl">
            <ProjectCard
              title="Featured Data Analytics Case Study"
              description="An in-depth exploration of customer segmentation and predictive modeling using advanced SQL queries, Power BI visualizations, and Python for data preprocessing. This project demonstrates end-to-end analytics workflow from data extraction to actionable insights."
              tools={['SQL', 'Power BI', 'Python', 'Excel'] as Tool[]}
              slug="featured-case-study"
              date="2024-01-30"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
