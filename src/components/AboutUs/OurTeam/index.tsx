import React from 'react'

import MemberByTeam from '../MemberByTeam'

import { message } from './constants'

const OurTeam = () => {
  return (
    <div className='container bg-light-gray py-10'>
      <p className='text-center font-Inter text-2xl font-semibold tracking-tighter text-secondary'>{message.TITLE}</p>
      <section>
        <MemberByTeam />
      </section>
    </div>
  )
}

export default OurTeam
