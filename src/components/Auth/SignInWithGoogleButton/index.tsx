'use client'

import Image from 'next/image'

import { signInWithPopup } from 'firebase/auth'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import { auth, provider } from '@/helpers/firebaseHelpers'
import google from '@/images/png/google_icon.png'

const SignInWithGoogleButton = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data)
    })
  }

  return (
    <PrimaryButton
      className='h-12 flex-1 rounded-md border border-[#e35344] bg-white px-3 py-1.5 text-sm/6 font-semibold shadow-inner shadow-white/10'
      variant='outlined'
      onClick={signInWithGoogle}
    >
      <span className='flex items-center justify-center text-base text-[#e35344]'>
        <Image src={google} alt='google-sign-in' className='mr-2' width={24} height={24} />
        <p>Tiếp tục với Gmail</p>
      </span>
    </PrimaryButton>
  )
}

export default SignInWithGoogleButton
