import Image from 'next/image'

import React from 'react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

import { images, message } from './constants'

const ContactUs = () => {
  return (
    <section className='relative'>
      <Image
        src={images.BACKGROUND_IMG}
        width={600}
        height={100}
        className='h-[460px] w-full object-cover'
        alt='about-us'
      />
      <div className='absolute left-32 top-[20%] w-[45%] bg-white bg-opacity-50'>
        <div className='flex h-64 flex-col gap-7 p-9'>
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
    </section>
  )
}

export default ContactUs
