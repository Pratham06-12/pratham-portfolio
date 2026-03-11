export interface ChangelogEntry {
  id: string
  date: string
  title: string
  description: string
  details?: string
  type: 'feature' | 'content' | 'improvement' | 'fix'
}

export const changelogEntries: ChangelogEntry[] = [
  {
    id: 'changelog-001',
    date: '2024-01-15',
    title: 'Portfolio Launch',
    description: 'Launched personal portfolio website with project case studies and blog.',
    details:
      'Built with Next.js 14, TypeScript, and Tailwind CSS. Features include dark mode, MDX blog engine, and responsive design optimized for performance.',
    type: 'feature',
  },
  {
    id: 'changelog-002',
    date: '2024-01-20',
    title: 'Added Credit Risk Analysis Case Study',
    description: 'Published detailed case study on credit risk analysis project.',
    details:
      'Comprehensive breakdown of the analysis approach, SQL queries used, Power BI dashboard design, and key insights discovered. Includes discussion of trade-offs and potential improvements.',
    type: 'content',
  },
  {
    id: 'changelog-003',
    date: '2024-01-25',
    title: 'Blog Post: SQL Query Optimization',
    description: 'Published article on practical SQL optimization techniques.',
    details:
      'Covers indexing strategies, query execution plans, and real-world examples from data analysis projects. Includes before/after performance comparisons.',
    type: 'content',
  },
  {
    id: 'changelog-004',
    date: '2024-02-01',
    title: 'Enhanced Mobile Navigation',
    description: 'Improved mobile menu with smoother animations and better accessibility.',
    details:
      'Implemented Framer Motion animations, added keyboard navigation support, and improved touch targets for better mobile experience.',
    type: 'improvement',
  },
  {
    id: 'changelog-005',
    date: '2024-02-05',
    title: 'Added E-commerce Sales Analysis Project',
    description: 'Published second case study analyzing e-commerce sales data.',
    details:
      'Detailed analysis of sales trends, customer segmentation, and product performance. Built interactive Power BI dashboard with drill-down capabilities.',
    type: 'content',
  },
  {
    id: 'changelog-006',
    date: '2024-02-10',
    title: 'Performance Optimization',
    description: 'Achieved Lighthouse score of 98 through image optimization and code splitting.',
    details:
      'Implemented lazy loading for images, optimized font loading, reduced JavaScript bundle size, and improved First Contentful Paint to under 1.2 seconds.',
    type: 'improvement',
  },
  {
    id: 'changelog-007',
    date: '2024-02-15',
    title: 'Blog Post: Power BI Best Practices',
    description: 'Shared insights on creating effective Power BI dashboards.',
    details:
      'Covers data modeling, DAX optimization, visual design principles, and performance considerations. Based on lessons learned from real projects.',
    type: 'content',
  },
  {
    id: 'changelog-008',
    date: '2024-03-11',
    title: 'New ML Project: Vendor Invoice Intelligence',
    description: 'Launched an end-to-end ML project for Freight Cost & Risk Detection.',
    details:
      'Developed a production-ready pipeline using DuckDB for SQL engineering and Random Forest for predictive modeling. Features a Streamlit dashboard and XAI (SHAP) for model transparency.',
    type: 'content',
  },
]

export function getAllChangelogEntries(): ChangelogEntry[] {
  return changelogEntries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getRecentChangelogEntries(count: number): ChangelogEntry[] {
  return getAllChangelogEntries().slice(0, count)
}
