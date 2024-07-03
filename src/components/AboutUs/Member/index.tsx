import Image from 'next/image'

import React from 'react'

type MemberProps = {
  data: {
    image: string
    name: string
    description: string
  }
}

const Member = (props: MemberProps) => {
  const { data } = props
  return (
    <div className='m-2 flex w-64 flex-col items-center justify-center gap-5 px-2 pb-10 pt-4'>
      <Image
        src={data.image}
        height={170}
        width={170}
        className='aspect-square rounded-full object-cover'
        alt='Picture of the author'
      />
      <div className='flex flex-col text-center'>
        <span className='font-Inter text-lg font-bold text-primary'>{data.name}​</span>
        <p className='font-Inter text-lg font-normal text-primary'>{data.description}​</p>
      </div>
    </div>
  )
}

export default Member
