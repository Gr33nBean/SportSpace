import React, { useState } from 'react'
import { FieldValues } from 'react-hook-form'

import { getOtpCode } from '@/config/api/auth'
import { usePost } from '@/hooks/api-hooks'

import BaseAuthModalForm from './BaseAuthModalForm'
import EmailConfirmationForm from './EmailConfirmationForm'

const EmailConfirmationModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const { mutate } = usePost(
    getOtpCode(),
    {},
    (data) => {
      console.log(data)
    },
    () => {}
  )
  const onSubmit = (data: FieldValues) => {
    mutate(data)
  }
  return (
    <BaseAuthModalForm open={open} handleClose={handleClose} callback={onSubmit} title='Nhập địa chỉ email'>
      <EmailConfirmationForm callback={onSubmit} isSuccess={isSuccess} />
    </BaseAuthModalForm>
  )
}

export default EmailConfirmationModalForm
