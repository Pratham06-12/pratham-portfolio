export interface ToolItem {
  name: string
  description: string
  icon?: string
  proficiency: 'learning' | 'intermediate' | 'proficient'
}

export interface ToolCategory {
  name: string
  tools: ToolItem[]
}

export const toolCategories: ToolCategory[] = [
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
  {
    name: 'Databases',
    tools: [
      {
        name: 'MySQL',
        description:
          'Querying relational databases, understanding schema design, and optimizing query performance.',
        proficiency: 'intermediate',
      },
      {
        name: 'PostgreSQL',
        description:
          'Working with relational data, writing efficient queries, and understanding database operations.',
        proficiency: 'intermediate',
      },
      {
        name: 'SQL Server',
        description:
          'Experience with Microsoft SQL Server for data analysis and reporting projects.',
        proficiency: 'intermediate',
      },
    ],
  },
  {
    name: 'Productivity',
    tools: [
      {
        name: 'Git & GitHub',
        description:
          'Version control for projects, collaboration, and maintaining portfolio code.',
        proficiency: 'intermediate',
      },
      {
        name: 'VS Code',
        description:
          'Primary code editor for SQL, Python, and web development with extensions for productivity.',
        proficiency: 'proficient',
      },
      {
        name: 'Notion',
        description:
          'Project planning, note-taking, and organizing learning resources and documentation.',
        proficiency: 'proficient',
      },
      {
        name: 'Figma',
        description:
          'Basic design and wireframing for dashboard layouts and portfolio design planning.',
        proficiency: 'learning',
      },
    ],
  },
]

export function getToolCategories(): ToolCategory[] {
  return toolCategories
}

export function getToolsByProficiency(
  proficiency: ToolItem['proficiency']
): ToolItem[] {
  return toolCategories.flatMap((category) =>
    category.tools.filter((tool) => tool.proficiency === proficiency)
  )
}

export function getAllTools(): ToolItem[] {
  return toolCategories.flatMap((category) => category.tools)
}
