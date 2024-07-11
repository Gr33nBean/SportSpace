import Image from 'next/image'

import React from 'react'

import hours from '@/images/webp/hours.webp'
import sport from '@/images/webp/sports.webp'
import users from '@/images/webp/users.webp'
import venue from '@/images/webp/venues.webp'

const list = [
  {
    image: users,
    title: '252,509',
    description: 'Người dùng',
  },
  {
    image: hours,
    title: '3,996,284',
    description: 'Giờ đặt',
  },
  {
    image: venue,
    title: '115',
    description: 'Địa điểm',
  },
  {
    image: sport,
    title: '57',
    description: 'Môn thể thao',
  },
]

const Numbers = () => {
  return (
    <div className='container py-10'>
      <p className='pb-2 text-center text-base font-semibold text-secondary'>Những con số </p>

      <div className='grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 md:grid-cols-4'>
        {list.map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center gap-2'>
            <Image src={item.image} height={120} width={120} className='object-cover' alt='Picture of the author' />
            <div className='pt-2 text-center'>
              <p className='text-xl font-bold'>{item.title}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Numbers
