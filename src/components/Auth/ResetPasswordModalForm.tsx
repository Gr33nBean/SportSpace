'use client'
import React from 'react'
import { FieldValues } from 'react-hook-form'

import { getChangePsw } from '@/config/api/auth'
import { usePost } from '@/hooks/api-hooks'
import useParamModal from '@/hooks/useParamModal'

import BaseAuthModalForm from './BaseAuthModalForm'
import ResetPasswordForm from './ResetPasswordForm'
export type ResetPasswordFormFields = {
  email: string
}

const ResetPasswordModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const { handleCloseModal } = useParamModal()
  const { mutate } = usePost(
    getChangePsw(),
    {},
    (data) => {
      console.log(data)
      handleCloseModal()
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
    <BaseAuthModalForm open={open} handleClose={handleClose} callback={onSubmit} title='Nhập mật khẩu mới'>
      <ResetPasswordForm callback={onSubmit} />
    </BaseAuthModalForm>
  )
}

export default ResetPasswordModalForm
