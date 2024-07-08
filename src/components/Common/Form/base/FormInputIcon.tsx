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
}: FormInputProps<TFormValues> & { icon: React.ReactNode; type: string }) => {
  const errorMessages = errors[name] || ''
  const hasError = !!(errors && errorMessages)

  return (
    <div className={className}>
      {label && <span className='font-Inter text-sm font-medium text-gray-800'>{label}</span>}
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
        render={({ message }) => <p className='mt-1 block text-left font-serif text-sm text-red-600'>{message}</p>}
      />
    </div>
  )
}
