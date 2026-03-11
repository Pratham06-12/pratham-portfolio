import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Custom heading component with anchor links
 */
function createHeading(level: number) {
  const Heading = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')
      : undefined

    return React.createElement(
      Tag,
      {
        id,
        className: cn(
          'scroll-mt-20 font-bold',
          level === 1 && 'text-4xl mt-8 mb-4',
          level === 2 && 'text-3xl mt-8 mb-4',
          level === 3 && 'text-2xl mt-6 mb-3',
          level === 4 && 'text-xl mt-4 mb-2',
          level === 5 && 'text-lg mt-4 mb-2',
          level === 6 && 'text-base mt-4 mb-2'
        ),
        ...props,
      },
      children
    )
  }
  Heading.displayName = `Heading${level}`
  return Heading
}

/**
 * Custom code block component with syntax highlighting
 */
function CodeBlock({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const isInline = !className

  if (isInline) {
    return (
      <code
        className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm font-mono text-pink-600 dark:text-pink-400"
        {...props}
      >
        {children}
      </code>
    )
  }

  return (
    <code
      className={cn('block p-4 rounded-lg overflow-x-auto text-sm font-mono', className)}
      {...props}
    >
      {children}
    </code>
  )
}

/**
 * Custom pre component for code blocks
 */
function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-gray-900 dark:bg-gray-950"
      {...props}
    >
      {children}
    </pre>
  )
}

/**
 * Custom link component
 */
function Link({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href?.startsWith('http')

  return (
    <a
      href={href}
      className="text-blue-600 dark:text-blue-400 hover:underline"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  )
}

/**
 * Custom blockquote component
 */
function Blockquote({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="my-6 border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300"
      {...props}
    >
      {children}
    </blockquote>
  )
}

/**
 * Custom paragraph component
 */
function Paragraph({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className="my-4 leading-7" {...props}>
      {children}
    </p>
  )
}

/**
 * Custom list components
 */
function UnorderedList({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className="my-4 ml-6 list-disc space-y-2" {...props}>
      {children}
    </ul>
  )
}

function OrderedList({ children, ...props }: React.OlHTMLAttributes<HTMLOListElement>) {
  return (
    <ol className="my-4 ml-6 list-decimal space-y-2" {...props}>
      {children}
    </ol>
  )
}

function ListItem({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className="leading-7" {...props}>
      {children}
    </li>
  )
}

/**
 * Custom image component with Next.js optimization
 */
function CustomImage({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  // Ensure alt text is always provided
  if (!alt) {
    console.warn(`Image ${src} is missing alt text for accessibility`)
  }

  return (
    <span className="block my-6">
      <img
        src={src}
        alt={alt || 'Image'}
        className="rounded-lg w-full h-auto"
        loading="lazy"
        {...props}
      />
    </span>
  )
}

/**
 * Custom callout component for notes, warnings, etc.
 */
interface CalloutProps {
  type?: 'note' | 'warning' | 'tip' | 'danger'
  children: React.ReactNode
}

export function Callout({ type = 'note', children }: CalloutProps) {
  const styles = {
    note: 'bg-blue-50 dark:bg-blue-950 border-blue-500 text-blue-900 dark:text-blue-100',
    warning: 'bg-yellow-50 dark:bg-yellow-950 border-yellow-500 text-yellow-900 dark:text-yellow-100',
    tip: 'bg-green-50 dark:bg-green-950 border-green-500 text-green-900 dark:text-green-100',
    danger: 'bg-red-50 dark:bg-red-950 border-red-500 text-red-900 dark:text-red-100',
  }

  const icons = {
    note: 'ℹ️',
    warning: '⚠️',
    tip: '💡',
    danger: '🚨',
  }

  return (
    <div className={cn('my-6 rounded-lg border-l-4 p-4', styles[type])}>
      <div className="flex items-start gap-3">
        <span className="text-xl">{icons[type]}</span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

/**
 * MDX Components mapping
 */
export const MDXComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  p: Paragraph,
  a: Link,
  code: CodeBlock,
  pre: Pre,
  blockquote: Blockquote,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  img: CustomImage,
  Callout,
}
