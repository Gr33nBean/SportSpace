import React, { forwardRef } from 'react'
import clsx from 'clsx'

export type TexAreaSize = 'small' | 'medium' | 'large'

export type TextAreaProps = {
  id?: string
  name: string
  label?: string
  size?: TexAreaSize
  className?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const sizeMap: { [key in TexAreaSize]: string } = {
  small: 'p-0 text-sm',
  medium: 'p-3 text-base',
  large: 'p-4 text-base',
}

export const TextArea: React.FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, name, label, size = 'medium', className = '', placeholder, ...props }, ref) => {
    return (
      <textarea
        id={id}
        ref={ref}
        name={name}
        aria-label={label}
        placeholder={placeholder}
        className={clsx(
          'relative inline-flex w-full rounded border border-gray-300 bg-gray-50 bg-white leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-blue-400 focus:border-blue-400 focus:ring-1',
          sizeMap[size],
          className
        )}
        {...props}
      />
    )
  }
)

TextArea.displayName = 'TextArea'
