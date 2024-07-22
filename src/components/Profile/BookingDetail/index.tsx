import React from 'react'

type BookingDetailProps = {
  courtName: string
  date: string
  time: string
  totalPrice: string
  isPaid: boolean
}

const BookingDetail = (props: BookingDetailProps) => {
  const { courtName, date, time, totalPrice, isPaid } = props
  return (
    <div className='rounded-xl border-2 bg-white'>
      <div className='bg-medium-gray'>
        <span className='text-md block py-5 pl-6 text-custom-gray'>Chi tiết đơn đặt</span>
      </div>
      <div className='flex flex-col justify-start divide-y divide-inherit px-6 py-5'>
        <div>
          <BookingInfoItem title='Địa điểm' desc={courtName} />
          <div className='mt-8 flex flex-row items-start justify-start gap-24'>
            <BookingInfoItem title='Ngày đến' desc={date} />
            <BookingInfoItem title='Thời gian' desc={time} />
          </div>
        </div>
        <div className='flex flex-row justify-end pt-5 text-xl italic'>
          {totalPrice} - {isPaid ? 'đã thanh toán' : ''}
        </div>
      </div>
    </div>
  )
}

type BookingInfoItemProps = {
  title: string
  desc: string
}

const BookingInfoItem = (props: BookingInfoItemProps) => {
  const { title, desc } = props
  return (
    <div className='mb-4'>
      <h3 className='text-lg font-bold uppercase'>{title}</h3>
      <p className='text-lg text-gray-700'>{desc}</p>
    </div>
  )
}

export default BookingDetail
