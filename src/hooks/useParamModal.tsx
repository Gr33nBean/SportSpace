'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const MODAL = {
  LOGIN: 'login',
  REGISTER: 'register',
  FORGOT_PSW: 'forgot-password',
  CHANGE_PSW: 'change-password',
  OTP: 'otp',
} as const
type ModalKey = (typeof MODAL)[keyof typeof MODAL]
const paramKey = 'openModal'

const useParamModal = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleOpenModal = (modalKey: ModalKey) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set(paramKey, modalKey)
    router.push(`${pathname}?${newSearchParams.toString()}`)
  }

  const handleCloseModal = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.delete(paramKey)
    const newUrl = `${pathname}${newSearchParams.toString() ? `?${newSearchParams.toString()}` : ''}`
    router.push(newUrl)
  }

  const isMatchParamModalKey = (modalKey: ModalKey) => {
    const currentModalKey = searchParams.get(paramKey)
    return currentModalKey === modalKey
  }

  const isExistingModal = () => {
    return !!searchParams.get(paramKey)
  }

  return {
    isMatchParamModalKey,
    handleCloseModal,
    handleOpenModal,
    isExistingModal,
  }
}

export default useParamModal
