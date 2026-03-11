import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import fs from 'fs'
import path from 'path'
import { 
  getContentDirectory, 
  parseMDXFile, 
  extractHeadings 
} from '../mdx'

describe('MDX Utilities', () => {
  const testContentDir = path.join(process.cwd(), 'content', 'test-blog')
  const testFilePath = path.join(testContentDir, 'test-post.mdx')

  beforeEach(() => {
    // Create test directory and file
    if (!fs.existsSync(testContentDir)) {
      fs.mkdirSync(testContentDir, { recursive: true })
    }

    const testContent = `---
title: Test Post
date: 2024-01-15
excerpt: This is a test post
tags: ['SQL', 'Data Analysis']
published: true
---

# Introduction

This is a test blog post with some content.

## Section 1

Some content here with approximately fifty words to test the reading time calculation feature which should work correctly based on word count and return appropriate minutes.

### Subsection

More content.

\`\`\`javascript
const test = 'code block';
\`\`\`

## Section 2

Final section.
`
    fs.writeFileSync(testFilePath, testContent)
  })

  afterEach(() => {
    // Clean up test files
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath)
    }
    if (fs.existsSync(testContentDir)) {
      fs.rmdirSync(testContentDir)
    }
  })

  describe('getContentDirectory', () => {
    it('should return correct path for blog content', () => {
      const dir = getContentDirectory('blog')
      expect(dir).toContain('content')
      expect(dir).toContain('blog')
    })

    it('should return correct path for projects content', () => {
      const dir = getContentDirectory('projects')
      expect(dir).toContain('content')
      expect(dir).toContain('projects')
    })
  })

  describe('parseMDXFile', () => {
    it('should parse frontmatter and content correctly', () => {
      const result = parseMDXFile(testFilePath)
      
      expect(result.frontmatter).toBeDefined()
      expect(result.frontmatter.title).toBe('Test Post')
      expect(result.frontmatter.date).toBe('2024-01-15')
      expect(result.frontmatter.excerpt).toBe('This is a test post')
      expect(result.frontmatter.published).toBe(true)
      expect(result.content).toContain('# Introduction')
      expect(result.content).toContain('This is a test blog post')
    })
  })

  describe('extractHeadings', () => {
    it('should extract all headings from content', () => {
      const content = `
# Main Title
## Section One
### Subsection
## Section Two
`
      const headings = extractHeadings(content)
      
      expect(headings).toHaveLength(4)
      expect(headings[0]).toEqual({
        id: 'main-title',
        text: 'Main Title',
        level: 1
      })
      expect(headings[1]).toEqual({
        id: 'section-one',
        text: 'Section One',
        level: 2
      })
    })

    it('should handle special characters in headings', () => {
      const content = `## Hello, World! (2024)`
      const headings = extractHeadings(content)
      
      expect(headings[0].id).toBe('hello-world-2024')
      expect(headings[0].text).toBe('Hello, World! (2024)')
    })

    it('should return empty array for content without headings', () => {
      const content = 'Just some regular text without any headings.'
      const headings = extractHeadings(content)
      
      expect(headings).toHaveLength(0)
    })
  })
})
