import { Path } from 'react-hook-form'

import { BaseFormInputType, FormInput } from './base/FormInput'

const PhoneNumber = <TFormValues extends Record<string, unknown>>(
  props: BaseFormInputType<TFormValues> & { label?: string }
) => {
  const { register, errors } = props
  return (
    <FormInput
      id='mobile'
      type='number'
      label='Số điện thoại di động'
      placeholder='Số điện thoại di động'
      rules={{
        required: 'Vui lòng số điện thoại di động',
        pattern: {
          value: /^\d{10}$/,
          message: 'Số điện thoại phải có 10 chữ số',
        },
      }}
      register={register}
      name={'phoneNumber' as Path<TFormValues>}
      errors={errors}
    />
  )
}

export default PhoneNumber
