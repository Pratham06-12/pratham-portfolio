'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Tag } from './Tag'
import { prefersReducedMotion } from '@/lib/motion'

export interface ContentCardProps {
  title: string
  description: string
  date?: string
  tags?: string[]
  href?: string
  image?: string
  githubUrl?: string
  readingTime?: number
  type: 'blog' | 'project' | 'changelog'
}

export function ContentCard({
  title,
  description,
  date,
  tags,
  href,
  image,
  githubUrl,
  readingTime,
  type,
}: ContentCardProps) {
  const shouldReduceMotion = prefersReducedMotion()

  // Animation variants with reduced motion support
  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: {
      y: shouldReduceMotion ? 0 : -4,
      scale: shouldReduceMotion ? 1 : 1.01,
    },
  }

  const card = (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {/* Optional Image */}
      {image && (
        <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-700">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        {/* Header with date and reading time */}
        <div className="flex items-center gap-3 mb-3 text-sm text-slate-600 dark:text-slate-400">
          {date && (
            <time dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          )}
          {readingTime && type === 'blog' && (
            <>
              <span aria-hidden="true">•</span>
              <span>{readingTime} min read</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <Tag
                key={tag}
                variant={type === 'blog' ? 'blog' : type === 'project' ? 'tool' : 'default'}
                size="sm"
              >
                {tag}
              </Tag>
            ))}
          </div>
        )}

        {/* GitHub Link */}
        {githubUrl && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
            <span
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(githubUrl, '_blank', 'noopener,noreferrer')
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 cursor-pointer"
            >
              View Repository →
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )

  // If href is provided, wrap in Link for navigation
  if (href) {
    return (
      <Link
        href={href}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-lg"
        aria-label={`Read more about ${title}`}
      >
        {card}
      </Link>
    )
  }

  // Otherwise, return the card without link
  return card
}
