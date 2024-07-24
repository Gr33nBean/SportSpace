import Link from 'next/link'

import React from 'react'
import { CircleHelp, CircleUserRound } from 'lucide-react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import Email from '@/components/Common/Form/Email'
import withForm, { WithFormProps } from '@/hocs/withForm'

const OtpForm = (props: WithFormProps) => {
  const {
    onSubmit,
    register,
    formState: { errors },
  } = props
  return (
    <div className='flex flex-col items-center justify-center py-2'>
      <form onSubmit={onSubmit}>
        <p className='mb-4 text-sm font-medium text-custom-gray'>
          Nhấn để nhận mã xác nhận, thư xác nhận sẽ gửi về hòm thư của bạn.
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
      <div className='flex flex-row gap-8 pb-4'>
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

export default withForm(OtpForm)
