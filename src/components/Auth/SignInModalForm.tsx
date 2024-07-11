import { FieldValues } from 'react-hook-form'

import BaseAuthModalForm from './BaseAuthModalForm'
import SignInForm from './SignInForm'

const SignInModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <>
      <BaseAuthModalForm open={open} handleClose={handleClose} callback={onSubmit} title='Tài khoản'>
        <SignInForm callback={onSubmit} />
      </BaseAuthModalForm>
    </>
  )
}

export default SignInModalForm
