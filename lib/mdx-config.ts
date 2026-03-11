import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

/**
 * MDX serialization options with plugins
 */
export const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug as any, // Add IDs to headings
      rehypeHighlight as any, // Syntax highlighting for code blocks
    ],
  },
}

/**
 * Serialize MDX content with configured plugins
 */
export async function serializeMDX(content: string): Promise<MDXRemoteSerializeResult> {
  return await serialize(content, mdxOptions)
}
