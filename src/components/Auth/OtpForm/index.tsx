import React from 'react'

import CommonIssueLink from '@/components/_shared/CommonIssueLink'
import ContactCustomerServiceLink from '@/components/_shared/ContactCustomerServiceLink'
import NextStepButton from '@/components/_shared/NextStepButton'
import Email from '@/components/Common/Form/Email'
import OtpInput from '@/components/Common/Form/OtpInput'
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
          <OtpInput register={register} errors={errors} callback={onSubmit} />
        </div>
      </form>
      <div className='mb-16 mt-4 flex w-1/2 gap-5 p-6'>
        {/* <PrimaryButton
          className='h-12 flex-1 bg-primary px-3 py-1.5 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none'
          onClick={onSubmit}
          variant='outlined'
        >
          <span className='text-base text-black'>Bước tiếp theo</span>
        </PrimaryButton> */}
        <NextStepButton callback={() => {}} isActive={false} />
      </div>
      <div className='flex flex-row gap-8 pb-4'>
        <ContactCustomerServiceLink />
        <CommonIssueLink />
      </div>
    </div>
  )
}

export default withForm(OtpForm)
