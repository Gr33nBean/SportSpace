import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import { DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import { TextArea, TextAreaProps } from '../../TextArea'

export type FormTextAreaProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>
  register?: UseFormRegister<TFormValues>
  errors?: Partial<DeepMap<TFormValues, FieldError>> | any
} & Omit<TextAreaProps, 'name'>

export const FormTextArea = <TFormValues extends Record<string, unknown>>({
  className,
  name,
  register,
  rules,
  errors,
  label,
  ...props
}: FormTextAreaProps<TFormValues>) => {
  const errorMessages = errors[name]
  const hasError = !!(errors && errorMessages)

  return (
    <div className={className}>
      <TextArea
        name={name}
        label={label}
        {...props}
        {...(register && register(name, rules))}
        className={clsx('transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50', {
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
