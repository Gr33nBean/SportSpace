import Link from 'next/link'

import React from 'react'
import { Turn as Hamburger } from 'hamburger-react'

import { routes } from '@/config/routes'

import ListLink, { PageType } from './ListLink'

type BaseHeaderProps = {
  pages?: PageType[]
  hambugerProps?: {
    expand: boolean
    setExpand: React.Dispatch<React.SetStateAction<boolean>>
  }
  rightContent?: React.ReactNode
}

const BaseHeader = ({ pages, hambugerProps, rightContent }: BaseHeaderProps) => {
  return (
    <>
      <div className='sticky top-0 z-[999] flex h-[80px] w-full items-center bg-white py-4 shadow-sm transition-all duration-300'>
        <div className='container flex w-full items-center'>
          <div className='flex flex-1 items-center gap-6'>
            {/* Logo */}
            <Link href={routes.home}>
              <div className='size-8 rounded-full bg-primary'></div>
            </Link>

            {/* List link */}
            <div className='hidden flex-1 items-center gap-6 md:!flex'>{pages && <ListLink pages={pages} />}</div>
          </div>

          <div className='md:hidden'>
            {hambugerProps && rightContent && (
              <Hamburger toggled={hambugerProps.expand} toggle={hambugerProps.setExpand} color='#274A3D' />
            )}
          </div>

          {rightContent && <div className='hidden items-center gap-2 md:!flex'>{rightContent}</div>}
        </div>
      </div>

      {hambugerProps && rightContent && (
        <div
          className='fixed bottom-0 left-0 right-0 top-0 z-[100] flex flex-col justify-start transition-all duration-500 md:hidden'
          style={{
            top: hambugerProps.expand ? '0px' : '-100%',
            pointerEvents: hambugerProps.expand ? 'all' : 'none',
          }}
          onClick={() => hambugerProps.setExpand(false)}
        >
          <div className='my-4 h-[80px] w-full'></div>
          <div className='container flex w-full flex-col gap-2 bg-white py-4 shadow-sm'>
            {pages && <ListLink pages={pages} />}
            {rightContent}
          </div>
        </div>
      )}
    </>
  )
}

export default BaseHeader
