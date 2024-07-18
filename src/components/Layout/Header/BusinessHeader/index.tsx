'use client'
import React, { useState } from 'react'
import { House, Mail, Users } from 'lucide-react'

import { routes } from '@/config/routes'

import BaseHeaderBusiness from '../BaseHeaderBusiness'
import ListLink, { PageType } from '../ListLink'

const pages: PageType[] = [
  {
    name: 'Doanh nghiệp',
    href: routes.business,
    icon: <House />,
  },
  {
    name: 'About Us',
    href: routes.aboutUs,
    icon: <Users />,
  },
  {
    name: 'Liên lạc',
    href: routes.contact,
    icon: <Mail />,
  },
]

const BusinessHeader = () => {
  const [expand, setExpand] = useState(false)
  return (
    <>
      <BaseHeaderBusiness hambugerProps={{ expand, setExpand }} rightContent={<></>}>
        <ListLink pages={pages} />
      </BaseHeaderBusiness>
    </>
  )
}

export default BusinessHeader
