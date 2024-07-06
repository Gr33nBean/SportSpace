import Image from 'next/image'

import SecondaryButton from '@/components/Common/Button/SecondaryButton'
import banner from '@/images/png/banner.png'

const Banner = () => {
  return (
    <section className='relative flex-1'>
      <Image className='h-full object-cover' alt='banner' src={banner} width={0} height={0} />
      <div className='absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center bg-[#1E1E1E] bg-opacity-65 px-6 md:px-24 lg:px-32'>
        <div className='flex h-1/2 flex-col justify-between md:h-full md:justify-center'>
          <div>
            <h1 className='my-2 text-5xl font-bold text-white md:text-7xl lg:text-8xl'>Đặt lịch</h1>
            <h1 className='my-2 text-5xl font-bold text-primary md:text-7xl lg:text-8xl'>Sân cầu lông</h1>
            <p className='my-4 font-semibold text-white'>
              Dịch vụ trực tuyến hàng đầu về đặt chỗ, thanh toán, quản lý cơ sở sân cầu lông
            </p>
          </div>
          <SecondaryButton className='my-2 flex w-fit rounded-full px-9 py-3'>
            <span className='text-base text-tertiary'>Đặt trước ngay</span>
            <div className='ml-4 text-tertiary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-move-right'
              >
                <path d='M18 8L22 12L18 16' />
                <path d='M2 12H22' />
              </svg>
            </div>
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

export default Banner
