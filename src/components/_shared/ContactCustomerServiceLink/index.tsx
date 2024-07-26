import Link from 'next/link'

import React from 'react'
import { CircleUserRound } from 'lucide-react'

const ContactCustomerServiceLink = () => {
  return (
    <Link href='' className='flex flex-row items-center gap-1'>
      <CircleUserRound color='#8E8E8E' />
      <p className='text-sm font-medium text-custom-gray'>Liên hệ CSKH</p>
    </Link>
  )
}

export default ContactCustomerServiceLink
