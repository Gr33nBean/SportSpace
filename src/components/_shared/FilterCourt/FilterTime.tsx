'use client'
import React, { useState } from 'react'

const FilterTime = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Select Time')

  const options = ['Morning', 'Afternoon', 'Evening']

  const handleOptionClick = (option: React.SetStateAction<string>) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className='relative w-full'>
      <button
        type='button'
        className='border-gray-300 text-gray-700 hover:bg-gray-50 inline-flex w-full items-center justify-between rounded-md border bg-white px-4 py-2 text-sm font-medium shadow-sm focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
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
      {isOpen && (
        <div className='mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='py-1'>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className='text-gray-700 hover:bg-gray-100 block w-full px-4 py-2 text-left text-sm'
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterTime
