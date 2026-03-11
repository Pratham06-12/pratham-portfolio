import { Metadata } from 'next'
import { getAllChangelogEntries } from '@/lib/content'
import { ChangelogEntry } from '@/types/changelog'

export const metadata: Metadata = {
  title: 'Changelog | Pratham P Nagekar',
  description: 'Track updates, new content, and improvements to this portfolio website.',
  openGraph: {
    title: 'Changelog | Pratham P Nagekar',
    description: 'Track updates, new content, and improvements to this portfolio website.',
  },
}

function ChangelogEntryCard({ entry }: { entry: ChangelogEntry }) {
  const typeColors = {
    feature: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    content: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    improvement: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    fix: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  }

  const formattedDate = new Date(entry.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`px-2 py-1 rounded text-xs font-medium uppercase ${
                typeColors[entry.type]
              }`}
            >
              {entry.type}
            </span>
            <time className="text-sm text-gray-600 dark:text-gray-400">
              {formattedDate}
            </time>
          </div>
          <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{entry.description}</p>
        </div>
      </div>

      {entry.details && (
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
            Show details
          </summary>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {entry.details}
          </p>
        </details>
      )}
    </div>
  )
}

export default function Changelog() {
  const entries = getAllChangelogEntries()

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Changelog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A running log of updates, new content, and improvements to this portfolio.
          </p>
        </div>

        {/* Changelog Entries */}
        {entries.length > 0 ? (
          <div className="space-y-6">
            {entries.map((entry) => (
              <ChangelogEntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No changelog entries yet. Check back soon!
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500">
          <p className="text-gray-700 dark:text-gray-300">
            This changelog reflects my commitment to continuous improvement. Each entry represents 
            a step forward in building a better portfolio and sharing more valuable content.
          </p>
        </div>
      </div>
    </main>
  )
}
