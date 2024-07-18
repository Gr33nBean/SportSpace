import React from 'react'

import StaticMap from '../Common/Map/StaticMap'

const GG_MAP_URL = 'https://www.google.com/maps/place'
const address = '263/3 đường Trần Não, Phường Bình An, Quận 2, thành phố Hồ Chí Minh'
const encodedAddress = encodeURIComponent(address)

const CourtMapCard = () => {
  return (
    <a target='_blank' href={`${GG_MAP_URL}/${encodedAddress}`} rel='noopener noreferrer'>
      <div className='relative m-4 h-[15rem] w-[25rem] overflow-hidden rounded-xl hover:cursor-pointer'>
        <StaticMap />
        <div className='absolute bottom-0 left-0 z-10 flex w-full max-w-[20rem] flex-col gap-1 px-4 py-5'>
          <p className='text-lg font-semibold'>Sân cầu lông Hiển Hoa</p>
          <div>
            <p className='text-sm'>263/3 đường Trần Não, Phường Bình An, Quận 2, thành phố Hồ Chí Minh</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default CourtMapCard
