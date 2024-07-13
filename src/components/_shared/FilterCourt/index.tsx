'use client'

import FilterPlace from './FilterPlace'
import FilterTime from './FilterTime'

const FilterCourt = () => {
  return (
    <div className='sm-w-full flex h-fit w-auto flex-col gap-6 rounded-lg border px-5 py-5 md:w-[25rem]'>
      <div className='flex items-center justify-between rounded-lg border-black p-1.5'>
        <p>Filter</p>
        <div className='rounded bg-secondary px-3'>
          <span className='text-sm font-bold text-black'>20</span>
        </div>
      </div>
      <div className='flex flex-col gap-3 transition-all duration-75 ease-linear'>
        <FilterTime />
        <FilterPlace />
      </div>
    </div>
  )
}

export default FilterCourt
