import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ChoosingDate = ({ choosingDate, handleChange }: { choosingDate: string; handleChange: (date: Date) => void }) => {
  const handleDesIns = (isIns: boolean) => {
    const date = convertFomartDateToDate(choosingDate)
    if (isIns) {
      date.setDate(date.getDate() + 1)
    } else {
      date.setDate(date.getDate() - 1)
    }
    handleChange(date)
  }

  return (
    <div className='flex flex-1 items-center justify-center rounded-full bg-[#D9D9D9] text-black'>
      <button
        className='block border-r border-white p-2 pr-1 sm:hidden md:!block'
        onClick={() => {
          handleDesIns(false)
        }}
      >
        <ChevronLeft size={20} />
      </button>
      <label className='relative flex-1 p-2'>
        <p className='w-full text-center text-sm font-bold'>{choosingDate}</p>
        <input
          value={formatForInput(choosingDate)}
          onChange={(e) => {
            handleChange(new Date(e.target.value))
          }}
          type='date'
          className='absolute bottom-0 left-0 right-0 top-0 z-0 overflow-hidden opacity-0'
        />
      </label>
      <button
        className='block border-l border-white p-2 pl-1 sm:hidden md:!block'
        onClick={() => {
          handleDesIns(true)
        }}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

export default ChoosingDate

export function formatDate(value: string | Date) {
  // format dd/mm/yyyy
  const date = new Date(value)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return day + '/' + month + '/' + year
}

function convertFomartDateToDate(value: string) {
  const [day, month, year] = value.split('/')
  return new Date(+year, +month - 1, +day)
}

function formatForInput(value: string) {
  const [day, month, year] = value.split('/')
  return year + '-' + month + '-' + day
}
