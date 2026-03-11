import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllProjects, getProjectBySlug } from '@/lib/content'
import { serializeMDX } from '@/lib/mdx-config'
import { CaseStudy } from '@/components/projects/CaseStudy'

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  try {
    const project = getProjectBySlug(params.slug)
    
    return {
      title: `${project.title} | Pratham P Nagekar`,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        type: 'article',
      },
    }
  } catch {
    return {
      title: 'Project Not Found',
    }
  }
}

export default async function ProjectDetail({ params }: ProjectDetailPageProps) {
  let project
  try {
    project = getProjectBySlug(params.slug)
  } catch {
    notFound()
  }

  const mdxSource = await serializeMDX(project.content || '')

  return (
    <main className="min-h-screen">
      <CaseStudy project={project} mdxSource={mdxSource} />
    </main>
  )
}
