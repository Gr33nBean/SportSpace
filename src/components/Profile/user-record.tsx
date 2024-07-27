import Image from 'next/image'

import React from 'react'

type UserRecordProps = {
  userName: string
  enrollDate: Date
  count: number
  timeBooked: number
}

const UserRecord = (props: UserRecordProps) => {
  const { userName, enrollDate, count, timeBooked } = props
  const month = enrollDate.toLocaleString('vi-VN', { month: 'long' })
  const year = enrollDate.getFullYear()
  return (
    <>
      <div className='flex items-center p-4'>
        <Image
          width={48}
          height={48}
          className='rounded-full'
          src='https://placehold.co/48x48'
          alt='User profile picture'
        />
        <div className='ml-4'>
          <h2 className='text-lg font-semibold text-black'>{`${userName}`}</h2>
          <p className='text-zinc-500'>
            Tham gia từ tháng {`${month}`}, {`${year}`}
          </p>
        </div>
      </div>
      <div className='flex justify-around bg-secondary p-4'>
        <div className='text-center'>
          <p className='text-3xl font-bold text-black'>{`${count}`}</p>
          <p className='text-zinc-700'>Số lần đặt</p>
        </div>
        <div className='border-l border-zinc-400'></div>
        <div className='text-center'>
          <p className='text-3xl font-bold text-black'>{`${timeBooked}`}</p>
          <p className='text-zinc-700'>Số giờ đặt</p>
        </div>
      </div>
    </>
  )
}

export default UserRecord
