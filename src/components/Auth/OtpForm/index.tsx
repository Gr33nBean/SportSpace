import React from 'react'

import CommonIssueLink from '@/components/_shared/CommonIssueLink'
import ContactCustomerServiceLink from '@/components/_shared/ContactCustomerServiceLink'
import NextStepButton from '@/components/_shared/NextStepButton'
import OtpInput from '@/components/Common/Form/OtpInput'
import withForm, { WithFormProps } from '@/hocs/withForm'

const OtpForm = (props: WithFormProps) => {
  const {
    onSubmit,
    register,
    watch,
    formState: { errors },
    isSuccess = false,
  } = props

  return (
    <div className='flex flex-col items-center justify-center py-2'>
      <form onSubmit={onSubmit}>
        <p className='mb-4 text-sm font-medium text-custom-gray'>
          Nhấn để nhận mã xác nhận, thư xác nhận sẽ gửi về hòm thư của bạn.
        </p>
        <div className='flex flex-col gap-6'>
          <OtpInput register={register} errors={errors} callback={onSubmit} watch={watch} />
        </div>
      </form>
      <div className='mb-16 mt-4 flex w-1/2 gap-5 p-6'>
        <NextStepButton
          callback={
            isSuccess
              ? () => {
                  alert('Hi')
                }
              : () => {}
          }
          isActive={isSuccess}
        />
      </div>
      <div className='flex flex-row gap-8 pb-4'>
        <ContactCustomerServiceLink />
        <CommonIssueLink />
      </div>
    </div>
  )
}

export default withForm(OtpForm)
