import React, { forwardRef } from 'react'
import clsx from 'clsx'

export type InputSize = 'small' | 'medium' | 'large'
export type InputType = 'text' | 'email' | 'number' | 'radio'

export type InputProps = {
  id?: string
  name: string
  label?: string
  type?: InputType
  size?: InputSize
  className?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

const sizeMap: { [key in InputSize]: string } = {
  small: 'p-0 text-sm',
  medium: 'p-3 text-sm',
  large: 'p-3 text-base',
}

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, label, type = 'text', size = 'medium', className = '', placeholder, ...props }, ref) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        className={clsx(
          'font relative inline-flex w-full rounded border border-gray-300 bg-white font-Inter leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-blue-400 focus:border-blue-400 focus:outline-none focus:ring-1',
          sizeMap[size],
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
