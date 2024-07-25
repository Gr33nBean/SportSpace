import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import { DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import { Input, InputProps } from '../Input'

export type OtpInputProps<TFormValues extends FieldValues> = {
  name?: Path<TFormValues>
  rules?: RegisterOptions<TFormValues, Path<TFormValues>> | any
  register?: UseFormRegister<TFormValues>
  errors?: Partial<DeepMap<TFormValues, FieldError>> | any
  callback?: () => void
} & Omit<InputProps, 'name'>

export type BaseFormInputType<TFormValues extends FieldValues> = Pick<OtpInputProps<TFormValues>, 'register' | 'errors'>

const OtpInput = <TFormValues extends Record<string, unknown>>({
  className,
  name = 'otp' as Path<TFormValues>,
  register,
  rules,
  errors,
  label,
  callback,
  ...props
}: OtpInputProps<TFormValues>) => {
  const errorMessages = errors[name]
  const hasError = !!(errors && errorMessages)
  return (
    <div className={className}>
      <Input
        name={name}
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

export default OtpInput
