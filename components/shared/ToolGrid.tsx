'use client'

import { motion } from 'framer-motion'
import { ToolCategory } from '@/types/site'

export interface ToolGridProps {
  categories: ToolCategory[]
}

const proficiencyLabels = {
  learning: 'Learning',
  intermediate: 'Intermediate',
  proficient: 'Proficient',
}

const proficiencyColors = {
  learning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  intermediate: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  proficient: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
}

export function ToolGrid({ categories }: ToolGridProps) {
  return (
    <div className="space-y-12">
      {categories.map((category, categoryIndex) => (
        <motion.section
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.5,
            delay: categoryIndex * 0.1,
            ease: 'easeOut',
          }}
        >
          {/* Category heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            {category.name}
          </h2>

          {/* Tools grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {category.tools.map((tool, toolIndex) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.3,
                  delay: categoryIndex * 0.1 + toolIndex * 0.05,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Tool header with name and proficiency */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex-1">
                    {tool.name}
                  </h3>
                  <span
                    className={`inline-flex items-center justify-center px-2.5 py-1 text-xs font-medium rounded-full ${proficiencyColors[tool.proficiency]}`}
                    aria-label={`Proficiency level: ${proficiencyLabels[tool.proficiency]}`}
                  >
                    {proficiencyLabels[tool.proficiency]}
                  </span>
                </div>

                {/* Tool description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {tool.description}
                </p>

                {/* Optional icon placeholder - can be enhanced later */}
                {tool.icon && (
                  <div className="mt-4 text-slate-400 dark:text-slate-500">
                    <span className="text-xs">{tool.icon}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  )
}
