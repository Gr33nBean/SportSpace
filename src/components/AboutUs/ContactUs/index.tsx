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
        className='h-[500px] w-full object-cover'
        alt='about-us'
      />
      <div className='absolute left-[20px] top-[20%] w-[90%] bg-white bg-opacity-50 lg:left-32 lg:w-[45%]'>
        <div className='flex flex-col gap-7 p-9 lg:h-64'>
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
