import React from 'react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

type NextStepButtonProps = {
  callback?: () => void
  isActive?: boolean
}

const NextStepButton = ({ callback, isActive = false }: NextStepButtonProps) => {
  return (
    <PrimaryButton
      className={`h-12 flex-1 bg-secondary px-3 py-1.5 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none`}
      onClick={callback}
      variant={isActive ? 'filled' : 'outlined'}
    >
      <span className='text-base text-black'>Bước tiếp theo</span>
    </PrimaryButton>
  )
}

export default NextStepButton
