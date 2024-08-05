import React from 'react'
import { CalendarPlus } from 'lucide-react'
import Slider from 'rc-slider'
import ScrollContainer from 'react-indiana-drag-scroll'

import { getBookingCourts } from '@/config/api/bookingCourt'
import { useFetch } from '@/hooks/api-hooks'
import { IBusiness } from '@/interface/business'
import { IBusinessCourt, ISlot } from '@/interface/court'

import { BodyCell, cellState, courtWidth, HeaderCell } from './Cell'
import ChoosingDate, { formatDate } from './ChoosingDate'
import Content from './Content'

import 'rc-slider/assets/index.css'
import './style.css'

type TableProps = {
  businessCourt?: IBusinessCourt
  business: IBusiness
  onSelectSlot: (slot: ISlot) => void
  choosingDate: string
  setChoosingDate: React.Dispatch<React.SetStateAction<string>>
}

const Table = ({ businessCourt, business, onSelectSlot, choosingDate, setChoosingDate }: TableProps) => {
  const [cellWidth, setCellWidth] = React.useState(200)

  const handleChoosingDate = (date: Date) => {
    setChoosingDate(formatDate(date))
  }

  const { data: bookingCourt } = useFetch<IBusinessCourt>(
    getBookingCourts(business?.slug ?? '', convertDateToISO(choosingDate))
  )

  console.log(bookingCourt)

  if (!businessCourt) return <div className=''></div>

  return (
    <>
      {businessCourt.courts?.length ? (
        <>
          <div className='w-full overflow-hidden rounded-[10px] border border-gray-300'>
            <div className='flex flex-col items-center gap-2 border-b border-gray-300 px-2 py-6 sm:flex-row sm:px-8'>
              <div className='flex w-full flex-1 items-center gap-2'>
                <div className='rounded-full bg-secondary p-3 text-white'>
                  <CalendarPlus size={20} />
                </div>
                <div className='max-sm:flex-1'>
                  <p className='text-sm font-bold sm:text-base'>Chọn sân và thời gian</p>
                  <div className='pt-1'>
                    <Slider
                      min={50}
                      max={400}
                      value={cellWidth}
                      onChange={(value) => setCellWidth(value as number)}
                      step={10}
                      styles={{
                        handle: { background: '#26E8A2', borderColor: '#274A3D', touchAction: 'none' },
                        rail: { background: '#8E8E8E' },
                        track: { background: '#26E8A2' },
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className='flex flex-row flex-wrap justify-between gap-2 max-sm:w-full max-sm:pt-2 sm:flex-col md:flex-row md:items-center md:gap-3'>
                {cellState.map((item, index) => (
                  <div key={index} className='flex min-w-fit items-center gap-1 text-sm sm:gap-2'>
                    <span
                      className='size-4 border md:size-6'
                      style={{ background: item.color, borderColor: item.color.slice(0, 7) }}
                    ></span>
                    {item.label}
                  </div>
                ))}
              </div>

              <div className='w-full pt-2 sm:hidden'>
                <ChoosingDate choosingDate={choosingDate} handleChange={handleChoosingDate} />
              </div>
            </div>

            <ScrollContainer
              hideScrollbars={false}
              className='relative flex max-h-[75vh] w-full items-start overflow-auto'
            >
              {/* First column */}
              <div
                className='sticky left-0 top-0 z-10 h-fit bg-white'
                style={{
                  width: courtWidth + '%',
                }}
              >
                <HeaderCell className='sticky top-0 z-10 px-2'>
                  <div className='hidden w-full sm:!block'>
                    <ChoosingDate choosingDate={choosingDate} handleChange={handleChoosingDate} />
                  </div>
                </HeaderCell>

                <div className='border-r border-custom-gray'>
                  {businessCourt.courts.map((item) => (
                    <BodyCell key={item.id} className='border-b last:border-0'>
                      <p className='text-base font-bold'>{item.name}</p>
                    </BodyCell>
                  ))}
                </div>
              </div>

              {/* The others */}
              <div
                className='sticky top-0'
                style={{
                  width: 100 - courtWidth + '%',
                }}
              >
                <Content businessCourt={businessCourt} cellWidth={cellWidth} onSelectSlot={onSelectSlot} />
              </div>
            </ScrollContainer>
          </div>
        </>
      ) : (
        <>
          <p className='text w-full text-center font-bold'>Chưa có sân nào</p>
        </>
      )}
    </>
  )
}

export default Table

function convertDateToISO(dateString: string) {
  // Tách chuỗi ngày tháng theo dấu '/'
  const [day, month, year] = dateString.split('/')

  // Tạo chuỗi định dạng ISO 8601
  const isoDateString = `${year}-${month}-${day}`

  return isoDateString
}
