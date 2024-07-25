import { FieldValues } from 'react-hook-form'

import { signUp } from '@/config/api/auth'
import { routes } from '@/config/routes'
import { usePost } from '@/hooks/api-hooks'

import BaseAuthModalForm from './BaseAuthModalForm'
import NavigateToBusiness from './NavigateToBusiness'
import SignUpForm from './SignUpForm'
import SuccessNotification from './SuccessNotification'

export type OtpConfirmationFormFields = {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
  rePassword: string
}

const SignUpModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const { mutate, isSuccess } = usePost(
    signUp(),
    {},
    (data) => {
      // Handle after sign up
    },
    () => {}
  )
  const onSubmit = (data: FieldValues) => {
    const { firstname, lastname, ...otherFields } = data
    const combinedName = `${firstname} ${lastname}`.trim()
    const finalData = { ...otherFields, name: combinedName }
    console.log(finalData)
    mutate(finalData)
  }

  return (
    <BaseAuthModalForm open={open} handleClose={handleClose} callback={onSubmit} title='Đăng ký'>
      {isSuccess ? (
        // TODO: Remember to add model after ?
        <div className='flex flex-col gap-8'>
          <SuccessNotification buttonTitle='Đến đăng nhập' message='Đăng ký thành công' route={`${routes.home}?`} />
          <NavigateToBusiness />
        </div>
      ) : (
        <SignUpForm callback={onSubmit} />
      )}
    </BaseAuthModalForm>
  )
}
export default SignUpModalForm
