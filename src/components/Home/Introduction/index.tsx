import Image from 'next/image'

import React from 'react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

export const Introduction = () => {
  const introductionImages: Array<string> = [
    '/images/png/introduction1.png',
    '/images/png/introduction2.png',
    '/images/png/introduction3.png',
  ]

  return (
    <section className='bg-white py-6'>
      <div className='container flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start'>
        {/* Call To Action group */}
        <div className='flex flex-col items-center justify-center py-6 lg:sticky lg:top-[165px] lg:min-h-[calc(100dvh-80px-85px)] lg:flex-1'>
          <div className=''>
            <p className='text-[36px] font-bold lg:text-[64px]'>Hệ thống sân đa dạng</p>
            <p className='mt-5 text-[14px] font-bold text-primary lg:text-xl'>
              Đa dạng sự lựa chọn dựa trên vị trí của bạn
            </p>
            <PrimaryButton radius='full' className='mt-[20px] w-fit !py-3 pl-8 pr-6 lg:mt-11'>
              <span className='flex items-center gap-2 text-primary'>
                <span className='text-sm font-bold sm:text-base'>Xem thêm</span>
                <Image className='h-8 w-8' width={32} height={32} src='/images/svg/leftArrow.svg' alt='left arrow' />
              </span>
            </PrimaryButton>
          </div>
        </div>
        {/* Images Introduction */}
        <div className='w-full flex-1 overflow-auto'>
          <div className='flex w-full flex-nowrap gap-4 lg:flex-col'>
            {introductionImages.map((item, index) => (
              <div className='relative h-[40dvh] w-full min-w-full lg:h-[100vh]' key={index}>
                <Image
                  fill={true}
                  className='rounded-lg object-cover'
                  src={item}
                  alt={'introduction' + introductionImages[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
