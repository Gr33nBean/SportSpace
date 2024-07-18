import React from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

interface Option {
    label: string 
    value: string;
  }

type FormSelectSearch<TFormValues extends FieldValues> = {
    name: Path<TFormValues>
    register?: UseFormRegister<TFormValues>
    icon: React.ReactNode,
    placeholder: string,
    options: Option[];
}

const FormSelectSearch = <TFormValues extends Record<string, unknown>>({
    icon,
    register,
    name,
    placeholder,
    options,
}:  FormSelectSearch<TFormValues>) => {
  return (
    <label
    className='flex w-full flex-1 items-center gap-2 rounded-full p-2 pl-4 lg:p-0 lg:pl-2'
  >
    {icon}
    <div className='flex-1'>
      <select
        className='w-full border-none bg-transparent text-xs outline-none text-gray-500'
        {...(register && register(name))}
      >
        <option value=''>
          <span>{placeholder}</span>
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </label>
  )
}

export default FormSelectSearch