'use client'
import React, { useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { IconInput } from '@/components/Common/Input/IconInput'

import DurationSelect from './DurationSelect'
import PlaceSelect from './PlaceSelect'
import SportSelect from './SportSelect'
import TimeSelect from './TimeSelect'

const MobileGlobalSearch = () => {
  const [expandedFilter, setExpandedFilter] = useState(false)
  const { control, handleSubmit, register, reset } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log('data', data)
  })

  return (
    <div className='flex w-full flex-col gap-4 lg:hidden'>
      <form onSubmit={onSubmit} className='flex flex-col gap-4 overflow-y-auto'>
        <div className='flex items-center gap-4'>
          <IconInput
            placeholder='Tìm sân...'
            icon={<Search />}
            className='flex-1 rounded-lg border border-gray-100'
            {...(register && register('courtName'))}
          />
          <SlidersHorizontal
            onClick={() => {
              setExpandedFilter((prev) => !prev)
              console.log('haha')
            }}
            size={28}
          />
        </div>

        <div className={`flex flex-col gap-4 overflow-y-auto ${expandedFilter ? 'h-40' : 'h-0'}`}>
          <SportSelect control={control} />
          <hr />
          <PlaceSelect control={control} />
          <hr />
          <TimeSelect control={control} />
          <hr />
          <DurationSelect control={control} />

          <div className='flex gap-3 py-2'>
            <button
              className='flex-1 rounded-md border border-gray-200 px-4 py-2 font-semibold'
              onClick={() => reset()}
            >
              Thiết lập lại
            </button>
            <button type='submit' className='flex-1 rounded-md bg-secondary px-4 py-2 font-semibold' onClick={onSubmit}>
              Áp dụng
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MobileGlobalSearch
