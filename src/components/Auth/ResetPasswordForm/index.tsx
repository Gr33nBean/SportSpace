import clsx from 'clsx'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import ConfirmPassword from '@/components/Common/Form/ConfirmPassword'
import Password from '@/components/Common/Form/Password'

const ResetPasswordForm = () => {
  const enabled = false
  return (
    <form>
      <div className='flex h-[30rem] flex-col gap-4 overflow-hidden overflow-y-auto px-2'>
        <p className='text-center text-sm text-[#8E8E8E]'>
          Vì lý do bảo mật, chúng tôi khuyên dùng mật khẩu ít nhất 8 ký tự, sử dụng kết hợp các chữ cái, số và ký hiệu.
        </p>
        <Password errors={{}} register={undefined} />
        <ConfirmPassword errors={{}} register={undefined} watch={{}} />
        <div className='flex items-center justify-center'>
          <PrimaryButton
            enabled={enabled}
            className='h-12 w-fit px-6 py-1.5 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none'
          >
            <p
              className={clsx('text-base text-black', {
                'text-gray-300': !enabled,
              })}
            >
              Đổi mật khẩu
            </p>
          </PrimaryButton>
        </div>
      </div>
    </form>
  )
}

export default ResetPasswordForm
