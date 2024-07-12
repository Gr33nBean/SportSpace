'use client'
import React from 'react'

import FilterDropdownBase from '@/components/Common/FilterDropdown/FilterDropdownBase'

type FilterPlaceProps = {
  callback: (data: any) => void
}

const FilterPlace = (props: FilterPlaceProps) => {
  const { callback } = props
  const options = ['HCM', 'HN', 'DN']

  return (
    <FilterDropdownBase title='Địa điểm'>
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

export default FilterPlace
