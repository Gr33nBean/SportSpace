import React from 'react'

import Banner from '@/components/Home/Banner'
import OutstandingCourtList from '@/components/Home/OutstandingCourtList'
import RunningText from '@/components/Home/RunningText'

const Home = () => {
  return (
    <div className='flex min-h-[90vh] flex-col'>
      <Banner />
      <RunningText />
      <OutstandingCourtList />
    </div>
  )
}

export default Home
