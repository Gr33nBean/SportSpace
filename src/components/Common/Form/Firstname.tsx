import { Path } from 'react-hook-form'

import { BaseFormInputType, FormInput } from './base/FormInput'

const Firstname = <TFormValues extends Record<string, unknown>>(props: BaseFormInputType<TFormValues>) => {
  const { register, errors } = props
  return (
    <FormInput
      id='firstname'
      type='text'
      label='Tên'
      placeholder='Nhập Tên'
      rules={{ required: 'Bạn phải nhập tên' }}
      register={register}
      name={'firstname' as Path<TFormValues>}
      errors={errors}
    />
  )
}

export default Firstname
