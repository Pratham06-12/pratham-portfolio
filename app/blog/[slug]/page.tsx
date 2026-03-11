import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content'
import { serializeMDX } from '@/lib/mdx-config'
import { extractHeadings } from '@/lib/mdx'
import { MDXContent } from '@/components/mdx/MDXContent'
import ScrollProgress from '@/components/blog/ScrollProgress'
import TableOfContents from '@/components/blog/TableOfContents'
import { Tag } from '@/components/ui/Tag'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = getBlogPostBySlug(params.slug)
    
    return {
      title: `${post.title} | Pratham P Nagekar`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        tags: post.tags,
      },
    }
  } catch {
    return {
      title: 'Post Not Found',
    }
  }
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  let post
  try {
    post = getBlogPostBySlug(params.slug)
  } catch {
    notFound()
  }

  const mdxSource = await serializeMDX(post.content || '')
  const headings = extractHeadings(post.content || '')

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <ScrollProgress />
      
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_250px] gap-12">
            {/* Main Content */}
            <article className="max-w-3xl">
              {/* Header */}
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
                  <time dateTime={post.date}>{formattedDate}</time>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Tag key={tag} variant="default">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                )}
              </header>

              {/* MDX Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <MDXContent source={mdxSource} />
              </div>

              {/* Footer */}
              <footer className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
                <p className="text-gray-600 dark:text-gray-400">
                  Thanks for reading. If you&apos;d like to discuss this topic or share your own experience, feel free to reach out on{' '}
                  <a
                    href="https://www.linkedin.com/in/prathamnagekar06/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    LinkedIn
                  </a>{' '}
                  or by email.
                </p>
              </footer>
            </article>

            {/* Table of Contents - Desktop Only */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: 'Pratham P Nagekar',
            },
            keywords: post.tags.join(', '),
          }),
        }}
      />
    </>
  )
}
