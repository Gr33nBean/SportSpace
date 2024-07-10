import React from 'react'
import { LogOut } from 'lucide-react'

type LoginBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const LoginBtn = (props: LoginBtnProps) => {
  return (
    <button className='border-gray-300 flex items-center gap-3 rounded-full border px-3 py-1.5' {...props}>
      Login
      <LogOut size={20} />
    </button>
  )
}

export default LoginBtn
