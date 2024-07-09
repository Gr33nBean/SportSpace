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
    <section className='bg-white'>
      <div className='flex flex-col items-center justify-center lg:flex-row lg:items-start'>
        {/* Call To Action group */}
        <div className='top-[165px] flex min-h-[40vh] flex-col items-center justify-center lg:sticky lg:min-h-[80vh] lg:flex-1'>
          <div className=''>
            <p className='text-[36px] font-bold lg:text-[64px]'>Hệ thống sân đa dạng</p>
            <p className='mt-5 text-[14px] font-bold text-primary lg:text-xl'>
              Đa dạng sự lựa chọn dựa trên vị trí của bạn
            </p>
            <PrimaryButton radius='full' className='mt-[20px] w-fit !py-3 pl-8 pr-6 lg:mt-11'>
              <span className='flex items-center gap-2 text-primary'>
                <span className='text-sm font-bold sm:text-base'>Xem thêm</span>
                <Image className='h-8 w-8' src='/images/svg/leftArrow.svg' alt='left arrow' />
              </span>
            </PrimaryButton>
          </div>
        </div>
        {/* Images Introduction */}
        <div className='flex flex-row flex-nowrap overflow-scroll lg:h-auto lg:flex-1 lg:flex-col'>
          {introductionImages.map((item, index) => (
            <Image
              key={index}
              className='mr-[8px] h-[100vw] w-[100vw] object-cover lg:mb-[8px] lg:h-[88vh] lg:w-[52vw] lg:rounded-lg'
              src={item}
              alt='introduction 1'
            />
          ))}
        </div>
      </div>
    </section>
  )
}
