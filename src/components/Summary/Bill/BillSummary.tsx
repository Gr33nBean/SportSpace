'use client'
import React from 'react'

interface BillSummaryProps {
  price: number
  date: string
  startTime: string
  endTime: string
  onBooking: () => void
}

const BillSummary: React.FC<BillSummaryProps> = ({ price, date, startTime, endTime, onBooking }) => {
  return (
    <div className='bg-gray-100 flex h-screen flex-col items-center justify-center'>
      <div className='w-80 rounded-lg bg-white p-6 shadow-md'>
        <div className='mb-6 flex flex-col items-center'>
          <h1 className='mb-4 text-4xl font-bold'>{price.toLocaleString()} đ</h1>
          <div className='border-gray-300 mb-4 w-full border-t'></div>
          <div className='text-center'>
            <p className='text-gray-600 mb-1'>
              {date} {startTime}-{endTime}
            </p>
          </div>
        </div>
        <button
          className='w-full rounded-md bg-[#50E3C2] px-6 py-3 text-lg font-medium text-black transition duration-300 hover:bg-[#3fd1b0]'
          onClick={onBooking}
        >
          Đặt sân
        </button>
      </div>
    </div>
  )
}

export default BillSummary
