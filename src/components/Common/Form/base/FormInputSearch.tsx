import React from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

import { InputProps } from '../../Input'

type FormInputSearch<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  register?: UseFormRegister<TFormValues>
  icon: React.ReactNode
  placeholder: string
} & Omit<InputProps, 'name'>

const FormInputSearch = <TFormValues extends Record<string, unknown>>({
  icon,
  register,
  name,
  placeholder,
}: FormInputSearch<TFormValues>) => {
  return (
    <label
      className='flex w-full flex-1 items-center gap-2 rounded-full p-2 pl-4 lg:p-0 lg:pl-2'
      onClick={(e) => e.stopPropagation()}
    >
      {icon}
      <div className='flex-1'>
        <input
          type='text'
          className='w-full border-none bg-transparent text-sm outline-none'
          placeholder={placeholder}
          name={name}
          {...(register && register(name))}
        />
      </div>
    </label>
  )
}

export default FormInputSearch
