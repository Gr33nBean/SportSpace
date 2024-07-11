'use client'

import Image from 'next/image'

import React from 'react'
import { useForm } from 'react-hook-form'

const BillSummaryEmpty = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className='bg-gray-100 flex h-screen flex-col items-center justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-80 rounded-lg bg-white p-6 shadow-md'>
        <div className='mb-6 flex flex-col items-center'>
          <div className='bg-gray-200 mb-4 flex w-full flex-col items-center rounded-lg p-4'>
            <div className='mb-6 flex h-20 w-20 items-center justify-center'>
              <Image
                src='/images/png/calendar.png'
                alt='Calendar Add'
                width={30}
                height={30}
                className='size-[30px] opacity-20'
              />
            </div>
            <label htmlFor='timeSlot' className='text-gray-700 block text-sm font-medium' style={{ opacity: 0.2 }}>
              Chọn khung giờ
            </label>
          </div>
        </div>
        <button
          type='submit'
          className='bg-gray-200 w-full rounded-md border border-transparent px-6 py-2 text-sm font-medium shadow-sm hover:bg-secondary'
        >
          Đặt sân
        </button>
      </form>
    </div>
  )
}

export default BillSummaryEmpty
