'use client'
import React from 'react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import { routes } from '@/constants/routes'

import BaseHeader from '../BaseHeader'
import { PageType } from '../ListLink'
import SignInModalForm from '@/components/Auth/SignInModalForm'
import SignUpModalForm from '@/components/Auth/SignUpModalForm'

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
  let [isLoginFormOpen, setIsLoginFormOpen] = React.useState(false)
  let [isSignUpFormOpen, setIsSignUpFormOpen] = React.useState(false)

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
            <PrimaryButton variant='outlined' onClick={handleOpenLoginForm}>Đăng nhập</PrimaryButton>
            <PrimaryButton onClick={handleOpenSignUpForm}>Đăng ký</PrimaryButton>
          </>
        }
      />

      <SignInModalForm open={isLoginFormOpen} handleClose={() => { setIsLoginFormOpen(false) }} />
      <SignUpModalForm open={isSignUpFormOpen} handleClose={() => { setIsSignUpFormOpen(false) }} />
    </>
  )
}

export default ClientHeader
