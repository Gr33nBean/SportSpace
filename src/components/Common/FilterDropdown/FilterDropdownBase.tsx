'use client'
import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'

type FilterDropdownBase = {
  children: React.ReactNode
  title: string
}

const FilterDropdownBase = (props: FilterDropdownBase) => {
  const { children, title } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative w-full transition-all duration-75'>
      <button
        type='button'
        className='inline-flex w-full items-center justify-between rounded-md border border-gray-300 bg-gray-50 p-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {title}
        <ChevronRight size={18} className={`duration-75 ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      <div
        className='pt-2 transition-all duration-150'
        style={{
          maxHeight: isOpen ? '1000px' : 0,
        }}
      >
        <div
          className={`w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-150`}
          style={{
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'all' : 'none',
          }}
        >
          <div className='py-1'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default FilterDropdownBase
