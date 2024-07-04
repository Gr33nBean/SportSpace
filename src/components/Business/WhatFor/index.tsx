import Image from 'next/image'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import check from '@/images/svg/checkBlue.svg'

const contents = [
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
    images: [
      'https://business.courtsite.my/images/mockup/desktop.jpg',
      'https://business.courtsite.my/images/mockup/mobile.jpeg',
    ],
  },
  {
    title: 'Sport Space Platform',
    descriptions: [
      'Liệt kê cơ sở thể thao của bạn để nhận đặt chỗ và thanh toán trực tuyến từ khách hàng 24/7 mọi lúc mọi nơi.',
      'Cập nhật theo thời gian thực về tính sẵn có của tài nguyên với việc đặt chỗ trực tuyến và ngoại tuyến được đồng bộ hóa.',
    ],
  },
]

const WhatFor = () => {
  return (
    <section className='bg-light-gray px-6 py-12'>
      <div className='my-4 flex flex-col items-center justify-center'>
        <h1 className='my-2 text-center text-2xl font-bold text-primary'>Sport Space dành cho doanh nghiệp là gì?</h1>
        <p className='text-center text-lg text-primary'>Tính năng của phần mềm Sport Space</p>
      </div>
      <ul>
        {contents.map((content, index) => {
          const { title, descriptions, images } = content
          return (
            <li key={index}>
              <p className='my-8 text-xl font-bold text-secondary'>{title}</p>
              <ul>
                {descriptions.map((description, index) => (
                  <li className='my-2 flex gap-4' key={index}>
                    <div>
                      <Image alt='check-icon' src={check} width={20} height={20} />
                    </div>
                    <p className='flex-1 text-primary'>{description}</p>
                  </li>
                ))}
                {images?.map((image, index) => (
                  <li className='my-12' key={index}>
                    <Image
                      className='w-full object-contain'
                      alt='description-image'
                      src={image}
                      width={400}
                      height={200}
                    />
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
      <PrimaryButton className='m-8 px-4 py-3 md:py-4'>
        <span className='text-sm font-bold md:text-base'>Khám Phá Nền Tảng Sport Space</span>
      </PrimaryButton>
    </section>
  )
}

export default WhatFor
