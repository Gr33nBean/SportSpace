import { Calendar, MapPin, Search } from 'lucide-react'

import PrimaryButton from '@/components/Common/Button/PrimaryButton'

const GlobalSearch = () => {
  return (
    <div className='w-full rounded-md border bg-gray-100 py-2 shadow-sm lg:w-auto lg:rounded-full lg:px-2 lg:py-1'>
      <form action='' className='w-full'>
        <div className='flex w-full flex-col items-center gap-3 lg:flex-row'>
          <label
            className='flex w-full flex-1 items-center gap-2 rounded-full p-2 pl-4 lg:p-0 lg:pl-2'
            onClick={(e) => e.stopPropagation()}
          >
            <MapPin size={20} />
            <div className='flex-1'>
              <input
                type='text'
                className='w-full border-none bg-transparent text-base outline-none'
                placeholder='Địa điểm'
              />
            </div>
          </label>
          <span className='hidden text-gray-300 lg:!block'>|</span>
          <div className='flex w-full flex-1 items-center gap-2 p-2 pl-4 lg:p-0'>
            <label className='flex flex-1 items-center gap-2' onClick={(e) => e.stopPropagation()}>
              <Calendar size={20} />
              <div className='flex-1'>
                <input
                  type='date'
                  className='w-full border-none bg-transparent text-base outline-none focus:border-none focus:outline-none'
                />
              </div>
            </label>

            <button className='hidden rounded-full bg-white p-2 px-4 shadow-md lg:!block'>
              <Search size={18} />
            </button>
          </div>

          <div className='w-full px-2 lg:hidden'>
            <PrimaryButton variant='outlined' radius='full' className='w-full lg:hidden'>
              Tìm kiếm
            </PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default GlobalSearch
