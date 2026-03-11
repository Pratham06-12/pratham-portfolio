export const siteConfig = {
  name: 'Pratham P Nagekar',
  title: 'Pratham P Nagekar | Data Analyst',
  description:
    'Personal portfolio showcasing data analysis projects, technical writing, and professional journey.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: {
    name: 'Pratham P Nagekar',
    email: 'prathamnagekar06@gmail.com',
    phone: '8073450713',
    location: 'Bengaluru, India',
    title: 'Data Analyst | SQL • Power BI • Analytics',
    github: 'https://github.com/Pratham06-12',
    linkedin: 'https://www.linkedin.com/in/prathamnagekar06/',
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/blog' },
    { name: 'Projects', href: '/projects' },
    { name: 'Toolbox', href: '/toolbox' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Resume', href: '/resume.pdf' },
  ],
}

export type SiteConfig = typeof siteConfig
