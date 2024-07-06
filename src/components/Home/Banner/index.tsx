import Image from 'next/image'

import SecondaryButton from '@/components/Common/Button/SecondaryButton'
import banner from '@/images/png/banner.png'

const Banner = () => {
  return (
    <section className='relative flex-1'>
      <Image className='h-full object-cover' alt='banner' src={banner} width={0} height={0} />
      <div className='absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center bg-[#1E1E1E] bg-opacity-65 p-6'>
        <div className='flex h-1/2 flex-col justify-between'>
          <div>
            <h1 className='h-14 text-5xl font-bold text-white'>Đặt lịch</h1>
            <h1 className='h-14 text-5xl font-bold text-primary'>Sân cầu lông</h1>
            <p className='font-semibold text-white'>
              Dịch vụ trực tuyến hàng đầu về đặt chỗ, thanh toán, quản lý cơ sở sân cầu lông
            </p>
          </div>
          <SecondaryButton className='w-fit rounded-full px-9 py-3'>
            <span className='text-base text-tertiary'>Đặt trước ngay</span>
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

export default Banner
