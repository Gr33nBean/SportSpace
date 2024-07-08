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
                        'font pl-12 pr-4 inline-flex w-full rounded border bg-white font-Inter leading-none text-gray-700 transition-colors ease-in-out border-gray-400 focus:border-primary',
                        sizeMap[size],
                        className
                    )}
                    {...props}
                />
                <div className="absolute inset-y-0 left-0 pl-3  
                    flex items-center">
                    {icon}
                </div>
            </div>
        )
    }
)

IconInput.displayName = 'IconInput'
