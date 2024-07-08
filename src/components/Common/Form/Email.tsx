import { Path } from 'react-hook-form'

import { BaseFormInputType } from './base/FormInput'
import { FormInputIcon } from './base/FormInputIcon'

const Email = <TFormValues extends Record<string, unknown>>(props: BaseFormInputType<TFormValues>) => {
  const { register, errors } = props

  return (
    <FormInputIcon
      id='email'
      label='Email'
      rules={{ required: 'You must enter email' }}
      register={register}
      name={'email' as Path<TFormValues>}
      errors={errors}
      icon={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-mail text-gray-400'
        >
          <rect width='20' height='16' x='2' y='4' rx='2' />
          <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
        </svg>
      }
    />
  )
}

export default Email
