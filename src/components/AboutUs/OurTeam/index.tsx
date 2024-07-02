import React from 'react'
import MemberByTeam from '../MemberByTeam'
import { message } from './constants'

const OurTeam = () => {
  return (
    <div>
        <p className='text-secondary tracking-tighter text-center font-Inter font-semibold text-3xl'>{message.TITLE}</p>
        <section>
            <MemberByTeam />
        </section>
    </div>
  )
}

export default OurTeam