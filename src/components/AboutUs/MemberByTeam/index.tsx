import React from 'react'

import Member from '../Member'

import { data } from './constants'

const MemberByTeam = () => {
  return (
    <div className='container my-7'>
      {data.map((item) => (
        <div key={item.id}>
          <p className='text-center font-Inter text-xl font-semibold tracking-tighter text-primary'>{item.team}​</p>
          <section className='mt-4 flex flex-wrap justify-evenly px-4'>
            {item.members.map((member) => (
              <Member data={member} key={member.id} />
            ))}
          </section>
        </div>
      ))}
    </div>
  )
}

export default MemberByTeam
