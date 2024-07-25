import React from 'react'

type UserRecordProps = {
  userName: string
  enrollDate: Date
}

const UserRecord = (props: UserRecordProps) => {
  const { userName, enrollDate } = props
  const month = enrollDate.toLocaleString('vi-VN', { month: 'long' })
  const year = enrollDate.getFullYear()
  return (
    <div className='flex items-center p-4'>
      <img className='h-12 w-12 rounded-full' src='https://placehold.co/48x48' alt='User profile picture' />
      <div className='ml-4'>
        <h2 className='text-lg font-semibold text-zinc-900'>{`${userName}`}</h2>
        <p className='text-zinc-500'>
          Tham gia từ tháng {`${month}`}, {`${year}`}
        </p>
      </div>
    </div>
  )
}

export default UserRecord
