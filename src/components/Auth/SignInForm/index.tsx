import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import Email from '@/components/Common/Form/Email'
import Password from '@/components/Common/Form/Password'
import withForm, { WithFormProps } from '@/hocs/withForm'

import NavigateToBusiness from '../NavigateToBusiness'

const SignInForm = (props: WithFormProps) => {
  const {
    onSubmit,
    register,
    formState: { errors },
  } = props

  return (
    <div className=''>
      <form onSubmit={onSubmit} className='p-6'>
        <div className='flex flex-col gap-6'>
          <Email register={register} errors={errors} />
          <Password register={register} errors={errors} />
        </div>
        <a href='' className='text-xs font-bold text-gray-500 underline'>
          Quên mật khẩu?
        </a>
      </form>
      <div className='mb-4 mt-4 flex gap-5 p-6'>
        <PrimaryButton
          className='h-12 flex-1 rounded-md border border-black bg-white px-3 py-1.5 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none'
          onClick={() => {}}
          variant='outlined'
        >
          <span className='text-base text-black'>Đăng ký</span>
        </PrimaryButton>
        <PrimaryButton
          className='h-12 flex-1 bg-primary px-3 py-1.5 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none'
          onClick={onSubmit}
        >
          <span className='text-base text-black'>Đăng nhập</span>
        </PrimaryButton>
      </div>
      <NavigateToBusiness />
    </div>
  )
}

export default withForm(SignInForm)
