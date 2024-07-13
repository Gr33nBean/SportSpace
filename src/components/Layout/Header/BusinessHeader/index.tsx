'use client'
import React, { useState } from 'react'

import { routes } from '@/config/routes'

import BaseHeader from '../BaseHeader'
import ListLink, { PageType } from '../ListLink'

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
      <BaseHeader hambugerProps={{ expand, setExpand }} rightContent={<></>}>
        <div className='flex w-full flex-col justify-center lg:flex-row lg:justify-start lg:px-12'>
          <ListLink pages={pages} />
        </div>
      </BaseHeader>
    </>
  )
}

export default BusinessHeader
