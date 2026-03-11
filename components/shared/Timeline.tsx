'use client'

import { motion } from 'framer-motion'
import { TimelineEvent } from '@/types/site'
import { GraduationCap, Briefcase, Code } from 'lucide-react'

export interface TimelineProps {
  events: TimelineEvent[]
}

const typeIcons = {
  education: GraduationCap,
  work: Briefcase,
  project: Code,
}

const typeColors = {
  education: 'bg-blue-500 dark:bg-blue-400',
  work: 'bg-green-500 dark:bg-green-400',
  project: 'bg-purple-500 dark:bg-purple-400',
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical connecting line */}
      <div
        className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"
        aria-hidden="true"
      />

      {/* Timeline events */}
      <div className="space-y-8 md:space-y-12">
        {events.map((event, index) => {
          const Icon = typeIcons[event.type]
          const colorClass = typeColors[event.type]

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="relative pl-12 md:pl-16"
            >
              {/* Icon circle */}
              <div
                className={`absolute left-0 md:left-2 w-8 h-8 md:w-12 md:h-12 rounded-full ${colorClass} flex items-center justify-center shadow-lg`}
              >
                <Icon
                  className="w-4 h-4 md:w-6 md:h-6 text-white"
                  aria-hidden="true"
                />
              </div>

              {/* Content card */}
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* Date and location */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <time
                    dateTime={event.date}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400"
                  >
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </time>
                  {event.location && (
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {event.location}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
