'use client'
import Image from 'next/image'

import { Carousel, CarouselProps } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
export type BaseCarouselProps = {
  images: string[]
  className?: string
} & Partial<CarouselProps>

const BaseCarousel = (props: BaseCarouselProps) => {
  const { className, images, ...rest } = props

  return (
    <Carousel
      className={className}
      {...rest}
      showArrows={false}
      showIndicators
      showThumbs={false}
      showStatus={false}
      infiniteLoop
    >
      {images.map((image, index) => (
        <div key={index} className='min-h-[200px] w-full md:h-[70vh]'>
          <Image fill alt='banner' src={image} className='size-full h-auto object-cover' />
        </div>
      ))}
    </Carousel>
  )
}

export default BaseCarousel
