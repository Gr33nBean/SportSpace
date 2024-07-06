'use client'
import React from 'react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import { routes } from '@/constants/routes'

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

  return (
    <>
      <BaseHeader
        pages={pages}
        hambugerProps={{ expand, setExpand }}
        rightContent={
          <>
            <PrimaryButton variant='outlined'>Đăng nhập</PrimaryButton>
            <PrimaryButton>Đăng ký</PrimaryButton>
          </>
        }
      />
    </>
  )
}

export default ClientHeader
