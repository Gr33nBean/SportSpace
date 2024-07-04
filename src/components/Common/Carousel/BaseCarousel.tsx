'use client'
import Image from 'next/image'

import { Carousel } from 'react-responsive-carousel'

const images = [
  'https://business.courtsite.my/images/custom_pricing.svg',
  'https://business.courtsite.my/images/pricing_plans_v2.png',
  'https://business.courtsite.my/images/cover.jpg',
]

const BaseCarousel = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index} className='flex-1'>
          <Image alt='banner' width={1200} height={400} src={image} />
        </div>
      ))}
    </Carousel>
  )
}

export default BaseCarousel
