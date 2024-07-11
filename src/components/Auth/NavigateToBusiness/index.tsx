const NavigateToBusiness = () => {
  return (
    <div className='flex h-full w-full cursor-pointer gap-4 rounded-bl-xl rounded-br-xl bg-slate-200 p-6'>
      <span>
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
          className='lucide lucide-arrow-right-to-line'
        >
          <path d='M17 12H3' />
          <path d='m11 18 6-6-6-6' />
          <path d='M21 5v14' />
        </svg>
      </span>
      <div>
        <p className='text-gray-500 font-Inter font-bold'>Bạn cần quản lý sân cầu lông?</p>
        <p className='font-Inter font-bold text-black'>Tới trang đăng nhập dành cho doanh nghiệp </p>
      </div>
    </div>
  )
}

export default NavigateToBusiness
