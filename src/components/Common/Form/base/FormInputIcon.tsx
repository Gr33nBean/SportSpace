import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'

import { IconInput } from '../../Input/IconInput'

import { FormInputProps } from './FormInput'

export const FormInputIcon = <TFormValues extends Record<string, unknown>>({
  className,
  name,
  register,
  rules,
  errors,
  label,
  icon,
  ...props
}: FormInputProps<TFormValues> & { icon: React.ReactNode; type?: string }) => {
  const errorMessages = errors[name] || ''
  const hasError = !!(errors && errorMessages)

  return (
    <div className={className}>
      {label && <span className='text-gray-800 font-Inter text-sm font-medium'>{label}</span>}
      <IconInput
        name={name}
        label={label}
        icon={icon}
        {...props}
        {...(register && register(name, rules))}
        className={clsx('transition-colors', {
          'border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600': hasError,
        })}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p
            className={clsx(
              'mt-1 block transform text-left font-Inter text-xs text-red-600 transition-all duration-300',
              {
                'translate-y-0 opacity-100': hasError,
                '-translate-y-2 opacity-0': !hasError,
              }
            )}
          >
            {message}
          </p>
        )}
      />
    </div>
  )
}
