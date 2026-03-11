'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXComponents } from './MDXComponents'

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

/**
 * Render MDX content with custom components
 */
export function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={MDXComponents} />
}
