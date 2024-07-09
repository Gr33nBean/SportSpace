import React from 'react'

import Banner from '@/components/Home/Banner'
import { Introduction } from '@/components/Home/Introduction'
import OutstandingCourtList from '@/components/Home/OutstandingCourtList'
import Payment from '@/components/Home/Payment'
import RunningText from '@/components/Home/RunningText'

const Home = () => {
  return (
    <div>
      <Banner />
      <RunningText />
      <Introduction />
      <Payment />
      <OutstandingCourtList />
    </div>
  )
}

export default Home
