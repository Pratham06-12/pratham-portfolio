export type Tool = 'SQL' | 'Power BI' | 'Python' | 'Excel' | 'Tableau'

export interface ProjectSection {
  title: string
  content: string
}

export interface Project {
  slug: string
  title: string
  description: string
  tools: Tool[]
  date: string
  featured: boolean
  content?: string
  sections: ProjectSection[]
}
