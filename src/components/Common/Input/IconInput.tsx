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
  icon: React.ReactNode
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

const sizeMap: { [key in InputSize]: string } = {
  small: 'p-0 text-sm',
  medium: 'p-3 text-sm',
  large: 'p-3 text-base',
}

export const IconInput: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, label, type = 'text', size = 'medium', className = '', placeholder, icon, ...props }, ref) => {
    return (
      <div className='relative'>
        <input
          id={id}
          ref={ref}
          name={name}
          type={type}
          aria-label={label}
          placeholder={placeholder}
          className={clsx(
            'font border-gray-400 text-gray-700 inline-flex w-full rounded border bg-white pl-12 pr-4 font-Inter leading-none transition-colors ease-in-out focus:border-primary',
            sizeMap[size],
            className
          )}
          {...props}
        />
        <div className='absolute inset-y-0 left-0 flex items-center pl-3'>{icon}</div>
      </div>
    )
  }
)

IconInput.displayName = 'IconInput'
