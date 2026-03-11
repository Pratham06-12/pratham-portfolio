'use client'

import { Tag } from '../ui/Tag'
import { MDXContent } from '../mdx/MDXContent'
import type { Project, Tool } from '@/types/project'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface CaseStudyProps {
  project: Project
  mdxSource?: MDXRemoteSerializeResult
}

/**
 * CaseStudy component displays detailed project case studies with structured sections
 * Validates Requirements 6.2, 6.3, 6.6
 */
export function CaseStudy({ project, mdxSource }: CaseStudyProps) {
  // Define the expected section structure for case studies
  const sectionOrder = [
    'Problem',
    'Dataset',
    'Approach',
    'Tools',
    'Insights',
    'Dashboard',
    'Trade-offs',
    'Improvements',
  ]

  // Create a map of sections for easy lookup
  const sectionMap = new Map(
    project.sections.map((section) => [section.title, section.content])
  )

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          {project.title}
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6">
          {project.description}
        </p>

        {/* Tool Tags - Prominently displayed */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.tools.map((tool: Tool) => (
            <Tag key={tool} variant="tool" size="lg">
              {tool}
            </Tag>
          ))}
        </div>

        {/* Date */}
        {project.date && (
          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            <time dateTime={project.date}>
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </time>
          </div>
        )}
      </header>

      {/* MDX Content (if available) */}
      {mdxSource && (
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <MDXContent source={mdxSource} />
        </div>
      )}

      {/* Structured Sections (fallback if no MDX content) */}
      {!mdxSource && project.sections.length > 0 && (
        <div className="space-y-8 sm:space-y-12">
          {sectionOrder.map((sectionTitle) => {
            const content = sectionMap.get(sectionTitle)
            
            // Skip sections that don't exist in the project
            if (!content) return null

            return (
              <section
                key={sectionTitle}
                className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 sm:pl-6"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  {sectionTitle}
                </h2>
                
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <div
                    className="text-slate-700 dark:text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>

                {/* Dashboard Image Placeholder */}
                {sectionTitle === 'Dashboard' && (
                  <div className="mt-6 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                    <div className="relative aspect-video w-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-6">
                          <svg
                            className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-slate-400 dark:text-slate-600 mb-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Dashboard Screenshot
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            )
          })}
        </div>
      )}

      {/* Plain content fallback */}
      {!mdxSource && project.content && project.sections.length === 0 && (
        <div className="prose prose-slate dark:prose-invert max-w-none mt-8">
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
      )}
    </article>
  )
}
