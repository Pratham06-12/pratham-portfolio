export type Tool = 'SQL' | 'Power BI' | 'Python' | 'Excel' | 'Tableau' | 'Machine Learning' | 'Streamlit' | 'Scikit-Learn' | 'DuckDB'

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
  image?: string
  githubUrl?: string
  content?: string
  sections: ProjectSection[]
}
