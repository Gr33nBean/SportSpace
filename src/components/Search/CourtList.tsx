'use client'

import React from 'react'

import { getAllBusiness } from '@/config/api/business'
import { useFetch } from '@/hooks/api-hooks'
import { IBusiness } from '@/interface/business'

import BookingCourtCard from '../_shared/BookingCourtCard'

const CourtList = () => {
  const { data, isLoading } = useFetch<IBusiness[]>(getAllBusiness())

  return (
    <div className='flex w-full flex-col gap-6'>
      <div className='hidden md:!block'>
        <p className='text-xl font-semibold'>
          {isLoading && (
            <span className='inline-block animate-pulse rounded-full bg-gray-300'>
              <span className='opacity-0'>10</span>
            </span>
          )}
          {data?.length} sân cầu lông gần với vị trí của bạn
        </p>
        <span className='text-sm underline'>Trở thành đối tác với chúng tôi để quản lý sân của bạn.</span>
      </div>
      <div className='grid w-full grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3'>
        {isLoading && (
          <>
            {new Array(3).fill(0).map((_, index) => {
              return <div key={index} className='h-[360px] w-full animate-pulse rounded-md bg-gray-300'></div>
            })}
          </>
        )}
        {data?.map((business, index) => {
          return <BookingCourtCard key={index} {...business} />
        })}
      </div>
    </div>
  )
}

export default CourtList
