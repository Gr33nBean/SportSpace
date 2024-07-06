import React from 'react'

import { routes } from '@/constants/routes'

import BaseHeader from '../BaseHeader'
import { PageType } from '../ListLink'

const pages: PageType[] = [
  {
    name: 'Doanh nghiệp',
    href: routes.business,
  },
]

const BusinessHeader = () => {
  return (
    <>
      <BaseHeader pages={pages} />
    </>
  )
}

export default BusinessHeader
