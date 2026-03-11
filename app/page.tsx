import { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { WhatImDoing } from '@/components/home/WhatImDoing'
import { RecentContent } from '@/components/home/RecentContent'
import {
  getRecentBlogPosts,
  getFeaturedProjects,
  getRecentChangelogEntries,
} from '@/lib/content'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Pratham P Nagekar | Data Analyst Portfolio',
  description:
    'Data Analyst specializing in SQL, Power BI, and Analytics. Explore my projects, technical writing, and journey from Electronics Engineering to Data Analytics.',
  openGraph: {
    title: 'Pratham P Nagekar | Data Analyst Portfolio',
    description:
      'Data Analyst specializing in SQL, Power BI, and Analytics. Explore my projects, technical writing, and journey from Electronics Engineering to Data Analytics.',
    type: 'website',
    url: 'https://prathamnagekar.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratham P Nagekar | Data Analyst Portfolio',
    description:
      'Data Analyst specializing in SQL, Power BI, and Analytics. Explore my projects, technical writing, and journey from Electronics Engineering to Data Analytics.',
  },
}

export default function Home() {
  // Fetch content for the home page
  const recentPosts = getRecentBlogPosts(3)
  const featuredProjects = getFeaturedProjects().slice(0, 4)
  const recentChangelog = getRecentChangelogEntries(3)

  return (
    <main className="bg-background-primary text-text-primary">
      {/* Hero Section */}
      <Hero />

      {/* What I'm Doing Now Section */}
      <section className="section-spacing bg-background-secondary/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WhatImDoing />
        </div>
      </section>

      {/* Recent Content Sections */}
      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Recent Blog Posts */}
          <RecentContent type="blog" items={recentPosts} />

          {/* Featured Projects */}
          <RecentContent type="projects" items={featuredProjects} />

          {/* Recent Changelog Entries */}
          <RecentContent type="changelog" items={recentChangelog} />
        </div>
      </section>

      {/* Contact / Let's Connect Section */}
      <section className="section-spacing bg-background-secondary/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            <div>
              <h2 className="heading-section mb-3">Let&apos;s work together</h2>
              <p className="body-base mb-6">
                I&apos;m open to internships and entry-level Data Analyst roles, as well as freelance analytics projects.
                If you think my experience could help your team, I&apos;d love to hear from you.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card-surface">
                  <h3 className="heading-card mb-2">Contact</h3>
                  <ul className="space-y-2 body-caption">
                    <li>
                      <a
                        href={`mailto:${siteConfig.author.email}`}
                        className="text-text-secondary hover:text-primary-300 transition-colors"
                      >
                        {siteConfig.author.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={siteConfig.author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary-300 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href={siteConfig.author.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary-300 transition-colors"
                      >
                        GitHub
                      </a>
                    </li>
                    <li className="text-text-secondary">{siteConfig.author.location}</li>
                  </ul>
                </div>
                <div className="card-surface">
                  <h3 className="heading-card mb-2">Quick links</h3>
                  <ul className="space-y-2 body-caption">
                    <li>
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-300 transition-colors">
                        View resume
                      </a>
                    </li>
                    <li>
                      <a href="/projects" className="text-text-secondary hover:text-primary-300 transition-colors">
                        Browse projects
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="text-text-secondary hover:text-primary-300 transition-colors">
                        Read insights
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Simple contact form placeholder – wired later to backend or mailto */}
            <div className="card-surface">
              <h3 className="heading-card mb-3">Send a quick message</h3>
              <p className="body-caption mb-4">
                Share a role, project idea, or just say hi. I&apos;ll reply as soon as I can.
              </p>
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault()
                  // Placeholder: this can later be replaced with a real backend or email service
                }}
              >
                <div>
                  <label htmlFor="contact-name" className="body-caption block mb-1">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="w-full rounded-md border border-border bg-background-secondary px-3 py-2 text-sm text-text-primary outline-none focus:ring-2 focus:ring-primary-500"
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="body-caption block mb-1">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="w-full rounded-md border border-border bg-background-secondary px-3 py-2 text-sm text-text-primary outline-none focus:ring-2 focus:ring-primary-500"
                    autoComplete="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="body-caption block mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-border bg-background-secondary px-3 py-2 text-sm text-text-primary outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-[10px] bg-primary-500 px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
