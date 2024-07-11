'use client'
import React, { useState } from 'react'

import { routes } from '@/config/routes'

import BaseHeader from '../BaseHeader'
import { PageType } from '../ListLink'

const pages: PageType[] = [
  {
    name: 'Doanh nghiệp',
    href: routes.business,
  },
]

const BusinessHeader = () => {
  const [expand, setExpand] = useState(false)
  return (
    <>
      <BaseHeader pages={pages} hambugerProps={{ expand, setExpand }} rightContent={<></>} />
    </>
  )
}

export default BusinessHeader
