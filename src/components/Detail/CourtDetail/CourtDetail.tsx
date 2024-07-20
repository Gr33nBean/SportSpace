import Image from 'next/image'

import React from 'react'

import ServicePriceBox from '@/components/Detail/service-price-box'
import { IBusiness } from '@/interface/business'

const CourtDetail = (props: IBusiness) => {
  const { name, address } = props
  return (
    <div className='p-5'>
      <div className='mb-6'>
        <div className='mb-2 flex items-center'>
          <div className='mr-2 h-6 w-2 bg-secondary'></div>
          <h2 className='text-foreground text-xl font-bold'>Giới thiệu</h2>
        </div>
        <p className='text-muted-foreground mb-2'>
          Sân cầu lông {name} là sân cầu lông dành cho những người yêu thích cầu lông tại {address}. Đây không chỉ là
          nơi để mọi người tham gia rèn luyện, giải trí hằng ngày mà còn là địa điểm diễn ra nhiều trận thi đấu lớn nhỏ
          trong và ngoài khu vực.
        </p>
        <p className='text-muted-foreground'>
          Tổng tại đây có tất cả 4 sân cầu lông dành cho những người đến luyện tập và tham gia thi đấu. Mỗi sân của Hiển
          Hoa đều được đầu tư hoàn tráng bởi hệ thống sân và ánh sáng đạt tiêu chuẩn quốc gia. Bởi vậy mà thu hút rất
          nhiều người đến tập luyện.
        </p>
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
