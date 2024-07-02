import React from 'react'
import Member from '../Member'
import { data } from './constants'

const MemberByTeam = () => {
  return (
    <div className='container my-7'>
        {data.map(item => (
        <div key={item.id}>
            <p className='font-Inter text-center tracking-tighter text-primary text-2xl font-semibold'>{item.team}​</p>
            <section className='flex justify-evenly px-4 flex-wrap mt-4'>
                {item.members.map(member => <Member data={member} key={member.id}/>)}
            </section>
        </div>
        ))}
    </div>
  )
}

export default MemberByTeam