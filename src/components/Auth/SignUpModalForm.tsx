'use client'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'

import PrimaryButton from '../Common/Button/PrimaryButton'
import ConfirmPassword from '../Common/Form/ConfirmPassword'
import Email from '../Common/Form/Email'
import Firstname from '../Common/Form/Firstname'
import Lastname from '../Common/Form/LastName'
import Password from '../Common/Form/Password'
import Username from '../Common/Form/Username'

export type SignUpFormFields = {
  email: string
  password: string
}

const SignUpModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormFields>()
  const onSubmit = handleSubmit((data) => {
    console.log('data', data)
  })

  return (
    <>
      <Dialog open={open} as='div' className='relative z-10 focus:outline-none' onClose={handleClose}>
        <div
          className={`fixed inset-0 bg-black transition-opacity ${open ? 'opacity-50' : 'opacity-0'}`}
          aria-hidden='true'
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
                    Tạo Tài khoản
                  </DialogTitle>
                </div>
                <div>
                  <form onSubmit={onSubmit}>
                    <div className='flex flex-col gap-6'>
                      <Firstname register={register} errors={errors} />
                      <Lastname register={register} errors={errors} />
                      <Username register={register} errors={errors} />
                      <Email register={register} errors={errors} />
                      <Password register={register} errors={errors} />
                      <ConfirmPassword register={register} errors={errors} />
                    </div>
                  </form>
                </div>
              </div>
              <div className='mb-4 mt-4 flex gap-5 p-6'>
                <PrimaryButton
                  className='h-12 flex-1 rounded-md border border-black bg-white px-3 py-1.5 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none'
                  onClick={close}
                  variant='outlined'
                >
                  <span className='text-base text-black'>Đăng ký</span>
                </PrimaryButton>
                <PrimaryButton
                  className='h-12 flex-1 bg-primary px-3 py-1.5 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none'
                  onClick={close}
                >
                  <span className='text-base text-black'>Đăng nhập</span>
                </PrimaryButton>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default SignUpModalForm
