import { MapPin, Search } from 'lucide-react'

const GlobalSearch = () => {
  return (
    <div className='hidden rounded-full border bg-gray-100 px-2 py-1.5 shadow-md md:block'>
      <form action=''>
        <div className='flex items-center gap-3'>
          <div className='flex flex-1 items-center gap-4'>
            <MapPin />
            <input type='text' className='w-3/4 border-none bg-transparent outline-none' placeholder='Địa điểm' />
          </div>
          <span className='text-gray-300'>|</span>
          <div className='flex flex-1 items-center justify-between'>
            <input type='date' className='bg-transparent' />
            <button className='rounded-full bg-white px-4 py-2 shadow-md'>
              <Search />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default GlobalSearch
