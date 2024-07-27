import React from 'react'

type FinishedBookingProps = {
  name: string
  date: string
  time: string
  id: string
}

const BookingItem = (props: FinishedBookingProps) => {
  const { name, date, time, id } = props
  return (
    <div className='flex flex-row justify-between px-5 py-4'>
      <div className='flex flex-col items-start'>
        <p className='mb-2 text-lg font-medium'>{name}</p>
        <p className='mb-1 text-sm text-custom-gray'>{date}</p>
        <p className='text-sm text-custom-gray'>{time}</p>
      </div>
      <div className='flex flex-col items-end'>
        <p>{id}</p>
        <p className='italic text-success'>Đã thành công</p>
      </div>
    </div>
  )
}

export default BookingItem
