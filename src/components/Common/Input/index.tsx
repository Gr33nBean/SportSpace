import React, { forwardRef } from 'react'
import clsx from 'clsx'

export type InputSize = 'small' | 'medium' | 'large'
export type InputType = 'text' | 'email' | 'number' | 'radio' | 'password'

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
          'font inline-flex w-full rounded border border-gray-400 bg-white font-Inter leading-none text-gray-700 transition-colors ease-in-out focus:border-primary',
          sizeMap[size],
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
