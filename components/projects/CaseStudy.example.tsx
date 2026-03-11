import { CaseStudy } from './CaseStudy'
import type { Project } from '@/types/project'

/**
 * Example usage of the CaseStudy component
 */

const exampleProject: Project = {
  slug: 'credit-risk-analysis',
  title: 'Credit Risk Analysis Dashboard',
  description:
    'Built a comprehensive credit risk assessment system analyzing loan applications, payment histories, and default patterns to support lending decisions.',
  tools: ['SQL', 'Power BI', 'Excel'],
  date: '2024-01-15',
  featured: true,
  sections: [
    {
      title: 'Problem',
      content:
        '<p>Financial institutions need to assess credit risk accurately to minimize defaults while maximizing loan approvals for qualified applicants. Manual review processes were time-consuming and inconsistent.</p>',
    },
    {
      title: 'Dataset',
      content:
        '<p>Analyzed 10,000+ loan applications with 25 variables including credit scores, income levels, employment history, existing debt, and payment patterns. Data sourced from internal lending database spanning 3 years.</p>',
    },
    {
      title: 'Approach',
      content:
        '<p>Segmented applicants by risk profile using SQL queries. Created calculated fields for debt-to-income ratio, payment consistency score, and risk indicators. Built interactive Power BI dashboard with drill-down capabilities by region, loan type, and risk category.</p>',
    },
    {
      title: 'Tools',
      content:
        '<p>SQL for data extraction and transformation, Power BI for visualization and dashboard creation, Excel for initial data exploration and validation.</p>',
    },
    {
      title: 'Insights',
      content:
        '<ul><li>Identified that applicants with debt-to-income ratio above 40% had 3x higher default rates</li><li>Payment consistency over 12 months was the strongest predictor of loan performance</li><li>Regional variations showed urban areas had lower default rates despite higher loan amounts</li></ul>',
    },
    {
      title: 'Dashboard',
      content:
        '<p>Interactive dashboard featuring risk distribution charts, applicant segmentation, trend analysis, and drill-down capabilities. Includes filters for date range, region, and loan type with real-time metric updates.</p>',
    },
    {
      title: 'Trade-offs',
      content:
        '<p>Simplified risk model to 5 categories for clarity, though more granular segmentation was possible. Prioritized recent payment history (12 months) over longer historical data to balance accuracy with data availability.</p>',
    },
    {
      title: 'Improvements',
      content:
        '<p>Could incorporate machine learning models for predictive scoring, add real-time data refresh capabilities, and expand analysis to include macroeconomic indicators like unemployment rates and interest rate trends.</p>',
    },
  ],
}

export default function CaseStudyExample() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <CaseStudy project={exampleProject} />
    </div>
  )
}
