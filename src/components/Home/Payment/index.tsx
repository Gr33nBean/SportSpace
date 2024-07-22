import React from 'react'
import { ArrowUpNarrowWide, CreditCard, HandCoins, Handshake, PiggyBank } from 'lucide-react'

const introductionDetails = [
  {
    title: 'Tốc độ thanh toán nhanh',
    PrefixComponent: ArrowUpNarrowWide,
  },
  {
    title: 'Hủy không mất phí',
    PrefixComponent: PiggyBank,
  },
  {
    title: 'Thông tin thanh toán rõ ràng',
    PrefixComponent: HandCoins,
  },
  {
    title: 'Phương thức thanh toán đa dạng',
    PrefixComponent: CreditCard,
  },
  {
    title: 'Hỗ trợ thanh toán hàng tháng',
    PrefixComponent: Handshake,
  },
]

function Payment() {
  return (
    <section className='w-full bg-white py-16 lg:relative lg:z-20'>
      <div className='container flex flex-col items-center justify-center gap-6 lg:min-h-[80dvh] lg:gap-10'>
        <div className='flex flex-col items-center'>
          <p className='text-center text-4xl font-bold text-primary lg:text-7xl'>Thanh toán dễ dàng</p>
          <p className='mt-4 w-2/3 text-center text-sm font-bold text-primary lg:text-xl'>
            Hỗ trợ thanh toán 24/7, phương thức thanh toán đa dạng, an toàn
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center md:gap-4 lg:gap-7'>
          {introductionDetails.map((item, index) => {
            const { title, PrefixComponent } = item
            return (
              <div
                className='flex w-full items-center justify-center gap-2 border-b bg-secondary bg-opacity-25 py-4 text-sm font-bold text-primary md:rounded-full lg:w-auto lg:gap-4 lg:px-8 lg:py-8 lg:text-[32px]'
                key={index}
              >
                <PrefixComponent size={28} />
                <p className='text-center'>{title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Payment
