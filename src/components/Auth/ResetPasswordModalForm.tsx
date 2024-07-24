'use client'
import React from 'react'
import { FieldValues } from 'react-hook-form'
import { usePost } from '@/hooks/api-hooks'
import { getChangePsw } from '@/config/api/auth'
import BaseAuthModalForm from './BaseAuthModalForm'
import ResetPasswordForm from './ResetPasswordForm'
export type ResetPasswordFormFields = {
    email: string
  }

const ResetPasswordModalForm = ({ open = true, handleClose }: { open?: boolean; handleClose: () => void }) => {
    const { mutate } = usePost(getChangePsw(), {}, (data) => {
        console.log(data);
     }, () => { })
      const onSubmit = (data: FieldValues) => {
        mutate(data)
      }
  return (
    <BaseAuthModalForm open={true} handleClose={handleClose} callback={onSubmit} title='Nhập mật khẩu mới'>
      <ResetPasswordForm callback={onSubmit}/>
    </BaseAuthModalForm>
  )
}

export default ResetPasswordModalForm