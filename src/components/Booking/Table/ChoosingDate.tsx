import React from 'react'
import { Calendar } from 'lucide-react'

const ChoosingDate = ({ choosingDate, handleChange }: { choosingDate: string; handleChange: (date: Date) => void }) => {
  return (
    <div className='flex flex-1 items-center justify-center rounded-full bg-[#D9D9D9] bg-opacity-40 text-black'>
      <label className='relative flex items-center gap-2 p-2'>
        <Calendar size={20} />
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
