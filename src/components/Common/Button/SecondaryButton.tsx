import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

const SecondaryButton = ({
  props,
  children,
  variant = 'filled',
  className,
}: {
  props?: ButtonHTMLAttributes<HTMLButtonElement>
  children?: React.ReactNode
  variant?: 'filled' | 'outlined'
  className?: string
}) => {
  return (
    <button
      className={clsx(
        'duration-50 border-secondary px-2 py-2 text-xs font-semibold transition-all hover:bg-primary hover:opacity-90 active:shadow-lg md:py-1',
        {
          'bg-white text-white': variant === 'filled',
          'border text-secondary': variant === 'outlined',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
