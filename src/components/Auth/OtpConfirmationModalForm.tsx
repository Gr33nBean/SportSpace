'use client'

import { FieldValues } from 'react-hook-form'
import BaseAuthModalForm from './BaseAuthModalForm'
import OtpForm from './OtpForm'
import { usePost } from '@/hooks/api-hooks'
import { getOtpCode } from '@/config/api/auth'

export type OtpConfirmationFormFields = {
  email: string
}

const OtpConfirmationModalForm = ({ open = true, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const { mutate } = usePost(getOtpCode(), {}, (data) => {
    console.log(data);
 }, () => { })
  const onSubmit = (data: FieldValues) => {
    mutate(data)
  }

  return (
    <BaseAuthModalForm open={true} handleClose={handleClose} callback={onSubmit} title=''>
      <OtpForm callback={onSubmit}/>
    </BaseAuthModalForm>
  )
}

export default OtpConfirmationModalForm
