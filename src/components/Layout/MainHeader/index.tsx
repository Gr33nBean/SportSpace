import { headers } from 'next/headers'
import Link from 'next/link'

import React from 'react'

const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Business',
    href: '/business',
  },
]

const MainHeader = () => {
  const headersList = headers()
  const url = headersList.get('referer') || ''
  const pathname = `/${url.split('/').at(-1)}`

  return (
    <div className='container flex w-full items-center gap-2 py-4'>
      {pages.map((page) => (
        <Link
          key={page.name}
          href={page.href}
          className={`text-sm font-medium text-black hover:text-gray-700 ${pathname === page.href ? 'font-bold text-primary' : ''}`}
        >
          {page.name}
        </Link>
      ))}
    </div>
  )
}

export default MainHeader
