import { FieldValues } from 'react-hook-form'

import { signIn } from '@/config/api/auth'
import { routes } from '@/config/routes'
import { usePost } from '@/hooks/api-hooks'

import BaseAuthModalForm from './BaseAuthModalForm'
import NavigateToBusiness from './NavigateToBusiness'
import SignInForm from './SignInForm'
import SuccessNotification from './SuccessNotification'

export type OtpConfirmationFormFields = {
  email: string
  password: string
}

const SignInModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const { mutate, isSuccess } = usePost(
    signIn(),
    {},
    (data) => {
      console.log('Sign in successful:', data)
    },
    (error) => {
      console.error('Sign in failed:', error)
    }
  )

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    mutate(data)
  }

  return (
    <>
      <BaseAuthModalForm open={open} handleClose={handleClose} callback={onSubmit} title='Tài khoản'>
        {isSuccess ? (
          <div className='flex flex-col gap-8'>
            <SuccessNotification buttonTitle='Đến trang chủ' message='Đăng nhập thành công' route={routes.home} />
            <NavigateToBusiness />
          </div>
        ) : (
          <SignInForm callback={onSubmit} />
        )}
      </BaseAuthModalForm>
    </>
  )
}

export default SignInModalForm
