'use client'
import React from 'react'

import EmailConfirmationModalForm from '@/components/Auth/EmailConfirmationModalForm'
import OtpConfirmationModalForm from '@/components/Auth/OtpConfirmationModalForm'
import ResetPasswordModalForm from '@/components/Auth/ResetPasswordModalForm'
import SignInModalForm from '@/components/Auth/SignInModalForm'
import SignUpModalForm from '@/components/Auth/SignUpModalForm'
import useParamModal, { MODAL } from '@/hooks/useParamModal'

const GlobalModal = () => {
  const { handleCloseModal, isMatchParamModalKey } = useParamModal()

  return (
    <div>
      <SignInModalForm
        open={isMatchParamModalKey(MODAL.LOGIN)}
        handleClose={() => {
          handleCloseModal()
        }}
      />
      <SignUpModalForm
        open={isMatchParamModalKey(MODAL.REGISTER)}
        handleClose={() => {
          handleCloseModal()
        }}
      />
      <EmailConfirmationModalForm
        open={isMatchParamModalKey(MODAL.FORGOT_PSW)}
        handleClose={() => {
          handleCloseModal()
        }}
      />
      <OtpConfirmationModalForm
        open={isMatchParamModalKey(MODAL.OTP)}
        handleClose={() => {
          handleCloseModal()
        }}
      />
      <ResetPasswordModalForm
        open={isMatchParamModalKey(MODAL.CHANGE_PSW)}
        handleClose={() => {
          handleCloseModal()
        }}
      />
    </div>
  )
}

export default GlobalModal
