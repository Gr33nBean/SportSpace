'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

import './style.css'

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
      <div className='container sticky top-0 z-[999] w-full bg-white py-4 shadow-sm transition-all duration-300'>
        <div className='flex w-full items-center'>
          <div className='flex flex-1 items-center gap-6'>
            <div className='size-8 rounded-full bg-primary'></div>
            <div className='hidden flex-1 items-center gap-6 md:!flex'>
              <ListLink />
            </div>
          </div>

          <input
            type='checkbox'
            role='button'
            checked={expand}
            onClick={() => setExpand(!expand)}
            aria-label='Display the menu'
            className='menu md:hidden'
          />

          <div className='hidden items-center gap-2 md:!flex'>
            <PrimaryButton variant='outlined'>Đăng nhập</PrimaryButton>
            <PrimaryButton>Đăng ký</PrimaryButton>
          </div>
        </div>
      </div>

      <div
        className='fixed bottom-0 left-0 right-0 top-0 z-[100] flex flex-col justify-start transition-all duration-500 md:hidden'
        style={{
          top: expand ? '0px' : '-100%',
          pointerEvents: expand ? 'all' : 'none',
        }}
        onClick={() => setExpand(false)}
      >
        <div className='my-4 h-8 w-full'></div>
        <div className='container flex w-full flex-col gap-2 bg-white py-4 shadow-sm'>
          <ListLink />
          <PrimaryButton variant='outlined'>Đăng nhập</PrimaryButton>
          <PrimaryButton>Đăng ký</PrimaryButton>
        </div>
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
