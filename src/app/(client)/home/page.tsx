import React from 'react'

import Banner from '@/components/Home/Banner'
import InfinityScroll from '@/components/Home/InfinityScroll'

const Home = () => {
  return (
    <div className='flex h-[90vh] flex-col'>
      <Banner />
      <InfinityScroll />
    </div>
  )
}

export default Home
