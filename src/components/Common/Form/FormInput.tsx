import React from 'react';
import { Input, InputProps } from '../Input';
import { UseFormRegister, Path, RegisterOptions, FieldValues, DeepMap,
    FieldError, } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';

export type FormInputProps<TFormValues extends FieldValues> = {
    name: Path<TFormValues>;
    rules?: RegisterOptions<TFormValues, Path<TFormValues>>;
    register?: UseFormRegister<TFormValues>;
    errors?: Partial<DeepMap<TFormValues, FieldError>> | any;
  } & Omit<InputProps, 'name'>;
  
  export const FormInput = <TFormValues extends Record<string, unknown>>({
    className,
    name,
    register,
    rules,
    errors,
    label,
    ...props
  }: FormInputProps<TFormValues>) => {
    const errorMessages = errors[name];
    const hasError = !!(errors && errorMessages);

    return (
      <div className={className}>
        <Input 
            name={name}
            label={label} 
            {...props} 
            {...(register && register(name, rules))} 
            className={clsx(
                "transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50",
                { 
                    "border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600": hasError 
                }
            )}
         />
        <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="mt-1 font-serif text-sm text-left block text-red-600">
            {message}
          </p>
        )}
      />
      </div>
    );
  };