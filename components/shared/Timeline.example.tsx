import { Timeline } from './Timeline'
import type { TimelineEvent } from '@/types/site'

const exampleEvents: TimelineEvent[] = [
  {
    id: 'example-1',
    date: '2021-08',
    title: 'Started B.Tech in Electronics Engineering (VLSI)',
    description:
      'Began undergraduate studies in Electronics Engineering with specialization in VLSI design. Developed strong analytical and problem-solving skills through coursework in digital systems, signal processing, and circuit design.',
    type: 'education',
    location: 'Bengaluru, India',
  },
  {
    id: 'example-2',
    date: '2023-06',
    title: 'Systems Engineering Intern at Pantech Prolabs',
    description:
      'Worked on systems engineering projects focusing on performance analysis and optimization. Gained hands-on experience with data collection, analysis, and reporting.',
    type: 'work',
    location: 'Bengaluru, India',
  },
  {
    id: 'example-3',
    date: '2023-09',
    title: 'Discovered Data Analytics',
    description:
      'Realized my passion for working with data during internship. Started learning SQL, Power BI, and data analysis fundamentals.',
    type: 'education',
  },
  {
    id: 'example-4',
    date: '2023-11',
    title: 'Credit Risk Analysis Project',
    description:
      'Built comprehensive credit risk analysis system using SQL for data extraction and Power BI for visualization. Analyzed loan default patterns and created interactive dashboard.',
    type: 'project',
  },
  {
    id: 'example-5',
    date: '2024-01',
    title: 'E-commerce Sales Analysis Project',
    description:
      'Analyzed e-commerce sales data to identify trends, customer segments, and product performance. Used SQL for data transformation and Power BI for creating interactive dashboards.',
    type: 'project',
  },
]

export default function TimelineExample() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-slate-100">
        Timeline Component
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Displays a vertical timeline with connecting line, differentiated event
        types with icons, and reveal animations.
      </p>

      <Timeline events={exampleEvents} />
    </div>
  )
}
