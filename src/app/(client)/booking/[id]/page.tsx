'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import { useState } from 'react'

import LinkGGMap from '@/components/_shared/LinkGGMap'
import Table from '@/components/Booking/Table'
import Tab from '@/components/Common/Tab'
import CourtDetail from '@/components/Detail/CourtDetail/CourtDetail'
import BillSummaryEmpty from '@/components/Summary/Bill/BillSummaryEmpty'
import { getBusinessDetail } from '@/config/api/business'
import { useFetch } from '@/hooks/api-hooks'
import facebook from '@/images/svg/facebook.svg'
import google from '@/images/svg/google.svg'
import { IBusiness } from '@/interface/business'

const Booking = () => {
  const { id } = useParams()
  const { data } = useFetch<IBusiness>(getBusinessDetail(id as string))
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      {/*  */}
      <div className='background-banner-home dark-overlay relative flex min-h-[40dvh] w-full items-center bg-blue-200'>
        <div className='container z-10 py-10 text-white'>
          <p className='text-4xl font-semibold'>{data?.name}</p>
          <LinkGGMap link={data?.address as string}>
            <p className='text-md pt-3 font-normal'>{data?.address}</p>
          </LinkGGMap>
          <div className='flex items-center gap-2 pt-2'>
            <Image src={facebook} alt='facebook' width={20} height={20} className='object-cover' />
            <Image src={google} alt='facebook' width={20} height={20} className='object-cover' />
          </div>
        </div>
      </div>

      {/*  */}
      <div className='border-b border-custom-gray'>
        <div className='container flex items-center justify-center sm:justify-start'>
          {['Đặt lịch', 'Thông tin'].map((item, index) => (
            <Tab key={index} isActive={activeTab === index} onChange={() => setActiveTab(index)}>
              {item}
            </Tab>
          ))}
        </div>
      </div>

      {/*  */}
      <div className='container flex flex-col items-start gap-8 py-20 lg:flex-row'>
        <div className='w-full lg:w-[68%]'>
          {activeTab === 0 ? (
            <>
              <Table />
            </>
          ) : (
            <>
              <CourtDetail />
            </>
          )}
        </div>

        <div className='w-full lg:w-[32%]'>
          <BillSummaryEmpty />
        </div>
      </div>
    </div>
  )
}

export default Booking
