import Image from 'next/image'

import React from 'react'

import ServicePriceBox from '@/components/Detail/service-price-box'
import { IBusiness } from '@/interface/business'

import CourtIntro from '../court-intro'

const CourtDetail = (props: IBusiness) => {
  const { name, address } = props
  return (
    <div className='p-5'>
      <div className='mb-6'>
        <CourtIntro courtName='Hiển Hoa' courtCount={8} />
      </div>
      <div className='mb-6'>
        <ServicePriceBox />
      </div>
      <div>
        <div className='mb-2 flex items-center'>
          <div className='mr-2 h-6 w-2 bg-secondary'></div>
          <h2 className='text-foreground text-xl font-bold'>Sơ đồ sân</h2>
        </div>
        <Image
          src='https://banvenhadep.vn/FilesUpload/CodeUpload/ban-ve-thiet-ke-nha-thi-dau-cau-long-mai-vom-khung-thep-10x18m-75023.jpg'
          width={1200}
          height={600}
          alt='court-map'
          className='w-full rounded-lg object-cover shadow'
        />
      </div>
    </div>
  )
}

export default CourtDetail
