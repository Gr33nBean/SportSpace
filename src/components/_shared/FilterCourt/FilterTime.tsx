'use client'
import React from 'react'

import FilterDropdownBase from '@/components/Common/FilterDropdown/FilterDropdownBase'

type FilterTimeProps = {
  callback: (data: any) => void
}

const FilterTime = (props: FilterTimeProps) => {
  const { callback } = props
  const options = ['Morning', 'Afternoon', 'Evening']

  return (
    <FilterDropdownBase title='Thời gian'>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => callback(option)}
          className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
        >
          {option}
        </button>
      ))}
    </FilterDropdownBase>
  )
}

export default FilterTime
