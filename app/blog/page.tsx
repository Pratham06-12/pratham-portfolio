import { Metadata } from 'next'
import { BlogList } from '@/components/blog/BlogList'
import { getAllBlogPosts } from '@/lib/content'
import { BlogTag } from '@/types/blog'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights | Pratham P Nagekar',
  description: 'Insights on SQL, Power BI, data analysis, and navigating a career transition into analytics.',
  openGraph: {
    title: 'Insights | Pratham P Nagekar',
    description: 'Insights on SQL, Power BI, data analysis, and navigating a career transition into analytics.',
  },
}

export default function Blog() {
  const posts = getAllBlogPosts()
  
  // Get all unique tags from posts
  const allTags: BlogTag[] = ['SQL', 'Power BI', 'Data Analysis', 'Career', 'Learning']

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Articles on SQL, Power BI, data analysis workflows, and my journey from circuits to data.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              All Posts
            </Link>
            {allTags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Blog List with Tag Filtering */}
        <BlogList posts={posts} />
      </div>
    </main>
  )
}
