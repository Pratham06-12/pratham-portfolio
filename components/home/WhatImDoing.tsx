'use client'

import { motion } from 'framer-motion'

interface Activity {
  title: string
  description: string
  icon: string
}

const activities: Activity[] = [
  {
    title: 'Building Data Projects',
    description:
      'Working on real-world analytics projects—credit risk analysis, e-commerce insights, and systems performance monitoring. Learning by doing, one dataset at a time.',
    icon: '📊',
  },
  {
    title: 'Learning SQL & Power BI',
    description:
      'Deepening my skills in SQL query optimization and Power BI dashboard design. Practicing with real datasets and sharing what I learn through blog posts.',
    icon: '💻',
  },
  {
    title: 'Transitioning to Analytics',
    description:
      'Making the shift from Electronics Engineering (VLSI) to Data Analytics. Building a portfolio, connecting with the data community, and preparing for analyst roles.',
    icon: '🚀',
  },
]

export function WhatImDoing() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            What I'm Doing Now
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Here's what's keeping me busy these days
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl" aria-hidden="true">
                {activity.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {activity.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
