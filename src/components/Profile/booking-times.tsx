import React from 'react'

type BookingTimesProps = {
  count: number
  timeBooked: number
}

const BookingTimes = (props: BookingTimesProps) => {
  const { count, timeBooked } = props
  return (
    <div className='flex justify-around bg-secondary p-4'>
      <div className='text-center'>
        <p className='text-3xl font-bold text-black'>{`${count}`}</p>
        <p className='text-zinc-700'>Số lần đặt</p>
      </div>
      <div className='border-l border-zinc-400'></div>
      <div className='text-center'>
        <p className='text-3xl font-bold text-black'>{`${timeBooked}`}</p>
        <p className='text-zinc-700'>Số giờ đặt</p>
      </div>
    </div>
  )
}

export default BookingTimes
