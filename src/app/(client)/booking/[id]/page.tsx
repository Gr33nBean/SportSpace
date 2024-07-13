'use client'
import { useParams } from 'next/navigation'

const Booking = () => {
  const { id } = useParams()

  return (
    <div>
      <div className='h-[30dvh] min-h-[410px] w-full bg-blue-200'></div>
    </div>
  )
}

export default Booking
