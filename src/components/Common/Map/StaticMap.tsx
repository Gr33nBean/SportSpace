import Image from 'next/image'

import React from 'react'

import map from '@/images/png/default-map.png'
import linear_bg from '@/images/png/gradient-bg.png'

const StaticMap = () => {
  return (
    <div className='relative h-full w-full'>
      <Image src={map} alt='default_map' layout='fill' objectFit='cover' className='absolute z-0' />
      <Image src={linear_bg} alt='linear_bg' layout='fill' objectFit='cover' className='absolute z-10' />
    </div>
  )
}

export default StaticMap
