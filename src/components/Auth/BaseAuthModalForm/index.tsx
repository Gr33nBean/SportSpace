import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { isMobile } from 'react-device-detect'
import { useForm } from 'react-hook-form'

import BottomSheet from '@/components/Common/BottomSheet'

type BaseAuthModalFormProps = {
  open: boolean
  handleClose: () => void
  callback: (data: any) => void
  title: string
  children?: React.ReactNode
}

const BaseAuthModalForm = (props: BaseAuthModalFormProps) => {
  const { callback, open, handleClose, title, children } = props

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    callback(data)
  })
  console.log(isMobile)

  return (
    <>
      {!isMobile ? (
        <Dialog
          open={open}
          as='div'
          className='relative z-[200] hidden transition-all ease-in-out focus:outline-none md:!block'
          onClose={handleClose}
        >
          <div className='fixed inset-0 flex h-[100dvh] w-screen items-center justify-center bg-black bg-opacity-70'>
            <DialogPanel
              transition
              className='data-[closed]:transform-[scale(95%)] max-h-[85dvh] w-full max-w-xl overflow-auto rounded-xl bg-white pt-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0'
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
                    >
                      <path d='M18 6 6 18' />
                      <path d='m6 6 12 12' />
                    </svg>
                  </span>
                </div>
              </div>
              {children}
            </DialogPanel>
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
                >
                  <path d='M18 6 6 18' />
                  <path d='m6 6 12 12' />
                </svg>
              </span>
            </div>
          </div>
          {children}
        </BottomSheet>
      )}
    </>
  )
}

export default BaseAuthModalForm
