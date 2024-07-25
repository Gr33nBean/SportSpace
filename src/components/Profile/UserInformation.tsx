import React from 'react'

import UserRecord from './user-record'

function UserInformation() {
  const enrollDate = new Date('2024-07-01')
  return (
    <div className='mx-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-md'>
      <UserRecord userName='Nguyễn Tấn Đạt' enrollDate={enrollDate} count={214} timeBooked={254} />
    </div>
  )
}

export default UserInformation
