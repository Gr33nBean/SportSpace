'use client'
import React from 'react'

import FilterDropdownBase from '@/components/Common/FilterDropdown/FilterDropdownBase'

type FilterSportProps = {
  callback: (data: any) => void
}

const FilterSport = (props: FilterSportProps) => {
  const { callback } = props
  const options = ['Basketball', 'Football', 'Baseball']

  return (
    <FilterDropdownBase title='Select Sport'>
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

export default FilterSport
