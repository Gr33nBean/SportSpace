import React from 'react'

import MemberByTeam from '../MemberByTeam'

import { message } from './constants'

const OurTeam = () => {
  return (
    <div>
      <p className='text-center font-Inter text-3xl font-semibold tracking-tighter text-secondary'>{message.TITLE}</p>
      <section>
        <MemberByTeam />
      </section>
    </div>
  )
}

export default OurTeam
