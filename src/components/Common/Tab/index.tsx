import React from 'react'

const Tab = ({
  isActive,
  onChange,
  children,
}: {
  isActive: boolean
  children: React.ReactNode
  onChange: () => void
}) => {
  return (
    <button onClick={onChange} className='relative overflow-hidden p-4 text-base font-normal'>
      {children}
      <span
        className='duration-350 absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full bg-secondary transition-all'
        style={{ transform: isActive ? 'translateY(0)' : 'translateY(110%)' }}
      ></span>
    </button>
  )
}

export default Tab
