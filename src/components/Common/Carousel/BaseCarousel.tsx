'use client'
import Image from 'next/image'

import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
interface BaseCarouselProps {
  images: string[]
  className?: string
}

const BaseCarousel = (props: BaseCarouselProps) => {
  const { className, images } = props

  return (
    <Carousel className={className}>
      {images.map((image, index) => (
        <Image key={index} alt='banner' width={600} height={400} src={image} />
      ))}
    </Carousel>
  )
}

export default BaseCarousel
