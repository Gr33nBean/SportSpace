import React from 'react'

import WhatFor from '@/components/Business/WhatFor'
import WhyFor from '@/components/Business/WhyFor'
import BaseCarousel from '@/components/Common/Carousel/BaseCarousel'

const banner_images = [
  'https://business.courtsite.my/images/pricing_plans_v2.png',
  'https://business.courtsite.my/images/custom_pricing.svg',
  'https://business.courtsite.my/images/cover.jpg',
]

const Business = () => {
  return (
    <div>
      <BaseCarousel images={banner_images} autoPlay interval={2000} />
      <WhatFor />
      <WhyFor />
    </div>
  )
}

export default Business
