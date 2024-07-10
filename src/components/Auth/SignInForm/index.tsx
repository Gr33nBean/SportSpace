import { FieldErrors, FieldValues, FormState, UseFormRegister } from 'react-hook-form'

type SignInFormProps = {
  onSubmit: () => void
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FormState<FieldValues>>
}

const SignInForm = (props: SignInFormProps) => {
  const { onSubmit, register, errors } = props
  return <></>
}

export default SignInForm
