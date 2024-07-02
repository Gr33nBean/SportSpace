import React, { ButtonHTMLAttributes } from 'react'

const PrimaryButton = ({
  props,
  children,
  variant = 'filled',
}: {
  props?: ButtonHTMLAttributes<HTMLButtonElement>
  children?: React.ReactNode
  variant?: 'filled' | 'outlined'
}) => {
  return (
    <button
      className={`duration-50 rounded-md border-secondary px-2 py-2 text-xs font-semibold transition-all hover:opacity-90 active:shadow-lg md:py-1 ${variant === 'filled' ? 'bg-secondary text-white' : 'border text-secondary'} `}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
