'use client'

import { useState } from 'react'
import { FieldValues } from 'react-hook-form'

import { getCheckValidOtp } from '@/config/api/auth'
import { usePost } from '@/hooks/api-hooks'

import BaseAuthModalForm from './BaseAuthModalForm'
import OtpForm from './OtpForm'

export type OtpConfirmationFormFields = {
  email: string
}

const OtpConfirmationModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const { mutate } = usePost(
    getCheckValidOtp(),
    {},
    (data) => {
      setIsSuccess(true)
    },
    () => {}
  )
  const onSubmit = (data: FieldValues) => {
    mutate({
      email: 'vietdanghoang1705@gmail.com',
      ...data,
    })
  }

  return (
    <BaseAuthModalForm open={open} handleClose={handleClose} title='Nhập mã xác nhận'>
      <OtpForm callback={onSubmit} isSuccess={isSuccess} />
    </BaseAuthModalForm>
  )
}

export default OtpConfirmationModalForm
