export type BlogTag = 'SQL' | 'Power BI' | 'Data Analysis' | 'Career' | 'Learning'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: BlogTag[]
  readingTime: number
  published: boolean
  content?: string
}
