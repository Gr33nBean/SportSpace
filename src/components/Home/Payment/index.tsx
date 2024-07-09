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
    <section className='flex w-full flex-col items-center justify-center bg-white py-16 lg:relative lg:z-20 lg:h-screen lg:p-0'>
      <div className='container flex flex-col items-center justify-center'>
        <p className='text-4xl font-bold text-primary lg:text-7xl'>Thanh toán dễ dàng</p>
        <p className='mt-4 w-2/3 text-center text-sm font-bold text-primary lg:text-xl'>
          Hỗ trợ thanh toán 24/7, phương thức thanh toán đa dạng, an toàn
        </p>
      </div>
      <div className='container mt-10 flex flex-wrap items-center justify-center lg:mt-20 lg:gap-7'>
        {introductionDetails.map((item, index) => (
          <div
            className='w-full bg-secondary bg-opacity-25 px-14 py-8 text-center text-sm font-bold text-primary lg:w-auto lg:rounded-full lg:text-[32px]'
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Payment
