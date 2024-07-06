"use client"

import { useForm } from 'react-hook-form'
import { FormInput } from '@/components/Common/Form/base/FormInput'
import { FormTextArea } from '@/components/Common/Form/base/FormTextArea'
import { message } from './constants'
import { FormRadioButtonGroup } from '@/components/Common/Form/base/FormRadioButtonGroup'
import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import PhoneNumber from '@/components/Common/Form/PhoneNumber'

export type ContactFormFields = {
    name: string,
    mobile: number,
    email: string,
    message: string,
    facilityName: string,
    facilityLocation: string,
    facilityRole: string,
    typeOfSport: string,
    social: string,
    media: string,
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormFields>({
        mode: 'onBlur'
    })
    const onSubmit = handleSubmit((data) => {
        console.log("data", data)
    })
    const options = [
        { label: 'Social Media', value: 'option1' },
        { label: 'Friends', value: 'option2' },
        { label: 'Others', value: 'option3' },
    ];
    return (
        <div className='container mt-4 flex flex-col gap-10 mb-4'>
            <div className='flex flex-col gap-1 text-center'>
                <p className='font-Inter font-bold text-primary text-xl'>{message.FIND_OUT_MORE}</p>
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
                        rules={{ required: "You must enter name" }}
                        register={register}
                        errors={errors}
                    />
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6'>
                        <PhoneNumber
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            id='email'
                            type='email'
                            name='email'
                            placeholder='Email'
                            rules={{ required: "You must enter email" }}
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            id='facilityName'
                            type='text'
                            name='facilityName'
                            placeholder='Facility Name'
                            rules={{ required: "You must enter Facility Name" }}
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            id='facilityLocation'
                            type='text'
                            name='facilityLocation'
                            placeholder='Facility Location'
                            rules={{ required: "You must enter Facility Location" }}
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            id='facilityRole'
                            type='text'
                            name='facilityRole'
                            placeholder='Facility Role'
                            rules={{ required: "You must enter Facility Role" }}
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            id='typeOfSport'
                            type='text'
                            name='typeOfSport'
                            placeholder='Type Of Sport'
                            rules={{ required: "You must enter Facility Location" }}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <FormRadioButtonGroup options={options}
                        register={register}
                        rules={{ required: "This field is required" }}
                        errors={errors}
                        label='How did you hear about us?'
                        className="space-y-2 mb-4"
                        name='media' />
                    <FormTextArea
                        id='message'
                        name='message'
                        label='Message'
                        placeholder='Leave your message...'
                        rows={10}
                        rules={{ required: "You must enter message" }}
                        register={register}
                        errors={errors}
                    />

                </div>
                <div className='flex flex-col items-center gap-6 mt-5'>
                    <p className='text-primary text-sm'>By clicking on “Submit” you agree to Coursite’s <a href="#" className='underline text-blue-400'>Terms of Use</a> and <a href="#" className='underline text-blue-400'>Privacy Policy</a>.</p>
                    <PrimaryButton className='w-44 h-10 px-2 py-4'>
                        <span>Submit</span>
                    </PrimaryButton>

                </div>
            </form>


        </div>
    )
}

export default ContactForm