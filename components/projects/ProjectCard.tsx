'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Tag } from '../ui/Tag'
import type { Tool } from '@/types/project'

export interface ProjectCardProps {
  title: string
  description: string
  tools: Tool[]
  slug: string
  date?: string
}

export function ProjectCard({
  title,
  description,
  tools,
  slug,
  date,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block h-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-lg"
      aria-label={`View case study for ${title}`}
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div className="flex-1 flex flex-col p-6">
          {/* Date */}
          {date && (
            <div className="mb-3 text-sm text-slate-600 dark:text-slate-400">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                })}
              </time>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 flex-1">
            {description}
          </p>

          {/* Tool Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tools.map((tool) => (
              <Tag key={tool} variant="tool" size="sm">
                {tool}
              </Tag>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
