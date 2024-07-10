'use client'

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
    <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-80 rounded-lg bg-white p-6 shadow-md'>
        <div className='mb-6 flex flex-col items-center'>
          <div className='mb-4 flex w-full flex-col items-center rounded-lg bg-gray-200 p-4'>
            <div className='mb-6 flex h-20 w-20 items-center justify-center'>
              <img src='/images/png/calendar.png' alt='Calendar Add' className='w-30 h-30' style={{ opacity: 0.2 }} />
            </div>
            <label htmlFor='timeSlot' className='block text-sm font-medium text-gray-700' style={{ opacity: 0.2 }}>
              Chọn khung giờ
            </label>
          </div>
        </div>
        <button
          type='submit'
          className='w-full rounded-md border border-transparent bg-gray-200 px-6 py-2 text-sm font-medium shadow-sm hover:bg-secondary'
        >
          Đặt sân
        </button>
      </form>
    </div>
  )
}

export default BillSummaryEmpty
