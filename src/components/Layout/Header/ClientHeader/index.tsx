'use client'
import React from 'react'
import { LogOut } from 'lucide-react'

import GlobalSearch from '@/components/_shared/GlobalSearch'
import MobileGlobalSearch from '@/components/_shared/MobileGlobalSearch'
import UserMenu from '@/components/_shared/UserMenu'
import SignInModalForm from '@/components/Auth/SignInModalForm'
import SignUpModalForm from '@/components/Auth/SignUpModalForm'
import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import { routes } from '@/config/routes'

import BaseHeader from '../BaseHeader'
import { PageType } from '../ListLink'

const pages: PageType[] = [
  {
    name: 'Trang chủ',
    href: routes.home,
  },
  {
    name: 'About Us',
    href: routes.aboutUs,
  },
  {
    name: 'Doanh nghiệp',
    href: routes.business,
  },
]

const ClientHeader = () => {
  const [expand, setExpand] = React.useState(false)
  const [isLoginFormOpen, setIsLoginFormOpen] = React.useState(false)
  const [isSignUpFormOpen, setIsSignUpFormOpen] = React.useState(false)

  function handleOpenLoginForm() {
    setIsLoginFormOpen(true)
  }

  function handleOpenSignUpForm() {
    setIsSignUpFormOpen(true)
  }

  const isLogin = true

  return (
    <>
      <BaseHeader
        hambugerProps={{ expand, setExpand }}
        rightContent={
          <>
            {isLogin ? (
              <UserMenu />
            ) : (
              <>
                <PrimaryButton
                  variant='outlined'
                  radius='full'
                  onClick={handleOpenLoginForm}
                  className='flex items-center gap-2 !px-4 !py-2'
                >
                  <span className='flex w-full items-center justify-center gap-2'>
                    Đăng nhập
                    <LogOut size={15} />
                  </span>
                </PrimaryButton>
              </>
            )}

            {/* <PrimaryButton onClick={handleOpenSignUpForm}>Đăng ký</PrimaryButton> */}
          </>
        }
      >
        <div className='flex w-full flex-col items-center justify-center md:flex-row'>
          {/* {pages && <ListLink pages={pages} />} */}
          <GlobalSearch />
          <MobileGlobalSearch />
        </div>
      </BaseHeader>

      <SignInModalForm
        open={isLoginFormOpen}
        handleClose={() => {
          setIsLoginFormOpen(false)
        }}
      />
      <SignUpModalForm
        open={isSignUpFormOpen}
        handleClose={() => {
          setIsSignUpFormOpen(false)
        }}
      />
    </>
  )
}

export default ClientHeader
