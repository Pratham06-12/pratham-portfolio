'use client'

import { BlogPost, BlogTag } from '@/types/blog'
import { ContentCard } from '@/components/ui/ContentCard'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  const searchParams = useSearchParams()
  const selectedTag = searchParams.get('tag') as BlogTag | null

  // Filter posts by selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) {
      return posts
    }
    return posts.filter((post) => post.tags.includes(selectedTag))
  }, [posts, selectedTag])

  // Show "No posts found" state
  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          No posts found
          {selectedTag && (
            <>
              {' '}
              for tag <span className="font-semibold">{selectedTag}</span>
            </>
          )}
          .
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post) => (
        <ContentCard
          key={post.slug}
          type="blog"
          title={post.title}
          description={post.excerpt}
          date={post.date}
          tags={post.tags}
          readingTime={post.readingTime}
          href={`/blog/${post.slug}`}
        />
      ))}
    </div>
  )
}
