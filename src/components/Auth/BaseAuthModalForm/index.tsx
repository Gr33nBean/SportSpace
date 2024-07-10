import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useWindowSize } from '@uidotdev/usehooks'
import { FieldValue, FieldValues, useForm } from 'react-hook-form'

import { SCREEN } from '@/constants/screen'

import BottomSheet from '../../Common/BottomSheet'
import NavigateToBusiness from '../NavigateToBusiness'

type BaseAuthModalFormProps = {
  open: boolean
  handleClose: () => void
  callback: () => void
  formFields: FieldValue<FieldValues>
  children: React.ReactNode
}

const BaseAuthModalForm = (props: BaseAuthModalFormProps) => {
  const { formFields, callback, open, handleClose, children } = props

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<typeof formFields>()

  const { width } = useWindowSize()

  const onSubmit = handleSubmit((data) => {
    callback()
  })

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
                  <div className='relative flex items-center justify-center'>
                    <DialogTitle as='h3' className='text-center text-xl font-medium'>
                      Tài khoản
                    </DialogTitle>
                    <span
                      className='absolute right-0 cursor-pointer rounded-full bg-slate-200 p-2'
                      onClick={handleClose}
                    >
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
                  </div>
                </div>
                {children}
                <NavigateToBusiness />
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      ) : (
        <BottomSheet open={open} className='block md:hidden' onClose={handleClose}>
          <div className='flex flex-col gap-7'>
            <div className='relative flex items-center'>
              <p className='flex-1 text-center text-xl font-medium'>Tài khoản</p>
              <span className='absolute right-0 cursor-pointer rounded-full bg-slate-200 p-2' onClick={handleClose}>
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
            </div>
            {children}
            <NavigateToBusiness />
          </div>
        </BottomSheet>
      )}
    </>
  )
}

export default BaseAuthModalForm
