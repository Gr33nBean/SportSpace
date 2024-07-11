'use client'
import React, { useState } from 'react'

type FilterDropdownBase = {
  children: React.ReactNode
  title: string
}

const FilterDropdownBase = (props: FilterDropdownBase) => {
  const { children, title } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative w-full'>
      <button
        type='button'
        className='inline-flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className='h-5 w-5'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {isOpen && children}
    </div>
  )
}

export default FilterDropdownBase
