import React from 'react'

import FilterTime from './FilterTime'

const FilterCourt = () => {
  return (
    <div className='flex w-[15rem] flex-col gap-3 rounded border px-2 py-2'>
      <div className='boder flex items-center justify-between rounded-lg border-black p-2'>
        <p>Filter</p>
        <div className='rounded bg-secondary px-2'>
          <span className='text-black'>20</span>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        {/* <FilterSport />
                <FilterPlace /> */}
        <FilterTime />
        <FilterTime />
        <FilterTime />
      </div>
    </div>
  )
}

export default FilterCourt
