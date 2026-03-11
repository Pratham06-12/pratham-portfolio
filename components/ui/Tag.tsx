import { HTMLAttributes, ReactNode } from 'react'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'blog' | 'tool' | 'proficiency' | 'default'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Tag({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props
}: TagProps) {
  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200'

  // Variant styles - different color schemes for different tag types
  const variantStyles = {
    blog: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    tool: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    proficiency:
      'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    default:
      'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  }

  // Size styles - responsive sizing
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  )
}
