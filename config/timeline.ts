export interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  type: 'education' | 'work' | 'project'
  location?: string
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'timeline-001',
    date: '2021-08',
    title: 'Started B.Tech in Electronics Engineering (VLSI)',
    description:
      'Began undergraduate studies in Electronics Engineering with specialization in VLSI design. Developed strong analytical and problem-solving skills through coursework in digital systems, signal processing, and circuit design.',
    type: 'education',
    location: 'Bengaluru, India',
  },
  {
    id: 'timeline-002',
    date: '2023-06',
    title: 'Systems Engineering Intern at Pantech Prolabs',
    description:
      'Worked on systems engineering projects focusing on performance analysis and optimization. Gained hands-on experience with data collection, analysis, and reporting. Developed skills in identifying system bottlenecks and proposing data-driven improvements.',
    type: 'work',
    location: 'Bengaluru, India',
  },
  {
    id: 'timeline-003',
    date: '2023-09',
    title: 'Discovered Data Analytics',
    description:
      'Realized my passion for working with data during internship. Started learning SQL, Power BI, and data analysis fundamentals. Made the decision to transition from VLSI engineering to data analytics.',
    type: 'education',
  },
  {
    id: 'timeline-004',
    date: '2023-11',
    title: 'Credit Risk Analysis Project',
    description:
      'Built comprehensive credit risk analysis system using SQL for data extraction and Power BI for visualization. Analyzed loan default patterns, identified key risk factors, and created interactive dashboard for risk assessment. First major data analytics project.',
    type: 'project',
  },
  {
    id: 'timeline-005',
    date: '2024-01',
    title: 'E-commerce Sales Analysis Project',
    description:
      'Analyzed e-commerce sales data to identify trends, customer segments, and product performance. Used SQL for data transformation and Power BI for creating interactive dashboards. Discovered actionable insights for inventory optimization and marketing strategies.',
    type: 'project',
  },
  {
    id: 'timeline-006',
    date: '2024-02',
    title: 'Systems Performance Analysis Project',
    description:
      'Applied data analytics skills to systems engineering domain. Analyzed performance metrics, identified bottlenecks, and created monitoring dashboards. Combined engineering background with analytics skills to deliver comprehensive performance insights.',
    type: 'project',
  },
  {
    id: 'timeline-007',
    date: '2024-03',
    title: 'Building Portfolio & Technical Writing',
    description:
      'Launched personal portfolio website to showcase projects and share knowledge. Started writing technical blog posts on SQL optimization, Power BI best practices, and career transition insights. Focusing on continuous learning and building professional presence.',
    type: 'education',
  },
  {
    id: 'timeline-008',
    date: '2024-03-11',
    title: 'Vendor Invoice Intelligence (ML Project)',
    description:
      'Built and deployed a machine learning project for predictive invoice audit. Integrated SQL feature engineering with Random Forest models and a Streamlit UI, demonstrating full-stack data analytics & ML expertise.',
    type: 'project',
  },
]

export function getTimelineEvents(): TimelineEvent[] {
  return timelineEvents.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
}

export function getTimelineEventsByType(
  type: TimelineEvent['type']
): TimelineEvent[] {
  return getTimelineEvents().filter((event) => event.type === type)
}
