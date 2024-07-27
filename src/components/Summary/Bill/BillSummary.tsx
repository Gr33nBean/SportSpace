'use client'
import React from 'react'

import { formatCurrency } from '@/helpers/currencyHelpers'

interface BillSummaryProps {
  price: number
  date: string
  startTime: string
  endTime: string
  onBooking: () => void
}

const BillSummary: React.FC<BillSummaryProps> = ({ price, date, startTime, endTime, onBooking }) => {
  return (
    <div className='top-[calc(80px+32px)] translate-y-[20%] transition-all lg:fixed lg:w-80'>
      <div className='w-full rounded-lg bg-white p-6 shadow-md'>
        <div className='mb-6 flex flex-col items-center'>
          <h1 className='mb-4 text-4xl font-bold'>{formatCurrency(price)}</h1>
          <div className='mb-4 w-full border-t border-light-gray'></div>
          <div className='flex w-full items-center justify-between'>
            <p className='mb-1 text-gray-600'>{date}</p>
            <p className='mb-1 text-gray-600'>
              {startTime} - {endTime}
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
