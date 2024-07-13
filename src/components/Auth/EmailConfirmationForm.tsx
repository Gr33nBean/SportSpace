'use client'
import Link from 'next/link'

import { CircleHelp, CircleUserRound } from 'lucide-react'
import { useForm } from 'react-hook-form'

import PrimaryButton from '../Common/Button/PrimaryButton'
import Email from '../Common/Form/Email'

export type EmailConfirmationFormFields = {
  email: string
}

const EmailConfirmationForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailConfirmationFormFields>()
  const onSubmit = handleSubmit((data) => {})

  return (
    <div className='flex flex-col items-center justify-center'>
      <form onSubmit={onSubmit}>
        <p className='mb-4 text-sm font-medium text-custom-gray'>
          Hãy sử dụng địa chỉ email được kết nối với tài khoản của bạn.
        </p>
        <div className='flex flex-col gap-6'>
          <Email register={register} errors={errors} />
        </div>
      </form>
      <div className='mb-16 mt-4 flex w-1/2 gap-5 p-6'>
        <PrimaryButton
          className='h-12 flex-1 bg-primary px-3 py-1.5 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none'
          onClick={onSubmit}
          variant='outlined'
        >
          <span className='text-base text-black'>Bước tiếp theo</span>
        </PrimaryButton>
      </div>
      <div className='flex flex-row gap-8'>
        <Link href='' className='flex flex-row items-center gap-1'>
          <CircleUserRound color='#8E8E8E' />
          <p className='text-sm font-medium text-custom-gray'>Liên hệ CSKH</p>
        </Link>
        <Link href='' className='flex flex-row items-center gap-1'>
          <CircleHelp color='#8E8E8E' />
          <p className='text-sm font-medium text-custom-gray'>Vấn đề thường gặp</p>
        </Link>
      </div>
    </div>
  )
}

export default EmailConfirmationForm
