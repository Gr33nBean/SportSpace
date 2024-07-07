import React from 'react'

import Banner from '@/components/Home/Banner'
import RunningText from '@/components/Home/RunningText'

const Home = () => {
  return (
    <div className='flex min-h-[90vh] flex-col'>
      <Banner />
      <RunningText />
    </div>
  )
}

export default Home
