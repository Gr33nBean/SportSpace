'use client'
import React from 'react'
import { LogOut } from 'lucide-react'

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

  return (
    <>
      <BaseHeader
        pages={pages}
        hambugerProps={{ expand, setExpand }}
        rightContent={
          <>
            <PrimaryButton variant='outlined' onClick={handleOpenLoginForm} className='flex items-center gap-2'>
              Đăng nhập
              <LogOut size={15} />
            </PrimaryButton>

            <PrimaryButton onClick={handleOpenSignUpForm}>Đăng ký</PrimaryButton>
          </>
        }
      />

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
