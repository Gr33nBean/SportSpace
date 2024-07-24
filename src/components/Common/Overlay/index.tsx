'use client'
import useParamModal from '@/hooks/useParamModal'

const Overlay = () => {
  const { isExistingModal } = useParamModal()
  if (!isExistingModal()) return null
  return <div className='fixed inset-0 z-[101] h-[100dvh] w-screen bg-black bg-opacity-70' />
}

export default Overlay
