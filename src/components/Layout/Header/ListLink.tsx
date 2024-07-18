'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

export type PageType = {
  name: string
  href: string
  icon?: React.ReactNode
}

const ListLink = ({ pages }: { pages: PageType[] }) => {
  const path = usePathname()

  return (
    <>
      {pages.map((page) => {
        const isActive = '/' + path.split('/')[1] === page.href
        return (
          <Link
            key={page.name}
            href={page.href}
            className={`block w-full text-center text-sm font-medium text-primary transition-all duration-150 hover:underline max-sm:flex-1 md:w-fit ${isActive ? '!font-bold' : ''}`}
          >
            <span className='max-sm:hidden'>{page.name}</span>
            <span className='flex w-full items-center justify-center sm:hidden'>
              <span className={`rounded-md p-2 ${isActive ? 'bg-primary text-white' : 'text-custom-gray'}`}>
                {page.icon}
              </span>
            </span>
          </Link>
        )
      })}
    </>
  )
}

export default ListLink
