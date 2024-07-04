import React from 'react'

import WhatFor from '@/components/Business/WhatFor'
import WhyFor from '@/components/Business/WhyFor'
import BaseCarousel from '@/components/Common/Carousel/BaseCarousel'

const Business = () => {
  return (
    <div>
      <BaseCarousel />
      <WhatFor />
      <WhyFor />
    </div>
  )
}

export default Business
