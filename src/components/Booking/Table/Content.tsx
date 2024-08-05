import React from 'react'

import { IBusinessCourt, ISlot } from '@/interface/court'

import { BodyCell, Cell, HeaderCell, rowHeight, splitCell } from './Cell'

const Content = ({
  businessCourt,
  cellWidth,
  onSelectSlot,
}: {
  businessCourt: IBusinessCourt
  cellWidth: number
  onSelectSlot: (slot: ISlot) => void
}) => {
  return (
    <>
      {/* First row */}
      <div
        className='sticky top-0 grid'
        style={{
          gridTemplateColumns: `repeat(${businessCourt.slots.length}, minmax(0, 1fr))`,
          minWidth: `${(businessCourt.slots.length * cellWidth) / splitCell}px`,
        }}
      >
        {businessCourt.slots.map((slot, index, arr) => {
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
      {businessCourt.courts.map((item) => {
        const courtId = item.id
        return (
          <div
            key={item.id}
            className='grid items-center overflow-hidden border-b border-gray-300 last:border-b-0'
            style={{
              gridTemplateColumns: `repeat(${businessCourt.slots.length}, minmax(0, 1fr))`,
              minWidth: `${(businessCourt.slots.length * cellWidth) / splitCell}px`,
              height: rowHeight + 'px',
            }}
          >
            {businessCourt.slots.map((slot) => {
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
    </>
  )
}

export default Content

function removeSecond(time: string) {
  return time.split(':')[0] + ':' + time.split(':')[1]
}
