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
  const [expand, setExpand] = React.useState(false)
  return (
    <>
      <div className='container sticky top-0 z-50 w-full bg-white py-4 shadow-sm'>
        <div className='flex w-full items-center'>
          <div className='flex flex-1 items-center gap-6'>
            <div className='size-8 rounded-full bg-primary'></div>
            <div className='hidden flex-1 items-center gap-6 md:flex'>
              <ListLink />
            </div>
          </div>

          <button className='text-primary md:hidden' onClick={() => setExpand(!expand)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='4' x2='20' y1='12' y2='12' />
              <line x1='4' x2='20' y1='6' y2='6' />
              <line x1='4' x2='20' y1='18' y2='18' />
            </svg>
          </button>

          <div className='hidden items-center gap-2 md:flex'>
            <PrimaryButton variant='outlined'>Đăng nhập</PrimaryButton>
            <PrimaryButton>Đăng ký</PrimaryButton>
          </div>
        </div>
      </div>

      <div
        className='container fixed flex w-full flex-col gap-2 bg-white py-4 pt-[88px] shadow-sm transition-all duration-500 md:hidden'
        style={{
          top: expand ? '0px' : '-100%',
          pointerEvents: expand ? 'all' : 'none',
        }}
      >
        <ListLink />
        <PrimaryButton variant='outlined'>Đăng nhập</PrimaryButton>
        <PrimaryButton>Đăng ký</PrimaryButton>
      </div>
    </>
  )
}

export default MainHeader

function ListLink() {
  const path = usePathname()
  return (
    <>
      {pages.map((page) => (
        <Link
          key={page.name}
          href={page.href}
          className={`block w-full text-center text-sm font-medium text-primary transition-all duration-150 hover:underline md:w-fit ${'/' + path.split('/')[1] === page.href ? '!font-bold' : ''}`}
        >
          {page.name}
        </Link>
      ))}
    </>
  )
}
