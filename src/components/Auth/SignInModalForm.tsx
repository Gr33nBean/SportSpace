'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useWindowSize } from '@uidotdev/usehooks'
import { useForm } from 'react-hook-form'

import { SCREEN } from '@/constants/screen'

import BottomSheet from '../Common/BottomSheet'
import PrimaryButton from '../Common/Button/PrimaryButton'
import Email from '../Common/Form/Email'
import Password from '../Common/Form/Password'

export type SignInFormFields = {
  email: string
  password: string
}

const SignInModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const { width } = useWindowSize()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormFields>()
  const onSubmit = handleSubmit((data) => {})

  return (
    <>
      {(width as number) > SCREEN.MOBILE ? (
        <Dialog
          open={open}
          as='div'
          className='relative hidden transition-all ease-in-out focus:outline-none md:block'
          onClose={handleClose}
        >
          <div
            className={`fixed inset-0 bg-black transition-opacity ${open ? 'opacity-50' : 'opacity-0'}`}
            aria-hidden='true'
            onClick={handleClose}
          />
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center'>
              <DialogPanel
                transition
                className='data-[closed]:transform-[scale(95%)] w-full max-w-xl rounded-xl bg-white pt-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0'
              >
                <div className='flex flex-col gap-7 p-6'>
                  <div className='flex items-center'>
                    <span className='cursor-pointer rounded-full bg-slate-200 p-2' onClick={handleClose}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='15'
                        height='15'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-x'
                      >
                        <path d='M18 6 6 18' />
                        <path d='m6 6 12 12' />
                      </svg>
                    </span>
                    <DialogTitle as='h3' className='flex-1 text-center text-xl font-medium'>
                      Tài khoản
                    </DialogTitle>
                  </div>
                  <div>
                    <form onSubmit={onSubmit}>
                      <div className='flex flex-col gap-6'>
                        <Email register={register} errors={errors} />
                        <Password register={register} errors={errors} />
                      </div>
                      <a href='' className='text-xs font-bold text-gray-500 underline'>
                        Quên mật khẩu?
                      </a>
                    </form>
                  </div>
                </div>

                <div className='mb-4 mt-4 flex gap-5 p-6'>
                  <PrimaryButton
                    className='h-12 flex-1 rounded-md border border-black bg-white px-3 py-1.5 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none'
                    onClick={handleClose}
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
                <div className='flex h-full w-full cursor-pointer gap-4 rounded-bl-xl rounded-br-xl bg-slate-200 p-6'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-arrow-right-to-line'
                    >
                      <path d='M17 12H3' />
                      <path d='m11 18 6-6-6-6' />
                      <path d='M21 5v14' />
                    </svg>
                  </span>
                  <div>
                    <p className='font-Inter font-bold text-gray-500'>Bạn cần quản lý sân cầu lông?</p>
                    <p className='font-Inter font-bold text-black'>Tới trang đăng nhập dành cho doanh nghiệp </p>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      ) : (
        <BottomSheet open={open} className='block md:hidden' onClose={handleClose}>
          <div className='flex flex-col gap-7 p-6'>
            <div className='flex items-center'>
              <span className='cursor-pointer rounded-full bg-slate-200 p-2' onClick={handleClose}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-x'
                >
                  <path d='M18 6 6 18' />
                  <path d='m6 6 12 12' />
                </svg>
              </span>
              <p className='flex-1 text-center text-xl font-medium'>Tài khoản</p>
            </div>
            <div>
              <form onSubmit={onSubmit}>
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
                  onClick={handleClose}
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
            </div>
          </div>
        </BottomSheet>
      )}
    </>
  )
}

export default SignInModalForm
