import Link from 'next/link'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CalendarCheck, Lock, TimerReset, User, UserCircle2 } from 'lucide-react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import { routes } from '@/config/routes'

const menuItems = [
  {
    href: routes.home,
    label: 'Hồ sơ',
    PrefixComponent: UserCircle2,
  },
  {
    href: routes.home,
    label: 'Thông tin đơn đặt',
    PrefixComponent: CalendarCheck,
  },
  {
    href: routes.home,
    label: 'Lịch sử đặt sân',
    PrefixComponent: TimerReset,
  },
  {
    href: routes.home,
    label: 'Đổi mật khẩu',
    PrefixComponent: Lock,
  },
]

const userInfo = {
  name: 'Tobogo Booking Court',
  email: 'tobogo@gmail.com',
}

const UserMenu = () => {
  const { name, email } = userInfo
  return (
    <Menu>
      <MenuButton className='border-gray rounded-full border p-1' onClick={(e) => e.stopPropagation()}>
        <User />
      </MenuButton>
      <MenuItems anchor='bottom end' className='border-gray z-[1000] mt-1 rounded-md border bg-white p-4'>
        <div className='mb-6 flex flex-col items-center justify-center'>
          <h1 className='text-base font-bold'>{name}</h1>
          <p className='text-gray text-sm'>{email}</p>
        </div>

        {menuItems.map((item, index) => {
          const { href, label, PrefixComponent } = item
          return (
            <MenuItem key={index}>
              <Link
                href={href}
                className='flex items-center gap-2 rounded-md p-2 data-[focus]:bg-light-gray data-[focus]:text-secondary'
              >
                <PrefixComponent size={20} />
                <p className='text-sm !text-black'>{label}</p>
              </Link>
            </MenuItem>
          )
        })}

        <PrimaryButton className='mt-4 w-full hover:bg-light-gray' variant='outlined'>
          <p className='text-sm text-black'>Đăng xuất</p>
        </PrimaryButton>
      </MenuItems>
    </Menu>
  )
}

export default UserMenu
