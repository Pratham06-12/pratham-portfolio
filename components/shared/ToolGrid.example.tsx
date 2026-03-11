import { ToolGrid } from './ToolGrid'
import { ToolCategory } from '@/types/site'

const exampleCategories: ToolCategory[] = [
  {
    name: 'Data Tools',
    tools: [
      {
        name: 'Power BI',
        description:
          'Creating interactive dashboards, data modeling, DAX calculations, and visual storytelling for business insights.',
        proficiency: 'proficient',
      },
      {
        name: 'Tableau',
        description:
          'Building visualizations and dashboards for data exploration and presentation.',
        proficiency: 'intermediate',
      },
      {
        name: 'Excel',
        description:
          'Advanced formulas, pivot tables, data cleaning, and analysis for quick insights and reporting.',
        proficiency: 'proficient',
      },
    ],
  },
  {
    name: 'Programming',
    tools: [
      {
        name: 'SQL',
        description:
          'Writing complex queries, joins, subqueries, CTEs, and window functions for data extraction and transformation.',
        proficiency: 'proficient',
      },
      {
        name: 'Python',
        description:
          'Basic data analysis with pandas, data cleaning, and automation scripts. Currently expanding skills.',
        proficiency: 'learning',
      },
    ],
  },
]

export default function ToolGridExample() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          ToolGrid Component Example
        </h1>
        <ToolGrid categories={exampleCategories} />
      </div>
    </div>
  )
}
