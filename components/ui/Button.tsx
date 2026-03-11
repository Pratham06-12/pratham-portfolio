'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { prefersReducedMotion } from '@/lib/motion'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationIteration' | 'onAnimationEnd'> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className = '',
      children,
      disabled = false,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = prefersReducedMotion()

    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-[10px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'

    // Variant styles
    const variantStyles = {
      primary:
        'bg-primary-500 text-text-primary hover:bg-primary-600 active:bg-primary-700 shadow-sm hover:shadow-md',
      secondary:
        'border border-primary-500 text-text-primary bg-transparent hover:bg-primary-500/10 active:bg-primary-500/20',
      outline:
        'border-2 border-border text-text-secondary hover:bg-background-card hover:text-text-primary',
    }

    // Size styles
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-3 text-base',
      lg: 'px-6 py-3.5 text-lg',
    }

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : ''

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`

    // Animation variants for click feedback
    const buttonVariants = {
      initial: { scale: 1 },
      hover: { scale: shouldReduceMotion ? 1 : 1.02 },
      tap: { scale: shouldReduceMotion ? 1 : 0.98 },
    }

    const MotionButton = motion.button

    return (
      <MotionButton
        ref={ref}
        type={type}
        disabled={disabled}
        className={combinedClassName}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.15, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </MotionButton>
    )
  }
)

Button.displayName = 'Button'
