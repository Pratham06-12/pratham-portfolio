'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { prefersReducedMotion } from '@/lib/motion'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export function Hero() {
  const shouldReduceMotion = prefersReducedMotion()

  const containerVariants = shouldReduceMotion
    ? undefined
    : {
        initial: {},
        animate: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }

  const itemVariants = shouldReduceMotion
    ? undefined
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section className="relative overflow-hidden section-spacing">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
        >
          {/* Left column – copy + CTAs */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full bg-background-card/70 px-3 py-1 text-xs font-medium text-text-secondary ring-1 ring-border">
              From Circuits to Data
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="heading-hero">
                Hey, I&apos;m Pratham 👋
              </h1>
              <p className="text-lg font-medium text-primary-400">
                Data Analyst&nbsp;| SQL · Power BI · Analytics
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 body-base">
              <p>
                I&apos;m a final-year Electronics Engineering student in Bengaluru, transitioning from VLSI and circuits to data analytics.
              </p>
              <p>
                I turn messy, real-world data into clear stories that help teams ship better products and make sharper decisions—using SQL, Power BI, Excel, and Python.
              </p>
              <p>
                This portfolio highlights the projects, dashboards, and analyses that show that journey in action.
              </p>
            </motion.div>

            {/* Primary CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                asChild={false}
                variant="primary"
                size="md"
                onClick={() => {
                  window.open('/resume.pdf', '_blank')
                }}
              >
                Download Resume
              </Button>
              <Link href="/projects">
                <Button variant="secondary" size="md">
                  View Projects
                </Button>
              </Link>
            </motion.div>

            {/* Social row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 body-caption"
            >
              <span className="text-text-secondary">Also find me on</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-300 transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-primary-500" />
                  GitHub
                </a>
                <a
                  href={siteConfig.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-300 transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-primary-500" />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-300 transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-success" />
                  Email
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right column – data visualization themed card */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="card-surface relative overflow-hidden">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="body-caption text-text-secondary">Portfolio analytics snapshot</p>
                  <p className="mt-1 text-sm font-semibold text-text-primary">
                    Projects across SQL, Power BI, Excel &amp; Python
                  </p>
                </div>
                <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                  Data-focused
                </span>
              </div>

              {/* Mock chart visuals */}
              <div className="mt-2 grid gap-4 md:grid-cols-2">
                {/* Line chart */}
                <div className="relative h-32 rounded-lg bg-background-secondary/80 p-3">
                  <div className="absolute inset-3">
                    <svg
                      viewBox="0 0 100 40"
                      className="h-full w-full text-primary-500"
                      aria-hidden="true"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        points="0,30 15,25 30,28 45,18 60,22 75,12 90,15 100,8"
                      />
                    </svg>
                  </div>
                  <p className="body-caption mt-2 text-text-secondary">
                    Analysis depth across projects over time
                  </p>
                </div>

                {/* Bar chart */}
                <div className="flex h-32 flex-col justify-between rounded-lg bg-background-secondary/80 p-3">
                  <div className="flex items-end gap-1.5">
                    <div className="h-6 w-2 rounded-sm bg-primary-500/40" />
                    <div className="h-10 w-2 rounded-sm bg-primary-500/60" />
                    <div className="h-16 w-2 rounded-sm bg-primary-500" />
                    <div className="h-10 w-2 rounded-sm bg-primary-500/60" />
                    <div className="h-8 w-2 rounded-sm bg-primary-500/50" />
                  </div>
                  <p className="body-caption text-text-secondary">
                    SQL, BI, Excel, and Python emphasis
                  </p>
                </div>
              </div>

              {/* Footer stats */}
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
                <div>
                  <p className="body-caption text-text-secondary">Case studies</p>
                  <p className="mt-1 text-sm font-semibold text-text-primary">3+</p>
                </div>
                <div>
                  <p className="body-caption text-text-secondary">Dashboards</p>
                  <p className="mt-1 text-sm font-semibold text-text-primary">Power BI</p>
                </div>
                <div>
                  <p className="body-caption text-text-secondary">Location</p>
                  <p className="mt-1 text-sm font-semibold text-text-primary">
                    {siteConfig.author.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
