'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import Email from '../Common/Form/Email'
import Password from '../Common/Form/Password'
import PrimaryButton from '../Common/Button/PrimaryButton'

export type SignInFormFields = {
    email: string
    password: string
}

const SignInModalForm = ({open = false, handleClose}: {open?: boolean, handleClose: ()=>void}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormFields>()
    const onSubmit = handleSubmit((data) => {
        console.log('data', data)
    })

    return (
        <>
            <Dialog open={open} as="div" className="relative z-10 focus:outline-none ease-in-out transition-all" onClose={handleClose}>
            <div className={`fixed inset-0 bg-black transition-opacity ${open ? 'opacity-50' : 'opacity-0'}`} aria-hidden="true" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center">
                        <DialogPanel
                            transition
                            className="w-full max-w-xl rounded-xl bg-white backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 pt-6"
                        >
                            <div className='flex flex-col gap-7 p-6'>
                                <div className='flex items-center'>
                                    <span className='bg-slate-200 rounded-full p-2 cursor-pointer' onClick={handleClose}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </span>
                                    <DialogTitle as="h3" className="text-xl font-medium flex-1 text-center">
                                        Tài khoản
                                    </DialogTitle>
                                </div>
                                <div>
                                    <form onSubmit={onSubmit}>
                                        <div className='flex flex-col gap-6'>
                                            <Email register={register} errors={errors} />
                                            <Password register={register} errors={errors} />
                                        </div>
                                        <a href="" className='underline text-xs text-gray-500 font-bold'>Quên mật khẩu?</a>


                                    </form>
                                </div>

                            </div>
                            <div className="mt-4 flex gap-5 p-6 mb-4">
                                <PrimaryButton
                                    className="rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none flex-1 border border-black h-12"
                                    onClick={close}
                                    variant='outlined'
                                >
                                    <span className='text-black text-base'>
                                        Đăng ký
                                    </span>
                                </PrimaryButton>
                                <PrimaryButton
                                    className="bg-primary py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none flex-1 text-black h-12"
                                    onClick={close}
                                >
                                    <span className='text-black text-base'>
                                        Đăng nhập
                                    </span>
                                </PrimaryButton>
                            </div>
                            <div className='bg-slate-200 w-full h-full p-6 rounded-br-xl rounded-bl-xl flex gap-4 cursor-pointer'>
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-to-line"><path d="M17 12H3"/><path d="m11 18 6-6-6-6"/><path d="M21 5v14"/></svg>
                                </span>
                                <div>
                                    <p className='text-gray-500 font-Inter font-bold'>Bạn cần quản lý sân cầu lông?</p>
                                    <p className='text-black font-Inter font-bold'>Tới trang đăng nhập dành cho doanh nghiệp </p>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default SignInModalForm