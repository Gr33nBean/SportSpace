import React from 'react'
import FilterSport from './FilterSport'
import FilterPlace from './FilterPlace'
import FilterTime from './FilterTime'

const FilterCourt = () => {
    return (
        <div className='rounded w-[15rem] border py-2 px-2 flex flex-col gap-3'>
            <div className='flex justify-between items-center rounded-lg boder p-2 border-black'>
                <p>Filter</p>
                <div className='bg-secondary rounded px-2'><span className='text-black'>20</span></div>
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