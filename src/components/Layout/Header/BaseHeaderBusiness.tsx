import Link from 'next/link'

import React from 'react'
import { Turn as Hamburger } from 'hamburger-react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import { routes } from '@/config/routes'

type BaseHeaderProps = {
  children?: React.ReactNode
  hambugerProps?: {
    expand: boolean
    setExpand: React.Dispatch<React.SetStateAction<boolean>>
  }
  rightContent?: React.ReactNode
}

const BaseHeaderBusiness = ({ children, hambugerProps, rightContent }: BaseHeaderProps) => {
  return (
    <>
      <div className='z-[100] block h-[80px] w-full bg-white max-sm:sticky max-sm:top-0 sm:hidden'>
        <div className='container flex h-full items-center justify-between'>
          <Logo />

          <PrimaryButton className='!border-primary !bg-primary !py-1.5'>Liên lạc</PrimaryButton>
        </div>
      </div>

      <div className='z-[100] flex h-[80px] w-full items-center bg-white py-4 shadow-lg transition-all duration-300 max-sm:fixed max-sm:bottom-0 sm:sticky sm:top-0'>
        <div className='container'>
          <div className='relative flex w-full items-center justify-between max-sm:hidden lg:justify-center'>
            {/* Logo */}
            <Logo />

            {/* List link */}
            <div className='hidden flex-1 items-center gap-6 lg:!flex'>
              <div className='flex w-full flex-row justify-start gap-3 px-14'>{children}</div>
            </div>

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

          <div className='relative hidden w-full items-center justify-center gap-2 max-sm:!flex'>{children}</div>
        </div>
      </div>

      {hambugerProps && rightContent && (
        <div
          className='fixed bottom-0 left-0 right-0 top-0 z-[99] flex flex-col justify-start transition-all duration-500 max-sm:hidden lg:hidden'
          style={{
            top: hambugerProps.expand ? '0px' : '-100%',
            pointerEvents: hambugerProps.expand ? 'all' : 'none',
          }}
          onClick={() => hambugerProps.setExpand(false)}
        >
          <div className='h-[80px] w-full'></div>
          <div className='container flex w-full flex-col gap-2 bg-white py-4 shadow-sm'>
            <div className='flex w-full flex-col justify-center'>{children}</div>
            {rightContent}
          </div>
        </div>
      )}
    </>
  )
}

export default BaseHeaderBusiness

function Logo() {
  return (
    <Link href={routes.home} className='flex items-center lg:absolute lg:bottom-0 lg:left-0 lg:top-0'>
      <div className='size-8 rounded-full bg-primary'></div>
    </Link>
  )
}
