'use client'

import { useRouter } from 'next/navigation'

import { CheckCircle2 } from 'lucide-react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

type SuccessNotificationProps = {
  message: string
  route: string
  buttonTitle: string
}

const SuccessNotification = (props: SuccessNotificationProps) => {
  const { message, route, buttonTitle } = props
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <CheckCircle2 size={72} strokeWidth={2} className='text-secondary' />
      <p className='text-xl text-gray-500'>{message}</p>
      <PrimaryButton
        onClick={() => {
          router.push(route)
        }}
      >
        <p className='text-base text-black'>{buttonTitle}</p>
      </PrimaryButton>
    </div>
  )
}

export default SuccessNotification
