import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import { DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import { Input, InputProps } from '../../Input'

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>
  register?: UseFormRegister<TFormValues>
  errors?: Partial<DeepMap<TFormValues, FieldError>> | any
} & Omit<InputProps, 'name'>

export type BaseFormInputType<TFormValues extends FieldValues> = Pick<
  FormInputProps<TFormValues>,
  'register' | 'errors'
>

export const FormInput = <TFormValues extends Record<string, unknown>>({
  className,
  name,
  register,
  rules,
  errors,
  label,
  ...props
}: FormInputProps<TFormValues>) => {
  const errorMessages = errors[name]
  const hasError = !!(errors && errorMessages)

  return (
    <div className={className}>
      {label && <span className='font-Inter text-sm font-medium text-gray-800'>{label}</span>}
      <Input
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
