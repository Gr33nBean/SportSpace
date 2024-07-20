import React from 'react'
import { FilePenLine, History, Lock } from 'lucide-react'

const menuItems = [
  {
    label: 'Sửa hồ sơ',
    icon: <FilePenLine size={20} />,
  },

  {
    label: 'Lịch sử đặt sân',
    icon: <History size={20} />,
  },
  {
    line: true,
  },
  {
    label: 'Đổi mật khẩu',
    icon: <Lock size={20} />,
  },
]

const ProfileMenu = () => {
  return (
    <div className='flex w-full flex-col gap-5 overflow-hidden rounded-[10px] border border-gray-300 p-6 shadow-lg'>
      {menuItems.map((item, index) => {
        if (item.line) {
          return <div key={index} className='h-[1px] w-full bg-gray-300' />
        }
        return (
          <button
            key={index}
            className='flex items-center gap-2 rounded-md p-2 hover:bg-light-gray hover:text-secondary'
          >
            {item.icon}
            <p className='text-sm font-normal !text-black'>{item.label}</p>
          </button>
        )
      })}
    </div>
  )
}

export default ProfileMenu
