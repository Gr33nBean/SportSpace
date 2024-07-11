import BaseAuthModalForm from './BaseAuthModalForm'

export type SignUpFormFields = {
  email: string
  password: string
  firstName: string
  lastName: string
}

const SignUpModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const onSubmit = (data: SignUpFormFields) => {
    console.log('data', data)
  }

  return (
    <>
      <BaseAuthModalForm open={open} handleClose={handleClose} callback={onSubmit} title='Tạo Tài khoản' />
    </>
  )
}

export default SignUpModalForm
