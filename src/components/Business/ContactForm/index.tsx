"use client"

import { useForm } from 'react-hook-form'
import { FormInput } from '@/components/Common/Form/FormInput'
import { FormTextArea } from '@/components/Common/Form/FormTextArea'
import { message } from './constants'
import { FormRadioButtonGroup } from '@/components/Common/Form/FormRadioButtonGroup'

export type ContactFormFields = {
    name: string,
    mobile: number,
    email: string,
    message: string,
    social: string
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormFields>()

    const onSubmit = handleSubmit((data) => {
        console.log("data", data)
    })
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
    return (
        <div className='container mt-4 flex flex-col gap-10'>
            <div className='flex flex-col gap-1 text-center'>
                <p className='font-Inter font-bold text-primary text-xl'>{message.FIND_OUT_MORE}</p>
                <span className='text-primary'>{message.LEAVE_A_MSG}</span>
            </div>
            <form onSubmit={onSubmit}>
                <div className='flex flex-col gap-6'>
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
                    <div className='grid grid-cols-2 gap-3'>
                        <FormInput
                            id='mobile'
                            type='number'
                            name='mobile'
                            label='Mobile'
                            placeholder='Mobile number'
                            rules={{ required: "You nmust enter mobile number" }}
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            id='email'
                            type='email'
                            name='email'
                            label='Email'
                            placeholder='Email'
                            rules={{ required: "You must enter email" }}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <FormRadioButtonGroup options={options}
                        register={register}
                        rules={{ required: "This field is required" }}
                        errors={errors}
                        className="space-y-2 mb-4"
                        name='message' />
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
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default ContactForm