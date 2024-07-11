import { Path } from 'react-hook-form'

import { BaseFormInputType, FormInput } from './base/FormInput'

const Username = <TFormValues extends Record<string, unknown>>(props: BaseFormInputType<TFormValues>) => {
  const { register, errors } = props

  return (
    <FormInput
      id='username'
      type='text'
      placeholder='Tên đăng nhập'
      label='Tên đăng nhập'
      rules={{ required: 'Vui lòng nhập tên đăng nhập' }}
      register={register}
      name={'username' as Path<TFormValues>}
      errors={errors}
    />
  )
}

export default Username
