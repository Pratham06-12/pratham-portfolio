import { RecentContent } from './RecentContent'
import { BlogPost } from '@/types/blog'
import { Project } from '@/types/project'
import { ChangelogEntry } from '@/types/changelog'

// Example blog posts
const exampleBlogPosts: BlogPost[] = [
  {
    slug: 'sql-optimization-tips',
    title: 'SQL Query Optimization: 5 Practical Tips',
    excerpt: 'Learn how to optimize your SQL queries for better performance with these practical techniques I use daily.',
    date: '2024-01-15',
    tags: ['SQL', 'Data Analysis'],
    readingTime: 5,
    published: true,
  },
  {
    slug: 'power-bi-dashboard-design',
    title: 'Designing Effective Power BI Dashboards',
    excerpt: 'Best practices for creating clear, actionable dashboards that stakeholders actually use.',
    date: '2024-01-10',
    tags: ['Power BI', 'Data Analysis'],
    readingTime: 8,
    published: true,
  },
  {
    slug: 'career-transition-journey',
    title: 'From VLSI to Data Analytics: My Journey',
    excerpt: 'How I transitioned from electronics engineering to data analytics and what I learned along the way.',
    date: '2024-01-05',
    tags: ['Career', 'Learning'],
    readingTime: 6,
    published: true,
  },
]

// Example projects
const exampleProjects: Project[] = [
  {
    slug: 'credit-risk-analysis',
    title: 'Credit Risk Analysis Dashboard',
    description: 'Built a comprehensive credit risk assessment system using SQL and Power BI to analyze loan default patterns.',
    tools: ['SQL', 'Power BI'],
    date: '2024-01-20',
    featured: true,
    sections: [],
  },
  {
    slug: 'ecommerce-sales-analysis',
    title: 'E-commerce Sales Analytics',
    description: 'Analyzed sales trends and customer behavior for an e-commerce platform to identify growth opportunities.',
    tools: ['SQL', 'Excel', 'Power BI'],
    date: '2024-01-15',
    featured: true,
    sections: [],
  },
  {
    slug: 'systems-performance-analysis',
    title: 'Systems Performance Monitoring',
    description: 'Developed performance monitoring dashboards for system optimization during my internship at Pantech Prolabs.',
    tools: ['Python', 'SQL'],
    date: '2024-01-10',
    featured: false,
    sections: [],
  },
]

// Example changelog entries
const exampleChangelogEntries: ChangelogEntry[] = [
  {
    id: 'entry-1',
    date: '2024-01-25',
    title: 'Added SQL Optimization Blog Post',
    description: 'Published a new article sharing practical SQL optimization techniques.',
    type: 'content',
  },
  {
    id: 'entry-2',
    date: '2024-01-20',
    title: 'Improved Site Performance',
    description: 'Optimized image loading and reduced bundle size for faster page loads.',
    type: 'improvement',
  },
  {
    id: 'entry-3',
    date: '2024-01-15',
    title: 'Added Dark Mode',
    description: 'Implemented dark mode toggle with theme persistence across sessions.',
    type: 'feature',
  },
]

export function RecentContentExamples() {
  return (
    <div className="space-y-16 p-8 bg-slate-50 dark:bg-slate-900">
      {/* Blog Posts Example */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Recent Blog Posts
        </h2>
        <RecentContent type="blog" items={exampleBlogPosts} />
      </div>

      {/* Projects Example */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Featured Projects
        </h2>
        <RecentContent type="projects" items={exampleProjects} />
      </div>

      {/* Changelog Example */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Recent Changelog
        </h2>
        <RecentContent type="changelog" items={exampleChangelogEntries} />
      </div>
    </div>
  )
}
