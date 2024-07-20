import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { CalendarPlus2 } from 'lucide-react'

import { routes } from '@/config/routes'
import { COLORS } from '@/constants/colors'
import { IBusiness } from '@/interface/business'

const BookingCourtCard = (props: IBusiness) => {
  const { address, name, id } = props
  return (
    <div className='w-auto overflow-hidden rounded-lg border xl:w-[22rem]'>
      <Image
        src='https://babolat.com.vn/wp-content/uploads/2023/10/san-cau-long-viettel.jpg'
        alt='img'
        width={400}
        height={200}
        className='h-44 w-full'
      />
      <Link
        href={routes.booking(id)}
        className='flex cursor-pointer items-center justify-center gap-2 border-b px-2 py-4 transition-all duration-75 hover:text-secondary'
      >
        <CalendarPlus2 color={COLORS.SECONDARY} />
        <p className='font-Inter text-lg'>Đặt lịch</p>
      </Link>
      <div className='flex flex-col gap-3 py-4'>
        <div className='flex flex-col px-4'>
          <h2 className='font-Inter text-xl font-semibold'>Sân cầu lông {name}</h2>
          <p className='text-xs'>{address}</p>
        </div>
        <div className='flex justify-end px-4'>
          <Link
            href={routes.booking(id)}
            className='h-10 border-secondary px-8 py-2 font-Inter hover:bg-secondary hover:text-white'
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookingCourtCard
