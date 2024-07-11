import BottomSheet from '@/components/Common/BottomSheet'
import { SCREEN } from '@/config/screen'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useWindowSize } from '@uidotdev/usehooks'
import { FieldValue, FieldValues, useForm } from 'react-hook-form'
import NavigateToBusiness from '../NavigateToBusiness'

type BaseAuthModalFormProps = {
  open: boolean
  handleClose: () => void
  callback: (data: any) => void
  form: (props: any) => JSX.Element;
  title: string
}

const BaseAuthModalForm = (props: BaseAuthModalFormProps) => {
  const { callback, open, handleClose, form, title } = props

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const { width } = useWindowSize()

  const onSubmit = handleSubmit((data) => {
    callback(data)
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
                  <div className='flex items-center'>
                    <DialogTitle as='h3' className='flex-1 text-center text-xl font-medium'>
                      {title}
                    </DialogTitle>
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
                  </div>

                </div>
                {form({ onSubmit, register, errors, watch })}
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      ) : (
        <BottomSheet open={open} className='block md:hidden' onClose={handleClose}>
          <div className='flex flex-col gap-7 p-6'>
            <div className='flex items-center'>
              <p className='flex-1 text-center text-xl font-medium'>{title}</p>
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
            </div>
          </div>
            {form({ onSubmit, register, errors, watch })}
        </BottomSheet>
      )}
    </>
  )
}

export default BaseAuthModalForm
