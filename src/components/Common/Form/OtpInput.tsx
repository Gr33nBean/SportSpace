import React, { useState } from 'react'
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
  watch: any
} & Omit<InputProps, 'name'>

export type BaseFormInputType<TFormValues extends FieldValues> = Pick<OtpInputProps<TFormValues>, 'register' | 'errors'>

const OtpInput = <TFormValues extends Record<string, unknown>>({
  className,
  name = 'otp' as Path<TFormValues>,
  register,
  rules,
  errors,
  watch,
  label,
  callback,
  ...props
}: OtpInputProps<TFormValues>) => {
  const [isFocused, setIsFocused] = useState(false)
  const errorMessages = errors[name]
  const hasError = !!(errors && errorMessages)
  const isValidOtp = watch('otp')?.length === 6
  return (
    <div className={className}>
      <div className={clsx('flex items-center rounded border transition-colors', { 'border-primary': isFocused })}>
        <Input
          type='number'
          name={name}
          {...props}
          {...(register && register(name, rules))}
          className={clsx('border-none outline-none transition-colors', {
            'border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600': hasError,
          })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <span className='text-gray-400'>|</span>
        <button
          className={`px-4 transition-colors duration-75 ${isValidOtp ? 'text-secondary' : 'text-gray-400'}`}
          onClick={callback}
        >
          Gửi
        </button>
      </div>
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
