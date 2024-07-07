import React from 'react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

export const Introduction = () => {
  const introductionImages: Array<string> = [
    '/images/png/introduction1.png',
    '/images/png/introduction2.png',
    '/images/png/introduction3.png',
  ]

  return (
    <section className='background-white -mt-[6vh] h-[88vh] w-full'>
      <div className='flex flex-row'>
        {/* Call To Action group */}
        <div className='flex flex-1 flex-col items-center justify-center'>
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
          {/* {introductionImages.map((item, index) => (
            <img key={index} className='bg- h-[88vh] w-[52vw] rounded-lg' src={item} alt='introduction 1'></img>
          ))} */}
          <img
            className='bg- h-[88vh] w-[52vw] rounded-lg'
            src='/images/png/introduction1.png'
            alt='introduction 1'
          ></img>
        </div>
      </div>
    </section>
  )
}
