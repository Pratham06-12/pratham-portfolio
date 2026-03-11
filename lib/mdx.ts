import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { calculateReadingTime } from './utils'

/**
 * Get the content directory path
 */
export function getContentDirectory(type: 'blog' | 'projects'): string {
  return path.join(process.cwd(), 'content', type)
}

/**
 * Get all MDX file slugs from a content directory
 */
export function getMDXSlugs(type: 'blog' | 'projects'): string[] {
  const contentDir = getContentDirectory(type)
  
  if (!fs.existsSync(contentDir)) {
    return []
  }

  const files = fs.readdirSync(contentDir)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

/**
 * Parse MDX file and extract frontmatter and content
 */
export function parseMDXFile(filePath: string) {
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    frontmatter: data,
    content,
  }
}

/**
 * Get MDX file by slug
 */
export function getMDXBySlug(type: 'blog' | 'projects', slug: string) {
  const contentDir = getContentDirectory(type)
  const filePath = path.join(contentDir, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`MDX file not found: ${filePath}`)
  }

  const { frontmatter, content } = parseMDXFile(filePath)
  const readingTime = calculateReadingTime(content)
  
  return {
    slug,
    frontmatter,
    content,
    readingTime,
  }
}

/**
 * Get all MDX files from a content directory
 */
export function getAllMDX(type: 'blog' | 'projects') {
  const slugs = getMDXSlugs(type)
  
  return slugs.map((slug) => {
    const { frontmatter, content, readingTime } = getMDXBySlug(type, slug)
    
    return {
      slug,
      frontmatter,
      content,
      readingTime,
    }
  })
}

/**
 * Extract headings from MDX content for table of contents
 */
export interface Heading {
  id: string
  text: string
  level: number
}

export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
    
    headings.push({ id, text, level })
  }

  return headings
}
