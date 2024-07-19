import React from 'react'
import { Calendar } from 'lucide-react'

const DateSelect = ({ register }: any) => {
  return (
    <div className='flex w-full flex-1 items-center gap-2 p-2 pl-4 lg:p-0'>
      <label className='flex flex-1 items-center gap-2' onClick={(e) => e.stopPropagation()}>
        <Calendar size={18} />
        <div className='flex-1'>
          <input
            {...register('date')}
            name='date'
            type='date'
            className='w-full border-none bg-transparent text-sm outline-none focus:border-none focus:outline-none'
          />
        </div>
      </label>
    </div>
  )
}

export default DateSelect
