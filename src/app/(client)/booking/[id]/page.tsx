'use client'
import { useParams } from 'next/navigation'

const Booking = () => {
  const { id } = useParams()

  return <div>Booking {id}</div>
}

export default Booking
