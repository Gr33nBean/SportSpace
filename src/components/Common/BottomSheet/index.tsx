import React from 'react'
import clsx from 'clsx'

type BottomSheetProps = {
  children: React.ReactNode
  open: boolean
  onClose?: () => void
  className?: string
}

const BottomSheet = (props: BottomSheetProps) => {
  const { children, open, onClose, className } = props

  return (
    <div>
      <div
        className={`fixed inset-0 bg-black transition-opacity ${open ? 'opacity-50' : 'opacity-0'}`}
        aria-hidden='true'
        onClick={onClose}
      />
      <div
        className={clsx(
          'fixed bottom-0 left-0 right-0 z-[100] flex flex-col justify-start transition-all duration-500 md:hidden',
          className
        )}
        style={{
          bottom: open ? '0px' : '-100%',
          pointerEvents: open ? 'all' : 'none',
        }}
      >
        <div className='my-4 h-8 w-full'></div>
        <div className='container flex w-full flex-col gap-2 bg-white py-4 shadow-md'>{children}</div>
      </div>
    </div>
  )
}

export default BottomSheet
