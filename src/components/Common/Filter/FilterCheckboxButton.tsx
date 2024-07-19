'use client'
import React from 'react'
import { Controller } from 'react-hook-form'

const FilterCheckboxButton = ({ control, name, label }: any) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const { value, onChange } = field
        const checked = value || false

        const handleClick = () => {
          onChange(!checked)
        }

        return (
          <label className='flex items-center'>
            <input type='checkbox' checked={checked} onChange={handleClick} className='hidden' />
            <button
              type='button'
              onClick={handleClick}
              className={`w-full rounded-md border px-3 py-2 text-sm font-medium transition-all duration-75 ${
                checked ? 'bg-secondary text-white hover:opacity-90' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          </label>
        )
      }}
    />
  )
}

export default FilterCheckboxButton
