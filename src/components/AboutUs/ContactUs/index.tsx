import React from 'react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

import { message } from './constants'

const ContactUs = () => {
  return (
    <section className='background-contact'>
      <div className='container relative h-[60vh] w-full'>
        <div
          className='absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white bg-opacity-80 lg:left-20 lg:w-[50%] lg:translate-x-0'
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className='flex flex-col gap-7 p-9'>
            <div className='flex flex-col font-Inter text-2xl font-semibold text-secondary'>
              <span>{message.SHARE_VALUE}</span>
              <span>{message.BE_A_PART}</span>
            </div>
            <span className='text-primary'>{message.CONTACT_US_TEXT}</span>
            <div>
              <PrimaryButton className='h-10 w-32'>
                <span className='font-Inter text-base font-bold'>{message.CONTACT_US_BTN}</span>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
