import { Metadata } from 'next'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { getAllProjects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects | Pratham P Nagekar',
  description: 'Data analysis case studies including credit risk analysis, e-commerce sales analysis, and systems performance analysis.',
  openGraph: {
    title: 'Projects | Pratham P Nagekar',
    description: 'Data analysis case studies including credit risk analysis, e-commerce sales analysis, and systems performance analysis.',
  },
}

export default function Projects() {
  const projects = getAllProjects()

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Case studies showcasing data analysis projects with SQL, Power BI, and Python.
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                tools={project.tools}
                slug={project.slug}
                date={project.date}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
