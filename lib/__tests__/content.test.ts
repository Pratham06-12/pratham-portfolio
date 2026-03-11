import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostsByTag,
  getRecentBlogPosts,
  getAllProjects,
  getProjectBySlug,
  getFeaturedProjects,
  getAllChangelogEntries,
  getRecentChangelogEntries,
  getTimelineEvents,
  getToolCategories,
} from '../content'
import * as mdxModule from '../mdx'
import * as changelogModule from '@/config/changelog'
import * as timelineModule from '@/config/timeline'
import * as toolsModule from '@/config/tools'

// Mock the MDX module
vi.mock('../mdx', () => ({
  getAllMDX: vi.fn(),
  getMDXBySlug: vi.fn(),
}))

// Mock config modules
vi.mock('@/config/changelog', () => ({
  getAllChangelogEntries: vi.fn(),
  getRecentChangelogEntries: vi.fn(),
}))

vi.mock('@/config/timeline', () => ({
  getTimelineEvents: vi.fn(),
}))

vi.mock('@/config/tools', () => ({
  getToolCategories: vi.fn(),
}))

describe('Blog Post Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getAllBlogPosts', () => {
    it('should return all published blog posts sorted by date', () => {
      const mockPosts = [
        {
          slug: 'post-1',
          frontmatter: {
            title: 'Post 1',
            date: '2024-01-15',
            excerpt: 'Excerpt 1',
            tags: ['SQL'],
            published: true,
          },
          content: 'Content 1',
          readingTime: 5,
        },
        {
          slug: 'post-2',
          frontmatter: {
            title: 'Post 2',
            date: '2024-01-20',
            excerpt: 'Excerpt 2',
            tags: ['Power BI'],
            published: true,
          },
          content: 'Content 2',
          readingTime: 7,
        },
      ]

      vi.mocked(mdxModule.getAllMDX).mockReturnValue(mockPosts)

      const result = getAllBlogPosts()

      expect(result).toHaveLength(2)
      expect(result[0].slug).toBe('post-2') // Most recent first
      expect(result[1].slug).toBe('post-1')
      expect(result[0].title).toBe('Post 2')
    })

    it('should filter out unpublished posts', () => {
      const mockPosts = [
        {
          slug: 'post-1',
          frontmatter: {
            title: 'Post 1',
            date: '2024-01-15',
            excerpt: 'Excerpt 1',
            tags: ['SQL'],
            published: true,
          },
          content: 'Content 1',
          readingTime: 5,
        },
        {
          slug: 'post-2',
          frontmatter: {
            title: 'Post 2',
            date: '2024-01-20',
            excerpt: 'Excerpt 2',
            tags: ['Power BI'],
            published: false,
          },
          content: 'Content 2',
          readingTime: 7,
        },
      ]

      vi.mocked(mdxModule.getAllMDX).mockReturnValue(mockPosts)

      const result = getAllBlogPosts()

      expect(result).toHaveLength(1)
      expect(result[0].slug).toBe('post-1')
    })

    it('should return empty array on error', () => {
      vi.mocked(mdxModule.getAllMDX).mockImplementation(() => {
        throw new Error('File system error')
      })

      const result = getAllBlogPosts()

      expect(result).toEqual([])
    })
  })

  describe('getBlogPostBySlug', () => {
    it('should return a single blog post by slug', () => {
      const mockPost = {
        slug: 'test-post',
        frontmatter: {
          title: 'Test Post',
          date: '2024-01-15',
          excerpt: 'Test excerpt',
          tags: ['SQL', 'Data Analysis'],
          published: true,
        },
        content: 'Test content',
        readingTime: 5,
      }

      vi.mocked(mdxModule.getMDXBySlug).mockReturnValue(mockPost)

      const result = getBlogPostBySlug('test-post')

      expect(result.slug).toBe('test-post')
      expect(result.title).toBe('Test Post')
      expect(result.tags).toEqual(['SQL', 'Data Analysis'])
    })

    it('should throw error if post not found', () => {
      vi.mocked(mdxModule.getMDXBySlug).mockImplementation(() => {
        throw new Error('File not found')
      })

      expect(() => getBlogPostBySlug('non-existent')).toThrow(
        'Blog post not found: non-existent'
      )
    })
  })

  describe('getBlogPostsByTag', () => {
    it('should filter posts by tag', () => {
      const mockPosts = [
        {
          slug: 'post-1',
          frontmatter: {
            title: 'Post 1',
            date: '2024-01-15',
            excerpt: 'Excerpt 1',
            tags: ['SQL', 'Data Analysis'],
            published: true,
          },
          content: 'Content 1',
          readingTime: 5,
        },
        {
          slug: 'post-2',
          frontmatter: {
            title: 'Post 2',
            date: '2024-01-20',
            excerpt: 'Excerpt 2',
            tags: ['Power BI'],
            published: true,
          },
          content: 'Content 2',
          readingTime: 7,
        },
      ]

      vi.mocked(mdxModule.getAllMDX).mockReturnValue(mockPosts)

      const result = getBlogPostsByTag('SQL')

      expect(result).toHaveLength(1)
      expect(result[0].slug).toBe('post-1')
    })
  })

  describe('getRecentBlogPosts', () => {
    it('should return the most recent posts', () => {
      const mockPosts = [
        {
          slug: 'post-1',
          frontmatter: {
            title: 'Post 1',
            date: '2024-01-15',
            excerpt: 'Excerpt 1',
            tags: ['SQL'],
            published: true,
          },
          content: 'Content 1',
          readingTime: 5,
        },
        {
          slug: 'post-2',
          frontmatter: {
            title: 'Post 2',
            date: '2024-01-20',
            excerpt: 'Excerpt 2',
            tags: ['Power BI'],
            published: true,
          },
          content: 'Content 2',
          readingTime: 7,
        },
        {
          slug: 'post-3',
          frontmatter: {
            title: 'Post 3',
            date: '2024-01-25',
            excerpt: 'Excerpt 3',
            tags: ['Career'],
            published: true,
          },
          content: 'Content 3',
          readingTime: 6,
        },
      ]

      vi.mocked(mdxModule.getAllMDX).mockReturnValue(mockPosts)

      const result = getRecentBlogPosts(2)

      expect(result).toHaveLength(2)
      expect(result[0].slug).toBe('post-3')
      expect(result[1].slug).toBe('post-2')
    })

    it('should default to 3 posts if count not specified', () => {
      const mockPosts = Array.from({ length: 5 }, (_, i) => ({
        slug: `post-${i}`,
        frontmatter: {
          title: `Post ${i}`,
          date: `2024-01-${10 + i}`,
          excerpt: `Excerpt ${i}`,
          tags: ['SQL'],
          published: true,
        },
        content: `Content ${i}`,
        readingTime: 5,
      }))

      vi.mocked(mdxModule.getAllMDX).mockReturnValue(mockPosts)

      const result = getRecentBlogPosts()

      expect(result).toHaveLength(3)
    })
  })
})

describe('Project Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getAllProjects', () => {
    it('should return all projects sorted by date', () => {
      const mockProjects = [
        {
          slug: 'project-1',
          frontmatter: {
            title: 'Project 1',
            description: 'Description 1',
            tools: ['SQL', 'Power BI'],
            date: '2024-01-15',
            featured: true,
            sections: [],
          },
          content: 'Content 1',
          readingTime: 10,
        },
        {
          slug: 'project-2',
          frontmatter: {
            title: 'Project 2',
            description: 'Description 2',
            tools: ['Python', 'Excel'],
            date: '2024-01-20',
            featured: false,
            sections: [],
          },
          content: 'Content 2',
          readingTime: 12,
        },
      ]

      vi.mocked(mdxModule.getAllMDX).mockReturnValue(mockProjects)

      const result = getAllProjects()

      expect(result).toHaveLength(2)
      expect(result[0].slug).toBe('project-2') // Most recent first
      expect(result[1].slug).toBe('project-1')
    })

    it('should return empty array on error', () => {
      vi.mocked(mdxModule.getAllMDX).mockImplementation(() => {
        throw new Error('File system error')
      })

      const result = getAllProjects()

      expect(result).toEqual([])
    })
  })

  describe('getProjectBySlug', () => {
    it('should return a single project by slug', () => {
      const mockProject = {
        slug: 'test-project',
        frontmatter: {
          title: 'Test Project',
          description: 'Test description',
          tools: ['SQL', 'Power BI'],
          date: '2024-01-15',
          featured: true,
          sections: [],
        },
        content: 'Test content',
        readingTime: 10,
      }

      vi.mocked(mdxModule.getMDXBySlug).mockReturnValue(mockProject)

      const result = getProjectBySlug('test-project')

      expect(result.slug).toBe('test-project')
      expect(result.title).toBe('Test Project')
      expect(result.tools).toEqual(['SQL', 'Power BI'])
    })

    it('should throw error if project not found', () => {
      vi.mocked(mdxModule.getMDXBySlug).mockImplementation(() => {
        throw new Error('File not found')
      })

      expect(() => getProjectBySlug('non-existent')).toThrow(
        'Project not found: non-existent'
      )
    })
  })

  describe('getFeaturedProjects', () => {
    it('should return only featured projects', () => {
      const mockProjects = [
        {
          slug: 'project-1',
          frontmatter: {
            title: 'Project 1',
            description: 'Description 1',
            tools: ['SQL'],
            date: '2024-01-15',
            featured: true,
            sections: [],
          },
          content: 'Content 1',
          readingTime: 10,
        },
        {
          slug: 'project-2',
          frontmatter: {
            title: 'Project 2',
            description: 'Description 2',
            tools: ['Python'],
            date: '2024-01-20',
            featured: false,
            sections: [],
          },
          content: 'Content 2',
          readingTime: 12,
        },
        {
          slug: 'project-3',
          frontmatter: {
            title: 'Project 3',
            description: 'Description 3',
            tools: ['Excel'],
            date: '2024-01-25',
            featured: true,
            sections: [],
          },
          content: 'Content 3',
          readingTime: 8,
        },
      ]

      vi.mocked(mdxModule.getAllMDX).mockReturnValue(mockProjects)

      const result = getFeaturedProjects()

      expect(result).toHaveLength(2)
      expect(result[0].slug).toBe('project-3')
      expect(result[1].slug).toBe('project-1')
    })
  })
})

describe('Changelog Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getAllChangelogEntries', () => {
    it('should return all changelog entries', () => {
      const mockEntries = [
        {
          id: 'entry-1',
          date: '2024-01-15',
          title: 'Entry 1',
          description: 'Description 1',
          type: 'feature' as const,
        },
        {
          id: 'entry-2',
          date: '2024-01-20',
          title: 'Entry 2',
          description: 'Description 2',
          type: 'content' as const,
        },
      ]

      vi.mocked(changelogModule.getAllChangelogEntries).mockReturnValue(
        mockEntries
      )

      const result = getAllChangelogEntries()

      expect(result).toHaveLength(2)
      expect(result[0].id).toBe('entry-1')
    })
  })

  describe('getRecentChangelogEntries', () => {
    it('should return recent changelog entries', () => {
      const mockEntries = [
        {
          id: 'entry-1',
          date: '2024-01-15',
          title: 'Entry 1',
          description: 'Description 1',
          type: 'feature' as const,
        },
      ]

      vi.mocked(changelogModule.getRecentChangelogEntries).mockReturnValue(
        mockEntries
      )

      const result = getRecentChangelogEntries(3)

      expect(result).toHaveLength(1)
    })
  })
})

describe('Timeline Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getTimelineEvents', () => {
    it('should return all timeline events', () => {
      const mockEvents = [
        {
          id: 'event-1',
          date: '2021-08',
          title: 'Event 1',
          description: 'Description 1',
          type: 'education' as const,
        },
        {
          id: 'event-2',
          date: '2023-06',
          title: 'Event 2',
          description: 'Description 2',
          type: 'work' as const,
        },
      ]

      vi.mocked(timelineModule.getTimelineEvents).mockReturnValue(mockEvents)

      const result = getTimelineEvents()

      expect(result).toHaveLength(2)
      expect(result[0].id).toBe('event-1')
    })
  })
})

describe('Tool Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getToolCategories', () => {
    it('should return all tool categories', () => {
      const mockCategories = [
        {
          name: 'Data Tools',
          tools: [
            {
              name: 'Power BI',
              description: 'BI tool',
              proficiency: 'proficient' as const,
            },
          ],
        },
      ]

      vi.mocked(toolsModule.getToolCategories).mockReturnValue(mockCategories)

      const result = getToolCategories()

      expect(result).toHaveLength(1)
      expect(result[0].name).toBe('Data Tools')
    })
  })
})
