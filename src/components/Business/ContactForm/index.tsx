'use client'

import { useForm } from 'react-hook-form'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import { FormInput } from '@/components/Common/Form/base/FormInput'
import { FormRadioButtonGroup } from '@/components/Common/Form/base/FormRadioButtonGroup'
import { FormTextArea } from '@/components/Common/Form/base/FormTextArea'
import PhoneNumber from '@/components/Common/Form/PhoneNumber'

import { message } from './constants'

export type ContactFormFields = {
  name: string
  mobile: number
  email: string
  message: string
  facilityName: string
  facilityLocation: string
  facilityRole: string
  typeOfSport: string
  social: string
  media: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormFields>({
    mode: 'onBlur',
  })
  const onSubmit = handleSubmit((data) => {
    console.log('data', data)
  })
  const options = [
    { label: 'Social Media', value: 'option1' },
    { label: 'Friends', value: 'option2' },
    { label: 'Others', value: 'option3' },
  ]
  return (
    <div className='container mb-4 mt-4 flex flex-col gap-10'>
      <div className='flex flex-col gap-1 text-center'>
        <p className='font-Inter text-xl font-bold text-primary'>{message.FIND_OUT_MORE}</p>
        <span className='text-primary'>{message.LEAVE_A_MSG}</span>
      </div>
      <form onSubmit={onSubmit}>
        <div className='flex flex-col gap-3 sm:gap-6'>
          <FormInput
            id='name'
            type='text'
            name='name'
            label='Name'
            placeholder='Name'
            rules={{ required: 'You must enter name' }}
            register={register}
            errors={errors}
          />
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6'>
            <PhoneNumber register={register} errors={errors} />
            <FormInput
              id='email'
              type='email'
              name='email'
              placeholder='Email'
              rules={{ required: 'You must enter email' }}
              register={register}
              errors={errors}
            />
            <FormInput
              id='facilityName'
              type='text'
              name='facilityName'
              placeholder='Facility Name'
              rules={{ required: 'You must enter Facility Name' }}
              register={register}
              errors={errors}
            />
            <FormInput
              id='facilityLocation'
              type='text'
              name='facilityLocation'
              placeholder='Facility Location'
              rules={{ required: 'You must enter Facility Location' }}
              register={register}
              errors={errors}
            />
            <FormInput
              id='facilityRole'
              type='text'
              name='facilityRole'
              placeholder='Facility Role'
              rules={{ required: 'You must enter Facility Role' }}
              register={register}
              errors={errors}
            />
            <FormInput
              id='typeOfSport'
              type='text'
              name='typeOfSport'
              placeholder='Type Of Sport'
              rules={{ required: 'You must enter Facility Location' }}
              register={register}
              errors={errors}
            />
          </div>
          <FormRadioButtonGroup
            options={options}
            register={register}
            rules={{ required: 'This field is required' }}
            errors={errors}
            label='How did you hear about us?'
            className='mb-4 space-y-2'
            name='media'
          />
          <FormTextArea
            id='message'
            name='message'
            label='Message'
            placeholder='Leave your message...'
            rows={10}
            rules={{ required: 'You must enter message' }}
            register={register}
            errors={errors}
          />
        </div>
        <div className='mt-5 flex flex-col items-center gap-6'>
          <p className='text-sm text-primary'>
            By clicking on “Submit” you agree to Coursite’s{' '}
            <a href='#' className='text-blue-400 underline'>
              Terms of Use
            </a>{' '}
            and{' '}
            <a href='#' className='text-blue-400 underline'>
              Privacy Policy
            </a>
            .
          </p>
          <PrimaryButton className='h-10 w-44 px-2 py-4'>
            <span>Submit</span>
          </PrimaryButton>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
