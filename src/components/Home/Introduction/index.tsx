import React from 'react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

export const Introduction = () => {
  const introductionImages: Array<string> = [
    '/images/png/introduction1.png',
    '/images/png/introduction2.png',
    '/images/png/introduction3.png',
  ]

  return (
    <section className='w-full bg-white'>
      <div className='flex flex-row items-start'>
        {/* Call To Action group */}
        <div className='sticky top-[165px] flex min-h-[80vh] flex-1 flex-col items-center justify-center'>
          <div className=''>
            <p className='text-[64px] font-bold'>Hệ thống sân đa dạng</p>
            <p className='mt-5 text-xl font-bold text-primary'>Đa dạng sự lựa chọn dựa trên vị trí của bạn</p>
            <PrimaryButton radius='full' className='mt-11 w-fit !py-3 pl-8 pr-6'>
              <span className='flex items-center gap-2 text-primary'>
                <span className='text-sm font-bold sm:text-base'>Xem thêm</span>
                <img className='h-8 w-8' src='/images/svg/leftArrow.svg' alt='left arrow' />
              </span>
            </PrimaryButton>
          </div>
        </div>
        {/* Images Introduction */}
        <div>
          {[
            new Array(3)
              .fill(1)
              .map((_, index) => (
                <img
                  key={index}
                  className='my-1 h-[88vh] w-[52vw] rounded-lg object-cover'
                  src='/images/png/introduction1.png'
                  alt='introduction 1'
                />
              )),
          ]}
        </div>
      </div>
    </section>
  )
}
