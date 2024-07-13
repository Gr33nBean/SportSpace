'use client'
import React from 'react'

import FilterDropdownBase from '@/components/Common/FilterDropdown/FilterDropdownBase'

const FilterTime = () => {
  const options = ['Morning', 'Afternoon', 'Evening']

  return (
    <FilterDropdownBase title='Thời gian'>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => {}}
          className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
        >
          {option}
        </button>
      ))}
    </FilterDropdownBase>
  )
}

export default FilterTime
