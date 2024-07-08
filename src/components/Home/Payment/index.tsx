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
    <section className='relative z-20 flex h-screen w-full flex-col items-center justify-center bg-white'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-7xl font-bold text-primary'>Thanh toán dễ dàng</p>
        <p className='mt-4 text-xl font-bold text-primary'>
          Hỗ trợ thanh toán 24/7, phương thức thanh toán đa dạng, an toàn
        </p>
      </div>
      <div className='mt-20 flex flex-wrap items-center justify-center gap-7'>
        {introductionDetails.map((item, index) => (
          <div
            className='rounded-full bg-secondary bg-opacity-25 px-14 py-8 text-[32px] font-bold text-primary'
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
