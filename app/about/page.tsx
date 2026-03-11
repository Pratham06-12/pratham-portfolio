import { Metadata } from 'next'
import Link from 'next/link'
import { Timeline } from '@/components/shared/Timeline'
import { getTimelineEvents } from '@/lib/content'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About | Pratham P Nagekar',
  description: 'Learn about my journey from Electronics Engineering (VLSI) to Data Analytics, my core values, and what I\'m working on now.',
  openGraph: {
    title: 'About | Pratham P Nagekar',
    description: 'Learn about my journey from Electronics Engineering (VLSI) to Data Analytics, my core values, and what I\'m working on now.',
  },
}

export default function About() {
  const timelineEvents = getTimelineEvents()

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            From Circuits to Data
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I'm Pratham, a final-year Electronics Engineering student who discovered a passion for data analytics. 
            Here's my story.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Narrative Section */}
        <section className="mb-16 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">The Journey</h2>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I started my undergraduate journey in Electronics Engineering with a specialization in VLSI design. 
            I was fascinated by digital systems, circuit design, and the precision required in engineering. 
            But during my Systems Engineering internship at Pantech Prolabs in 2023, something clicked.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Working on performance analysis and system optimization, I realized I loved the detective work of 
            finding patterns in data, identifying bottlenecks, and turning numbers into actionable insights. 
            The analytical skills I'd developed in engineering translated perfectly to data analysis, but this 
            felt more aligned with what I wanted to do every day.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            So I made the decision to transition. I started learning SQL, Power BI, and data analysis fundamentals. 
            I built projects—credit risk analysis, e-commerce sales analysis, systems performance dashboards—to 
            apply what I was learning and develop a portfolio that reflected my new direction.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm not claiming to be a senior analyst or a data science expert. I'm a transitioning analyst who's 
            building skills, learning from every project, and working toward my first full-time role in data analytics. 
            This portfolio is a reflection of that journey—honest, grounded, and focused on continuous improvement.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Timeline</h2>
          <Timeline events={timelineEvents} />
        </section>

        {/* Core Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-3">Data Clarity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Complex data should tell a simple story. I focus on making insights accessible and actionable, 
                not buried in jargon or overcomplicated visualizations.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-3">Clean Analysis</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Good analysis starts with clean data and clear methodology. I prioritize data quality, 
                documentation, and reproducible workflows over quick-and-dirty solutions.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-3">Business Impact</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Analysis is only valuable if it drives decisions. I always ask: "So what?" and "What should 
                we do about this?" to ensure insights lead to action.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The data field evolves constantly. I'm committed to learning new tools, techniques, and 
                best practices—and sharing what I learn along the way.
              </p>
            </div>
          </div>
        </section>

        {/* Now Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">What I'm Doing Now</h2>
          <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-3 text-blue-600 dark:text-blue-400">•</span>
                <span>Completing my final year of Electronics Engineering (VLSI) at my university in Bengaluru</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600 dark:text-blue-400">•</span>
                <span>Building data analysis projects with SQL and Power BI to strengthen my portfolio</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600 dark:text-blue-400">•</span>
                <span>Writing technical blog posts on SQL optimization, Power BI best practices, and career transition insights</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600 dark:text-blue-400">•</span>
                <span>Expanding my Python skills for data analysis and automation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600 dark:text-blue-400">•</span>
                <span>Actively seeking entry-level Data Analyst opportunities where I can contribute and continue learning</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
