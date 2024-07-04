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
    <Carousel className={className} {...rest} showArrows={false} showIndicators>
      {images.map((image, index) => (
        <Image key={index} width={400} height={100} alt='banner' src={image} className='h-full w-full object-cover' />
      ))}
    </Carousel>
  )
}

export default BaseCarousel
