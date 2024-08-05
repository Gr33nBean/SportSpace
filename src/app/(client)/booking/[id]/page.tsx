'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import { useState } from 'react'

import LinkGGMap from '@/components/_shared/LinkGGMap'
import Table from '@/components/Booking/Table'
import { formatDate, formatForInput } from '@/components/Booking/Table/ChoosingDate'
import Tab from '@/components/Common/Tab'
import CourtDetail from '@/components/Detail/CourtDetail/CourtDetail'
import BillSummary from '@/components/Summary/Bill/BillSummary'
import BillSummaryEmpty from '@/components/Summary/Bill/BillSummaryEmpty'
import { getBookingCourt, getBusinessDetail } from '@/config/api/business'
import { getCourtsByBusinessSlug } from '@/config/api/court'
import { useFetch, usePost } from '@/hooks/api-hooks'
import facebook from '@/images/svg/facebook.svg'
import google from '@/images/svg/google.svg'
import { IBusiness } from '@/interface/business'
import { IBusinessCourt, ISlot } from '@/interface/court'

const Booking = () => {
  const { id } = useParams()
  const { data } = useFetch<IBusiness>(getBusinessDetail(id as string))
  const [activeTab, setActiveTab] = useState(0)
  const [selectedSlots, setSelectedSlots] = useState<ISlot[]>([])
  const [choosingDate, setChoosingDate] = useState(formatDate(new Date()))
  const { mutate } = usePost(
    getBookingCourt(),
    {},
    (data) => {
      console.log(data)
    },
    () => {}
  )

  const parseDateToIso = (choosingDate: string) => {
    const [day, month, year] = choosingDate.split('/').map(Number)
    const date = new Date(Date.UTC(year, month - 1, day, 16, 27, 41, 754))
    const isoString = date.toISOString()

    return isoString
  }

  const handleAddNewSlot = (slot: ISlot) => {
    console.log(slot)
    const isExits = [...selectedSlots].findIndex((s) => s.id === slot.id) !== -1

    const newSlots = isExits ? [...selectedSlots].filter((s) => s.id !== slot.id) : [...selectedSlots, slot]
    setSelectedSlots(newSlots)
  }

  const mappingDataForBooking = () => {
    return {
      name: 'Viet',
      phoneNumber: '0905124585',
      createBookingCourtInfors: selectedSlots.map((item) => ({
        courtId: item.id ? item.id.slice(0, -2) : '',
        bookingMethodId: '315c1ea3-8b2d-46c4-abd6-835fbd6eb337',
        date: parseDateToIso(choosingDate),
        slot: item.slot,
        startTime: item.start,
        endTime: item.end,
        status: 0,
      })),
    }
  }

  const handleBooking = () => {
    mutate(mappingDataForBooking())
  }

  const { data: businessCourt } = useFetch<IBusinessCourt>(getCourtsByBusinessSlug(data?.slug ?? ''))

  return (
    <div>
      <div className='background-banner-home dark-overlay relative flex min-h-[40vh] w-full items-center bg-blue-200'>
        <div className='container z-10 py-10 text-white'>
          <p className='text-4xl font-semibold'>{data?.name}</p>
          <LinkGGMap link={data?.address as string}>
            <span className='text-md pt-3 font-normal'>{data?.address}</span>
          </LinkGGMap>
          <div className='flex items-center gap-2 pt-2'>
            <Image src={facebook} alt='facebook' width={20} height={20} className='object-cover' />
            <Image src={google} alt='facebook' width={20} height={20} className='object-cover' />
          </div>
        </div>
      </div>

      <div className='border-b border-custom-gray'>
        <div className='container flex items-center justify-center sm:justify-start'>
          {['Đặt lịch', 'Thông tin'].map((item, index) => (
            <Tab key={index} isActive={activeTab === index} onChange={() => setActiveTab(index)}>
              {item}
            </Tab>
          ))}
        </div>
      </div>

      <div className='container flex flex-col items-start gap-8 py-20 lg:flex-row'>
        <div className='w-full lg:w-[68%] lg:min-w-[68%]'>
          <div
            style={{
              display: activeTab === 0 ? 'block' : 'none',
            }}
          >
            <Table
              businessCourt={businessCourt}
              choosingDate={choosingDate}
              setChoosingDate={setChoosingDate}
              onSelectSlot={handleAddNewSlot}
              business={data as IBusiness}
            />
          </div>

          <div
            style={{
              display: activeTab === 1 ? 'block' : 'none',
            }}
          >
            <CourtDetail {...(data as IBusiness)} />
          </div>
        </div>

        <div className='w-full lg:w-[32%]'>
          {selectedSlots.length > 0 ? (
            <BillSummary
              onBooking={handleBooking}
              date={formatForInput(choosingDate)}
              price={selectedSlots.reduce((total, cur) => total + cur.price, 0)}
              startTime='12:00'
              endTime='13:00'
            />
          ) : (
            <BillSummaryEmpty />
          )}
        </div>
      </div>
    </div>
  )
}

export default Booking
