import Image from 'next/image'

import React from 'react'

const BillSummaryEmpty = () => {
  return (
    <div className='top-[calc(80px+32px)] translate-y-[20%] transition-all sm:fixed'>
      <div className='w-80 rounded-lg border border-gray-300 bg-white p-6 shadow-md'>
        <div className='mb-6 flex flex-col items-center'>
          <div className='mb-4 flex w-full flex-col items-center rounded-lg bg-light-gray p-4'>
            <div className='mb-6 flex h-20 w-20 items-center justify-center'>
              <Image
                src='/images/png/calendar.png'
                alt='Calendar Add'
                width={30}
                height={30}
                className='size-[30px] opacity-20'
              />
            </div>
            <label htmlFor='timeSlot' className='block text-sm font-medium text-gray-700' style={{ opacity: 0.2 }}>
              Chọn khung giờ
            </label>
          </div>
        </div>
        <button
          type='button'
          disabled
          className='w-full rounded-md border border-transparent bg-light-gray px-6 py-2 text-sm font-medium shadow-sm'
        >
          Đặt sân
        </button>
      </div>
    </div>
  )
}

export default BillSummaryEmpty
