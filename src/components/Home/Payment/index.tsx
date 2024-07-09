import React from 'react'

function Payment() {
  const introductionDetails: Array<string> = [
    'Tốc độ thanh toán nhanh',
    'Hủy không mất phí',
    'Thông tin thanh toán rõ ràng',
    'Phương thức thanh toán đa dạng',
    'Hỗ trợ thanh toán hàng tháng',
  ]

  return (
    <section className='w-full bg-white py-16 lg:relative lg:z-20'>
      <div className='container flex flex-col items-center justify-center gap-6 lg:min-h-[80dvh] lg:gap-10'>
        <div className='flex flex-col items-center'>
          <p className='text-4xl font-bold text-primary lg:text-7xl'>Thanh toán dễ dàng</p>
          <p className='mt-4 w-2/3 text-center text-sm font-bold text-primary lg:text-xl'>
            Hỗ trợ thanh toán 24/7, phương thức thanh toán đa dạng, an toàn
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4 lg:gap-7'>
          {introductionDetails.map((item, index) => (
            <div
              className='w-full rounded-full bg-secondary bg-opacity-25 px-14 py-4 text-center text-sm font-bold text-primary lg:w-auto lg:py-8 lg:text-[32px]'
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Payment
