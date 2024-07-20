import React from 'react'

import BookingCourtCard from '../_shared/BookingCourtCard'

const CourtList = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='hidden md:block'>
        <p className='font-Inter text-xl font-semibold'>20 sân cầu lông gần với vị trí của bạn</p>
        <span className='text-sm underline'>Trở thành đối tác với chúng tôi để quản lý sân của bạn.</span>
      </div>
      <div className='grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-44'>
        <BookingCourtCard />
        <BookingCourtCard />
        <BookingCourtCard />
        <BookingCourtCard />
        <BookingCourtCard />
        <BookingCourtCard />
        <BookingCourtCard />
      </div>
    </div>
  )
}

export default CourtList
