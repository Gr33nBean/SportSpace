'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

const pages = [
  {
    name: 'Trang chủ',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Doanh nghiệp',
    href: '/business',
  },
]

const MainHeader = () => {
  const path = usePathname()

  return (
    <div className='container flex w-full items-center py-4 shadow-sm'>
      <div className='flex flex-1 items-center gap-6'>
        <div className='size-8 rounded-full bg-primary'></div>
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.href}
            className={`text-sm font-medium text-primary transition-all duration-150 hover:underline ${'/' + path.split('/')[1] === page.href ? '!font-bold' : ''}`}
          >
            {page.name}
          </Link>
        ))}
      </div>
      <div className='flex items-center gap-2'>
        <PrimaryButton variant='outlined'>Đăng nhập</PrimaryButton>
        <PrimaryButton>Đăng ký</PrimaryButton>
      </div>
    </div>
  )
}

export default MainHeader
