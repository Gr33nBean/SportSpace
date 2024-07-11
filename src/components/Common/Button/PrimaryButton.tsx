import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

const PrimaryButton = ({
  props,
  children,
  variant = 'filled',
  radius = 'rounded',
  enabled = true,
  onClick,
  className,
}: {
  props?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>
  children?: React.ReactNode
  variant?: 'filled' | 'outlined'
  radius?: 'full' | 'rounded'
  enabled?: boolean
  onClick?: () => void
  className?: string
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx(
        'duration-50 border px-2 py-2 text-xs font-semibold transition-all hover:opacity-90 active:shadow-lg md:py-1',
        {
          'border-secondary bg-secondary text-white': variant === 'filled' && enabled,
          'border-light-gray bg-white text-primary': variant === 'outlined' && enabled,
          'border-gray-300 bg-light-gray': !enabled,
          'rounded-full': radius === 'full',
          'rounded-md': radius === 'rounded',
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
