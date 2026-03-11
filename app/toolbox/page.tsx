import { Metadata } from 'next'
import { ToolGrid } from '@/components/shared/ToolGrid'
import { getToolCategories } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Toolbox | Pratham P Nagekar',
  description: 'Tools and technologies I use for data analysis: Power BI, SQL, Python, Excel, Tableau, and more.',
  openGraph: {
    title: 'Toolbox | Pratham P Nagekar',
    description: 'Tools and technologies I use for data analysis: Power BI, SQL, Python, Excel, Tableau, and more.',
  },
}

export default function Toolbox() {
  const toolCategories = getToolCategories()

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Toolbox</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            The tools and technologies I use for data analysis, visualization, and productivity.
          </p>
        </div>

        {/* Tool Grid */}
        <ToolGrid categories={toolCategories} />

        {/* Note */}
        <div className="mt-12 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Note:</strong> Proficiency levels are honest assessments of my current skills. 
            I'm always learning and expanding my toolkit. If you have recommendations for tools I should explore, 
            feel free to reach out!
          </p>
        </div>
      </div>
    </main>
  )
}
