'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

export type PageType = {
  name: string
  href: string
}

const ListLink = ({ pages }: { pages: PageType[] }) => {
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

export default ListLink
