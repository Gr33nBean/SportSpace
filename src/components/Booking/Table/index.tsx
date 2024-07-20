import React from 'react'
import { CalendarPlus } from 'lucide-react'
import Slider from 'rc-slider'

import { getCourt } from '@/config/api/court'
import { useFetch } from '@/hooks/api-hooks'
import { IBusiness } from '@/interface/business'
import { ICourt, ISlot } from '@/interface/court'

import { BodyCell, Cell, cellState, courtWidth, HeaderCell, rowHeight, splitCell } from './Cell'
import ChoosingDate, { formatDate } from './ChoosingDate'

import 'rc-slider/assets/index.css'
import './style.css'

const time = [
  { start: 6, end: 7, price: 20000 },
  { start: 7, end: 8, price: 20000 },
  { start: 8, end: 9, price: 20000 },
  { start: 9, end: 10, price: 20000 },
  { start: 10, end: 11, price: 20000 },
  { start: 11, end: 12, price: 20000 },
  { start: 12, end: 13, price: 20000 },
  { start: 13, end: 14, price: 20000 },
]

type TableProps = {
  business: IBusiness
  onSelectSlot: (slot: ISlot) => void
  choosingDate: string
  setChoosingDate: React.Dispatch<React.SetStateAction<string>>
}

const Table = (props: TableProps) => {
  const { business, onSelectSlot, choosingDate, setChoosingDate } = props

  const [cellWidth, setCellWidth] = React.useState(200)

  const handleChoosingDate = (date: Date) => {
    setChoosingDate(formatDate(date))
  }

  const { slug } = business || {}
  const { data, isLoading } = useFetch<ICourt[]>(getCourt('0d41ec0d-b114-4c06-a021-87fecfbc91f2', slug))

  if (isLoading) return null

  const courts = data || []

  return (
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

      <div className='relative flex max-h-[75vh] w-full items-start overflow-auto'>
        <>
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
              {courts.map((item, index) => (
                <BodyCell key={index} className='border-b last:border-0'>
                  <p className='text-base font-bold'>{item.name}</p>
                </BodyCell>
              ))}
            </div>
          </div>

          <div
            className='sticky top-0'
            style={{
              width: 100 - courtWidth + '%',
            }}
          >
            <div
              className='sticky top-0 grid'
              style={{
                gridTemplateColumns: `repeat(${time.length}, minmax(0, 1fr))`,
                minWidth: `${time.length * cellWidth}px`,
              }}
            >
              {time.map((item, index) => (
                <HeaderCell key={index} className='w-full last:border-r-0'>
                  <p className='text-center text-sm font-bold'>
                    {format(item.start)} {cellWidth > 100 && '-'} {format(item.end)}
                  </p>
                </HeaderCell>
              ))}
            </div>

            {courts.map((item, index) => {
              const { slots, id } = item
              return (
                <div
                  key={index}
                  className='grid items-center overflow-hidden border-b border-gray-300 last:border-b-0'
                  style={{
                    gridTemplateColumns: `repeat(${time.length}, minmax(0, 1fr))`,
                    minWidth: `${time.length * cellWidth}px`,
                    height: rowHeight + 'px',
                  }}
                >
                  {slots.map((slot, i) => {
                    slot.id = `index-${i}-${id}`

                    return (
                      <BodyCell key={i} className='border-r last:border-r-0'>
                        <div
                          onClick={() => onSelectSlot(slot)}
                          className='grid size-full items-stretch'
                          style={{
                            gridTemplateColumns: `repeat(${splitCell}, minmax(0, 1fr))`,
                          }}
                        >
                          {[...Array(splitCell)].map((_, x) => (
                            <Cell
                              key={x}
                              state={slot.status === 0 ? 'available' : 'busy'}
                              className='w-full border-r border-gray-300 last:border-r-0'
                            />
                          ))}
                        </div>
                      </BodyCell>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </>
      </div>
    </div>
  )
}

export default Table

function format(time: number) {
  return time.toString().padStart(2, '0') + ':00'
}
