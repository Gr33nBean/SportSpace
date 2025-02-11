import React from 'react'
import Marquee from 'react-fast-marquee'

const RunningText = () => {
  return (
    <section className='bg-secondary py-4'>
      <Marquee>
        <RunItem />
        <RunItem />
        <RunItem />
        <RunItem />
        <RunItem />
      </Marquee>
    </section>
  )
}

export default RunningText

function RunItem({ isVisible = true }: { isVisible?: boolean }) {
  return (
    <p
      className='flex flex-nowrap items-center text-xl font-bold uppercase text-white md:text-3xl'
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <span className='whitespace-nowrap px-2'>Website Name</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='size-[20px] md:size-[30px]'
      >
        <path d='m12 8 6-3-6-3v10' />
        <path d='m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12' />
        <path d='m6.49 12.85 11.02 6.3' />
        <path d='M17.51 12.85 6.5 19.15' />
      </svg>
    </p>
  )
}
