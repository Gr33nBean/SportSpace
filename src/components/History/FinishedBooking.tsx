import React from 'react'
import { Input } from '@headlessui/react'
import { Search } from 'lucide-react'

import BookingItem from './BookingItem'

const lsTest: Array<any> = [
  { name: 'Nguyen Van A', date: '12/12/2021', time: '08:00pm - 10:00pm', id: '#1234' },
  { name: 'Nguyen Van B', date: '12/12/2021', time: '08:00pm - 10:00pm', id: '#2345' },
]

const FinishedBooking = () => {
  return (
    <div className='w-full divide-y-2 rounded-lg border-2 border-medium-gray'>
      <TitleAndSearchBox />
      <FinishedBookingList />
    </div>
  )
}

const TitleAndSearchBox = () => {
  return (
    <div className='flex flex-row justify-between divide-x-2'>
      <p className='flex-2 py-3 pl-4 pr-8'>Mã đơn đặt</p>
      <div className='flex flex-1 flex-row items-center justify-start gap-2 px-4'>
        <Input className='w-full' placeholder='Nhập mã đơn đặt' />
        <Search color='#D9D9D9' size={24} />
      </div>
    </div>
  )
}

const FinishedBookingList = () => {
  return (
    <div className='divide-y-2'>
      {lsTest.map((item, index) => (
        <BookingItem key={index} name={item.name} date={item.date} time={item.time} id={item.id} />
      ))}
    </div>
  )
}

export default FinishedBooking
