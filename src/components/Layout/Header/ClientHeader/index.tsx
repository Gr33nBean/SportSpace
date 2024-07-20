'use client'
import React from 'react'
import { Calendar, House, LogOut, Search, Settings, User } from 'lucide-react'
import { isMobile } from 'react-device-detect'

import MobileGlobalSearch from '@/components/_shared/MobileGlobalSearch'
import SearchBar from '@/components/_shared/SearchBar'
import UserMenu from '@/components/_shared/UserMenu'
import SignInModalForm from '@/components/Auth/SignInModalForm'
import SignUpModalForm from '@/components/Auth/SignUpModalForm'
import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import { routes } from '@/config/routes'

import BaseHeader from '../BaseHeader'
import BaseHeaderBusiness from '../BaseHeaderBusiness'
import ListLink, { PageType } from '../ListLink'

const pages: PageType[] = [
  {
    name: 'Trang chủ',
    href: routes.home,
    icon: <House />,
  },
  {
    name: 'Tìm kiếm',
    href: routes.search,
    icon: <Search />,
  },
  {
    name: 'Lịch đặt',
    href: routes.profile,
    icon: <Calendar />,
  },
  {
    name: 'Thông tin người dùng',
    href: routes.profile,
    icon: <User />,
  },
  {
    name: 'Cài đặt',
    href: routes.booking('123'),
    icon: <Settings />,
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
      {isMobile ? (
        <BaseHeaderBusiness>
          <ListLink pages={pages} />
        </BaseHeaderBusiness>
      ) : (
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
            <SearchBar />
            <MobileGlobalSearch />
          </div>
        </BaseHeader>
      )}

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
