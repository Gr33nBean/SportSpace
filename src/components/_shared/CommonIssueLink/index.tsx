import Link from 'next/link'

import React from 'react'
import { CircleHelp } from 'lucide-react'

const CommonIssueLink = () => {
  return (
    <Link href='' className='flex flex-row items-center gap-1'>
      <CircleHelp color='#8E8E8E' />
      <p className='text-sm font-medium text-custom-gray'>Vấn đề thường gặp</p>
    </Link>
  )
}

export default CommonIssueLink
