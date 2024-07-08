import { Path } from 'react-hook-form'

import { BaseFormInputType, FormInput } from './base/FormInput'

const Lastname = <TFormValues extends Record<string, unknown>>(props: BaseFormInputType<TFormValues>) => {
  const { register, errors } = props
  return (
    <FormInput
      id='lastname'
      type='text'
      label='Họ'
      placeholder='Nhập Họ'
      rules={{ required: 'Bạn phải nhập họ' }}
      register={register}
      name={'lastname' as Path<TFormValues>}
      errors={errors}
    />
  )
}

export default Lastname
