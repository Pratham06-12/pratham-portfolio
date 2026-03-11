import { BlogPost, BlogTag } from '@/types/blog'
import { Project, Tool } from '@/types/project'
import { ChangelogEntry } from '@/types/changelog'
import { TimelineEvent } from '@/config/timeline'
import { ToolCategory } from '@/config/tools'
import { getAllMDX, getMDXBySlug } from './mdx'
import {
  getAllChangelogEntries as getChangelogData,
  getRecentChangelogEntries as getRecentChangelogData,
} from '@/config/changelog'
import {
  getTimelineEvents as getTimelineData,
} from '@/config/timeline'
import {
  getToolCategories as getToolCategoriesData,
} from '@/config/tools'

/**
 * Blog Post Functions
 */

/**
 * Get all published blog posts sorted by date (most recent first)
 */
export function getAllBlogPosts(): BlogPost[] {
  try {
    const posts = getAllMDX('blog')
    
    return posts
      .map((post) => ({
        slug: post.slug,
        title: post.frontmatter.title as string,
        date: post.frontmatter.date as string,
        excerpt: post.frontmatter.excerpt as string,
        tags: (post.frontmatter.tags as BlogTag[]) || [],
        readingTime: post.readingTime,
        published: post.frontmatter.published !== false,
        content: post.content,
      }))
      .filter((post) => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost {
  try {
    const post = getMDXBySlug('blog', slug)
    
    return {
      slug: post.slug,
      title: post.frontmatter.title as string,
      date: post.frontmatter.date as string,
      excerpt: post.frontmatter.excerpt as string,
      tags: (post.frontmatter.tags as BlogTag[]) || [],
      readingTime: post.readingTime,
      published: post.frontmatter.published !== false,
      content: post.content,
    }
  } catch (error) {
    throw new Error(`Blog post not found: ${slug}`)
  }
}

/**
 * Get blog posts filtered by tag
 */
export function getBlogPostsByTag(tag: BlogTag): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter((post) => post.tags.includes(tag))
}

/**
 * Get the most recent blog posts
 */
export function getRecentBlogPosts(count: number = 3): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.slice(0, count)
}

/**
 * Project Functions
 */

/**
 * Get all projects sorted by date (most recent first)
 */
export function getAllProjects(): Project[] {
  try {
    const projects = getAllMDX('projects')
    
    return projects
      .map((project) => ({
        slug: project.slug,
        title: project.frontmatter.title as string,
        description: project.frontmatter.description as string,
        tools: (project.frontmatter.tools as Tool[]) || [],
        date: project.frontmatter.date as string,
        featured: project.frontmatter.featured === true,
        image: project.frontmatter.image as string,
        githubUrl: project.frontmatter.githubUrl as string,
        content: project.content,
        sections: (project.frontmatter.sections as any[]) || [],
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): Project {
  try {
    const project = getMDXBySlug('projects', slug)
    
    return {
      slug: project.slug,
      title: project.frontmatter.title as string,
      description: project.frontmatter.description as string,
      tools: (project.frontmatter.tools as Tool[]) || [],
      date: project.frontmatter.date as string,
      featured: project.frontmatter.featured === true,
      image: project.frontmatter.image as string,
      githubUrl: project.frontmatter.githubUrl as string,
      content: project.content,
      sections: (project.frontmatter.sections as any[]) || [],
    }
  } catch (error) {
    throw new Error(`Project not found: ${slug}`)
  }
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects()
  return allProjects.filter((project) => project.featured)
}

/**
 * Changelog Functions
 */

/**
 * Get all changelog entries sorted by date (most recent first)
 */
export function getAllChangelogEntries(): ChangelogEntry[] {
  return getChangelogData()
}

/**
 * Get the most recent changelog entries
 */
export function getRecentChangelogEntries(count: number = 3): ChangelogEntry[] {
  return getRecentChangelogData(count)
}

/**
 * Timeline Functions
 */

/**
 * Get all timeline events sorted chronologically
 */
export function getTimelineEvents(): TimelineEvent[] {
  return getTimelineData()
}

/**
 * Tool Functions
 */

/**
 * Get all tool categories with their tools
 */
export function getToolCategories(): ToolCategory[] {
  return getToolCategoriesData()
}
