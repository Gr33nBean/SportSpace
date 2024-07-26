import React from 'react'

import CommonIssueLink from '@/components/_shared/CommonIssueLink'
import ContactCustomerServiceLink from '@/components/_shared/ContactCustomerServiceLink'
import NextStepButton from '@/components/_shared/NextStepButton'
import Email from '@/components/Common/Form/Email'
import withForm, { WithFormProps } from '@/hocs/withForm'
const EmailConfirmationForm = (props: WithFormProps) => {
  const {
    onSubmit,
    register,
    formState: { errors },
  } = props
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
        <NextStepButton callback={onSubmit} isActive={false} />
      </div>
      <div className='flex flex-row gap-8'>
        <ContactCustomerServiceLink />
        <CommonIssueLink />
      </div>
    </div>
  )
}

export default withForm(EmailConfirmationForm)
