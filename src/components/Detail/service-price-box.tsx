import React from 'react'
import { Gem } from 'lucide-react'

import PriceItem from './price-item'

function ServicePriceBox() {
  return (
    <div className='flex w-full flex-col divide-y divide-inherit rounded-2xl border-2 border-gray-100 lg:w-2/3'>
      <div className='flex flex-row items-center justify-start gap-4 px-6 py-8'>
        <div className='rounded-full bg-secondary p-3 text-white'>
          <Gem size={24} />
        </div>
        <p className='text-xl font-semibold'>Bảng giá dịch vụ</p>
      </div>
      <div className='flex flex-col items-start justify-center gap-4 px-6 py-8'>
        <p className='text-lg italic'>Hoạt động 5h30 đến 22h các ngày trong tuần</p>
        <PriceItem price='60.000' timeRange='5:30am - 8:00am' />
        <PriceItem price='60.000' timeRange='5:30am - 8:00am' />
        <PriceItem price='60.000' timeRange='5:30am - 8:00am' />
      </div>
    </div>
  )
}

export default ServicePriceBox
