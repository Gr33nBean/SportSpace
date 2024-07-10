import { FieldErrors, FieldValues, FormState, UseFormRegister, UseFormWatch } from 'react-hook-form'

import ConfirmPassword from '../../Common/Form/ConfirmPassword'
import Email from '../../Common/Form/Email'
import Firstname from '../../Common/Form/Firstname'
import Lastname from '../../Common/Form/Lastname'
import Password from '../../Common/Form/Password'
import PhoneNumber from '../../Common/Form/PhoneNumber'
import Username from '../../Common/Form/Username'

type SignUpFormProps = {
  onSubmit: () => void
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FormState<FieldValues>>
  watch: UseFormWatch<FieldValues>
}

const SignUpForm = (props: SignUpFormProps) => {
  const { register, errors, watch, onSubmit } = props

  return (
    <form onSubmit={onSubmit}>
      <div className='flex h-[30rem] flex-col gap-6 overflow-hidden overflow-y-auto px-2'>
        <Firstname register={register} errors={errors} />
        <Lastname register={register} errors={errors} />
        <Username register={register} errors={errors} />
        <PhoneNumber register={register} errors={errors} />
        <Email register={register} errors={errors} />
        <Password register={register} errors={errors} />
        <ConfirmPassword register={register} errors={errors} watch={watch} />
      </div>
    </form>
  )
}

export default SignUpForm
