export interface ChangelogEntry {
  id: string
  date: string
  title: string
  description: string
  details?: string
  type: 'feature' | 'content' | 'improvement' | 'fix'
}
