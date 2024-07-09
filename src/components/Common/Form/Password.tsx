'use client'
import { useState } from 'react'
import { Path } from 'react-hook-form'

import { BaseFormInputType } from './base/FormInput'
import { FormInputIcon } from './base/FormInputIcon'

const Password = <TFormValues extends Record<string, unknown>>(props: BaseFormInputType<TFormValues>) => {
  const [showPsw, setShowPsw] = useState(false)
  const { register, errors } = props

  return (
    <FormInputIcon
      id='password'
      type={showPsw ? 'text' : 'password'}
      label='Mật khẩu'
      rules={{ required: 'You must enter email' }}
      register={register}
      placeholder='Nhập Mật Khẩu'
      name={'password' as Path<TFormValues>}
      errors={errors}
      icon={
        showPsw ? (
          <div onClick={() => setShowPsw(false)}>
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
              className='lucide lucide-eye text-gray-400'
            >
              <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
              <circle cx='12' cy='12' r='3' />
            </svg>
          </div>
        ) : (
          <div onClick={() => setShowPsw(true)}>
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
              className='lucide lucide-eye-off text-gray-400 hover:cursor-pointer'
            >
              <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
              <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
              <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
              <line x1='2' x2='22' y1='2' y2='22' />
            </svg>
          </div>
        )
      }
    />
  )
}

export default Password
