import BaseAuthModalForm from './BaseAuthModalForm'
import SignInForm from './SignInForm'

export type SignInFormFields = {
  email: string
  password: string
}

const SignInModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const onSubmit = (data: SignInFormFields) => {
    console.log(data)
  }

  return (
    <>
      <BaseAuthModalForm
        open={open}
        form={SignInForm}
        handleClose={handleClose}
        callback={onSubmit}
        title='Tài khoản'
      />
    </>
  )
}

export default SignInModalForm
