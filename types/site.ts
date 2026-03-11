export interface NavigationItem {
  name: string
  href: string
}

export interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  type: 'education' | 'work' | 'project'
  location?: string
}

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

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  author: {
    name: string
    email: string
    phone: string
    location: string
    title: string
    github: string
    linkedin: string
  }
  navigation: NavigationItem[]
}
