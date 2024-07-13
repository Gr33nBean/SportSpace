import { FieldValues } from 'react-hook-form'

import BaseAuthModalForm from './BaseAuthModalForm'
import SignUpForm from './SignUpForm'

const SignUpModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const onSubmit = (data: FieldValues) => {
    console.log('data', data)
  }

  return (
    <>
      <BaseAuthModalForm open={open} handleClose={handleClose} callback={onSubmit} title='Tạo Tài khoản'>
        <SignUpForm callback={onSubmit} />
      </BaseAuthModalForm>
    </>
  )
}
export default SignUpModalForm
