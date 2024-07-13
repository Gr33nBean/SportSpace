import React from 'react'
import { LogOut } from 'lucide-react'

type LoginBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const LoginBtn = (props: LoginBtnProps) => {
  return (
    <button
      className='flex items-center justify-center gap-3 rounded-full border border-gray-300 px-2.5 py-1'
      {...props}
    >
      <span className='font-Inter'>Login</span>
      <LogOut size={20} />
    </button>
  )
}

export default LoginBtn
