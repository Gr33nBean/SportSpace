import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import ConfirmPassword from '@/components/Common/Form/ConfirmPassword'
import Password from '@/components/Common/Form/Password'
import withForm, { WithFormProps } from '@/hocs/withForm'

const ResetPasswordForm = (props: WithFormProps) => {
  const {
    onSubmit,
    register,
    formState: { errors },
  } = props
  return (
    <form onSubmit={onSubmit}>
      <div className='flex h-[30rem] flex-col gap-4 overflow-hidden overflow-y-auto px-2'>
        <p className='text-center text-sm text-[#8E8E8E]'>
          Vì lý do bảo mật, chúng tôi khuyên dùng mật khẩu ít nhất 8 ký tự, sử dụng kết hợp các chữ cái, số và ký hiệu.
        </p>
        <Password errors={errors} register={register} placeholder='Nhập mật khẩu mới'/>
        <ConfirmPassword errors={errors} register={register} watch={{}} />
        <div className='flex items-center justify-center'>
          <PrimaryButton
            className='h-12 w-fit px-6 py-1.5 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none'
          >
            <p
              className={'text-base text-black'}
            >
              Đổi mật khẩu
            </p>
          </PrimaryButton>
        </div>
      </div>
    </form>
  )
}

export default withForm(ResetPasswordForm)
