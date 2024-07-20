import Image from 'next/image'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

import FeatureList from '../FeatureList'

const system_contents = [
  {
    title: 'Sport Space Console',
    descriptions: [
      'Phần mềm quản lý cơ sở có thể cấu hình với các mô-đun đặt lịch, đặt giá và đặt lịch linh hoạt.',
      'Công nghệ dựa trên đám mây và lưu trữ dữ liệu an toàn.',
      'Phân tích và báo cáo dữ liệu kinh doanh phù hợp.',
    ],
  },
  {
    title: 'Sport Space Automation System',
    descriptions: [
      'Các khối đặt chỗ và chiếu sáng tích hợp, tự động bật tắt đèn theo lịch đặt chỗ.',
      'Hệ thống điều khiển trạng thái sân từ xa.',
    ],
  },
]

const platform_contents = [
  {
    title: 'Sport Space Platform',
    descriptions: [
      'Liệt kê cơ sở thể thao của bạn để nhận đặt chỗ và thanh toán trực tuyến từ khách hàng 24/7 mọi lúc mọi nơi.',
      'Cập nhật theo thời gian thực về tính sẵn có của tài nguyên với việc đặt chỗ trực tuyến và ngoại tuyến được đồng bộ hóa.',
    ],
  },
]

const images = [
  'https://business.courtsite.my/images/mockup/desktop.jpg',
  'https://business.courtsite.my/images/mockup/mobile.jpeg',
]

const WhatFor = () => {
  return (
    <section className='bg-light-gray py-6'>
      <div className='container'>
        <div className='my-4 flex flex-col items-center justify-center'>
          <h1 className='my-2 text-center text-2xl font-bold text-primary'>Sport Space dành cho doanh nghiệp là gì?</h1>
          <p className='text-center text-lg text-primary'>Tính năng của phần mềm Sport Space</p>
        </div>
        <div className='my-8 grid gap-8 lg:grid-cols-2'>
          <FeatureList contents={system_contents} />
          <Image className='w-full object-contain' alt='description-image' src={images[0]} width={400} height={200} />
        </div>
        <div className='my-8 grid gap-8 lg:grid-cols-2'>
          <Image className='w-full object-contain' alt='description-image' src={images[1]} width={400} height={200} />
          <FeatureList contents={platform_contents}>
            <PrimaryButton className='m-8 !py-2 px-4'>
              <span className='text-sm font-bold md:text-base'>Khám Phá Nền Tảng Sport Space</span>
            </PrimaryButton>
          </FeatureList>
        </div>
      </div>
    </section>
  )
}

export default WhatFor
