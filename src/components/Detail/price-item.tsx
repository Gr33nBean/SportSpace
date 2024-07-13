import React from 'react'

type PriceItemProps = {
  price: string
  timeRange: string
}

const PriceItem = (props: PriceItemProps) => {
  const { price, timeRange } = props
  return (
    <div className='flex w-full flex-row items-center justify-between'>
      <div className='text-xl font-semibold'>{`${timeRange}`}</div>
      <div className='text-xl'>{`${price}đ/giờ/sân`}</div>
    </div>
  )
}

export default PriceItem
