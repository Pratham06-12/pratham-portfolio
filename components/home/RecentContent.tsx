import Link from 'next/link'
import { ContentCard } from '@/components/ui/ContentCard'
import { BlogPost } from '@/types/blog'
import { Project } from '@/types/project'
import { ChangelogEntry } from '@/types/changelog'

interface RecentContentProps {
  type: 'blog' | 'projects' | 'changelog'
  items: BlogPost[] | Project[] | ChangelogEntry[]
}

export function RecentContent({ type, items }: RecentContentProps) {
  // Determine the title and view all link based on content type
  const config = {
    blog: {
      title: 'Recent Posts',
      viewAllHref: '/blog',
      viewAllText: 'View All Posts',
    },
    projects: {
      title: 'Featured Projects',
      viewAllHref: '/projects',
      viewAllText: 'View All Projects',
    },
    changelog: {
      title: 'Recent Updates',
      viewAllHref: '/changelog',
      viewAllText: 'View All Updates',
    },
  }

  const { title, viewAllHref, viewAllText } = config[type]

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {title}
        </h2>
        <Link
          href={viewAllHref}
          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded px-2 py-1"
        >
          {viewAllText} →
        </Link>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0, 3).map((item) => {
          // Map item data to ContentCard props based on type
          if (type === 'blog') {
            const post = item as BlogPost
            return (
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
            )
          }

          if (type === 'projects') {
            const project = item as Project
            return (
              <ContentCard
                key={project.slug}
                type="project"
                title={project.title}
                description={project.description}
                date={project.date}
                tags={project.tools}
                href={`/projects/${project.slug}`}
              />
            )
          }

          if (type === 'changelog') {
            const entry = item as ChangelogEntry
            return (
              <ContentCard
                key={entry.id}
                type="changelog"
                title={entry.title}
                description={entry.description}
                date={entry.date}
                href="/changelog"
              />
            )
          }

          return null
        })}
      </div>
    </section>
  )
}
