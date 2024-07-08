import { Path } from 'react-hook-form'
import { BaseFormInputType, FormInput } from './base/FormInput'

const Username = <TFormValues extends Record<string, unknown>>(props: BaseFormInputType<TFormValues>) => {
  const { register, errors } = props

  return (
    <FormInput
      id='username'
      type='text'
      placeholder='Tên Đăng nhập'
      label='Tên Đăng nhập'
      rules={{ required: 'Vui Lòng nhập tên đăng nhập' }}
      register={register}
      name={'username' as Path<TFormValues>}
      errors={errors}
    />
  )
}

export default Username