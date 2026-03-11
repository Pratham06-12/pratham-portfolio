/**
 * BlogList Component Examples
 * 
 * This file demonstrates how to use the BlogList component
 * in different scenarios.
 */

import { BlogList } from './BlogList'
import { BlogPost } from '@/types/blog'

// Sample blog posts data
const samplePosts: BlogPost[] = [
  {
    slug: 'sql-optimization-tips',
    title: 'SQL Query Optimization Tips',
    date: '2024-01-15',
    excerpt: 'Learn practical techniques to optimize your SQL queries for better performance.',
    tags: ['SQL', 'Data Analysis'],
    readingTime: 5,
    published: true,
  },
  {
    slug: 'power-bi-dashboard-design',
    title: 'Power BI Dashboard Design Best Practices',
    date: '2024-01-10',
    excerpt: 'Discover the key principles for creating effective and user-friendly Power BI dashboards.',
    tags: ['Power BI', 'Data Analysis'],
    readingTime: 8,
    published: true,
  },
  {
    slug: 'career-transition-journey',
    title: 'My Journey from VLSI to Data Analytics',
    date: '2024-01-05',
    excerpt: 'A personal story about transitioning from Electronics Engineering to Data Analytics.',
    tags: ['Career', 'Learning'],
    readingTime: 10,
    published: true,
  },
]

/**
 * Example 1: Basic usage with all posts
 * 
 * This is the most common usage - displaying all blog posts
 * in a grid layout. The component will automatically handle
 * tag filtering based on URL search params.
 */
export function BasicBlogListExample() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <BlogList posts={samplePosts} />
    </div>
  )
}

/**
 * Example 2: Empty state
 * 
 * When no posts are available or when filtering results in
 * no matches, the component displays a "No posts found" message.
 */
export function EmptyBlogListExample() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <BlogList posts={[]} />
    </div>
  )
}

/**
 * Example 3: With tag filter UI
 * 
 * This example shows how to integrate the BlogList component
 * with a tag filter UI. The BlogList component reads the 'tag'
 * query parameter from the URL to filter posts.
 * 
 * Usage in a page:
 * - Navigate to /blog?tag=SQL to filter by SQL tag
 * - Navigate to /blog to show all posts
 */
export function BlogListWithFilterExample() {
  const allTags = ['SQL', 'Power BI', 'Data Analysis', 'Career', 'Learning']
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
      {/* Tag filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <a
          href="/blog"
          className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        >
          All Posts
        </a>
        {allTags.map((tag) => (
          <a
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            {tag}
          </a>
        ))}
      </div>
      
      {/* Blog list with automatic filtering */}
      <BlogList posts={samplePosts} />
    </div>
  )
}

/**
 * Example 4: Integration with actual data fetching
 * 
 * This example shows how to use BlogList in a real page
 * with data fetched from the content system.
 */
export async function BlogPageExample() {
  // In a real Next.js page, you would fetch posts like this:
  // const posts = getAllBlogPosts()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Technical articles about SQL, Power BI, data analysis, and career development.
        </p>
        
        <BlogList posts={samplePosts} />
      </div>
    </div>
  )
}
