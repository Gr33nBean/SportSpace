import Link from 'next/link'

import React from 'react'
import { Turn as Hamburger } from 'hamburger-react'

import { routes } from '@/config/routes'

type BaseHeaderProps = {
  children?: React.ReactNode
  hambugerProps?: {
    expand: boolean
    setExpand: React.Dispatch<React.SetStateAction<boolean>>
  }
  rightContent?: React.ReactNode
}

const BaseHeader = ({ children, hambugerProps, rightContent }: BaseHeaderProps) => {
  return (
    <>
      <div className='sticky top-0 z-[100] flex h-[80px] w-full items-center bg-white py-4 shadow-sm transition-all duration-300'>
        <div className='container'>
          <div className='relative flex w-full items-center justify-between lg:justify-center'>
            {/* Logo */}

            <Link href={routes.home} className='flex items-center lg:absolute lg:bottom-0 lg:left-0 lg:top-0'>
              <div className='size-8 rounded-full bg-primary'></div>
            </Link>

            {/* List link */}
            <div className='hidden flex-1 items-center gap-6 lg:!flex'>{children}</div>

            <div className='lg:hidden'>
              {hambugerProps && rightContent && (
                <Hamburger toggled={hambugerProps.expand} toggle={hambugerProps.setExpand} color='#274A3D' />
              )}
            </div>

            {rightContent && (
              <div className='hidden items-center gap-2 lg:absolute lg:bottom-0 lg:right-0 lg:top-0 lg:!flex'>
                {rightContent}
              </div>
            )}
          </div>
        </div>
      </div>

      {hambugerProps && rightContent && (
        <div
          className='fixed bottom-0 left-0 right-0 top-0 z-[99] flex flex-col justify-start transition-all duration-500 lg:hidden'
          style={{
            top: hambugerProps.expand ? '0px' : '-100%',
            pointerEvents: hambugerProps.expand ? 'all' : 'none',
          }}
          onClick={() => hambugerProps.setExpand(true)}
        >
          <div className='h-[80px] w-full'></div>
          <div className='container flex w-full flex-col gap-2 bg-white py-4 shadow-sm'>
            {children}
            {rightContent}
          </div>
        </div>
      )}
    </>
  )
}

export default BaseHeader
