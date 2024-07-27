import React from 'react'
import { CalendarPlus } from 'lucide-react'
import Slider from 'rc-slider'

import { getCourtsByBusinessSlug } from '@/config/api/court'
import { useFetch } from '@/hooks/api-hooks'
import { IBusiness } from '@/interface/business'
import { IBusinessCourt, ISlot } from '@/interface/court'

import { BodyCell, Cell, cellState, courtWidth, HeaderCell, rowHeight, splitCell } from './Cell'
import ChoosingDate, { formatDate } from './ChoosingDate'

import 'rc-slider/assets/index.css'
import './style.css'

type TableProps = {
  business: IBusiness
  onSelectSlot: (slot: ISlot) => void
  choosingDate: string
  setChoosingDate: React.Dispatch<React.SetStateAction<string>>
}

const Table = ({ business, onSelectSlot, choosingDate, setChoosingDate }: TableProps) => {
  const [cellWidth, setCellWidth] = React.useState(200)

  const { data, isFetching } = useFetch<IBusinessCourt>(getCourtsByBusinessSlug(business?.slug ?? ''))

  const handleChoosingDate = (date: Date) => {
    setChoosingDate(formatDate(date))
  }

  if (!data) return <div className=''></div>

  return (
    <>
      {data.courts?.length ? (
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

            <div className='relative flex max-h-[75vh] w-full items-start overflow-auto'>
              <>
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
                    {data.courts.map((item) => (
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
                  {/* First row */}
                  <div
                    className='sticky top-0 grid'
                    style={{
                      gridTemplateColumns: `repeat(${data.slots.length}, minmax(0, 1fr))`,
                      minWidth: `${(data.slots.length * cellWidth) / splitCell}px`,
                    }}
                  >
                    {data.slots.map((slot, index, arr) => {
                      const start = removeSecond(slot.start)
                      let col = 1
                      let end = ''
                      if (index % splitCell == 0) {
                        if (index + splitCell - 1 <= arr.length - 1) {
                          end = arr[index + splitCell - 1].end
                          col = splitCell
                        } else {
                          end = arr[arr.length - 1].end
                          col = arr.length % splitCell
                        }
                      }
                      if (!end) {
                        return <></>
                      } else {
                        end = removeSecond(end)
                      }

                      return (
                        <HeaderCell key={index} colSpan={col} className={`w-full last:border-r-0`}>
                          <p className='flex flex-wrap justify-center gap-2 text-center text-sm font-bold'>
                            <span>{start}</span>
                            {cellWidth * col > 200 && '-'}
                            <span>{end}</span>
                          </p>
                        </HeaderCell>
                      )
                    })}
                  </div>

                  {/* The others */}
                  {data.courts.map((item) => {
                    const courtId = item.id
                    return (
                      <div
                        key={item.id}
                        className='grid items-center overflow-hidden border-b border-gray-300 last:border-b-0'
                        style={{
                          gridTemplateColumns: `repeat(${data.slots.length}, minmax(0, 1fr))`,
                          minWidth: `${(data.slots.length * cellWidth) / splitCell}px`,
                          height: rowHeight + 'px',
                        }}
                      >
                        {data.slots.map((slot) => {
                          const id = `${courtId}-${slot.slot}`
                          return (
                            <BodyCell key={id} className='border-r last:border-r-0'>
                              <Cell
                                onClick={() => {
                                  onSelectSlot({ ...slot, id })
                                }}
                                state={'available'}
                                className='size-full'
                              />
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

function removeSecond(time: string) {
  return time.split(':')[0] + ':' + time.split(':')[1]
}
