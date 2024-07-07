import PrimaryButton from '@/components/Common/Button/PrimaryButton'

const Banner = () => {
  return (
    <section className='background-banner-home dark-overlay relative flex h-[82vh] flex-1 items-center justify-center px-6 py-8 md:px-24 lg:px-32'>
      <div className='z-10 w-full'>
        <div>
          <h1 className='mb-2 text-5xl font-bold text-white md:text-7xl lg:text-8xl'>Đặt lịch</h1>
          <h1 className='my-2 text-5xl font-bold text-secondary md:text-7xl lg:text-8xl'>Sân cầu lông</h1>
          <p className='my-4 font-semibold text-white'>
            Dịch vụ trực tuyến hàng đầu về đặt chỗ, thanh toán, quản lý cơ sở sân cầu lông
          </p>
        </div>
        <PrimaryButton radius='full' variant='outlined' className='mt-2 w-fit !py-3 pl-8 pr-6'>
          <span className='flex items-center gap-2 text-primary'>
            <span className='text-sm font-bold sm:text-base'>Đặt trước ngay</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='size-5 sm:size-6'
            >
              <path d='m9 18 6-6-6-6' />
            </svg>
          </span>
        </PrimaryButton>
      </div>
    </section>
  )
}

export default Banner
