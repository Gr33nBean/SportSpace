import { FieldErrors, FieldValues, FormState, UseFormRegister } from 'react-hook-form'

import Email from '../../Common/Form/Email'
import Password from '../../Common/Form/Password'

type SignInFormProps = {
  onSubmit: () => void
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FormState<FieldValues>>
}

const SignInForm = (props: SignInFormProps) => {
  const { onSubmit, register, errors } = props
  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-6'>
        <Email register={register} errors={errors} />
        <Password register={register} errors={errors} />
      </div>
      <a href='' className='text-xs font-bold text-gray-500 underline'>
        Quên mật khẩu?
      </a>
    </form>
  )
}

export default SignInForm
